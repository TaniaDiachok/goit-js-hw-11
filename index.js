import{a as f,S as m,i as n}from"./assets/vendor-LvtvrCkc.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="54202886-b679fb307351c5ca332e2dbc0";function g(o){const r={key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(p,{params:r}).then(s=>s.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:u,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <div class="card">
            <img class="card-img" src="${s}" alt="${e}" loading="lazy" />
            <div class="info">
            <p class="info-item"><b>Likes</b> ${t}</p>
            <p class="info-item"><b>Views</b> ${i}</p>
            <p class="info-item"><b>Comments</b> ${u}</p>
            <p class="info-item"><b>Downloads</b> ${d}</p>
            </div>
          </div>
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function v(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!"});return}L(),v(),g(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}b(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Try again later."})}).finally(()=>{S()})});
//# sourceMappingURL=index.js.map
