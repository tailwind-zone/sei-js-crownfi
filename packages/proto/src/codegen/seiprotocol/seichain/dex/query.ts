import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Order, OrderAmino, OrderSDKType } from "./order.js";
import { PositionDirection, positionDirectionFromJSON } from "./enums.js";
import { Params, ParamsAmino, ParamsSDKType } from "./params.js";
import { LongBook, LongBookAmino, LongBookSDKType } from "./long_book.js";
import { ShortBook, ShortBookAmino, ShortBookSDKType } from "./short_book.js";
import { Price, PriceAmino, PriceSDKType, PriceCandlestick, PriceCandlestickAmino, PriceCandlestickSDKType } from "./price.js";
import { Twap, TwapAmino, TwapSDKType } from "./twap.js";
import { AssetMetadata, AssetMetadataAmino, AssetMetadataSDKType } from "./asset_list.js";
import { Pair, PairAmino, PairSDKType } from "./pair.js";
import { ContractInfoV2, ContractInfoV2Amino, ContractInfoV2SDKType } from "./contract.js";
import { MatchResult, MatchResultAmino, MatchResultSDKType } from "./match_result.js";
import { BinaryReader, BinaryWriter } from "../../../binary.js";
import { DeepPartial, isSet } from "../../../helpers.js";
import { Decimal } from "@cosmjs/math";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestSDKType {}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino;
}
export interface QueryParamsResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseSDKType {
  params: ParamsSDKType;
}
export interface QueryGetLongBookRequest {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetLongBookRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest";
  value: Uint8Array;
}
export interface QueryGetLongBookRequestAmino {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetLongBookRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetLongBookRequest";
  value: QueryGetLongBookRequestAmino;
}
export interface QueryGetLongBookRequestSDKType {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetLongBookResponse {
  LongBook: LongBook;
}
export interface QueryGetLongBookResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse";
  value: Uint8Array;
}
export interface QueryGetLongBookResponseAmino {
  LongBook?: LongBookAmino;
}
export interface QueryGetLongBookResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetLongBookResponse";
  value: QueryGetLongBookResponseAmino;
}
export interface QueryGetLongBookResponseSDKType {
  LongBook: LongBookSDKType;
}
export interface QueryAllLongBookRequest {
  pagination?: PageRequest;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllLongBookRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest";
  value: Uint8Array;
}
export interface QueryAllLongBookRequestAmino {
  pagination?: PageRequestAmino;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllLongBookRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAllLongBookRequest";
  value: QueryAllLongBookRequestAmino;
}
export interface QueryAllLongBookRequestSDKType {
  pagination?: PageRequestSDKType;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllLongBookResponse {
  LongBook: LongBook[];
  pagination?: PageResponse;
}
export interface QueryAllLongBookResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse";
  value: Uint8Array;
}
export interface QueryAllLongBookResponseAmino {
  LongBook: LongBookAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllLongBookResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAllLongBookResponse";
  value: QueryAllLongBookResponseAmino;
}
export interface QueryAllLongBookResponseSDKType {
  LongBook: LongBookSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetShortBookRequest {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetShortBookRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest";
  value: Uint8Array;
}
export interface QueryGetShortBookRequestAmino {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetShortBookRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetShortBookRequest";
  value: QueryGetShortBookRequestAmino;
}
export interface QueryGetShortBookRequestSDKType {
  price: string;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryGetShortBookResponse {
  ShortBook: ShortBook;
}
export interface QueryGetShortBookResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse";
  value: Uint8Array;
}
export interface QueryGetShortBookResponseAmino {
  ShortBook?: ShortBookAmino;
}
export interface QueryGetShortBookResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetShortBookResponse";
  value: QueryGetShortBookResponseAmino;
}
export interface QueryGetShortBookResponseSDKType {
  ShortBook: ShortBookSDKType;
}
export interface QueryAllShortBookRequest {
  pagination?: PageRequest;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllShortBookRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest";
  value: Uint8Array;
}
export interface QueryAllShortBookRequestAmino {
  pagination?: PageRequestAmino;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllShortBookRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAllShortBookRequest";
  value: QueryAllShortBookRequestAmino;
}
export interface QueryAllShortBookRequestSDKType {
  pagination?: PageRequestSDKType;
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
}
export interface QueryAllShortBookResponse {
  ShortBook: ShortBook[];
  pagination?: PageResponse;
}
export interface QueryAllShortBookResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse";
  value: Uint8Array;
}
export interface QueryAllShortBookResponseAmino {
  ShortBook: ShortBookAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryAllShortBookResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAllShortBookResponse";
  value: QueryAllShortBookResponseAmino;
}
export interface QueryAllShortBookResponseSDKType {
  ShortBook: ShortBookSDKType[];
  pagination?: PageResponseSDKType;
}
export interface QueryGetPricesRequest {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetPricesRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest";
  value: Uint8Array;
}
export interface QueryGetPricesRequestAmino {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetPricesRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetPricesRequest";
  value: QueryGetPricesRequestAmino;
}
export interface QueryGetPricesRequestSDKType {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetPricesResponse {
  prices: Price[];
}
export interface QueryGetPricesResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse";
  value: Uint8Array;
}
export interface QueryGetPricesResponseAmino {
  prices: PriceAmino[];
}
export interface QueryGetPricesResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetPricesResponse";
  value: QueryGetPricesResponseAmino;
}
export interface QueryGetPricesResponseSDKType {
  prices: PriceSDKType[];
}
export interface QueryGetPriceRequest {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
  timestamp: bigint;
}
export interface QueryGetPriceRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest";
  value: Uint8Array;
}
export interface QueryGetPriceRequestAmino {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
  timestamp: string;
}
export interface QueryGetPriceRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetPriceRequest";
  value: QueryGetPriceRequestAmino;
}
export interface QueryGetPriceRequestSDKType {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
  timestamp: bigint;
}
export interface QueryGetPriceResponse {
  price?: Price;
  found: boolean;
}
export interface QueryGetPriceResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse";
  value: Uint8Array;
}
export interface QueryGetPriceResponseAmino {
  price?: PriceAmino;
  found: boolean;
}
export interface QueryGetPriceResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetPriceResponse";
  value: QueryGetPriceResponseAmino;
}
export interface QueryGetPriceResponseSDKType {
  price?: PriceSDKType;
  found: boolean;
}
export interface QueryGetLatestPriceRequest {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetLatestPriceRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest";
  value: Uint8Array;
}
export interface QueryGetLatestPriceRequestAmino {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetLatestPriceRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest";
  value: QueryGetLatestPriceRequestAmino;
}
export interface QueryGetLatestPriceRequestSDKType {
  priceDenom: string;
  assetDenom: string;
  contractAddr: string;
}
export interface QueryGetLatestPriceResponse {
  price?: Price;
}
export interface QueryGetLatestPriceResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse";
  value: Uint8Array;
}
export interface QueryGetLatestPriceResponseAmino {
  price?: PriceAmino;
}
export interface QueryGetLatestPriceResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse";
  value: QueryGetLatestPriceResponseAmino;
}
export interface QueryGetLatestPriceResponseSDKType {
  price?: PriceSDKType;
}
export interface QueryGetTwapsRequest {
  contractAddr: string;
  lookbackSeconds: bigint;
}
export interface QueryGetTwapsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest";
  value: Uint8Array;
}
export interface QueryGetTwapsRequestAmino {
  contractAddr: string;
  lookbackSeconds: string;
}
export interface QueryGetTwapsRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetTwapsRequest";
  value: QueryGetTwapsRequestAmino;
}
export interface QueryGetTwapsRequestSDKType {
  contractAddr: string;
  lookbackSeconds: bigint;
}
export interface QueryGetTwapsResponse {
  twaps: Twap[];
}
export interface QueryGetTwapsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse";
  value: Uint8Array;
}
export interface QueryGetTwapsResponseAmino {
  twaps: TwapAmino[];
}
export interface QueryGetTwapsResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetTwapsResponse";
  value: QueryGetTwapsResponseAmino;
}
export interface QueryGetTwapsResponseSDKType {
  twaps: TwapSDKType[];
}
export interface QueryAssetListRequest {}
export interface QueryAssetListRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest";
  value: Uint8Array;
}
export interface QueryAssetListRequestAmino {}
export interface QueryAssetListRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAssetListRequest";
  value: QueryAssetListRequestAmino;
}
export interface QueryAssetListRequestSDKType {}
export interface QueryAssetListResponse {
  assetList: AssetMetadata[];
}
export interface QueryAssetListResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse";
  value: Uint8Array;
}
export interface QueryAssetListResponseAmino {
  assetList: AssetMetadataAmino[];
}
export interface QueryAssetListResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAssetListResponse";
  value: QueryAssetListResponseAmino;
}
export interface QueryAssetListResponseSDKType {
  assetList: AssetMetadataSDKType[];
}
export interface QueryAssetMetadataRequest {
  denom: string;
}
export interface QueryAssetMetadataRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest";
  value: Uint8Array;
}
export interface QueryAssetMetadataRequestAmino {
  denom: string;
}
export interface QueryAssetMetadataRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest";
  value: QueryAssetMetadataRequestAmino;
}
export interface QueryAssetMetadataRequestSDKType {
  denom: string;
}
export interface QueryAssetMetadataResponse {
  metadata?: AssetMetadata;
}
export interface QueryAssetMetadataResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse";
  value: Uint8Array;
}
export interface QueryAssetMetadataResponseAmino {
  metadata?: AssetMetadataAmino;
}
export interface QueryAssetMetadataResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse";
  value: QueryAssetMetadataResponseAmino;
}
export interface QueryAssetMetadataResponseSDKType {
  metadata?: AssetMetadataSDKType;
}
export interface QueryRegisteredPairsRequest {
  contractAddr: string;
}
export interface QueryRegisteredPairsRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest";
  value: Uint8Array;
}
export interface QueryRegisteredPairsRequestAmino {
  contractAddr: string;
}
export interface QueryRegisteredPairsRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest";
  value: QueryRegisteredPairsRequestAmino;
}
export interface QueryRegisteredPairsRequestSDKType {
  contractAddr: string;
}
export interface QueryRegisteredPairsResponse {
  pairs: Pair[];
}
export interface QueryRegisteredPairsResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse";
  value: Uint8Array;
}
export interface QueryRegisteredPairsResponseAmino {
  pairs: PairAmino[];
}
export interface QueryRegisteredPairsResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse";
  value: QueryRegisteredPairsResponseAmino;
}
export interface QueryRegisteredPairsResponseSDKType {
  pairs: PairSDKType[];
}
export interface QueryRegisteredContractRequest {
  contractAddr: string;
}
export interface QueryRegisteredContractRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest";
  value: Uint8Array;
}
export interface QueryRegisteredContractRequestAmino {
  contractAddr: string;
}
export interface QueryRegisteredContractRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest";
  value: QueryRegisteredContractRequestAmino;
}
export interface QueryRegisteredContractRequestSDKType {
  contractAddr: string;
}
export interface QueryRegisteredContractResponse {
  contractInfo?: ContractInfoV2;
}
export interface QueryRegisteredContractResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse";
  value: Uint8Array;
}
export interface QueryRegisteredContractResponseAmino {
  contract_info?: ContractInfoV2Amino;
}
export interface QueryRegisteredContractResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse";
  value: QueryRegisteredContractResponseAmino;
}
export interface QueryRegisteredContractResponseSDKType {
  contract_info?: ContractInfoV2SDKType;
}
export interface QueryGetOrdersRequest {
  contractAddr: string;
  account: string;
}
export interface QueryGetOrdersRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest";
  value: Uint8Array;
}
export interface QueryGetOrdersRequestAmino {
  contractAddr: string;
  account: string;
}
export interface QueryGetOrdersRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrdersRequest";
  value: QueryGetOrdersRequestAmino;
}
export interface QueryGetOrdersRequestSDKType {
  contractAddr: string;
  account: string;
}
export interface QueryGetOrdersResponse {
  orders: Order[];
}
export interface QueryGetOrdersResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse";
  value: Uint8Array;
}
export interface QueryGetOrdersResponseAmino {
  orders: OrderAmino[];
}
export interface QueryGetOrdersResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrdersResponse";
  value: QueryGetOrdersResponseAmino;
}
export interface QueryGetOrdersResponseSDKType {
  orders: OrderSDKType[];
}
export interface QueryGetOrderByIDRequest {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  id: bigint;
}
export interface QueryGetOrderByIDRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest";
  value: Uint8Array;
}
export interface QueryGetOrderByIDRequestAmino {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  id: string;
}
export interface QueryGetOrderByIDRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest";
  value: QueryGetOrderByIDRequestAmino;
}
export interface QueryGetOrderByIDRequestSDKType {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  id: bigint;
}
export interface QueryGetOrderByIDResponse {
  order?: Order;
}
export interface QueryGetOrderByIDResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse";
  value: Uint8Array;
}
export interface QueryGetOrderByIDResponseAmino {
  order?: OrderAmino;
}
export interface QueryGetOrderByIDResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse";
  value: QueryGetOrderByIDResponseAmino;
}
export interface QueryGetOrderByIDResponseSDKType {
  order?: OrderSDKType;
}
export interface QueryGetHistoricalPricesRequest {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  periodLengthInSeconds: bigint;
  numOfPeriods: bigint;
}
export interface QueryGetHistoricalPricesRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest";
  value: Uint8Array;
}
export interface QueryGetHistoricalPricesRequestAmino {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  periodLengthInSeconds: string;
  numOfPeriods: string;
}
export interface QueryGetHistoricalPricesRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest";
  value: QueryGetHistoricalPricesRequestAmino;
}
export interface QueryGetHistoricalPricesRequestSDKType {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  periodLengthInSeconds: bigint;
  numOfPeriods: bigint;
}
export interface QueryGetHistoricalPricesResponse {
  prices: PriceCandlestick[];
}
export interface QueryGetHistoricalPricesResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse";
  value: Uint8Array;
}
export interface QueryGetHistoricalPricesResponseAmino {
  prices: PriceCandlestickAmino[];
}
export interface QueryGetHistoricalPricesResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse";
  value: QueryGetHistoricalPricesResponseAmino;
}
export interface QueryGetHistoricalPricesResponseSDKType {
  prices: PriceCandlestickSDKType[];
}
export interface QueryGetMarketSummaryRequest {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  lookbackInSeconds: bigint;
}
export interface QueryGetMarketSummaryRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest";
  value: Uint8Array;
}
export interface QueryGetMarketSummaryRequestAmino {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  lookbackInSeconds: string;
}
export interface QueryGetMarketSummaryRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest";
  value: QueryGetMarketSummaryRequestAmino;
}
export interface QueryGetMarketSummaryRequestSDKType {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  lookbackInSeconds: bigint;
}
export interface QueryGetMarketSummaryResponse {
  totalVolume: string;
  totalVolumeNotional: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
}
export interface QueryGetMarketSummaryResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse";
  value: Uint8Array;
}
export interface QueryGetMarketSummaryResponseAmino {
  totalVolume: string;
  totalVolumeNotional: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
}
export interface QueryGetMarketSummaryResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse";
  value: QueryGetMarketSummaryResponseAmino;
}
export interface QueryGetMarketSummaryResponseSDKType {
  totalVolume: string;
  totalVolumeNotional: string;
  highPrice: string;
  lowPrice: string;
  lastPrice: string;
}
export interface QueryOrderSimulationRequest {
  order?: Order;
  contractAddr: string;
}
export interface QueryOrderSimulationRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest";
  value: Uint8Array;
}
export interface QueryOrderSimulationRequestAmino {
  order?: OrderAmino;
  contractAddr: string;
}
export interface QueryOrderSimulationRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest";
  value: QueryOrderSimulationRequestAmino;
}
export interface QueryOrderSimulationRequestSDKType {
  order?: OrderSDKType;
  contractAddr: string;
}
export interface QueryOrderSimulationResponse {
  ExecutedQuantity: string;
}
export interface QueryOrderSimulationResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse";
  value: Uint8Array;
}
export interface QueryOrderSimulationResponseAmino {
  ExecutedQuantity: string;
}
export interface QueryOrderSimulationResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse";
  value: QueryOrderSimulationResponseAmino;
}
export interface QueryOrderSimulationResponseSDKType {
  ExecutedQuantity: string;
}
export interface QueryGetMatchResultRequest {
  contractAddr: string;
}
export interface QueryGetMatchResultRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest";
  value: Uint8Array;
}
export interface QueryGetMatchResultRequestAmino {
  contractAddr: string;
}
export interface QueryGetMatchResultRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest";
  value: QueryGetMatchResultRequestAmino;
}
export interface QueryGetMatchResultRequestSDKType {
  contractAddr: string;
}
export interface QueryGetMatchResultResponse {
  result?: MatchResult;
}
export interface QueryGetMatchResultResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse";
  value: Uint8Array;
}
export interface QueryGetMatchResultResponseAmino {
  result?: MatchResultAmino;
}
export interface QueryGetMatchResultResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse";
  value: QueryGetMatchResultResponseAmino;
}
export interface QueryGetMatchResultResponseSDKType {
  result?: MatchResultSDKType;
}
export interface QueryGetOrderCountRequest {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  price: string;
  positionDirection: PositionDirection;
}
export interface QueryGetOrderCountRequestProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest";
  value: Uint8Array;
}
export interface QueryGetOrderCountRequestAmino {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  price: string;
  positionDirection: PositionDirection;
}
export interface QueryGetOrderCountRequestAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest";
  value: QueryGetOrderCountRequestAmino;
}
export interface QueryGetOrderCountRequestSDKType {
  contractAddr: string;
  priceDenom: string;
  assetDenom: string;
  price: string;
  positionDirection: PositionDirection;
}
export interface QueryGetOrderCountResponse {
  count: bigint;
}
export interface QueryGetOrderCountResponseProtoMsg {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse";
  value: Uint8Array;
}
export interface QueryGetOrderCountResponseAmino {
  count: string;
}
export interface QueryGetOrderCountResponseAminoMsg {
  type: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse";
  value: QueryGetOrderCountResponseAmino;
}
export interface QueryGetOrderCountResponseSDKType {
  count: bigint;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest",
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
      typeUrl: "/seiprotocol.seichain.dex.QueryParamsRequest",
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
  typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse",
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
      typeUrl: "/seiprotocol.seichain.dex.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetLongBookRequest(): QueryGetLongBookRequest {
  return {
    price: "",
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}
export const QueryGetLongBookRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest",
  encode(message: QueryGetLongBookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLongBookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLongBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.assetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetLongBookRequest>): QueryGetLongBookRequest {
    const message = createBaseQueryGetLongBookRequest();
    message.price = object.price ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: QueryGetLongBookRequestAmino): QueryGetLongBookRequest {
    return {
      price: object.price,
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom
    };
  },
  toAmino(message: QueryGetLongBookRequest): QueryGetLongBookRequestAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetLongBookRequestAminoMsg): QueryGetLongBookRequest {
    return QueryGetLongBookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLongBookRequestProtoMsg): QueryGetLongBookRequest {
    return QueryGetLongBookRequest.decode(message.value);
  },
  toProto(message: QueryGetLongBookRequest): Uint8Array {
    return QueryGetLongBookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLongBookRequest): QueryGetLongBookRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookRequest",
      value: QueryGetLongBookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLongBookResponse(): QueryGetLongBookResponse {
  return {
    LongBook: LongBook.fromPartial({})
  };
}
export const QueryGetLongBookResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse",
  encode(message: QueryGetLongBookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.LongBook !== undefined) {
      LongBook.encode(message.LongBook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLongBookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLongBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LongBook = LongBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetLongBookResponse>): QueryGetLongBookResponse {
    const message = createBaseQueryGetLongBookResponse();
    message.LongBook = LongBook.fromPartial(object.LongBook ?? {});
    return message;
  },
  fromAmino(object: QueryGetLongBookResponseAmino): QueryGetLongBookResponse {
    return {
      LongBook: object?.LongBook ? LongBook.fromAmino(object.LongBook) : LongBook.fromPartial({})
    };
  },
  toAmino(message: QueryGetLongBookResponse): QueryGetLongBookResponseAmino {
    const obj: any = {};
    obj.LongBook = message.LongBook ? LongBook.toAmino(message.LongBook) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLongBookResponseAminoMsg): QueryGetLongBookResponse {
    return QueryGetLongBookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLongBookResponseProtoMsg): QueryGetLongBookResponse {
    return QueryGetLongBookResponse.decode(message.value);
  },
  toProto(message: QueryGetLongBookResponse): Uint8Array {
    return QueryGetLongBookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLongBookResponse): QueryGetLongBookResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetLongBookResponse",
      value: QueryGetLongBookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllLongBookRequest(): QueryAllLongBookRequest {
  return {
    pagination: undefined,
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}
export const QueryAllLongBookRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest",
  encode(message: QueryAllLongBookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLongBookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLongBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.assetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllLongBookRequest>): QueryAllLongBookRequest {
    const message = createBaseQueryAllLongBookRequest();
    message.pagination = PageRequest.fromPartial(object.pagination ?? {});
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: QueryAllLongBookRequestAmino): QueryAllLongBookRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : PageRequest.fromPartial({}),
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom
    };
  },
  toAmino(message: QueryAllLongBookRequest): QueryAllLongBookRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: QueryAllLongBookRequestAminoMsg): QueryAllLongBookRequest {
    return QueryAllLongBookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLongBookRequestProtoMsg): QueryAllLongBookRequest {
    return QueryAllLongBookRequest.decode(message.value);
  },
  toProto(message: QueryAllLongBookRequest): Uint8Array {
    return QueryAllLongBookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLongBookRequest): QueryAllLongBookRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookRequest",
      value: QueryAllLongBookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllLongBookResponse(): QueryAllLongBookResponse {
  return {
    LongBook: [],
    pagination: undefined
  };
}
export const QueryAllLongBookResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse",
  encode(message: QueryAllLongBookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.LongBook) {
      LongBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllLongBookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllLongBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.LongBook.push(LongBook.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllLongBookResponse>): QueryAllLongBookResponse {
    const message = createBaseQueryAllLongBookResponse();
    message.LongBook = object.LongBook?.map(e => LongBook.fromPartial(e)) || [];
    message.pagination = PageResponse.fromPartial(object.pagination ?? {});
    return message;
  },
  fromAmino(object: QueryAllLongBookResponseAmino): QueryAllLongBookResponse {
    return {
      LongBook: Array.isArray(object?.LongBook) ? object.LongBook.map((e: any) => LongBook.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : PageResponse.fromPartial({})
    };
  },
  toAmino(message: QueryAllLongBookResponse): QueryAllLongBookResponseAmino {
    const obj: any = {};
    if (message.LongBook) {
      obj.LongBook = message.LongBook.map(e => e ? LongBook.toAmino(e) : undefined);
    } else {
      obj.LongBook = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllLongBookResponseAminoMsg): QueryAllLongBookResponse {
    return QueryAllLongBookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllLongBookResponseProtoMsg): QueryAllLongBookResponse {
    return QueryAllLongBookResponse.decode(message.value);
  },
  toProto(message: QueryAllLongBookResponse): Uint8Array {
    return QueryAllLongBookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllLongBookResponse): QueryAllLongBookResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAllLongBookResponse",
      value: QueryAllLongBookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetShortBookRequest(): QueryGetShortBookRequest {
  return {
    price: "",
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}
export const QueryGetShortBookRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest",
  encode(message: QueryGetShortBookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== "") {
      writer.uint32(10).string(message.price);
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetShortBookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShortBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = reader.string();
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.assetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetShortBookRequest>): QueryGetShortBookRequest {
    const message = createBaseQueryGetShortBookRequest();
    message.price = object.price ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: QueryGetShortBookRequestAmino): QueryGetShortBookRequest {
    return {
      price: object.price,
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom
    };
  },
  toAmino(message: QueryGetShortBookRequest): QueryGetShortBookRequestAmino {
    const obj: any = {};
    obj.price = message.price;
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: QueryGetShortBookRequestAminoMsg): QueryGetShortBookRequest {
    return QueryGetShortBookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetShortBookRequestProtoMsg): QueryGetShortBookRequest {
    return QueryGetShortBookRequest.decode(message.value);
  },
  toProto(message: QueryGetShortBookRequest): Uint8Array {
    return QueryGetShortBookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetShortBookRequest): QueryGetShortBookRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookRequest",
      value: QueryGetShortBookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetShortBookResponse(): QueryGetShortBookResponse {
  return {
    ShortBook: ShortBook.fromPartial({})
  };
}
export const QueryGetShortBookResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse",
  encode(message: QueryGetShortBookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ShortBook !== undefined) {
      ShortBook.encode(message.ShortBook, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetShortBookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetShortBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShortBook = ShortBook.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetShortBookResponse>): QueryGetShortBookResponse {
    const message = createBaseQueryGetShortBookResponse();
    message.ShortBook = ShortBook.fromPartial(object.ShortBook ?? {});
    return message;
  },
  fromAmino(object: QueryGetShortBookResponseAmino): QueryGetShortBookResponse {
    return {
      ShortBook: object?.ShortBook ? ShortBook.fromAmino(object.ShortBook) : ShortBook.fromPartial({})
    };
  },
  toAmino(message: QueryGetShortBookResponse): QueryGetShortBookResponseAmino {
    const obj: any = {};
    obj.ShortBook = message.ShortBook ? ShortBook.toAmino(message.ShortBook) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetShortBookResponseAminoMsg): QueryGetShortBookResponse {
    return QueryGetShortBookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetShortBookResponseProtoMsg): QueryGetShortBookResponse {
    return QueryGetShortBookResponse.decode(message.value);
  },
  toProto(message: QueryGetShortBookResponse): Uint8Array {
    return QueryGetShortBookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetShortBookResponse): QueryGetShortBookResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetShortBookResponse",
      value: QueryGetShortBookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllShortBookRequest(): QueryAllShortBookRequest {
  return {
    pagination: undefined,
    contractAddr: "",
    priceDenom: "",
    assetDenom: ""
  };
}
export const QueryAllShortBookRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest",
  encode(message: QueryAllShortBookRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(26).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(34).string(message.assetDenom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllShortBookRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShortBookRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        case 3:
          message.priceDenom = reader.string();
          break;
        case 4:
          message.assetDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllShortBookRequest>): QueryAllShortBookRequest {
    const message = createBaseQueryAllShortBookRequest();
    message.pagination = PageRequest.fromPartial(object.pagination ?? {});
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    return message;
  },
  fromAmino(object: QueryAllShortBookRequestAmino): QueryAllShortBookRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : PageRequest.fromPartial({}),
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom
    };
  },
  toAmino(message: QueryAllShortBookRequest): QueryAllShortBookRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    return obj;
  },
  fromAminoMsg(object: QueryAllShortBookRequestAminoMsg): QueryAllShortBookRequest {
    return QueryAllShortBookRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllShortBookRequestProtoMsg): QueryAllShortBookRequest {
    return QueryAllShortBookRequest.decode(message.value);
  },
  toProto(message: QueryAllShortBookRequest): Uint8Array {
    return QueryAllShortBookRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllShortBookRequest): QueryAllShortBookRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookRequest",
      value: QueryAllShortBookRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllShortBookResponse(): QueryAllShortBookResponse {
  return {
    ShortBook: [],
    pagination: undefined
  };
}
export const QueryAllShortBookResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse",
  encode(message: QueryAllShortBookResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.ShortBook) {
      ShortBook.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllShortBookResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllShortBookResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ShortBook.push(ShortBook.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAllShortBookResponse>): QueryAllShortBookResponse {
    const message = createBaseQueryAllShortBookResponse();
    message.ShortBook = object.ShortBook?.map(e => ShortBook.fromPartial(e)) || [];
    message.pagination = PageResponse.fromPartial(object.pagination ?? {});
    return message;
  },
  fromAmino(object: QueryAllShortBookResponseAmino): QueryAllShortBookResponse {
    return {
      ShortBook: Array.isArray(object?.ShortBook) ? object.ShortBook.map((e: any) => ShortBook.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : PageResponse.fromPartial({})
    };
  },
  toAmino(message: QueryAllShortBookResponse): QueryAllShortBookResponseAmino {
    const obj: any = {};
    if (message.ShortBook) {
      obj.ShortBook = message.ShortBook.map(e => e ? ShortBook.toAmino(e) : undefined);
    } else {
      obj.ShortBook = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllShortBookResponseAminoMsg): QueryAllShortBookResponse {
    return QueryAllShortBookResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllShortBookResponseProtoMsg): QueryAllShortBookResponse {
    return QueryAllShortBookResponse.decode(message.value);
  },
  toProto(message: QueryAllShortBookResponse): Uint8Array {
    return QueryAllShortBookResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllShortBookResponse): QueryAllShortBookResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAllShortBookResponse",
      value: QueryAllShortBookResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPricesRequest(): QueryGetPricesRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: ""
  };
}
export const QueryGetPricesRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest",
  encode(message: QueryGetPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }
    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.assetDenom = reader.string();
          break;
        case 3:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPricesRequest>): QueryGetPricesRequest {
    const message = createBaseQueryGetPricesRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryGetPricesRequestAmino): QueryGetPricesRequest {
    return {
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryGetPricesRequest): QueryGetPricesRequestAmino {
    const obj: any = {};
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryGetPricesRequestAminoMsg): QueryGetPricesRequest {
    return QueryGetPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPricesRequestProtoMsg): QueryGetPricesRequest {
    return QueryGetPricesRequest.decode(message.value);
  },
  toProto(message: QueryGetPricesRequest): Uint8Array {
    return QueryGetPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPricesRequest): QueryGetPricesRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesRequest",
      value: QueryGetPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPricesResponse(): QueryGetPricesResponse {
  return {
    prices: []
  };
}
export const QueryGetPricesResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse",
  encode(message: QueryGetPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      Price.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(Price.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPricesResponse>): QueryGetPricesResponse {
    const message = createBaseQueryGetPricesResponse();
    message.prices = object.prices?.map(e => Price.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetPricesResponseAmino): QueryGetPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => Price.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGetPricesResponse): QueryGetPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? Price.toAmino(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetPricesResponseAminoMsg): QueryGetPricesResponse {
    return QueryGetPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPricesResponseProtoMsg): QueryGetPricesResponse {
    return QueryGetPricesResponse.decode(message.value);
  },
  toProto(message: QueryGetPricesResponse): Uint8Array {
    return QueryGetPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPricesResponse): QueryGetPricesResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetPricesResponse",
      value: QueryGetPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceRequest(): QueryGetPriceRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: "",
    timestamp: BigInt(0)
  };
}
export const QueryGetPriceRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest",
  encode(message: QueryGetPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }
    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }
    if (message.timestamp !== BigInt(0)) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.assetDenom = reader.string();
          break;
        case 3:
          message.contractAddr = reader.string();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPriceRequest>): QueryGetPriceRequest {
    const message = createBaseQueryGetPriceRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? BigInt(object.timestamp.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetPriceRequestAmino): QueryGetPriceRequest {
    return {
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      contractAddr: object.contractAddr,
      timestamp: BigInt(object.timestamp)
    };
  },
  toAmino(message: QueryGetPriceRequest): QueryGetPriceRequestAmino {
    const obj: any = {};
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.contractAddr = message.contractAddr;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceRequestAminoMsg): QueryGetPriceRequest {
    return QueryGetPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceRequestProtoMsg): QueryGetPriceRequest {
    return QueryGetPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetPriceRequest): Uint8Array {
    return QueryGetPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceRequest): QueryGetPriceRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceRequest",
      value: QueryGetPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetPriceResponse(): QueryGetPriceResponse {
  return {
    price: undefined,
    found: false
  };
}
export const QueryGetPriceResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse",
  encode(message: QueryGetPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    if (message.found === true) {
      writer.uint32(16).bool(message.found);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;
        case 2:
          message.found = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetPriceResponse>): QueryGetPriceResponse {
    const message = createBaseQueryGetPriceResponse();
    message.price = Price.fromPartial(object.price ?? {});
    message.found = object.found ?? false;
    return message;
  },
  fromAmino(object: QueryGetPriceResponseAmino): QueryGetPriceResponse {
    return {
      price: object?.price ? Price.fromAmino(object.price) : Price.fromPartial({}),
      found: object.found
    };
  },
  toAmino(message: QueryGetPriceResponse): QueryGetPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? Price.toAmino(message.price) : undefined;
    obj.found = message.found;
    return obj;
  },
  fromAminoMsg(object: QueryGetPriceResponseAminoMsg): QueryGetPriceResponse {
    return QueryGetPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetPriceResponseProtoMsg): QueryGetPriceResponse {
    return QueryGetPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetPriceResponse): Uint8Array {
    return QueryGetPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetPriceResponse): QueryGetPriceResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetPriceResponse",
      value: QueryGetPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestPriceRequest(): QueryGetLatestPriceRequest {
  return {
    priceDenom: "",
    assetDenom: "",
    contractAddr: ""
  };
}
export const QueryGetLatestPriceRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest",
  encode(message: QueryGetLatestPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.priceDenom !== "") {
      writer.uint32(10).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(18).string(message.assetDenom);
    }
    if (message.contractAddr !== "") {
      writer.uint32(26).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLatestPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLatestPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.priceDenom = reader.string();
          break;
        case 2:
          message.assetDenom = reader.string();
          break;
        case 3:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetLatestPriceRequest>): QueryGetLatestPriceRequest {
    const message = createBaseQueryGetLatestPriceRequest();
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryGetLatestPriceRequestAmino): QueryGetLatestPriceRequest {
    return {
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryGetLatestPriceRequest): QueryGetLatestPriceRequestAmino {
    const obj: any = {};
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestPriceRequestAminoMsg): QueryGetLatestPriceRequest {
    return QueryGetLatestPriceRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestPriceRequestProtoMsg): QueryGetLatestPriceRequest {
    return QueryGetLatestPriceRequest.decode(message.value);
  },
  toProto(message: QueryGetLatestPriceRequest): Uint8Array {
    return QueryGetLatestPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestPriceRequest): QueryGetLatestPriceRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceRequest",
      value: QueryGetLatestPriceRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetLatestPriceResponse(): QueryGetLatestPriceResponse {
  return {
    price: undefined
  };
}
export const QueryGetLatestPriceResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse",
  encode(message: QueryGetLatestPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      Price.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetLatestPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetLatestPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = Price.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetLatestPriceResponse>): QueryGetLatestPriceResponse {
    const message = createBaseQueryGetLatestPriceResponse();
    message.price = Price.fromPartial(object.price ?? {});
    return message;
  },
  fromAmino(object: QueryGetLatestPriceResponseAmino): QueryGetLatestPriceResponse {
    return {
      price: object?.price ? Price.fromAmino(object.price) : Price.fromPartial({})
    };
  },
  toAmino(message: QueryGetLatestPriceResponse): QueryGetLatestPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? Price.toAmino(message.price) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetLatestPriceResponseAminoMsg): QueryGetLatestPriceResponse {
    return QueryGetLatestPriceResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetLatestPriceResponseProtoMsg): QueryGetLatestPriceResponse {
    return QueryGetLatestPriceResponse.decode(message.value);
  },
  toProto(message: QueryGetLatestPriceResponse): Uint8Array {
    return QueryGetLatestPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetLatestPriceResponse): QueryGetLatestPriceResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetLatestPriceResponse",
      value: QueryGetLatestPriceResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetTwapsRequest(): QueryGetTwapsRequest {
  return {
    contractAddr: "",
    lookbackSeconds: BigInt(0)
  };
}
export const QueryGetTwapsRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest",
  encode(message: QueryGetTwapsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.lookbackSeconds !== BigInt(0)) {
      writer.uint32(16).uint64(message.lookbackSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTwapsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTwapsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.lookbackSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTwapsRequest>): QueryGetTwapsRequest {
    const message = createBaseQueryGetTwapsRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.lookbackSeconds = object.lookbackSeconds !== undefined && object.lookbackSeconds !== null ? BigInt(object.lookbackSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetTwapsRequestAmino): QueryGetTwapsRequest {
    return {
      contractAddr: object.contractAddr,
      lookbackSeconds: BigInt(object.lookbackSeconds)
    };
  },
  toAmino(message: QueryGetTwapsRequest): QueryGetTwapsRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.lookbackSeconds = message.lookbackSeconds ? message.lookbackSeconds.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetTwapsRequestAminoMsg): QueryGetTwapsRequest {
    return QueryGetTwapsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTwapsRequestProtoMsg): QueryGetTwapsRequest {
    return QueryGetTwapsRequest.decode(message.value);
  },
  toProto(message: QueryGetTwapsRequest): Uint8Array {
    return QueryGetTwapsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTwapsRequest): QueryGetTwapsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsRequest",
      value: QueryGetTwapsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetTwapsResponse(): QueryGetTwapsResponse {
  return {
    twaps: []
  };
}
export const QueryGetTwapsResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse",
  encode(message: QueryGetTwapsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.twaps) {
      Twap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetTwapsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetTwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.twaps.push(Twap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetTwapsResponse>): QueryGetTwapsResponse {
    const message = createBaseQueryGetTwapsResponse();
    message.twaps = object.twaps?.map(e => Twap.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetTwapsResponseAmino): QueryGetTwapsResponse {
    return {
      twaps: Array.isArray(object?.twaps) ? object.twaps.map((e: any) => Twap.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGetTwapsResponse): QueryGetTwapsResponseAmino {
    const obj: any = {};
    if (message.twaps) {
      obj.twaps = message.twaps.map(e => e ? Twap.toAmino(e) : undefined);
    } else {
      obj.twaps = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetTwapsResponseAminoMsg): QueryGetTwapsResponse {
    return QueryGetTwapsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetTwapsResponseProtoMsg): QueryGetTwapsResponse {
    return QueryGetTwapsResponse.decode(message.value);
  },
  toProto(message: QueryGetTwapsResponse): Uint8Array {
    return QueryGetTwapsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetTwapsResponse): QueryGetTwapsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetTwapsResponse",
      value: QueryGetTwapsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetListRequest(): QueryAssetListRequest {
  return {};
}
export const QueryAssetListRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest",
  encode(_: QueryAssetListRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetListRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetListRequest();
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
  fromPartial(_: DeepPartial<QueryAssetListRequest>): QueryAssetListRequest {
    const message = createBaseQueryAssetListRequest();
    return message;
  },
  fromAmino(_: QueryAssetListRequestAmino): QueryAssetListRequest {
    return {};
  },
  toAmino(_: QueryAssetListRequest): QueryAssetListRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryAssetListRequestAminoMsg): QueryAssetListRequest {
    return QueryAssetListRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetListRequestProtoMsg): QueryAssetListRequest {
    return QueryAssetListRequest.decode(message.value);
  },
  toProto(message: QueryAssetListRequest): Uint8Array {
    return QueryAssetListRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetListRequest): QueryAssetListRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAssetListRequest",
      value: QueryAssetListRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetListResponse(): QueryAssetListResponse {
  return {
    assetList: []
  };
}
export const QueryAssetListResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse",
  encode(message: QueryAssetListResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.assetList) {
      AssetMetadata.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetListResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetList.push(AssetMetadata.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAssetListResponse>): QueryAssetListResponse {
    const message = createBaseQueryAssetListResponse();
    message.assetList = object.assetList?.map(e => AssetMetadata.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryAssetListResponseAmino): QueryAssetListResponse {
    return {
      assetList: Array.isArray(object?.assetList) ? object.assetList.map((e: any) => AssetMetadata.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryAssetListResponse): QueryAssetListResponseAmino {
    const obj: any = {};
    if (message.assetList) {
      obj.assetList = message.assetList.map(e => e ? AssetMetadata.toAmino(e) : undefined);
    } else {
      obj.assetList = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryAssetListResponseAminoMsg): QueryAssetListResponse {
    return QueryAssetListResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetListResponseProtoMsg): QueryAssetListResponse {
    return QueryAssetListResponse.decode(message.value);
  },
  toProto(message: QueryAssetListResponse): Uint8Array {
    return QueryAssetListResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetListResponse): QueryAssetListResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAssetListResponse",
      value: QueryAssetListResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAssetMetadataRequest(): QueryAssetMetadataRequest {
  return {
    denom: ""
  };
}
export const QueryAssetMetadataRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest",
  encode(message: QueryAssetMetadataRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetMetadataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMetadataRequest();
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
  fromPartial(object: DeepPartial<QueryAssetMetadataRequest>): QueryAssetMetadataRequest {
    const message = createBaseQueryAssetMetadataRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: QueryAssetMetadataRequestAmino): QueryAssetMetadataRequest {
    return {
      denom: object.denom
    };
  },
  toAmino(message: QueryAssetMetadataRequest): QueryAssetMetadataRequestAmino {
    const obj: any = {};
    obj.denom = message.denom;
    return obj;
  },
  fromAminoMsg(object: QueryAssetMetadataRequestAminoMsg): QueryAssetMetadataRequest {
    return QueryAssetMetadataRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetMetadataRequestProtoMsg): QueryAssetMetadataRequest {
    return QueryAssetMetadataRequest.decode(message.value);
  },
  toProto(message: QueryAssetMetadataRequest): Uint8Array {
    return QueryAssetMetadataRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetMetadataRequest): QueryAssetMetadataRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataRequest",
      value: QueryAssetMetadataRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAssetMetadataResponse(): QueryAssetMetadataResponse {
  return {
    metadata: undefined
  };
}
export const QueryAssetMetadataResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse",
  encode(message: QueryAssetMetadataResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metadata !== undefined) {
      AssetMetadata.encode(message.metadata, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAssetMetadataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAssetMetadataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metadata = AssetMetadata.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryAssetMetadataResponse>): QueryAssetMetadataResponse {
    const message = createBaseQueryAssetMetadataResponse();
    message.metadata = AssetMetadata.fromPartial(object.metadata ?? {});
    return message;
  },
  fromAmino(object: QueryAssetMetadataResponseAmino): QueryAssetMetadataResponse {
    return {
      metadata: object?.metadata ? AssetMetadata.fromAmino(object.metadata) : AssetMetadata.fromPartial({})
    };
  },
  toAmino(message: QueryAssetMetadataResponse): QueryAssetMetadataResponseAmino {
    const obj: any = {};
    obj.metadata = message.metadata ? AssetMetadata.toAmino(message.metadata) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAssetMetadataResponseAminoMsg): QueryAssetMetadataResponse {
    return QueryAssetMetadataResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAssetMetadataResponseProtoMsg): QueryAssetMetadataResponse {
    return QueryAssetMetadataResponse.decode(message.value);
  },
  toProto(message: QueryAssetMetadataResponse): Uint8Array {
    return QueryAssetMetadataResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAssetMetadataResponse): QueryAssetMetadataResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryAssetMetadataResponse",
      value: QueryAssetMetadataResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredPairsRequest(): QueryRegisteredPairsRequest {
  return {
    contractAddr: ""
  };
}
export const QueryRegisteredPairsRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest",
  encode(message: QueryRegisteredPairsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredPairsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredPairsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredPairsRequest>): QueryRegisteredPairsRequest {
    const message = createBaseQueryRegisteredPairsRequest();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryRegisteredPairsRequestAmino): QueryRegisteredPairsRequest {
    return {
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryRegisteredPairsRequest): QueryRegisteredPairsRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredPairsRequestAminoMsg): QueryRegisteredPairsRequest {
    return QueryRegisteredPairsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredPairsRequestProtoMsg): QueryRegisteredPairsRequest {
    return QueryRegisteredPairsRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredPairsRequest): Uint8Array {
    return QueryRegisteredPairsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredPairsRequest): QueryRegisteredPairsRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsRequest",
      value: QueryRegisteredPairsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredPairsResponse(): QueryRegisteredPairsResponse {
  return {
    pairs: []
  };
}
export const QueryRegisteredPairsResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse",
  encode(message: QueryRegisteredPairsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pairs) {
      Pair.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredPairsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredPairsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pairs.push(Pair.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredPairsResponse>): QueryRegisteredPairsResponse {
    const message = createBaseQueryRegisteredPairsResponse();
    message.pairs = object.pairs?.map(e => Pair.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryRegisteredPairsResponseAmino): QueryRegisteredPairsResponse {
    return {
      pairs: Array.isArray(object?.pairs) ? object.pairs.map((e: any) => Pair.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryRegisteredPairsResponse): QueryRegisteredPairsResponseAmino {
    const obj: any = {};
    if (message.pairs) {
      obj.pairs = message.pairs.map(e => e ? Pair.toAmino(e) : undefined);
    } else {
      obj.pairs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredPairsResponseAminoMsg): QueryRegisteredPairsResponse {
    return QueryRegisteredPairsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredPairsResponseProtoMsg): QueryRegisteredPairsResponse {
    return QueryRegisteredPairsResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredPairsResponse): Uint8Array {
    return QueryRegisteredPairsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredPairsResponse): QueryRegisteredPairsResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredPairsResponse",
      value: QueryRegisteredPairsResponse.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredContractRequest(): QueryRegisteredContractRequest {
  return {
    contractAddr: ""
  };
}
export const QueryRegisteredContractRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest",
  encode(message: QueryRegisteredContractRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredContractRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredContractRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredContractRequest>): QueryRegisteredContractRequest {
    const message = createBaseQueryRegisteredContractRequest();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryRegisteredContractRequestAmino): QueryRegisteredContractRequest {
    return {
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryRegisteredContractRequest): QueryRegisteredContractRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredContractRequestAminoMsg): QueryRegisteredContractRequest {
    return QueryRegisteredContractRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredContractRequestProtoMsg): QueryRegisteredContractRequest {
    return QueryRegisteredContractRequest.decode(message.value);
  },
  toProto(message: QueryRegisteredContractRequest): Uint8Array {
    return QueryRegisteredContractRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredContractRequest): QueryRegisteredContractRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractRequest",
      value: QueryRegisteredContractRequest.encode(message).finish()
    };
  }
};
function createBaseQueryRegisteredContractResponse(): QueryRegisteredContractResponse {
  return {
    contractInfo: undefined
  };
}
export const QueryRegisteredContractResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse",
  encode(message: QueryRegisteredContractResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractInfo !== undefined) {
      ContractInfoV2.encode(message.contractInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryRegisteredContractResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRegisteredContractResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractInfo = ContractInfoV2.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryRegisteredContractResponse>): QueryRegisteredContractResponse {
    const message = createBaseQueryRegisteredContractResponse();
    message.contractInfo = ContractInfoV2.fromPartial(object.contractInfo ?? {});
    return message;
  },
  fromAmino(object: QueryRegisteredContractResponseAmino): QueryRegisteredContractResponse {
    return {
      contractInfo: object?.contract_info ? ContractInfoV2.fromAmino(object.contract_info) : ContractInfoV2.fromPartial({})
    };
  },
  toAmino(message: QueryRegisteredContractResponse): QueryRegisteredContractResponseAmino {
    const obj: any = {};
    obj.contract_info = message.contractInfo ? ContractInfoV2.toAmino(message.contractInfo) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRegisteredContractResponseAminoMsg): QueryRegisteredContractResponse {
    return QueryRegisteredContractResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRegisteredContractResponseProtoMsg): QueryRegisteredContractResponse {
    return QueryRegisteredContractResponse.decode(message.value);
  },
  toProto(message: QueryRegisteredContractResponse): Uint8Array {
    return QueryRegisteredContractResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryRegisteredContractResponse): QueryRegisteredContractResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryRegisteredContractResponse",
      value: QueryRegisteredContractResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrdersRequest(): QueryGetOrdersRequest {
  return {
    contractAddr: "",
    account: ""
  };
}
export const QueryGetOrdersRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest",
  encode(message: QueryGetOrdersRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrdersRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrdersRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.account = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrdersRequest>): QueryGetOrdersRequest {
    const message = createBaseQueryGetOrdersRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: QueryGetOrdersRequestAmino): QueryGetOrdersRequest {
    return {
      contractAddr: object.contractAddr,
      account: object.account
    };
  },
  toAmino(message: QueryGetOrdersRequest): QueryGetOrdersRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrdersRequestAminoMsg): QueryGetOrdersRequest {
    return QueryGetOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrdersRequestProtoMsg): QueryGetOrdersRequest {
    return QueryGetOrdersRequest.decode(message.value);
  },
  toProto(message: QueryGetOrdersRequest): Uint8Array {
    return QueryGetOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrdersRequest): QueryGetOrdersRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersRequest",
      value: QueryGetOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrdersResponse(): QueryGetOrdersResponse {
  return {
    orders: []
  };
}
export const QueryGetOrdersResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse",
  encode(message: QueryGetOrdersResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrdersResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orders.push(Order.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrdersResponse>): QueryGetOrdersResponse {
    const message = createBaseQueryGetOrdersResponse();
    message.orders = object.orders?.map(e => Order.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetOrdersResponseAmino): QueryGetOrdersResponse {
    return {
      orders: Array.isArray(object?.orders) ? object.orders.map((e: any) => Order.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGetOrdersResponse): QueryGetOrdersResponseAmino {
    const obj: any = {};
    if (message.orders) {
      obj.orders = message.orders.map(e => e ? Order.toAmino(e) : undefined);
    } else {
      obj.orders = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetOrdersResponseAminoMsg): QueryGetOrdersResponse {
    return QueryGetOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrdersResponseProtoMsg): QueryGetOrdersResponse {
    return QueryGetOrdersResponse.decode(message.value);
  },
  toProto(message: QueryGetOrdersResponse): Uint8Array {
    return QueryGetOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrdersResponse): QueryGetOrdersResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrdersResponse",
      value: QueryGetOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderByIDRequest(): QueryGetOrderByIDRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    id: BigInt(0)
  };
}
export const QueryGetOrderByIDRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest",
  encode(message: QueryGetOrderByIDRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.id !== BigInt(0)) {
      writer.uint32(32).uint64(message.id);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrderByIDRequest>): QueryGetOrderByIDRequest {
    const message = createBaseQueryGetOrderByIDRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetOrderByIDRequestAmino): QueryGetOrderByIDRequest {
    return {
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      id: BigInt(object.id)
    };
  },
  toAmino(message: QueryGetOrderByIDRequest): QueryGetOrderByIDRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.id = message.id ? message.id.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderByIDRequestAminoMsg): QueryGetOrderByIDRequest {
    return QueryGetOrderByIDRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderByIDRequestProtoMsg): QueryGetOrderByIDRequest {
    return QueryGetOrderByIDRequest.decode(message.value);
  },
  toProto(message: QueryGetOrderByIDRequest): Uint8Array {
    return QueryGetOrderByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderByIDRequest): QueryGetOrderByIDRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDRequest",
      value: QueryGetOrderByIDRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderByIDResponse(): QueryGetOrderByIDResponse {
  return {
    order: undefined
  };
}
export const QueryGetOrderByIDResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse",
  encode(message: QueryGetOrderByIDResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderByIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrderByIDResponse>): QueryGetOrderByIDResponse {
    const message = createBaseQueryGetOrderByIDResponse();
    message.order = Order.fromPartial(object.order ?? {});
    return message;
  },
  fromAmino(object: QueryGetOrderByIDResponseAmino): QueryGetOrderByIDResponse {
    return {
      order: object?.order ? Order.fromAmino(object.order) : Order.fromPartial({})
    };
  },
  toAmino(message: QueryGetOrderByIDResponse): QueryGetOrderByIDResponseAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderByIDResponseAminoMsg): QueryGetOrderByIDResponse {
    return QueryGetOrderByIDResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderByIDResponseProtoMsg): QueryGetOrderByIDResponse {
    return QueryGetOrderByIDResponse.decode(message.value);
  },
  toProto(message: QueryGetOrderByIDResponse): Uint8Array {
    return QueryGetOrderByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderByIDResponse): QueryGetOrderByIDResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderByIDResponse",
      value: QueryGetOrderByIDResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetHistoricalPricesRequest(): QueryGetHistoricalPricesRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    periodLengthInSeconds: BigInt(0),
    numOfPeriods: BigInt(0)
  };
}
export const QueryGetHistoricalPricesRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest",
  encode(message: QueryGetHistoricalPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.periodLengthInSeconds !== BigInt(0)) {
      writer.uint32(32).uint64(message.periodLengthInSeconds);
    }
    if (message.numOfPeriods !== BigInt(0)) {
      writer.uint32(40).uint64(message.numOfPeriods);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHistoricalPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoricalPricesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.periodLengthInSeconds = reader.uint64();
          break;
        case 5:
          message.numOfPeriods = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHistoricalPricesRequest>): QueryGetHistoricalPricesRequest {
    const message = createBaseQueryGetHistoricalPricesRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.periodLengthInSeconds = object.periodLengthInSeconds !== undefined && object.periodLengthInSeconds !== null ? BigInt(object.periodLengthInSeconds.toString()) : BigInt(0);
    message.numOfPeriods = object.numOfPeriods !== undefined && object.numOfPeriods !== null ? BigInt(object.numOfPeriods.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetHistoricalPricesRequestAmino): QueryGetHistoricalPricesRequest {
    return {
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      periodLengthInSeconds: BigInt(object.periodLengthInSeconds),
      numOfPeriods: BigInt(object.numOfPeriods)
    };
  },
  toAmino(message: QueryGetHistoricalPricesRequest): QueryGetHistoricalPricesRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.periodLengthInSeconds = message.periodLengthInSeconds ? message.periodLengthInSeconds.toString() : undefined;
    obj.numOfPeriods = message.numOfPeriods ? message.numOfPeriods.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetHistoricalPricesRequestAminoMsg): QueryGetHistoricalPricesRequest {
    return QueryGetHistoricalPricesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHistoricalPricesRequestProtoMsg): QueryGetHistoricalPricesRequest {
    return QueryGetHistoricalPricesRequest.decode(message.value);
  },
  toProto(message: QueryGetHistoricalPricesRequest): Uint8Array {
    return QueryGetHistoricalPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHistoricalPricesRequest): QueryGetHistoricalPricesRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesRequest",
      value: QueryGetHistoricalPricesRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetHistoricalPricesResponse(): QueryGetHistoricalPricesResponse {
  return {
    prices: []
  };
}
export const QueryGetHistoricalPricesResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse",
  encode(message: QueryGetHistoricalPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      PriceCandlestick.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetHistoricalPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetHistoricalPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(PriceCandlestick.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetHistoricalPricesResponse>): QueryGetHistoricalPricesResponse {
    const message = createBaseQueryGetHistoricalPricesResponse();
    message.prices = object.prices?.map(e => PriceCandlestick.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryGetHistoricalPricesResponseAmino): QueryGetHistoricalPricesResponse {
    return {
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => PriceCandlestick.fromAmino(e)) : []
    };
  },
  toAmino(message: QueryGetHistoricalPricesResponse): QueryGetHistoricalPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? PriceCandlestick.toAmino(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryGetHistoricalPricesResponseAminoMsg): QueryGetHistoricalPricesResponse {
    return QueryGetHistoricalPricesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetHistoricalPricesResponseProtoMsg): QueryGetHistoricalPricesResponse {
    return QueryGetHistoricalPricesResponse.decode(message.value);
  },
  toProto(message: QueryGetHistoricalPricesResponse): Uint8Array {
    return QueryGetHistoricalPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetHistoricalPricesResponse): QueryGetHistoricalPricesResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetHistoricalPricesResponse",
      value: QueryGetHistoricalPricesResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketSummaryRequest(): QueryGetMarketSummaryRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    lookbackInSeconds: BigInt(0)
  };
}
export const QueryGetMarketSummaryRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest",
  encode(message: QueryGetMarketSummaryRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.lookbackInSeconds !== BigInt(0)) {
      writer.uint32(32).uint64(message.lookbackInSeconds);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketSummaryRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketSummaryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.lookbackInSeconds = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketSummaryRequest>): QueryGetMarketSummaryRequest {
    const message = createBaseQueryGetMarketSummaryRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.lookbackInSeconds = object.lookbackInSeconds !== undefined && object.lookbackInSeconds !== null ? BigInt(object.lookbackInSeconds.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetMarketSummaryRequestAmino): QueryGetMarketSummaryRequest {
    return {
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      lookbackInSeconds: BigInt(object.lookbackInSeconds)
    };
  },
  toAmino(message: QueryGetMarketSummaryRequest): QueryGetMarketSummaryRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.lookbackInSeconds = message.lookbackInSeconds ? message.lookbackInSeconds.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketSummaryRequestAminoMsg): QueryGetMarketSummaryRequest {
    return QueryGetMarketSummaryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketSummaryRequestProtoMsg): QueryGetMarketSummaryRequest {
    return QueryGetMarketSummaryRequest.decode(message.value);
  },
  toProto(message: QueryGetMarketSummaryRequest): Uint8Array {
    return QueryGetMarketSummaryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketSummaryRequest): QueryGetMarketSummaryRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryRequest",
      value: QueryGetMarketSummaryRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMarketSummaryResponse(): QueryGetMarketSummaryResponse {
  return {
    totalVolume: "",
    totalVolumeNotional: "",
    highPrice: "",
    lowPrice: "",
    lastPrice: ""
  };
}
export const QueryGetMarketSummaryResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse",
  encode(message: QueryGetMarketSummaryResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.totalVolume !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.totalVolume, 18).atomics);
    }
    if (message.totalVolumeNotional !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.totalVolumeNotional, 18).atomics);
    }
    if (message.highPrice !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.highPrice, 18).atomics);
    }
    if (message.lowPrice !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.lowPrice, 18).atomics);
    }
    if (message.lastPrice !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.lastPrice, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMarketSummaryResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMarketSummaryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalVolume = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 2:
          message.totalVolumeNotional = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 3:
          message.highPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 4:
          message.lowPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.lastPrice = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMarketSummaryResponse>): QueryGetMarketSummaryResponse {
    const message = createBaseQueryGetMarketSummaryResponse();
    message.totalVolume = object.totalVolume ?? "";
    message.totalVolumeNotional = object.totalVolumeNotional ?? "";
    message.highPrice = object.highPrice ?? "";
    message.lowPrice = object.lowPrice ?? "";
    message.lastPrice = object.lastPrice ?? "";
    return message;
  },
  fromAmino(object: QueryGetMarketSummaryResponseAmino): QueryGetMarketSummaryResponse {
    return {
      totalVolume: object.totalVolume,
      totalVolumeNotional: object.totalVolumeNotional,
      highPrice: object.highPrice,
      lowPrice: object.lowPrice,
      lastPrice: object.lastPrice
    };
  },
  toAmino(message: QueryGetMarketSummaryResponse): QueryGetMarketSummaryResponseAmino {
    const obj: any = {};
    obj.totalVolume = message.totalVolume;
    obj.totalVolumeNotional = message.totalVolumeNotional;
    obj.highPrice = message.highPrice;
    obj.lowPrice = message.lowPrice;
    obj.lastPrice = message.lastPrice;
    return obj;
  },
  fromAminoMsg(object: QueryGetMarketSummaryResponseAminoMsg): QueryGetMarketSummaryResponse {
    return QueryGetMarketSummaryResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMarketSummaryResponseProtoMsg): QueryGetMarketSummaryResponse {
    return QueryGetMarketSummaryResponse.decode(message.value);
  },
  toProto(message: QueryGetMarketSummaryResponse): Uint8Array {
    return QueryGetMarketSummaryResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMarketSummaryResponse): QueryGetMarketSummaryResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetMarketSummaryResponse",
      value: QueryGetMarketSummaryResponse.encode(message).finish()
    };
  }
};
function createBaseQueryOrderSimulationRequest(): QueryOrderSimulationRequest {
  return {
    order: undefined,
    contractAddr: ""
  };
}
export const QueryOrderSimulationRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest",
  encode(message: QueryOrderSimulationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      Order.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.contractAddr !== "") {
      writer.uint32(18).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderSimulationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderSimulationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = Order.decode(reader, reader.uint32());
          break;
        case 2:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderSimulationRequest>): QueryOrderSimulationRequest {
    const message = createBaseQueryOrderSimulationRequest();
    message.order = Order.fromPartial(object.order ?? {});
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryOrderSimulationRequestAmino): QueryOrderSimulationRequest {
    return {
      order: object?.order ? Order.fromAmino(object.order) : Order.fromPartial({}),
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryOrderSimulationRequest): QueryOrderSimulationRequestAmino {
    const obj: any = {};
    obj.order = message.order ? Order.toAmino(message.order) : undefined;
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryOrderSimulationRequestAminoMsg): QueryOrderSimulationRequest {
    return QueryOrderSimulationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderSimulationRequestProtoMsg): QueryOrderSimulationRequest {
    return QueryOrderSimulationRequest.decode(message.value);
  },
  toProto(message: QueryOrderSimulationRequest): Uint8Array {
    return QueryOrderSimulationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderSimulationRequest): QueryOrderSimulationRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationRequest",
      value: QueryOrderSimulationRequest.encode(message).finish()
    };
  }
};
function createBaseQueryOrderSimulationResponse(): QueryOrderSimulationResponse {
  return {
    ExecutedQuantity: ""
  };
}
export const QueryOrderSimulationResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse",
  encode(message: QueryOrderSimulationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.ExecutedQuantity !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.ExecutedQuantity, 18).atomics);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryOrderSimulationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOrderSimulationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ExecutedQuantity = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryOrderSimulationResponse>): QueryOrderSimulationResponse {
    const message = createBaseQueryOrderSimulationResponse();
    message.ExecutedQuantity = object.ExecutedQuantity ?? "";
    return message;
  },
  fromAmino(object: QueryOrderSimulationResponseAmino): QueryOrderSimulationResponse {
    return {
      ExecutedQuantity: object.ExecutedQuantity
    };
  },
  toAmino(message: QueryOrderSimulationResponse): QueryOrderSimulationResponseAmino {
    const obj: any = {};
    obj.ExecutedQuantity = message.ExecutedQuantity;
    return obj;
  },
  fromAminoMsg(object: QueryOrderSimulationResponseAminoMsg): QueryOrderSimulationResponse {
    return QueryOrderSimulationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryOrderSimulationResponseProtoMsg): QueryOrderSimulationResponse {
    return QueryOrderSimulationResponse.decode(message.value);
  },
  toProto(message: QueryOrderSimulationResponse): Uint8Array {
    return QueryOrderSimulationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryOrderSimulationResponse): QueryOrderSimulationResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryOrderSimulationResponse",
      value: QueryOrderSimulationResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetMatchResultRequest(): QueryGetMatchResultRequest {
  return {
    contractAddr: ""
  };
}
export const QueryGetMatchResultRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest",
  encode(message: QueryGetMatchResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMatchResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMatchResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMatchResultRequest>): QueryGetMatchResultRequest {
    const message = createBaseQueryGetMatchResultRequest();
    message.contractAddr = object.contractAddr ?? "";
    return message;
  },
  fromAmino(object: QueryGetMatchResultRequestAmino): QueryGetMatchResultRequest {
    return {
      contractAddr: object.contractAddr
    };
  },
  toAmino(message: QueryGetMatchResultRequest): QueryGetMatchResultRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    return obj;
  },
  fromAminoMsg(object: QueryGetMatchResultRequestAminoMsg): QueryGetMatchResultRequest {
    return QueryGetMatchResultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMatchResultRequestProtoMsg): QueryGetMatchResultRequest {
    return QueryGetMatchResultRequest.decode(message.value);
  },
  toProto(message: QueryGetMatchResultRequest): Uint8Array {
    return QueryGetMatchResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMatchResultRequest): QueryGetMatchResultRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultRequest",
      value: QueryGetMatchResultRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetMatchResultResponse(): QueryGetMatchResultResponse {
  return {
    result: undefined
  };
}
export const QueryGetMatchResultResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse",
  encode(message: QueryGetMatchResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== undefined) {
      MatchResult.encode(message.result, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetMatchResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetMatchResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = MatchResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetMatchResultResponse>): QueryGetMatchResultResponse {
    const message = createBaseQueryGetMatchResultResponse();
    message.result = MatchResult.fromPartial(object.result ?? {});
    return message;
  },
  fromAmino(object: QueryGetMatchResultResponseAmino): QueryGetMatchResultResponse {
    return {
      result: object?.result ? MatchResult.fromAmino(object.result) : MatchResult.fromPartial({})
    };
  },
  toAmino(message: QueryGetMatchResultResponse): QueryGetMatchResultResponseAmino {
    const obj: any = {};
    obj.result = message.result ? MatchResult.toAmino(message.result) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetMatchResultResponseAminoMsg): QueryGetMatchResultResponse {
    return QueryGetMatchResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetMatchResultResponseProtoMsg): QueryGetMatchResultResponse {
    return QueryGetMatchResultResponse.decode(message.value);
  },
  toProto(message: QueryGetMatchResultResponse): Uint8Array {
    return QueryGetMatchResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetMatchResultResponse): QueryGetMatchResultResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetMatchResultResponse",
      value: QueryGetMatchResultResponse.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderCountRequest(): QueryGetOrderCountRequest {
  return {
    contractAddr: "",
    priceDenom: "",
    assetDenom: "",
    price: "",
    positionDirection: 0
  };
}
export const QueryGetOrderCountRequest = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest",
  encode(message: QueryGetOrderCountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddr !== "") {
      writer.uint32(10).string(message.contractAddr);
    }
    if (message.priceDenom !== "") {
      writer.uint32(18).string(message.priceDenom);
    }
    if (message.assetDenom !== "") {
      writer.uint32(26).string(message.assetDenom);
    }
    if (message.price !== "") {
      writer.uint32(34).string(Decimal.fromUserInput(message.price, 18).atomics);
    }
    if (message.positionDirection !== 0) {
      writer.uint32(40).int32(message.positionDirection);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderCountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderCountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contractAddr = reader.string();
          break;
        case 2:
          message.priceDenom = reader.string();
          break;
        case 3:
          message.assetDenom = reader.string();
          break;
        case 4:
          message.price = Decimal.fromAtomics(reader.string(), 18).toString();
          break;
        case 5:
          message.positionDirection = (reader.int32() as any);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrderCountRequest>): QueryGetOrderCountRequest {
    const message = createBaseQueryGetOrderCountRequest();
    message.contractAddr = object.contractAddr ?? "";
    message.priceDenom = object.priceDenom ?? "";
    message.assetDenom = object.assetDenom ?? "";
    message.price = object.price ?? "";
    message.positionDirection = object.positionDirection ?? 0;
    return message;
  },
  fromAmino(object: QueryGetOrderCountRequestAmino): QueryGetOrderCountRequest {
    return {
      contractAddr: object.contractAddr,
      priceDenom: object.priceDenom,
      assetDenom: object.assetDenom,
      price: object.price,
      positionDirection: isSet(object.positionDirection) ? positionDirectionFromJSON(object.positionDirection) : -1
    };
  },
  toAmino(message: QueryGetOrderCountRequest): QueryGetOrderCountRequestAmino {
    const obj: any = {};
    obj.contractAddr = message.contractAddr;
    obj.priceDenom = message.priceDenom;
    obj.assetDenom = message.assetDenom;
    obj.price = message.price;
    obj.positionDirection = message.positionDirection;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderCountRequestAminoMsg): QueryGetOrderCountRequest {
    return QueryGetOrderCountRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderCountRequestProtoMsg): QueryGetOrderCountRequest {
    return QueryGetOrderCountRequest.decode(message.value);
  },
  toProto(message: QueryGetOrderCountRequest): Uint8Array {
    return QueryGetOrderCountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderCountRequest): QueryGetOrderCountRequestProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountRequest",
      value: QueryGetOrderCountRequest.encode(message).finish()
    };
  }
};
function createBaseQueryGetOrderCountResponse(): QueryGetOrderCountResponse {
  return {
    count: BigInt(0)
  };
}
export const QueryGetOrderCountResponse = {
  typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse",
  encode(message: QueryGetOrderCountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.count !== BigInt(0)) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGetOrderCountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetOrderCountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: DeepPartial<QueryGetOrderCountResponse>): QueryGetOrderCountResponse {
    const message = createBaseQueryGetOrderCountResponse();
    message.count = object.count !== undefined && object.count !== null ? BigInt(object.count.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: QueryGetOrderCountResponseAmino): QueryGetOrderCountResponse {
    return {
      count: BigInt(object.count)
    };
  },
  toAmino(message: QueryGetOrderCountResponse): QueryGetOrderCountResponseAmino {
    const obj: any = {};
    obj.count = message.count ? message.count.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGetOrderCountResponseAminoMsg): QueryGetOrderCountResponse {
    return QueryGetOrderCountResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGetOrderCountResponseProtoMsg): QueryGetOrderCountResponse {
    return QueryGetOrderCountResponse.decode(message.value);
  },
  toProto(message: QueryGetOrderCountResponse): Uint8Array {
    return QueryGetOrderCountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGetOrderCountResponse): QueryGetOrderCountResponseProtoMsg {
    return {
      typeUrl: "/seiprotocol.seichain.dex.QueryGetOrderCountResponse",
      value: QueryGetOrderCountResponse.encode(message).finish()
    };
  }
};