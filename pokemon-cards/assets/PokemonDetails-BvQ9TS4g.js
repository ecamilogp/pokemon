import{d as w,r as p,u as k,a as P,o as F,b as C,c as i,e,f as V,w as j,g as o,n as x,t as l,F as D,h as B,i as d,j as A,l as N}from"./index-6UeQmXBP.js";const z="/assets/Pokebola-13iwdk7Y.png",E={class:"flex items-center justify-center min-h-screen p-4",style:{"background-color":"#fde047"}},H={class:"absolute top-4 left-4 z-10"},S=["src"],T={class:"absolute top-4 left-1/2 transform -translate-x-1/2 z-10"},q=["src"],L={class:"w-full max-w-4xl rounded-xl shadow-2xl border border-black bg-white mt-24 overflow-hidden flex flex-col lg:flex-row cursor-pointer"},M={class:"p-4 text-white"},R={class:"text-3xl font-bold drop-shadow-lg"},O={class:"flex flex-col items-center text-center p-4"},U=["src","alt"],Y={class:"text-3xl font-extrabold text-gray-800 capitalize mt-4"},$={class:"mt-4"},G={class:"flex justify-center gap-4 mt-2"},I={class:"flex items-center justify-center mt-4 text-gray-700 gap-4"},J={class:"px-3 py-1 bg-blue-200 text-blue-800 font-semibold rounded-full shadow-md"},K={class:"px-3 py-1 bg-green-200 text-green-800 font-semibold rounded-full shadow-md"},Q={class:"text-black mt-4 leading-relaxed text-sm"},W={class:"w-full lg:w-1/2 bg-gray-200 p-4 flex flex-col justify-center items-center"},X={class:"w-full max-w-md"},Z={class:"w-full bg-white rounded-lg shadow-lg border-collapse text-center"},ee={class:"border-t border-gray-200 hover:bg-gray-50"},te={class:"py-3 px-4 text-center text-gray-700"},ae={class:"border-t border-gray-200 hover:bg-gray-50"},se={class:"py-3 px-4 text-center text-gray-700"},le={class:"border-t border-gray-200 hover:bg-gray-50"},oe={class:"py-3 px-4 text-center text-gray-700"},re={class:"border-t border-gray-200 hover:bg-gray-50"},ne={class:"py-3 px-4 text-center text-gray-700"},ie={class:"border-t border-gray-200 hover:bg-gray-50"},de={class:"py-3 px-4 text-center text-gray-700"},ge=w({__name:"PokemonDetails",setup(ce){const c=p(!0),n=k(),m=P(),a=p({name:"",image:"",height:0,weight:0,stats:{attack:0,defense:0,speed:0,hp:0},description:"",habitat:"",generation:"",id:0,type:[]}),u=m.params.id,f=[{label:"Normal ♻️",value:"normal"},{label:"Lucha 🥊",value:"fighting"},{label:"Volador 🕊️",value:"flying"},{label:"Veneno ☠️",value:"poison"},{label:"Tierra 🌍",value:"ground"},{label:"Roca 🪨",value:"rock"},{label:"Bicho 🦟",value:"bug"},{label:"Fantasma 👻",value:"ghost"},{label:"Acero ⚙️",value:"steel"},{label:"Fuego 🔥",value:"fire"},{label:"Agua 💧",value:"water"},{label:"Planta 🌱",value:"grass"},{label:"Eléctrico ⚡",value:"electric"},{label:"Psíquico 🧠",value:"psychic"},{label:"Hielo ❄️",value:"ice"},{label:"Dragón 🐉",value:"dragon"},{label:"Oscuro 🌑",value:"dark"},{label:"Hada 🧚",value:"fairy"}],h=[{label:"Cueva 🦇",value:"cave"},{label:"Bosque 🌳",value:"forest"},{label:"Pradera 🌾",value:"grassland"},{label:"Montaña ⛰️",value:"mountain"},{label:"Mar 🌊",value:"sea"},{label:"Urbano 🏙️",value:"urban"},{label:"Orilla del mar 🌊",value:"waters-edge"},{label:"Raro 🌟",value:"rare"}];return F(async()=>{try{const s=await n.fetchPokemonDetails(`${u}`);a.value={name:s.name,image:s.image,height:s.height,weight:s.weight,stats:s.stats,description:s.description,habitat:s.habitat,generation:s.generation,id:s.id,type:s.type},c.value=!1}catch(s){console.error("No se encontraron detalles para este Pokémon",s),c.value=!1}}),(s,t)=>{var g;const v=C("router-link");return d(),i("div",E,[e("div",H,[V(v,{to:"/pokemon",class:"text-lg font-semibold text-blue-500 hover:underline mt-2 block"},{default:j(()=>[e("img",{src:o(z),alt:"Pokébola",class:"w-12 h-12"},null,8,S),t[0]||(t[0]=A(" Volver "))]),_:1})]),e("div",T,[e("img",{src:o(N),alt:"Pokemon Logo",class:"w-80 sm:w-96 transition-transform duration-300 hover:scale-110 cursor-pointer"},null,8,q)]),e("div",L,[e("div",{class:"w-full lg:w-1/2 flex flex-col justify-between",style:x({backgroundColor:o(n).selectedColor||"#CBD5E0"})},[e("div",M,[e("h2",R," #"+l(o(u))+" - "+l(a.value.generation),1)]),e("div",O,[e("div",{class:"w-40 h-40 rounded-full flex items-center justify-center shadow-lg border-4 border-white",style:x({backgroundColor:o(n).selectedColor||"#FFFFFF"})},[e("img",{src:a.value.image,alt:a.value.name,class:"w-32 h-32 object-contain"},null,8,U)],4),e("h1",Y,l(a.value.name),1),e("div",$,[t[1]||(t[1]=e("h3",{class:"text-xl font-semibold text-gray-800"},"Tipo de Pokémon",-1)),e("div",G,[(d(!0),i(D,null,B(a.value.type,(r,y)=>{var b;return d(),i("span",{key:y,class:"px-3 py-1 bg-yellow-200 text-amber-900 font-semibold rounded-full shadow-md"},l(((b=f.find(_=>_.value===r))==null?void 0:b.label)||r),1)}),128))])]),e("div",I,[e("span",J," Altura: "+l(a.value.height)+" m ",1),e("span",K," Peso: "+l(a.value.weight)+" kg ",1)]),e("p",Q,l(a.value.description),1)])],4),e("div",W,[t[8]||(t[8]=e("h2",{class:"text-2xl font-bold text-gray-800 mb-4 text-center"}," Estadísticas ",-1)),e("div",X,[e("table",Z,[t[7]||(t[7]=e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"py-3 px-4 text-left text-gray-800 font-semibold"}," Atributo "),e("th",{class:"py-3 px-4 text-center text-gray-800 font-semibold"}," Valor ")])],-1)),e("tbody",null,[e("tr",ee,[t[2]||(t[2]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🗡️ Ataque ",-1)),e("td",te,l(a.value.stats.attack),1)]),e("tr",ae,[t[3]||(t[3]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🛡️ Defensa ",-1)),e("td",se,l(a.value.stats.defense),1)]),e("tr",le,[t[4]||(t[4]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," ⚡ Velocidad ",-1)),e("td",oe,l(a.value.stats.speed),1)]),e("tr",re,[t[5]||(t[5]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," ❤️ Puntos de Vida ",-1)),e("td",ne,l(a.value.stats.hp),1)]),e("tr",ie,[t[6]||(t[6]=e("td",{class:"py-3 px-4 text-gray-700 flex items-center gap-2"}," 🌍 Hábitat ",-1)),e("td",de,l(((g=h.find(r=>r.value===a.value.habitat))==null?void 0:g.label)||a.value.habitat),1)])])])])])])])}}});export{ge as default};