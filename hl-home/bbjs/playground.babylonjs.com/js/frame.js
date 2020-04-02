var engine=null,canvas=null,scene=null;fastEval=function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.setAttribute("type","text/javascript"),t.innerHTML=`try {${e};}\n    catch(e) {\n        handleException(e);\n    }`,n.appendChild(t)},handleException=function(e){console.error(e)},run=function(){var e,n=document.getElementById("fpsLabel"),t=document.getElementById("refresh"),i=document.getElementById("edit"),r="createDefaultEngine";location.href.toLowerCase().indexOf("noui")>-1&&(n.style.visibility="hidden",n.style.display="none",t.style.visibility="hidden",t.style.display="none",i.style.visibility="hidden",i.style.display="none"),BABYLON.Engine.ShadersRepository="/src/Shaders/",compileAndRun=function(t){try{if(!BABYLON.Engine.isSupported())return void showError("Your browser does not support WebGL");if(engine&&(engine.dispose(),engine=null),canvas=document.getElementById("renderCanvas"),createDefaultEngine=function(){return new BABYLON.Engine(canvas,!0,{preserveDrawingBuffer:!0,stencil:!0})},-1!==t.indexOf("createEngine")&&(r="createEngine"),-1!==t.indexOf("delayCreateScene")?(e="delayCreateScene",checkCamera=!1):-1!==t.indexOf("createScene")?e="createScene":-1!==t.indexOf("CreateScene")?e="CreateScene":-1!==t.indexOf("createscene")&&(e="createscene"),e){if(t+="\n engine = "+r+"();",t+="\n if (!engine) throw 'engine should not be null.';",t+="\nscene = "+e+"();",fastEval(t),!engine)return void console.error("createEngine function must return an engine.");if(!scene)return void console.error(e+" function must return a scene.")}else{engine=createDefaultEngine(),scene=new BABYLON.Scene(engine);fastEval("runScript = function(scene, canvas) {"+t+"}"),null(scene,canvas)}(engine=engine).runRenderLoop(function(){if(0!==engine.scenes.length){canvas.width!==canvas.clientWidth&&engine.resize();var e=engine.scenes[0];(e.activeCamera||e.activeCameras.length>0)&&e.render(),!n||e.activeCamera&&e.activeCamera.getClassName&&"WebXRCamera"===e.activeCamera.getClassName()||(n.innerHTML=engine.getFps().toFixed()+" fps")}}.bind(this))}catch(e){}},window.addEventListener("resize",function(){engine&&engine.resize()});var a=function(){var e;this.currentSnippetTitle&&(e=document.querySelector("title"))&&(e.innerText=this.currentSnippetTitle+" | Babylon.js Playground"),this.currentSnippetDescription&&(e=document.querySelector('meta[name="description"]'))&&e.setAttribute("content",this.currentSnippetDescription+" - Babylon.js Playground"),this.currentSnippetTags&&(e=document.querySelector('meta[name="keywords"]'))&&e.setAttribute("content","babylon.js, game engine, webgl, 3d,"+this.currentSnippetTags)};!function(){if(location.hash){(i=decodeURIComponent(location.hash.substr(1)).split("#")).length>2&&i.splice(2,i.length-2),location.hash=i.join("#");try{var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===e.readyState&&200===e.status){var n=JSON.parse(e.responseText),t=JSON.parse(n.jsonPayload).code;compileAndRun(t);var i=document.getElementById("refresh");null!=n.name&&""!=n.name?this.currentSnippetTitle=n.name:this.currentSnippetTitle=null,null!=n.description&&""!=n.description?this.currentSnippetDescription=n.description:this.currentSnippetDescription=null,null!=n.tags&&""!=n.tags?this.currentSnippetTags=n.tags:this.currentSnippetTags=null,a.call(this),i&&i.addEventListener("click",function(){compileAndRun(t)})}};var n=location.hash.substr(1);currentSnippetToken=n.split("#")[0],n.split("#")[1]||(n+="#0"),e.open("GET","https://snippet.babylonjs.com/"+n.replace("#","/")),e.send();var t=document.getElementById("edit");t&&(t.href="./www.babylonjs-playground.com/#"+n)}catch(e){}}var i}()},run();
