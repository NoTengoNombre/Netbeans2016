function cargaPreferencias(){memoria.recuperaAudio(),record=memoria.recuperaRecod(),null==record&&(record=0)}function inicializaCanvas2(){texto("",0,0,1,0)}function iniciaCarga(){inicializaCanvas2(),logoCarga=new Image,logoCarga.src=imagenDir+"logocarga.png",logoCarga.onload=cargando()}function calculaPorcentaje(){porcentajeArchivo=parseInt(100/totalArchivos),porcentajeCarga=porcentajeArchivo}function cargando(){calculaPorcentaje(),GameLoop(),botones_tile=new Image,botones_tile.src=imagenDir+"botones.png",botones_tile.onload=incrementaCargador,imagenRotar=new Image,imagenRotar.src=imagenDir+"imagenrotar.png",imagenRotar.onload=incrementaCargador,fondoMenu=new Image,fondoMenu.src=imagenDir+"fondomenu.png",fondoMenu.onload=incrementaCargador,logoMenu=new Image,logoMenu.src=imagenDir+"logomenu.png",logoMenu.onload=incrementaCargador,imagenAyuda=new Image,imagenAyuda.src=imagenDir+"imagenayuda.png",imagenAyuda.onload=incrementaCargador,imagenAyuda2=new Image,imagenAyuda2.src=imagenDir+"imagenayuda2.png",imagenAyuda2.onload=incrementaCargador,imagenAyuda3=new Image,imagenAyuda3.src=imagenDir+"imagenayuda3.png",imagenAyuda3.onload=incrementaCargador,imagenBoton=new Image,imagenBoton.src=imagenDir+"imagenboton.png",imagenBoton.onload=incrementaCargador,imagenTopo=new Image,imagenTopo.src=imagenDir+"topo.png",imagenTopo.onload=incrementaCargador,imagenBackground=new Image,imagenBackground.src=imagenDir+"background.png",imagenBackground.onload=incrementaCargador,imagenTextos=new Image,imagenTextos.src=imagenDir+"textos.png",imagenTextos.onload=incrementaCargador,musica1=new Howl({urls:["music/01.mp3","music/01.ogg"],onload:function(){incrementaCargador()},loop:!0}),musica2=new Howl({urls:["music/02.mp3","music/02.ogg"],onload:function(){incrementaCargador()},loop:!0}),sonido1=new Howl({urls:["sound/01.mp3","sound/01.ogg"],onload:function(){incrementaCargador()},loop:!1}),sonido2=new Howl({urls:["sound/02.mp3","sound/02.ogg"],onload:function(){incrementaCargador()},loop:!1}),sonido3=new Howl({urls:["sound/03.mp3","sound/03.ogg"],onload:function(){incrementaCargador()},loop:!1}),sonido4=new Howl({urls:["sound/04.mp3","sound/04.ogg"],onload:function(){incrementaCargador()},loop:!1})}function incrementaCargador(){archivosCargados++,totalArchivos>archivosCargados?porcentajeCarga+=porcentajeArchivo:(porcentajeCarga=100,cargado())}function barraCarga(t){porcentajeCarga>dibujaPorcentajeCarga&&dibujaPorcentajeCarga++,ctx.drawImage(logoCarga,0,0,150,150,85,100,150,150),ctx.fillStyle="#910000",ctx.fillRect(55,285,210,30),ctx.fillStyle="#FF0000",ctx.fillRect(55,285,2.1*t,30)}function cargado(){sonidoActivado||Howler.mute(),0==musica1.pos()&&musica1.play(),pantallaActual=1}function resize_canvas(){widthScreen=window.innerWidth,heightScreen=window.innerHeight,factorX=widthScreen/width,factorY=heightScreen/height,pantallaTactil="ontouchstart"in document.documentElement?!0:!1,pantallaTactil?(document.getElementById("c").style.top="0px",document.getElementById("c0").style.top="0px",document.getElementById("c2").style.top="0px",document.getElementById("c").style.left="0px",document.getElementById("c0").style.left="0px",document.getElementById("c2").style.left="0px",posicionVertical=heightScreen>widthScreen?!0:!1):(document.getElementById("c").style.width="auto",document.getElementById("c0").style.width="auto",document.getElementById("c2").style.width="auto",document.getElementById("c").style.height="auto",document.getElementById("c0").style.height="auto",document.getElementById("c2").style.height="auto")}function touchHandler(t){if(t.preventDefault(),1==t.targetTouches.length){var a=t.targetTouches[0];tactilX0=a.pageX,tactilY0=a.pageY,tactilX0=parseInt(tactilX0/factorX),tactilY0=parseInt(tactilY0/factorY),tactilX=tactilX0,tactilY=tactilY0,tactilP=!0,pulsacion()}}function touchHandlerend(t){t.preventDefault(),soltar(),tactilP=!1,tactilX0=0,tactilY0=0,tactilX=0,tactilY=0,distanciaTactil=0,direccion=ninguna}function touchHandlermove(t){if(t.preventDefault(),1==t.targetTouches.length){var a=t.targetTouches[0];tactilX=a.pageX,tactilY=a.pageY,tactilX=parseInt(tactilX/factorX),tactilY=parseInt(tactilY/factorY),horizontal=Math.abs(tactilX-tactilX0)>Math.abs(tactilY-tactilY0)?!0:!1,1==horizontal?(direccion=tactilX0>tactilX?izquierda:derecha,distanciaTactil=Math.abs(tactilX0-tactilX)):(direccion=tactilY0>tactilY?arriba:abajo,distanciaTactil=Math.abs(tactilY0-tactilY)),tactilP=!0}}function KeyboardController(t,a){var i={};document.onkeydown=function(a){var e=(a||window.event).keyCode;return e in t?(e in i||(i[e]=null,t[e]()),!1):!0},document.onkeyup=function(t){var a=(t||window.event).keyCode;a in i&&(null!==i[a]&&clearInterval(i[a]),delete i[a])}}function pulsacion(){for(i=0;i<totalTopos;i++)topos[i].colision()}function soltar(){0==pantallaCompleta&&pantallaTactil&&toggleFullScreen(),5==pantallaActual&&relojNube.pulsaReset(),areaClic(285,5,25,25)&&activaAudio(),1==pantallaActual?(areaClic(40,200,240,50)&&cargaJuego(),areaClic(40,275,240,50)&&(pantallaActual=2)):(4==pantallaActual&&(areaClic(285,5,25,25)||(pantallaActual=1)),3==pantallaActual&&(areaClic(285,5,25,25)||(pantallaActual=4)),2==pantallaActual&&(areaClic(285,5,25,25)||(pantallaActual=3)))}function areaClic(t,a,i,e){return tactilX>=t&&t+i>=tactilX&&tactilY>=a&&a+e>=tactilY?!0:!1}function cargaJuego(){musica1.stop(),0==musica2.pos()&&musica2.play(),pantallaActual=5,ctx0.drawImage(imagenBackground,0,0,320,480,0,0,320,480)}function activaAudio(){sonidoActivado?(sonidoActivado=!1,Howler.mute()):(sonidoActivado=!0,Howler.unmute())}function texto(t,a,i,e,o){ctx.fillStyle=o,ctx.font=e+"pt Arial",ctx.fillText(t,a,i)}function colisiones(t,a,i,e,o,n,c,s){var l=!1,r=!1,d=!1;return(i>t&&a>i||t>i&&e>t)&&(l=!0),(c>o&&n>c||o>c&&s>o)&&(r=!0),1==l&&1==r&&(d=!0),d}function toggleFullScreen(){pantallaCompleta=pantallaCompleta?!1:!0,document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?document.exitFullscreen?document.exitFullscreen():document.msExitFullscreen?document.msExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.msRequestFullscreen?document.documentElement.msRequestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}function menuPrincipal(){ctx.drawImage(fondoMenu,0,0,320,480,0,0,320,480),logoPrincipal.draw(),areaClic(40,200,240,50)?ctx.drawImage(imagenBoton,0,50,240,50,40,200,240,50):ctx.drawImage(imagenBoton,0,0,240,50,40,200,240,50),areaClic(40,275,240,50)?ctx.drawImage(imagenBoton,0,100,240,50,40,275,240,50):ctx.drawImage(imagenBoton,0,150,240,50,40,275,240,50)}function pantallaAyuda(){ctx.drawImage(imagenAyuda,0,0,320,480,0,0,320,480)}function pantallaAyuda2(){ctx.drawImage(imagenAyuda2,0,0,320,480,0,0,320,480)}function pantallaAyuda3(){ctx.drawImage(imagenAyuda3,0,0,320,480,0,0,320,480)}function timeExtension(t){milisegundoFinal+=1e3*t}function cuentaAtras(){var t=new Date,a=0;iniciaCuentaAtras&&(milisegundoFinal=t.getTime()+6e4*minutosCuentaAtras,iniciaCuentaAtras=!1),a=milisegundoFinal-t.getTime(),a>0?(tiempoActual[0]=parseInt(a/6e4),tiempoActual[1]=parseInt((a-6e4*tiempoActual[0])/1e3),tiempoActual[0]<10?tiempoActualTexto[0]="0"+tiempoActual[0]:tiempoActualTexto[0]=tiempoActual[0],tiempoActual[1]<10?tiempoActualTexto[1]="0"+tiempoActual[1]:tiempoActualTexto[1]=tiempoActual[1]):0==pausaLetras&&(tiempoActualTexto[0]="00",tiempoActualTexto[1]="00",tiempoActual[0]=0,tiempoActual[1]=0)}function iniciaPartida(){for(pausaLetras=!1,iniciaCuentaAtras=!0,i=0;i<totalTopos;i++)topos[i].inicTopo()}function rotuloTexto(){this.letrasActivas=!0,this.letrasFrase=0,this.letrasOpacidad=0,this.gradosOpacidad=[0,.1,.1,.1,.2,.2,.2,.3,.3,.3,.3,.4,.4,.5,.6,.7,.8,.9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0],this.gradosOpacidad2=[1,1,.9,.9,.8,.8,.7,.7,.6,.6,.5,.5,.4,.4,.3,.3,.2,.2,.1,.1,0],this.gradosOpacidadGameover=[0,.1,.1,.1,.2,.2,.2,.3,.3,.3,.3,.4,.4,.5,.6,.7,.8,.9,1],this.letras=function(){this.letrasActivas&&(this.letrasFrase<2?this.letrasOpacidad<this.gradosOpacidad.length-1?(ctx.globalAlpha=this.gradosOpacidad[this.letrasOpacidad],1==this.letrasFrase?ctx.drawImage(imagenTextos,0,100,400,100,0,150+this.letrasOpacidad,400,100):ctx.drawImage(imagenTextos,0,0,400,100,0,150+this.letrasOpacidad,400,100),ctx.globalAlpha=1,this.letrasOpacidad++):(this.letrasOpacidad=0,this.letrasFrase++):(this.letrasActivas=!1,this.letrasOpacidad=0,this.letrasFrase=0,iniciaPartida()))},this.reset=function(){for(this.letrasActivas=!0,this.letrasFrase=0,this.letrasOpacidad=0,tiempoActual[0]=1,tiempoActual[1]=0,tiempoActualTexto[0]="01",tiempoActualTexto[1]="00",i=0;i<totalTopos;i++)topos[i].activaPausaTopos()},this.activaLetras=function(){pausaLetras=!0,this.letrasActivas=!0},this.compruebaLetras=function(){return this.letrasActivas}}function topo(){this.x=0,this.y=0,this.ancho=80,this.alto=100,this.estado=-1,this.posAnim=0,this.velocidad=0,this.tipo=0,this.retrasoSalida=0,this.contadorRetraso=0,this.golpeado=0,this.balanceo=0,this.balanceoDir=0,this.balanceoMax=5,this.sonidoSalida=!1,this.inicTipo=function(t){this.tipo=t},this.VelocidadMax=2,this.ProbabilidadTipo=10,this.retrasoSalidaMax=180,this.finaliza=!1,this.inicTopo=function(){this.estado=0,this.contadorRetraso=0,this.golpeado=0,this.posAnim=0,this.finaliza=!1,this.balanceo=0,this.balanceoDir=0,this.balanceoMax=5,this.sonidoSalida=!0,this.velocidad=Math.floor(Math.random()*this.VelocidadMax+4);var t=Math.floor(Math.random()*this.ProbabilidadTipo);t>=0&&4>t&&(this.tipo=1),t>=4&&9>t&&(this.tipo=0),9==t&&(this.tipo=2),this.inicRetrasoSalida()},this.colision=function(){areaClic(this.x,this.y+this.alto-this.posAnim,this.ancho,this.posAnim)&&0==this.golpeado&&1!=this.finaliza&&(this.golpeado=1,sonido1.play(),0==this.tipo&&(totalPuntos+=1,this.cambiaEstado(2)),1==this.tipo&&(timeExtension(-5),sonido2.play()),2==this.tipo&&(totalPuntos+=1,sonido4.play(),timeExtension(5)),numFX-1>contFX?contFX++:contFX=0,efectosFX[contFX].activar(this.x,this.y,this.tipo))},this.inicRetrasoSalida=function(t){this.retrasoSalida=Math.floor(Math.random()*this.retrasoSalidaMax+1)},this.inicVelocidad=function(t){this.velocidad=t},this.cambiaEstado=function(t){this.estado=t},this.getEstado=function(){return this.estado},this.posicion=function(t,a){this.x=t,this.y=a},this.salir=function(){},this.activaPausaTopos=function(){this.finaliza=!0},this.draw=function(){1==this.golpeado&&1!=this.tipo&&(0==this.balanceoDir&&(this.balanceo<4?this.balanceo+=3:this.balanceoDir=1),1==this.balanceoDir&&(this.balanceo>-4?this.balanceo-=3:this.balanceoDir=0)),this.contadorRetraso<this.retrasoSalida?this.contadorRetraso++:0==this.getEstado()&&0==this.finaliza&&this.cambiaEstado(1),2==this.estado&&(this.posAnim>0?this.posAnim-=this.velocidad:this.finaliza||this.inicTopo()),1==this.estado&&(this.sonidoSalida&&(this.sonidoSalida=!1,sonido3.play()),this.posAnim<this.alto?this.posAnim+=this.velocidad:0==relojNube.finPartida()?this.estado=2:this.finaliza=!0),ctx.drawImage(imagenTopo,this.golpeado*this.ancho,this.tipo*this.alto,this.ancho,this.posAnim,this.x+this.balanceo,this.y+this.alto-this.posAnim,this.ancho,this.posAnim),ctx.drawImage(imagenTopo,0,302,105,25,this.x-15,this.y+85,105,25)}}function reloj(){this.x=90,this.y=20,this.balanceoY=0,this.balanceoYMax=15,this.subida=0,this.retraso=5,this.contadorRetraso=0,this.gradosOpacidadGameover=[0,.1,.1,.1,.2,.2,.2,.3,.3,.3,.3,.4,.4,.5,.6,.7,.8,.9,1],this.gameOverOpacidad=0,this.muerteOpacidad=0,this.muerto=!1,this.contadorGameOver=-30,this.maxGameOver=50,this.muestragameover=function(){rotulo.compruebaLetras()||(this.contadorGameOver<this.maxGameOver&&(this.contadorGameOver+=2),ctx.globalAlpha=this.gradosOpacidadGameover[this.gameOverOpacidad],ctx.drawImage(imagenBoton,0,200,240,150,40,this.contadorGameOver,240,150),texto("Score: "+totalPuntos,90,this.contadorGameOver+60,15,"#000000"),texto("Best: "+puntuacionMax,90,this.contadorGameOver+90,15,"#000000"),ctx.globalAlpha=1,this.gameOverOpacidad<this.gradosOpacidadGameover.length&&this.gameOverOpacidad++)},this.gameOver=function(){rotulo.compruebaLetras()||(this.muerto=!0,totalPuntos>puntuacionMax&&(puntuacionMax=totalPuntos))},this.pulsaReset=function(){1==this.muerto&&this.contadorGameOver>=this.maxGameOver&&(pausaLetras=!0,this.muerto=!1,this.contadorGameOver=0,this.muerteOpacidad=0,this.gameOverOpacidad=0,totalPuntos=0,rotulo.reset())},this.finPartida=function(){return this.muerto},this.draw=function(){this.contadorRetraso==this.retraso?(0==this.subida?this.balanceoY<this.balanceoYMax?this.balanceoY++:this.subida=1:this.balanceoY>0?this.balanceoY--:this.subida=0,this.contadorRetraso=0):this.contadorRetraso++,ctx.drawImage(imagenTopo,0,326,160,123,this.x,this.y+this.balanceoY,160,120),cuentaAtras(),texto(tiempoActualTexto[0]+" : "+tiempoActualTexto[1],this.x+30,this.y+this.balanceoY+70,22,"#000000"),0==tiempoActual[0]&&0==tiempoActual[1]&&0==this.muerto&&this.gameOver(),1==this.muerto&&this.muestragameover()}}function juego(){relojNube.draw();var t="";for(a=1;a<1e4;a*=10)totalPuntos<a&&totalPuntos>0&&(t+="0");for(0==totalPuntos&&(t+="000"),texto(t+totalPuntos,103,430,40,"#000000"),i=0;i<totalTopos;i++)topos[i].draw();for(i=0;i<numFX;i++)efectosFX[i].draw();rotulo.letras()}function GameLoop(){setTimeout(function(){window.requestAnimationFrame(GameLoop);var t=new Date;fpsMonitor=1e3/(t-lastLoop),lastLoop=t,clear2(),clear(),0==posicionVertical&&1==pantallaTactil?(clearH(),ctx.drawImage(imagenRotar,0,0,150,150,85,20,150,420)):(0==pantallaActual&&(clearFondo(),barraCarga(dibujaPorcentajeCarga)),1==pantallaActual&&(menuPrincipal(),destello.draw("#FFFFFF",.03,1)),2==pantallaActual&&pantallaAyuda(),3==pantallaActual&&pantallaAyuda2(),4==pantallaActual&&(pantallaAyuda3(),destello.reset()),5==pantallaActual&&juego(),sonidoActivado?areaClic(285,5,25,25)?ctx.drawImage(botones_tile,100,0,25,25,285,5,25,25):ctx.drawImage(botones_tile,125,0,25,25,285,5,25,25):areaClic(285,5,25,25)?ctx.drawImage(botones_tile,150,0,25,25,285,5,25,25):ctx.drawImage(botones_tile,175,0,25,25,285,5,25,25))},interval)}function menuReset(){musica2.stop(),0==musica1.pos()&&musica1.play(),destello.reset(),clear2()}var fps=60,velocidad,interval=1e3/fps,width=320,height=480,widthScreen=window.innerWidth,heightScreen=window.innerHeight,factorX=1,factorY=1,vertical=0,horizontal=1,modoJuego=vertical,pantallaTactil=!1,posicionVertical=!0,pantallaCompleta=!1,sonidoActivado=!1,pantallaActual=0;$(window).resize(function(){resize_canvas()});var clearH=function(){ctx.fillStyle="#000000",ctx.clearRect(0,0,width,height),ctx.beginPath(),ctx.rect(0,0,width,height),ctx.closePath(),ctx.fill()},memoria=new function(){this.guardaAudio=function(){localStorage.setItem("prefAudioLov3",sonidoActivado)},this.recuperaAudio=function(){var t;t=localStorage.getItem("prefAudioLov3"),"false"==t?(sonidoActivado=!1,Howler.mute()):sonidoActivado=!0}};!function(){for(var t=0,a=["ms","moz","webkit","o"],i=0;i<a.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[a[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[i]+"CancelAnimationFrame"]||window[a[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,i){var e=(new Date).getTime(),o=Math.max(0,16-(e-t)),n=window.setTimeout(function(){a(e+o)},o);return t=e+o,n}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var imagenDir="images/",soundDir="sound/",botones_tile,imagenCarga,imagenRotar,fondoMenu,logoMenu,imagenAyuda,imagenAyuda2,imagenAyuda3,imagenBoton,imagenBackground,imagenTopo,imagenTextos,musica1,musica2,sonido1,sonido2,sonido3,sonido4,archivosCargados=0,totalArchivos=17,porcentajeArchivo=0,porcentajeCarga=0,dibujaPorcentajeCarga=0,gLoop,state=!0,c=document.getElementById("c"),ctx=c.getContext("2d"),c0=document.getElementById("c0"),ctx0=c0.getContext("2d"),c2=document.getElementById("c2"),ctx2=c2.getContext("2d"),clear=function(){c.width=width,c.height=height},clear2=function(){c2.width=width,c2.height=height},clearFondo=function(){ctx.fillStyle="#000000",ctx.clearRect(0,0,width,height),ctx.beginPath(),ctx.rect(0,0,width,height),ctx.closePath(),ctx.fill()},ninguna=0,arriba=1,abajo=2,derecha=3,izquierda=4,direcciones=["ninguna","arriba","abajo","derecha","izquierda"],direccion=0,tactilX0=0,tactilY0=0,tactilX=0,tactilY=0,distanciaTactil=0,horizontal=!1,tactilP=!1,elementoTouch=document.getElementById("c2");elementoTouch.addEventListener("touchstart",touchHandler,!1),elementoTouch.addEventListener("touchend",touchHandlerend,!1),elementoTouch.addEventListener("touchmove",touchHandlermove,!1),$("#c2").click(function(t){tactilX=event.pageX-c2.offsetLeft,tactilY=event.pageY-c2.offsetTop}),$("#c2").on("mousedown",function(t){tactilX0=t.pageX-c2.offsetLeft,tactilY0=t.pageY-c2.offsetTop,tactilX=tactilX0,tactilY=tactilY0,tactilP=!0,pulsacion()}),$("#c2").on("mouseup",function(t){soltar(),tactilP=!1,tactilX0=0,tactilY0=0,tactilX=0,tactilY=0,distanciaTactil=0,direccion=ninguna}),$("#c2").on("mousemove",function(t){tactilX=t.pageX-c2.offsetLeft,tactilY=t.pageY-c2.offsetTop,1==tactilP&&(horizontal=Math.abs(tactilX-tactilX0)>Math.abs(tactilY-tactilY0)?!0:!1,1==horizontal?(direccion=tactilX0>tactilX?izquierda:derecha,distanciaTactil=Math.abs(tactilX0-tactilX)):(direccion=tactilY0>tactilY?arriba:abajo,distanciaTactil=Math.abs(tactilY0-tactilY)))});var logoPrincipal=new function(){this.y=0,this.yBalenceo=0,this.balanceoMax=20,this.bajada=!0,this.velocidad=.4,this.draw=function(){ctx.drawImage(logoMenu,0,0,200,100,60,60+this.yBalenceo,200,100),1==this.bajada?this.yBalenceo<this.balanceoMax?this.yBalenceo+=this.velocidad:this.bajada=!1:this.yBalenceo>0?this.yBalenceo-=this.velocidad:this.bajada=!0}},destello=new function(){this.y=0,this.opacidad=0,this.balanceoMax=1,this.bajada=!0,this.velocidad=.01,this.iteracion=0,this.draw=function(t,a,i){this.velocidad=a,this.iteracion<i&&(ctx.globalAlpha=this.opacidad,ctx.fillStyle=t,ctx.fillRect(0,0,320,480),ctx.globalAlpha=1,1==this.bajada?this.opacidad<this.balanceoMax?this.opacidad+=this.velocidad:this.bajada=!1:this.opacidad>.1?this.opacidad-=this.velocidad:(this.bajada=!0,this.iteracion++))},this.reset=function(){this.iteracion=0,this.bajada=!0,this.opacidad=0}},minutosCuentaAtras=1,milisegundoActual=0,milisegundoFinal=0,tiempoActual=[0,0],tiempoActualTexto=["0","0"];tiempoActual[0]=1,tiempoActual[1]=0,tiempoActualTexto[0]="01",tiempoActualTexto[1]="00";var iniciaCuentaAtras=!1,efectosFX={},numFX=5,contFX=0,fx=function(){this.x=0,this.y=0,this.fotograma=0,this.contadorVida=36,this.contadorVidaTope=35,this.gradosOpacidad=[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,.9,.8,.7,.6,.5,.4,.3,.2,.1,0],this.imagenFX=0,this.activar=function(t,a,i){this.x=t,this.y=a,this.imagenFX=i,this.contadorVida=0},this.draw=function(){this.contadorVida<this.contadorVidaTope-1&&(ctx.globalAlpha=this.gradosOpacidad[this.contadorVida],0==this.imagenFX&&ctx.drawImage(imagenTopo,0,475,50,25,this.x+5,this.y+30-this.contadorVida,50+this.contadorVida,25+this.contadorVida),1==this.imagenFX&&ctx.drawImage(imagenTopo,100,475,50,25,this.x+5,this.y+30-this.contadorVida,50+this.contadorVida,25+this.contadorVida),2==this.imagenFX&&ctx.drawImage(imagenTopo,50,475,50,25,this.x+5,this.y+30-this.contadorVida,50+this.contadorVida,25+this.contadorVida),ctx.globalAlpha=1,this.contadorVida++)}};for(i=0;i<numFX;i++)efectosFX[i]=new fx;var totalTopos=4,topos=[totalTopos];for(i=0;i<totalTopos;i++)topos[i]=new topo;topos[0].posicion(120,170),topos[1].posicion(20,200),topos[2].posicion(220,200),topos[3].posicion(120,250);var pausaLetras=!0,rotulo=new rotuloTexto,totalPuntos=0,puntuacionMax=0,relojNube=new reloj,lastLoop=new Date,fpsMonitor=0;resize_canvas(),iniciaCarga();