import { OracleExchangeRate, OracleExchangeRateAmino, OracleExchangeRateSDKType, PriceSnapshot, PriceSnapshotAmino, PriceSnapshotSDKType, OracleTwap, OracleTwapAmino, OracleTwapSDKType, VotePenaltyCounter, VotePenaltyCounterAmino, VotePenaltyCounterSDKType, Params, ParamsAmino, ParamsSDKType } from "./oracle.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial } from "../../../helpers.js";
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryExchangeRateRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest";
  value: Uint8Array;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestAmino {
  /** denom defines the denomination to query for. */
  denom: string;
}
export interface QueryExchangeRateRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest";
  value: QueryExchangeRateRequestAmino;
}
/** QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC method. */
export interface QueryExchangeRateRequestSDKType {
  denom: string;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /** exchange_rate defines the exchange rate of Sei denominated in various Sei */
  oracleExchangeRate: OracleExchangeRate;
}
export interface QueryExchangeRateResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseAmino {
  /** exchange_rate defines the exchange rate of Sei denominated in various Sei */
  oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface QueryExchangeRateResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse";
  value: QueryExchangeRateResponseAmino;
}
/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponseSDKType {
  oracle_exchange_rate: OracleExchangeRateSDKType;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequest {}
export interface QueryExchangeRatesRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest";
  value: Uint8Array;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestAmino {}
export interface QueryExchangeRatesRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest";
  value: QueryExchangeRatesRequestAmino;
}
/** QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC method. */
export interface QueryExchangeRatesRequestSDKType {}
export interface DenomOracleExchangeRatePair {
  denom: string;
  oracleExchangeRate: OracleExchangeRate;
}
export interface DenomOracleExchangeRatePairProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair";
  value: Uint8Array;
}
export interface DenomOracleExchangeRatePairAmino {
  denom: string;
  oracle_exchange_rate?: OracleExchangeRateAmino;
}
export interface DenomOracleExchangeRatePairAminoMsg {
  type: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair";
  value: DenomOracleExchangeRatePairAmino;
}
export interface DenomOracleExchangeRatePairSDKType {
  denom: string;
  oracle_exchange_rate: OracleExchangeRateSDKType;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  denomOracleExchangeRatePairs: DenomOracleExchangeRatePair[];
}
export interface QueryExchangeRatesResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse";
  value: Uint8Array;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseAmino {
  /** exchange_rates defines a list of the exchange rate for all whitelisted denoms. */
  denom_oracle_exchange_rate_pairs: DenomOracleExchangeRatePairAmino[];
}
export interface QueryExchangeRatesResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse";
  value: QueryExchangeRatesResponseAmino;
}
/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponseSDKType {
  denom_oracle_exchange_rate_pairs: DenomOracleExchangeRatePairSDKType[];
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}
export interface QueryActivesRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest";
  value: Uint8Array;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestAmino {}
