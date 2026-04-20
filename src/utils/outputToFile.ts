import fs from 'node:fs';
import { store } from '../state/store';
import { formatCurrency } from './formatCurrency';

export const outputToFile = () => {
  const { debugMode, outputFile, merchantMap } = store.getState();

  const writer = fs.createWriteStream(outputFile);

  writer.write('Merchant Summaries:\n\n');
  merchantMap.keys().forEach((key) => {
    const currentMerchant = merchantMap.get(key);
    if (!currentMerchant) {
      return;
    }
    const totalTransactions = currentMerchant.length;
    const total = currentMerchant.reduce(
      (acc, cur) => acc + Number(cur.Amount),
      0,
    );
    const totalAmount = formatCurrency(total);
    writer.write(
      `${key} - Total Transactions: ${totalTransactions}, Total Amount: ${totalAmount}\n`,
    );
  });
  if (debugMode) {
    console.info(`Output written to ${outputFile}`);
  }
};
