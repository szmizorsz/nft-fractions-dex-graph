import { BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import {
  TransferSingle,
  DepositNft,
  WithdrawNft
} from "../generated/Contract/Contract"
import {
  Account,
  Token,
  Balance
} from "../generated/schema"

let BIGINT_ZERO = BigInt.fromI32(0)
const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

function fetchAccount(address: Bytes): Account {
  let id = address.toHex()
  let account = Account.load(id)
  if (account == null) {
    account = new Account(id)
    account.save()
  }
  return account as Account
}

function fetchToken(id: BigInt): Token {
  let tokenid = id.toHex()
  let token = Token.load(tokenid)
  if (token == null) {
    token = new Token(tokenid)
    token.identifier = id
    log.info('Token created: {}', [
      tokenid.toString(),
    ])
    token.save()
  }
  return token as Token
}

function fetchBalance(token: Token, account: Account): Balance {
  let balanceid = token.id.concat('-').concat(account.id)
  let balance = Balance.load(balanceid)
  if (balance == null) {
    balance = new Balance(balanceid)
    balance.token = token.id
    balance.account = account.id
    balance.value = BIGINT_ZERO
  }
  return balance as Balance
}

export function handleTransferSingle(event: TransferSingle): void {
  log.info('TransferSingle event handler: {}', [
    event.params.id.toString(),
  ])
  let from = fetchAccount(event.params.from)
  let to = fetchAccount(event.params.to)
  let token = fetchToken(event.params.id)

  if (from.id != ADDRESS_ZERO) {
    let balance = fetchBalance(token, from)
    balance.value = balance.value.minus(event.params.value)
    balance.save()
  }

  if (to.id != ADDRESS_ZERO) {
    let balance = fetchBalance(token, to)
    balance.value = balance.value.plus(event.params.value)
    balance.save()
  }
}

export function handleDepositNft(event: DepositNft): void {
  log.info('DepositNFt event handler: {}', [
    event.params.erc1155TokenId.toString(),
  ])
  let token = fetchToken(event.params.erc1155TokenId)
  token.totalSupply = event.params.totalFractionsAmount
  token.erc721ContractAddress = event.params.erc721ContractAddress
  token.erc721TokenId = event.params.erc721TokenId
  token.tokenURI = event.params.tokenURI
  token.deposited = true
  token.save()
}

export function handleWithdrawNft(event: WithdrawNft): void {
  log.info('WithdrawNFt event handler: {}', [
    event.params.erc1155TokenId.toString(),
  ])
  let token = fetchToken(event.params.erc1155TokenId)
  token.deposited = false
  token.save()
}

