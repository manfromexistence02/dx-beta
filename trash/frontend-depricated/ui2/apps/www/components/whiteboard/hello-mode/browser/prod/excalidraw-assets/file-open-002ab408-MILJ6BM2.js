import{a as n}from"./chunk-M2JW2GFW.js";import"./chunk-SXMPUQ6M.js";n();var l=async e=>{let i=await e.getFile();return i.handle=e,i},o=async(e=[{}])=>{Array.isArray(e)||(e=[e]);let i=[];e.forEach((a,c)=>{i[c]={description:a.description||"",accept:{}},a.mimeTypes?a.mimeTypes.map(p=>{i[c].accept[p]=a.extensions||[]}):i[c].accept["*/*"]=a.extensions||[]});let s=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:i,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),t=await Promise.all(s.map(l));return e[0].multiple?t:t[0]};export{o as default};