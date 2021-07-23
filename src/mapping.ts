import { BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import {
  TransferSingle,
  DepositNft,
  WithdrawNft
} from "../generated/Contract/Contract"
import {
  EthBalanceChange,
  EthReservedBalanceChange,
  NewTrade,
  OrderRemoval,
  OrderUpsert,
  SharesReservedBalanceChange
} from "../generated/DexContract/Contract"
import {
  Account,
  Token,
  Balance,
  ShareReservedBalance,
  Order,
  Trade
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

function fetchSharesReservedBalance(token: Token, account: Account): ShareReservedBalance {
  let balanceid = token.id.concat('-').concat(account.id)
  let balance = ShareReservedBalance.load(balanceid)
  if (balance == null) {
    balance = new ShareReservedBalance(balanceid)
    balance.token = token.id
    balance.account = account.id
    balance.value = BIGINT_ZERO
  }
  return balance as ShareReservedBalance
}

function fetchOrder(id: BigInt): Order {
  let orderid = id.toHex()
  let order = Order.load(orderid)
  if (order == null) {
    order = new Order(orderid)
    log.info('Order created: {}', [
      orderid.toString(),
    ])
    order.removed = false
    order.fullyExecuted = false
    order.save()
  }
  return order as Order
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

export function handleOrderUpsert(event: OrderUpsert): void {
  log.info('OrderUpsert event handler : {}', [
    event.params.orderId.toString(),
  ])
  let order = fetchOrder(event.params.orderId)
  let token = fetchToken(event.params.tokenId)
  order.token = token.id
  let trader = fetchAccount(event.params.trader)
  order.account = trader.id
  if (event.params.side === 0) {
    order.side = 'Buy'
  } else if (event.params.side === 1) {
    order.side = 'Sell'
  }
  order.price = event.params.price
  order.amount = event.params.amount
  order.filled = event.params.filled
  order.timestamp = event.params.timestamp
  if (order.amount === order.filled) {
    order.fullyExecuted = true
  }
  order.save()
}

export function handleOrderRemoval(event: OrderRemoval): void {
  log.info('OrderRemoval event handler: {}', [
    event.params.orderId.toString(),
  ])
  let order = fetchOrder(event.params.orderId)
  order.removed = true
  order.save()
}

export function handleNewTrade(event: NewTrade): void {
  log.info('NewTrade event handler: {}', [
    event.params.tradeId.toString(),
  ])

  let tradeId = event.params.tradeId.toHex()
  let trade = new Trade(tradeId)

  let order = fetchOrder(event.params.orderId)
  trade.order = order.id

  let token = fetchToken(event.params.tokenId)
  trade.token = token.id

  let trader1 = fetchAccount(event.params.trader1)
  trade.trader1 = trader1.id

  let trader2 = fetchAccount(event.params.trader2)
  trade.trader2 = trader2.id

  trade.price = event.params.price
  trade.amount = event.params.amount
  trade.date = event.params.date

  trade.save()
}

export function handleEthBalanceChange(event: EthBalanceChange): void {
  log.info('EthBalanceChange event handler for account: {}', [
    event.params.account.toHexString(),
  ])
  let account = fetchAccount(event.params.account)
  account.ethBalance = event.params.balance
  account.save()
}

export function handleEthReservedBalanceChange(event: EthReservedBalanceChange): void {
  log.info('EthReservedBalanceChange event handler for account: {}', [
    event.params.account.toHexString(),
  ])
  let account = fetchAccount(event.params.account)
  account.ethReservedBalance = event.params.balance
  account.save()
}

export function handleSharesReservedBalanceChange(event: SharesReservedBalanceChange): void {
  log.info('SharesReservedBalanceChange event handler for account: {}', [
    event.params.account.toHexString(),
  ])
  let token = fetchToken(event.params.tokenId)
  let account = fetchAccount(event.params.account)
  let balance = fetchSharesReservedBalance(token, account)
  balance.value = event.params.sharesReservedBalance
  balance.save()
}