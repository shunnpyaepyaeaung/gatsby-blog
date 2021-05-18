import React, { useEffect, useState } from "react";
import * as styles from "./SearchContainer.module.scss";
import searchIndex from "./searchIndex.json";
import * as JsSearch from "js-search";

export default function SearchContainer() {
  const [search, setSearch] = useState({
    results: [
      {
        slug: "blog-1",
        title: "blog 1 title",
        subtitle: "blog 1 subtitle",
      },
      {
        slug: "blog-2",
        title: "blog 2 title",
        subtitle: "blog 2 subtitle",
      },
    ],
  });

  useEffect(() => {
    rebuildIndex();
  }, []);

  const rebuildIndex = () => {
    const searchEngine = new JsSearch.Search("slug");
    searchEngine.addIndex("title");
    searchEngine.addIndex("subtitle");
    searchEngine.addDocument(searchIndex.blogs);
    const search1 = searchEngine.search("pattern");
    const search2 = searchEngine.search("Gatsby");
    debugger;
  };

  return (
    <div>
      {JSON.stringify(searchIndex)}
      <input
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
