(function(){"use strict";var e={4055:function(e,t,o){var n=o(9242),s=o(3396);const r=(0,s._)("div",{class:"flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg shadow-lg",style:{background:"#1f2e42"}},[(0,s._)("h2",null,"Invoice Overview")],-1),l=(0,s._)("div",{class:"flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg shadow-lg",style:{background:"#1f2e42"}},[(0,s._)("h2",null,"Actions")],-1),a=(0,s._)("div",{class:"flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg shadow-lg",style:{background:"#1f2e42"}},[(0,s._)("h2",null,"Project Distribution Map")],-1),i=(0,s._)("div",{class:"flex text-white mx-20 my-10 p-5 text-2xl rounded-t-lg shadow-lg",style:{background:"#1f2e42"}},[(0,s._)("h2",null,"Bulletin Board")],-1);function d(e,t,o,n,d,c){const u=(0,s.up)("nav-bar"),p=(0,s.up)("InvoiceOverview"),h=(0,s.up)("ActionTable"),m=(0,s.up)("map-comp"),g=(0,s.up)("BulletinGrid"),b=(0,s.up)("Invoice"),f=(0,s.up)("footer-comp");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u),r,(0,s.Wm)(p),l,(0,s.Wm)(h,{msg:"Welcome to Your Vue.js App"}),a,(0,s.Wm)(m),i,(0,s.Wm)(g),(0,s.Wm)(b),(0,s.Wm)(f)],64)}var c=o(7139);const u=(0,s.uE)('<div class="invoice p-4"><h2></h2><div class="border-solid border-2 border-sky-500 w-1/6 invoice p-4 text-2xl"> Loop </div><p style="margin-left:85vw;" class="font-semibold text-2xl">Invoices</p><div class="grid grid-cols-1 gap-12"><div class="text-sm font-light text-slate-500"><p class="text-sm font-normal text-slate-700"><div class="text-sm font-light text-slate-500"></div><p style="margin-left:85vw;" class="text-sm font-normal text-slate-700">Date</p></p><p class="text-sm font-normal text-slate-700 w-1/3">Name</p><p></p></div><div class="text-sm font-light text-slate-500 w-1/3"><p class="text-sm font-normal text-slate-700">Address</p><p>The 55 Group</p></div><div class="text-sm font-light text-slate-500 w-1/3"><p class="text-sm font-normal text-slate-700">City</p><p>Hull</p><p class="mt-2 text-sm font-normal text-slate-700">Email Address</p><p>...</p></div></div></div>',1),p=(0,s._)("thead",null,[(0,s._)("tr",{class:"bg-gray-300"},[(0,s._)("th",null,"Item"),(0,s._)("th",null,"Quantity"),(0,s._)("th",null,"Unit Price"),(0,s._)("th",null,"Total")])],-1),h={class:""},m={class:"total"};function g(e,t,o,n,r,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[u,(0,s._)("table",null,[p,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.items,((e,t)=>((0,s.wg)(),(0,s.iD)("tr",{key:t},[(0,s._)("td",h,(0,c.zw)(e.name),1),(0,s._)("td",null,(0,c.zw)(e.quantity),1),(0,s._)("td",null,(0,c.zw)(e.unitPrice),1),(0,s._)("td",null,(0,c.zw)(l.calculateTotal(e)),1)])))),128))])]),(0,s._)("div",m,"Total: "+(0,c.zw)(l.calculateGrandTotal()),1)],64)}var b={data(){return{items:[{name:"Item 1",quantity:2,unitPrice:10},{name:"Item 2",quantity:3,unitPrice:15},{name:"Item 3",quantity:1,unitPrice:5},{name:"Item 4",quantity:3,unitPrice:15},{name:"Item 5",quantity:4,unitPrice:20},{name:"Item 6",quantity:1,unitPrice:5},{name:"Item 7",quantity:2,unitPrice:10},{name:"Item 8",quantity:5,unitPrice:25}]}},methods:{calculateTotal(e){return e.quantity*e.unitPrice},calculateGrandTotal(){return this.items.reduce(((e,t)=>e+this.calculateTotal(t)),0)}}},f=o(89);const w=(0,f.Z)(b,[["render",g]]);var v=w;const x={class:"grid grid-cols-4"},y=(0,s._)("div",{style:{height:"0px"}},null,-1),_={class:"grid grid-cols-4 justify-items-center"},k={class:"box-border col-4 h-86 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson",style:{"font-size":"20px",color:"black"}},D=(0,s._)("div",{class:"flex row items-center justify-between",style:{"font-weight":"bold"}},[(0,s._)("h3",{class:"border-b-2 border-black"},"Sort")],-1),C={class:"flex row items-center justify-between"},P=(0,s._)("h3",null,"News",-1),j={class:"flex row items-center justify-between"},L=(0,s._)("h3",null,"Marketing",-1),M={class:"flex row items-center justify-between"},I=(0,s._)("h3",null,"Pinned",-1),B=(0,s._)("div",{class:"flex row items-center justify-between",style:{"font-weight":"bold"}},[(0,s._)("h3",{class:"border-b-2 border-black"},"Sort by Date")],-1),z={class:"flex row items-center justify-between"},N=(0,s._)("h3",null,"Oldest",-1),T={class:"flex row items-center justify-between"},A=(0,s._)("h3",null,"Newest",-1),O={class:"box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson",style:{"font-size":"18px",color:"black"}},W={class:"flex items-center justify-between"},H=(0,s._)("h3",{class:"border-b-2 border-black font-bold"},"Marketing Strategies with Sam Sulek",-1),S=(0,s.uE)('<p> This will take place on the 24th November at 6pm. </p><div style="height:1px;"></div><h3 class="border-b-2 border-black font-bold">Tags</h3><h3 class="font-bold">@News @Marketing @Pinned</h3><div style="height:10px;"></div><a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-2 rounded" href="https://loop.org.uk/"> Read more </a>',6),Z={class:"box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson",style:{"font-size":"18px",color:"black"}},q={class:"flex items-center justify-between"},E=(0,s._)("h3",{class:"border-b-2 border-black font-bold"},"System Maintenance",-1),U=(0,s.uE)('<p> There will be a system maintenance between 5:30pm and 7:30pm. </p><div style="height:30px;"></div><h3 class="border-b-2 border-black font-bold">Tags</h3><h3 class="font-bold">@News @Pinned</h3><div style="height:35px;"></div><a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-2 rounded" href="https://loop.org.uk/"> Read more </a>',6),F={class:"box-border col-4 h-72 w-64 p-4 border-4 border-blue-400 bg-blue-400 font-filson",style:{"font-size":"18px",color:"black"}},V={class:"flex items-center justify-between"},G=(0,s._)("h3",{class:"border-b-2 border-black font-bold"},"Loop Calculator",-1),Y=(0,s._)("div",{style:{height:"px"}},null,-1),$=(0,s.uE)('<p> An insight into Loop&#39;s new &#39;Social Value&#39; calculator </p><div style="height:31px;"></div><h3 class="border-b-2 border-black font-bold">Tags</h3><h3 class="font-bold">@News @Pinned</h3><div style="height:35px;"></div><a class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-2 rounded" href="https://loop.org.uk/"> Read more </a>',6);function R(e,t,o,r,l,a){const i=(0,s.up)("HelloWorld"),d=(0,s.up)("BulletinBox"),u=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("div",null,[(0,s.Wm)(i,{msg:"Bulletin Board"}),(0,s._)("div",x,[(0,s.Wm)(d,{title:""})]),y,(0,s._)("div",_,[(0,s._)("div",k,[D,(0,s._)("div",C,[P,(0,s.wy)((0,s._)("input",{type:"checkbox",id:"newsCheck ","onUpdate:modelValue":t[0]||(t[0]=e=>l.newsCheck=e)},null,512),[[n.e8,l.newsCheck]])]),(0,s._)("div",j,[L,(0,s.wy)((0,s._)("input",{type:"checkbox",id:"marketCheck","onUpdate:modelValue":t[1]||(t[1]=e=>l.marketCheck=e)},null,512),[[n.e8,l.marketCheck]])]),(0,s._)("div",M,[I,(0,s.wy)((0,s._)("input",{type:"checkbox",id:"pinnedCheck","onUpdate:modelValue":t[2]||(t[2]=e=>l.pinnedCheck=e)},null,512),[[n.e8,l.pinnedCheck]])]),B,(0,s._)("div",z,[N,(0,s.wy)((0,s._)("input",{type:"checkbox",id:"oldCheck","onUpdate:modelValue":t[3]||(t[3]=e=>l.oldCheck=e)},null,512),[[n.e8,l.oldCheck]])]),(0,s._)("div",T,[A,(0,s.wy)((0,s._)("input",{type:"checkbox",id:"newCheck","onUpdate:modelValue":t[4]||(t[4]=e=>l.newCheck=e)},null,512),[[n.e8,l.newCheck]])])]),(0,s._)("div",O,[(0,s._)("div",W,[H,(0,s.Wm)(u,{onClick:t[5]||(t[5]=e=>l.section1=!l.section1),icon:["fas","thumbtack"],class:(0,c.C_)(["text-white",l.section1?"text-yellow-300":"text-white"])},null,8,["class"])]),S]),(0,s._)("div",Z,[(0,s._)("div",q,[E,(0,s.Wm)(u,{onClick:t[6]||(t[6]=e=>l.section2=!l.section2),icon:["fas","thumbtack"],class:(0,c.C_)(["text-white",l.section2?"text-yellow-300":"text-white"])},null,8,["class"])]),U]),(0,s._)("div",F,[(0,s._)("div",V,[G,Y,(0,s.Wm)(u,{onClick:t[7]||(t[7]=e=>l.section3=!l.section3),icon:["fas","thumbtack"],class:(0,c.C_)(["text-white",l.section3?"text-yellow-300":"text-white"])},null,8,["class"])]),$])])])}function J(e,t,o,n,s,r){return(0,c.zw)(o.title)}var K={name:"BulletinBox",props:{title:String}};const Q=(0,f.Z)(K,[["render",J]]);var X=Q,ee={name:"BulletinGrid",components:{BulletinBox:X},data(){return{checked:!1,newsCheck:!1,marketCheck:!1,pinnedCheck:!1,oldCheck:!1,newCheck:!1,section1:!1,section2:!1,section3:!1}}};const te=(0,f.Z)(ee,[["render",R]]);var oe=te;const ne={class:"bg-white drop-shadow-md",style:{"font-family":"'filson-pro', sans-serif"}},se=(0,s._)("div",{class:"max-w-screen-xl flex flex-wrap justify-between mx-20 p-4"},[(0,s._)("a",{href:"https://flowbite.com/",class:"flex items-center"},[(0,s._)("img",{src:"https://loop.org.uk/wp-content/themes/loop/images/Loop_logo_blue_with_tag.svg",width:"170"}),(0,s._)("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-black mx-8",style:{color:"#1f2d42","font-weight":"1000"}},"Dashboard")])],-1),re=[se];function le(e,t,o,n,r,l){return(0,s.wg)(),(0,s.iD)("nav",ne,re)}var ae={name:"navBar",props:{msg:String}};const ie=(0,f.Z)(ae,[["render",le]]);var de=ie;const ce={class:"bg-white rounded-lg shadow m-4"},ue=(0,s.uE)('<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8"><div class="sm:flex sm:items-center sm:justify-between"><a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0"><img src="https://loop.org.uk/wp-content/themes/loop/images/Loop_logo_blue_with_tag.svg" width="170"></a><ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400"><li><a href="#" class="mr-4 hover:underline md:mr-6">About</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a></li><li><a href="#" class="mr-4 hover:underline md:mr-6">Licensing</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></div><hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"><span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Loop™</a>. All Rights Reserved.</span></div>',1),pe=[ue];function he(e,t,o,n,r,l){return(0,s.wg)(),(0,s.iD)("footer",ce,pe)}var me={name:"footerComp",props:{msg:String}};const ge=(0,f.Z)(me,[["render",he]]);var be=ge;const fe={class:"basis-1",style:{"padding-bottom":"5vh"}},we={class:"max-h-72 overflow-y-auto",style:{"margin-left":"10vw","margin-right":"10vw"}},ve={class:"border-collapse border border-state-500"},xe={class:"px-8 border border-state-500"},ye={class:"px-8 border border-state-500"},_e={class:"px-8 border border-state-500"},ke={class:"px-8 border border-state-500"},De={class:"px-8 border border-state-500"},Ce=["onClick"],Pe=(0,s._)("h3",null,"Create Action",-1),je=(0,s._)("label",{for:"actionName",class:"px 2"},"Action Name:",-1),Le=(0,s._)("br",null,null,-1),Me=(0,s._)("label",{for:"due_date"},"Due Date:",-1),Ie=(0,s._)("br",null,null,-1),Be=(0,s._)("label",{for:"priority"},"Priority:",-1),ze=(0,s._)("option",{id:"priority",disabled:"",value:""},"Priority",-1),Ne=(0,s._)("option",null,"Low",-1),Te=(0,s._)("option",null,"Medium",-1),Ae=(0,s._)("option",null,"High",-1),Oe=[ze,Ne,Te,Ae],We=(0,s._)("label",{for:"progress"},"Progress:",-1),He=(0,s._)("option",{id:"progress",disabled:"",value:""},"Progress",-1),Se=(0,s._)("option",null," Not-Started",-1),Ze=(0,s._)("option",null,"In-Progress",-1),qe=(0,s._)("option",null,"Pending",-1),Ee=(0,s._)("option",null,"Completed",-1),Ue=[He,Se,Ze,qe,Ee],Fe=(0,s._)("br",null,null,-1);function Ve(e,t,o,r,l,a){const i=(0,s.up)("modal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",fe,[(0,s._)("button",{id:"show-modal",class:"border border-state-500",onClick:t[0]||(t[0]=e=>l.showModal=!0)},"Create Action")]),(0,s._)("div",we,[(0,s._)("table",ve,[(0,s._)("thead",null,[(0,s._)("tr",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.headings,(e=>((0,s.wg)(),(0,s.iD)("th",{key:e,class:"border border-state-500"},(0,c.zw)(e),1)))),128))])]),(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(l.cells,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e},[(0,s._)("td",xe,(0,c.zw)(e.action_name),1),(0,s._)("td",ye,(0,c.zw)(e.dueDate),1),(0,s._)("td",_e,(0,c.zw)(e.daysLeft),1),(0,s._)("td",{class:(0,c.C_)(["px-8 border border-state-500",a.getColour(e.priority)])},(0,c.zw)(a.changeText(e.priority)),3),(0,s._)("td",ke,(0,c.zw)(e.progress),1),(0,s._)("td",De,[(0,s._)("button",{onClick:t=>a.editAction(e)},"Edit",8,Ce)])])))),128))])])]),(0,s.Wm)(i,{show:l.showModal,onClose:t[5]||(t[5]=e=>l.showModal=!1),onSaveChanges:a.saveChanges},{header:(0,s.w5)((()=>[Pe])),body:(0,s.w5)((()=>[je,(0,s.wy)((0,s._)("input",{type:"text",id:"actionName",class:"px 2 border border-state-500","onUpdate:modelValue":t[1]||(t[1]=t=>e.actionName=t),placeholder:"Action Name Here"},null,512),[[n.nr,e.actionName]]),Le,Me,(0,s.wy)((0,s._)("input",{type:"date",id:"due_date",class:"px 2 border border-state-500","onUpdate:modelValue":t[2]||(t[2]=t=>e.dueDate=t),placeholder:"Due Date Here"},null,512),[[n.nr,e.dueDate]]),Ie,Be,(0,s.wy)((0,s._)("select",{style:{"padding-left":"7vw","padding-right":"7vw"},class:"px 10 border border-state-500","onUpdate:modelValue":t[3]||(t[3]=t=>e.priority=t)},Oe,512),[[n.bM,e.priority]]),We,(0,s.wy)((0,s._)("select",{style:{"padding-left":"6vw","padding-right":"6vw"},class:"px 10 border border-state-500","onUpdate:modelValue":t[4]||(t[4]=t=>e.progress=t)},Ue,512),[[n.bM,e.progress]]),Fe])),_:1},8,["show","onSaveChanges"])],64)}o(7658);const Ge={key:0,class:"overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"},Ye={class:"relative w-auto my-6 mx-auto max-w-6xl"},$e={class:"border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"},Re={class:"flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"},Je={class:"text-3xl font-semibold"},Ke=(0,s._)("span",{class:"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"}," × ",-1),Qe=[Ke],Xe={class:"relative p-6 flex-auto"},et={class:"flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"};function tt(e,t,o,n,r,l){return o.show?((0,s.wg)(),(0,s.iD)("div",Ge,[(0,s._)("div",Ye,[(0,s._)("div",$e,[(0,s._)("div",Re,[(0,s._)("h3",Je,[(0,s.WI)(e.$slots,"header",{},(()=>[(0,s.Uk)("default header")]))]),(0,s._)("button",{class:"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",onClick:t[0]||(t[0]=t=>e.$emit("close"))},Qe)]),(0,s._)("div",Xe,[(0,s.WI)(e.$slots,"body",{},(()=>[(0,s.Uk)("default body")]))]),(0,s._)("div",et,[(0,s._)("button",{class:"text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[1]||(t[1]=t=>e.$emit("close"))}," Close "),(0,s._)("button",{class:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",type:"button",onClick:t[2]||(t[2]=t=>e.$emit("saveChanges"))}," Save Changes ")])])])])):(0,s.kq)("",!0)}var ot={name:"modal",props:{show:Boolean},methods:{toggleModal:function(){this.show=!this.show}}};const nt=(0,f.Z)(ot,[["render",tt]]);var st=nt,rt={components:{modal:st},name:"ActionTable",props:{msg:String},data(){return{cells:[{action_name:"Project Narwhal",dueDate:"10/09/2023",priority:"Medium",progress:"In-Progress"},{action_name:"Project Penguin",dueDate:"08/16/2023",priority:"Low",progress:"In-Progress"},{action_name:"Project Mammoth",dueDate:"11/26/2023",priority:"High",progress:"Not-Started"}],headings:["Action Name","Due Date","Days Left","Priority","Progress"],showModal:!1,formData:{checked:!1}}},methods:{changeText(e){return"Medium"==e?"Medium":"High"==e?"High":"Low"==e?"Low":void 0},getColour(e){return"Medium"==e?"bg-yellow-medium":"High"==e?"bg-red-high":"Low"==e?"bg-green-low":void 0},saveChanges(){let e;const t=this.cells.findIndex((e=>e.action_name===this.actionName));-1!==t?(this.cells[t].dueDate=this.dueDate,this.cells[t].priority=this.priority,this.cells[t].progress=this.progress):(e={action_name:this.actionName,dueDate:this.dueDate,priority:this.priority,progress:this.progress},this.cells.push(e)),this.cells.forEach((e=>{const t=new Date(e.dueDate);e.daysLeft=this.getDaysLeft(t)})),this.actionName=null,this.dueDate=null,this.priority=null,this.progress=null,this.showModal=!1},updateDaysLeft(){if(this.dueDate){new Date;const e=new Date(this.dueDate);this.daysLeft=this.getDaysLeft(e)}else this.daysLeft=null},getDaysLeft(e){const t=new Date,o=e.getTime()-t.getTime(),n=Math.ceil(o/864e5);return n},editAction(e){this.actionName=e.action_name,this.dueDate=e.dueDate,this.priority=e.priority,this.progress=e.progress,this.showModal=!0}},mounted(){this.cells.forEach((e=>{const t=new Date(e.dueDate);e.daysLeft=this.getDaysLeft(t)})),this.changeText()}};const lt=(0,f.Z)(rt,[["render",Ve]]);var at=lt;const it=(0,s.uE)('<div class="grid grid-cols-4 gap-16" style="margin-left:20vw;margin-bottom:10vh;"><div class="p-4 rounded-lg drop-shadow-lg" style="background:conic-gradient( #F2BD4A 0deg 90deg, rgb(245, 245, 245) 90deg 270deg, #F2BD4A 270deg 360deg);"><div class="grid grid-rows-2 gap-4"><div class="row-span-1" style="font-size:2vw;font-weight:bold;">Due</div><div class="row-span-1" style="font-size:1.7vw;">210</div></div></div><div class="p-4 rounded-lg drop-shadow-lg" style="background:conic-gradient( #4F9D69 0deg 90deg, rgb(245, 245, 245) 90deg 270deg, #4F9D69 270deg 360deg);"><div class="grid grid-rows-2 gap-4"><div class="row-span-1" style="font-size:2vw;font-weight:bold;">Paid</div><div class="row-span-1" style="font-size:1.7vw;">423</div></div></div><div class="p-4 rounded-lg drop-shadow-lg" style="background:conic-gradient( #DB6154 0deg 90deg, rgb(245, 245, 245) 90deg 270deg, #DB6154 270deg 360deg);"><div class="grid grid-rows-2 gap-4"><div class="row-span-1" style="font-size:2vw;font-weight:bold;">Late</div><div class="row-span-1" style="font-size:1.7vw;">122</div></div></div></div>',1),dt={class:"grid grid-rows-1",style:{"margin-left":"10vw"}},ct={class:"flex flex-row"},ut={class:"basis-1/2",style:{"margin-left":"10vw","margin-top":"10vh"}},pt={class:"basis-1/2",style:{"margin-right":"10vw"}};function ht(e,t,o,n,r,l){const a=(0,s.up)("BarChart"),i=(0,s.up)("DoughnutChart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[it,(0,s._)("div",dt,[(0,s._)("div",ct,[(0,s._)("div",ut,[(0,s.Wm)(a,{style:{"max-width":"25vw","max-height":"50vw"}})]),(0,s._)("div",pt,[(0,s.Wm)(i,{style:{"max-width":"25vw","max-height":"25vw"}})])])])],64)}function mt(e,t,o,n,r,l){const a=(0,s.up)("Bar");return(0,s.wg)(),(0,s.j4)(a,{options:r.chartOptions,data:r.chartData},null,8,["options","data"])}var gt=o(5866),bt=o(9646);bt.kL.register(bt.Dx,bt.u,bt.De,bt.ZL,bt.uw,bt.f$);var ft={name:"BarChart",components:{Bar:gt.$Q},data(){return{chartData:{labels:[""],datasets:[{label:"Due",data:[210],backgroundColor:"#F2BD4A"},{label:"Paid",data:[423],backgroundColor:"#4F9D69"},{label:"Late",data:[122],backgroundColor:"#DB6154"}]},chartOptions:{responsive:!0,plugins:{legend:{display:!1}}}}}};const wt=(0,f.Z)(ft,[["render",mt]]);var vt=wt;function xt(e,t,o,n,r,l){const a=(0,s.up)("Doughnut");return(0,s.wg)(),(0,s.j4)(a,{options:r.chartOptions,data:r.chartData},null,8,["options","data"])}bt.kL.register(bt.qi,bt.u,bt.De);var yt={name:"DoughtnutChart",components:{Doughnut:gt.$I},data(){return{chartData:{labels:["Due","Paid","Late"],datasets:[{data:[210,423,122]}]},chartOptions:{backgroundColor:["#F2BD4A","#4F9D69","#DB6154"],responsive:!0,plugins:{legend:{display:!1}}}}}};const _t=(0,f.Z)(yt,[["render",xt]]);var kt=_t,Dt={name:"InvoiceOverview",components:{BarChart:vt,DoughnutChart:kt}};const Ct=(0,f.Z)(Dt,[["render",ht]]);var Pt=Ct;function jt(e,t,o,n,r,l){const a=(0,s.up)("MapboxLayer"),i=(0,s.up)("MapboxMap");return(0,s.wg)(),(0,s.j4)(i,{style:{height:"600px",width:"50%","align-self":"center"},"access-token":"pk.eyJ1IjoienliZXJ3b2xmaSIsImEiOiJjbGs5cXpkZG0wem5nM3NydHhvdTFrMmJsIn0.FqnLAPPbIlRIaXNZakf-GQ","map-style":"mapbox://styles/mapbox/streets-v11",center:n.mapCenter,zoom:5},{default:(0,s.w5)((()=>[(0,s.Wm)(a,{id:"counties",type:"fill",source:"../../public/uk_regions.geojson"})])),_:1},8,["center"])}var Lt=o(4870),Mt=o(1949),It={name:"mapComp",components:{MapboxMap:Mt.JS,MapboxMarker:Mt.Mg,MapboxLayer:Mt.h6},setup(){const e=(0,Lt.iH)([-1.486052,52.830348]);return{mapCenter:e}}};const Bt=(0,f.Z)(It,[["render",jt]]);var zt=Bt,Nt={name:"App",components:{Invoice:v,navBar:de,footerComp:be,BulletinGrid:oe,ActionTable:at,InvoiceOverview:Pt,mapComp:zt}};const Tt=(0,f.Z)(Nt,[["render",d]]);var At=Tt,Ot=o(3494),Wt=o(7749),Ht=o(8539);Ot.vI.add(Ht.Lad),(0,n.ri)(At).component("font-awesome-icon",Wt.GN).mount("#app")}},t={};function o(n){var s=t[n];if(void 0!==s)return s.exports;var r=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.loaded=!0,r.exports}o.m=e,function(){var e=[];o.O=function(t,n,s,r){if(!n){var l=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],r=e[c][2];for(var a=!0,i=0;i<n.length;i++)(!1&r||l>=r)&&Object.keys(o.O).every((function(e){return o.O[e](n[i])}))?n.splice(i--,1):(a=!1,r<l&&(l=r));if(a){e.splice(c--,1);var d=s();void 0!==d&&(t=d)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,s,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,r,l=n[0],a=n[1],i=n[2],d=0;if(l.some((function(t){return 0!==e[t]}))){for(s in a)o.o(a,s)&&(o.m[s]=a[s]);if(i)var c=i(o)}for(t&&t(n);d<l.length;d++)r=l[d],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(c)},n=self["webpackChunk_55group_work_experince_2023"]=self["webpackChunk_55group_work_experince_2023"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(4055)}));n=o.O(n)})();
//# sourceMappingURL=app.9bee744f.js.map