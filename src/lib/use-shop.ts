import { useCallback, useEffect, useState } from "react";
import { DEFAULT_CONFIG, STORAGE_KEY, type ShopConfig } from "./catalog";

function read(): ShopConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_CONFIG;
    const parsed = JSON.parse(raw) as ShopConfig;
    if (!parsed?.products?.length || !parsed.name) return DEFAULT_CONFIG;
    return parsed;
  } catch {
    return DEFAULT_CONFIG;
  }
}

export function useShop() {
  const [config, setConfig] = useState<ShopConfig>(DEFAULT_CONFIG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setConfig(read());
    setReady(true);
  }, []);

  const save = useCallback((next: ShopConfig) => {
    setConfig(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setConfig(DEFAULT_CONFIG);
  }, []);

  return { config, ready, save, reset };
}
