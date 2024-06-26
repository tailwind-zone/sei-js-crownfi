import { Minter, MinterAmino, MinterSDKType } from "./mint.js";
import { BinaryReader, BinaryWriter } from "../../../../binary.js";
import { DeepPartial } from "../../../../helpers.js";
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposal {
  title: string;
  description: string;
  minter?: Minter;
}
export interface UpdateMinterProposalProtoMsg {
  typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal";
  value: Uint8Array;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalAmino {
  title: string;
  description: string;
  minter?: MinterAmino;
}
export interface UpdateMinterProposalAminoMsg {
  type: "/seiprotocol.seichain.mint.UpdateMinterProposal";
  value: UpdateMinterProposalAmino;
}
/**
 * AddAssetMetadataProposal is a gov Content type for adding a new asset
 * to the dex module's asset list.
 */
export interface UpdateMinterProposalSDKType {
  title: string;
  description: string;
  minter?: MinterSDKType;
}
function createBaseUpdateMinterProposal(): UpdateMinterProposal {
  return {
    title: "",
    description: "",
    minter: undefined
  };
}
export const UpdateMinterProposal = {
  typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal",
  encode(message: UpdateMinterProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): UpdateMinterProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateMinterProposal();
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
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<UpdateMinterProposal>): UpdateMinterProposal {
    const message = createBaseUpdateMinterProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.minter = Minter.fromPartial(object.minter ?? {});
    return message;
  },
  fromAmino(object: UpdateMinterProposalAmino): UpdateMinterProposal {
    return {
      title: object.title,
      description: object.description,
      minter: object?.minter ? Minter.fromAmino(object.minter) : Minter.fromPartial({})
    };
  },
  toAmino(message: UpdateMinterProposal): UpdateMinterProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.minter = message.minter ? Minter.toAmino(message.minter) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateMinterProposalAminoMsg): UpdateMinterProposal {
    return UpdateMinterProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateMinterProposalProtoMsg): UpdateMinterProposal {
    return UpdateMinterProposal.decode(message.value);
  },
  toProto(message: UpdateMinterProposal): Uint8Array {
    return UpdateMinterProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateMinterProposal): UpdateMinterProposalProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.mint.UpdateMinterProposal",
      value: UpdateMinterProposal.encode(message).finish()
    };
  }
};