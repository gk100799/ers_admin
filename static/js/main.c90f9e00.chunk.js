(this.webpackJsonpers_admin=this.webpackJsonpers_admin||[]).push([[0],{196:function(e,a,t){e.exports=t(306)},201:function(e,a,t){},202:function(e,a,t){},203:function(e,a,t){},306:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),o=t.n(r),i=(t(201),t(202),t(15)),c=t(79),s=t(20),m=t(33),u=(t(203),t(363)),d=t(345),E=t(356),p=t(362),g=t(360),h=t(359),v=t(355),b=t(357),f=t(358),y=t(127),w=t(41),C=t.n(w),I=t(42),k=t.n(I),S=t(350),O=t(113),N=t(6),x=t(72),j=t.n(x),q=t(80),F=t(353),D=t(349),P=t(351),W=t(352),L=(Object(d.a)({table:{minWidth:650}}),Object(N.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"28ch"}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,r=Object(O.a)(e,["children","classes","onClose"]);return l.a.createElement(D.a,Object.assign({disableTypography:!0,className:t.root},r),l.a.createElement(q.a,{variant:"h6"},a),n?l.a.createElement(S.a,{"aria-label":"close",className:t.closeButton,onClick:n},l.a.createElement(j.a,null)):null)}))),B=Object(N.a)((function(e){return{root:{padding:e.spacing(2)}}}))(P.a),A=Object(N.a)((function(e){return{root:{margin:0,padding:e.spacing(1)}}}))(W.a);var z=function(e){return l.a.createElement("div",null,l.a.createElement(F.a,{onClose:e.handleClose,"aria-labelledby":"customized-dialog-title",open:e.open,maxWidth:e.maxWidth,fullWidth:e.fullWidth},l.a.createElement(L,{id:"customized-dialog-title",onClose:e.handleClose},e.title),l.a.createElement(B,{dividers:e.dividers},e.DialogContent),!e.noFooter&&l.a.createElement(A,null,e.buttons&&e.buttons.map((function(e){return e})))))},Q=t(372);var M=function(){return l.a.createElement("div",null,l.a.createElement(Q.a,{id:"standard-full-width",label:"Name",style:{margin:8},fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Description",style:{margin:8},fullWidth:!0,multiline:!0,margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Venue",style:{margin:8},margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Date",style:{margin:8},type:"date",margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Time",style:{margin:8},type:"time",margin:"normal",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Fee",style:{margin:8},margin:"normal",type:"number",InputLabelProps:{shrink:!0}}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Organizers",style:{margin:8},margin:"normal",InputLabelProps:{shrink:!0}}))},R=t(361),H=Object(d.a)({table:{minWidth:650}});function T(e,a,t,n,l,r){return{usn:e,name:a,email:t,phone:n,branch:l,registered:r}}var G=[T("Frozen yoghurt",159,6,24,"ISE",4),T("Ice cream sandwich",237,9,37,"ISE",4.3),T("Eclair",262,16,24,"ISE",6),T("Cupcake",305,3.7,67,"ISE",4.3),T("Gingerbread",356,16,49,"ISE",3.9)];function V(){var e=H();return l.a.createElement(v.a,{component:y.a},l.a.createElement(E.a,{className:e.table,"aria-label":"simple table"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(h.a,null,"USN"),l.a.createElement(h.a,{align:"center"},"Name"),l.a.createElement(h.a,{align:"center"},"Email"),l.a.createElement(h.a,{align:"center"},"Phone"),l.a.createElement(h.a,{align:"center"},"Branch"),l.a.createElement(h.a,{align:"center"},"Registered On"))),l.a.createElement(g.a,null,G.map((function(e){return l.a.createElement(f.a,{key:e.name},l.a.createElement(h.a,{component:"th",scope:"row"},e.usn),l.a.createElement(h.a,{align:"center"},e.name),l.a.createElement(h.a,{align:"center"},e.email),l.a.createElement(h.a,{align:"center"},e.phone),l.a.createElement(h.a,{align:"center"},e.branch),l.a.createElement(h.a,{align:"center"},e.registered))})))))}var _=Object(d.a)({table:{minWidth:650}});function U(e,a,t,n,l){return{name:e,calories:a,fat:t,carbs:n,protein:l}}var J=[U("Frozen yoghurt",159,6,24,4),U("Ice cream sandwich",237,9,37,4.3),U("Eclair",262,16,24,6),U("Cupcake",305,3.7,67,4.3),U("Gingerbread",356,16,49,3.9)];function K(e){var a=_(),t=l.a.useState(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],c=l.a.useState(),s=Object(i.a)(c,2),m=s[0],u=s[1],d=function(){o(!1)},w=function(){o(!1)},I=function(){o(!1)},O=function(){o(!1)};return l.a.createElement("div",null,l.a.createElement(p.a,{variant:"contained",color:"primary",style:{marginBottom:"12px"},onClick:function(){u({handleClose:d,DialogContent:l.a.createElement(M,null),buttons:[l.a.createElement(p.a,{autoFocus:!0,onClick:d,color:"primary"},"Close"),l.a.createElement(p.a,{autoFocus:!0,onClick:w,color:"primary"},"Save")],dividers:!0,title:"Add Event",maxWidth:"sm"}),o(!0)}},"Add Event"),l.a.createElement(v.a,{component:y.a},l.a.createElement(E.a,{className:a.table,size:"small","aria-label":"simple table"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(h.a,null,"Event Name"),l.a.createElement(h.a,{align:"center"},"Created On"),l.a.createElement(h.a,{align:"center"},"Action"),l.a.createElement(h.a,{align:"center"},"Participants"))),l.a.createElement(g.a,null,J.map((function(e){return l.a.createElement(f.a,{key:e.name},l.a.createElement(h.a,{component:"th",scope:"row"},e.name),l.a.createElement(h.a,{align:"center"},e.calories),l.a.createElement(h.a,{align:"center"},l.a.createElement("div",{className:"action-cell"},l.a.createElement(S.a,{className:"edit-button icons",color:"primary","aria-label":"edit button",component:"span",onClick:function(a){return t=e.name,console.log(t),u({handleClose:d,DialogContent:l.a.createElement(R.a,null,l.a.createElement(M,null)),buttons:[l.a.createElement(p.a,{autoFocus:!0,onClick:d,color:"primary"},"Close"),l.a.createElement(p.a,{autoFocus:!0,onClick:I,color:"primary"},"Save changes")],dividers:!0,title:"Edit Event",eventId:t,maxWidth:"sm"}),void o(!0);var t}},l.a.createElement(C.a,null)),l.a.createElement(S.a,{className:"icons",color:"primary","aria-label":"delete button",component:"span",onClick:function(a){return t=e.name,console.log(t),u({handleClose:d,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},'Deleting this will delete the Survey questions associated with this event. Are you sure you want to delete this event?",'),buttons:[l.a.createElement(p.a,{onClick:d,color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:O,color:"primary",autoFocus:!0},"Confirm")],dividers:!1,title:"Confirm Delete",eventId:t,maxWidth:"sm"}),void o(!0);var t}},l.a.createElement(k.a,null)))),l.a.createElement(h.a,{align:"center"},l.a.createElement(p.a,{variant:"contained",color:"primary",onClick:function(){return a=e.name,u({handleClose:d,DialogContent:l.a.createElement(V,null),buttons:[l.a.createElement(p.a,{autoFocus:!0,onClick:d,color:"primary"},"Close")],dividers:!0,title:"Registered Students",maxWidth:"lg",eventId:a}),void o(!0);var a}},"View Participants")))}))))),l.a.createElement(z,Object.assign({open:r},m)))}var $=function(e){return l.a.createElement("div",null,l.a.createElement(u.a,null),l.a.createElement("div",{className:"main-title"},"Manage Events"),l.a.createElement(K,null))},X=t(364),Y=t(307),Z=Object(d.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),ee=l.a.forwardRef((function(e,a){return l.a.createElement(Y.a,Object.assign({direction:"up",ref:a},e))}));var ae=function(e){var a=Z();return l.a.createElement("div",null,l.a.createElement(F.a,{fullScreen:!0,open:e.open,onClose:e.handleClose,TransitionComponent:ee},l.a.createElement(X.a,{className:a.appBar},l.a.createElement(u.a,null,l.a.createElement(S.a,{edge:"start",color:"inherit",onClick:e.handleClose,"aria-label":"close"},l.a.createElement(j.a,null)),l.a.createElement(q.a,{variant:"h6",className:a.title},e.title),l.a.createElement(p.a,{autoFocus:!0,color:"inherit",onClick:e.handleClose},e.close))),l.a.createElement("div",{className:"full-screen-dialog-content"},e.DialogContent)))};var te=function(e){return l.a.createElement("div",{className:"question-root"},l.a.createElement("div",{className:"question"},l.a.createElement("div",{className:"question-heading"},l.a.createElement("p",null,"Question:")," ",l.a.createElement("p",{style:{marginLeft:5}},e.question)),l.a.createElement("div",{className:"options"},e.options.map((function(e,a){return l.a.createElement("p",null,a+1,". ",e," ")})))),l.a.createElement("div",{className:"question-hover"},l.a.createElement(S.a,{className:"edit-button icons",color:"primary","aria-label":"edit button",component:"span",onClick:function(a){return e.handleQuestionEdit(e.id)}},l.a.createElement(C.a,{style:{color:"white"}})),l.a.createElement(S.a,{className:"icons",color:"primary","aria-label":"delete button",component:"span",onClick:function(a){return e.handleQuestionDelete(e.id)}},l.a.createElement(k.a,{style:{color:"white"}}))))},ne=t(371),le=t(373),re=t(375),oe=t(376),ie={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:20}}},ce={wrapperCol:{xs:{span:24,offset:0},sm:{span:20,offset:4}}};var se=function(e){var a=Object(n.useState)(!0),t=Object(i.a)(a,2),r=t[0],o=t[1],c=Object(n.useState)([]),s=Object(i.a)(c,2),m=s[0],u=s[1];return Object(n.useEffect)((function(){e.ques&&u(e.ques.options.map((function(e,a){return{name:a,key:a+1,isListField:!0,fieldKey:a+1,val:e}})))}),[]),l.a.createElement("div",null,l.a.createElement(ne.a,Object.assign({name:"dynamic_form_item"},ce,{onFinish:function(a){console.log("Received values of form:",a),e.handleEditSave(a)}}),l.a.createElement(ne.a.Item,{label:"Question:",name:"question",rules:[{required:!0,message:l.a.createElement("span",{style:{color:"red"}},"Please input question!")}],style:{display:"flex",alignItems:"center",marginBottom:15},initialValue:e.ques?e.ques.question:""},l.a.createElement(le.a,{style:{width:"450px",height:40}})),l.a.createElement(ne.a.List,{name:"options"},(function(e,a){var t=a.add,n=a.remove;return l.a.createElement("div",null,r&&m.map((function(e,a){return l.a.createElement("div",{style:{padding:"10px 0 10px 0"}},l.a.createElement(ne.a.Item,Object.assign({},0===a?ie:ce,{required:!1,key:e.key}),l.a.createElement(ne.a.Item,Object.assign({},e,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:l.a.createElement("span",{style:{marginLeft:20,color:"red",marginBottom:20}},"Please input Option or delete this field.")}],initialValue:e.val,noStyle:!0,style:{margin:"20px 0px"}}),l.a.createElement(le.a,{placeholder:"Option",className:"antd-input"})),l.a.createElement(re.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){o(!1),n(e.name)}})))})),e.map((function(a,t){return l.a.createElement("div",{style:{padding:"10px 0 10px 0"}},l.a.createElement(ne.a.Item,Object.assign({},0===t?ie:ce,{required:!1,key:a.key}),l.a.createElement(ne.a.Item,Object.assign({},a,{validateTrigger:["onChange","onBlur"],rules:[{required:!0,whitespace:!0,message:l.a.createElement("span",{style:{marginLeft:20,color:"red",marginBottom:20}},"Please input Option or delete this field.")}],initialValue:a.val,noStyle:!0,style:{margin:"20px 0px"}}),l.a.createElement(le.a,{placeholder:"Option",className:"antd-input"})),e.length>1?l.a.createElement(re.a,{className:"dynamic-delete-button",style:{margin:"0 8px"},onClick:function(){o(!1),n(a.name)}}):null))})),l.a.createElement(ne.a.Item,{style:{margin:"0px 0 0px 20px"}},l.a.createElement(p.a,{color:"primary",onClick:function(){o(!1),t()},style:{width:"40%"}},l.a.createElement(oe.a,{style:{marginRight:"10px"}}),"   Add option")))})),l.a.createElement("div",{className:"form-footer"},l.a.createElement(ne.a.Item,null,l.a.createElement(p.a,{color:"primary"},"Cancel")),l.a.createElement(ne.a.Item,null,l.a.createElement(p.a,{autoFocus:!0,color:"primary",type:"submit"},"Save")))))},me=Object(d.a)((function(e){return{table:{minWidth:650},appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}));function ue(e,a,t,n,l,r){return{usn:e,name:a,email:t,phone:n,branch:l,registered:r}}var de=[ue(159,"Frozen yoghurt",6,24,"ISE",4),ue(237,"Ice cream sandwich",9,37,"ISE",4.3),ue(262,"Eclair",16,24,"ISE",6),ue(305,"Cupcake",3.7,67,"ISE",4.3),ue(356,"Gingerbread",16,49,"ISE",3.9)];function Ee(e){var a=me(),t=l.a.useState(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],c=l.a.useState(!1),s=Object(i.a)(c,2),m=s[0],d=s[1],w=l.a.useState(),I=Object(i.a)(w,2),O=I[0],N=I[1],x=l.a.useState(),j=Object(i.a)(x,2),q=j[0],F=j[1],D=l.a.useState(),P=Object(i.a)(D,2),W=(P[0],P[1],function(){N({handleClose:M,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},l.a.createElement(se,{setFooter:!0})),buttons:[l.a.createElement(p.a,{onClick:M,color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:T,color:"primary",autoFocus:!0},"Save")],dividers:!0,title:"Add question",maxWidth:"sm",fullWidth:!0,noFooter:!0}),o(!0)}),L=function(e){N({handleClose:M,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},"Deleting this will remove this Survey question. Are you sure you want to delete this question?"),buttons:[l.a.createElement(p.a,{onClick:M,color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:function(){return B(e)},color:"primary",autoFocus:!0},"Confirm")],dividers:!1,title:"Confirm Delete",eventId:e,maxWidth:"sm"}),o(!0)},B=function(e){console.log(e),o(!1)},A=function(e){N({handleClose:M,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},l.a.createElement(se,{setFooter:!0,ques:{question:"How was the event ?",options:["It was good","It was moderate","It was not so good"]},handleEditSave:Q})),dividers:!0,title:"Add question",maxWidth:"sm",fullWidth:!0,noFooter:!0}),o(!0)},Q=function(e){console.log(e)},M=function(){o(!1)},H=function(){d(!1)},T=function(){o(!1)};return l.a.createElement("div",null,l.a.createElement(u.a,null),l.a.createElement(z,Object.assign({open:r},O)),l.a.createElement(ae,Object.assign({open:m,handleClose:H},q)),l.a.createElement("div",{className:"main-title"},"Manage Survey"),l.a.createElement(v.a,{component:y.a},l.a.createElement(E.a,{className:a.table,size:"small","aria-label":"simple table"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(h.a,null,"Event Name"),l.a.createElement(h.a,{align:"center"},"Created On"),l.a.createElement(h.a,{align:"center"},"Add / Edit Survey"),l.a.createElement(h.a,{align:"center"},"Delete Survey"))),l.a.createElement(g.a,null,de.map((function(e){return l.a.createElement(f.a,{key:e.name},l.a.createElement(h.a,{component:"th",scope:"row"},e.name),l.a.createElement(h.a,{align:"center"},e.usn),l.a.createElement(h.a,{align:"center"},l.a.createElement(S.a,{color:"primary",onClick:function(a){return t=e.name,F({handleFullClose:H,DialogContent:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{variant:"contained",color:"primary",style:{marginBottom:"12px"},onClick:W},"Add Question"),l.a.createElement("div",{className:"questions-container"},l.a.createElement(te,{id:"1",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"],handleQuestionDelete:L,handleQuestionEdit:A}),l.a.createElement(te,{id:"2",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"],handleQuestionDelete:L,handleQuestionEdit:A}),l.a.createElement(te,{id:"3",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"],handleQuestionDelete:L,handleQuestionEdit:A}),l.a.createElement(te,{id:"4",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"],handleQuestionDelete:L,handleQuestionEdit:A}),l.a.createElement(te,{id:"5",question:"How was the event ?",options:["It was good","It was moderate","It was not so good","Not good at all"],handleQuestionDelete:L,handleQuestionEdit:A}))),close:"Close",title:t,eventId:t}),void d(!0);var t}},l.a.createElement(C.a,null))),l.a.createElement(h.a,{align:"center"},l.a.createElement(S.a,{className:"icons",color:"primary","aria-label":"delete button",component:"span",onClick:function(a){return t=e.name,console.log(t),N({handleClose:M,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},"Deleting this will remove all the Survey questions associated with this event. Are you sure you want to delete?"),buttons:[l.a.createElement(p.a,{onClick:M,color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:T,color:"primary",autoFocus:!0},"Confirm")],dividers:!1,title:"Confirm Delete",eventId:t,maxWidth:"sm"}),void o(!0);var t}},l.a.createElement(k.a,null))))}))))))}var pe=function(){return l.a.createElement("div",null,l.a.createElement(Q.a,{id:"standard-full-width",label:"USN",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"First Name",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Last Name",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Email",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Password",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Phone",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}),l.a.createElement(Q.a,{id:"standard-full-width",label:"Branch",style:{margin:8,width:"45%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined"}))},ge=Object(d.a)({table:{minWidth:650}});function he(e,a,t,n,l,r){return{usn:e,name:a,email:t,phone:n,branch:l,registered:r}}var ve=[he("Frozen yoghurt",159,6,24,"ISE",4),he("Ice cream sandwich",237,9,37,"ISE",4.3),he("Eclair",262,16,24,"ISE",6),he("Cupcake",305,3.7,67,"ISE",4.3),he("Gingerbread",356,16,49,"ISE",3.9)];function be(){var e=ge(),a=l.a.useState(!1),t=Object(i.a)(a,2),n=t[0],r=t[1],o=l.a.useState(),c=Object(i.a)(o,2),s=c[0],m=c[1],d=function(){r(!1)},w=function(){r(!1)},I=function(){r(!1)},O=function(){r(!1)};return l.a.createElement("div",null,l.a.createElement(u.a,null),l.a.createElement("div",{className:"main-title"},"Manage Students"),l.a.createElement(p.a,{variant:"contained",color:"primary",style:{marginBottom:"12px"},onClick:function(){m({handleClose:d,DialogContent:l.a.createElement(R.a,null," ",l.a.createElement(pe,null)),buttons:[l.a.createElement(p.a,{autoFocus:!0,onClick:d,color:"primary"},"Close"),l.a.createElement(p.a,{autoFocus:!0,onClick:w,color:"primary"},"Save")],dividers:!0,title:"Add Student",maxWidth:"sm"}),r(!0)}},"Add Student"),l.a.createElement(z,Object.assign({open:n},s)),l.a.createElement(v.a,{component:y.a},l.a.createElement(E.a,{className:e.table,size:"small","aria-label":"simple table"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(h.a,null,"USN"),l.a.createElement(h.a,{align:"center"},"Name"),l.a.createElement(h.a,{align:"center"},"Email"),l.a.createElement(h.a,{align:"center"},"Password"),l.a.createElement(h.a,{align:"center"},"Phone"),l.a.createElement(h.a,{align:"center"},"Branch"),l.a.createElement(h.a,{align:"center"},"Registered On"),l.a.createElement(h.a,{align:"center"},"Actions"))),l.a.createElement(g.a,null,ve.map((function(e){return l.a.createElement(f.a,{key:e.name},l.a.createElement(h.a,{component:"th",scope:"row"},e.usn),l.a.createElement(h.a,{align:"center"},e.name),l.a.createElement(h.a,{align:"center"},e.email),l.a.createElement(h.a,{align:"center"},e.phone),l.a.createElement(h.a,{align:"center"},e.phone),l.a.createElement(h.a,{align:"center"},e.branch),l.a.createElement(h.a,{align:"center"},e.registered),l.a.createElement(h.a,{align:"center"},l.a.createElement("div",{className:"action-cell"},l.a.createElement(S.a,{className:"edit-button icons",color:"primary","aria-label":"edit button",component:"span",onClick:function(a){return t=e.name,console.log(t),m({handleClose:d,DialogContent:l.a.createElement(R.a,null," ",l.a.createElement(pe,null)),buttons:[l.a.createElement(p.a,{autoFocus:!0,onClick:d,color:"primary"},"Close"),l.a.createElement(p.a,{autoFocus:!0,onClick:I,color:"primary"},"Save changes")],dividers:!0,title:"Edit Event",eventId:t,maxWidth:"sm"}),void r(!0);var t}},l.a.createElement(C.a,null)),l.a.createElement(S.a,{className:"icons",color:"primary","aria-label":"delete button",component:"span",onClick:function(a){return t=e.name,console.log(t),m({handleClose:d,DialogContent:l.a.createElement(R.a,{id:"alert-dialog-description"},'Deleting this will delete the Student details completely. Are you sure you want to delete this Student details?",'),buttons:[l.a.createElement(p.a,{onClick:d,color:"primary"},"Cancel"),l.a.createElement(p.a,{onClick:O,color:"primary",autoFocus:!0},"Confirm")],dividers:!1,title:"Confirm Delete",eventId:t,maxWidth:"sm"}),void r(!0);var t}},l.a.createElement(k.a,null)))))}))))))}var fe=t(173),ye=t.n(fe),we=t(126),Ce=t(180),Ie=t(172);var ke=function(e){var a=Object(n.useState)(null),t=Object(i.a)(a,2),r=t[0],o=t[1],c=e.data.map((function(e){var a=e.title,t=Object(O.a)(e,["title"]);return Object(we.a)({},t,{tooltip:a})}));return l.a.createElement("div",{"data-tip":"","data-for":"chart"},l.a.createElement(Ie.PieChart,{data:c,onMouseOver:function(e,a){o(a)},onMouseOut:function(){o(null)},label:function(e){var a=e.dataEntry;return Math.round(a.percentage)+"%"},labelStyle:Object(we.a)({},{fontSize:"8px",fontFamily:"sans-serif"}),style:{height:"150px"},animate:!0}),l.a.createElement(Ce.a,{id:"chart",getContent:function(){return"number"===typeof r?(e=c[r],"".concat(e.value," students voted this option")):null;var e}}))};var Se=function(e){var a=["#E38627","#C13C37","#6A2135","#6A6139"];return l.a.createElement("div",null,l.a.createElement("div",{className:"response-layout-root"},l.a.createElement("div",{className:"response-layout"},l.a.createElement("div",{className:"question-heading"},l.a.createElement("p",null,"Question:")," ",l.a.createElement("p",{style:{marginLeft:5}},e.question)),l.a.createElement("div",{className:"options"},e.options.map((function(e,t){return l.a.createElement("p",{style:{display:"flex",alignItems:"center"}},l.a.createElement("div",{className:"color-box",style:{backgroundColor:"".concat(a[t])}}),e)})))),l.a.createElement("div",{className:"pie-chart-root"},l.a.createElement(ke,{data:[{title:"One",value:10,color:"#E38627"},{title:"Two",value:15,color:"#C13C37"},{title:"Three",value:20,color:"#6A2135"}]}))))},Oe=Object(d.a)((function(e){return{table:{minWidth:650},appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}}));function Ne(e,a,t,n,l,r){return{usn:e,name:a,email:t,phone:n,branch:l,registered:r}}var xe=[Ne(159,"Frozen yoghurt",6,24,"ISE",4),Ne(237,"Ice cream sandwich",9,37,"ISE",4.3),Ne(262,"Eclair",16,24,"ISE",6),Ne(305,"Cupcake",3.7,67,"ISE",4.3),Ne(356,"Gingerbread",16,49,"ISE",3.9)];var je=function(){var e=Oe(),a=l.a.useState(!1),t=Object(i.a)(a,2),n=t[0],r=(t[1],l.a.useState(!1)),o=Object(i.a)(r,2),c=o[0],s=o[1],m=l.a.useState(),d=Object(i.a)(m,2),p=d[0],w=(d[1],l.a.useState()),C=Object(i.a)(w,2),I=C[0],k=C[1],O=function(){s(!1)};return l.a.createElement("div",null,l.a.createElement(u.a,null),l.a.createElement(z,Object.assign({open:n},p)),l.a.createElement(ae,Object.assign({open:c,handleClose:O},I)),l.a.createElement("div",{className:"main-title"},"Survey Results"),l.a.createElement(v.a,{component:y.a},l.a.createElement(E.a,{className:e.table,size:"small","aria-label":"simple table"},l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(h.a,null,"Event Name"),l.a.createElement(h.a,{align:"center"},"Created On"),l.a.createElement(h.a,{align:"center"},"Participants"),l.a.createElement(h.a,{align:"center"},"Responses"))),l.a.createElement(g.a,null,xe.map((function(e){return l.a.createElement(f.a,{key:e.name},l.a.createElement(h.a,{component:"th",scope:"row"},e.name),l.a.createElement(h.a,{align:"center"},e.usn),l.a.createElement(h.a,{align:"center"},e.phone),l.a.createElement(h.a,{align:"center"},l.a.createElement(S.a,{className:"icons",color:"primary","aria-label":"delete button",component:"span",onClick:function(a){return t=e.name,k({handleFullClose:O,DialogContent:l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"questions-container"},l.a.createElement(Se,{id:"1",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"]}),l.a.createElement(Se,{id:"2",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"]}),l.a.createElement(Se,{id:"3",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"]}),l.a.createElement(Se,{id:"4",question:"How was the event ?",options:["It was good","It was moderate","It was not so good"]}),l.a.createElement(Se,{id:"5",question:"How was the event ?",options:["It was good","It was moderate","It was not so good","Not good at all"]}))),close:"Close",title:t,eventId:t}),void s(!0);var t}},l.a.createElement(ye.a,null))))}))))))};var qe=function(){return l.a.createElement("div",null,l.a.createElement(u.a,null),"Survey Details")};var Fe=function(e){return l.a.createElement("div",null,l.a.createElement(u.a,null),l.a.createElement("div",{className:"main-title"},e.match.params.eventId),l.a.createElement(p.a,{variant:"contained",color:"primary",style:{marginBottom:"12px"},onClick:function(){}},"Add Question"))},De=t(367),Pe=t(365),We=t(354),Le=t(370),Be=t(308),Ae=t(368),ze=t(369),Qe=t(366),Me=t(179),Re=t(174),He=t.n(Re),Te=t(178),Ge=t.n(Te),Ve=t(175),_e=t.n(Ve),Ue=t(177),Je=t.n(Ue),Ke=t(176),$e=t.n(Ke),Xe=Object(m.a)(),Ye=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},title:{flexGrow:1},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerContainer:{overflow:"auto"},content:{flexGrow:1,padding:e.spacing(3)}}}));function Ze(e){var a=Ye(),t=l.a.useState(!0),r=Object(i.a)(t,2),o=r[0],m=(r[1],l.a.useState(null)),d=Object(i.a)(m,2),E=d[0],p=d[1],g=l.a.useState(1),h=Object(i.a)(g,2),v=h[0],b=h[1],f=Boolean(E);Object(n.useEffect)((function(){switch(Xe.location.hash.slice(1)){case"/":b(1);break;case"/survey":b(2);break;case"/survey-result":b(3);break;case"/students":b(4);break;default:b(5)}}),[Xe.location]);var y=function(){p(null)},w=function(e){b(e)};return l.a.createElement("div",{className:a.root},l.a.createElement(Pe.a,null),l.a.createElement(X.a,{position:"fixed",className:a.appBar},l.a.createElement(u.a,null,l.a.createElement(q.a,{variant:"h6",noWrap:!0,className:a.title},"Event Registration and Survey"),o&&l.a.createElement("div",null,l.a.createElement(S.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit"},l.a.createElement(He.a,null)),l.a.createElement(Me.a,{id:"menu-appbar",anchorEl:E,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:f,onClose:y},l.a.createElement(Qe.a,{onClick:y},"Profile"),l.a.createElement(Qe.a,{onClick:y},"My account"))))),l.a.createElement(c.a,{history:Xe},l.a.createElement(De.a,{className:a.drawer,variant:"permanent",classes:{paper:a.drawerPaper}},l.a.createElement(u.a,null),l.a.createElement("div",{className:a.drawerContainer},l.a.createElement(We.a,null,l.a.createElement(Be.a,{selected:1===v,button:!0,key:"Manage Events",component:c.b,to:"/",onClick:function(){return w(1)}},l.a.createElement(Ae.a,null,l.a.createElement(_e.a,null)),l.a.createElement(ze.a,{primary:"Manage Events"})),l.a.createElement(Be.a,{selected:2===v,button:!0,key:"Manage Survey",component:c.b,to:"/survey",onClick:function(){return w(2)}},l.a.createElement(Ae.a,null,l.a.createElement($e.a,null)),l.a.createElement(ze.a,{primary:"Manage Survey"})),l.a.createElement(Be.a,{selected:3===v,button:!0,key:"Survey Results",component:c.b,to:"/survey-result",onClick:function(){return w(3)}},l.a.createElement(Ae.a,null,l.a.createElement(Je.a,null)),l.a.createElement(ze.a,{primary:"Survey Results"}))),l.a.createElement(Le.a,null),l.a.createElement(We.a,null,l.a.createElement(Be.a,{selected:4===v,button:!0,key:"Manage Students",component:c.b,to:"/students",onClick:function(){return w(4)}},l.a.createElement(Ae.a,null,l.a.createElement(Ge.a,null)),l.a.createElement(ze.a,{primary:"Manage Students"}))))),l.a.createElement("main",{className:a.content},l.a.createElement(s.a,{exact:!0,path:"/",component:$}),l.a.createElement(s.a,{exact:!0,path:"/survey/:eventId",component:Fe}),l.a.createElement(s.a,{exact:!0,path:"/survey",component:Ee}),l.a.createElement(s.a,{exact:!0,path:"/survey-result",component:je}),l.a.createElement(s.a,{exact:!0,path:"/students",component:be}),l.a.createElement(s.a,{exact:!0,path:"/survey-details",component:qe}))))}var ea=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Ze,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ea,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.c90f9e00.chunk.js.map