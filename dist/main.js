(()=>{var e={984:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>d});const d=()=>{const e=document.createElement("form");return e.method="post",e.innerHTML='<div class="form-control">\n    <label for="city">City</label>\n    <input id="city" name="city" type="text">\n</div>\n<button type="submit">Submit</button>',e.addEventListener("submit",(async e=>{e.preventDefault();const t=document.getElementById("city").value,n=await(async e=>{const t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=a89ef96a67e297628ee536d1ebb04694`,n=await fetch(t);return await n.json()})(t),d=document.getElementById("result");d.innerHTML="",d.appendChild((e=>{console.log(e);const t=273.15,n=document.createElement("div"),d=document.createElement("div");n.appendChild(d),d.classList.add("weather");const a=document.createElement("div");d.appendChild(a),a.textContent=e.weather[0].description,a.classList.add("weather-description");const i=document.createElement("div");n.appendChild(i),i.classList.add("main");const o=document.createElement("div");i.appendChild(o),o.classList.add("temperature"),o.innerHTML="Temperature: "+Math.round(e.main.temp-t)+"&#8451;";const r=document.createElement("div");i.appendChild(r),r.innerHTML="Feels like: "+Math.round(e.main.feels_like-t)+"&#8451;";const c=document.createElement("div");i.appendChild(c),c.classList.add("humidity"),c.textContent="Humidity: "+e.main.humidity+"%";const s=document.createElement("div");n.appendChild(s),s.classList.add("wind");const l=document.createElement("div");return s.appendChild(l),l.classList.add("wind-speed"),l.textContent="Wind speed: "+e.wind.speed+" km/h",n})(n))})),e}}},t={};function n(d){var a=t[d];if(void 0!==a)return a.exports;var i=t[d]={exports:{}};return e[d](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var d in t)n.o(t,d)&&!n.o(e,d)&&Object.defineProperty(e,d,{enumerable:!0,get:t[d]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const{default:e}=n(984),t=document.getElementById("root");t.appendChild(e());const d=document.createElement("div");d.id="result",t.appendChild(d)})()})();