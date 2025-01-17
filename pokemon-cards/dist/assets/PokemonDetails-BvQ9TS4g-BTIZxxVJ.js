import{F as k,u as x,T as P,c as F,N as j,f as B,p as c,r as d,a as e,B as C,e as V,h as r,I as A,M as p,b as s,w as D,m as M,K as T}from"./index-Ug5qAPFh.js";const q="/assets/Pokebola-13iwdk7Y.png",z={class:"flex items-center justify-center min-h-screen p-4",style:{"background-color":"#fde047"}},E={class:"absolute top-4 left-4 z-10"},H=["src"],N={class:"absolute top-4 left-1/2 transform -translate-x-1/2 z-10"},I=["src"],K={class:"w-full max-w-4xl rounded-xl shadow-2xl border border-black bg-white mt-24 overflow-hidden flex flex-col lg:flex-row cursor-pointer"},L={class:"p-4 text-white"},O={class:"text-3xl font-bold drop-shadow-lg"},R={class:"flex flex-col items-center text-center p-4"},_=["src","alt"],U={class:"text-3xl font-extrabold text-gray-800 capitalize mt-4"},Y={class:"mt-4"},$={class:"flex justify-center gap-4 mt-2"},G={class:"flex items-center justify-center mt-4 text-gray-700 gap-4"},J={class:"px-3 py-1 bg-blue-200 text-blue-800 font-semibold rounded-full shadow-md"},Q={class:"px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-md"},S={class:"text-black mt-4 leading-relaxed text-sm"},W={class:"w-full lg:w-1/2 bg-gray-200 p-4 flex flex-col justify-center items-center"},X={class:"w-full max-w-md"},Z={class:"w-full bg-white rounded-lg shadow-lg border-collapse text-center"},ee={class:"border-t border-gray-200 hover:bg-gray-50"},ae={class:"py-3 px-4 text-center text-gray-700"},le={class:"border-t border-gray-200 hover:bg-gray-50"},te={class:"py-3 px-4 text-center text-gray-700"},se={class:"border-t border-gray-200 hover:bg-gray-50"},re={class:"py-3 px-4 text-center text-gray-700"},oe={class:"border-t border-gray-200 hover:bg-gray-50"},ne={class:"py-3 px-4 text-center text-gray-700"},ce={class:"border-t border-gray-200 hover:bg-gray-50"},de={class:"py-3 px-4 text-center text-gray-700"},ge=k({__name:"PokemonDetails",setup(ie){const i=x(!0),n=P(),v=F(),l=x({name:"",image:"",height:0,weight:0,stats:{attack:0,defense:0,speed:0,hp:0},description:"",habitat:"",generation:"",id:0,type:[]}),u=v.params.id,f=[{label:"Normal ♻️",value:"normal"},{label:"Lucha 🥊",value:"fighting"},{label:"Volador 🕊️",value:"flying"},{label:"Veneno ☠️",value:"poison"},{label:"Tierra 🌍",value:"ground"},{label:"Roca 🪨",value:"rock"},{label:"Bicho 🦟",value:"bug"},{label:"Fantasma 👻",value:"ghost"},{label:"Acero ⚙️",value:"steel"},{label:"Fuego 🔥",value:"fire"},{label:"Agua 💧",value:"water"},{label:"Planta 🌱",value:"grass"},{label:"Eléctrico ⚡",value:"electric"},{label:"Psíquico 🧠",value:"psychic"},{label:"Hielo ❄️",value:"ice"},{label:"Dragón 🐉",value:"dragon"},{label:"Oscuro 🌑",value:"dark"},{label:"Hada 🧚",value:"fairy"}],m=[{label:"Cueva 🦇",value:"cave"},{label:"Bosque 🌳",value:"forest"},{label:"Pradera 🌾",value:"grassland"},{label:"Montaña ⛰️",value:"mountain"},{label:"Mar 🌊",value:"sea"},{label:"Urbano 🏙️",value:"urban"},{label:"Orilla del mar 🌊",value:"waters-edge"},{label:"Raro 🌟",value:"rare"}];return j(async()=>{try{const t=await n.fetchPokemonDetails(`${u}`);l.value={name:t.name,image:t.image,height:t.height,weight:t.weight,stats:t.stats,description:t.description,habitat:t.habitat,generation:t.generation,id:t.id,type:t.type},i.value=!1}catch(t){console.error("No se encontraron detalles para este Pokémon",t),i.value=!1}}),(t,a)=>{var g;const y=B("router-link");return c(),d("div",z,[e("div",E,[C(y,{to:"/pokemon",class:"text-lg font-semibold text-blue-500 hover:underline mt-2 block"},{default:V(()=>[e("img",{src:r(q),alt:"Pokébola",class:"w-12 h-12"},null,8,H),a[0]||(a[0]=T(" Volver "))]),_:1})]),e("div",N,[e("img",{src:r(A),alt:"Pokemon Logo",class:"w-80 sm:w-96 transition-transform duration-300 hover:scale-110 cursor-pointer"},null,8,I)]),e("div",K,[e("div",{class:"w-full lg:w-1/2 flex flex-col justify-between",style:p({backgroundColor:r(n).selectedColor||"#CBD5E0"})},[e("div",L,[e("h2",O," #"+s(r(u))+" - "+s(l.value.generation),1)]),e("div",R,[e("div",{class:"w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4 border-white",style:p({backgroundColor:r(n).selectedColor||"#FFFFFF"})},[e("img",{src:l.value.image,alt:l.value.name,class:"w-32 h-32 object-contain"},null,8,_)],4),e("h1",U,s(l.value.name),1),e("div",Y,[a[1]||(a[1]=e("h3",{class:"text-xl font-semibold text-gray-800"},"Tipo de Pokémon",-1)),e("div",$,[(c(!0),d(D,null,M(l.value.type,(o,h)=>{var b;return c(),d("span",{key:h,class:"px-3 py-1 bg-yellow-200 text-amber-900 font-semibold rounded-full shadow-md"},s(((b=f.find(w=>w.value===o))==null?void 0:b.label)||o),1)}),128))])]),e("div",G,[e("span",J," Altura: "+s(l.value.height)+" m ",1),e("span",Q," Peso: "+s(l.value.weight)+" kg ",1)]),e("p",S,s(l.value.description),1)])],4),e("div",W,[a[8]||(a[8]=e("h2",{class:"text-2xl font-bold text-gray-800 mb-4 text-center"}," Estadísticas ",-1)),e("div",X,[e("table",Z,[a[7]||(a[7]=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"py-3 px-4 text-left text-gray-800 font-semibold"}," Atributo "),e("th",{class:"py-3 px-4 text-center text-gray-800 font-semibold"}," Valor ")])],-1)),e("tbody",null,[e("tr",ee,[a[2]||(a[2]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🗡️ Ataque ",-1)),e("td",ae,s(l.value.stats.attack),1)]),e("tr",le,[a[3]||(a[3]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🛡️ Defensa ",-1)),e("td",te,s(l.value.stats.defense),1)]),e("tr",se,[a[4]||(a[4]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," ⚡ Velocidad ",-1)),e("td",re,s(l.value.stats.speed),1)]),e("tr",oe,[a[5]||(a[5]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," ❤️ Puntos de Vida ",-1)),e("td",ne,s(l.value.stats.hp),1)]),e("tr",ce,[a[6]||(a[6]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🌍 Hábitat ",-1)),e("td",de,s(((g=m.find(o=>o.value===l.value.habitat))==null?void 0:g.label)||l.value.habitat),1)])])])])])])])}}});export{ge as default};