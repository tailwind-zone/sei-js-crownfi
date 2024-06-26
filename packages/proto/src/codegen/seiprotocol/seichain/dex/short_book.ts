import { OrderEntry, OrderEntryAmino, OrderEntrySDKType } from "./order_entry.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { Decimal } from "@cosmjs/math";
import { DeepPartial } from "../../../helpers.js";
export interface ShortBook {
  price: string;
  entry?: OrderEntry;
}
export interface ShortBookProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.ShortBook";
  value: Uint8Array;
}
export interface ShortBookAmino {
  price: string;
  entry?: OrderEntryAmino;
}
export interface ShortBookAminoMsg {
  type: "/seiprotocol.seichain.dex.ShortBook";
  value: ShortBookAmino;
}
export interface ShortBookSDKType {
  price: string;
  entry?: OrderEntrySDKType;
}
function createBaseShortBook(): ShortBook {
  return {
    price: "",
    entry: undefined
  };
}
export const ShortBook = {
  typeUrl: "/seiprotocol.seichain.dex.ShortBook",
  encode(message: ShortBook, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.entry !== undefined) {
      OrderEntry.encode(message.entry, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShortBook {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShortBook();
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
  fromPartial(object: DeepPartial<ShortBook>): ShortBook {
    const message = createBaseShortBook();
    message.price = object.price ?? "";
    message.entry = OrderEntry.fromPartial(object.entry ?? {});
    return message;
  },
  fromAmino(object: ShortBookAmino): ShortBook {
    return {
      price: object.price,
      entry: object?.entry ? OrderEntry.fromAmino(object.entry) : OrderEntry.fromPartial({})
    };
  },
  toAmino(message: ShortBook): ShortBookAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.entry = message.entry ? OrderEntry.toAmino(message.entry) : undefined;
    return obj;
  },
  fromAminoMsg(object: ShortBookAminoMsg): ShortBook {
    return ShortBook.fromAmino(object.value);
  },
  fromProtoMsg(message: ShortBookProtoMsg): ShortBook {
    return ShortBook.decode(message.value);
  },
  toProto(message: ShortBook): Uint8Array {
    return ShortBook.encode(message).finish();
  },
  toProtoMsg(message: ShortBook): ShortBookProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.ShortBook",
      value: ShortBook.encode(message).finish()
    };
  }
};