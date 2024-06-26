import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as seiprotocolSeichainDexTxRegistry from "./seichain/dex/tx.registry.js";
import * as seiprotocolSeichainOracleTxRegistry from "./seichain/oracle/tx.registry.js";
import * as seiprotocolSeichainTokenfactoryTxRegistry from "./seichain/tokenfactory/tx.registry.js";
import * as seiprotocolSeichainDexTxAmino from "./seichain/dex/tx.amino.js";
import * as seiprotocolSeichainOracleTxAmino from "./seichain/oracle/tx.amino.js";
import * as seiprotocolSeichainTokenfactoryTxAmino from "./seichain/tokenfactory/tx.amino.js";
export const seiprotocolAminoConverters = {
  ...seiprotocolSeichainDexTxAmino.AminoConverter,
  ...seiprotocolSeichainOracleTxAmino.AminoConverter,
  ...seiprotocolSeichainTokenfactoryTxAmino.AminoConverter
};
export const seiprotocolProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...seiprotocolSeichainDexTxRegistry.registry, ...seiprotocolSeichainOracleTxRegistry.registry, ...seiprotocolSeichainTokenfactoryTxRegistry.registry];
export const getSigningSeiprotocolClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...seiprotocolProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...seiprotocolAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningSeiprotocolClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningSeiprotocolClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};