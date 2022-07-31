import React, { useContext } from 'react';

export const WeightsContext = React.createContext<{
  weights: Record<string, number>;
  setWeights: React.Dispatch<React.SetStateAction<Record<string, number>>>;
}>({ weights: {}, setWeights: () => {} });
export const useWeightsContext = () => useContext(WeightsContext);