export interface QueryActivesRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryActivesRequest";
  value: QueryActivesRequestAmino;
}
/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequestSDKType {}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}
export interface QueryActivesResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse";
  value: Uint8Array;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseAmino {
  /** actives defines a list of the denomination which oracle prices aggreed upon. */
  actives: string[];
}
export interface QueryActivesResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryActivesResponse";
  value: QueryActivesResponseAmino;
}
/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponseSDKType {
  actives: string[];
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequest {}
export interface QueryVoteTargetsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest";
  value: Uint8Array;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestAmino {}
export interface QueryVoteTargetsRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest";
  value: QueryVoteTargetsRequestAmino;
}
/** QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC method. */
export interface QueryVoteTargetsRequestSDKType {}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}
export interface QueryVoteTargetsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse";
  value: Uint8Array;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseAmino {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  vote_targets: string[];
}
export interface QueryVoteTargetsResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse";
  value: QueryVoteTargetsResponseAmino;
}
/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponseSDKType {
  vote_targets: string[];
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequest {}
export interface QueryPriceSnapshotHistoryRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest";
  value: Uint8Array;
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestAmino {}
export interface QueryPriceSnapshotHistoryRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest";
  value: QueryPriceSnapshotHistoryRequestAmino;
}
/** request type for price snapshot history RPC method */
export interface QueryPriceSnapshotHistoryRequestSDKType {}
export interface QueryPriceSnapshotHistoryResponse {
  priceSnapshots: PriceSnapshot[];
}
export interface QueryPriceSnapshotHistoryResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse";
  value: Uint8Array;
}
export interface QueryPriceSnapshotHistoryResponseAmino {
  price_snapshots: PriceSnapshotAmino[];
}
export interface QueryPriceSnapshotHistoryResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse";
  value: QueryPriceSnapshotHistoryResponseAmino;
}
export interface QueryPriceSnapshotHistoryResponseSDKType {
  price_snapshots: PriceSnapshotSDKType[];
}
/** request type for twap RPC method */
export interface QueryTwapsRequest {
  lookbackSeconds: bigint;
}
export interface QueryTwapsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest";
  value: Uint8Array;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestAmino {
  lookback_seconds: string;
}
export interface QueryTwapsRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryTwapsRequest";
  value: QueryTwapsRequestAmino;
}
/** request type for twap RPC method */
export interface QueryTwapsRequestSDKType {
  lookback_seconds: bigint;
}
export interface QueryTwapsResponse {
  oracleTwaps: OracleTwap[];
}
export interface QueryTwapsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse";
  value: Uint8Array;
}
export interface QueryTwapsResponseAmino {
  oracle_twaps: OracleTwapAmino[];
}
export interface QueryTwapsResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryTwapsResponse";
  value: QueryTwapsResponseAmino;
}
export interface QueryTwapsResponseSDKType {
  oracle_twaps: OracleTwapSDKType[];
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryFeederDelegationRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest";
  value: Uint8Array;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryFeederDelegationRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest";
  value: QueryFeederDelegationRequestAmino;
}
/** QueryFeederDelegationRequest is the request type for the Query/FeederDelegation RPC method. */
export interface QueryFeederDelegationRequestSDKType {
  validator_addr: string;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator */
  feederAddr: string;
}
export interface QueryFeederDelegationResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseAmino {
  /** feeder_addr defines the feeder delegation of a validator */
  feeder_addr: string;
}
export interface QueryFeederDelegationResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse";
  value: QueryFeederDelegationResponseAmino;
}
/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponseSDKType {
  feeder_addr: string;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}
export interface QueryVotePenaltyCounterRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest";
  value: Uint8Array;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestAmino {
  /** validator defines the validator address to query for. */
  validator_addr: string;
}
export interface QueryVotePenaltyCounterRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest";
  value: QueryVotePenaltyCounterRequestAmino;
}
/** QueryVotePenaltyCounterRequest is the request type for the Query/MissCounter RPC method. */
export interface QueryVotePenaltyCounterRequestSDKType {
  validator_addr: string;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponse {
  votePenaltyCounter?: VotePenaltyCounter;
}
export interface QueryVotePenaltyCounterResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse";
  value: Uint8Array;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseAmino {
  vote_penalty_counter?: VotePenaltyCounterAmino;
}
export interface QueryVotePenaltyCounterResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse";
  value: QueryVotePenaltyCounterResponseAmino;
}
/**
 * QueryVotePenaltyCounterResponse is response type for the
 * Query/VotePenaltyCounter RPC method.
 */
export interface QueryVotePenaltyCounterResponseSDKType {
  vote_penalty_counter?: VotePenaltyCounterSDKType;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequest {}
export interface QuerySlashWindowRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest";
  value: Uint8Array;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequestAmino {}
export interface QuerySlashWindowRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest";
  value: QuerySlashWindowRequestAmino;
}
/**
 * QuerySlashWindow is the request type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowRequestSDKType {}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponse {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  windowProgress: bigint;
}
export interface QuerySlashWindowResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse";
  value: Uint8Array;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseAmino {
  /**
   * window_progress defines the number of voting periods
   * since the last slashing event would have taken place.
   */
  window_progress: string;
}
export interface QuerySlashWindowResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse";
  value: QuerySlashWindowResponseAmino;
}
/**
 * QuerySlashWindowResponse is response type for the
 * Query/SlashWindow RPC method.
 */
