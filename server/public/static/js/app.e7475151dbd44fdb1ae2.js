webpackJsonp([1],{"1TeX":function(e,t){},M8ou:function(e,t){},MQcQ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"App"},i,!1,function(e){n("M8ou")},null,null).exports,o=n("/ocq"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{height:e.playerHeight+"px",width:e.playerWidth+"px"}},e._l(e.currentComments,function(t){return n("p",{key:t.id,class:{pause:!e.isPlaying},style:{top:t.height+"%",position:"absolute"}},[e._v(e._s(t.comment))])}))},staticRenderFns:[]};var u=n("VU/8")({name:"Barrage",props:["isPlaying","playerWidth","playerHeight","currentComments"]},s,!1,function(e){n("eDUy")},"data-v-78a3b59b",null).exports,c=n("//Fk"),l=n.n(c),d=function(e,t,n,r){var i=this;this.el=e,this.id=t,new l.a(function(e){var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n),window.onYouTubeIframeAPIReady=function(){return e(window.YT)}}).then(function(e){i.player=new e.Player(i.el,{height:n,width:r,videoId:i.id,playerVars:{controls:0,disablekb:0,fs:0,showinfo:0,rel:0}})})},p={name:"Player",props:["isPlaying","videoId","playerWidth","playerHeight"],watch:{isPlaying:function(e,t){t?this.player.player.pauseVideo():this.player.player.playVideo()}},mounted:function(){this.player=new d(this.$el,this.videoId,this.playerHeight,this.playerWidth);var e=this;setInterval(function(){e.$emit("onTimeUpdate",Math.floor(e.player.player.getCurrentTime()))},1e3)}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var h=n("VU/8")(p,m,!1,function(e){n("MQcQ")},"data-v-33c55024",null).exports,v=n("mtWM"),y=n.n(v),f={name:"BarragePlayer",data:function(){return{videoId:"A0D1h30kXlI",isPlaying:!1,currentTime:0,currentInput:"",submitedInput:"",playerWidth:.7*window.innerWidth,playerHeight:.7*window.innerWidth/16*9,comments:[],currentComments:[],currentIndex:0}},components:{barrage:u,player:h},methods:{play:function(e){e.preventDefault(),this.isPlaying=!this.isPlaying},addComment:function(e){e.preventDefault(),this.submitedInput=this.currentInput,this.currentInput="";var t={videoId:this.videoId,comment:this.submitedInput,videoTime:this.currentTime};console.log(t),y.a.post("/v1/comment",{videoId:this.videoId,comment:this.submitedInput,videoTime:this.currentTime}).then(function(e){console.log(e.data)}).catch(function(e){console.log(e)}),t.height=5*Math.floor(20*Math.random()),this.currentComments.push(t)},updateCurrentComments:function(e){for(var t=this.comments,n=this.currentIndex,r=this.currentComments;n<t.length&&t[n].videoTime<=e;)r.push(t[n]),t[n].height=5*Math.floor(20*Math.random()),n++;for(;r[0]&&e-r[0].videoTime>=10;)r.shift();this.currentIndex=n,console.log(this.currentComments)}},mounted:function(){var e=this;y.a.get("/v1/comments",{params:{videoId:this.videoId}}).then(function(t){console.log(t.data),e.comments=t.data,e.updateCurrentComments.call(e,e.currentTime)})},watch:{currentTime:function(e,t){this.updateCurrentComments.call(this,e)}}},g={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{on:{click:e.play}},[n("player",{attrs:{isPlaying:e.isPlaying,videoId:e.videoId,playerWidth:e.playerWidth,playerHeight:e.playerHeight},on:{onTimeUpdate:function(t){e.currentTime=t}}}),e._v(" "),n("barrage",{attrs:{isPlaying:e.isPlaying,playerWidth:e.playerWidth,playerHeight:e.playerHeight,currentComments:e.currentComments}})],1),e._v(" "),n("p",[e._v(e._s(e.currentTime)+"s")]),n("p"),e._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.currentInput,expression:"currentInput"}],attrs:{placeholder:"add your comment"},domProps:{value:e.currentInput},on:{input:function(t){t.target.composing||(e.currentInput=t.target.value)}}}),e._v(" "),n("button",{on:{click:e.addComment}},[e._v("Submit")])])},staticRenderFns:[]};var I=n("VU/8")(f,g,!1,function(e){n("1TeX")},"data-v-6f897ad8",null).exports;r.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"BarragePlayer",component:I}]});r.a.config.productionTip=!1,new r.a({el:"#app",router:w,components:{App:a},template:"<App/>"})},eDUy:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e7475151dbd44fdb1ae2.js.map