import React, { useEffect, useState } from "react";
import * as styles from "./SearchContainer.module.scss";
import searchIndex from "./searchIndex.json";
import * as JsSearch from "js-search";

export default function SearchContainer() {
  const [search, setSearch] = useState({ results: [], engine: {}, query: "" });

  useEffect(() => {
    rebuildIndex();
  }, []);

  const rebuildIndex = () => {
    const searchEngine = new JsSearch.Search("slug");
    //for case sensitive
    searchEngine.sanitizer = new JsSearch.LowerCaseSanitizer();
    searchEngine.indexStrategy = new JsSearch.PrefixIndexStrategy();
    searchEngine.searchIndex = new JsSearch.TfIdfSearchIndex("slug");
    searchEngine.addIndex("title");
    searchEngine.addIndex("subtitle");
    searchEngine.addDocument(searchIndex.blogs);
    setSearch({ ...search, engine: searchEngine });
  };

  const performSearch = (e) => {
    setSearch({ ...search, query: e.target.value });
  };

  return (
    <div>
      {JSON.stringify(searchIndex)}
      <input
        onChange={performSearch}
        value={search.query}
        style={{ width: "200px" }}
        className="input"
        type="text"
        placeholder="Search"
      />
      {search.results.length > 0 && (
        <div className={`${styles.options} select is-multiple`}>
          <ul>
            {search.results.map((result) => (
              <li
                role="presentation"
                key={result.slug}
                className={`${styles.option} p-2`}
              >
                <p className={`${styles.title}`}>{result.title}</p>
                <p className={`${styles.subtitle}`}>{result.subtitle}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
