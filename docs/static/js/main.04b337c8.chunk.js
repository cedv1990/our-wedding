(this["webpackJsonpour-wedding"]=this["webpackJsonpour-wedding"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),s=n(19),r=n.n(s),i=n(7),o=n(17),u=n.n(o),l=n(21),d=n(31);n(64);d.a.initializeApp({apiKey:"AIzaSyCHRcw3FIUilwa42WbrsCXWDD3YfwJSaaY",authDomain:"cd-our-wedding.firebaseapp.com",projectId:"cd-our-wedding",storageBucket:"cd-our-wedding.appspot.com",messagingSenderId:"564432822179",appId:"1:564432822179:web:6888a9fe0dabb20d2fc416"});var j=d.a.firestore(),m=n(40),b=n(4),f=function(){var e=Object(l.a)(u.a.mark((function e(t){var n,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.doc("families/".concat(t)).get();case 2:if(!(n=e.sent.data())){e.next=10;break}return e.next=6,j.collection("families/".concat(t,"/guests")).get();case 6:return a=e.sent,c=[],a.forEach((function(e){return c.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",Object(b.a)(Object(b.a)({},n),{},{id:t,guests:c}));case 10:return e.abrupt("return",{});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(l.a)(u.a.mark((function e(){var t,n,a,c,s,r,i,o,l,d,b,f,O,p,g,h,x,v,y;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return t=[],e.next=5,j.collection("families").get();case 5:n=e.sent.docs,a=Object(m.a)(n),e.prev=7,a.s();case 9:if((c=a.n()).done){e.next=21;break}return s=c.value,r=s.data(),i=r.family_name,o=[],e.next=15,j.collection("families/".concat(s.id,"/guests")).get();case 15:l=e.sent.docs,d=Object(m.a)(l);try{for(d.s();!(b=d.n()).done;)f=b.value,O=f.data(),p=O.first_name,g=O.middle_name,h=O.last_name,x=O.second_last_name,v=O.nickname,y=O.goes,o.push({firstName:p,middleName:g,lastName:h,secondLastName:x,nickname:v,goes:y})}catch(u){d.e(u)}finally{d.f()}t.push({id:s.id,familyName:i,guests:o,total:o.length,confirmed:o.filter((function(e){return e.goes})).length});case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),a.e(e.t0);case 26:return e.prev=26,a.f(),e.finish(26);case 29:return e.abrupt("return",t);case 30:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})));return function(){return e.apply(this,arguments)}}(),p="[SHOW] show form",g="[SHOW] hide form",h="[UI] set error",x="[UI] remove error",v="[UI] Start loading",y="[UI] Finish loading",_="[UI] Finish initial loading",N="[FAMILY] load family data",w="[GUESTS] update family guest if goes",k="[FAMILIES] load all guests",F="[Copied] change",I="[Timeout] change",C="[Filtered] filtered list",E=function(){return{type:v}},L=function(){return{type:y}},S=function(e){return{type:N,payload:e}},q=function(e,t){return{type:w,payload:{guestId:e,goes:t}}},T=function(e){return{type:k,payload:e}},U=n(83),R=n(82),D=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,n=Object(i.c)((function(e){return e.family})).family,c=n.id,s=n.family_name,r=n.guests,o=function(t){return function(n){e(function(e,t,n){return function(){var a=Object(l.a)(u.a.mark((function a(c){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(E()),a.next=3,j.doc("families/".concat(e,"/guests/").concat(t)).update({goes:n});case 3:c(q(t,n)),c(L());case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}(c,t,n.target.checked))}},d=r.filter((function(e){return e.goes})),m=r.filter((function(e){return!e.goes})),b=function(e){return e.length>1?e.slice(0,e.length-1).join(", ")+" y "+e[e.length-1]:e[0]},f=b(d.map((function(e){return e.nickname}))),O=b(m.map((function(e){return e.nickname}))),p=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),"\xa1Nos vemos el 25 de Julio \ud83d\ude0b!",Object(a.jsx)("br",{}),"Yo ver\xe9, la mejor pinta ese d\xeda \ud83d\udd7a\ud83c\udffb\ud83d\udc83\ud83c\udffb\ud83e\udd2d"]});return Object(a.jsxs)("aside",{className:"confirm-container animate__animated animate__backInRight animate__faster",children:[Object(a.jsxs)("div",{className:"description",children:[Object(a.jsxs)("h2",{children:[s,", \xbfNos acompa\xf1a",r.length>1?"n":"s","?"]}),Object(a.jsxs)("span",{children:["Para confirmar ",r.length>1?"la":"tu"," asistencia, solo debes decir ",r.length>1?"qui\xe9n va":"si vas"," o no a nuestra boda."]}),Object(a.jsx)("span",{className:"icon",children:"\ud83e\udd70"})]}),Object(a.jsx)("hr",{}),Object(a.jsx)("form",{children:r.map((function(e,n){var c=e.first_name,s=e.middle_name,r=e.last_name,i=e.second_last_name,u=e.goes,l=e.id;return Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"name",children:"".concat("".concat(c," ").concat(s).trim()," ").concat("".concat(r," ").concat(i).trim())}),Object(a.jsx)(U.a,{label:u?"\ud83d\ude0a":"\ud83e\udd7a",title:"Clic para cambiar",control:Object(a.jsx)(R.a,{onChange:o(l),checked:u,name:"goes",color:"secondary"}),disabled:t})]},n)}))}),Object(a.jsx)("div",{className:"message",children:r.length===d.length?Object(a.jsxs)(a.Fragment,{children:["\xa1Gracias ".concat(f," por acompa\xf1arnos \ud83e\udd17!"),Object(a.jsx)("br",{}),"Estamos ansiosos porque este d\xeda llegue \ud83e\udd70 y tener el placer de contar \n                                con ".concat(1===d.length?"tu":"su"," compa\xf1\xeda en este momento tan especial para nosotros \ud83d\ude03"),Object(a.jsx)("br",{}),p]}):0===d.length?"Qu\xe9 mal que no nos acompa\xf1a".concat(1===r.length?"s":"n"," \ud83d\ude15, pero sabemos que podemos contar con").concat(1===r.length?"tigo":" ustedes"," para cualquier otra ocasi\xf3n \ud83d\udcaa\ud83c\udffb"):Object(a.jsxs)(a.Fragment,{children:["\xa1Gracias ".concat(f," por acompa\xf1arnos!"),Object(a.jsx)("br",{}),p,Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Es una pena que ".concat(O," no nos acompa\xf1e").concat(1!==m.length?"n":""," \ud83e\udd7a, pero sabemos \n                            que podemos contar con").concat(1===m.length?"tigo":" ustedes"," para cualquier otra ocasi\xf3n \ud83d\udcaa\ud83c\udffb")]})}),Object(a.jsx)("button",{onClick:function(){var t=document.querySelector(".confirm-container");t.classList.remove("animate__backInRight"),t.classList.add("animate__backOutRight"),setTimeout((function(){return e({type:g})}),200)},disabled:t,children:"Regresar"})]})},H=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"frame top"}),Object(a.jsx)("div",{className:"frame bottom"})]})},J=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),n=t.loading,c=t.initialLoadingEnded;return c?Object(a.jsx)(a.Fragment,{}):(setTimeout((function(){var t=n?"":"animate__animated animate__fadeOut animate__faster",a=document.querySelector(".loader");!c&&a&&(a.className="loader ".concat(t," no-pointer"),e({type:_}))}),2e3),Object(a.jsx)("div",{className:"loader"}))},M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.family})).family,n=Object(i.c)((function(e){return e.ui})).loading,c=Object.keys(t).length;return c&&(document.title="\xa1Bienveni@ ".concat(t.family_name,"!")),Object(a.jsxs)("aside",{className:"container animate__animated animate__backInLeft animate__faster",children:[Object(a.jsxs)("div",{className:"notice",children:["\xa1",c?"Hola ".concat(t.family_name):Object(a.jsxs)(a.Fragment,{children:["Bienvenid",Object(a.jsx)("small",{children:"@"})," a nuestra boda"]}),"!"]}),t.guests?Object(a.jsxs)("div",{className:"little-words",children:["Nos llena de emoci\xf3n celebrar nuestra uni\xf3n junto a ",t.guests.length>1?"ustedes":"ti",",",Object(a.jsx)("br",{}),"que ",t.guests.length>1?"son":"eres"," especial",t.guests.length>1?"es":""," para nosotros."]}):Object(a.jsx)("div",{className:"little-words",children:"Nos llena de emoci\xf3n celebrar nuestra uni\xf3n junto a ustedes."}),Object(a.jsxs)("div",{className:"couple-names",children:["Carlos",Object(a.jsx)("br",{}),"&",Object(a.jsx)("br",{}),"M\xf3nica"]}),Object(a.jsxs)("div",{className:"words",children:['"La vida une a las personas adecuadas en el momento adecuado.',Object(a.jsx)("br",{}),'Que este sea nuestro destino: amar, vivir y empezar cada d\xeda juntos"']}),Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("div",{className:"cute",children:"Domingo"}),Object(a.jsxs)("div",{className:"hour",children:[Object(a.jsx)("h2",{children:"25"}),Object(a.jsx)("span",{children:"2021"}),Object(a.jsx)("span",{children:"3:00 PM"})]}),Object(a.jsx)("div",{className:"cute",children:"Julio"})]}),Object(a.jsxs)("div",{className:"location",onClick:function(){window.open("https://goo.gl/maps/XkoCP9FdpzKGYFE37","_blank")},children:[Object(a.jsx)("i",{className:"fas fa-map-marked-alt"}),Object(a.jsx)("br",{}),"Hacienda San Sebasti\xe1n, Kil\xf3metro 3, v\xeda El Rosal - Subachoque"]}),c>0&&Object(a.jsx)("div",{className:"buttons",children:Object(a.jsx)("button",{onClick:function(){var t=document.querySelector(".container");t.classList.remove("animate__backInLeft"),t.classList.add("animate__backOutLeft"),setTimeout((function(){return e({type:p})}),200)},disabled:n,children:"Confirmar asistencia"})})]})},Y=n(35),z=n(43),A=n(32),B=function(e){var t=e.families,n=e.showCopiedLink,s=Object(i.b)(),r=Object(i.c)((function(e){return e.ui})).filtered,o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(Y.a)(t,2),a=n[0],s=n[1];return[a,function(e){var t=e.target,n=t.name,c=t.value;return s(Object(b.a)(Object(b.a)({},a),{},Object(A.a)({},n,c)))},function(){return s(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e)}]}({name:""}),u=Object(Y.a)(o,2),l=u[0].name,d=u[1],j=function(e){var t=e.length-e.filter((function(e){return e.goes})).length;return 0===t?"all":t===e.length?"nobody":"mix"},m=function(e){return"".concat(window.location.protocol,"//").concat(window.location.host,"/?id=").concat(e)},f=function(e){return new RegExp("".concat(l),"ig").test(e)},O=function(e){var t=e.firstName,n=e.middleName,a=e.lastName,c=e.secondLastName,s=e.nickname;return f("".concat(t," ").concat(n," ").concat(a," ").concat(c," ").concat(s))},p=t.filter((function(e){var t=e.familyName,n=e.guests;return(r&&n.filter((function(e){return e.goes})).length>0||!r)&&(l&&(f(t)||n.filter(O).length>0)||!l)})).map((function(e){return Object(b.a)(Object(b.a)({},e),{},{guests:l?e.guests.filter(O):e.guests})})).map((function(e){return 0===e.guests.length?t.find((function(t){return t.id===e.id})):e})),g={families:p.length,guests:p.reduce((function(e,t){return e+t.guests.length}),0),confirmed:p.reduce((function(e,t){return e+t.guests.filter((function(e){return e.goes})).length}),0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"admin__guests-title",children:"Lista de invitados"}),Object(a.jsxs)("div",{className:"admin__guests-detail",children:[Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Filtro: nombre, familia...",autoComplete:"off",value:l,onChange:d})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Familias:"})," ",g.families]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Invitados:"})," ",g.guests]}),Object(a.jsxs)("div",{className:"admin__guests-filter",onClick:function(){return s({type:C,payload:!r})},children:[Object(a.jsx)("strong",{children:"Confirmados:"})," ",g.confirmed]})]}),Object(a.jsx)("div",{className:"admin__guests-container",children:p.map((function(e){var t=e.id,c=e.familyName,s=e.guests;return Object(a.jsx)(z.CopyToClipboard,{text:m(t),onCopy:n,children:Object(a.jsxs)("div",{className:"admin__guests-container-row ".concat(j(s)),children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("ul",{children:s.map((function(e){var t=e.firstName,n=e.middleName,c=e.lastName,s=e.secondLastName,r=e.nickname,i=e.goes;return Object(a.jsxs)("li",{className:i?"yes":"no",children:["(",r,") ",t," ",n," ",c," ",s]},r)}))})]})},t)}))})]})},G=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})),n=t.loading,s=t.timeout,r=t.copied,o=Object(i.c)((function(e){return e.family})).families;return Object(c.useEffect)((function(){o&&0!==o.length||e(function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,O();case 3:n=e.sent,t(T(n)),t(L());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,o]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"admin__guests",children:[n&&Object(a.jsx)("aside",{className:"admin__guests-loading",children:"Cargando invitados..."}),!n&&o&&Object(a.jsx)(B,{families:o,showCopiedLink:function(){clearTimeout(s),e({type:F,payload:!0});var t=setTimeout((function(){return e({type:F,payload:!1})}),5e3);e({type:I,payload:t})}})]}),Object(a.jsx)("div",{className:"admin__guests-copied animate__animated ".concat(r?"animate__fadeInDown":"animate__fadeOutUp"),children:"Invitaci\xf3n copiada al portapapeles \ud83d\ude0b"})]})},P=function(){var e=window.location.search.split("?admin=").join("").split("/").join(""),t=window.location.search.split("?id=").join("").split("/").join(""),n=Object(i.b)(),s=Object(i.c)((function(e){return e.ui})).showForm;return Object(c.useEffect)((function(){""!==t&&n(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(E()),t.next=3,f(e);case 3:a=t.sent,n(S(a)),n(L());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[n,t]),e?Object(a.jsx)(G,{}):""!==t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{}),Object(a.jsx)(H,{}),s?Object(a.jsx)(D,{}):Object(a.jsx)(M,{})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(J,{}),Object(a.jsx)(H,{}),Object(a.jsx)(M,{})]})},W=n(20),X=n(44),K=n(41),Q={family:{},families:[]},V={showForm:!1,loading:!1,msgError:null,initialLoadingEnded:!1,copied:!1,timeout:-1,filtered:!1},Z=Object(W.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(b.a)(Object(b.a)({},e),{},{initialLoadingEnded:!0});case p:return Object(b.a)(Object(b.a)({},e),{},{showForm:!0});case g:return Object(b.a)(Object(b.a)({},e),{},{showForm:!1});case h:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case x:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case v:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case y:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});case F:return Object(b.a)(Object(b.a)({},e),{},{copied:t.payload});case I:return Object(b.a)(Object(b.a)({},e),{},{timeout:t.payload});case C:return Object(b.a)(Object(b.a)({},e),{},{filtered:t.payload});default:return e}},family:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{family:Object(b.a)({},t.payload)});case w:var n=Object(K.a)(e.family.guests),a=t.payload,c=a.guestId,s=a.goes;return n=n.map((function(e){return e.id===c&&(e.goes=s),e})),Object(b.a)(Object(b.a)({},e),{},{family:Object(b.a)(Object(b.a)({},e.family),{},{guests:Object(K.a)(n)})});case k:return Object(b.a)(Object(b.a)({},e),{},{families:t.payload});default:return e}}}),$="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.d,ee=Object(W.e)(Z,$(Object(W.a)(X.a))),te=function(){return Object(a.jsx)(i.a,{store:ee,children:Object(a.jsx)(P,{})})};n(62);r.a.render(Object(a.jsx)(te,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.04b337c8.chunk.js.map