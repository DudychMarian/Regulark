import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";

import patternsCollection from "./assets/patterns.json";

import styles from "./App.module.scss";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchValue, setSearchValue] = useState<string>("");

  const location = useLocation().search;

  useEffect(() => {
    let value = new URLSearchParams(location).get("search");
    setSearch(value ? value : "");
  }, [location]);

  useEffect(() => {
    setSearch(searchValue);
  }, [searchValue]);

  const result = patternsCollection.filter((obj) =>
    obj.tags.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim())
  );

  return (
    <div className={styles.container}>
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <main className={styles.wrapper}>{result.length ? <Home result={result} /> : <NotFound />}</main>
      <Footer />
    </div>
  );
}

export default App;
