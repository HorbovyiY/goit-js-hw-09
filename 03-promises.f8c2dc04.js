const e=document.querySelectorAll("input");function o(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function n({position:e,delay:o}){console.log(`✅ Fulfilled promise ${e} in ${o}ms`)}function t({position:e,delay:o}){console.error(`❌ Rejected promise ${e} in ${o}ms`)}document.querySelector(".form").addEventListener("submit",(function(i){i.preventDefault();const r=Number(e[0].value),u=Number(e[1].value),l=Number(e[2].value);for(let e=0;e<l;e+=1)o(e+1,r+u*e).then(n).catch(t)}));
//# sourceMappingURL=03-promises.f8c2dc04.js.map