export interface QuerySlashWindowResponseSDKType {
  window_progress: bigint;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/seiprotocol.seichain.oracle.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
function createBaseQueryExchangeRateRequest(): QueryExchangeRateRequest {
  return {
    denom: ""
  };
}
export const QueryExchangeRateRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest",
  encode(message: QueryExchangeRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeRateRequest>): QueryExchangeRateRequest {
    const message = createBaseQueryExchangeRateRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryExchangeRateRequestAmino): QueryExchangeRateRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryExchangeRateRequest): QueryExchangeRateRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateRequestAminoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateRequestProtoMsg): QueryExchangeRateRequest {
    return QueryExchangeRateRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRateRequest): Uint8Array {
    return QueryExchangeRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateRequest): QueryExchangeRateRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateRequest",
      value: QueryExchangeRateRequest.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRateResponse(): QueryExchangeRateResponse {
  return {
    oracleExchangeRate: OracleExchangeRate.fromPartial({})
  };
}
export const QueryExchangeRateResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse",
  encode(message: QueryExchangeRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeRateResponse>): QueryExchangeRateResponse {
    const message = createBaseQueryExchangeRateResponse();
    message.oracleExchangeRate = OracleExchangeRate.fromPartial(object.oracleExchangeRate ?? {});
    return message;
  },
  fromAmino(object: QueryExchangeRateResponseAmino): QueryExchangeRateResponse {
    return {
      oracleExchangeRate: object?.oracle_exchange_rate ? OracleExchangeRate.fromAmino(object.oracle_exchange_rate) : OracleExchangeRate.fromPartial({})
    };
  },
  toAmino(message: QueryExchangeRateResponse): QueryExchangeRateResponseAmino {
    const obj: any = {};
    obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRateResponseAminoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRateResponseProtoMsg): QueryExchangeRateResponse {
    return QueryExchangeRateResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRateResponse): Uint8Array {
    return QueryExchangeRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRateResponse): QueryExchangeRateResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRateResponse",
      value: QueryExchangeRateResponse.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesRequest(): QueryExchangeRatesRequest {
  return {};
}
export const QueryExchangeRatesRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest",
  encode(_: QueryExchangeRatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryExchangeRatesRequest>): QueryExchangeRatesRequest {
    const message = createBaseQueryExchangeRatesRequest();
    return message;
  },
  fromAmino(_: QueryExchangeRatesRequestAmino): QueryExchangeRatesRequest {
    return {};
  },
  toAmino(_: QueryExchangeRatesRequest): QueryExchangeRatesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesRequestAminoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesRequestProtoMsg): QueryExchangeRatesRequest {
    return QueryExchangeRatesRequest.decode(message.value);
  },
  toProto(message: QueryExchangeRatesRequest): Uint8Array {
    return QueryExchangeRatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesRequest): QueryExchangeRatesRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesRequest",
      value: QueryExchangeRatesRequest.encode(message).finish()
    };
  }
};
function createBaseDenomOracleExchangeRatePair(): DenomOracleExchangeRatePair {
  return {
    denom: "",
    oracleExchangeRate: OracleExchangeRate.fromPartial({})
  };
}
export const DenomOracleExchangeRatePair = {
  typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair",
  encode(message: DenomOracleExchangeRatePair, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.oracleExchangeRate !== undefined) {
      OracleExchangeRate.encode(message.oracleExchangeRate, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DenomOracleExchangeRatePair {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenomOracleExchangeRatePair();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.oracleExchangeRate = OracleExchangeRate.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<DenomOracleExchangeRatePair>): DenomOracleExchangeRatePair {
    const message = createBaseDenomOracleExchangeRatePair();
    message.denom = object.denom ?? "";
    message.oracleExchangeRate = OracleExchangeRate.fromPartial(object.oracleExchangeRate ?? {});
    return message;
  },
  fromAmino(object: DenomOracleExchangeRatePairAmino): DenomOracleExchangeRatePair {
    return {
      denom: object.denom,
      oracleExchangeRate: object?.oracle_exchange_rate ? OracleExchangeRate.fromAmino(object.oracle_exchange_rate) : OracleExchangeRate.fromPartial({})
    };
  },
  toAmino(message: DenomOracleExchangeRatePair): DenomOracleExchangeRatePairAmino {
    const obj: any = {};
    obj.denom = message.denom;
    obj.oracle_exchange_rate = message.oracleExchangeRate ? OracleExchangeRate.toAmino(message.oracleExchangeRate) : undefined;
    return obj;
  },
  fromAminoMsg(object: DenomOracleExchangeRatePairAminoMsg): DenomOracleExchangeRatePair {
    return DenomOracleExchangeRatePair.fromAmino(object.value);
  },
  fromProtoMsg(message: DenomOracleExchangeRatePairProtoMsg): DenomOracleExchangeRatePair {
    return DenomOracleExchangeRatePair.decode(message.value);
  },
  toProto(message: DenomOracleExchangeRatePair): Uint8Array {
    return DenomOracleExchangeRatePair.encode(message).finish();
  },
  toProtoMsg(message: DenomOracleExchangeRatePair): DenomOracleExchangeRatePairProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.DenomOracleExchangeRatePair",
      value: DenomOracleExchangeRatePair.encode(message).finish()
    };
  }
};
function createBaseQueryExchangeRatesResponse(): QueryExchangeRatesResponse {
  return {
    denomOracleExchangeRatePairs: []
  };
}
export const QueryExchangeRatesResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse",
  encode(message: QueryExchangeRatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.denomOracleExchangeRatePairs) {
      DenomOracleExchangeRatePair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryExchangeRatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryExchangeRatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomOracleExchangeRatePairs.push(DenomOracleExchangeRatePair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryExchangeRatesResponse>): QueryExchangeRatesResponse {
    const message = createBaseQueryExchangeRatesResponse();
    message.denomOracleExchangeRatePairs = object.denomOracleExchangeRatePairs?.map(e => DenomOracleExchangeRatePair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryExchangeRatesResponseAmino): QueryExchangeRatesResponse {
    return {
      denomOracleExchangeRatePairs: Array.isArray(object?.denom_oracle_exchange_rate_pairs) ? object.denom_oracle_exchange_rate_pairs.map((e: any) => DenomOracleExchangeRatePair.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseAmino {
    const obj: any = {};
    if (message.denomOracleExchangeRatePairs) {
      obj.denom_oracle_exchange_rate_pairs = message.denomOracleExchangeRatePairs.map(e => e ? DenomOracleExchangeRatePair.toAmino(e) : undefined);
    } else {
      obj.denom_oracle_exchange_rate_pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryExchangeRatesResponseAminoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryExchangeRatesResponseProtoMsg): QueryExchangeRatesResponse {
    return QueryExchangeRatesResponse.decode(message.value);
  },
  toProto(message: QueryExchangeRatesResponse): Uint8Array {
    return QueryExchangeRatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryExchangeRatesResponse): QueryExchangeRatesResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryExchangeRatesResponse",
      value: QueryExchangeRatesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryActivesRequest(): QueryActivesRequest {
  return {};
}
export const QueryActivesRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest",
  encode(_: QueryActivesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest {
    const message = createBaseQueryActivesRequest();
    return message;
  },
  fromAmino(_: QueryActivesRequestAmino): QueryActivesRequest {
    return {};
  },
  toAmino(_: QueryActivesRequest): QueryActivesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryActivesRequestAminoMsg): QueryActivesRequest {
    return QueryActivesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesRequestProtoMsg): QueryActivesRequest {
    return QueryActivesRequest.decode(message.value);
  },
  toProto(message: QueryActivesRequest): Uint8Array {
    return QueryActivesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesRequest): QueryActivesRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryActivesRequest",
      value: QueryActivesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryActivesResponse(): QueryActivesResponse {
  return {
    actives: []
  };
}
export const QueryActivesResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse",
  encode(message: QueryActivesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActivesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse {
    const message = createBaseQueryActivesResponse();
    message.actives = object.actives?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryActivesResponseAmino): QueryActivesResponse {
    return {
      actives: Array.isArray(object?.actives) ? object.actives.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryActivesResponse): QueryActivesResponseAmino {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map(e => e);
    } else {
      obj.actives = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryActivesResponseAminoMsg): QueryActivesResponse {
    return QueryActivesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryActivesResponseProtoMsg): QueryActivesResponse {
    return QueryActivesResponse.decode(message.value);
  },
  toProto(message: QueryActivesResponse): Uint8Array {
    return QueryActivesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryActivesResponse): QueryActivesResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryActivesResponse",
      value: QueryActivesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsRequest(): QueryVoteTargetsRequest {
  return {};
}
export const QueryVoteTargetsRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest",
  encode(_: QueryVoteTargetsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryVoteTargetsRequest>): QueryVoteTargetsRequest {
    const message = createBaseQueryVoteTargetsRequest();
    return message;
  },
  fromAmino(_: QueryVoteTargetsRequestAmino): QueryVoteTargetsRequest {
    return {};
  },
  toAmino(_: QueryVoteTargetsRequest): QueryVoteTargetsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsRequestAminoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsRequestProtoMsg): QueryVoteTargetsRequest {
    return QueryVoteTargetsRequest.decode(message.value);
  },
  toProto(message: QueryVoteTargetsRequest): Uint8Array {
    return QueryVoteTargetsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsRequest): QueryVoteTargetsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsRequest",
      value: QueryVoteTargetsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVoteTargetsResponse(): QueryVoteTargetsResponse {
  return {
    voteTargets: []
  };
}
export const QueryVoteTargetsResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse",
  encode(message: QueryVoteTargetsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteTargetsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteTargetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVoteTargetsResponse>): QueryVoteTargetsResponse {
    const message = createBaseQueryVoteTargetsResponse();
    message.voteTargets = object.voteTargets?.map(e => e) || [];
    return message;
  },
  fromAmino(object: QueryVoteTargetsResponseAmino): QueryVoteTargetsResponse {
    return {
      voteTargets: Array.isArray(object?.vote_targets) ? object.vote_targets.map((e: any) => e) : []
    };
  },
  toAmino(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseAmino {
    const obj: any = {};
    if (message.voteTargets) {
      obj.vote_targets = message.voteTargets.map(e => e);
    } else {
      obj.vote_targets = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryVoteTargetsResponseAminoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteTargetsResponseProtoMsg): QueryVoteTargetsResponse {
    return QueryVoteTargetsResponse.decode(message.value);
  },
  toProto(message: QueryVoteTargetsResponse): Uint8Array {
    return QueryVoteTargetsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteTargetsResponse): QueryVoteTargetsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryVoteTargetsResponse",
      value: QueryVoteTargetsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryPriceSnapshotHistoryRequest(): QueryPriceSnapshotHistoryRequest {
  return {};
}
export const QueryPriceSnapshotHistoryRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest",
  encode(_: QueryPriceSnapshotHistoryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryPriceSnapshotHistoryRequest>): QueryPriceSnapshotHistoryRequest {
    const message = createBaseQueryPriceSnapshotHistoryRequest();
    return message;
  },
  fromAmino(_: QueryPriceSnapshotHistoryRequestAmino): QueryPriceSnapshotHistoryRequest {
    return {};
  },
  toAmino(_: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryPriceSnapshotHistoryRequestAminoMsg): QueryPriceSnapshotHistoryRequest {
    return QueryPriceSnapshotHistoryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceSnapshotHistoryRequestProtoMsg): QueryPriceSnapshotHistoryRequest {
    return QueryPriceSnapshotHistoryRequest.decode(message.value);
  },
  toProto(message: QueryPriceSnapshotHistoryRequest): Uint8Array {
    return QueryPriceSnapshotHistoryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceSnapshotHistoryRequest): QueryPriceSnapshotHistoryRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryRequest",
      value: QueryPriceSnapshotHistoryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryPriceSnapshotHistoryResponse(): QueryPriceSnapshotHistoryResponse {
  return {
    priceSnapshots: []
  };
}
export const QueryPriceSnapshotHistoryResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse",
  encode(message: QueryPriceSnapshotHistoryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.priceSnapshots) {
      PriceSnapshot.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryPriceSnapshotHistoryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceSnapshots.push(PriceSnapshot.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryPriceSnapshotHistoryResponse>): QueryPriceSnapshotHistoryResponse {
    const message = createBaseQueryPriceSnapshotHistoryResponse();
    message.priceSnapshots = object.priceSnapshots?.map(e => PriceSnapshot.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryPriceSnapshotHistoryResponseAmino): QueryPriceSnapshotHistoryResponse {
    return {
      priceSnapshots: Array.isArray(object?.price_snapshots) ? object.price_snapshots.map((e: any) => PriceSnapshot.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseAmino {
    const obj: any = {};
    if (message.priceSnapshots) {
      obj.price_snapshots = message.priceSnapshots.map(e => e ? PriceSnapshot.toAmino(e) : undefined);
    } else {
      obj.price_snapshots = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryPriceSnapshotHistoryResponseAminoMsg): QueryPriceSnapshotHistoryResponse {
    return QueryPriceSnapshotHistoryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryPriceSnapshotHistoryResponseProtoMsg): QueryPriceSnapshotHistoryResponse {
    return QueryPriceSnapshotHistoryResponse.decode(message.value);
  },
  toProto(message: QueryPriceSnapshotHistoryResponse): Uint8Array {
    return QueryPriceSnapshotHistoryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryPriceSnapshotHistoryResponse): QueryPriceSnapshotHistoryResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryPriceSnapshotHistoryResponse",
      value: QueryPriceSnapshotHistoryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryTwapsRequest(): QueryTwapsRequest {
  return {
    lookbackSeconds: BigInt(0)
  };
}
export const QueryTwapsRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest",
  encode(message: QueryTwapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.lookbackSeconds !== BigInt(0)) {
      writer.uint32(8).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lookbackSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTwapsRequest>): QueryTwapsRequest {
    const message = createBaseQueryTwapsRequest();
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? BigInt(object.lookbackSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryTwapsRequestAmino): QueryTwapsRequest {
    return {
      lookbackSeconds: BigInt(object.lookback_seconds)
    };
  },
  toAmino(message: QueryTwapsRequest): QueryTwapsRequestAmino {
    const obj: any = {};
    obj.lookback_seconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTwapsRequestAminoMsg): QueryTwapsRequest {
    return QueryTwapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTwapsRequestProtoMsg): QueryTwapsRequest {
    return QueryTwapsRequest.decode(message.value);
  },
  toProto(message: QueryTwapsRequest): Uint8Array {
    return QueryTwapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTwapsRequest): QueryTwapsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsRequest",
      value: QueryTwapsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryTwapsResponse(): QueryTwapsResponse {
  return {
    oracleTwaps: []
  };
}
export const QueryTwapsResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse",
  encode(message: QueryTwapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.oracleTwaps) {
      OracleTwap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTwapsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracleTwaps.push(OracleTwap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryTwapsResponse>): QueryTwapsResponse {
    const message = createBaseQueryTwapsResponse();
    message.oracleTwaps = object.oracleTwaps?.map(e => OracleTwap.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryTwapsResponseAmino): QueryTwapsResponse {
    return {
      oracleTwaps: Array.isArray(object?.oracle_twaps) ? object.oracle_twaps.map((e: any) => OracleTwap.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryTwapsResponse): QueryTwapsResponseAmino {
    const obj: any = {};
    if (message.oracleTwaps) {
      obj.oracle_twaps = message.oracleTwaps.map(e => e ? OracleTwap.toAmino(e) : undefined);
    } else {
      obj.oracle_twaps = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryTwapsResponseAminoMsg): QueryTwapsResponse {
    return QueryTwapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTwapsResponseProtoMsg): QueryTwapsResponse {
    return QueryTwapsResponse.decode(message.value);
  },
  toProto(message: QueryTwapsResponse): Uint8Array {
    return QueryTwapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTwapsResponse): QueryTwapsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryTwapsResponse",
      value: QueryTwapsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationRequest(): QueryFeederDelegationRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryFeederDelegationRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest",
  encode(message: QueryFeederDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegationRequest>): QueryFeederDelegationRequest {
    const message = createBaseQueryFeederDelegationRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationRequestAmino): QueryFeederDelegationRequest {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationRequestAminoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationRequestProtoMsg): QueryFeederDelegationRequest {
    return QueryFeederDelegationRequest.decode(message.value);
  },
  toProto(message: QueryFeederDelegationRequest): Uint8Array {
    return QueryFeederDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationRequest): QueryFeederDelegationRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationRequest",
      value: QueryFeederDelegationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryFeederDelegationResponse(): QueryFeederDelegationResponse {
  return {
    feederAddr: ""
  };
}
export const QueryFeederDelegationResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse",
  encode(message: QueryFeederDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryFeederDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFeederDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryFeederDelegationResponse>): QueryFeederDelegationResponse {
    const message = createBaseQueryFeederDelegationResponse();
    message.feederAddr = object.feederAddr ?? "";
    return message;
  },
  fromAmino(object: QueryFeederDelegationResponseAmino): QueryFeederDelegationResponse {
    return {
      feederAddr: object.feeder_addr
    };
  },
  toAmino(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseAmino {
    const obj: any = {};
    obj.feeder_addr = message.feederAddr;
    return obj;
  },
  fromAminoMsg(object: QueryFeederDelegationResponseAminoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryFeederDelegationResponseProtoMsg): QueryFeederDelegationResponse {
    return QueryFeederDelegationResponse.decode(message.value);
  },
  toProto(message: QueryFeederDelegationResponse): Uint8Array {
    return QueryFeederDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryFeederDelegationResponse): QueryFeederDelegationResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryFeederDelegationResponse",
      value: QueryFeederDelegationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryVotePenaltyCounterRequest(): QueryVotePenaltyCounterRequest {
  return {
    validatorAddr: ""
  };
}
export const QueryVotePenaltyCounterRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest",
  encode(message: QueryVotePenaltyCounterRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotePenaltyCounterRequest>): QueryVotePenaltyCounterRequest {
    const message = createBaseQueryVotePenaltyCounterRequest();
    message.validatorAddr = object.validatorAddr ?? "";
    return message;
  },
  fromAmino(object: QueryVotePenaltyCounterRequestAmino): QueryVotePenaltyCounterRequest {
    return {
      validatorAddr: object.validator_addr
    };
  },
  toAmino(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestAmino {
    const obj: any = {};
    obj.validator_addr = message.validatorAddr;
    return obj;
  },
  fromAminoMsg(object: QueryVotePenaltyCounterRequestAminoMsg): QueryVotePenaltyCounterRequest {
    return QueryVotePenaltyCounterRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePenaltyCounterRequestProtoMsg): QueryVotePenaltyCounterRequest {
    return QueryVotePenaltyCounterRequest.decode(message.value);
  },
  toProto(message: QueryVotePenaltyCounterRequest): Uint8Array {
    return QueryVotePenaltyCounterRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePenaltyCounterRequest): QueryVotePenaltyCounterRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterRequest",
      value: QueryVotePenaltyCounterRequest.encode(message).finish()
    };
  }
};
function createBaseQueryVotePenaltyCounterResponse(): QueryVotePenaltyCounterResponse {
  return {
    votePenaltyCounter: undefined
  };
}
export const QueryVotePenaltyCounterResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse",
  encode(message: QueryVotePenaltyCounterResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votePenaltyCounter !== undefined) {
      VotePenaltyCounter.encode(message.votePenaltyCounter, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotePenaltyCounterResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotePenaltyCounterResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votePenaltyCounter = VotePenaltyCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryVotePenaltyCounterResponse>): QueryVotePenaltyCounterResponse {
    const message = createBaseQueryVotePenaltyCounterResponse();
    message.votePenaltyCounter = VotePenaltyCounter.fromPartial(object.votePenaltyCounter ?? {});
    return message;
  },
  fromAmino(object: QueryVotePenaltyCounterResponseAmino): QueryVotePenaltyCounterResponse {
    return {
      votePenaltyCounter: object?.vote_penalty_counter ? VotePenaltyCounter.fromAmino(object.vote_penalty_counter) : VotePenaltyCounter.fromPartial({})
    };
  },
  toAmino(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseAmino {
    const obj: any = {};
    obj.vote_penalty_counter = message.votePenaltyCounter ? VotePenaltyCounter.toAmino(message.votePenaltyCounter) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotePenaltyCounterResponseAminoMsg): QueryVotePenaltyCounterResponse {
    return QueryVotePenaltyCounterResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotePenaltyCounterResponseProtoMsg): QueryVotePenaltyCounterResponse {
    return QueryVotePenaltyCounterResponse.decode(message.value);
  },
  toProto(message: QueryVotePenaltyCounterResponse): Uint8Array {
    return QueryVotePenaltyCounterResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotePenaltyCounterResponse): QueryVotePenaltyCounterResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryVotePenaltyCounterResponse",
      value: QueryVotePenaltyCounterResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowRequest(): QuerySlashWindowRequest {
  return {};
}
export const QuerySlashWindowRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest",
  encode(_: QuerySlashWindowRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QuerySlashWindowRequest>): QuerySlashWindowRequest {
    const message = createBaseQuerySlashWindowRequest();
    return message;
  },
  fromAmino(_: QuerySlashWindowRequestAmino): QuerySlashWindowRequest {
    return {};
  },
  toAmino(_: QuerySlashWindowRequest): QuerySlashWindowRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowRequestAminoMsg): QuerySlashWindowRequest {
    return QuerySlashWindowRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowRequestProtoMsg): QuerySlashWindowRequest {
    return QuerySlashWindowRequest.decode(message.value);
  },
  toProto(message: QuerySlashWindowRequest): Uint8Array {
    return QuerySlashWindowRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowRequest): QuerySlashWindowRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowRequest",
      value: QuerySlashWindowRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySlashWindowResponse(): QuerySlashWindowResponse {
  return {
    windowProgress: BigInt(0)
  };
}
export const QuerySlashWindowResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse",
  encode(message: QuerySlashWindowResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.windowProgress !== BigInt(0)) {
      writer.uint32(8).uint64(message.windowProgress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuerySlashWindowResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySlashWindowResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.windowProgress = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QuerySlashWindowResponse>): QuerySlashWindowResponse {
    const message = createBaseQuerySlashWindowResponse();
    message.windowProgress = object.windowProgress !== undefined && object.windowProgress !== null ? BigInt(object.windowProgress.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QuerySlashWindowResponseAmino): QuerySlashWindowResponse {
    return {
      windowProgress: BigInt(object.window_progress)
    };
  },
  toAmino(message: QuerySlashWindowResponse): QuerySlashWindowResponseAmino {
    const obj: any = {};
    obj.window_progress = message.windowProgress ? message.windowProgress.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySlashWindowResponseAminoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySlashWindowResponseProtoMsg): QuerySlashWindowResponse {
    return QuerySlashWindowResponse.decode(message.value);
  },
  toProto(message: QuerySlashWindowResponse): Uint8Array {
    return QuerySlashWindowResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySlashWindowResponse): QuerySlashWindowResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QuerySlashWindowResponse",
      value: QuerySlashWindowResponse.encode(message).finish()
    };
  }
};
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    return {};
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const QueryParamsResponse = {
  typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = Params.fromPartial(object.params ?? {});
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    return {
      params: object?.params ? Params.fromAmino(object.params) : Params.fromPartial({})
    };
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.oracle.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};