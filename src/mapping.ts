import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  TransferSingle
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
  }
  account.save()
  return account as Account
}

function fetchToken(id: BigInt): Token {
  let tokenid = id.toHex()
  let token = Token.load(tokenid)
  if (token == null) {
    token = new Token(tokenid)
    token.identifier = id
    token.totalSupply = BIGINT_ZERO
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
  let from = fetchAccount(event.params.from)
  let to = fetchAccount(event.params.to)
  let token = fetchToken(event.params.id)

  if (from.id == ADDRESS_ZERO) {
    token.totalSupply = event.params.value
  } else {
    let balance = fetchBalance(token, from)
    balance.value = balance.value.minus(event.params.value)
    balance.save()
  }

  if (to.id == ADDRESS_ZERO) {
    token.totalSupply = token.totalSupply.minus(event.params.value)
  } else {
    let balance = fetchBalance(token, to)
    balance.value = balance.value.plus(event.params.value)
    balance.save()
  }

  token.save()
}

