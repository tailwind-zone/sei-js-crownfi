import { OrderEntry, OrderEntryAmino, OrderEntrySDKType } from "./order_entry.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { Decimal } from "@cosmjs/math";
import { DeepPartial } from "../../../helpers.js";
export interface LongBook {
  price: string;
  entry?: OrderEntry;
}
export interface LongBookProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.LongBook";
  value: Uint8Array;
}
export interface LongBookAmino {
  price: string;
  entry?: OrderEntryAmino;
}
export interface LongBookAminoMsg {
  type: "/seiprotocol.seichain.dex.LongBook";
  value: LongBookAmino;
}
export interface LongBookSDKType {
  price: string;
  entry?: OrderEntrySDKType;
}
function createBaseLongBook(): LongBook {
  return {
    price: "",
    entry: undefined
  };
}
export const LongBook = {
  typeUrl: "/seiprotocol.seichain.dex.LongBook",
  encode(message: LongBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.entry !== undefined) {
      OrderEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LongBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongBook();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.entry = OrderEntry.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<LongBook>): LongBook {
    const message = createBaseLongBook();
    message.price = object.price ?? "";
    message.entry = OrderEntry.fromPartial(object.entry ?? {});
    return message;
  },
  fromAmino(object: LongBookAmino): LongBook {
    return {
      price: object.price,
      entry: object?.entry ? OrderEntry.fromAmino(object.entry) : OrderEntry.fromPartial({})
    };
  },
  toAmino(message: LongBook): LongBookAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.entry = message.entry ? OrderEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: LongBookAminoMsg): LongBook {
    return LongBook.fromAmino(object.value);
  },
  fromProtoMsg(message: LongBookProtoMsg): LongBook {
    return LongBook.decode(message.value);
  },
  toProto(message: LongBook): Uint8Array {
    return LongBook.encode(message).finish();
  },
  toProtoMsg(message: LongBook): LongBookProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.LongBook",
      value: LongBook.encode(message).finish()
    };
  }
};