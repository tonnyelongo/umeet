(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{1203:function(e,t,n){},123:function(e,t,n){e.exports=n(1240)},1234:function(e,t,n){},1240:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),i=n.n(r),c=n(35),l=n(36),s=n(38),d=n(37),u=n(116),m=n(64),h=n.n(m),f=n(88),g=n(89),v=n.n(g),p=n(90),w=n.n(p),b=n(1264),y=n(1260),S=n(1261),E=n(1262),k=n(107),C=n.n(k),x=n(108),O=n.n(x),M=n(110),j=n.n(M),A=n(111),D=n.n(A),V=n(112),T=n.n(V),U=n(113),N=n.n(U),W=n(109),L=n.n(W),R=n(114),F=n.n(R),J=n(1263),P=(n(1201),n(1265)),B=n(40),I=(n(1202),n(1203),{}),H={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},q=null,z=null,G=0,Y=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getPermissions=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return a.videoAvailable=!0})).catch((function(){return a.videoAvailable=!1}));case 3:return e.next=5,navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){return a.audioAvailable=!0})).catch((function(){return a.audioAvailable=!1}));case 5:navigator.mediaDevices.getDisplayMedia?a.setState({screenAvailable:!0}):a.setState({screenAvailable:!1}),(a.videoAvailable||a.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:a.videoAvailable,audio:a.audioAvailable}).then((function(e){window.localStream=e,a.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),a.getMedia=function(){a.setState({video:a.videoAvailable,audio:a.audioAvailable},(function(){a.getUserMedia(),a.connectToSocketServer()}))},a.getUserMedia=function(){if(a.state.video&&a.videoAvailable||a.state.audio&&a.audioAvailable)navigator.mediaDevices.getUserMedia({video:a.state.video,audio:a.state.audio}).then(a.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},a.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===z)return"continue";I[e].addStream(window.localStream),I[e].createOffer().then((function(t){I[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:I[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in I)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({video:!1,audio:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream;var e=function(e){I[e].addStream(window.localStream),I[e].createOffer().then((function(t){I[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:I[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in I)e(t)}))}}))},a.getDislayMedia=function(){a.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(a.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},a.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=e,a.localVideoref.current.srcObject=e;var t=function(e){if(e===z)return"continue";I[e].addStream(window.localStream),I[e].createOffer().then((function(t){I[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:I[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var n in I)t(n);e.getTracks().forEach((function(e){return e.onended=function(){a.setState({screen:!1},(function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(o){console.log(o)}window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),a.localVideoref.current.srcObject=window.localStream,a.getUserMedia()}))}}))},a.gotMessageFromServer=function(e,t){var n=JSON.parse(t);e!==z&&(n.sdp&&I[e].setRemoteDescription(new RTCSessionDescription(n.sdp)).then((function(){"offer"===n.sdp.type&&I[e].createAnswer().then((function(t){I[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:I[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),n.ice&&I[e].addIceCandidate(new RTCIceCandidate(n.ice)).catch((function(e){return console.log(e)})))},a.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var n=String(100/G)+"%",a="";0===G||1===G?(a="100%",n="100%"):2===G?(a="45%",n="100%"):3===G||4===G?(a="35%",n="50%"):a=String(100/G)+"%";for(var o=e.querySelectorAll("video"),r=0;r<o.length;++r)o[r].style.minWidth=t,o[r].style.minHeight="40%",o[r].style.setProperty("width",a),o[r].style.setProperty("height",n);return{minWidth:t,minHeight:"40%",width:a,height:n}},a.connectToSocketServer=function(){(q=v.a.connect("http://192.168.8.100:8080",{secure:!0})).on("signal",a.gotMessageFromServer),q.on("connect",(function(){q.emit("join-call",window.location.href);var e=window.location.href.split("/");q.emit("join-call",e[e.length-1]),z=q.id,q.on("chat-message",a.addMessage),q.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){G--,t.parentNode.removeChild(t);var n=document.getElementById("main");a.changeCssVideos(n)}})),q.on("user-joined",(function(e,t){if(t.forEach((function(e){if(I[e]=new RTCPeerConnection(H),I[e].onicecandidate=function(t){null!=t.candidate&&q.emit("signal",e,JSON.stringify({ice:t.candidate}))},I[e].onaddstream=function(t){var n=document.querySelector('[data-socket="'.concat(e,'"]'));null!==n?(n.srcObject=t.stream,a.remoteVideoref.current.srcObject=t.stream):a.remoteVideoref.current.srcObject=t.stream},void 0!==window.localStream&&null!==window.localStream)I[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=a).black.apply(e,arguments),a.silence()])}(),I[e].addStream(window.localStream)}})),e===z){var n=function(e){if(e===z)return"continue";try{I[e].addStream(window.localStream)}catch(t){}I[e].createOffer().then((function(t){I[e].setLocalDescription(t).then((function(){q.emit("signal",e,JSON.stringify({sdp:I[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var o in I)n(o)}}))}))},a.silence=function(){var e=new AudioContext,t=e.createOscillator(),n=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(n.stream.getAudioTracks()[0],{enabled:!1})},a.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,n=void 0===t?640:t,a=e.height,o=void 0===a?480:a,r=Object.assign(document.createElement("canvas"),{width:n,height:o});r.getContext("2d").fillRect(0,0,n,o);var i=r.captureStream();return Object.assign(i.getVideoTracks()[0],{enabled:!1})},a.handleVideo=function(){return a.setState({video:!a.state.video},(function(){return a.getUserMedia()}))},a.handleAudio=function(){return a.setState({audio:!a.state.audio},(function(){return a.getUserMedia()}))},a.handleScreen=function(){return a.setState({screen:!a.state.screen},(function(){return a.getDislayMedia()}))},a.handleEndCall=function(){try{a.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},a.openChat=function(){return a.setState({showModal:!0,newmessages:0})},a.closeChat=function(){return a.setState({showModal:!1})},a.handleMessage=function(e){return a.setState({message:e.target.value})},a.addMessage=function(e,t,n){a.setState((function(n){return{messages:[].concat(Object(u.a)(n.messages),[{sender:t,data:e}])}})),n!==z&&a.setState({newmessages:a.state.newmessages+1})},a.handleUsername=function(e){return a.setState({username:e.target.value})},a.sendMessage=function(){q.emit("chat-message",a.state.message,a.state.username),a.setState({message:"",sender:a.state.username})},a.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){J.b.success("Link copied to clipboard!")}),(function(){J.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),J.b.success("Link copiedo!")}catch(n){J.b.error("Falha ao copiar o link")}document.body.removeChild(t)}},a.connect=function(){return a.setState({askForUsername:!1},(function(){return a.getMedia()}))},a.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},a.localVideoref=o.a.createRef(),a.remoteVideoref=o.a.createRef(),a.videoAvailable=!1,a.audioAvailable=!1,a.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:w.a.internet.userName()},I={},a.getPermissions(),a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return!1===this.isChrome()?o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("h1",null,"Lamentamos ,mas esta funcionalidade apenas esta a ser suportada pelo Google Chrome")):o.a.createElement("div",null,!0===this.state.askForUsername?o.a.createElement("div",null,o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Insira seu nome de usuario"),o.a.createElement(b.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Conectar")),o.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"60%",height:"30%"}}))):o.a.createElement("div",null,o.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleVideo},!0===this.state.video?o.a.createElement(C.a,null):o.a.createElement(O.a,null)),o.a.createElement(S.a,{style:{color:"#f44336"},onClick:this.handleEndCall},o.a.createElement(L.a,null)),o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleAudio},!0===this.state.audio?o.a.createElement(j.a,null):o.a.createElement(D.a,null)),!0===this.state.screenAvailable?o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.handleScreen},!0===this.state.screen?o.a.createElement(T.a,null):o.a.createElement(N.a,null)):null,o.a.createElement(E.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},o.a.createElement(S.a,{style:{color:"#424242"},onClick:this.openChat},o.a.createElement(F.a,null)))),o.a.createElement(B.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},o.a.createElement(B.a.Header,{closeButton:!0},o.a.createElement(B.a.Title,null,"Chat")),o.a.createElement(B.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return o.a.createElement("div",{key:t,style:{textAlign:"left"}},o.a.createElement("p",{style:{wordBreak:"break-all"}},o.a.createElement("b",null,e.sender),": ",e.data))})):o.a.createElement("p",null,"Sem mensagens ainda")),o.a.createElement(B.a.Footer,{className:"div-send-msg"},o.a.createElement(b.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Enviar"))),o.a.createElement("div",{className:"container-fluid",style:{margin:0,backgroundColor:"black"}},o.a.createElement(P.a,{id:"main",className:"flex-container",style:{width:"100vw",height:"100vh",backgroundColor:"black"}},o.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{position:"absolute",height:"30%",width:"30%",bottom:"5px",left:"5px",borderRadius:"40px"}}),o.a.createElement("video",{id:"",ref:this.remoteVideoref,autoPlay:!0,muted:!0,style:{height:"100vh",width:"100vw"}})))))}}]),n}(a.Component),$=(n(1234),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){return a.setState({url:e.target.value})},a.join=function(){if(""!==a.state.url){var e=a.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},a.state={url:""},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container2"},o.a.createElement("div",{style:{fontSize:"14px",background:"white",width:"10%",textAlign:"center",margin:"auto",marginBottom:"10px"}}),o.a.createElement("div",null,o.a.createElement("h1",{style:{fontSize:"45px"}},"Meet"),o.a.createElement("p",{style:{fontWeight:"200"}},"Video conferencia.")),o.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"100px"}},o.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Inicie ou participe em uma reuni\xe3o"),o.a.createElement(b.a,{placeholder:"Digite o nome da sala",onChange:function(t){return e.handleChange(t)}}),o.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.join,style:{margin:"20px"}},"Entrar")))}}]),n}(a.Component)),K=n(117),Q=n(12),X=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(K.a,null,o.a.createElement(Q.c,null,o.a.createElement(Q.a,{path:"/",exact:!0,component:$}),o.a.createElement(Q.a,{path:"/:url",component:Y}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},150:function(e,t){}},[[123,1,2]]]);
//# sourceMappingURL=main.0a105894.chunk.js.map