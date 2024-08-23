import { useCallback, useState } from "react";
import { SearchInput } from "../components/search-input/search-input";
import { Actives } from "../features/actives/actives";

export default function Search() {
  const [activeTerm, setActiveTerm] = useState<Uppercase<string>>("");

  const onSearch = useCallback((query: Uppercase<string>) => {
    setActiveTerm(query);
  }, []);

  return (
    <>
      <SearchInput onSearch={onSearch} />
      <Actives activeTerm={activeTerm} />
    </>
  );
}
