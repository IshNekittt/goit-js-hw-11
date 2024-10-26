import{i as u,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f=n=>{const s=new URLSearchParams({key:"46731058-8e313f89df23f954200132c0b",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error("Something went wrong");return t.json()}).then(t=>{if(!t.hits.length)throw new Error("Sorry, there are no images matching your search query. Please, try again");return t})},d=n=>n.map(({webformatURL:s,largeImageURL:t,tags:a,likes:e,views:r,comments:i,downloads:p})=>`
    <li class="general-list-item" >
        <a href="${t}"><img src="${s}" alt="${a}"></a>
        <div>
            <p class="general-list-item-p" ><b>Likes</b><span>${e}</span></p>
            <p class="general-list-item-p" ><b>Views</b><span>${r}</span></p>
            <p class="general-list-item-p" ><b>Comments</b><span>${i}</span></p>
            <p class="general-list-item-p" ><b>Downloads</b><span>${p}</span></p>
        </div>
    </li>
    `).join(""),c=document.forms.searchForm;c.elements.input;const o=c.elements.submitButton,l=document.querySelector(".general-list");o.addEventListener("click",n=>{n.preventDefault();const s=n.target.parentElement.elements.input.value.trim();s&&(l.innerHTML='<span class="loader"></span>',o.disabled=!0,f(s).then(({hits:t})=>{l.innerHTML=d(t)}).catch(t=>{u.error({message:t.message,position:"topRight"}),l.innerHTML=""}).finally(()=>{o.disabled=!1,h.refresh()}))});const h=new m(".general-list a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=index.js.map
