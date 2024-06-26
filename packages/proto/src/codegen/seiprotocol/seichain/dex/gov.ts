import { AssetMetadata, AssetMetadataAmino, AssetMetadataSDKType } from "./asset_list.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial } from "../../../helpers.js";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposal {
  title: string;
  description: string;
  assetList: AssetMetadata[];
}
export interface AddAssetMetadataProposalProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal";
  value: Uint8Array;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposalAmino {
  title: string;
  description: string;
  assetList: AssetMetadataAmino[];
}
export interface AddAssetMetadataProposalAminoMsg {
  type: "/seiprotocol.seichain.dex.AddAssetMetadataProposal";
  value: AddAssetMetadataProposalAmino;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface AddAssetMetadataProposalSDKType {
  title: string;
  description: string;
  assetList: AssetMetadataSDKType[];
}
function createBaseAddAssetMetadataProposal(): AddAssetMetadataProposal {
  return {
    title: "",
    description: "",
    assetList: []
  };
}
export const AddAssetMetadataProposal = {
  typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal",
  encode(message: AddAssetMetadataProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.assetList) {
      AssetMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddAssetMetadataProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddAssetMetadataProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.assetList.push(AssetMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<AddAssetMetadataProposal>): AddAssetMetadataProposal {
    const message = createBaseAddAssetMetadataProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: AddAssetMetadataProposalAmino): AddAssetMetadataProposal {
    return {
      title: object.title,
      description: object.description,
      assetList: Array.isArray(object?.assetList) ? object.assetList.map((e: any) => AssetMetadata.fromAmino(e)) : []
    };
  },
  toAmino(message: AddAssetMetadataProposal): AddAssetMetadataProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.assetList) {
      obj.assetList = message.assetList.map(e => e ? AssetMetadata.toAmino(e) : undefined);
    } else {
      obj.assetList = [];
    }
    return obj;
  },
  fromAminoMsg(object: AddAssetMetadataProposalAminoMsg): AddAssetMetadataProposal {
    return AddAssetMetadataProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AddAssetMetadataProposalProtoMsg): AddAssetMetadataProposal {
    return AddAssetMetadataProposal.decode(message.value);
  },
  toProto(message: AddAssetMetadataProposal): Uint8Array {
    return AddAssetMetadataProposal.encode(message).finish();
  },
  toProtoMsg(message: AddAssetMetadataProposal): AddAssetMetadataProposalProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.AddAssetMetadataProposal",
      value: AddAssetMetadataProposal.encode(message).finish()
    };
  }
};