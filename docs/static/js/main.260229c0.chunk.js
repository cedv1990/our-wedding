(this["webpackJsonpour-wedding"]=this["webpackJsonpour-wedding"]||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(1),s=n.n(c),r=n(19),i=n.n(r),o=n(6),l=n(24),u=n(17),d=n.n(u),j=n(21),m=n(33);n(64);m.a.initializeApp({apiKey:"AIzaSyCHRcw3FIUilwa42WbrsCXWDD3YfwJSaaY",authDomain:"cd-our-wedding.firebaseapp.com",projectId:"cd-our-wedding",storageBucket:"cd-our-wedding.appspot.com",messagingSenderId:"564432822179",appId:"1:564432822179:web:6888a9fe0dabb20d2fc416"});var b=m.a.firestore(),f=n(28),O=n(4),p=function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.doc("families/".concat(t)).get();case 2:if(!(n=e.sent.data())){e.next=10;break}return e.next=6,b.collection("families/".concat(t,"/guests")).get();case 6:return a=e.sent,c=[],a.forEach((function(e){return c.push(Object(O.a)({id:e.id},e.data()))})),e.abrupt("return",Object(O.a)(Object(O.a)({},n),{},{id:t,guests:c}));case 10:return e.abrupt("return",{});case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(j.a)(d.a.mark((function e(){var t,n,a,c,s,r,i,o,l,u,j,m,O,p,h,g,x,v,y;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return t=[],e.next=5,b.collection("families").get();case 5:n=e.sent.docs,a=Object(f.a)(n),e.prev=7,a.s();case 9:if((c=a.n()).done){e.next=21;break}return s=c.value,r=s.data(),i=r.family_name,o=[],e.next=15,b.collection("families/".concat(s.id,"/guests")).get();case 15:l=e.sent.docs,u=Object(f.a)(l);try{for(u.s();!(j=u.n()).done;)m=j.value,O=m.data(),p=O.first_name,h=O.middle_name,g=O.last_name,x=O.second_last_name,v=O.nickname,y=O.goes,o.push({firstName:p,middleName:h,lastName:g,secondLastName:x,nickname:v,goes:y})}catch(d){u.e(d)}finally{u.f()}t.push({id:s.id,familyName:i,guests:o,total:o.length,confirmed:o.filter((function(e){return e.goes})).length});case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),a.e(e.t0);case 26:return e.prev=26,a.f(),e.finish(26);case 29:return e.abrupt("return",t);case 30:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})));return function(){return e.apply(this,arguments)}}(),g="[SHOW] show form",x="[SHOW] hide form",v="[UI] set error",y="[UI] remove error",_="[UI] Start loading",N="[UI] Finish loading",w="[UI] Finish initial loading",k="[FAMILY] load family data",C="[GUESTS] update family guest if goes/bus",F="[FAMILIES] load all guests",I="[Copied] change",L="[Timeout] change",S="[Filtered] filtered list",E=function(){return{type:_}},q=function(){return{type:N}},T=function(e){return{type:k,payload:e}},D=function(e,t,n){return{type:C,payload:{guestId:e,value:n,field:t}}},R=function(e){return{type:F,payload:e}},U=s.a.memo((function(){return Object(a.jsxs)("div",{className:"location",onClick:function(){window.open("https://goo.gl/maps/XkoCP9FdpzKGYFE37","_blank")},children:[Object(a.jsx)("i",{className:"fas fa-map-marked-alt"}),Object(a.jsx)("br",{}),"Hacienda San Sebasti\xe1n, Kil\xf3metro 3, v\xeda El Rosal - Subachoque"]})})),z=n(82),H=n(83),M=function(e){var t=e.description,n=e.descriptionClass,c=e.label,s=e.handleOnChange,r=e.disabled,i=e.checked,o=e.name,l=e.size,u=e.containerClass;return Object(a.jsxs)("div",{className:u,children:[Object(a.jsx)("span",{className:n,children:t}),Object(a.jsx)(H.a,{label:c,title:"Clic para cambiar",labelPlacement:"start",control:Object(a.jsx)(z.a,{onChange:s,checked:i,name:o,size:l,color:"secondary"}),disabled:r})]})};M.defaultProps={size:"medium",containerClass:""};var P=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=Object(o.c)((function(e){return e.family})).family,c=n.id,s=n.guests,r=function(t){return function(n){e(function(e,t,n,a){return function(){var c=Object(j.a)(d.a.mark((function c(s){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s(E()),c.next=3,b.doc("families/".concat(e,"/guests/").concat(t)).update(Object(l.a)({},n,a));case 3:s(D(t,n,a)),s(q());case 5:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}()}(c,t,n.target.name,n.target.checked))}};return s.map((function(e,n){var c=e.first_name,s=e.middle_name,i=e.last_name,o=e.second_last_name,l=e.goes,u=e.id,d=e.vehicle;return Object(a.jsxs)("div",{children:[Object(a.jsx)(M,{checked:l,descriptionClass:"name",description:"".concat("".concat(c," ").concat(s).trim()," ").concat("".concat(i," ").concat(o).trim()),disabled:t,handleOnChange:r(u),label:l?"\ud83d\ude0a":"\ud83e\udd7a",name:"goes"}),l&&Object(a.jsx)(M,{containerClass:"bus-question",checked:!!d,descriptionClass:"bus",description:"\xbfCuenta con medio de transporte?",disabled:t,handleOnChange:r(u),label:d?"Si":"No",name:"vehicle",size:"small"})]},n)}))},B=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=Object(o.c)((function(e){return e.family})).family,c=n.family_name,s=n.guests,r=s.filter((function(e){return e.goes})),i=s.filter((function(e){return!e.goes})),l=function(e){return e.length>1?e.slice(0,e.length-1).join(", ")+" y "+e[e.length-1]:e[0]},u=l(r.map((function(e){return e.nickname}))),d=l(i.map((function(e){return e.nickname}))),j=Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("br",{}),"\xa1Nos vemos el 25 de Julio \ud83d\ude0b!",Object(a.jsx)("br",{}),"Yo ver\xe9, la mejor pinta ese d\xeda \ud83d\udd7a\ud83c\udffb\ud83d\udc83\ud83c\udffb\ud83e\udd2d"]});return Object(a.jsxs)("aside",{className:"confirm-container animate__animated animate__backInRight animate__faster",children:[Object(a.jsxs)("div",{className:"description",children:[Object(a.jsxs)("h2",{children:[c,Object(a.jsx)("br",{}),"\xbfNos acompa\xf1a",s.length>1?"n":"s","?"]}),Object(a.jsxs)("span",{children:["Para confirmar ",s.length>1?"la":"tu"," asistencia, solo debes decir ",s.length>1?"qui\xe9n va":"si vas"," o no a nuestra boda."]}),Object(a.jsx)("span",{className:"icon",children:"\ud83e\udd70"})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"bus-info",children:[Object(a.jsx)("strong",{children:"\xbfNo tienes transporte? \ud83d\ude15"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Dependiendo la cantidad de personas que confirmen asistencia y ",Object(a.jsx)("i",{children:Object(a.jsx)("u",{children:"NO cuenten con medio de transporte"})}),", pondremos a su disposici\xf3n un bus que saldr\xe1 desde el portal de la 80."]}),Object(a.jsx)("form",{children:Object(a.jsx)(P,{})}),Object(a.jsx)("div",{className:"message",children:s.length===r.length?Object(a.jsxs)(a.Fragment,{children:["\xa1Gracias ".concat(u," por acompa\xf1arnos \ud83e\udd17!"),Object(a.jsx)("br",{}),"Estamos ansiosos porque este d\xeda llegue \ud83e\udd70 y tener el placer de contar \n                                con ".concat(1===r.length?"tu":"su"," compa\xf1\xeda en este momento tan especial para nosotros \ud83d\ude03"),Object(a.jsx)("br",{}),j]}):0===r.length?"Qu\xe9 mal que no nos acompa\xf1a".concat(1===s.length?"s":"n"," \ud83d\ude15, pero sabemos que podemos contar con").concat(1===s.length?"tigo":" ustedes"," para cualquier otra ocasi\xf3n \ud83d\udcaa\ud83c\udffb"):Object(a.jsxs)(a.Fragment,{children:["\xa1Gracias ".concat(u," por acompa\xf1arnos!"),Object(a.jsx)("br",{}),j,Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Es una pena que ".concat(d," no nos acompa\xf1e").concat(1!==i.length?"n":""," \ud83e\udd7a, pero sabemos \n                            que podemos contar con").concat(1===i.length?"tigo":" ustedes"," para cualquier otra ocasi\xf3n \ud83d\udcaa\ud83c\udffb")]})}),Object(a.jsx)("button",{onClick:function(){var t=document.querySelector(".confirm-container");t.classList.remove("animate__backInRight"),t.classList.add("animate__backOutRight"),setTimeout((function(){return e({type:x})}),200)},disabled:t,children:"Regresar"}),Object(a.jsx)(U,{})]})},J=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"frame top"}),Object(a.jsx)("div",{className:"frame bottom"})]})},Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.loading,c=t.initialLoadingEnded,s=t.showForm,r="loader ";return c?n&&!s||(r+="animate__animated animate__fadeOut animate__faster no-pointer"):setTimeout((function(){return e({type:w})}),2e3),Object(a.jsx)("div",{className:r})},A=function(e){var t=e.valid,n=e.handleShowForm,c=e.disabled;return t?Object(a.jsx)("div",{className:"buttons large",children:Object(a.jsx)("button",{onClick:n,disabled:c,children:"\xa1Confirma asistencia ac\xe1!"})}):Object(a.jsx)(a.Fragment,{})},G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.family})).family,n=Object(o.c)((function(e){return e.ui})).loading,c=Object.keys(t).length;return c&&(document.title="\xa1Bienveni@ ".concat(t.family_name,"!")),Object(a.jsxs)("aside",{className:"container animate__animated animate__backInLeft animate__faster",children:[Object(a.jsxs)("div",{className:"notice",children:["\xa1",c?"Hola ".concat(t.family_name):Object(a.jsxs)(a.Fragment,{children:["Bienvenid",Object(a.jsx)("small",{children:"@"})," a nuestra boda"]}),"!"]}),t.guests?Object(a.jsxs)("div",{className:"little-words",children:["Nos llena de emoci\xf3n celebrar nuestra uni\xf3n junto a ",t.guests.length>1?"ustedes":"ti",",",Object(a.jsx)("br",{}),"que ",t.guests.length>1?"son":"eres"," especial",t.guests.length>1?"es":""," para nosotros."]}):Object(a.jsx)("div",{className:"little-words",children:"Nos llena de emoci\xf3n celebrar nuestra uni\xf3n junto a ustedes."}),Object(a.jsxs)("div",{className:"couple-names",children:["Carlos",Object(a.jsx)("br",{}),"&",Object(a.jsx)("br",{}),"M\xf3nica"]}),Object(a.jsxs)("div",{className:"words",children:['"La vida une a las personas adecuadas en el momento adecuado.',Object(a.jsx)("br",{}),'Que este sea nuestro destino: amar, vivir y empezar cada d\xeda juntos"']}),Object(a.jsxs)("div",{className:"date",children:[Object(a.jsx)("div",{className:"cute",children:"Domingo"}),Object(a.jsxs)("div",{className:"hour",children:[Object(a.jsx)("h2",{children:"25"}),Object(a.jsx)("span",{children:"2021"}),Object(a.jsx)("span",{children:"3:00 PM"})]}),Object(a.jsx)("div",{className:"cute",children:"Julio"})]}),Object(a.jsx)(A,{valid:c>0,handleShowForm:function(){var t=document.querySelector(".container");t.classList.remove("animate__backInLeft"),t.classList.add("animate__backOutLeft"),setTimeout((function(){return e({type:g})}),200)},disabled:n}),Object(a.jsx)(U,{})]})},W=n(35),X=n(43),K=function(e){var t=e.firstName,n=e.middleName,a=e.lastName,c=e.secondLastName,s=e.nickname;return"".concat(t||""," ").concat(n||""," ").concat(a||""," ").concat(c||""," ").concat(s===t||s===n?"":"(".concat(s,")"))},Q=function(){var e=Object(o.c)((function(e){return e.family})).families;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{type:"button",onClick:function(t){var n=t.target,a=document.querySelector(".data-clipboard");n.classList.add("copied"),n.innerHTML="Datos copiados!";var c=function(){var t=function(e){return e?"Si":"No"};return e.reduce((function(e,n){n.familyName;var a=n.guests;return a.forEach((function(n){return e.push("".concat(K(n),"\t").concat(t(n.goes),"\t").concat(t(n.goes&&!a.vehicle),"\n"))})),e}),[]).join("")}();a.value=c,a.select(),a.setSelectionRange(0,99999999),document.execCommand("copy"),a.value="",setTimeout((function(){n.classList.remove("copied"),n.innerHTML="Copiar datos"}),3e3)},children:"Copiar datos"}),Object(a.jsx)("textarea",{class:"data-clipboard"})]})},V=function(e){var t=e.families,n=e.showCopiedLink,s=Object(o.b)(),r=Object(o.c)((function(e){return e.ui})).filtered,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(W.a)(t,2),a=n[0],s=n[1];return[a,function(e){var t=e.target,n=t.name,c=t.value;return s(Object(O.a)(Object(O.a)({},a),{},Object(l.a)({},n,c)))},function(){return s(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e)}]}({name:""}),u=Object(W.a)(i,2),d=u[0].name,j=u[1],m=function(e){var t=e.length-e.filter((function(e){return e.goes})).length;return 0===t?"all":t===e.length?"nobody":"mix"},b=function(e){return"".concat(window.location.href.replace(window.location.search,""),"?id=").concat(e)},f=function(e,t,n){var a=function(e){return new RegExp("".concat(t),"ig").test(e)},c=function(e){var t=e.firstName,n=e.middleName,c=e.lastName,s=e.secondLastName,r=e.nickname;return a("".concat(t||""," ").concat(n||""," ").concat(c||""," ").concat(s||""," ").concat(r||""))},s=function(e){var s=e.familyName,r=e.guests;return(n&&r.filter((function(e){return e.goes})).length>0||!n)&&(!t||t&&(a(s)||r.filter(c).length>0))},r=function(e){return Object(O.a)(Object(O.a)({},e),{},{guests:t?e.guests.filter(c):e.guests})},i=function(t){return 0===t.guests.length?e.find((function(e){return e.id===t.id})):t},o=function(e,t){return e.familyName.localeCompare(t.familyName)};return e.filter(s).map(r).map(i).sort(o)}(t,d,r),p={families:f.length,guests:f.reduce((function(e,t){return e+t.guests.length}),0),confirmed:f.reduce((function(e,t){return e+t.guests.filter((function(e){return e.goes})).length}),0),bus:f.reduce((function(e,t){return e+t.guests.filter((function(e){return e.goes&&!e.vehicle})).length}),0)},h=function(e){return Object(a.jsx)("li",{className:"".concat(e.goes?"yes":"no").concat(e.goes&&!e.vehicle?" bus":""),children:K(e)})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"admin__guests-title",children:"Lista de invitados"}),Object(a.jsxs)("div",{className:"admin__guests-detail",children:[Object(a.jsx)("div",{className:"input",children:Object(a.jsx)("input",{type:"text",name:"name",placeholder:"Filtro: nombre, familia...",autoComplete:"off",value:d,onChange:j})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Familias:"})," ",p.families]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Invitados:"})," ",p.guests]}),Object(a.jsxs)("div",{className:"admin__guests-filter",onClick:function(){return s({type:S,payload:!r})},children:[Object(a.jsx)("strong",{children:"Confirmados:"})," ",p.confirmed]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"Bus:"})," ",p.bus]})]}),Object(a.jsx)("div",{className:"admin__guests-copy",children:Object(a.jsx)("div",{className:"input",children:Object(a.jsx)(Q,{})})}),Object(a.jsxs)("div",{className:"admin__guests-container",children:[f.length>0&&f.map((function(e){var t=e.id,c=e.familyName,s=e.guests;return Object(a.jsx)(X.CopyToClipboard,{text:b(t),onCopy:n,children:Object(a.jsxs)("div",{className:"admin__guests-container-row ".concat(m(s)),children:[Object(a.jsx)("h1",{children:c}),Object(a.jsx)("ul",{children:s.map((function(e,t){return Object(a.jsx)(h,Object(O.a)({},e),t)}))})]})},t)})),0===f.length&&Object(a.jsx)("div",{className:"admin__guests-container-row error",children:"\ud83d\ude05 No se encontraron invitados por el filtro."})]})]})},Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.loading,s=t.timeout,r=t.copied,i=Object(o.c)((function(e){return e.family})).families;return Object(c.useEffect)((function(){i&&0!==i.length||e(function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E()),e.next=3,h();case 3:n=e.sent,t(R(n)),t(q());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e,i]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"admin__guests",children:[n&&Object(a.jsx)("aside",{className:"admin__guests-loading",children:"Cargando invitados..."}),!n&&i&&Object(a.jsx)(V,{families:i,showCopiedLink:function(){clearTimeout(s),e({type:I,payload:!0});var t=setTimeout((function(){return e({type:I,payload:!1})}),5e3);e({type:L,payload:t})}})]}),Object(a.jsx)("div",{className:"admin__guests-copied animate__animated ".concat(r?"animate__fadeInDown":"animate__fadeOutUp"),children:"Invitaci\xf3n copiada al portapapeles \ud83d\ude0b"})]})},$=function(e){var t=window.location.search.split("?").pop();if(t){var n,a=t.split("&"),c=Object(f.a)(a);try{for(c.s();!(n=c.n()).done;){var s=n.value.split("=");if(s[0]===e)return s[1]}}catch(r){c.e(r)}finally{c.f()}}return null},ee=function(){var e="true"===$("admin"),t=$("id"),n=Object(o.b)(),s=Object(o.c)((function(e){return e.ui})).showForm;return Object(c.useEffect)((function(){""!==t&&n(function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(E()),t.next=3,p(e);case 3:a=t.sent,n(T(a)),n(q());case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}),[n,t]),e?Object(a.jsx)(Z,{}):""!==t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y,{}),Object(a.jsx)(J,{}),s?Object(a.jsx)(B,{}):Object(a.jsx)(G,{})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y,{}),Object(a.jsx)(J,{}),Object(a.jsx)(G,{})]})},te=n(20),ne=n(44),ae=n(41),ce={family:{},families:[]},se={showForm:!1,loading:!1,msgError:null,initialLoadingEnded:!1,copied:!1,timeout:-1,filtered:!1},re=Object(te.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(O.a)(Object(O.a)({},e),{},{initialLoadingEnded:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{showForm:!0});case x:return Object(O.a)(Object(O.a)({},e),{},{showForm:!1});case v:return Object(O.a)(Object(O.a)({},e),{},{msgError:t.payload});case y:return Object(O.a)(Object(O.a)({},e),{},{msgError:null});case _:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case N:return Object(O.a)(Object(O.a)({},e),{},{loading:!1});case I:return Object(O.a)(Object(O.a)({},e),{},{copied:t.payload});case L:return Object(O.a)(Object(O.a)({},e),{},{timeout:t.payload});case S:return Object(O.a)(Object(O.a)({},e),{},{filtered:t.payload});default:return e}},family:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(O.a)(Object(O.a)({},e),{},{family:Object(O.a)({},t.payload)});case C:var n=Object(ae.a)(e.family.guests),a=t.payload,c=a.guestId,s=a.field,r=a.value;return n=n.map((function(e){return e.id===c&&(e[s]=r),e})),Object(O.a)(Object(O.a)({},e),{},{family:Object(O.a)(Object(O.a)({},e.family),{},{guests:Object(ae.a)(n)})});case F:return Object(O.a)(Object(O.a)({},e),{},{families:t.payload});default:return e}}}),ie="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,oe=Object(te.e)(re,ie(Object(te.a)(ne.a))),le=function(){return Object(a.jsx)(o.a,{store:oe,children:Object(a.jsx)(ee,{})})};n(62);i.a.render(Object(a.jsx)(le,{}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.260229c0.chunk.js.map