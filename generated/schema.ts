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

  get balances(): Array<string> {
    let value = this.get("balances");
    return value.toStringArray();
  }

  set balances(value: Array<string>) {
    this.set("balances", Value.fromStringArray(value));
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
