#!/usr/bin/env node
import { setup } from './setup';
import { buildMerchantMap } from './utils/buildMerchantMap';
import { outputToFile } from './utils/outputToFile';

const main = async () => {
  setup();

  await buildMerchantMap()
  outputToFile()
};

// biome-ignore lint/style/noProcessEnv: for branching during tests
if (process.env.NODE_ENV !== 'test') {
  main();
}
