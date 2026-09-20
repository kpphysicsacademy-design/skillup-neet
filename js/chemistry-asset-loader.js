/* SkillUp Chemistry Asset Loader */
(function () {
  "use strict";
  const state = {
    indexes: Object.create(null),
    byId: Object.create(null)
  };

  const DEFAULT_INDEXES = [
    "data/chemistry/asset-library.json",
    "data/chemistry/reaction-library.json",
    "data/chemistry/diagram-library.json"
  ];

  async function load(urls) {
    const list = Array.isArray(urls) && urls.length ? urls : DEFAULT_INDEXES;
    const results = await Promise.all(list.map(async url => {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error("Unable to load Chemistry asset library: " + response.status + " " + url);
      const data = await response.json();
      state.indexes[url] = data;
      (data.assets || []).forEach(asset => {
        if (asset.id) state.byId[asset.id] = asset;
      });
      return data;
    }));
    return results;
  }

  function get(id) {
    return id ? state.byId[id] || null : null;
  }

  function path(id) {
    const asset = get(id);
    return asset && asset.path ? asset.path : null;
  }

  function search(term, assetType) {
    const q = String(term || "").trim().toLowerCase();
    return Object.values(state.byId).filter(asset => {
      if (assetType && asset.assetType !== assetType) return false;
      if (!q) return true;
      return [asset.id, asset.name, asset.commonName, asset.formula, ...(asset.tags || [])]
        .filter(Boolean)
        .join(" ").toLowerCase()
        .includes(q);
    });
  }

  window.SkillUpChemistryAssets = { load, get, path, search, state };
})();
