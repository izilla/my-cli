import { createStore } from 'zustand/vanilla';
import type { Data } from '../types';

interface StateStore {
  debugMode: boolean;
  updateDebugMode: (value: boolean) => void;
  outputFile: string;
  updateOutputFile: (value: string) => void;
  inputFile?: string;
  updateInputFile: (value: string) => void;
  merchantMap: Map<string, Data[]>;
  updateMerchantMap: (value: Map<string, Data[]>) => void;
}

export const store = createStore<StateStore>((set) => ({
  debugMode: false,
  updateDebugMode: (value: boolean) => {
    set({
      debugMode: value,
    });
  },
  outputFile: 'output.txt',
  updateOutputFile: (value: string) => {
    set({
      outputFile: value,
    });
  },
  inputFile: undefined,
  updateInputFile: (value: string) => {
    set({
      inputFile: value,
    });
  },
  merchantMap: new Map<string, Data[]>(),
  updateMerchantMap: (value: Map<string, Data[]>) =>
    set({
      merchantMap: value,
    }),
}));
