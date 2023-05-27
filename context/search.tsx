import { createContext, useContext, useState } from "react";


const Context = createContext<any>({});

export function SearchProvider({ children }: any) {
  const [value, setValue] = useState<string>();
  return <Context.Provider value={[value, setValue]}>{children}</Context.Provider>;
}

export function useSearchContext() {
  return useContext(Context);
}
