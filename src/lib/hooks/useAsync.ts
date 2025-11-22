'use client';

import { useState, useCallback, useEffect } from 'react';

interface AsyncState<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

type AsyncFunction<T> = () => Promise<T>;

export function useAsync<T>(
  asyncFunction: AsyncFunction<T>,
  immediate = true,
  dependencies: any[] = []
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    isLoading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState(prevState => ({ ...prevState, isLoading: true, error: null }));

    try {
      const data = await asyncFunction();
      setState({ data, isLoading: false, error: null });
      return data;
    } catch (error) {
      setState({ data: null, isLoading: false, error: error as Error });
      throw error;
    }
  }, [asyncFunction, ...dependencies]);

  useEffect(() => {
    if (immediate) {
      execute().catch(error => {
        console.error('Error en useAsync:', error);
      });
    }
  }, [execute, immediate]);

  const reset = useCallback(() => {
    setState({ data: null, isLoading: false, error: null });
  }, []);

  return { ...state, execute, reset };
}