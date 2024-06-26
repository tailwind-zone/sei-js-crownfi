import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial } from "../../../helpers.js";
export interface AssetIBCInfo {
  sourceChannel: string;
  dstChannel: string;
  sourceDenom: string;
  sourceChainID: string;
}
export interface AssetIBCInfoProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo";
  value: Uint8Array;
}
export interface AssetIBCInfoAmino {
  sourceChannel: string;
  dstChannel: string;
  sourceDenom: string;
  sourceChainID: string;
}
export interface AssetIBCInfoAminoMsg {
  type: "/seiprotocol.seichain.dex.AssetIBCInfo";
  value: AssetIBCInfoAmino;
}
export interface AssetIBCInfoSDKType {
  sourceChannel: string;
  dstChannel: string;
  sourceDenom: string;
  sourceChainID: string;
}
export interface AssetMetadata {
  ibcInfo?: AssetIBCInfo;
  /** Ex: cw20, ics20, erc20 */
  typeAsset: string;
  metadata: Metadata;
}
export interface AssetMetadataProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.AssetMetadata";
  value: Uint8Array;
}
export interface AssetMetadataAmino {
  ibcInfo?: AssetIBCInfoAmino;
  /** Ex: cw20, ics20, erc20 */
  type_asset: string;
  metadata?: MetadataAmino;
}
export interface AssetMetadataAminoMsg {
  type: "/seiprotocol.seichain.dex.AssetMetadata";
  value: AssetMetadataAmino;
}
export interface AssetMetadataSDKType {
  ibcInfo?: AssetIBCInfoSDKType;
  type_asset: string;
  metadata: MetadataSDKType;
}
function createBaseAssetIBCInfo(): AssetIBCInfo {
  return {
    sourceChannel: "",
    dstChannel: "",
    sourceDenom: "",
    sourceChainID: ""
  };
}
export const AssetIBCInfo = {
  typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo",
  encode(message: AssetIBCInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceChannel !== "") {
      writer.uint32(10).string(message.sourceChannel);
    }
    if (message.dstChannel !== "") {
      writer.uint32(18).string(message.dstChannel);
    }
    if (message.sourceDenom !== "") {
      writer.uint32(26).string(message.sourceDenom);
    }
    if (message.sourceChainID !== "") {
      writer.uint32(34).string(message.sourceChainID);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetIBCInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetIBCInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceChannel = reader.string();
          break;
        case 2:
          message.dstChannel = reader.string();
          break;
        case 3:
          message.sourceDenom = reader.string();
          break;
        case 4:
          message.sourceChainID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AssetIBCInfo>): AssetIBCInfo {
    const message = createBaseAssetIBCInfo();
    message.sourceChannel = object.sourceChannel ?? "";
    message.dstChannel = object.dstChannel ?? "";
    message.sourceDenom = object.sourceDenom ?? "";
    message.sourceChainID = object.sourceChainID ?? "";
    return message;
  },
  fromAmino(object: AssetIBCInfoAmino): AssetIBCInfo {
    return {
      sourceChannel: object.sourceChannel,
      dstChannel: object.dstChannel,
      sourceDenom: object.sourceDenom,
      sourceChainID: object.sourceChainID
    };
  },
  toAmino(message: AssetIBCInfo): AssetIBCInfoAmino {
    const obj: any = {};
    obj.sourceChannel = message.sourceChannel;
    obj.dstChannel = message.dstChannel;
    obj.sourceDenom = message.sourceDenom;
    obj.sourceChainID = message.sourceChainID;
    return obj;
  },
  fromAminoMsg(object: AssetIBCInfoAminoMsg): AssetIBCInfo {
    return AssetIBCInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetIBCInfoProtoMsg): AssetIBCInfo {
    return AssetIBCInfo.decode(message.value);
  },
  toProto(message: AssetIBCInfo): Uint8Array {
    return AssetIBCInfo.encode(message).finish();
  },
  toProtoMsg(message: AssetIBCInfo): AssetIBCInfoProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.AssetIBCInfo",
      value: AssetIBCInfo.encode(message).finish()
    };
  }
};
function createBaseAssetMetadata(): AssetMetadata {
  return {
    ibcInfo: undefined,
    typeAsset: "",
    metadata: Metadata.fromPartial({})
  };
}
export const AssetMetadata = {
  typeUrl: "/seiprotocol.seichain.dex.AssetMetadata",
  encode(message: AssetMetadata, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ibcInfo !== undefined) {
      AssetIBCInfo.encode(message.ibcInfo, writer.uint32(10).fork()).ldelim();
    }
    if (message.typeAsset !== "") {
      writer.uint32(18).string(message.typeAsset);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AssetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAssetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ibcInfo = AssetIBCInfo.decode(reader, reader.uint32());
          break;
        case 2:
          message.typeAsset = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AssetMetadata>): AssetMetadata {
    const message = createBaseAssetMetadata();
    message.ibcInfo = AssetIBCInfo.fromPartial(object.ibcInfo ?? {});
    message.typeAsset = object.typeAsset ?? "";
    message.metadata = Metadata.fromPartial(object.metadata ?? {});
    return message;
  },
  fromAmino(object: AssetMetadataAmino): AssetMetadata {
    return {
      ibcInfo: object?.ibcInfo ? AssetIBCInfo.fromAmino(object.ibcInfo) : AssetIBCInfo.fromPartial({}),
      typeAsset: object.type_asset,
      metadata: object?.metadata ? Metadata.fromAmino(object.metadata) : Metadata.fromPartial({})
    };
  },
  toAmino(message: AssetMetadata): AssetMetadataAmino {
    const obj: any = {};
    obj.ibcInfo = message.ibcInfo ? AssetIBCInfo.toAmino(message.ibcInfo) : undefined;
    obj.type_asset = message.typeAsset;
    obj.metadata = message.metadata ? Metadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: AssetMetadataAminoMsg): AssetMetadata {
    return AssetMetadata.fromAmino(object.value);
  },
  fromProtoMsg(message: AssetMetadataProtoMsg): AssetMetadata {
    return AssetMetadata.decode(message.value);
  },
  toProto(message: AssetMetadata): Uint8Array {
    return AssetMetadata.encode(message).finish();
  },
  toProtoMsg(message: AssetMetadata): AssetMetadataProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.AssetMetadata",
      value: AssetMetadata.encode(message).finish()
    };
  }
};