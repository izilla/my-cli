import fs from 'node:fs';
import csv from 'csv-parser';
import type { Data } from '../types';
import { store } from '../state/store';
import { finished } from 'stream/promises'

export const buildMerchantMap = async () => {
  const { inputFile, updateMerchantMap } = store.getState();
  const merchantMap = new Map<string, Data[]>();

  const stream = fs.createReadStream(inputFile ?? '')
    .pipe(csv())
    .on('data', (data) => {
      const currentMerchant = data.Merchantname;
      if (merchantMap.has(currentMerchant)) {
        merchantMap?.get(currentMerchant)?.push(data);
      } else {
        merchantMap.set(currentMerchant, [
          data,
        ]);
      }
    })
    .on('end', () => {
      updateMerchantMap(merchantMap);
    });

  await finished(stream);
};
