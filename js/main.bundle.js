"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[179],{593:()=>{function e(e,i){for(var n=0;n<i.length;n++){var c=i[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}var i=function(){function i(e,n,c,t){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i);var r=this;r.id=e,r.name=n,r.img=c,r.href=t}var n,c;return n=i,(c=[{key:"render",value:function(){var e='<div class="recipeDiv"><img class="recipeImg" src="'.concat(this.img,'"><p class="recipeTitle">').concat(this.name,"</p></div>");return t.innerHTML+=e}}])&&e(n.prototype,c),i}(),n=[],c=document.querySelectorAll(".recipeDiv"),t=(document.querySelectorAll(".recipeImg"),document.querySelector(".main")),r=document.querySelector(".searchInput"),a=document.querySelector(".fa-search");c.forEach((function(e){e.addEventListener("click",(function(){console.log("clicked")}))})),a.addEventListener("click",(function(){var e=[];0==(e=n.filter((function(e){return e.name.includes(r.value)}))).length?t.innerHTML='<p class="notFound">No recipes found at name "'.concat(r.value,'"</p>'):t.innerHTML="",e.forEach((function(e){var i='<div class="recipeDiv"><img class="recipeImg" src="'.concat(e.img,'"><p class="recipeTitle">').concat(e.name,"</p></div>");t.innerHTML+=i}))})),[{id:0,name:"chili",img:"https://i.postimg.cc/Wb7Bfvs0/pexels-naim-benjelloun-1618906.jpg",href:"1"},{id:1,name:"indian fast pasta",img:"https://i.postimg.cc/6qrkKsnJ/pexels-lgh-1256875.jpg",href:"2"},{id:2,name:"chicken rice",img:"https://i.postimg.cc/d3j2vn0S/pexels-rajesh-tp-1624487.jpg",href:"3"},{id:3,name:"home ice cream",img:"https://i.postimg.cc/dtqs0n1m/pexels-daria-shevtsova-1251226.jpg",href:"3"},{id:4,name:"omelette",img:"https://i.postimg.cc/pLWJRHgL/pexels-daria-shevtsova-1095550.jpg",href:"3"}].forEach((function(e){var c=new i(e.id,e.name,e.img,e.href);n.push(c),c.render()}))}},e=>{e(e.s=593)}]);