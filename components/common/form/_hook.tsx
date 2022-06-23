import { useCallback } from "react";

export function useContainerHook() {
  const onSubmitHandler = useCallback((e: React.SyntheticEvent) => {
    console.info("onSubmitHandler", e.type);
  }, []);

  return {
    onSubmitHandler,
  };
}
