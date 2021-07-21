// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get ethBalance(): BigInt | null {
    let value = this.get("ethBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ethBalance(value: BigInt | null) {
    if (value === null) {
      this.unset("ethBalance");
    } else {
      this.set("ethBalance", Value.fromBigInt(value as BigInt));
    }
  }

  get ethReservedBalance(): BigInt | null {
    let value = this.get("ethReservedBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set ethReservedBalance(value: BigInt | null) {
    if (value === null) {
      this.unset("ethReservedBalance");
    } else {
      this.set("ethReservedBalance", Value.fromBigInt(value as BigInt));
    }
  }

  get shareReservedBalances(): Array<string> {
    let value = this.get("shareReservedBalances");
    return value.toStringArray();
  }

  set shareReservedBalances(value: Array<string>) {
    this.set("shareReservedBalances", Value.fromStringArray(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt | null {
    let value = this.get("totalSupply");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalSupply(value: BigInt | null) {
    if (value === null) {
      this.unset("totalSupply");
    } else {
      this.set("totalSupply", Value.fromBigInt(value as BigInt));
    }
  }

  get erc721ContractAddress(): Bytes | null {
    let value = this.get("erc721ContractAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set erc721ContractAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("erc721ContractAddress");
    } else {
      this.set("erc721ContractAddress", Value.fromBytes(value as Bytes));
    }
  }

  get erc721TokenId(): BigInt | null {
    let value = this.get("erc721TokenId");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set erc721TokenId(value: BigInt | null) {
    if (value === null) {
      this.unset("erc721TokenId");
    } else {
      this.set("erc721TokenId", Value.fromBigInt(value as BigInt));
    }
  }

  get tokenURI(): string | null {
    let value = this.get("tokenURI");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tokenURI(value: string | null) {
    if (value === null) {
      this.unset("tokenURI");
    } else {
      this.set("tokenURI", Value.fromString(value as string));
    }
  }

  get deposited(): boolean {
    let value = this.get("deposited");
    return value.toBoolean();
  }

  set deposited(value: boolean) {
    this.set("deposited", Value.fromBoolean(value));
  }

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
  }

  get orders(): Array<string> | null {
    let value = this.get("orders");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set orders(value: Array<string> | null) {
    if (value === null) {
      this.unset("orders");
    } else {
      this.set("orders", Value.fromStringArray(value as Array<string>));
    }
  }

  get trades(): Array<string> | null {
    let value = this.get("trades");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set trades(value: Array<string> | null) {
    if (value === null) {
      this.unset("trades");
    } else {
      this.set("trades", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Balance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Balance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Balance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Balance", id.toString(), this);
  }

  static load(id: string): Balance | null {
    return store.get("Balance", id) as Balance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class ShareReservedBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save ShareReservedBalance entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ShareReservedBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ShareReservedBalance", id.toString(), this);
  }

  static load(id: string): ShareReservedBalance | null {
    return store.get("ShareReservedBalance", id) as ShareReservedBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }
}

export class Order extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Order entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Order entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Order", id.toString(), this);
  }

  static load(id: string): Order | null {
    return store.get("Order", id) as Order | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get account(): string {
    let value = this.get("account");
    return value.toString();
  }

  set account(value: string) {
    this.set("account", Value.fromString(value));
  }

  get side(): string | null {
    let value = this.get("side");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set side(value: string | null) {
    if (value === null) {
      this.unset("side");
    } else {
      this.set("side", Value.fromString(value as string));
    }
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get filled(): BigInt | null {
    let value = this.get("filled");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set filled(value: BigInt | null) {
    if (value === null) {
      this.unset("filled");
    } else {
      this.set("filled", Value.fromBigInt(value as BigInt));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get removed(): boolean {
    let value = this.get("removed");
    return value.toBoolean();
  }

  set removed(value: boolean) {
    this.set("removed", Value.fromBoolean(value));
  }

  get fullyExecuted(): boolean {
    let value = this.get("fullyExecuted");
    return value.toBoolean();
  }

  set fullyExecuted(value: boolean) {
    this.set("fullyExecuted", Value.fromBoolean(value));
  }
}

export class Trade extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Trade entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Trade entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Trade", id.toString(), this);
  }

  static load(id: string): Trade | null {
    return store.get("Trade", id) as Trade | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get order(): string {
    let value = this.get("order");
    return value.toString();
  }

  set order(value: string) {
    this.set("order", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get trader1(): string {
    let value = this.get("trader1");
    return value.toString();
  }

  set trader1(value: string) {
    this.set("trader1", Value.fromString(value));
  }

  get trader2(): string {
    let value = this.get("trader2");
    return value.toString();
  }

  set trader2(value: string) {
    this.set("trader2", Value.fromString(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get date(): BigInt | null {
    let value = this.get("date");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set date(value: BigInt | null) {
    if (value === null) {
      this.unset("date");
    } else {
      this.set("date", Value.fromBigInt(value as BigInt));
    }
  }
}
