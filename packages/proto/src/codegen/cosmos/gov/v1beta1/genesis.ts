import { Deposit, DepositAmino, DepositSDKType, Vote, VoteAmino, VoteSDKType, Proposal, ProposalAmino, ProposalSDKType, DepositParams, DepositParamsAmino, DepositParamsSDKType, VotingParams, VotingParamsAmino, VotingParamsSDKType, TallyParams, TallyParamsAmino, TallyParamsSDKType } from "./gov.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial } from "../../../helpers.js";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  startingProposalId: bigint;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /** params defines all the paramaters of related to deposit. */
  depositParams: DepositParams;
  /** params defines all the paramaters of related to voting. */
  votingParams: VotingParams;
  /** params defines all the paramaters of related to tally. */
  tallyParams: TallyParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateAmino {
  /** starting_proposal_id is the ID of the starting proposal. */
  starting_proposal_id: string;
  /** deposits defines all the deposits present at genesis. */
  deposits: DepositAmino[];
  /** votes defines all the votes present at genesis. */
  votes: VoteAmino[];
  /** proposals defines all the proposals present at genesis. */
  proposals: ProposalAmino[];
  /** params defines all the paramaters of related to deposit. */
  deposit_params?: DepositParamsAmino;
  /** params defines all the paramaters of related to voting. */
  voting_params?: VotingParamsAmino;
  /** params defines all the paramaters of related to tally. */
  tally_params?: TallyParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState defines the gov module's genesis state. */
export interface GenesisStateSDKType {
  starting_proposal_id: bigint;
  deposits: DepositSDKType[];
  votes: VoteSDKType[];
  proposals: ProposalSDKType[];
  deposit_params: DepositParamsSDKType;
  voting_params: VotingParamsSDKType;
  tally_params: TallyParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: DepositParams.fromPartial({}),
    votingParams: VotingParams.fromPartial({}),
    tallyParams: TallyParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.gov.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startingProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.startingProposalId = object.startingProposalId !== undefined && object.startingProposalId !== null ? BigInt(object.startingProposalId.toString()) : BigInt(0);
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    message.depositParams = DepositParams.fromPartial(object.depositParams ?? {});
    message.votingParams = VotingParams.fromPartial(object.votingParams ?? {});
    message.tallyParams = TallyParams.fromPartial(object.tallyParams ?? {});
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      startingProposalId: BigInt(object.starting_proposal_id),
      deposits: Array.isArray(object?.deposits) ? object.deposits.map((e: any) => Deposit.fromAmino(e)) : [],
      votes: Array.isArray(object?.votes) ? object.votes.map((e: any) => Vote.fromAmino(e)) : [],
      proposals: Array.isArray(object?.proposals) ? object.proposals.map((e: any) => Proposal.fromAmino(e)) : [],
      depositParams: object?.deposit_params ? DepositParams.fromAmino(object.deposit_params) : DepositParams.fromPartial({}),
      votingParams: object?.voting_params ? VotingParams.fromAmino(object.voting_params) : VotingParams.fromPartial({}),
      tallyParams: object?.tally_params ? TallyParams.fromAmino(object.tally_params) : TallyParams.fromPartial({})
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.starting_proposal_id = message.startingProposalId ? message.startingProposalId.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = [];
    }
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/cosmos.gov.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};