import{u as n,s as i,j as e}from"./index-xHjeHA69.js";import{B as t}from"./SEO-DE1Z7kVE.js";const d=({title:r,description:a})=>{const{pathname:l}=n(),o=i.pages,s="/corporate_template/",c=`${s.slice(0,s.length-1)}${o[l.split("/")[1]]?.hero.backgroundImage}`||`${s.slice(0,s.length-1)}/images/hero.png`;return e.jsxs("section",{className:`
            wave-box
    relative w-full overflow-hidden
    
    bg-cover bg-center bg-no-repeat
    h-150 border border-(--primary)
    pb-8
            `,style:{backgroundImage:`url(${c})`},children:[e.jsx("div",{className:"absolute inset-0 bg-black/50 backdrop-blur-xs"}),e.jsxs("div",{className:`\r
       relative z-30 w-full h-full flex justify-center items-center flex-col text-center text-white\r
      `,children:[e.jsx("h1",{className:"text-[20px] sm:text-[30px] font-bold mb-4",children:r}),e.jsx("p",{className:"max-w-xl ",children:a}),e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mt-8",children:[e.jsx(t,{to:"/contact_us",size:"md",children:"شروع همکاری"}),e.jsx(t,{to:"/portfolio",size:"md",variant:"outline",children:"نمونه کارها"})]})]})]})};export{d as H};
