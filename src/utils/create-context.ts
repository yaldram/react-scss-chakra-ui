import React from "react";

export interface CreateContextOptions {
  strict?: boolean;
  errorMessage?: string;
  name?: string;
}

type CreateContextReturn<T> = [React.Provider<T>, () => T, React.Context<T>];

export function createContext<ContextType>(options: CreateContextOptions = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name,
  } = options;

  const componentContext = React.createContext<ContextType | undefined>(
    undefined
  );

  componentContext.displayName = name;

  function useContext() {
    const context = React.useContext(componentContext);

    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      Error.captureStackTrace?.(error, useContext);
      throw error;
    }

    return context;
  }

  return [
    componentContext.Provider,
    useContext,
    componentContext,
  ] as CreateContextReturn<ContextType>;
}
