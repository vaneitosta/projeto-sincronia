(function () {
"use strict";
const byId = id => document.getElementById(id);
const open = byId("create-card"), panel = byId("card-panel"), message = byId("message");
if (!open || !panel || !message) return;
const preview = byId("card-preview"), nativeShare = byId("share-card"), download = byId("download-card"), status = byId("card-status");
const publicURL = "https://vaneitosta.github.io/projeto-sincronia/";
const families = {aurora:"bruma", oceano:"mare", solar:"luz"};
const months = ["janeiro","fevereiro","marco","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
const formats = {story:[1080,1920],feed:[1080,1350],square:[1080,1080]};
let revision = 0, objectURL = "", readyFile = null, sharing = false, refreshAfterShare = false, cancelLoad = null;
function clearImage() {
  readyFile = null; nativeShare.disabled = true; download.hidden = true; download.removeAttribute("href");
  preview.hidden = true; preview.removeAttribute("src");
  if (objectURL) URL.revokeObjectURL(objectURL);
  objectURL = "";
}
function closeCard(restoreFocus = true) {
  refreshAfterShare = false;
  revision++; if (cancelLoad) cancelLoad(); clearImage();
  panel.hidden = true; open.setAttribute("aria-expanded","false");
  if (restoreFocus) open.focus({preventScroll:true});
}
function loadBackground(src) {
  return new Promise(resolve => {
    const image = new Image(); let done = false;
    const finish = value => {if(done)return;done=true;clearTimeout(timer);image.onload=null;image.onerror=null;cancelLoad=null;resolve(value);};
    const timer = setTimeout(()=>finish(null),8000);
    cancelLoad = ()=>{finish(null);image.src="";};
    image.onload = ()=>finish(image); image.onerror = ()=>finish(null); image.src = src;
  });
}
function wrap(ctx,text,width) {
  const lines=[];let line="";
  for(const word of text.split(/\s+/)) {
    const next=line?line+" "+word:word;
    if(line && ctx.measureText(next).width>width){lines.push(line);line=word;}else line=next;
  }
  if(line)lines.push(line);return lines;
}
async function renderCard() {
  if (panel.hidden) return;
  if (sharing) { refreshAfterShare = true; return; }
  refreshAfterShare = false;
  const token=++revision;if(cancelLoad)cancelLoad();clearImage();
  const text=message.textContent.trim();if(!text){closeCard(false);return;}
  const format=byId("card-format").value;const [width,height]=formats[format]||formats.story;
  const root=document.documentElement, colors=getComputedStyle(root);
  const ink=colors.getPropertyValue("--ink").trim()||"#35234f", bg=colors.getPropertyValue("--bg").trim()||"#f2edff";
  const theme=root.dataset.theme;
  const family=families[theme]||(months.includes(theme)?theme:"bruma");
  const systemContrast=typeof matchMedia==="function"&&matchMedia("(prefers-contrast: more), (forced-colors: active)").matches;
  const decorative=!root.classList.contains("high-contrast")&&!root.classList.contains("decoration-off")&&!systemContrast;
  byId("card-caption").value=text+"\n\n"+publicURL;
  status.textContent="Preparando sua imagem…";
  try {
    const canvas=document.createElement("canvas");canvas.width=width;canvas.height=height;
    const ctx=canvas.getContext("2d");if(!ctx)throw new Error("canvas unavailable");
    ctx.fillStyle=bg;ctx.fillRect(0,0,width,height);
    const size=navigator.connection?.saveData?"tiny":root.dataset.quality==="economy"?"small":"large";
    const image=decorative?await loadBackground("assets/wallpapers/"+family+"-"+size+".webp"):null;
    if(token!==revision||panel.hidden)return;
    if(image){const scale=Math.max(width/image.naturalWidth,height/image.naturalHeight);const w=image.naturalWidth*scale,h=image.naturalHeight*scale;ctx.drawImage(image,(width-w)/2,(height-h)/2,w,h);const veil=ctx.createRadialGradient(width/2,height*.49,40,width/2,height*.49,height*.72);veil.addColorStop(0,"rgba(255,255,255,.9)");veil.addColorStop(.5,"rgba(255,255,255,.55)");veil.addColorStop(1,"rgba(255,255,255,.22)");ctx.fillStyle=veil;ctx.fillRect(0,0,width,height);}
    ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillStyle=ink;
    ctx.font="48px Georgia, serif";ctx.fillText("SINCRONIA",width/2,height*.145);
    ctx.font="28px system-ui, sans-serif";ctx.fillText("Um instante para você.",width/2,height*.195);
    let font=72,lines;
    do{ctx.font=font+"px Georgia, serif";lines=wrap(ctx,text,width-184);if(lines.length*font*1.4<height*.39)break;font-=2;}while(font>=36);
    const lineHeight=font*1.4,top=height*.49-(lines.length-1)*lineHeight/2;
    lines.forEach((line,index)=>ctx.fillText(line,width/2,top+index*lineHeight));
    ctx.font="24px system-ui, sans-serif";ctx.fillText("vaneitosta.github.io/projeto-sincronia",width/2,height*.84);
    ctx.font="22px system-ui, sans-serif";ctx.fillText("Mensagens para reflexão e acolhimento.",width/2,height*.88);
    const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/jpeg",.9));
    if(token!==revision||panel.hidden)return;if(!blob)throw new Error("export unavailable");
    readyFile=new File([blob],"sincronia-"+family+"-"+format+".jpg",{type:"image/jpeg"});
    objectURL=URL.createObjectURL(blob);preview.src=objectURL;preview.alt="Cartão SINCRONIA: "+text;preview.hidden=false;
    download.href=objectURL;download.download=readyFile.name;download.hidden=false;
    let supported=false;try{supported=typeof navigator.share==="function"&&typeof navigator.canShare==="function"&&navigator.canShare({files:[readyFile],title:"SINCRONIA",text:byId("card-caption").value});}catch(_){}
    nativeShare.disabled=sharing||!supported;
    status.textContent="Imagem pronta · "+width+" × "+height+"."+(decorative&&!image?" O fundo não carregou; usamos a cor do tema.":"")+(supported?"":" Para publicar neste aparelho, use Baixar imagem.");
  }catch(_){if(token===revision){clearImage();status.textContent="Não foi possível criar a imagem. Sua legenda está disponível abaixo para copiar.";}}
}
function fileShareSupported() {
  try { return !!readyFile && typeof navigator.share==="function" && typeof navigator.canShare==="function" && navigator.canShare({files:[readyFile],title:"SINCRONIA",text:byId("card-caption").value}); }
  catch (_) { return false; }
}
function startShare() {
  sharing=true;
  if(byId("share-card-link"))byId("share-card-link").disabled=true;
  nativeShare.disabled=true;open.disabled=true;byId("card-format").disabled=true;
}
function finishShare() {
  sharing=false;
  if(byId("share-card-link"))byId("share-card-link").disabled=false;
  open.disabled=!message.textContent.trim();byId("card-format").disabled=false;
  nativeShare.disabled=!fileShareSupported();
  if(refreshAfterShare&&!panel.hidden)renderCard();
}
open.addEventListener("click",()=>{panel.hidden=false;open.setAttribute("aria-expanded","true");byId("card-title").focus({preventScroll:true});panel.scrollIntoView({block:"start",behavior:"auto"});renderCard();});
byId("close-card").addEventListener("click",()=>closeCard());
byId("card-format").addEventListener("change",renderCard);
byId("copy-card-caption").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText(byId("card-caption").value);status.textContent="Legenda e link copiados. Cole no aplicativo escolhido.";}
  catch(_){byId("card-caption").focus();byId("card-caption").select();status.textContent="Selecione Copiar no seu aparelho. A legenda já está selecionada.";}
});
byId("share").addEventListener("click",event=>{
  if(!message.textContent.trim() || typeof navigator.share!=="function" || typeof navigator.canShare!=="function")return;
  event.preventDefault();event.stopImmediatePropagation();
  open.click();
},true);
byId("share-card-link")?.addEventListener("click",async()=>{
  if(sharing||!message.textContent.trim())return;
  if(typeof navigator.share!=="function"){byId("copy-card-caption").click();return;}
  startShare();
  try{await navigator.share({title:"SINCRONIA",text:byId("card-caption").value});status.textContent="Mensagem e link enviados ao compartilhamento do aparelho. A prévia é exibida pelo aplicativo de destino.";}
  catch(error){status.textContent=error?.name==="AbortError"?"Compartilhamento cancelado ou sem destino disponível.":"Não foi possível compartilhar o link. Use Copiar legenda e link.";}
  finally{finishShare();}
});
nativeShare.addEventListener("click",async()=>{
  if(!readyFile||sharing)return;startShare();
  try{await navigator.share({files:[readyFile],title:"SINCRONIA",text:byId("card-caption").value});status.textContent="Imagem, mensagem e link enviados ao compartilhamento do aparelho. Confira o conteúdo no aplicativo antes de publicar.";}
  catch(error){status.textContent=error?.name==="AbortError"?"Compartilhamento cancelado ou sem destino disponível. Você pode baixar a imagem.":"Não foi possível compartilhar a imagem. Use Baixar imagem e publique pelo aplicativo.";}
  finally{finishShare();}
});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!event.defaultPrevented&&!panel.hidden&&panel.contains(document.activeElement)){event.preventDefault();closeCard();}});
new MutationObserver(()=>{open.disabled=sharing||!message.textContent.trim();if(!panel.hidden)renderCard();}).observe(message,{childList:true,characterData:true,subtree:true});
new MutationObserver(()=>{if(!panel.hidden)renderCard();}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme","data-quality","class"]});
navigator.connection?.addEventListener?.("change",()=>{if(!panel.hidden)renderCard();});
window.addEventListener("pagehide",()=>closeCard(false));
open.disabled=!message.textContent.trim();
}());
