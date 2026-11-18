/* Microchip FPGA Open-Source Hub - application logic (no dependencies). */
(function () {
  "use strict";
  const H = window.HUB;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (t) => String(t ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const CAT = Object.fromEntries(H.CATEGORIES.map((c) => [c.id, c]));
  const FAM = Object.fromEntries(H.FAMILIES.map((f) => [f.id, f]));
  const KIT = Object.fromEntries(H.KITS.map((k) => [k.id, k]));
  const owner = (x) => (x.org ? x.r : x.r.split("/")[0]);
  const repoName = (x) => (x.org ? x.r : x.r.split("/")[1]);
  const ghUrl = (r) => "https://github.com/" + r;
  const avatar = (o, size = 40) => {
    const meta = H.ORGS[o];
    return meta ? `https://avatars.githubusercontent.com/u/${meta.id}?v=4&s=${size}` : `https://github.com/${encodeURIComponent(o)}.png?size=${size}`;
  };

  const LANG = { C: "#555555", "C++": "#f34b7d", Python: "#3572A5", Tcl: "#e4cc98", Verilog: "#b2b7f8", Shell: "#89e051", BitBake: "#00bce4",
                 JavaScript: "#f1e05a", HTML: "#e34c26", Makefile: "#427819" };

  const ICON = {
    soc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="5" width="14" height="14" rx="1.5"/><rect x="9" y="9" width="6" height="6" fill="currentColor" stroke="none"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    fpga: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="1.5"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>',
    cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 18 12 4l8 14H4Z"/><path d="M8.5 12h7"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/></svg>',
    ai: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="5" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="12" r="2.4"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 7l3 3.5M7 17l3-3.5M17 7l-3 3.5M17 17l-3-3.5"/></svg>',
    os: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="14" rx="1.5"/><path d="m7 9 3 2.5L7 14M12 14h5M8 21h8"/></svg>',
    star: '<svg viewBox="0 0 16 16" fill="currentColor"><path d="M8 .9l2.2 4.6 5 .7-3.6 3.5.9 5L8 12.3 3.5 14.7l.9-5L.8 6.2l5-.7z"/></svg>',
    fork: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="4" cy="3" r="1.6"/><circle cx="12" cy="3" r="1.6"/><circle cx="8" cy="13" r="1.6"/><path d="M4 4.6v1.4c0 1.4 1 2.2 2.2 2.2h3.6c1.2 0 2.2-.8 2.2-2.2V4.6M8 8.2v3.2"/></svg>',
    clock: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="8" cy="8" r="6.3"/><path d="M8 4.5V8l2.5 1.6"/></svg>',
    doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c.6-3.6 3-5.5 6-5.5s5.4 1.9 6 5.5"/><circle cx="17" cy="9" r="2.4"/><path d="M16.5 14.6c2.4.2 4 1.8 4.5 4.6"/></svg>'
  };

  const ago = (iso) => {
    if (!iso) return "";
    const days = Math.max(0, Math.round((Date.now() - new Date(iso + "T00:00:00Z").getTime()) / 864e5));
    if (days < 1) return "today";
    if (days < 31) return days + (days === 1 ? " day ago" : " days ago");
    const m = Math.round(days / 30.4);
    if (m < 12) return m + (m === 1 ? " month ago" : " months ago");
    const y = Math.round(days / 365);
    return y + (y === 1 ? " year ago" : " years ago");
  };
  const fmtDate = (iso) => (iso ? new Date(iso + "T00:00:00Z").toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" }) : "");

  // ------------------------------------------------------------------ state
  const state = { q: "", cats: new Set(), fams: new Set(), orgs: new Set(), kit: "", archived: false, sort: "stars", view: "grid" };

  function readUrl() {
    const p = new URLSearchParams(location.search);
    state.q = p.get("q") || "";
    ["cats", "fams", "orgs"].forEach((k) => { state[k] = new Set((p.get(k) || "").split(",").filter(Boolean)); });
    state.kit = p.get("kit") || "";
    state.archived = p.get("archived") === "1" || state.cats.has("legacy");
    state.sort = p.get("sort") || "stars";
    state.view = p.get("view") === "table" ? "table" : "grid";
  }
  function writeUrl() {
    const p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    ["cats", "fams", "orgs"].forEach((k) => { if (state[k].size) p.set(k, [...state[k]].join(",")); });
    if (state.kit) p.set("kit", state.kit);
    if (state.archived) p.set("archived", "1");
    if (state.sort !== "stars") p.set("sort", state.sort);
    if (state.view !== "grid") p.set("view", state.view);
    const qs = p.toString();
    // Opening the page as a local file (file://) may block URL rewriting; filters still work.
    try { history.replaceState(null, "", location.pathname + (qs ? "?" + qs : "") + location.hash); } catch (_) { /* ignore */ }
  }

  // --------------------------------------------------------------- matching
  const hay = (x) => [x.r, x.d, CAT[x.cat]?.name, x.l, x.kit ? KIT[x.kit]?.name : "", ...(x.fam || []).map((f) => FAM[f]?.name)].join(" ").toLowerCase();
  H.REPOS.forEach((x) => { x._h = hay(x); });

  function matches(x, skip) {
    if (!state.archived && x.legacy) return false;
    if (skip !== "cats" && state.cats.size && !state.cats.has(x.cat)) return false;
    if (skip !== "fams" && state.fams.size && !(x.fam || []).some((f) => state.fams.has(f))) return false;
    if (skip !== "orgs" && state.orgs.size && !state.orgs.has(owner(x))) return false;
    if (state.kit && x.kit !== state.kit) return false;
    if (state.q) {
      const terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.every((t) => x._h.includes(t))) return false;
    }
    return true;
  }

  const SORTS = {
    stars: (a, b) => b.s - a.s || b.f - a.f || a.r.localeCompare(b.r),
    updated: (a, b) => (b.u || "").localeCompare(a.u || "") || b.s - a.s,
    name: (a, b) => repoName(a).localeCompare(repoName(b), undefined, { sensitivity: "base" })
  };

  // ------------------------------------------------------------ static parts
  function renderStats() {
    const active = H.REPOS.filter((x) => !x.legacy && !x.org);
    const orgs = new Set(active.map(owner));
    const stars = active.reduce((n, x) => n + x.s, 0);
    const forks = active.reduce((n, x) => n + x.f, 0);
    const vals = { repos: active.length, orgs: orgs.size, kits: H.KITS.length, stars, forks };
    Object.entries(vals).forEach(([k, v]) => { const el = $(`[data-stat="${k}"]`); if (el) el.textContent = v.toLocaleString(); });
  }

  function renderFamilies() {
    $("#families").innerHTML = H.FAMILIES.map((f) => {
      const n = H.REPOS.filter((x) => !x.legacy && (x.fam || []).includes(f.id)).length;
      return `<button class="family" type="button" data-fam="${f.id}" aria-label="Show ${esc(f.name)} repositories">
        <span class="ico">${ICON[f.icon] || ""}</span>
        <h3>${esc(f.name)}</h3>
        <p>${esc(f.blurb)}</p>
        <span class="foot"><span><b>${n}</b> repositories</span><span class="go">Explore &rarr;</span></span>
      </button>`;
    }).join("");
    $("#families").addEventListener("click", (e) => {
      const b = e.target.closest("[data-fam]"); if (!b) return;
      resetFilters(); state.fams.add(b.dataset.fam); syncControls(); renderCatalog(); goCatalog();
    });
  }

  function renderKits() {
    $("#kits-grid").innerHTML = H.KITS.map((k) => {
      const repos = H.REPOS.filter((x) => x.kit === k.id && !x.legacy).sort(SORTS.stars);
      const shown = repos.slice(0, 4);
      const fam = FAM[k.fam];
      return `<article class="kit">
        <div class="kit-body">
          <span class="kit-fam">${esc(fam ? fam.name : "")}</span>
          <h3>${esc(k.name)}</h3>
          <ul>${shown.map((x) => `<li><a href="${ghUrl(x.r)}" title="${esc(x.d)}">${esc(repoName(x))}</a></li>`).join("")}
            ${repos.length > shown.length ? `<li class="more">+ ${repos.length - shown.length} more</li>` : ""}</ul>
          <div class="kit-actions">
            <button class="btn btn-primary btn-sm" type="button" data-kit="${k.id}">View ${repos.length} ${repos.length === 1 ? "repository" : "repositories"}</button>
            ${k.url ? `<a class="btn btn-ghost btn-sm" href="${esc(k.url)}">Product page</a>` : ""}
          </div>
        </div>
      </article>`;
    }).join("");
    $("#kits-grid").addEventListener("click", (e) => {
      const b = e.target.closest("[data-kit]"); if (!b) return;
      resetFilters(); state.kit = b.dataset.kit; syncControls(); renderCatalog(); goCatalog();
    });
  }

  // ---------------------------------------------------------------- catalog
  function facetCounts(key, list, getVal) {
    const pool = H.REPOS.filter((x) => matches(x, key));
    return list.map((item) => ({ ...item, n: pool.filter((x) => getVal(x, item.id)).length }));
  }

  function renderFacets() {
    const cats = facetCounts("cats", H.CATEGORIES.filter((c) => c.id !== "legacy" || state.archived), (x, id) => x.cat === id);
    const fams = facetCounts("fams", H.FAMILIES, (x, id) => (x.fam || []).includes(id));
    const opt = (group, it) => `<label class="opt"><input type="checkbox" data-group="${group}" value="${esc(it.id)}" ${state[group].has(it.id) ? "checked" : ""}>
      <span>${esc(it.name)}</span><span class="n">${it.n}</span></label>`;
    const ae = document.activeElement;
    const keep = ae && ae.dataset && ae.dataset.group ? [ae.dataset.group, ae.value] : null;
    $("#facet-cats").innerHTML = cats.map((c) => opt("cats", c)).join("");
    $("#facet-fams").innerHTML = fams.map((c) => opt("fams", c)).join("");
    if (keep) $$(`input[data-group="${keep[0]}"]`).find((i) => i.value === keep[1])?.focus();
  }

  function badgeRow(x) {
    const b = [`<span class="badge gray">${esc(CAT[x.cat]?.name || x.cat)}</span>`];
    if (x.kit) b.push(`<span class="badge outline">${esc(KIT[x.kit]?.name || x.kit)}</span>`);
    if (x.fork) b.push('<span class="badge outline">Fork</span>');
    if (x.legacy) b.push('<span class="badge warn">Archived / legacy</span>');
    return b.join("");
  }

  function card(x) {
    const o = owner(x);
    const lang = x.l ? `<span><i class="dot" style="background:${LANG[x.l] || "#999"}"></i>${esc(x.l)}</span>` : "";
    const meta = x.org ? `<span>GitHub organization</span>` :
      `${lang}<span title="Stars">${ICON.star}${x.s}</span><span title="Forks">${ICON.fork}${x.f}</span>${x.u ? `<span title="Last push ${esc(x.u)}">${ICON.clock}${ago(x.u)}</span>` : ""}`;
    return `<article class="card">
      <div class="card-owner"><img src="${avatar(o)}" alt="" width="20" height="20" loading="lazy">${esc(x.org ? "Organization" : (H.ORGS[o]?.name || o))}</div>
      <h3><a href="${ghUrl(x.r)}">${esc(repoName(x))}</a></h3>
      <p>${esc(x.d)}</p>
      ${x.replace ? `<div class="replace">Use instead: <a href="${ghUrl(x.replace)}">${esc(x.replace)}</a></div>` : ""}
      <div class="badges">${badgeRow(x)}</div>
      <div class="metaline">${meta}</div>
    </article>`;
  }

  function table(list) {
    return `<div class="table-wrap"><table>
      <thead><tr><th>Repository</th><th>Category</th><th>Language</th><th class="num">Stars</th><th class="num">Forks</th><th>Updated</th></tr></thead>
      <tbody>${list.map((x) => `<tr>
        <td><a href="${ghUrl(x.r)}"><b>${esc(repoName(x))}</b></a>${x.legacy ? ' <span class="badge warn">Legacy</span>' : ""}<small>${esc(x.org ? "Organization" : owner(x))} &middot; ${esc(x.d)}</small></td>
        <td>${esc(CAT[x.cat]?.name || "")}${x.kit ? `<small>${esc(KIT[x.kit]?.name || "")}</small>` : ""}</td>
        <td>${x.l ? `<i class="dot" style="background:${LANG[x.l] || "#999"}"></i> ${esc(x.l)}` : "&mdash;"}</td>
        <td class="num">${x.org ? "&mdash;" : x.s}</td><td class="num">${x.org ? "&mdash;" : x.f}</td>
        <td>${x.u ? `${esc(ago(x.u))}<small>${esc(fmtDate(x.u))}</small>` : ""}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function renderPills() {
    const pills = [];
    if (state.q) pills.push(["q", "", `Search: "${state.q}"`]);
    if (state.kit) pills.push(["kit", "", "Kit: " + (KIT[state.kit]?.name || state.kit)]);
    state.cats.forEach((v) => pills.push(["cats", v, CAT[v]?.name || v]));
    state.fams.forEach((v) => pills.push(["fams", v, FAM[v]?.name || v]));
    state.orgs.forEach((v) => pills.push(["orgs", v, H.ORGS[v]?.name || v]));
    $("#pills").innerHTML = pills.map(([k, v, label]) => `<button class="pill" type="button" data-k="${k}" data-v="${esc(v)}" aria-label="Remove filter ${esc(label)}">${esc(label)} <span class="x" aria-hidden="true">&times;</span></button>`).join("");
  }

  // Show the top PAGE results; "Show all" expands. Any filter change collapses again.
  const PAGE = 8;
  let showAll = false, lastSig = "";
  function renderCatalog() {
    const list = H.REPOS.filter((x) => matches(x)).sort(SORTS[state.sort] || SORTS.stars);
    const sig = JSON.stringify([state.q, [...state.cats], [...state.fams], [...state.orgs], state.kit, state.archived, state.sort]);
    if (sig !== lastSig) { showAll = false; lastSig = sig; }
    const shown = showAll ? list : list.slice(0, PAGE);
    renderFacets();
    renderPills();
    $("#result-count").innerHTML = `Showing <b>${shown.length}</b> of ${list.length} repositories`;
    $("#results").innerHTML = list.length
      ? (state.view === "table" ? table(shown) : `<div class="grid">${shown.map(card).join("")}</div>`)
      : `<div class="empty"><b>No repositories match your filters.</b>Try a different search term, or <button class="linkbtn" type="button" data-clear>clear all filters</button>.</div>`;
    const more = $("#more");
    more.hidden = list.length <= PAGE;
    more.textContent = showAll ? "Show fewer" : `Show all ${list.length} repositories`;
    writeUrl();
  }

  function resetFilters() {
    state.q = ""; state.cats.clear(); state.fams.clear(); state.orgs.clear(); state.kit = "";
  }
  function syncControls() {
    $("#q").value = state.q; $("#hero-q").value = state.q;
    $("#archived").checked = state.archived;
    $("#sort").value = state.sort;
    $$(".viewtoggle button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.view === state.view)));
  }
  function goCatalog() { $("#catalog").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }); }

  function bindCatalog() {
    let t;
    $("#q").addEventListener("input", (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); renderCatalog(); }, 120); });
    $("#hero-search").addEventListener("submit", (e) => {
      e.preventDefault(); resetFilters(); state.q = $("#hero-q").value.trim(); syncControls(); renderCatalog(); goCatalog();
    });
    $(".filters").addEventListener("change", (e) => {
      const el = e.target;
      if (el.id === "archived") {
        state.archived = el.checked;
        if (!state.archived) state.cats.delete("legacy");
      } else if (el.dataset.group) {
        const set = state[el.dataset.group];
        el.checked ? set.add(el.value) : set.delete(el.value);
      }
      renderCatalog();
    });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; renderCatalog(); });
    $$(".viewtoggle button").forEach((b) => b.addEventListener("click", () => { state.view = b.dataset.view; syncControls(); renderCatalog(); }));
    $("#pills").addEventListener("click", (e) => {
      const p = e.target.closest(".pill"); if (!p) return;
      const { k, v } = p.dataset;
      if (k === "q") state.q = ""; else if (k === "kit") state.kit = ""; else state[k].delete(v);
      syncControls(); renderCatalog();
    });
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-clear]")) { resetFilters(); syncControls(); renderCatalog(); }
    });
    $("#more").addEventListener("click", () => {
      showAll = !showAll; renderCatalog();
      if (!showAll) goCatalog();
    });
  }

  // ------------------------------------------------- search suggestions
  // Dropdown under a search box: matching kits, product families, and repositories.
  // Kit/family picks apply a filter; repository picks open the repo on GitHub.
  function suggestions(q) {
    const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const hit = (s) => { s = s.toLowerCase(); return terms.every((t) => s.includes(t)); };
    const score = (name) => (name.toLowerCase().startsWith(terms[0]) ? 0 : 1);
    const kits = H.KITS.filter((k) => hit(k.name + " " + (FAM[k.fam]?.name || "")))
      .map((k) => ({ type: "kit", id: k.id, label: k.name, sub: `${H.REPOS.filter((x) => x.kit === k.id && !x.legacy).length} repositories`, rank: score(k.name) }));
    const fams = H.FAMILIES.filter((f) => hit(f.name + " " + f.id))
      .map((f) => ({ type: "fam", id: f.id, label: f.name, sub: "Product family", rank: score(f.name) }));
    const repos = H.REPOS.filter((x) => (state.archived || !x.legacy) && x._h && terms.every((t) => x._h.includes(t)))
      .map((x) => ({ type: "repo", id: x.r, label: repoName(x), sub: x.d, owner: owner(x), legacy: x.legacy, rank: score(repoName(x)) * 1000 - x.s }))
      .sort((a, b) => a.rank - b.rank).slice(0, 6);
    const byRank = (a, b) => a.rank - b.rank;
    return [...kits.sort(byRank).slice(0, 3), ...fams.sort(byRank).slice(0, 2), ...repos];
  }

  function attachSuggest(input, onSearch) {
    const box = document.createElement("div");
    box.className = "suggest";
    box.id = input.id + "-suggest";
    box.setAttribute("role", "listbox");
    box.hidden = true;
    (input.closest(".suggest-host") || input.parentElement).appendChild(box);
    input.setAttribute("role", "combobox");
    input.setAttribute("aria-autocomplete", "list");
    input.setAttribute("aria-controls", box.id);
    input.setAttribute("aria-expanded", "false");
    let items = [], active = -1;

    const hl = (text, q) => {
      let out = esc(text);
      q.split(/\s+/).filter((t) => t.length > 1).forEach((t) => {
        out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
      });
      return out;
    };
    const ico = { kit: ICON.soc, fam: ICON.fpga };
    const close = () => { box.hidden = true; active = -1; input.setAttribute("aria-expanded", "false"); input.removeAttribute("aria-activedescendant"); };
    const paint = () => {
      [...box.querySelectorAll(".sg-item")].forEach((el, i) => el.classList.toggle("active", i === active));
      if (active >= 0) input.setAttribute("aria-activedescendant", `${box.id}-${active}`); else input.removeAttribute("aria-activedescendant");
    };
    const open = () => {
      const q = input.value.trim();
      items = suggestions(q);
      if (!q) { close(); return; }
      let html = "", group = "";
      const heads = { kit: "Development kits", fam: "Product families", repo: "Repositories" };
      items.forEach((s, i) => {
        if (s.type !== group) { group = s.type; html += `<div class="sg-head">${heads[group]}</div>`; }
        const lead = s.type === "repo"
          ? `<img src="${avatar(s.owner)}" alt="" width="20" height="20">`
          : `<span class="sg-ico">${ico[s.type]}</span>`;
        html += `<div class="sg-item" role="option" id="${box.id}-${i}" data-i="${i}">${lead}
          <span class="sg-text"><b>${hl(s.label, q)}</b>${s.legacy ? ' <span class="badge warn">Archived</span>' : ""}<small>${esc(s.sub)}</small></span>
          ${s.type === "repo" ? '<span class="sg-go" aria-hidden="true">&#8599;</span>' : ""}</div>`;
      });
      html += `<div class="sg-item sg-all" role="option" id="${box.id}-${items.length}" data-i="${items.length}">
        <span class="sg-ico">${'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'}</span>
        <span class="sg-text"><b>Search all repositories for &ldquo;${esc(q)}&rdquo;</b></span></div>`;
      box.innerHTML = html;
      box.hidden = false; active = -1;
      input.setAttribute("aria-expanded", "true");
    };
    const pick = (i) => {
      const s = items[i];
      close();
      if (!s) { onSearch(input.value.trim()); return; }
      if (s.type === "repo") { window.open(ghUrl(s.id), "_blank", "noopener"); return; }
      resetFilters();
      if (s.type === "kit") state.kit = s.id;
      if (s.type === "fam") state.fams.add(s.id);
      syncControls(); renderCatalog(); goCatalog();
    };

    let t;
    input.addEventListener("input", () => { clearTimeout(t); t = setTimeout(open, 80); });
    input.addEventListener("focus", () => { if (input.value.trim()) open(); });
    input.addEventListener("keydown", (e) => {
      if (box.hidden) { if (e.key === "ArrowDown" && input.value.trim()) { open(); e.preventDefault(); } return; }
      const n = items.length + 1;
      if (e.key === "ArrowDown") { active = (active + 1) % n; paint(); e.preventDefault(); }
      else if (e.key === "ArrowUp") { active = (active - 1 + n) % n; paint(); e.preventDefault(); }
      else if (e.key === "Enter" && active >= 0) { e.preventDefault(); e.stopPropagation(); pick(active); }
      else if (e.key === "Escape") { close(); }
      else if (e.key === "Enter") { close(); }
    });
    box.addEventListener("mousedown", (e) => e.preventDefault());
    box.addEventListener("mousemove", (e) => {
      const el = e.target.closest(".sg-item"); if (!el) return;
      const i = +el.dataset.i; if (i !== active) { active = i; paint(); }
    });
    box.addEventListener("click", (e) => { const el = e.target.closest(".sg-item"); if (el) pick(+el.dataset.i); });
    input.addEventListener("blur", () => setTimeout(close, 120));
  }

  function bindSuggest() {
    attachSuggest($("#hero-q"), (q) => { resetFilters(); state.q = q; syncControls(); renderCatalog(); goCatalog(); });
    attachSuggest($("#q"), (q) => { state.q = q; syncControls(); renderCatalog(); });
  }

  // ------------------------------------------------------------ page chrome
  function bindTabs() {
    const links = $$(".tabs a");
    const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { links.forEach((a) => a.classList.remove("active")); map.get(en.target.id)?.classList.add("active"); }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
    const btn = $(".menu-toggle");
    btn.addEventListener("click", () => {
      const nav = $(".main-nav"); const open = nav.classList.toggle("open"); btn.setAttribute("aria-expanded", String(open));
    });
  }

  // -------------------------------------------- live stats (GitHub REST API)
  const LIVE_KEY = "mchp-fpga-hub-live-v1";
  async function refreshLive() {
    const note = $("#live-note");
    let data = null;
    try {
      const cached = JSON.parse(localStorage.getItem(LIVE_KEY) || "null");
      if (cached && Date.now() - cached.t < 3600e3) data = cached.d;
    } catch (_) { /* ignore */ }
    if (!data) {
      try {
        data = {};
        const owners = Object.keys(H.ORGS);
        const results = await Promise.all(owners.map((o) => fetch(o === "MicrochipTech"
          ? "https://api.github.com/search/repositories?q=org:MicrochipTech+fpga&per_page=100"
          : `https://api.github.com/orgs/${o}/repos?per_page=100`, { headers: { Accept: "application/vnd.github+json" } })
          .then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.json(); })));
        results.forEach((res) => (Array.isArray(res) ? res : res.items || []).forEach((r) => {
          data[r.full_name.toLowerCase()] = [r.stargazers_count, r.forks_count, (r.pushed_at || "").slice(0, 10)];
        }));
        try { localStorage.setItem(LIVE_KEY, JSON.stringify({ t: Date.now(), d: data })); } catch (_) { /* ignore */ }
      } catch (e) {
        note.textContent = `Showing snapshot data from ${fmtDate(H.snapshot)}.`;
        return;
      }
    }
    let n = 0;
    H.REPOS.forEach((x) => {
      const v = data[x.r.toLowerCase()];
      if (v) { [x.s, x.f] = v; if (v[2]) x.u = v[2]; n++; }
    });
    note.textContent = `Live data from GitHub for ${n} repositories.`;
    renderStats(); renderCatalog();
  }

  // ------------------------------------------------------------------- boot
  readUrl();
  renderStats();
  renderFamilies();
  renderKits();
  syncControls();
  bindCatalog();
  bindSuggest();
  renderCatalog();
  bindTabs();
  $("#year").textContent = new Date().getFullYear();
  if (location.search && !location.hash) goCatalog();
  refreshLive();
})();
