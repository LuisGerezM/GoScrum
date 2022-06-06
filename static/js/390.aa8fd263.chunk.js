"use strict";(self.webpackChunkgoscrumproject=self.webpackChunkgoscrumproject||[]).push([[390],{8393:function(e,t,r){r.d(t,{F:function(){return i}});r(2791);var n=r(6960),a=r(184),i=function(e){var t=e.autoClose,r=void 0===t?1500:t,i=e.error,o=void 0===i?null:i;return(0,a.jsx)(n.Ix,{position:"top-right",icon:o&&Object.keys(o).length>0&&o.name?"\ud83d\ude25":"\ud83d\ude0e",autoClose:r,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,theme:"dark",pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})}},6390:function(e,t,r){r.r(t),r.d(t,{default:function(){return $e}});var n=r(885),a=r(5705),i=r(2791),o=r(9434),s=r(6960),l=r(8485),c=r(8571),u=r(5766),d=r(2982),h=function(){var e=(0,i.useState)(null),t=(0,n.Z)(e,2),r=t[0],a=t[1],s=(0,i.useState)(!1),l=(0,n.Z)(s,2),c=l[0],h=l[1],m=(0,i.useState)(!1),f=(0,n.Z)(m,2),v=f[0],p=f[1],g=(0,o.I0)();return(0,i.useEffect)((function(){return h(!0),fetch("".concat("https://goscrum-api.alkemy.org/","task/data"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token_user"))}}).then((function(e){return e.json()})).then((function(e){if(200!==e.status_code)throw new Error(e.message);a(function(e){return{status:(0,d.Z)(e.status),importance:(0,d.Z)(e.importance)}}(e.result))})).catch((function(e){p(!0),(0,u.Y)({title:"ERROR",text:"Ups... Ocurri\xf3 un problema ".concat(e.message),icon:"error"})})).finally((function(){return h(!1)})),function(){p(!1),a(null)}}),[g]),{dataSelect:r,loadingTaskData:c,errorTaskData:v}},m=r(1144),f=r(878),v=r(9816),p=r(1413),g=r(5987),x=["count","wrapper","className","containerClassName","containerTestId","circle","style"],j=["children"],C=i.createContext({});function Z(e){for(var t,r,a,o=e.count,s=void 0===o?1:o,l=e.wrapper,c=e.className,u=e.containerClassName,d=e.containerTestId,h=e.circle,m=void 0!==h&&h,f=e.style,v=(0,g.Z)(e,x),j=i.useContext(C),Z=(0,p.Z)({},v),k=0,T=Object.entries(v);k<T.length;k++){var S=(0,n.Z)(T[k],2),b=S[0];"undefined"===typeof S[1]&&delete Z[b]}var w=(0,p.Z)((0,p.Z)((0,p.Z)({},j),Z),{},{circle:m}),y=(0,p.Z)((0,p.Z)({},f),function(e){var t=e.baseColor,r=e.highlightColor,n=e.width,a=e.height,i=e.borderRadius,o=e.circle,s=e.direction,l=e.duration,c=e.enableAnimation,u=void 0===c||c,d={};return"rtl"===s&&(d["--animation-direction"]="reverse"),"number"===typeof l&&(d["--animation-duration"]="".concat(l,"s")),u||(d["--pseudo-element-display"]="none"),"string"!==typeof n&&"number"!==typeof n||(d.width=n),"string"!==typeof a&&"number"!==typeof a||(d.height=a),"string"!==typeof i&&"number"!==typeof i||(d.borderRadius=i),o&&(d.borderRadius="50%"),"undefined"!==typeof t&&(d["--base-color"]=t),"undefined"!==typeof r&&(d["--highlight-color"]=r),d}(w)),N="react-loading-skeleton";c&&(N+=" ".concat(c));for(var F=null!==(t=w.inline)&&void 0!==t&&t,E=[],L=Math.ceil(s),R=0;R<L;R++){var A=y;if(L>s&&R===L-1){var M=null!==(r=A.width)&&void 0!==r?r:"100%",O=s%1,D="number"===typeof M?M*O:"calc(".concat(M," * ").concat(O,")");A=(0,p.Z)((0,p.Z)({},A),{},{width:D})}var B=i.createElement("span",{className:N,style:A,key:R},"\u200c");F?E.push(B):E.push(i.createElement(i.Fragment,{key:R},B,i.createElement("br",null)))}return i.createElement("span",{className:u,"data-testid":d,"aria-live":"polite","aria-busy":null===(a=w.enableAnimation)||void 0===a||a},l?E.map((function(e,t){return i.createElement(l,{key:t},e)})):E)}function k(e){var t=e.children,r=(0,g.Z)(e,j);return i.createElement(C.Provider,{value:r},t)}var T=r(184),S=function(e){var t=e.count,r=void 0===t?4:t,n=e.height,a=void 0===n?60:n,i=e.width,o=void 0===i?null:i,s=e.nameClass,l=void 0===s?"":s,c=e.repeat,u=void 0===c?[1]:c;return(0,T.jsx)(T.Fragment,{children:u.map((function(e){return(0,T.jsx)("div",{className:l,children:(0,T.jsx)(k,{baseColor:"#d6d2d2",highlightColor:"#594a4a",borderRadius:"0.5rem",duration:4,children:(0,T.jsx)(Z,{count:r,height:a,width:o})})},e)}))})},b=function(e){var t=e.error,r=e.loadingTasks,n=e.title;return(0,T.jsxs)("div",{className:"footer-form",children:[(0,T.jsx)("button",{type:"submit",disabled:!!r,children:n}),"error create"===t.name&&(0,T.jsx)("div",{children:"No pudimos crear la tarea \ud83d\ude25"})]})},w=function(e){var t=e.name,r=e.errors,n=e.touched,a=e.values,i=e.handleChange,o=e.handleBlur;return(0,T.jsxs)("div",{children:[(0,T.jsx)("textarea",{className:n[t]&&r?"error":"",name:t,onChange:i,onBlur:o,placeholder:"Descripci\xf3n",value:a}),r&&n[t]&&(0,T.jsx)("span",{className:r?"error":"",children:r})]})},y=function(e){var t=e.loadingTaskData,r=e.handleSubmit,n=e.touched,a=e.errors,i=e.handleChange,o=e.handleBlur,s=e.values,l=e.dataSelect,c=e.error,u=e.loadingTasks,d=e.title;return(0,T.jsxs)(T.Fragment,{children:["CREATE"===u&&(0,T.jsx)(f.L,{nameClass:"tasks-create"}),(0,T.jsx)("form",{onSubmit:r,children:t?(0,T.jsx)(S,{width:559}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("div",{children:[(0,T.jsx)(m.Z,{nameClass:"input-form",name:"title",type:"text",placeholder:"Titulo",values:s.title,handleChange:i,handleBlur:o,touched:n,errors:a.title,desde:"taskForm"}),(0,T.jsx)(v.Z,{dataOption:null===l||void 0===l?void 0:l.status,name:"status",values:s.status,txtDefaultOption:"Seleccionar un estado",touched:n,errors:a.status,handleChange:i,handleBlur:o}),(0,T.jsx)(v.Z,{nameClass:"importance",dataOption:null===l||void 0===l?void 0:l.importance,name:"importance",values:s.importance,txtDefaultOption:"Seleccionar una prioridad",touched:n,errors:a.importance,handleChange:i,handleBlur:o})]}),(0,T.jsx)("div",{children:(0,T.jsx)(w,{name:"description",values:s.description,touched:n,errors:a.description,handleChange:i,handleBlur:o})}),(0,T.jsx)(b,{error:c,loadingTasks:u,title:d})]})})]})},N=r(8393),F=(r(5462),function(){var e=function(){var e=(0,o.v9)((function(e){return e.tasksReducer})),t=e.loadingTasks,r=e.error,u=e.success_request,d=e.status_code,h=e.task_edit,m=(0,i.useState)({}),f=(0,n.Z)(m,2),v=f[0],p=f[1],g={title:"",status:"",importance:"",description:"",textForm:{title:"Crear",subTitle:"Crea"}},x=(0,o.I0)(),j="*Campo obligatorio",C=c.Ry().shape({title:c.Z_().min(3,"La cantidad m\xedmina de caracteres es 3").required(j),status:c.Z_().required(j),importance:c.Z_().required(j),description:c.Z_().required(j)}),Z=(0,a.TA)({initialValues:g,validationSchema:C,onSubmit:function(){if(0===Object.keys(v).length)x((0,l.vr)(Z.values));else{var e=Z.values,t=e.title,r=e.status,n=e.importance,a=e.description,i={_id:v._id,title:t,status:r,importance:n,description:a};x((0,l.B8)(i))}}}),k=Z.setFieldValue,T=Z.resetForm;return(0,i.useEffect)((function(){Object.keys(h).length>0&&(h.textForm={title:"Editar",subTitle:"Edita"},p(h),k("title",h.title),k("importance",h.importance),k("status",h.status),k("description",h.description),x((0,l.hC)()),s.Am.info("Ahora puedes editar la tarea"))}),[h,k,x]),(0,i.useEffect)((function(){Object.keys(r).length>0&&("error create"===r.name||"error edit card"===r.name||"error edit status card"===r.name)&&(s.Am.info(r.message),x((0,l.cp)(r)))}),[r,x]),(0,i.useEffect)((function(){!u||"CREATE"!==u&&"EDIT"!==u||("CREATE"===u?s.Am.info("Tu tarea se cre\xf3 correctamente"):s.Am.info(d),p({}),x((0,l.hC)()),T())}),[u,d,T,x]),{formik:Z,error:r,loadingTasks:t,initialValues:g,editFormFields:v}}(),t=e.formik,r=t.handleSubmit,u=t.handleChange,d=t.handleBlur,m=t.errors,f=t.touched,v=t.values,p=e.error,g=e.loadingTasks,x=e.initialValues,j=e.editFormFields,C=h(),Z=C.dataSelect,k=C.loadingTaskData,S=C.errorTaskData,b=Object.keys(j).length>0?j.textForm.title:x.textForm.title,w=Object.keys(j).length>0?j.textForm.subTitle:x.textForm.subTitle;return(0,T.jsxs)("section",{className:"task-form",children:[(0,T.jsxs)("div",{children:[b," Tarea"]}),(0,T.jsxs)("p",{children:[w," tus tareas"]}),!Z&&S&&(0,T.jsx)("div",{className:"error",children:" Tuvimos un problema, comunicate con el administrador"}),(0,T.jsx)(y,{loadingTaskData:k,handleSubmit:r,touched:f,errors:m,handleChange:u,handleBlur:d,values:v,dataSelect:Z,error:p,loadingTasks:g,title:b}),(0,T.jsx)(N.F,{error:p})]})}),E=r(162),L=function(){var e=function(){var e=(0,i.useState)(window.innerWidth<900),t=(0,n.Z)(e,2),r=t[0],a=t[1],o=function(){window.innerWidth<900?a(!0):a(!1)};return(0,i.useEffect)((function(){return o(),window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}})),{isPhone:r}}(),t=e.isPhone,r=(0,i.useState)(null),a=(0,n.Z)(r,2),c=a[0],u=a[1],d=(0,i.useState)(null),h=(0,n.Z)(d,2),m=h[0],f=h[1],v=(0,i.useState)(null),p=(0,n.Z)(v,2),g=p[0],x=p[1],j=(0,o.v9)((function(e){return e.tasksReducer})),C=j.loadingTasks,Z=j.tasks,k=j.error,T=j.success_request,S=j.status_code,b=(0,o.I0)(),w=(0,i.useState)("ALL"),y=(0,n.Z)(w,2),N=y[0],F=y[1],L=(0,i.useState)(null),R=(0,n.Z)(L,2),A=R[0],M=R[1],O=(0,i.useState)(""),D=(0,n.Z)(O,2),B=D[0],I=D[1];(0,i.useEffect)((function(){Object.keys(k).length>0&&"error create"!==k.name&&"error edit card"!==k.name&&"error edit status card"!==k.name&&(x("Ups... Ocurri\xf3 un problema ... Pongase en contacto con el administrador "),s.Am.info(k.message),b((0,l.cp)(k)))}),[k,b]),(0,i.useEffect)((function(){Z.length>0?(u(Z),f(Z),x(null)):0===(null===Z||void 0===Z?void 0:Z.length)&&x("A\xfan no tienes tareas")}),[Z,b]),(0,i.useEffect)((function(){"DELETE"===T?(s.Am.info(S),b((0,l.hC)())):"default"===T&&b((0,l.hC)())}),[T,S,b]),(0,i.useEffect)((function(){f(null),b((0,l.Ak)("MY"===N?{path:"/me"}:{path:""}))}),[N,b]),(0,i.useEffect)((function(){var e;f(A?(e=A,null===c||void 0===c?void 0:c.filter((function(t){return t.title.toLowerCase().indexOf(e.toLowerCase())>-1}))):c)}),[A,c]);return{handleChangeRadioBtn:function(e){I(""),F(e.currentTarget.value)},handleSearchTitle:(0,E.Z)((function(e){M(e.target.value)}),1e3),handleChangeImportance:function(e){"ALL"===e.currentTarget.value?(I(e.currentTarget.value),f(c)):""!==e.currentTarget.value&&(I(e.currentTarget.value),f(c.filter((function(t){return t.importance===e.currentTarget.value}))))},renderListTasks:m,valueSelect:B,isPhone:t,error:k,loadingTasks:C,listTasks:c,tasksFromWho:N,searchTitle:A,msgTasks:g}},R=r(3366),A=r(7462),M=r(8182),O=r(2039),D=r(1388),B=r(4959);function I(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}var z=r(4036),P=r(9103),_=r(3840),q=r(9818),W=r(2152);function U(e){return(0,q.Z)("MuiFormControl",e)}(0,W.Z)("MuiFormControl",["root","marginNone","marginNormal","marginDense","fullWidth","disabled"]);var V=["children","className","color","component","disabled","error","focused","fullWidth","hiddenLabel","margin","required","size","variant"],G=(0,B.ZP)("div",{name:"MuiFormControl",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return(0,A.Z)({},t.root,t["margin".concat((0,z.Z)(r.margin))],r.fullWidth&&t.fullWidth)}})((function(e){var t=e.ownerState;return(0,A.Z)({display:"inline-flex",flexDirection:"column",position:"relative",minWidth:0,padding:0,margin:0,border:0,verticalAlign:"top"},"normal"===t.margin&&{marginTop:16,marginBottom:8},"dense"===t.margin&&{marginTop:8,marginBottom:4},t.fullWidth&&{width:"100%"})})),H=i.forwardRef((function(e,t){var r=(0,D.Z)({props:e,name:"MuiFormControl"}),a=r.children,o=r.className,s=r.color,l=void 0===s?"primary":s,c=r.component,u=void 0===c?"div":c,d=r.disabled,h=void 0!==d&&d,m=r.error,f=void 0!==m&&m,v=r.focused,p=r.fullWidth,g=void 0!==p&&p,x=r.hiddenLabel,j=void 0!==x&&x,C=r.margin,Z=void 0===C?"none":C,k=r.required,S=void 0!==k&&k,b=r.size,w=void 0===b?"medium":b,y=r.variant,N=void 0===y?"outlined":y,F=(0,R.Z)(r,V),E=(0,A.Z)({},r,{color:l,component:u,disabled:h,error:f,fullWidth:g,hiddenLabel:j,margin:Z,required:S,size:w,variant:N}),L=function(e){var t=e.classes,r=e.margin,n=e.fullWidth,a={root:["root","none"!==r&&"margin".concat((0,z.Z)(r)),n&&"fullWidth"]};return(0,O.Z)(a,U,t)}(E),B=i.useState((function(){var e=!1;return a&&i.Children.forEach(a,(function(t){if((0,P.Z)(t,["Input","Select"])){var r=(0,P.Z)(t,["Select"])?t.props.input:t;r&&r.props.startAdornment&&(e=!0)}})),e})),q=(0,n.Z)(B,2),W=q[0],H=q[1],Y=i.useState((function(){var e=!1;return a&&i.Children.forEach(a,(function(t){(0,P.Z)(t,["Input","Select"])&&function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e&&(I(e.value)&&""!==e.value||t&&I(e.defaultValue)&&""!==e.defaultValue)}(t.props,!0)&&(e=!0)})),e})),$=(0,n.Z)(Y,2),J=$[0],K=$[1],Q=i.useState(!1),X=(0,n.Z)(Q,2),ee=X[0],te=X[1];h&&ee&&te(!1);var re=void 0===v||h?ee:v,ne=i.useCallback((function(){K(!0)}),[]),ae={adornedStart:W,setAdornedStart:H,color:l,disabled:h,error:f,filled:J,focused:re,fullWidth:g,hiddenLabel:j,size:w,onBlur:function(){te(!1)},onEmpty:i.useCallback((function(){K(!1)}),[]),onFilled:ne,onFocus:function(){te(!0)},registerEffect:undefined,required:S,variant:N};return(0,T.jsx)(_.Z.Provider,{value:ae,children:(0,T.jsx)(G,(0,A.Z)({as:u,ownerState:E,className:(0,M.Z)(L.root,o),ref:t},F,{children:a}))})})),Y=H;function $(e){return(0,q.Z)("MuiFormGroup",e)}(0,W.Z)("MuiFormGroup",["root","row","error"]);var J=r(2930),K=r(6147),Q=["className","row"],X=(0,B.ZP)("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.row&&t.row]}})((function(e){var t=e.ownerState;return(0,A.Z)({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})})),ee=i.forwardRef((function(e,t){var r=(0,D.Z)({props:e,name:"MuiFormGroup"}),n=r.className,a=r.row,i=void 0!==a&&a,o=(0,R.Z)(r,Q),s=(0,J.Z)(),l=(0,K.Z)({props:r,muiFormControl:s,states:["error"]}),c=(0,A.Z)({},r,{row:i,error:l.error}),u=function(e){var t=e.classes,r={root:["root",e.row&&"row",e.error&&"error"]};return(0,O.Z)(r,$,t)}(c);return(0,T.jsx)(X,(0,A.Z)({className:(0,M.Z)(u.root,n),ownerState:c,ref:t},o))})),te=r(4843),re=r(8744);var ne=i.createContext(void 0),ae=r(5836),ie=["actions","children","defaultValue","name","onChange","value"],oe=i.forwardRef((function(e,t){var r=e.actions,a=e.children,o=e.defaultValue,s=e.name,l=e.onChange,c=e.value,u=(0,R.Z)(e,ie),d=i.useRef(null),h=(0,re.Z)({controlled:c,default:o,name:"RadioGroup"}),m=(0,n.Z)(h,2),f=m[0],v=m[1];i.useImperativeHandle(r,(function(){return{focus:function(){var e=d.current.querySelector("input:not(:disabled):checked");e||(e=d.current.querySelector("input:not(:disabled)")),e&&e.focus()}}}),[]);var p=(0,te.Z)(t,d),g=(0,ae.Z)(s);return(0,T.jsx)(ne.Provider,{value:{name:g,onChange:function(e){v(e.target.value),l&&l(e,e.target.value)},value:f},children:(0,T.jsx)(ee,(0,A.Z)({role:"radiogroup",ref:p},u,{children:a}))})})),se=r(1462),le=r(4942),ce=r(2065),ue=r(4089),de=r(9201),he=(0,de.Z)((0,T.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"RadioButtonUnchecked"),me=(0,de.Z)((0,T.jsx)("path",{d:"M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"}),"RadioButtonChecked"),fe=(0,B.ZP)("span")({position:"relative",display:"flex"}),ve=(0,B.ZP)(he)({transform:"scale(1)"}),pe=(0,B.ZP)(me)((function(e){var t=e.theme,r=e.ownerState;return(0,A.Z)({left:0,position:"absolute",transform:"scale(0)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeIn,duration:t.transitions.duration.shortest})},r.checked&&{transform:"scale(1)",transition:t.transitions.create("transform",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.shortest})})}));var ge=function(e){var t=e.checked,r=void 0!==t&&t,n=e.classes,a=void 0===n?{}:n,i=e.fontSize,o=(0,A.Z)({},e,{checked:r});return(0,T.jsxs)(fe,{className:a.root,ownerState:o,children:[(0,T.jsx)(ve,{fontSize:i,className:a.background,ownerState:o}),(0,T.jsx)(pe,{fontSize:i,className:a.dot,ownerState:o})]})},xe=r(3209);function je(e){return(0,q.Z)("MuiRadio",e)}var Ce=(0,W.Z)("MuiRadio",["root","checked","disabled","colorPrimary","colorSecondary"]),Ze=["checked","checkedIcon","color","icon","name","onChange","size"],ke=(0,B.ZP)(ue.Z,{shouldForwardProp:function(e){return(0,B.FO)(e)||"classes"===e},name:"MuiRadio",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t["color".concat((0,z.Z)(r.color))]]}})((function(e){var t=e.theme,r=e.ownerState;return(0,A.Z)({color:t.palette.text.secondary,"&:hover":{backgroundColor:(0,ce.Fq)("default"===r.color?t.palette.action.active:t.palette[r.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(0,le.Z)({},"&.".concat(Ce.checked),{color:t.palette[r.color].main}),(0,le.Z)({},"&.".concat(Ce.disabled),{color:t.palette.action.disabled}))}));var Te=(0,T.jsx)(ge,{checked:!0}),Se=(0,T.jsx)(ge,{}),be=i.forwardRef((function(e,t){var r,n,a,o,s=(0,D.Z)({props:e,name:"MuiRadio"}),l=s.checked,c=s.checkedIcon,u=void 0===c?Te:c,d=s.color,h=void 0===d?"primary":d,m=s.icon,f=void 0===m?Se:m,v=s.name,p=s.onChange,g=s.size,x=void 0===g?"medium":g,j=(0,R.Z)(s,Ze),C=(0,A.Z)({},s,{color:h,size:x}),Z=function(e){var t=e.classes,r=e.color,n={root:["root","color".concat((0,z.Z)(r))]};return(0,A.Z)({},t,(0,O.Z)(n,je,t))}(C),k=i.useContext(ne),S=l,b=(0,xe.Z)(p,k&&k.onChange),w=v;return k&&("undefined"===typeof S&&(a=k.value,S="object"===typeof(o=s.value)&&null!==o?a===o:String(a)===String(o)),"undefined"===typeof w&&(w=k.name)),(0,T.jsx)(ke,(0,A.Z)({type:"radio",icon:i.cloneElement(f,{fontSize:null!=(r=Se.props.fontSize)?r:x}),checkedIcon:i.cloneElement(u,{fontSize:null!=(n=Te.props.fontSize)?n:x}),ownerState:C,classes:Z,name:w,checked:S,onChange:b,ref:t},j))})),we=function(e){var t=e.handleChangeRadioBtn,r=e.tasksFromWho,n=e.listTasks,a=e.renderListTasks,i=e.handleSearchTitle,o=e.handleChangeImportance,s=e.valueSelect,l=h().dataSelect;return(0,T.jsxs)("div",{className:"filters",children:[(0,T.jsx)(Y,{children:(0,T.jsxs)(oe,{row:!0,onChange:t,color:"default",value:r,children:[(0,T.jsx)(se.Z,{value:"ALL",control:(0,T.jsx)(be,{}),label:"Todas",disabled:null===n||void 0===n||!n.length}),(0,T.jsx)(se.Z,{value:"MY",control:(0,T.jsx)(be,{}),label:"Mis tareas",disabled:null===a||void 0===a||!a.length})]})}),(0,T.jsxs)("div",{children:[(0,T.jsx)(m.Z,{nameClassDiv:"search",nameClass:"input-form",type:"text",placeholder:"Seleccionar por titulo...",handleChange:i,disabled:null===n||void 0===n||!n.length}),(0,T.jsx)(v.Z,{nameClass:"importance",dataOption:null===l||void 0===l?void 0:l.importance,name:"importance",values:s,txtDefaultOption:"Seleccionar un estado",handleChange:o,disabled:!(null!==a&&void 0!==a&&a.length)&&!0,ubication:"filter"})]})]})},ye=function(e){var t=e.isPhone;return(0,T.jsx)(T.Fragment,{children:t?(0,T.jsx)(S,{count:3,height:80,nameClass:"list phone"}):(0,T.jsx)(S,{count:2,height:150,width:"100%",nameClass:"list",repeat:[10,20,30]})})},Ne=function(e){var t=e.searchTitle,r=e.msgTasks;return(0,T.jsxs)(T.Fragment,{children:[t&&(0,T.jsx)("div",{children:" No encontramos lo que buscaste"}),r&&(0,T.jsxs)("div",{children:[" ",r," "]})]})},Fe=r(5861),Ee=r(7757),Le=r.n(Ee),Re=r(1856),Ae=r(3349),Me=r(2609),Oe=function(e){var t=e.dateTime,r=e.status,n=e.actionsCard,a=e.data,i=e.importance,o=e.userName,s=e.enableUserActions,l=r.toLowerCase(),c=i.toLowerCase();return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"created",children:t}),(0,T.jsx)("div",{className:"created",children:o}),(0,T.jsx)(Me.z,{nameClass:l,type:"button",onClick:s.status?function(){return n(a,"editar status")}:void 0,textBtn:l}),(0,T.jsx)(Me.z,{nameClass:c,type:"button",textBtn:c})]})},De=function(e){var t=e.showMoreDescription,r=e.description,n=e.limitString,a=e.handleSeeMore,i=t?"Ver menos":"Ver m\xe1s";return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)("p",{children:[t?r:n("".concat(r)).string," "]}),n("".concat(r)).addButton&&(0,T.jsx)(Me.z,{type:"button",onClick:a,textBtn:i})]})},Be=r(9823),Ie=function(e){var t=e.actionsCard,r=e.data,n=e.enableUserActions;return(0,T.jsx)(T.Fragment,{children:n.status&&(0,T.jsx)("div",{className:"close",onClick:function(){return t(r,"eliminar")},children:(0,T.jsx)(Be.Z,{})})})},ze=r(1286),Pe=function(e){var t=e.enableUserActions,r=e.actionsCard,n=e.data;return(0,T.jsx)(T.Fragment,{children:t.status&&(0,T.jsx)("div",{className:"edit",onClick:function(){return r(n,"editar")},children:(0,T.jsx)(ze.Z,{})})})},_e=function(e){var t=e.actionsCard,r=e.data,n=e.title,a=e.enableUserActions;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Pe,{enableUserActions:a,actionsCard:t,data:r}),(0,T.jsx)(Ie,{enableUserActions:a,actionsCard:t,data:r}),(0,T.jsx)("div",{className:"title",children:n})]})},qe=r(1110),We=r(7098),Ue=function(e){var t=e.actionsCard,r=e.data,a=r.title,s=r.createdAt,l=r.user.userName,c=r.description,u=r.status,d=r.importance,h=e.data,m=e.index,f=function(e){var t=(0,i.useState)(!1),r=(0,n.Z)(t,2),a=r[0],s=r[1],l=(0,o.v9)((function(e){return e.userReducer})).user;return{handleSeeMore:function(){return s((function(e){return!e}))},limitString:function(e){return e.length>100?{string:e.slice(0,97).concat("..."),addButton:!0}:{string:e,addButton:!1}},dateTime:"".concat(new Date(e).toLocaleString()," hs."),queryUserOnLine:function(){return l},showMoreDescription:a}}(s),v=f.handleSeeMore,p=f.limitString,g=f.dateTime,x=f.showMoreDescription,j=f.queryUserOnLine,C=function(e){var t=e.userName,r=void 0===t?null:t,n=e.queryUserOnLine,a=(void 0===n?null:n)(),i=a.userName?a.userName:localStorage.getItem("userName"),o=a.role?a.role:localStorage.getItem("role"),s={status:!1};return i!==r&&"Team Leader"!==o||(s.status=!0),{enableUserActions:s}}({userName:l,queryUserOnLine:j}),Z=C.enableUserActions,k=(0,We.w)("cardsTransition");return(0,T.jsxs)(qe.E.div,{className:"card",custom:{delay:.2*(m+1)},initial:"hidden",animate:"visible",exit:"hidden",variants:k,children:[(0,T.jsx)(_e,{queryUserOnLine:j,userName:l,actionsCard:t,data:h,title:a,enableUserActions:Z}),(0,T.jsx)(Oe,{dateTime:g,userName:l,status:u,actionsCard:t,data:h,importance:d,enableUserActions:Z}),(0,T.jsx)(De,{showMoreDescription:x,description:c,limitString:p,handleSeeMore:v})]})},Ve=function(e){var t=e.renderListTasks,r=e.isPhone,n=function(e){var t=(0,o.I0)(),r=function(){var e=(0,Fe.Z)(Le().mark((function e(r,n){return Le().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Ae.L)({title:"Est\xe1s seguro de ".concat(n,"?"),text:"Tarea afectada: '".concat(r.title,"'"),icon:"question",showCancelButton:!0});case 2:e.sent&&("editar"===n?(t((0,l.MG)("EDIT_CARD")),t((0,l.dL)(r))):t("eliminar"===n?(0,l._5)(r._id):(0,l.$B)(r)));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();return{renderAllCards:function(){return(0,T.jsx)(Re.M,{children:null===e||void 0===e?void 0:e.map((function(e,t){return(0,T.jsx)(Ue,{data:e,actionsCard:r,index:t},e._id)}))})},renderSeparateCards:function(t){return(0,T.jsx)(Re.M,{children:null===e||void 0===e?void 0:e.filter((function(e){return e.status==="".concat(t)})).map((function(e,t){return(0,T.jsx)(Ue,{data:e,actionsCard:r,index:t},e._id)}))})},threecolumnListCards:[{nameType:"NEW",txtDiv:"Nuevas"},{nameType:"IN PROGRESS",txtDiv:"En proceso"},{nameType:"FINISHED",txtDiv:"Finalizadas"}]}}(t),a=n.renderAllCards,i=n.renderSeparateCards,s=n.threecolumnListCards;return(0,T.jsx)(T.Fragment,{children:r?(0,T.jsx)("div",{className:"list phone",children:a()}):(0,T.jsx)(T.Fragment,{children:s.map((function(e){return(0,T.jsxs)("div",{className:"list",children:[(0,T.jsx)("div",{children:e.txtDiv}),i(e.nameType)]},e.txtDiv)}))})})},Ge=function(e){var t=e.renderListTasks,r=e.isPhone,n=e.loadingTasks,a=e.searchTitle,i=e.msgTasks;return(0,T.jsxs)("div",{className:r?"":"list_group",children:[n&&(0,T.jsx)(ye,{isPhone:r}),!n&&!(null!==t&&void 0!==t&&t.length)&&(0,T.jsx)(Ne,{searchTitle:a,msgTasks:i}),!n&&(null===t||void 0===t?void 0:t.length)>0&&(0,T.jsx)(Ve,{renderListTasks:t,isPhone:r})]})},He=function(e){var t=e.error,r=e.isPhone,n=e.loadingTasks,a=e.renderListTasks,i=e.searchTitle,o=e.msgTasks;return(0,T.jsx)(T.Fragment,{children:t&&"error create"!==t.name?(0,T.jsx)("div",{className:"error",children:(0,T.jsx)("div",{children:t.message+" - "+t.name})}):(0,T.jsx)(Ge,{renderListTasks:a,isPhone:r,loadingTasks:n,searchTitle:i,msgTasks:o})})},Ye=function(){var e=L(),t=e.handleChangeRadioBtn,r=e.handleSearchTitle,a=e.handleChangeImportance,o=e.renderListTasks,s=e.valueSelect,l=e.isPhone,c=e.loadingTasks,u=e.error,d=e.listTasks,h=e.tasksFromWho,m=e.searchTitle,f=e.msgTasks,v=function(e,t){var r=(0,i.useState)(!1),a=(0,n.Z)(r,2),o=a[0],s=a[1];return(0,i.useEffect)((function(){return null!==e&&void 0!==e&&e.length?function(){var t=e.filter((function(e){return"NEW"===e.status})),r=e.filter((function(e){return"FINISHED"===e.status})),n=e.filter((function(e){return"IN PROGRESS"===e.status}));Math.max(t.length,r.length,n.length)<4&&s(!0)}():t&&s(!0),function(){s(!1)}}),[e,t]),{sizeHeigth:o}}(o,m),p=v.sizeHeigth;return(0,T.jsxs)("section",{className:"wrapper_list"+(f||p||c?" no-tasks":""),children:[(0,T.jsx)("div",{className:"list_header",children:(0,T.jsx)("div",{children:"Mis tareas"})}),(0,T.jsx)(we,{handleChangeRadioBtn:t,tasksFromWho:h,listTasks:d,renderListTasks:o,handleSearchTitle:r,handleChangeImportance:a,valueSelect:s}),(0,T.jsx)(He,{error:u,isPhone:l,loadingTasks:c,renderListTasks:o,searchTitle:m,msgTasks:f})]})};function $e(){return(0,T.jsxs)("main",{id:"tasks",children:[(0,T.jsx)(F,{}),(0,T.jsx)(Ye,{})]})}},9823:function(e,t,r){var n=r(5318);t.Z=void 0;var a=n(r(5649)),i=r(184),o=(0,a.default)((0,i.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.Z=o},1286:function(e,t,r){var n=r(5318);t.Z=void 0;var a=n(r(5649)),i=r(184),o=(0,a.default)((0,i.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=o}}]);
//# sourceMappingURL=390.aa8fd263.chunk.js.map