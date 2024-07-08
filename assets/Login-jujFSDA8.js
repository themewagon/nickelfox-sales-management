import{g as y,a as C,s as F,_ as l,r as g,u as v,b as k,j as o,d as I,e as S,S as d,x}from"./index-DU16wUoA.js";import{D as G,E as P,P as L,c as p,e as R,b as D,I as n}from"./IconifyIcon-Bb2fvQot.js";import{T as a,a as i}from"./Button-BFWs3aBi.js";import{L as m}from"./Link-CxeJUuxM.js";import{F as M,C as A}from"./FormControlLabel-BC2kuCoc.js";import{D as E}from"./Divider-BtsbkFwT.js";import"./isMuiElement-BYY6D56Q.js";function T(r){return y("MuiFormGroup",r)}C("MuiFormGroup",["root","row","error"]);const U=["className","row"],_=r=>{const{classes:e,row:t,error:s}=r;return S({root:["root",t&&"row",s&&"error"]},T,e)},N=F("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,t.row&&e.row]}})(({ownerState:r})=>l({display:"flex",flexDirection:"column",flexWrap:"wrap"},r.row&&{flexDirection:"row"})),W=g.forwardRef(function(e,t){const s=v({props:e,name:"MuiFormGroup"}),{className:c,row:f=!1}=s,h=k(s,U),b=G(),j=P({props:s,muiFormControl:b,states:["error"]}),u=l({},s,{row:f,error:j.error}),w=_(u);return o.jsx(N,l({className:I(w.root,c),ownerState:u,ref:t},h))}),Q=()=>{const[r,e]=g.useState(!1),t=()=>{e(s=>!s)};return o.jsx(L,{sx:{py:6,px:{xs:5,sm:7.5}},children:o.jsxs(d,{justifyContent:"center",gap:4,children:[o.jsx(a,{variant:"h2",textAlign:"center",color:"text.secondary",children:"Log In"}),o.jsxs(a,{variant:"h4",fontWeight:500,textAlign:"center",color:"text.primary",children:["Don’t have an account?"," ",o.jsx(m,{href:"/authentication/sign-up",underline:"none",children:"Sign up"})]}),o.jsx(p,{variant:"filled",label:"Email",type:"email",sx:{".MuiFilledInput-root":{bgcolor:x[800],":hover":{bgcolor:"background.default"},":focus":{bgcolor:"background.default"},":focus-within":{bgcolor:"background.default"}},borderRadius:2}}),o.jsx(p,{variant:"filled",label:"Password",type:r?"text":"password",sx:{".MuiFilledInput-root":{bgcolor:x[800],":hover":{bgcolor:"background.default"},":focus":{bgcolor:"background.default"},":focus-within":{bgcolor:"background.default"}},borderRadius:2},InputProps:{endAdornment:o.jsx(R,{position:"end",children:o.jsx(D,{"aria-label":"toggle password visibility",onClick:t,size:"small",edge:"end",sx:{mr:2},children:r?o.jsx(n,{icon:"el:eye-open",color:"text.secondary"}):o.jsx(n,{icon:"el:eye-close",color:"text.primary"})})})}}),o.jsx(W,{sx:{ml:1},children:o.jsx(M,{control:o.jsx(A,{}),label:"Keep me signed in",sx:{color:"text.secondary"}})}),o.jsx(i,{LinkComponent:m,href:"/",children:"Sign In"}),o.jsx(E,{}),o.jsxs(d,{gap:1.5,sx:{mt:4},children:[o.jsx(a,{textAlign:"center",color:"text.secondary",variant:"subtitle1",children:"Or sign in using:"}),o.jsx(i,{startIcon:o.jsx(n,{icon:"flat-color-icons:google"}),variant:"outlined",children:"Continue with Google"}),o.jsx(i,{startIcon:o.jsx(n,{icon:"logos:facebook"}),variant:"outlined",children:"Continue with Facebook"})]})]})})};export{Q as default};
