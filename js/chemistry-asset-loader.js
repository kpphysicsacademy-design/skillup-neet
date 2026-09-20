/* SkillUp Chemistry Asset Loader
 * Loads the central Chemistry asset index and resolves stable asset IDs.
 */
(function () {
  "use strict";
  const state = { index: null, byId: Object.create(null) };

  async function load(url) {
    const response = await fetch(url || "data/chemistry/structure-library.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Unable to load Chemistry asset library: " + response.status);
    const data = await response.json();
    state.index = data;
    state.byId = Object.create(null);
    (data.assets || []).forEach(asset => { if (asset.id) state.byId[asset.id] = asset; });
    return data;
  }

  function get(id) {
    return id ? state.byId[id] || null : null;
  }

  function path(id) {
    const asset = get(id);
    return asset ? asset.path : null;
  }

  window.SkillUpChemistryAssets = { load, get, path, state };
})();
