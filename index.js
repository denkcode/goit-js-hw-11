import{a as u,S as p,i as o}from"./assets/vendor-6XDwGOUg.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();u.defaults.baseURL="https://pixabay.com/api/";const d="54217574-1b59999edbea9c550fa507ae7";function f(a){return u.get("",{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const m=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){const t=document.querySelector(".gallery"),n=a.map(r=>`
    <li class="photo-card">
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy">
      </a>
      <div class="info">
  <p class="info-item">
    <span class="label">Likes</span>
    <span class="value">${r.likes}</span>
  </p>
  <p class="info-item">
    <span class="label">Views</span>
    <span class="value">${r.views}</span>
  </p>
  <p class="info-item">
    <span class="label">Comments</span>
    <span class="value">${r.comments}</span>
  </p>
  <p class="info-item">
    <span class="label">Downloads</span>
    <span class="value">${r.downloads}</span>
  </p>
</div>
    </li>
  `).join("");t.innerHTML=n,m.refresh()}const h=document.querySelector(".gallery");function g(){h.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function i(){document.querySelector(".loader").classList.add("is-hidden")}const c=document.querySelector(".form");c.addEventListener("submit",a=>{a.preventDefault();const t=a.currentTarget.searchtext.value.trim();if(t===""){o.warning({message:"Введіть слово для пошуку!"});return}g(),L(),f(t).then(n=>{if(n.hits.length===0){i(),o.warning({message:"Нічого не знайдено. Спробуйте інший запит."});return}setTimeout(()=>{y(n.hits),i(),o.success({message:`Знайдено ${n.hits.length} зображень`})},2e3)}).catch(()=>{i(),o.error({message:"Помилка сервера. Спробуйте пізніше"})}),c.reset()});
//# sourceMappingURL=index.js.map
