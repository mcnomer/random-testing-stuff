(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function l(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=l(n);fetch(n.href,o)}})();const X=document.querySelector(".buttons > .reset");X.onclick=()=>P();const q=document.querySelector(".buttons > .solve");q.onclick=()=>D();const x=document.querySelector(".gameover"),A=document.querySelector(".flagcounter > .counter"),c=document.querySelector(".main > .game > canvas"),s=c.getContext("2d",{alpha:!1}),m=window.devicePixelRatio||1;s.scale(m,m);s.imageSmoothingEnabled=!1;s.textRendering="optimizeLegibility";const[v,M]=[c.clientWidth,c.clientHeight];[c.width,c.height]=[v*m,M*m];c.style.width=v+"px";c.style.height=M+"px";const b=Math.min(c.clientWidth,c.clientHeight)*m,r=20,a=Math.floor(b/r),f=Array(r*r).fill(0),g=Array(r*r).fill(!1),d=Array(r*r).fill(!1),W=r*a,p=(b-W)/2/m;let y=!1;const C=64;let S=!0;s.font=`${a}px sans-serif`;s.textBaseline="top";s.textAlign="center";const k={0:"transparent",1:"navy",2:"green",3:"maroon",4:"purple",5:"gold",6:"cyan",7:"olive",8:"grey"};function h(){s.fillStyle="#1a1a1a",s.fillRect(0,0,b,b);for(let e=0;e<r;e++)for(let t=0;t<r;t++){const[l,i]=H(t,e);if(s.fillStyle=(e+t)%2===0?"bisque":"burlywood",s.fillRect(l,i,a,a),f[e*r+t]!==-1){s.fillStyle=k[f[e*r+t]];const[n,o]=w(f[e*r+t]);s.fillText(f[e*r+t],l+a/2,i+a/2+o)}else s.fillStyle="maroon",s.fillRect(l,i,a,a);if(g[e*r+t]||(s.fillStyle=(e+t)%2===0?"limegreen":"green",s.fillRect(l,i,a,a)),d[e*r+t]){s.fillStyle="red",s.font=`${a*.8}px sans-serif`;const[n,o]=w(f[e*r+t]);s.fillText("🚩",l+a/2,i+a/2+o),s.font=`${a}px sans-serif`}A.innerHTML=C-d.reduce((n,o)=>n+o)}}function H(e,t){return[p+e*a,p+t*a]}function z(e){const t=e%r,l=(e-t)/r;return[t,l]}function w(e){const t=s.measureText(e),l=t.actualBoundingBoxAscent-t.actualBoundingBoxDescent;return[t.width/2,l/2]}function R(){for(let e=0;e<C;e++){let t=Math.floor(Math.random()*r*r);f[t]===-1?e--:f[t]=-1}for(let e=0;e<r;e++)for(let t=0;t<r;t++)f[e*r+t]!==-1&&(f[e*r+t]=O(t,e).reduce((l,i)=>l+(f[i[1]*r+i[0]]===-1),0))}function O(e,t){let l=Array(9),i=0;for(let n=-1;n<=1;n++)for(let o=-1;o<=1;o++)l[i]=[e+o,t+n],i++;return l[4]=[-1,-1],l.filter(n=>n[0]>=0&&n[1]>=0&&n[0]<=r-1&&n[1]<=r-1)}function L(e,t){const l=Math.floor((e-(c.clientLeft+p))/(c.clientWidth-p*2)*r),i=Math.floor((t-(c.clientTop+p))/(c.clientHeight-p*2)*r);return(l<0||i<0||l>r-1||i>r-1)&&console.log("POINTER ERROR OUT OF BOUNDS, pos: ",l,i),[l,i]}c.onclick=e=>{e.preventDefault();const[t,l]=L(e.offsetX,e.offsetY);G(t,l),h()};c.oncontextmenu=e=>{e.preventDefault();const[t,l]=L(e.offsetX,e.offsetY);N(t,l),h()};function G(e,t){if(y)return;if(S){for(let n=0;n<1e3&&f[t*r+e]!==0;n++)console.log(`regen attempt #${n}.`),P(),n===0&&console.log("(just making sure you don't lose on the first turn)");S=!1}if(d[t*r+e]===!0)return;if(f[t*r+e]===-1){B();return}let l=new Set().add(t*r+e),i=new Set;for(let n of l){if(f[n]===0)for(let o of O(...z(n)).map(u=>u[1]*r+u[0]))!i.has(o)&&f[o]!==-1&&l.add(o);i.add(n)}for(let n of l)g[n]=!0;Y()}function N(e,t){y||g[t*r+e]!==!0&&(d[t*r+e]=!d[t*r+e],Y())}function Y(){let e=!0,t=!0;for(let i=0;i<f.length;i++)f[i]!==-1&&g[i]!==!0&&(e=!1);for(let i=0;i<f.length;i++)f[i]===-1&&d[i]!==!0&&(t=!1);t=t&&C-d.reduce((i,n)=>i+n)>=0,(e||t)&&B(!0)}function B(e=!1){e&&(x.innerHTML="You Win!"),c.style.filter="blur(5px)",x.style.display="block",y=!0}function P(){f.fill(0),g.fill(!1),d.fill(!1),R(),c.style="",c.style.width=v+"px",c.style.height=M+"px",x.style="",x.innerHTML="Game Over",h(),y=!1,S=!0}function D(){S&&(G(Math.floor((r-1)/2),Math.floor((r-1)/2)),h());for(let e=0;e<100&&(setTimeout(()=>E(),0),!y);e++);}function E(){for(let e=0;e<r;e++)for(let t=0;t<r;t++)if(g[e*r+t]===!0&&f[e*r+t]>0){let l=f[e*r+t],n=O(t,e).filter(o=>!g[o[1]*r+o[0]]);if(l===n.length)for(let o of n.filter(u=>!d[u[1]*r+u[0]]))N(o[0],o[1])}h();for(let e=0;e<r;e++)for(let t=0;t<r;t++)if(g[e*r+t]===!0&&f[e*r+t]>0){let l=f[e*r+t],i=O(t,e),n=i.filter(u=>!g[u[1]*r+u[0]]),o=i.filter(u=>d[u[1]*r+u[0]]);if(l===o.length)for(let u of n.filter(T=>!d[T[1]*r+T[0]]))G(u[0],u[1])}h()}R();h();
