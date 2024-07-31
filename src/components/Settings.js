import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "../context/NewsContext";

const Settings = ({ articles }) => {
  const { state, dispatch } = useContext(NewsContext);
  const [sources, setSources] = useState(state.preferences.sources.join(","));
  const [categories, setCategories] = useState(
    state.preferences.categories.join(",")
  );
  const [authors, setAuthors] = useState(state.preferences.authors.join(","));
  const [allAuthors, setAllAuthors] = useState([]);
  const [allSources, setAllSources] = useState([]);

  const handleSavePreferences = () => {
    dispatch({
      type: "SET_PREFERENCES",
      payload: {
        sources: sources.split(",").map((source) => source.trim()),
        categories: categories.split(",").map((category) => category.trim()),
        authors: authors.split(",").map((author) => author.trim()),
      },
    });
  };

  useEffect(() => {
    let allAuthors_ = [];
    let allSources_ = [];
    articles?.map((el) => {
      if (el?.author) {
        allAuthors_.push(el.author);
      }
      if (el?.source?.name) {
        allSources_.push(el?.source?.name);
      }
    });
    setAllAuthors([...new Set(allAuthors_)]);
    setAllSources([...new Set(allSources_)]);
  }, [articles]);

  return (
    <div className="settings">
      <h3>Settings</h3>
      <div>
        <label>Preferred Sources</label>
        <select onChange={(e) => setSources(e.target.value)} value={sources}>
          <option value={""}>Select Sources</option>
          {allSources?.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Preferred Authors</label>
        <select onChange={(e) => setAuthors(e.target.value)} value={authors}>
          <option value={""}>Select Authors</option>
          {allAuthors?.map((el) => {
            return <option value={el}>{el}</option>;
          })}
        </select>
      </div>
      <button onClick={handleSavePreferences}>Save Preferences</button>
    </div>
  );
};

export default Settings;
