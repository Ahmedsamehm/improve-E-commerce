import{r as c,A as h,d as u,j as s,L as x,T as p}from"./index-BvL9isXe.js";import{c as v,a,b as N}from"./index.esm-Q5dr7ldl.js";import{u as g,I as r}from"./Inputs-CRJWEDH4.js";function f(){const{RegisterUser:n,toastMessage:o,isLoading:t,showToast:d}=c.useContext(h),l=u(),i=v({name:a().required("Name is required"),email:a().email("Invalid email address").required("Email is required"),password:a().min(8,"Password must be at least 8 characters").required("Password is required"),rePassword:a().oneOf([N("password"),null],"Passwords must match").required("Confirm Password is required"),phone:a().matches(/^01[0125][0-9]{8}$/,"Invalid Egyptian phone number").required("Phone is required")}),e=g({initialValues:{name:"",email:"",password:"",rePassword:"",phone:""},validationSchema:i,onSubmit:async m=>{await n(m,l)}});return s.jsx("div",{className:"container-fluid mx-auto bg-[#1A1A1A] text-[#E0E0E0]",children:s.jsx("div",{className:"hero min-h-screen",children:s.jsxs("div",{className:"hero-content flex-col lg:flex-row-reverse",children:[s.jsxs("div",{className:"text-center lg:text-left ml-4",children:[s.jsx("h1",{className:"text-5xl font-bold",children:"Register"}),s.jsx("p",{className:"py-6 text-xl",children:"Join us to keep shopping with us"})]}),s.jsx("div",{className:"card bg-[#2A2A2A] w-full max-w-sm shrink-0 shadow-2xl",children:s.jsxs("form",{onSubmit:e.handleSubmit,className:"card-body",children:[s.jsxs("div",{className:"form-control",children:[s.jsx(r,{labelName:"Name",placeholder:"Name",type:"text",name:"name",value:e.values.name,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.name&&e.errors.name?s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.name}):null]}),s.jsxs("div",{className:"form-control",children:[s.jsx(r,{labelName:"Email",placeholder:"Email",type:"email",name:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.email&&e.errors.email?s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.email}):null]}),s.jsxs("div",{className:"form-control",children:[s.jsx(r,{labelName:"Password",placeholder:"Password",type:"password",name:"password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.password&&e.errors.password?s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.password}):null]}),s.jsxs("div",{className:"form-control",children:[s.jsx(r,{labelName:"Re-Password",placeholder:"Re-Password",type:"password",name:"rePassword",value:e.values.rePassword,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.rePassword&&e.errors.rePassword?s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.rePassword}):null]}),s.jsxs("div",{className:"form-control",children:[s.jsx(r,{labelName:"Phone",placeholder:"Phone",type:"tel",name:"phone",value:e.values.phone,onChange:e.handleChange,onBlur:e.handleBlur}),e.touched.phone&&e.errors.phone?s.jsx("div",{className:"text-red-500 text-sm",children:e.errors.phone}):null]}),s.jsx("label",{className:"label",children:s.jsxs(x,{href:"",className:"label-text-alt",children:["You have an account already?",s.jsx("span",{className:"link link-hover mx-1",onClick:()=>l("/Login"),children:"Login"})]})}),s.jsxs("div",{className:"form-control mt-6",children:[t?s.jsx("button",{type:"submit",className:"btn btn-primary bg-[#4A90E2] border-none hover:bg-[#357ABD]",disabled:!0,children:s.jsx("span",{className:"loading loading-spinner"})}):s.jsx("button",{type:"submit",className:"btn btn-primary bg-[#4A90E2] border-none hover:bg-[#357ABD]",children:"Register"}),d&&s.jsx(p,{message:o})]})]})})]})})})}export{f as default};
