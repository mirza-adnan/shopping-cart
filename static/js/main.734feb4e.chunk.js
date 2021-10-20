(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{39:function(A,n,t){"use strict";t.r(n);var e,r,c,i,a,o,s,d=t(1),l=t.n(d),b=t(22),g=t.n(b),u=t(2),j=t(15),m=t(14),f=t(10),h=t(4),O=t(3),p=t(0);var w,x,C,B,Q,D=O.b.div(e||(e=Object(u.a)(["\n    width: 100%;\n    font-size: 1.1rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    margin-bottom: 1rem;\n    position: relative;\n"]))),k=O.b.div(r||(r=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n    text-align: center;\n    font-weight: 500;\n    margin-bottom: 1rem;\n"]))),v=O.b.div(c||(c=Object(u.a)(["\n    height: 130px;\n\n    & img {\n        height: 100%;\n    }\n"]))),y=O.b.div(i||(i=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    width: 60%;\n    max-width: 130px;\n"]))),J=O.b.button(a||(a=Object(u.a)(["\n    outline: none;\n    border: none;\n    padding: 0.5rem 0.8rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-text);\n    cursor: pointer;\n"]))),S=O.b.div(o||(o=Object(u.a)(["\n    padding: 0.5rem 0;\n    flex: 1;\n    background-color: rgba(0, 0, 0, 0.07);\n"]))),L=O.b.div(s||(s=Object(u.a)(["\n    cursor: pointer;\n    position: absolute;\n    top: 5px;\n    right: 5px;\n"]))),E=function(A){var n=A.item,t=A.removeFromCart,e=A.incrementQuantity,r=A.decrementQuantity,c=n.id,i=n.title,a=n.image,o=n.price,s=n.quantity,d=(o*s).toFixed(2);return Object(p.jsxs)(D,{children:[Object(p.jsxs)(k,{children:[Object(p.jsx)(v,{children:Object(p.jsx)("img",{src:a,alt:i})}),Object(p.jsx)("p",{children:i}),Object(p.jsxs)("p",{children:[d,"$"]}),Object(p.jsxs)(y,{children:[Object(p.jsx)(J,{onClick:function(){return r(c)},children:"-"}),Object(p.jsx)(S,{children:s}),Object(p.jsx)(J,{onClick:function(){return e(c)},children:"+"})]})]}),Object(p.jsx)(L,{onClick:function(){return t(c)},children:Object(p.jsx)("i",{className:"fas fa-times"})})]})};var I,Y,W,K,N,U=O.b.div(w||(w=Object(u.a)(["\n    position: fixed;\n    width: ",";\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    overflow: hidden;\n    transition: all 0.5s ease-out;\n"])),(function(A){return A.showCart?"100%":"0"})),M=O.b.div(x||(x=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 70%;\n    max-width: 500px;\n    height: 100%;\n    background-color: white;\n    color: var(--clr-primary);\n    overflow: auto;\n    padding: 2rem;\n    text-align: center;\n    transition: transform 0.5s ease-out;\n    transform: ",";\n"])),(function(A){return A.showCart?"translateX(0)":"translateX(100%)"})),P=O.b.div(C||(C=Object(u.a)(["\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    margin-bottom: 1rem;\n"]))),X=O.b.div(B||(B=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    margin: 1rem 0;\n    padding: 0.5rem 0;\n"]))),H=O.b.button(Q||(Q=Object(u.a)(['\n    outline: none;\n    border: none;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 500;\n    font-size: 1.1rem;\n    padding: 0.7rem 1rem;\n    cursor: pointer;\n    border: 1px solid rgba(32, 33, 36, 0.28);\n    box-shadow: 0 1px 3px rgb(32 33 36 / 28%);\n    background-color: var(--clr-text);\n    color: var(--clr-primary);\n    transition: all 0.2s ease;\n\n    &:hover {\n        background-color: var(--clr-primary);\n        color: var(--clr-text);\n    }\n']))),G=function(A){var n=A.showCart,t=A.setShowCart,e=A.cartItems,r=A.removeFromCart,c=A.incrementQuantity,i=A.decrementQuantity,a=A.emptyCart,o=Object(d.useRef)(),s=e.reduce((function(A,n){return A+n.price*n.quantity}),0);return Object(p.jsx)(U,{ref:o,onClick:function(A){A.target===o.current&&t(!1)},showCart:n,children:Object(p.jsxs)(M,{showCart:n,children:[e.length?Object(p.jsxs)(P,{children:[Object(p.jsxs)("h2",{children:["Total: ",s.toFixed(2),"$"]}),Object(p.jsxs)(X,{children:[Object(p.jsx)(H,{onClick:a,children:"Checkout"}),Object(p.jsx)(H,{onClick:a,children:"Clear Cart"})]})]}):null,e.length?e.map((function(A){return Object(p.jsx)(E,{item:A,removeFromCart:r,incrementQuantity:c,decrementQuantity:i},A.id)})):Object(p.jsx)("h2",{children:"Your cart is empty"})]})})};var T,z=O.b.header(I||(I=Object(u.a)(["\n    display: flex;\n    justify-content: space-between;\n    padding: 2rem 3rem;\n    font-size: 1.3rem;\n\n    & h1 {\n        color: var(--clr-accent);\n    }\n\n    @media (max-width: 900px) {\n        flex-direction: column;\n        align-items: center;\n    }\n"]))),F=O.b.nav(Y||(Y=Object(u.a)([""]))),Z=O.b.ul(W||(W=Object(u.a)(["\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 1.5rem;\n\n    & a {\n        color: var(--clr-text);\n        text-decoration: none;\n        transition: color 0.2s ease-in-out;\n    }\n\n    & a:hover {\n        color: var(--clr-accent);\n    }\n"]))),q=O.b.button(K||(K=Object(u.a)(["\n    outline: none;\n    border: none;\n    border-radius: 50px;\n    padding: 0.7rem;\n    cursor: pointer;\n    position: relative;\n\n    & img {\n        width: 25px;\n    }\n"]))),R=O.b.div(N||(N=Object(u.a)(["\n    position: absolute;\n    left: -5px;\n    bottom: -5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 25px;\n    height: 25px;\n    color: var(--clr-text);\n    background-color: var(--clr-accent);\n    text-align: center;\n    border-radius: 50px;\n"]))),V=function(A){var n=A.openCart,t=A.cartCount;return Object(p.jsxs)(z,{children:[Object(p.jsx)("h1",{children:"StyleU"}),Object(p.jsx)(F,{children:Object(p.jsxs)(Z,{children:[Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/shopping-cart",children:"Home"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/shopping-cart/shop",children:"Shop"})}),Object(p.jsx)("li",{children:Object(p.jsx)(f.b,{to:"/shopping-cart/contact",children:"Contact"})}),Object(p.jsx)("li",{children:Object(p.jsxs)(q,{onClick:n,children:[Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:""}),Object(p.jsx)(R,{children:t})]})})]})})]})},_=t.p+"static/media/shopping.db1cd695.svg",$=t.p+"static/media/wave.4199619b.svg";var AA,nA,tA,eA,rA=O.b.img(T||(T=Object(u.a)(["\n    width: 100%;\n    position: absolute;\n    bottom: 0;\n"]))),cA=function(){return Object(p.jsx)(rA,{src:$})};var iA,aA,oA,sA,dA,lA,bA,gA=O.b.main(AA||(AA=Object(u.a)(["\n    flex: 1;\n    position: relative;\n"]))),uA=O.b.div(nA||(nA=Object(u.a)(["\n    display: flex;\n    padding: 2rem 3rem;\n\n    @media (max-width: 1020px) {\n        flex-direction: column;\n        gap: 2rem;\n    }\n"]))),jA=O.b.div(tA||(tA=Object(u.a)(["\n    width: 50%;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    font-size: clamp(1.5rem, 3vw, 2.5rem);\n\n    & span {\n        color: var(--clr-accent);\n    }\n\n    @media (max-width: 1020px) {\n        width: 100%;\n        justify-content: center;\n        text-align: center;\n    }\n"]))),mA=O.b.div(eA||(eA=Object(u.a)(["\n    width: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem 1rem;\n\n    & img {\n        width: 100%;\n        max-width: 580px;\n    }\n\n    @media (max-width: 1020px) {\n        width: 100%;\n        height: 0%;\n    }\n"]))),fA=function(){return Object(p.jsxs)(gA,{children:[Object(p.jsxs)(uA,{children:[Object(p.jsx)(jA,{children:Object(p.jsxs)("h1",{children:["Bringing you ",Object(p.jsx)("span",{children:"tomorrows"})," fashion"," ",Object(p.jsx)("span",{children:"today"})]})}),Object(p.jsx)(mA,{children:Object(p.jsx)("img",{src:_,alt:""})})]}),Object(p.jsx)(cA,{})]})},hA=t(20),OA=t.n(hA),pA=t(26);var wA,xA,CA=O.b.div(iA||(iA=Object(u.a)(['\n    width: 100%;\n    max-width: 320px;\n    background-color: white;\n    color: var(--clr-primary);\n    padding: 2rem 1.5rem;\n    text-align: center;\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column;\n    font-family: "Poppins", sans-serif;\n']))),BA=O.b.div(aA||(aA=Object(u.a)(["\n    width: 100px;\n    margin: 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    & img {\n        width: 100%;\n    }\n"]))),QA=O.b.div(oA||(oA=Object(u.a)(["\n    padding: 1rem 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    gap: 1rem;\n\n    & p {\n        font-weight: 500;\n        font-size: 1.2rem;\n    }\n"]))),DA=O.b.div(sA||(sA=Object(u.a)(["\n    display: flex;\n    font-size: 1.2rem;\n    font-weight: 500;\n    justify-content: center;\n"]))),kA=O.b.button(dA||(dA=Object(u.a)(['\n    outline: none;\n    border: none;\n    background-color: var(--clr-accent);\n    padding: 0.5rem 0;\n    flex: 1;\n    font-size: 1.3rem;\n    font-family: "Montserrat", sans-serif;\n    font-weight: 500;\n    cursor: pointer;\n']))),vA=O.b.div(lA||(lA=Object(u.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex: 1;\n    background-color: rgba(0, 0, 0, 0.1);\n    color: var(--clr-primary);\n"]))),yA=O.b.div(bA||(bA=Object(u.a)(["\n    outline: none;\n    border: none;\n    width: 100%;\n    padding: 0.7rem 0;\n    margin-top: 0.5rem;\n    font-weight: 500;\n    font-size: 1.1rem;\n    background-color: var(--clr-primary);\n    color: var(--clr-text);\n    cursor: pointer;\n"]))),JA=function(A){var n=A.product,t=A.increment,e=A.decrement,r=A.handleAdd,c=n.id,i=n.title,a=n.price,o=n.image,s=n.quantity;return Object(p.jsxs)(CA,{children:[Object(p.jsx)(BA,{children:Object(p.jsx)("img",{src:o,alt:""})}),Object(p.jsxs)(QA,{children:[Object(p.jsx)("p",{children:i}),Object(p.jsxs)("p",{children:["$",a]})]}),Object(p.jsxs)(DA,{children:[Object(p.jsx)(kA,{onClick:function(){return e(c)},children:"-"}),Object(p.jsx)(vA,{children:s}),Object(p.jsx)(kA,{onClick:function(){return t(c)},children:"+"})]}),Object(p.jsx)(yA,{onClick:function(){return r(n)},children:"Add to cart"})]})};var SA,LA,EA=O.b.main(wA||(wA=Object(u.a)(["\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),IA=O.b.div(xA||(xA=Object(u.a)(["\n    width: 100%;\n    max-width: 1100px;\n    min-height: 700px;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    padding: 4rem;\n    grid-gap: 4rem;\n    justify-items: center;\n\n    @media only screen and (max-width: 1100px) {\n        grid-template-columns: repeat(2, 1fr);\n        padding: 2rem;\n        gap: 2rem;\n    }\n\n    @media only screen and (max-width: 600px) {\n        grid-template-columns: 1fr;\n    }\n"]))),YA=function(A){var n=A.addToCart,t=Object(d.useState)([]),e=Object(m.a)(t,2),r=e[0],c=e[1];Object(d.useEffect)((function(){i()}),[]);var i=function(){var A=Object(pA.a)(OA.a.mark((function A(){var n,t,e;return OA.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return"https://fakestoreapi.com/products/category/women's clothing?",A.next=3,fetch("https://fakestoreapi.com/products/category/women's clothing?",{mode:"cors"});case 3:return n=A.sent,A.next=6,n.json();case 6:t=A.sent,e=t.map((function(A){return Object(j.a)(Object(j.a)({},A),{},{quantity:0})})),c(e);case 9:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),a=function(A){var n=r.map((function(n){return n.id===A&&(n.quantity+=1),n}));c(n)},o=function(A){var n=r.map((function(n){return n.id===A&&n.quantity>0&&(n.quantity-=1),n}));c(n)},s=function(A){n(A);var t=r.map((function(n){return n.id===A.id&&(n.quantity=0),n}));c(t)};return Object(p.jsx)(EA,{children:Object(p.jsx)(IA,{children:r.map((function(A){return Object(p.jsx)(JA,{product:A,increment:a,decrement:o,handleAdd:s},A.id)}))})})};var WA,KA=O.b.main(SA||(SA=Object(u.a)(["\n    flex: 1;\n    display: flex;\n    justify-content: center;\n"]))),NA=O.b.div(LA||(LA=Object(u.a)(["\n    margin: 6rem 0;\n    text-align: center;\n\n    & a {\n        color: var(--clr-accent);\n        font-size: 5rem;\n        margin: 0 clamp(1.8rem, 5vw, 3rem);\n    }\n"]))),UA=function(){return Object(p.jsxs)(KA,{children:[Object(p.jsxs)(NA,{children:[Object(p.jsx)("a",{href:"https://www.youtube.com/watch?v=OrGdlKFUVTo",rel:"noreferrer noopener",target:"_blank",children:Object(p.jsx)("i",{className:"fab fa-instagram"})}),Object(p.jsx)("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",rel:"noreferrer noopener",target:"_blank",children:Object(p.jsx)("i",{className:"fab fa-facebook-f"})}),Object(p.jsx)("a",{href:"https://www.youtube.com/watch?v=w7x_lWJNnNg",rel:"noreferrer noopener",target:"_blank",children:Object(p.jsx)("i",{className:"fab fa-twitter"})})]}),Object(p.jsx)(cA,{})]})};var MA=O.b.div(WA||(WA=Object(u.a)(["\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]))),PA=function(){var A=Object(d.useState)(!1),n=Object(m.a)(A,2),t=n[0],e=n[1],r=Object(d.useState)([]),c=Object(m.a)(r,2),i=c[0],a=c[1],o=i.reduce((function(A,n){return A+n.quantity}),0);return Object(p.jsxs)(MA,{children:[Object(p.jsxs)(f.a,{children:[Object(p.jsx)(V,{openCart:function(){e(!0)},cartCount:o}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"/shopping-cart",children:Object(p.jsx)(fA,{})}),Object(p.jsx)(h.a,{exact:!0,path:"/shopping-cart/shop",children:Object(p.jsx)(YA,{addToCart:function(A){var n=Object(j.a)({},A),t=i.some((function(A){return A.id===n.id}));n.quantity>0&&!t&&a(i.concat(n))}})}),Object(p.jsx)(h.a,{exact:!0,path:"/shopping-cart/contact",children:Object(p.jsx)(UA,{})})]})]}),Object(p.jsx)(G,{showCart:t,setShowCart:e,cartItems:i,removeFromCart:function(A){var n=i.filter((function(n){return n.id!==A}));a(n)},incrementQuantity:function(A){var n=i.map((function(n){return n.id===A&&(n.quantity+=1),n}));a(n)},decrementQuantity:function(A){var n=i.filter((function(n){return n.id===A&&n.quantity>0&&(n.quantity-=1),0!==n.quantity}));a(n)},emptyCart:function(){a([])}})]})};var XA,HA=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(PA,{})})},GA=Object(O.a)(XA||(XA=Object(u.a)(['\n    :root {\n        --clr-primary: #24252a;\n        --clr-text: #EEEEEE;\n        --clr-accent: #00ADB5;\n    }\n\n    * {\n        padding: 0;\n        margin: 0;\n        box-sizing: border-box;\n    }\n\n    html {\n        height: 100%;\n    }\n\n    body {\n        height: 100%;\n        font-family: "Poppins", sans-serif;\n        background-color: var(--clr-primary);\n        color: var(--clr-text);\n    }\n\n    body::-webkit-scrollbar {\n        width: 0.25rem;\n    }\n\n    body::-webkit-scrollbar-track {\n        background: #1e1e24;\n    }\n\n    body::-webkit-scrollbar-thumb {\n        background: #00ADB5;\n    }\n'])));g.a.render(Object(p.jsxs)(l.a.StrictMode,{children:[Object(p.jsx)(GA,{}),Object(p.jsx)(HA,{})]}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.734feb4e.chunk.js.map