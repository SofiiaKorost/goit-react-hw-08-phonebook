"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[96],{1214:function(n,e,r){r.d(e,{$:function(){return d}});var t,o,i=r(168),a=r(6405),l=a.Z.section(t||(t=(0,i.Z)(["\n  padding-top: 30px;\n  padding-bottom: 15px;\n"]))),c=a.Z.h2(o||(o=(0,i.Z)(["\n  font-weight: 700;\n  font-size: 36px;\n  line-height: 42px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #212121;\n  margin-bottom: 12px;\n"]))),s=r(184),d=function(n){var e=n.title,r=n.children;return(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:e}),r]})}},96:function(n,e,r){r.r(e),r.d(e,{default:function(){return Rn}});var t,o,i,a,l,c,s,d,x,p,u,h,f,m,g,b,j,Z,w,v,y,k,C,z,F,L=r(2791),E=r(4270),S=r(1405),q=r(1214),N=r(6895),_=r(6916),T=function(n){return n.contacts.items},A=function(n){return n.contacts.contactsIsLoading},I=function(n){return n.contacts.contactsError},P=function(n){return n.filter},B=(0,_.P1)([T,P],(function(n,e){var r=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(r)}))})),G=r(168),J=r(6405),K=J.Z.div(t||(t=(0,G.Z)(["\n  width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 16px;\n"]))),R=J.Z.label(o||(o=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 1.16;\n"]))),V=J.Z.input(i||(i=(0,G.Z)(["\n  font-size: 18px;\n  line-height: 1.16;\n  width: 300px;\n  height: 26px;\n  border: 2px solid #212121;\n  border-radius: 4px;\n  outline: none;\n  padding: 8px 16px;\n  transition: border-color 250ms linear;\n\n  :hover,\n  :focus {\n    border-color: pink;\n  }\n"]))),$=r(184),H=function(){var n=(0,S.v9)(P),e=(0,S.I0)();return(0,$.jsxs)(K,{children:[(0,$.jsx)(R,{children:"Find contact by name"}),(0,$.jsx)(V,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,N.l)(n.currentTarget.value))}})]})},M=J.Z.div(a||(a=(0,G.Z)(["\n  width: 1200px;\n  margin: 0 auto;\n  padding-left: 15px;\n  padding-right: 15px;\n"]))),D=J.Z.div(l||(l=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 26px;\n  text-align: center;\n  letter-spacing: 0.03em;\n  color: #212121;\n  margin-bottom: 12px;\n"]))),O=r(4802),Q=r(9439),U=J.Z.div(c||(c=(0,G.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),W=J.Z.div(s||(s=(0,G.Z)(["\n  position: absolute;\n\n  display: flex;\n\n  align-items: center;\n  justify-content: center;\n\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 300px;\n  max-width: 450px;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  border: 2px solid #fff;\n"]))),X=r(4164),Y=document.querySelector("#modal-root"),nn=function(n){var e=n.children,r=n.onClose;(0,L.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return(0,X.createPortal)((0,$.jsx)(U,{onClick:function(n){n.target===n.currentTarget&&r()},children:(0,$.jsx)(W,{children:e})}),Y)},en=r(6052),rn=r(5546),tn=r(8174),on=r(5984),an=r(5705),ln=r(8007),cn=(r(7427),(0,J.Z)(an.l0)(d||(d=(0,G.Z)(["\n  width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n"])))),sn=J.Z.label(x||(x=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 1.16;\n"]))),dn=(0,J.Z)(an.gN)(p||(p=(0,G.Z)(["\n  font-size: 18px;\n  line-height: 1.16;\n  width: 300px;\n  height: 26px;\n  border: 2px solid #212121;\n  border-radius: 4px;\n  outline: none;\n  padding: 8px 16px;\n  transition: border-color 250ms linear;\n\n  :hover,\n  :focus {\n    border-color: pink;\n  }\n"]))),xn=(0,J.Z)(an.Bc)(u||(u=(0,G.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.16;\n  color: red;\n"]))),pn=J.Z.button(h||(h=(0,G.Z)(["\n  height: 40px;\n  width: 150px;\n  padding: 8px;\n  background-color: orange;\n  border-radius: 4px;\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.16;\n  text-align: center;\n  letter-spacing: 0.03em;\n  transition: background-color 250ms linear, color 250ms linear,\n    box-shadow 250ms linear;\n  :hover,\n  :focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    background-color: #fff;\n    color: pink;\n  }\n"]))),un=ln.Ry().shape({name:ln.Z_().required("This field is required"),number:ln.Z_().phone(null,!0,"Enter your phone number in the format +000000000000").required()}),hn=(0,on.x0)(),fn=(0,on.x0)(),mn=function(n){var e=n.onClose,r=n.id,t=n.value,o=(0,S.I0)(),i=(0,O.v9)(T),a={name:t.name,number:t.number};return(0,$.jsx)(an.J9,{initialValues:a,validationSchema:un,onSubmit:function(n,t){var a=n.name,l=n.number,c=t.resetForm;if(i.some((function(n){return n.name.toLowerCase()===a.toLowerCase()&&n.id!==r})))tn.Am.error("".concat(a," is alredy in contacts"));else{var s={id:r,value:{name:a,number:l}};o((0,en.Tk)(s)).unwrap().then((function(){tn.Am.success("Contact edited!"),e()})).catch((function(){return tn.Am.error("Something went wrong...Try reloading the page")})),c()}},children:(0,$.jsxs)(cn,{children:[(0,$.jsx)(sn,{htmlFor:hn,children:"Name"}),(0,$.jsx)(dn,{id:hn,type:"text",name:"name",placeholder:"Name"}),(0,$.jsx)(xn,{name:"name",component:"p"}),(0,$.jsx)(sn,{htmlFor:fn,children:"Number"}),(0,$.jsx)(dn,{id:fn,type:"tel",name:"number",placeholder:"+0000000000000"}),(0,$.jsx)(xn,{name:"number",component:"p"}),(0,$.jsx)(pn,{type:"submit",children:"Edit contact"})]})})},gn=r(6856),bn=J.Z.li(f||(f=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 8px;\n  background-color: rgba(192, 192, 192, 0.5);\n  border-radius: 8px;\n  font-size: 20px;\n  line-height: 1.16;\n\n  > ul {\n    display: flex;\n    gap: 16px;\n  }\n"]))),jn=J.Z.button(m||(m=(0,G.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  height: 40px;\n  width: 40px;\n\n  background-color: purple;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.16;\n  text-align: center;\n  letter-spacing: 0.03em;\n  transition: background-color 250ms linear, color 250ms linear,\n    box-shadow 250ms linear;\n  :hover,\n  :focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    background-color: #fff;\n    color: pink;\n  }\n"]))),Zn=(0,J.Z)(gn.FH3)(g||(g=(0,G.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),wn=(0,J.Z)(gn.oTc)(b||(b=(0,G.Z)(["\n  width: 24px;\n  height: 24px;\n"]))),vn=function(n){var e=n.id,r=n.name,t=n.number,o=(0,O.I0)(),i=(0,L.useState)(!1),a=(0,Q.Z)(i,2),l=a[0],c=a[1],s=function(){c(!1)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(bn,{children:[(0,$.jsx)(rn.ZP,{name:r,size:"50",round:!0}),(0,$.jsxs)("p",{children:[r,":\xa0",t]}),(0,$.jsxs)("ul",{children:[(0,$.jsx)("li",{children:(0,$.jsx)(jn,{type:"button",onClick:function(){c(!0)},children:(0,$.jsx)(wn,{})})}),(0,$.jsx)("li",{children:(0,$.jsx)(jn,{type:"button",onClick:function(){return o((0,en.GK)(e))},children:(0,$.jsx)(Zn,{})})})]})]}),l&&(0,$.jsx)(nn,{onClose:s,children:(0,$.jsx)(mn,{onClose:s,value:{name:r,number:t},id:e})})]})},yn=J.Z.ul(j||(j=(0,G.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  width: 650px;\n  margin: 0 auto;\n"]))),kn=function(){var n=(0,O.v9)(B);return(0,$.jsx)(yn,{children:n.map((function(n){var e=n.name,r=n.id,t=n.number;return(0,$.jsx)(vn,{id:r,name:e,number:t},r)}))})},Cn=r(8966),zn=J.Z.div(Z||(Z=(0,G.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),Fn=function(){return(0,$.jsxs)(zn,{children:[(0,$.jsx)(Cn.Z1,{height:"100",width:"100",color:"#FF6600",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""}),";"]})},Ln=(0,J.Z)(an.l0)(w||(w=(0,G.Z)(["\n  width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n"]))),En=J.Z.label(v||(v=(0,G.Z)(["\n  font-weight: 500;\n  font-size: 22px;\n  line-height: 1.16;\n"]))),Sn=(0,J.Z)(an.gN)(y||(y=(0,G.Z)(["\n  font-size: 18px;\n  line-height: 1.16;\n  width: 300px;\n  height: 26px;\n  border: 2px solid #212121;\n  border-radius: 4px;\n  outline: none;\n  padding: 8px 16px;\n  transition: border-color 250ms linear;\n\n  :hover,\n  :focus {\n    border-color: orange;\n  }\n"]))),qn=(0,J.Z)(an.Bc)(k||(k=(0,G.Z)(["\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.16;\n  color: red;\n"]))),Nn=J.Z.button(C||(C=(0,G.Z)(["\n  height: 40px;\n  width: 150px;\n  padding: 8px;\n  background-color: purple;\n  border-radius: 4px;\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.16;\n  text-align: center;\n  letter-spacing: 0.03em;\n  transition: background-color 250ms linear, color 250ms linear,\n    box-shadow 250ms linear;\n  :hover,\n  :focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    background-color: #fff;\n    color: pink;\n  }\n"]))),_n=ln.Ry().shape({name:ln.Z_().required("This field is required"),number:ln.Z_().phone(null,!0,"Enter your phone number in the format +000000000000").required()}),Tn=(0,on.x0)(),An=(0,on.x0)(),In={name:"",number:""},Pn=function(n){var e=n.onClose,r=(0,O.v9)(T),t=(0,S.I0)();return(0,$.jsx)(an.J9,{initialValues:In,validationSchema:_n,onSubmit:function(n,o){var i=n.name,a=n.number,l=o.resetForm;r.some((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?tn.Am.error("".concat(i," is alredy in contacts")):(t((0,en.uK)({name:i,number:a})),e(),l())},children:(0,$.jsxs)(Ln,{children:[(0,$.jsx)(En,{htmlFor:Tn,children:"Name"}),(0,$.jsx)(Sn,{id:Tn,type:"text",name:"name",placeholder:"Name"}),(0,$.jsx)(qn,{name:"name",component:"p"}),(0,$.jsx)(En,{htmlFor:An,children:"Number"}),(0,$.jsx)(Sn,{id:An,type:"tel",name:"number",placeholder:"+0000000000000"}),(0,$.jsx)(qn,{name:"number",component:"p"}),(0,$.jsx)(Nn,{type:"submit",children:"Add contact"})]})})},Bn=r(4373),Gn=J.Z.button(z||(z=(0,G.Z)(["\n  margin: 36px auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n\n  padding: 8px 16px;\n  border-radius: 50%;\n\n  width: 100px;\n  height: 100px;\n  padding: 8px;\n  background-color: purple;\n\n  border: 2px solid #fff;\n  color: #fff;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 1.16;\n  text-align: center;\n  letter-spacing: 0.03em;\n  transition: background-color 250ms linear, color 250ms linear,\n    box-shadow 250ms linear;\n  :hover,\n  :focus {\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);\n    background-color: #fff;\n    color: pink;\n  }\n"]))),Jn=(0,J.Z)(Bn.M0G)(F||(F=(0,G.Z)(["\n  width: 30px;\n  height: 30px;\n"]))),Kn=function(){var n=(0,L.useState)(!1),e=(0,Q.Z)(n,2),r=e[0],t=e[1],o=function(){t(!1)};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Gn,{type:"button",onClick:function(){t(!0)},children:[(0,$.jsx)("span",{children:"Add contact"})," ",(0,$.jsx)(Jn,{})]}),r&&(0,$.jsx)(nn,{onClose:o,children:(0,$.jsx)(Pn,{onClose:o})})]})},Rn=function(){var n=(0,S.I0)(),e=(0,S.v9)(A),r=(0,S.v9)(I);return(0,L.useEffect)((function(){n((0,en.yF)())}),[n]),(0,$.jsx)("main",{children:(0,$.jsxs)(M,{children:[(0,$.jsx)(E.q,{children:(0,$.jsx)("title",{children:"Contacts"})}),(0,$.jsxs)(q.$,{title:"Contact List",children:[(0,$.jsx)(Kn,{}),(0,$.jsx)(H,{}),e&&!r&&(0,$.jsx)(Fn,{}),r&&(0,$.jsx)(D,{children:r}),(0,$.jsx)(kn,{})]})]})})}}}]);
//# sourceMappingURL=96.7770e4ae.chunk.js.map