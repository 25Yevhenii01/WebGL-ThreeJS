!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=window.innerWidth/window.innerHeight,n=document.getElementById("canvas");n.setAttribute("width",window.innerWidth),n.setAttribute("height",window.innerHeight),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(30,t,1,2e3),this.renderer=new THREE.WebGLRenderer({canvas:n}),this.loadComposer()}return r(e,[{key:"loadComposer",value:function(){this.composerActive=!1,this.composer=new THREE.EffectComposer(this.renderer);var e=new THREE.RenderPass(this.scene,this.camera);this.composer.addPass(e);var t=new THREE.ShaderPass(THREE.SepiaShader);this.composer.addPass(t);var n=new THREE.GlitchPass(0);this.composer.addPass(n);var r={uniforms:{tDiffuse:{value:null},amount:{value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float amount;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 color = texture2D( tDiffuse, vUv );","vec3 c = color.rgb;","color.r = c.r * 1.0;","color.g = c.g / 1.0;","color.b = c.b;","gl_FragColor = vec4( color.rgb , color.a );","}"].join("\n")},i=new THREE.ShaderPass(r);i.renderToScreen=!0,this.composer.addPass(i)}},{key:"loadScene",value:function(){var e=this;this.scene.addEventListener("update",function(){e.scene.simulate(void 0,1)}),this.scene.fog=new THREE.FogExp2(7445326,3e-4),this.scene.add(this.camera),this.camera.position.set(0,30,30),this.camera.rotation.x=-Math.PI/5.9}},{key:"loadRender",value:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(this.scene.fog.color),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMapSoft=!0,THREEx.WindowResize(this.renderer,this.camera)}},{key:"loadLight",value:function(){var e=new THREE.DirectionalLight(16777215);e.position.set(40,55,-15),e.castShadow=!0,e.shadow.camera.left=-60,e.shadow.camera.top=-60,e.shadow.camera.right=60,e.shadow.camera.bottom=60,e.shadow.camera.near=20,e.shadow.camera.far=200,e.shadow.bias=-1e-4,e.shadow.mapSize.width=e.shadow.mapSize.height=2048,this.scene.add(e)}},{key:"render",value:function(){this.renderer&&this.renderer.render(this.scene,this.camera)}}]),e}());t.initScene=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objects=t.interface1=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(9),a=n(3),o=n(0);var s=[],c=new THREE.Raycaster,u=new THREE.Vector2,l=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"slider",value:function(){var e=this;$(document).ready(function(){$(".btnSlide").click(function(){return $("#panel").slideToggle("slow"),$(e).toggleClass("active"),!1})})}},{key:"eventListener",value:function(){var e=this;document.addEventListener("click",function(t){e.clickPlayer(t)},!1)}},{key:"clickPlayer",value:function(e){u.x=event.clientX/o.initScene.renderer.domElement.clientWidth*2-1,u.y=-event.clientY/o.initScene.renderer.domElement.clientHeight*2+1,c.setFromCamera(u,o.initScene.camera);var t=c.intersectObjects(s);if(t.length>0)switch(t[0].object.name){case"Albert":alert("Hello!)");break;case"car":alert("Get in the car");break;case"tree":alert("Play");break;case"garage":alert("Turn on the light in settings")}}},{key:"btnListener",value:function(){$(document).ready(function(){$("#labelSpeed").text(i.wheel.mass.toString()),$("#btnDown").click(function(){i.wheel.mass>100&&(i.wheel.mass-=100,$("#labelSpeed").text(i.wheel.mass.toString()))}),$("#btnUp").click(function(){i.wheel.mass+=100,$("#labelSpeed").text(i.wheel.mass.toString())}),$("#garagelight").click(function(){$(this).is(":checked")?(a.garage.lightGarage.visible=!0,a.garage.helper.visible=!0):(a.garage.lightGarage.visible=!1,a.garage.helper.visible=!1)})})}}]),e}());t.interface1=l,t.objects=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i={},a=!0,o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"setKeyboardList",value:function(e){a=e}},{key:"keyDown",value:function(e){a&&(i[e.keyCode]=!0)}},{key:"keyUp",value:function(e){a&&(i[e.keyCode]=!1)}}]),e}());t.keyboard=i,t.keyListener=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.garage=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"loadGarage",value:function(){var e=new THREE.BoxGeometry(5,5,6),t=new THREE.MeshPhongMaterial({color:16777215});t.transparent=!0,t.opacity=.9,t.depthTest=!1,this.cube=new THREE.Mesh(e,t),this.cube.rotation.x=-Math.PI/5.9,this.cube.rotation.y=Math.PI/2.1,this.cube.position.set(13,7.3,0),this.cube.receiveShadow=!0,this.cube.name="garage",a.objects.push(this.cube);var n=new THREE.Mesh(e,t);n.scale.set(.25,.25,.25),n.position.set(1,-2,0),n.castShadow=!0,this.cube.add(n),this.lightGarage=new THREE.SpotLight(16777215,10,100),this.lightGarage.position.set(16.5,9.5,0),this.lightGarage.visible=!1,this.lightGarage.castShadow=!0,i.initScene.scene.add(this.lightGarage),this.helper=new THREE.CameraHelper(this.lightGarage.shadow.camera),this.helper.visible=!1,i.initScene.scene.add(this.helper),i.initScene.scene.add(this.cube)}}]),e}());t.garage=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unit=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"startPosition",value:function(){this.sprUnit.material.map=this.sprMove180[0],this.sprUnit.visible=!0,this.sprUnit.position.set(-15,20,0)}},{key:"loadSprite",value:function(){this.sprMove180=[],this.sprMove270=[],this.sprDeath=[];for(var e=0;e<26;e++)this.sprMove180[e]=e>9?(new THREE.TextureLoader).load("textures/move_cam_180/sniper_move_cam_180_000"+e+".png"):(new THREE.TextureLoader).load("textures/move_cam_180/sniper_move_cam_180_0000"+e+".png"),this.sprMove270[e]=e>9?(new THREE.TextureLoader).load("textures/move_cam_270/sniper_move_cam_270_000"+e+".png"):(new THREE.TextureLoader).load("textures/move_cam_270/sniper_move_cam_270_0000"+e+".png");for(var t=0;t<21;t++)this.sprDeath[t]=t>9?(new THREE.TextureLoader).load("textures/sniper_death/sniper_death_000"+t+".png"):(new THREE.TextureLoader).load("textures/sniper_death/sniper_death_0000"+t+".png")}},{key:"loadUnit",value:function(){this.loadSprite();var e=new THREE.SpriteMaterial({map:this.sprMove180[0],color:16777215});this.sprUnit=new THREE.Sprite(e),this.sprUnit.position.set(-15,20,0),this.sprUnit.scale.set(6,6,1),this.sprUnit.name="Albert",a.objects.push(this.sprUnit),i.initScene.scene.add(this.sprUnit)}}]),e}());t.unit=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.car=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1);var o=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"loadSprite",value:function(){this.spriteSmoke=[];for(var e=0;e<21;e++)this.spriteSmoke[e]=e>9?(new THREE.TextureLoader).load("textures/sniper_death/sniper_death_000"+e+".png"):(new THREE.TextureLoader).load("textures/sniper_death/sniper_death_0000"+e+".png")}},{key:"startPosition",value:function(){this.sprCar.position.set(-10,5,0),this.sprWheel[0].position.set(.002*this.sprCar.position.x-.23+0,-.45,0),this.sprWheel[1].position.set(.002*this.sprCar.position.x-.23+1/1.9,-.45,0),this.sprSmoke.visible=!1}},{key:"loadCar",value:function(){this.loadSprite(),this.sprCar=new THREE.Sprite(new THREE.SpriteMaterial({map:(new THREE.TextureLoader).load("textures/car/car.png"),color:16777215})),this.sprCar.position.set(-10,5,0),this.sprCar.scale.set(6,2,0),this.sprWheel=[];for(var e=0;e<2;e++)this.sprWheel[e]=new THREE.Sprite(new THREE.SpriteMaterial({map:(new THREE.TextureLoader).load("textures/car/wheels.png"),color:16777215})),this.sprWheel[e].position.set(.002*this.sprCar.position.x-.23+e/1.9,-.45,0),this.sprWheel[e].scale.set(.15,.45,0),this.sprCar.add(this.sprWheel[e]);this.sprSmoke=new THREE.Sprite(new THREE.SpriteMaterial({map:this.spriteSmoke[10],color:16777215})),this.sprSmoke.position.set(-.6,0,0),this.sprSmoke.scale.set(.5,2,0),this.sprCar.add(this.sprSmoke),this.sprSmoke.visible=!1,this.sprCar.name="car",a.objects.push(this.sprCar),i.initScene.scene.add(this.sprCar)}}]),e}());t.car=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.audio=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0);var a=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"load",value:function(){var e=this,t=new THREE.AudioListener;i.initScene.camera.add(t),this.sound=new THREE.Audio(t),(new THREE.AudioLoader).load("audio/still.mp3",function(t){e.sound.setBuffer(t),e.sound.setLoop(!0),e.sound.setVolume(.1)})}}]),e}());t.audio=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.triggerEnter=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=n(4),o=n(3);var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"enterGarageCar",value:function(){return this.trigEnter(o.garage.cube,i.car.sprCar,.5,1,!0)}},{key:"enterUnitCar",value:function(){return this.trigEnter(i.car.sprCar,a.unit.sprUnit,3,1)}},{key:"trigEnter",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=0;if(i&&(a=1.4),e.position.x-n<=t.position.x-a&&t.position.x-a<=e.position.x+n){if(i)return!0;if(e.position.y-r<=t.position.y&&t.position.y<=e.position.y+r)return!0}return!1}}]),e}());t.triggerEnter=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animationUnit=t.keyEnter=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),a=n(2),o=n(7),s=n(0),c=n(6),u=n(11);var l=!1,d=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currMoveSpr=0,this.currDeathSpr=0}return r(e,[{key:"setKeyEnter",value:function(e){t.keyEnter=l=e}},{key:"animate",value:function(){this.currMoveSpr>=25&&(this.currMoveSpr=0),this.currDeathSpr>=20&&l&&(i.unit.sprUnit.visible=!1,t.keyEnter=l=null,s.initScene.composerActive=!1,c.audio.sound.play()),a.keyboard[37]&&null!==l&&(i.unit.sprUnit.position.x-=.1,i.unit.sprUnit.material.map=i.unit.sprMove270[this.currMoveSpr++]),a.keyboard[38]&&null!==l&&(i.unit.sprUnit.position.y+=.1,i.unit.sprUnit.material.map=i.unit.sprMove180[this.currMoveSpr++]),a.keyboard[39]&&null!==l&&(i.unit.sprUnit.position.x+=.1,i.unit.sprUnit.material.map=i.unit.sprMove270[this.currMoveSpr++]),a.keyboard[40]&&null!==l&&(i.unit.sprUnit.position.y-=.1,i.unit.sprUnit.material.map=i.unit.sprMove180[this.currMoveSpr++]),o.triggerEnter.enterUnitCar()&&!1===l&&(t.keyEnter=l=!0,s.initScene.composerActive=!0,u.tree.visible(!0)),l&&(i.unit.sprUnit.material.map=i.unit.sprDeath[this.currDeathSpr++])}}]),e}());t.keyEnter=l,t.animationUnit=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wheel=t.animationCar=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(5),a=n(8),o=n(2),s=n(7),c=n(0),u=n(11),l=n(4),d=n(13);var p={mass:100,radius:100,axleRadius:30,deltaRot:1.3,dragCoff:.2,rotation:0},f=!1,h=!1,v=document.getElementById("blind"),m=!1,y=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currSprSmoke=0}return r(e,[{key:"moveCar",value:function(e,t){e?p.deltaRot>=.5&&(p.deltaRot=p.deltaRot-.5*Math.pow(p.deltaRot*p.axleRadius,2)*p.dragCoff/p.mass/p.axleRadius):p.deltaRot=p.deltaRot+.5*Math.pow(p.deltaRot*p.axleRadius,2)*p.dragCoff/p.mass/p.axleRadius,i.car.sprCar.position.x=i.car.sprCar.position.x+t*(1.3/6-p.deltaRot/6);for(var n=0;n<i.car.sprCar.children.length-1;n++)i.car.sprCar.children[n].material.rotation=i.car.sprCar.children[n].material.rotation+(1.3/6-p.deltaRot/6),i.car.sprCar.children[n].position.x=.002*i.car.sprCar.position.x-.23+n/1.9}},{key:"endReloadGame",value:function(){m=!1,c.initScene.composerActive=!1,i.car.startPosition(),l.unit.startPosition(),u.tree.visible(!1),o.keyListener.setKeyboardList(!0),a.animationUnit.setKeyEnter(!1),v.style.paddingTop="0%",v.style.color="",v.style.paddingLeft="",v.style.fontSize=""}},{key:"animate",value:function(){var e=this;i.car.sprCar.position.x>=14.5&&(v.style.paddingTop="10%",v.style.color="white",v.style.paddingLeft="30%",v.style.fontSize="10em",c.initScene.composerActive=!0,o.keyListener.setKeyboardList(!1),m||(d.servSide.ws.send(JSON.stringify({commandName:"setResultGame",value:"false"})),m=!0,setTimeout(function(){e.endReloadGame()},3e3))),s.triggerEnter.enterGarageCar()&&p.deltaRot<=1.3&&p.deltaRot>=1.2&&(c.initScene.composerActive=!0,o.keyListener.setKeyboardList(!1),m||(m=!0,d.servSide.ws.send(JSON.stringify({commandName:"setResultGame",value:"true"})),setTimeout(function(){e.endReloadGame()},3e3))),null===a.keyEnter&&(i.car.sprCar.children[2].visible=!0,this.currSprSmoke>=19&&(this.currSprSmoke=0),i.car.sprCar.children[2].material.map=i.car.spriteSmoke[this.currSprSmoke++]),o.keyboard[37]&&null===a.keyEnter&&(h?p.deltaRot<=1.3?this.moveCar(!1,1):h=!1:(f=!0,this.moveCar(!0,-1))),o.keyboard[37]||o.keyboard[39]||null===a.keyEnter&&(h&&(p.deltaRot<=1.3?this.moveCar(!1,1):h=!1),f&&(p.deltaRot<=1.3?this.moveCar(!1,-1):f=!1)),o.keyboard[39]&&null===a.keyEnter&&(f?p.deltaRot<=1.3?this.moveCar(!1,-1):f=!1:(h=!0,this.moveCar(!0,1)))}}]),e}());t.animationCar=y,t.wheel=p},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mainAnim=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(8),o=n(9);n(2);var s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"animate",value:function(){requestAnimationFrame(this.animate.bind(this)),a.animationUnit.animate(),o.animationCar.animate(),i.initScene.composerActive?i.initScene.composer.render():i.initScene.render()}}]),e}());t.mainAnim=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tree=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(1);var o=[{x:-1,y:15,z:0},{x:-16,y:12,z:0},{x:-10,y:18,z:0},{x:-5,y:10,z:0},{x:5,y:15,z:0},{x:10,y:18,z:0}],s=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sprUnit=[]}return r(e,[{key:"visible",value:function(e){for(var t=0;t<6;t++)this.sprUnit[t].visible=e}},{key:"load",value:function(){for(var e=new THREE.SpriteMaterial({map:(new THREE.TextureLoader).load("textures/tree/tree.png"),color:16777215}),t=0;t<6;t++)this.sprUnit[t]=new THREE.Sprite(e),this.sprUnit[t].position.set(o[t].x,o[t].y,o[t].z),this.sprUnit[t].scale.set(4,4,1),this.sprUnit[t].name="tree",a.objects.push(this.sprUnit[t]),this.sprUnit[t].visible=!1,i.initScene.scene.add(this.sprUnit[t])}}]),e}());t.tree=s},function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),a=n(5),o=n(4),s=n(3),c=n(2),u=n(10),l=n(1),d=n(11),p=n(13),f=n(6);var h=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i.initScene.loadScene(),i.initScene.loadRender(),i.initScene.loadLight()}return r(e,[{key:"initialize",value:function(){a.car.loadCar(),o.unit.loadUnit(),s.garage.loadGarage(),u.mainAnim.animate(),l.interface1.slider(),l.interface1.btnListener(),l.interface1.eventListener(),d.tree.load(),f.audio.load(),p.servSide.webSocket()}}]),e}());window.addEventListener("keydown",c.keyListener.keyDown),window.addEventListener("keyup",c.keyListener.keyUp),window.onload=h.initialize()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var i=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"webSocket",value:function(){this.ws=new WebSocket("ws://localhost:8000"),this.ws.onopen=function(){console.log("Connection success")}}}]),e}());t.servSide=i}]);
//# sourceMappingURL=bundle.js.map