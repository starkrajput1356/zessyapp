import{a as ae}from"./chunk-25XDLMBK.js";import{i as oe}from"./chunk-A4YWZLFW.js";import{b as K,c as Z,e as J,h as X,j as ee,q as te,r as ne,s as ie,y as re}from"./chunk-QMEZJ6QG.js";import{Aa as d,Ab as D,C as M,G as $,H as P,Ja as T,Jb as j,Ka as t,Kb as H,L as p,La as f,M as _,Ma as y,Qa as v,Qb as Q,Ra as C,Sa as w,Tb as A,V as R,_a as I,ab as N,ba as s,bb as k,ca as E,ka as h,lb as W,ma as q,na as m,nb as G,ob as B,pa as b,qa as z,sa as n,ta as e,ua as V,vb as Y,ya as x,za as u,zb as U}from"./chunk-XH7KITLT.js";import{a as L,f as F}from"./chunk-EQDQRRRY.js";function de(l,i){if(l&1){let r=x();n(0,"button",19),u("click",function(){let a=p(r).$implicit,c=d();return _(c.switchTab(a.id))}),n(1,"span",20),t(2),e(),n(3,"span",21),t(4),e()()}if(l&2){let r=i.$implicit,o=d();b("active",o.activeTab===r.id),q("aria-selected",o.activeTab===r.id),s(2),f(r.icon),s(2),f(r.label)}}function ce(l,i){l&1&&(n(0,"span",46),t(1,"\u{1F451} Premium"),e())}function me(l,i){if(l&1){let r=x();n(0,"div",35),u("click",function(){let a=p(r).$implicit,c=d(2);return _(c.selectTemplate(a))}),n(1,"div",36),t(2),e(),n(3,"div",37)(4,"h3",38),t(5),h(6,ce,2,0,"span",39),e(),n(7,"p",40),t(8),e(),n(9,"div",41)(10,"span",42),t(11),e(),n(12,"span",43),t(13),e()()(),n(14,"div",44)(15,"button",45),t(16),e()()()}if(l&2){let r=i.$implicit;b("premium",r.isPremium),s(2),f(r.icon),s(3),y(" ",r.name," "),s(),m("ngIf",r.isPremium),s(2),f(r.description),s(2),z(r.complexity),s(),y(" ",r.complexity==="simple"?"\u26A1 Simple":r.complexity==="moderate"?"\u{1F4DD} Moderate":"\u2699\uFE0F Complex"," "),s(2),y("",r.fields.length," fields"),s(3),y(" ",r.isPremium?"Get Premium":"Use Template"," ")}}function pe(l,i){if(l&1){let r=x();n(0,"div",22)(1,"div",23)(2,"div",24)(3,"div",25)(4,"input",26),w("ngModelChange",function(a){p(r);let c=d();return C(c.searchQuery,a)||(c.searchQuery=a),_(a)}),u("input",function(){p(r);let a=d();return _(a.filterTemplates())}),e(),n(5,"span",27),t(6,"\u{1F50D}"),e()(),n(7,"div",28)(8,"button",29),u("click",function(){p(r);let a=d();return a.selectedCategory="all",_(a.filterTemplates())}),t(9," All Documents "),e(),n(10,"button",29),u("click",function(){p(r);let a=d();return a.selectedCategory="business",_(a.filterTemplates())}),t(11," \u{1F3E2} Business "),e(),n(12,"button",29),u("click",function(){p(r);let a=d();return a.selectedCategory="employment",_(a.filterTemplates())}),t(13," \u{1F454} Employment "),e(),n(14,"button",29),u("click",function(){p(r);let a=d();return a.selectedCategory="personal",_(a.filterTemplates())}),t(15," \u{1F464} Personal "),e(),n(16,"button",29),u("click",function(){p(r);let a=d();return a.selectedCategory="real-estate",_(a.filterTemplates())}),t(17," \u{1F3E0} Real Estate "),e()()(),n(18,"div",30),h(19,me,17,11,"div",31),e(),n(20,"div",32)(21,"div",33),t(22,"\u26A0\uFE0F"),e(),n(23,"div",34)(24,"h4"),t(25,"Legal Disclaimer"),e(),n(26,"p"),t(27,"These templates are for informational purposes only and do not constitute legal advice. We recommend consulting with a licensed attorney for your specific situation, especially for complex legal matters."),e()()()()()}if(l&2){let r=d();s(4),v("ngModel",r.searchQuery),s(4),b("active",r.selectedCategory==="all"),s(2),b("active",r.selectedCategory==="business"),s(2),b("active",r.selectedCategory==="employment"),s(2),b("active",r.selectedCategory==="personal"),s(2),b("active",r.selectedCategory==="real-estate"),s(3),m("ngForOf",r.filteredTemplates)}}function _e(l,i){l&1&&(n(0,"span",73),t(1,"*"),e())}function ue(l,i){if(l&1){let r=x();n(0,"input",74),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),e()}if(l&2){let r=d().$implicit,o=d(3);m("type",r.type),v("ngModel",o.formData[r.id]),m("placeholder",r.placeholder)}}function ge(l,i){if(l&1){let r=x();n(0,"input",75),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),e()}if(l&2){let r=d().$implicit,o=d(3);v("ngModel",o.formData[r.id]),m("placeholder",r.placeholder)}}function fe(l,i){if(l&1){let r=x();n(0,"input",76),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),e()}if(l&2){let r=d().$implicit,o=d(3);v("ngModel",o.formData[r.id])}}function xe(l,i){if(l&1){let r=x();n(0,"textarea",77),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),e()}if(l&2){let r=d().$implicit,o=d(3);v("ngModel",o.formData[r.id]),m("placeholder",r.placeholder)}}function he(l,i){if(l&1&&(n(0,"option",81),t(1),e()),l&2){let r=i.$implicit;m("value",r),s(),f(r)}}function ye(l,i){if(l&1){let r=x();n(0,"select",78),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),n(1,"option",79),t(2,"Select an option"),e(),h(3,he,2,2,"option",80),e()}if(l&2){let r=d().$implicit,o=d(3);v("ngModel",o.formData[r.id]),s(3),m("ngForOf",r.options)}}function be(l,i){if(l&1){let r=x();n(0,"label",82)(1,"input",83),w("ngModelChange",function(a){p(r);let c=d().$implicit,g=d(3);return C(g.formData[c.id],a)||(g.formData[c.id]=a),_(a)}),e(),n(2,"span"),t(3),e()()}if(l&2){let r=d().$implicit,o=d(3);s(),v("ngModel",o.formData[r.id]),s(2),f(r.placeholder||"Yes")}}function ve(l,i){if(l&1&&(n(0,"div",84),t(1),e()),l&2){let r=d().$implicit;s(),y(" \u{1F4A1} ",r.helpText," ")}}function Ce(l,i){if(l&1&&(n(0,"div",63)(1,"label",64),t(2),h(3,_e,2,0,"span",65),e(),h(4,ue,1,3,"input",66)(5,ge,1,2,"input",67)(6,fe,1,1,"input",68)(7,xe,1,2,"textarea",69)(8,ye,4,2,"select",70)(9,be,4,2,"label",71)(10,ve,2,1,"div",72),e()),l&2){let r=i.$implicit;s(2),y(" ",r.label," "),s(),m("ngIf",r.required),s(),m("ngIf",r.type==="text"||r.type==="email"),s(),m("ngIf",r.type==="number"||r.type==="currency"),s(),m("ngIf",r.type==="date"),s(),m("ngIf",r.type==="textarea"),s(),m("ngIf",r.type==="select"),s(),m("ngIf",r.type==="checkbox"),s(),m("ngIf",r.helpText)}}function we(l,i){if(l&1){let r=x();n(0,"div",48)(1,"div",49)(2,"div",50)(3,"span",51),t(4),e(),n(5,"div")(6,"h2"),t(7),e(),n(8,"p"),t(9),e()()(),n(10,"button",52),u("click",function(){p(r);let a=d(2);return _(a.switchTab("templates"))}),t(11,"\u2190 Back to Templates"),e()(),n(12,"div",53)(13,"div",54)(14,"h3"),t(15,"Document Details"),e(),n(16,"p",55),t(17,"Fill in the information below to customize your document"),e(),n(18,"div",56),h(19,Ce,11,9,"div",57),e()(),n(20,"div",58)(21,"div",59)(22,"h4"),t(23,"Ready to Generate?"),e(),n(24,"p"),t(25,"Review your information and generate your legal document"),e(),n(26,"button",60),u("click",function(){p(r);let a=d(2);return _(a.generateDocument())}),t(27),e(),n(28,"div",61)(29,"strong"),t(30,"Required fields:"),e(),t(31," Fields marked with * must be filled "),e(),n(32,"div",62)(33,"h5"),t(34,"What you'll get:"),e(),n(35,"p"),t(36),e()()()()()()}if(l&2){let r=d(2);s(4),f(r.selectedTemplate.icon),s(3),f(r.selectedTemplate.name),s(2),f(r.selectedTemplate.description),s(10),m("ngForOf",r.selectedTemplate.fields),s(7),m("disabled",r.isGenerating),s(),y(" ",r.isGenerating?"\u23F3 Generating...":"\u26A1 Generate Document"," "),s(9),f(r.selectedTemplate.preview)}}function Ee(l,i){if(l&1){let r=x();n(0,"div",85)(1,"div",86),t(2,"\u{1F4C4}"),e(),n(3,"h3"),t(4,"No Template Selected"),e(),n(5,"p"),t(6,"Choose a template to start creating your document"),e(),n(7,"button",87),u("click",function(){p(r);let a=d(2);return _(a.switchTab("templates"))}),t(8,"Browse Templates"),e()()}}function De(l,i){if(l&1&&(n(0,"div",22),h(1,we,37,7,"div",47)(2,Ee,9,0,"ng-template",null,0,k),e()),l&2){let r=T(3),o=d();s(),m("ngIf",o.selectedTemplate)("ngIfElse",r)}}function Me(l,i){if(l&1){let r=x();n(0,"div",89)(1,"div",90)(2,"div",91)(3,"h2"),t(4),e(),n(5,"p"),t(6),I(7,"date"),e()(),n(8,"div",92)(9,"button",93),u("click",function(){p(r);let a=d(2);return _(a.switchTab("editor"))}),t(10," \u270F\uFE0F Edit "),e(),n(11,"button",93),u("click",function(){p(r);let a=d(2);return _(a.downloadDocument())}),t(12," \u{1F4E5} Download "),e(),n(13,"button",93),u("click",function(){p(r);let a=d(2);return _(a.printDocument())}),t(14," \u{1F5A8}\uFE0F Print "),e(),n(15,"button",87),u("click",function(){p(r);let a=d(2);return _(a.saveDocument())}),t(16," \u{1F4BE} Save "),e()()(),n(17,"div",94)(18,"div",95)(19,"pre",96),t(20),e()()(),n(21,"div",97)(22,"h3"),t(23,"\u{1F4DD} Next Steps"),e(),n(24,"ul")(25,"li")(26,"strong"),t(27,"Review Carefully:"),e(),t(28," Read through the entire document to ensure accuracy"),e(),n(29,"li")(30,"strong"),t(31,"Legal Review:"),e(),t(32," Consider having an attorney review for your specific situation"),e(),n(33,"li")(34,"strong"),t(35,"Signatures:"),e(),t(36," Ensure all parties sign in the presence of witnesses if required"),e(),n(37,"li")(38,"strong"),t(39,"Notarization:"),e(),t(40," Some documents (like Powers of Attorney) may require notarization"),e(),n(41,"li")(42,"strong"),t(43,"Keep Copies:"),e(),t(44," Maintain copies for all parties and relevant authorities"),e()()()()}if(l&2){let r=d(2);s(4),f(r.generatedDocument.templateName),s(2),y("Generated on ",N(7,3,r.generatedDocument.createdDate,"full"),""),s(14),f(r.generatedDocument.content)}}function Pe(l,i){if(l&1){let r=x();n(0,"div",85)(1,"div",86),t(2,"\u{1F441}\uFE0F"),e(),n(3,"h3"),t(4,"No Document Preview"),e(),n(5,"p"),t(6,"Generate a document to see the preview here"),e(),n(7,"button",87),u("click",function(){p(r);let a=d(2);return _(a.switchTab("editor"))}),t(8,"Go to Editor"),e()()}}function Oe(l,i){if(l&1&&(n(0,"div",22),h(1,Me,45,6,"div",88)(2,Pe,9,0,"ng-template",null,1,k),e()),l&2){let r=T(3),o=d();s(),m("ngIf",o.generatedDocument)("ngIfElse",r)}}function Se(l,i){if(l&1){let r=x();n(0,"div",104)(1,"div",105),t(2,"\u{1F4C4}"),e(),n(3,"div",106)(4,"h4"),t(5),e(),n(6,"p",107),t(7),e(),n(8,"div",108)(9,"span",109),t(10),e(),n(11,"span",110),t(12),I(13,"date"),e()()(),n(14,"div",111)(15,"button",112),u("click",function(){let a=p(r).$implicit,c=d(3);return _(c.loadSavedDocument(a))}),t(16,"\u{1F441}\uFE0F"),e(),n(17,"button",113),u("click",function(){let a=p(r).$implicit,c=d(3);return _(c.deleteSavedDocument(a.id))}),t(18,"\u{1F5D1}\uFE0F"),e()()()}if(l&2){let r=i.$implicit;s(5),f(r.name),s(2),f(r.preview),s(3),f(r.category),s(2),f(N(13,4,r.createdDate,"MMM d, y"))}}function Te(l,i){if(l&1&&(n(0,"div",102),h(1,Se,19,7,"div",103),e()),l&2){let r=d(2);s(),m("ngForOf",r.savedDocuments)}}function Ie(l,i){if(l&1){let r=x();n(0,"div",85)(1,"div",86),t(2,"\u{1F4BE}"),e(),n(3,"h3"),t(4,"No Saved Documents"),e(),n(5,"p"),t(6,"Documents you generate and save will appear here"),e(),n(7,"button",87),u("click",function(){p(r);let a=d(2);return _(a.switchTab("templates"))}),t(8,"Create Document"),e()()}}function Ne(l,i){if(l&1&&(n(0,"div",22)(1,"div",98)(2,"div",99)(3,"h2"),t(4,"My Documents"),e(),n(5,"p"),t(6,"Your saved legal documents"),e()(),h(7,Te,2,1,"div",100)(8,Ie,9,0,"div",101),e()()),l&2){let r=d();s(7),m("ngIf",r.savedDocuments.length>0),s(),m("ngIf",r.savedDocuments.length===0)}}function ke(l,i){if(l&1){let r=x();n(0,"div",22)(1,"div",114)(2,"div",115)(3,"h2"),t(4),e(),n(5,"p"),t(6,"Everything you need to know about creating and using legal documents"),e()(),n(7,"div",116)(8,"h3"),t(9,"\u{1F4C4} Non-Disclosure Agreement (NDA)"),e(),n(10,"p")(11,"strong"),t(12,"Purpose:"),e(),t(13," Protects confidential information shared between parties"),e(),n(14,"p")(15,"strong"),t(16,"When to Use:"),e()(),n(17,"ul")(18,"li"),t(19,"Before discussing business ideas with potential partners or investors"),e(),n(20,"li"),t(21,"When hiring employees or contractors who will access sensitive information"),e(),n(22,"li"),t(23,"Before sharing proprietary technology, formulas, or processes"),e()(),n(24,"p")(25,"strong"),t(26,"Key Components:"),e()(),n(27,"ul")(28,"li"),t(29,"Definition of confidential information"),e(),n(30,"li"),t(31,"Obligations of receiving party"),e(),n(32,"li"),t(33,"Duration of confidentiality (typically 2-5 years)"),e(),n(34,"li"),t(35,"Exclusions (publicly available information, independently developed)"),e()(),n(36,"div",117)(37,"strong"),t(38,"\u{1F4A1} Pro Tip:"),e(),t(39," Use mutual NDAs when both parties will share confidential information. Be specific about what constitutes confidential information. "),e()(),n(40,"div",116)(41,"h3"),t(42,"\u{1F468}\u200D\u{1F4BC} Independent Contractor Agreement"),e(),n(43,"p")(44,"strong"),t(45,"Purpose:"),e(),t(46," Defines relationship between client and contractor (not employee)"),e(),n(47,"p")(48,"strong"),t(49,"Why It Matters:"),e()(),n(50,"ul")(51,"li"),t(52,"Clarifies independent contractor status (avoids employment tax issues)"),e(),n(53,"li"),t(54,"Specifies scope of work and deliverables"),e(),n(55,"li"),t(56,"Protects intellectual property rights"),e()(),n(57,"p")(58,"strong"),t(59,"Essential Elements:"),e()(),n(60,"ul")(61,"li"),t(62,"Detailed scope of work"),e(),n(63,"li"),t(64,"Payment terms and schedule"),e(),n(65,"li"),t(66,'IP ownership (typically "work for hire" clause)'),e(),n(67,"li"),t(68,"Termination conditions"),e(),n(69,"li"),t(70,"Indemnification and liability"),e()(),n(71,"div",118)(72,"strong"),t(73,"\u26A0\uFE0F Warning:"),e(),t(74," Misclassifying employees as contractors can result in significant tax penalties. Ensure genuine contractor relationship exists. "),e()(),n(75,"div",116)(76,"h3"),t(77,"\u26A1 Power of Attorney (POA)"),e(),n(78,"p")(79,"strong"),t(80,"Purpose:"),e(),t(81," Grants legal authority for someone to act on your behalf"),e(),n(82,"p")(83,"strong"),t(84,"Types:"),e()(),n(85,"ul")(86,"li")(87,"strong"),t(88,"General POA:"),e(),t(89," Broad authority for all financial/legal matters"),e(),n(90,"li")(91,"strong"),t(92,"Limited POA:"),e(),t(93," Specific tasks only (e.g., selling a property)"),e(),n(94,"li")(95,"strong"),t(96,"Durable POA:"),e(),t(97," Remains valid if you become incapacitated"),e(),n(98,"li")(99,"strong"),t(100,"Healthcare POA:"),e(),t(101," Medical decisions only"),e()(),n(102,"p")(103,"strong"),t(104,"When You Need It:"),e()(),n(105,"ul")(106,"li"),t(107,"Estate planning (in case of incapacity)"),e(),n(108,"li"),t(109,"Military deployment"),e(),n(110,"li"),t(111,"Real estate transactions when you can't be present"),e(),n(112,"li"),t(113,"Managing affairs for elderly parents"),e()(),n(114,"div",119)(115,"strong"),t(116,"\u{1F4CC} Important:"),e(),t(117," POAs must be notarized in most states. Choose your agent carefully \u2013 they'll have significant authority. Review and update periodically. "),e()(),n(118,"div",116)(119,"h3"),t(120,"\u{1F4DC} Last Will and Testament"),e(),n(121,"p")(122,"strong"),t(123,"Purpose:"),e(),t(124," Specifies how your estate should be distributed after death"),e(),n(125,"p")(126,"strong"),t(127,"What It Covers:"),e()(),n(128,"ul")(129,"li"),t(130,"Distribution of assets to beneficiaries"),e(),n(131,"li"),t(132,"Appointment of executor (estate administrator)"),e(),n(133,"li"),t(134,"Guardianship of minor children"),e(),n(135,"li"),t(136,"Funeral and burial wishes"),e()(),n(137,"p")(138,"strong"),t(139,"Legal Requirements:"),e()(),n(140,"ul")(141,"li"),t(142,"Must be 18+ years old and of sound mind"),e(),n(143,"li"),t(144,"Written and signed by testator (you)"),e(),n(145,"li"),t(146,"Witnessed by 2-3 people (varies by state) who aren't beneficiaries"),e(),n(147,"li"),t(148,'Some states allow notarized "self-proving" wills'),e()(),n(149,"div",118)(150,"strong"),t(151,"\u26A0\uFE0F Critical:"),e(),t(152," Wills go through probate (court process). Consider consulting an estate attorney for large estates, blended families, or complex situations. "),e()(),n(153,"div",116)(154,"h3"),t(155,"\u{1F3E0} Residential Lease Agreement"),e(),n(156,"p")(157,"strong"),t(158,"Purpose:"),e(),t(159," Legal contract between landlord and tenant for property rental"),e(),n(160,"p")(161,"strong"),t(162,"Must Include:"),e()(),n(163,"ul")(164,"li"),t(165,"Names of all parties (landlord, tenants)"),e(),n(166,"li"),t(167,"Property address and description"),e(),n(168,"li"),t(169,"Lease term (start/end dates)"),e(),n(170,"li"),t(171,"Rent amount and due date"),e(),n(172,"li"),t(173,"Security deposit amount"),e(),n(174,"li"),t(175,"Maintenance responsibilities"),e(),n(176,"li"),t(177,"Rules (pets, smoking, guests)"),e()(),n(178,"p")(179,"strong"),t(180,"State-Specific Requirements:"),e()(),n(181,"ul")(182,"li"),t(183,"Security deposit limits (typically 1-2 months rent)"),e(),n(184,"li"),t(185,"Notice periods for entry and termination"),e(),n(186,"li"),t(187,"Required disclosures (lead paint, mold, etc.)"),e()()(),n(188,"div",116)(189,"h3"),t(190,"\u2696\uFE0F When to Hire an Attorney"),e(),n(191,"p")(192,"strong"),t(193,"Templates Are Great For:"),e()(),n(194,"ul")(195,"li"),t(196,"Simple, straightforward situations"),e(),n(197,"li"),t(198,"Getting started quickly"),e(),n(199,"li"),t(200,"Understanding legal document structure"),e(),n(201,"li"),t(202,"Low-risk transactions"),e()(),n(203,"p")(204,"strong"),t(205,"Consult an Attorney For:"),e()(),n(206,"ul")(207,"li"),t(208,"High-value transactions (>$10,000)"),e(),n(209,"li"),t(210,"Complex family situations (blended families, special needs children)"),e(),n(211,"li"),t(212,"Business formation and partnership agreements"),e(),n(213,"li"),t(214,"Employment terminations or disputes"),e(),n(215,"li"),t(216,"Real estate with title issues"),e(),n(217,"li"),t(218,"Anything you don't fully understand"),e()(),n(219,"div",120)(220,"h4"),t(221,"\u{1F4B0} Cost Comparison"),e(),n(222,"table",121)(223,"tr")(224,"th"),t(225,"Document"),e(),n(226,"th"),t(227,"Attorney Cost"),e(),n(228,"th"),t(229,"Template Cost"),e(),n(230,"th"),t(231,"Savings"),e()(),n(232,"tr")(233,"td"),t(234,"NDA"),e(),n(235,"td"),t(236,"$300-$500"),e(),n(237,"td"),t(238,"Free"),e(),n(239,"td"),t(240,"$300-$500"),e()(),n(241,"tr")(242,"td"),t(243,"Contractor Agreement"),e(),n(244,"td"),t(245,"$500-$1000"),e(),n(246,"td"),t(247,"Free"),e(),n(248,"td"),t(249,"$500-$1000"),e()(),n(250,"tr")(251,"td"),t(252,"Power of Attorney"),e(),n(253,"td"),t(254,"$300-$500"),e(),n(255,"td"),t(256,"Free"),e(),n(257,"td"),t(258,"$300-$500"),e()(),n(259,"tr")(260,"td"),t(261,"Simple Will"),e(),n(262,"td"),t(263,"$500-$2000"),e(),n(264,"td"),t(265,"Free*"),e(),n(266,"td"),t(267,"$500-$2000"),e()(),n(268,"tr")(269,"td"),t(270,"Lease Agreement"),e(),n(271,"td"),t(272,"$300-$800"),e(),n(273,"td"),t(274,"Free"),e(),n(275,"td"),t(276,"$300-$800"),e()()(),n(277,"p",122),t(278,"*Complex wills should be reviewed by an attorney"),e()()(),n(279,"div",123)(280,"h3"),t(281,"Need Professional Legal Services?"),e(),n(282,"p"),t(283,"Get attorney review, e-signature services, state-specific customization, or access to premium templates."),e(),n(284,"button",124),u("click",function(){p(r);let a=d();return _(a.requestAdvancedFeatures())}),t(285," \u{1F4DE} Contact Legal Services "),e()()()()}if(l&2){let r=d();s(4),y("Legal Documents Guide ",r.currentYear,"")}}var O=class l{constructor(i,r,o,a,c,g){this.seoService=i;this.meta=r;this.title=o;this.router=a;this.document=c;this.platformId=g}activeTab="templates";tabs=[{id:"templates",label:"Templates",icon:"\u{1F4C4}"},{id:"editor",label:"Editor",icon:"\u270F\uFE0F"},{id:"preview",label:"Preview",icon:"\u{1F441}\uFE0F"},{id:"saved",label:"My Documents",icon:"\u{1F4BE}"},{id:"guide",label:"Legal Guide",icon:"\u2696\uFE0F"}];templates=[];filteredTemplates=[];selectedCategory="all";searchQuery="";selectedTemplate=null;formData={};generatedDocument=null;isGenerating=!1;savedDocuments=[];Math=Math;currentYear=new Date().getFullYear();ngOnInit(){this.setupAdvancedSEO(),this.initializeTemplates(),this.loadSavedDocuments(),this.filterTemplates()}ngOnDestroy(){this.saveSavedDocuments()}initializeTemplates(){this.templates=[{id:"nda",name:"Non-Disclosure Agreement (NDA)",category:"business",description:"Confidentiality agreement for business relationships and employment",icon:"\u{1F910}",complexity:"simple",fields:this.getNDAFields(),preview:"Standard mutual or unilateral NDA protecting confidential information"},{id:"independent-contractor",name:"Independent Contractor Agreement",category:"employment",description:"Contract for freelancers and independent contractors",icon:"\u{1F468}\u200D\u{1F4BC}",complexity:"moderate",fields:this.getContractorFields(),preview:"Comprehensive agreement defining contractor relationship and deliverables"},{id:"operating-agreement",name:"LLC Operating Agreement",category:"business",description:"Foundational document for Limited Liability Companies",icon:"\u{1F3E2}",complexity:"complex",fields:this.getOperatingAgreementFields(),preview:"Complete LLC operating agreement with ownership and management structure",isPremium:!0},{id:"power-of-attorney",name:"Power of Attorney",category:"personal",description:"Legal authority for someone to act on your behalf",icon:"\u26A1",complexity:"moderate",fields:this.getPowerOfAttorneyFields(),preview:"General or limited power of attorney for financial or healthcare decisions"},{id:"last-will",name:"Last Will and Testament",category:"personal",description:"Document specifying estate distribution after death",icon:"\u{1F4DC}",complexity:"complex",fields:this.getWillFields(),preview:"Legally binding will with executor designation and beneficiary details",isPremium:!0},{id:"lease-agreement",name:"Residential Lease Agreement",category:"real-estate",description:"Rental agreement for residential properties",icon:"\u{1F3E0}",complexity:"moderate",fields:this.getLeaseFields(),preview:"State-compliant lease with terms, rent, and tenant obligations"},{id:"bill-of-sale",name:"Bill of Sale",category:"personal",description:"Document transferring ownership of personal property",icon:"\u{1F4B0}",complexity:"simple",fields:this.getBillOfSaleFields(),preview:"Simple transfer document for vehicles, equipment, or other property"},{id:"employment-offer",name:"Employment Offer Letter",category:"employment",description:"Formal job offer with terms and conditions",icon:"\u{1F4BC}",complexity:"simple",fields:this.getEmploymentOfferFields(),preview:"Professional offer letter with salary, benefits, and start date"}]}getNDAFields(){return[{id:"ndaType",label:"NDA Type",type:"select",options:["Mutual (Both parties)","Unilateral (One-way)"],required:!0},{id:"disclosingParty",label:"Disclosing Party Name",type:"text",placeholder:"Company or Individual Name",required:!0},{id:"receivingParty",label:"Receiving Party Name",type:"text",placeholder:"Company or Individual Name",required:!0},{id:"effectiveDate",label:"Effective Date",type:"date",required:!0},{id:"duration",label:"Duration (Years)",type:"number",placeholder:"2",required:!0,helpText:"Typically 2-5 years"},{id:"purpose",label:"Purpose of Disclosure",type:"textarea",placeholder:"Business partnership, employment, etc.",required:!0},{id:"governingLaw",label:"Governing State Law",type:"text",placeholder:"California",required:!0}]}getContractorFields(){return[{id:"clientName",label:"Client/Company Name",type:"text",required:!0},{id:"contractorName",label:"Contractor Name",type:"text",required:!0},{id:"startDate",label:"Start Date",type:"date",required:!0},{id:"endDate",label:"End Date (if applicable)",type:"date",required:!1},{id:"scope",label:"Scope of Work",type:"textarea",placeholder:"Detailed description of services",required:!0},{id:"compensation",label:"Compensation Amount",type:"currency",placeholder:"5000",required:!0},{id:"paymentTerms",label:"Payment Terms",type:"select",options:["Weekly","Bi-weekly","Monthly","Upon completion","Milestone-based"],required:!0},{id:"expenseReimbursement",label:"Expense Reimbursement",type:"select",options:["Yes","No"],required:!0},{id:"confidentiality",label:"Include Confidentiality Clause",type:"checkbox",required:!1},{id:"nonCompete",label:"Include Non-Compete Clause",type:"checkbox",required:!1}]}getOperatingAgreementFields(){return[{id:"llcName",label:"LLC Name",type:"text",required:!0},{id:"state",label:"State of Formation",type:"text",required:!0},{id:"formationDate",label:"Formation Date",type:"date",required:!0},{id:"businessPurpose",label:"Business Purpose",type:"textarea",required:!0},{id:"memberCount",label:"Number of Members",type:"number",required:!0},{id:"managementType",label:"Management Type",type:"select",options:["Member-Managed","Manager-Managed"],required:!0},{id:"fiscalYearEnd",label:"Fiscal Year End",type:"text",placeholder:"December 31",required:!0}]}getPowerOfAttorneyFields(){return[{id:"principalName",label:"Principal Name (You)",type:"text",required:!0},{id:"principalAddress",label:"Principal Address",type:"text",required:!0},{id:"agentName",label:"Agent/Attorney-in-Fact Name",type:"text",required:!0},{id:"agentAddress",label:"Agent Address",type:"text",required:!0},{id:"poaType",label:"Type of Power",type:"select",options:["General","Limited","Durable","Healthcare"],required:!0},{id:"powers",label:"Specific Powers Granted",type:"textarea",placeholder:"Financial decisions, real estate transactions, etc.",required:!0},{id:"effectiveDate",label:"Effective Date",type:"date",required:!0},{id:"durability",label:"Survives Incapacity (Durable)",type:"checkbox",required:!1}]}getWillFields(){return[{id:"testatorName",label:"Your Full Legal Name",type:"text",required:!0},{id:"testatorAddress",label:"Your Address",type:"text",required:!0},{id:"executorName",label:"Executor Name",type:"text",required:!0},{id:"alternateExecutor",label:"Alternate Executor Name",type:"text",required:!1},{id:"beneficiaries",label:"Beneficiaries and Bequests",type:"textarea",placeholder:"List beneficiaries and what they receive",required:!0},{id:"guardianMinors",label:"Guardian for Minor Children (if applicable)",type:"text",required:!1},{id:"residuary",label:"Residuary Beneficiary",type:"text",placeholder:"Who receives remaining estate",required:!0},{id:"funeralWishes",label:"Funeral/Burial Wishes",type:"textarea",required:!1}]}getLeaseFields(){return[{id:"landlordName",label:"Landlord Name",type:"text",required:!0},{id:"tenantName",label:"Tenant Name(s)",type:"text",required:!0},{id:"propertyAddress",label:"Property Address",type:"text",required:!0},{id:"leaseStart",label:"Lease Start Date",type:"date",required:!0},{id:"leaseTerm",label:"Lease Term (Months)",type:"number",placeholder:"12",required:!0},{id:"monthlyRent",label:"Monthly Rent",type:"currency",required:!0},{id:"securityDeposit",label:"Security Deposit",type:"currency",required:!0},{id:"rentDueDay",label:"Rent Due Day of Month",type:"number",placeholder:"1",required:!0},{id:"utilities",label:"Utilities Included",type:"text",placeholder:"Water, trash, etc.",required:!1},{id:"petsAllowed",label:"Pets Allowed",type:"select",options:["Yes","No","With approval"],required:!0},{id:"smokingAllowed",label:"Smoking Allowed",type:"select",options:["Yes","No"],required:!0}]}getBillOfSaleFields(){return[{id:"sellerName",label:"Seller Name",type:"text",required:!0},{id:"buyerName",label:"Buyer Name",type:"text",required:!0},{id:"itemDescription",label:"Item Description",type:"textarea",placeholder:"Detailed description of item being sold",required:!0},{id:"serialNumber",label:"Serial/VIN Number (if applicable)",type:"text",required:!1},{id:"salePrice",label:"Sale Price",type:"currency",required:!0},{id:"saleDate",label:"Date of Sale",type:"date",required:!0},{id:"condition",label:"Condition",type:"select",options:["As-Is","Warranted","New"],required:!0}]}getEmploymentOfferFields(){return[{id:"candidateName",label:"Candidate Name",type:"text",required:!0},{id:"companyName",label:"Company Name",type:"text",required:!0},{id:"positionTitle",label:"Position Title",type:"text",required:!0},{id:"startDate",label:"Start Date",type:"date",required:!0},{id:"salary",label:"Annual Salary",type:"currency",required:!0},{id:"payFrequency",label:"Pay Frequency",type:"select",options:["Weekly","Bi-weekly","Semi-monthly","Monthly"],required:!0},{id:"employmentType",label:"Employment Type",type:"select",options:["Full-time","Part-time"],required:!0},{id:"benefits",label:"Benefits",type:"textarea",placeholder:"Health insurance, 401k, vacation, etc.",required:!1},{id:"reportingTo",label:"Reports To",type:"text",required:!0}]}filterTemplates(){let i=this.templates;if(this.selectedCategory!=="all"&&(i=i.filter(r=>r.category===this.selectedCategory)),this.searchQuery.trim()){let r=this.searchQuery.toLowerCase();i=i.filter(o=>o.name.toLowerCase().includes(r)||o.description.toLowerCase().includes(r))}this.filteredTemplates=i}selectTemplate(i){if(i.isPremium){this.requestAdvancedFeatures();return}this.selectedTemplate=i,this.formData={},i.fields.forEach(r=>{this.formData[r.id]=r.value||""}),this.switchTab("editor")}generateDocument(){return F(this,null,function*(){if(!this.selectedTemplate)return;let i=this.selectedTemplate.fields.filter(o=>o.required&&!this.formData[o.id]).map(o=>o.label);if(i.length>0){alert(`Please fill in required fields: ${i.join(", ")}`);return}this.isGenerating=!0,yield this.delay(1500);let r=this.generateDocumentContent(this.selectedTemplate,this.formData);this.generatedDocument={id:this.generateId(),templateId:this.selectedTemplate.id,templateName:this.selectedTemplate.name,content:r,formData:L({},this.formData),createdDate:new Date,lastModified:new Date},this.isGenerating=!1,this.switchTab("preview")})}generateDocumentContent(i,r){let a={nda:this.generateNDA,"independent-contractor":this.generateContractorAgreement,"power-of-attorney":this.generatePowerOfAttorney,"lease-agreement":this.generateLeaseAgreement,"bill-of-sale":this.generateBillOfSale,"employment-offer":this.generateEmploymentOffer}[i.id];return a?a.call(this,r):this.generateGenericDocument(i,r)}generateNDA(i){let r=i.ndaType?.includes("Mutual");return`
NON-DISCLOSURE AGREEMENT

This Non-Disclosure Agreement ("Agreement") is entered into as of ${this.formatDate(i.effectiveDate)} (the "Effective Date").

BETWEEN:

${i.disclosingParty} ("${r?"Party 1":"Disclosing Party"}")

AND:

${i.receivingParty} ("${r?"Party 2":"Receiving Party"}")

WHEREAS, the parties wish to explore a business relationship concerning: ${i.purpose}

NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the parties agree as follows:

1. DEFINITION OF CONFIDENTIAL INFORMATION
"Confidential Information" means any information, technical data, or know-how disclosed by one party to the other, including but not limited to: business plans, financial information, customer lists, trade secrets, proprietary processes, and any information marked as confidential.

2. OBLIGATIONS OF RECEIVING PARTY
The Receiving Party agrees to:
   a) Hold and maintain the Confidential Information in strict confidence;
   b) Not disclose the Confidential Information to any third parties without prior written consent;
   c) Use the Confidential Information solely for the Purpose stated above;
   d) Protect the Confidential Information using the same degree of care as it uses for its own confidential information;

3. EXCLUSIONS
Confidential Information does not include information that:
   a) Was publicly available prior to disclosure;
   b) Becomes publicly available through no breach of this Agreement;
   c) Was rightfully received from a third party without breach of any confidentiality obligation;
   d) Was independently developed without use of the Confidential Information;

4. TERM
This Agreement shall remain in effect for ${i.duration} years from the Effective Date. The confidentiality obligations shall survive termination for an additional ${i.duration} years.

5. RETURN OF MATERIALS
Upon termination or request, all materials containing Confidential Information shall be returned or destroyed, with written certification of destruction if requested.

6. NO LICENSE
Nothing in this Agreement grants any license or rights to intellectual property, except as necessary to evaluate the Purpose stated above.

7. REMEDIES
The parties acknowledge that breach of this Agreement may cause irreparable harm, for which monetary damages may be an inadequate remedy. Accordingly, injunctive relief may be sought in addition to other available remedies.

8. GOVERNING LAW
This Agreement shall be governed by the laws of the State of ${i.governingLaw}, without regard to conflict of law principles.

9. ENTIRE AGREEMENT
This Agreement constitutes the entire agreement between the parties concerning confidentiality and supersedes all prior agreements and understandings.

10. AMENDMENTS
This Agreement may only be amended in writing signed by both parties.

IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.


${i.disclosingParty}                    ${i.receivingParty}

_____________________________              _____________________________
Signature                                  Signature

_____________________________              _____________________________
Name                                       Name

_____________________________              _____________________________
Title                                      Title

_____________________________              _____________________________
Date                                       Date


LEGAL NOTICE: This is a template for informational purposes. Consult with a licensed attorney before using for legally binding agreements.
`}generateContractorAgreement(i){return`
INDEPENDENT CONTRACTOR AGREEMENT

This Independent Contractor Agreement ("Agreement") is entered into as of ${this.formatDate(i.startDate)}.

BETWEEN:

${i.clientName} ("Client")

AND:

${i.contractorName} ("Contractor")

1. ENGAGEMENT
Client hereby engages Contractor as an independent contractor to perform the services described in Section 2.

2. SCOPE OF WORK
Contractor agrees to perform the following services:

${i.scope}

3. COMPENSATION
Client agrees to pay Contractor ${this.formatCurrency(i.compensation)} according to the following payment schedule: ${i.paymentTerms}.

4. EXPENSES
Expense Reimbursement: ${i.expenseReimbursement}
${i.expenseReimbursement==="Yes"?"Reasonable expenses will be reimbursed upon submission of receipts and prior approval.":"Contractor is responsible for all expenses."}

5. INDEPENDENT CONTRACTOR STATUS
Contractor is an independent contractor and not an employee of Client. Contractor:
   a) Is responsible for all taxes, including self-employment tax;
   b) Will not receive employee benefits;
   c) Maintains control over how services are performed;
   d) May work for other clients;
   e) Provides own equipment and tools;

6. TERM AND TERMINATION
This Agreement commences on ${this.formatDate(i.startDate)}${i.endDate?` and ends on ${this.formatDate(i.endDate)}`:" and continues until terminated by either party"}.

Either party may terminate this Agreement with 14 days written notice.

7. INTELLECTUAL PROPERTY
Work product created by Contractor under this Agreement shall be deemed "work made for hire" and owned by Client. Contractor assigns all rights, title, and interest to Client.

${i.confidentiality?`
8. CONFIDENTIALITY
Contractor agrees to maintain confidentiality of all Client information and shall not disclose confidential information to third parties without prior written consent.
`:""}

${i.nonCompete?`
9. NON-COMPETE
During the term and for 12 months after termination, Contractor agrees not to directly compete with Client's business within a 50-mile radius.
`:""}

10. LIABILITY AND INDEMNIFICATION
Contractor shall maintain appropriate insurance and indemnify Client against claims arising from Contractor's negligence or misconduct.

11. GOVERNING LAW
This Agreement shall be governed by the laws of [State], without regard to conflict of law principles.

12. ENTIRE AGREEMENT
This Agreement constitutes the entire understanding between the parties and supersedes all prior agreements.


CLIENT                                     CONTRACTOR

_____________________________              _____________________________
Signature                                  Signature

_____________________________              _____________________________
Name                                       Name

_____________________________              _____________________________
Date                                       Date


LEGAL NOTICE: This is a template. Consult an attorney for legal advice.
`}generatePowerOfAttorney(i){return`
POWER OF ATTORNEY

KNOW ALL MEN BY THESE PRESENTS:

I, ${i.principalName}, residing at ${i.principalAddress} (the "Principal"), hereby appoint ${i.agentName}, residing at ${i.agentAddress}, as my attorney-in-fact (the "Agent") to act in my name, place, and stead in any way which I myself could do, if I were personally present, with respect to the following matters to the extent permitted by law:

TYPE OF POWER: ${i.poaType} Power of Attorney

POWERS GRANTED:

${i.powers}

${i.durability?`
DURABLE PROVISIONS:
This Power of Attorney shall not be affected by my subsequent disability or incapacity.
`:""}

EFFECTIVE DATE: This Power of Attorney shall become effective on ${this.formatDate(i.effectiveDate)}.

SPECIAL INSTRUCTIONS: The Agent is authorized to execute any documents and perform any acts necessary to exercise the powers granted herein.

REVOCATION: I reserve the right to revoke this Power of Attorney at any time by providing written notice to the Agent.

IN WITNESS WHEREOF, I have executed this Power of Attorney on this date.


_____________________________
${i.principalName}, Principal
Date: _____________________


STATE OF _________________
COUNTY OF _______________

On this _____ day of ________, 20___, before me personally appeared ${i.principalName}, known to me to be the person described in and who executed the foregoing instrument, and acknowledged that they executed the same as their free act and deed.

_____________________________
Notary Public
My Commission Expires: ________


ACCEPTANCE BY AGENT:

I, ${i.agentName}, hereby accept the appointment as Attorney-in-Fact and agree to act in a fiduciary capacity.

_____________________________
${i.agentName}, Agent
Date: _____________________


LEGAL NOTICE: This document should be reviewed by an attorney and may require notarization and/or witnesses depending on state law.
`}generateLeaseAgreement(i){let r=new Date(i.leaseStart);return r.setMonth(r.getMonth()+parseInt(i.leaseTerm)),`
RESIDENTIAL LEASE AGREEMENT

This Lease Agreement ("Lease") is entered into as of ${this.formatDate(i.leaseStart)}.

LANDLORD: ${i.landlordName}

TENANT(S): ${i.tenantName}

PROPERTY: ${i.propertyAddress}

1. TERM
The lease term is ${i.leaseTerm} months, commencing on ${this.formatDate(i.leaseStart)} and ending on ${this.formatDate(r)}.

2. RENT
Monthly rent is ${this.formatCurrency(i.monthlyRent)}, due on the ${i.rentDueDay}${this.getOrdinalSuffix(i.rentDueDay)} day of each month.

Late fees of $50 will be charged for rent received after the 5th day of the month.

3. SECURITY DEPOSIT
Tenant has paid a security deposit of ${this.formatCurrency(i.securityDeposit)} to be held by Landlord and returned within 21 days after move-out, less any deductions for damages beyond normal wear and tear.

4. UTILITIES
${i.utilities?`Utilities included: ${i.utilities}`:"Tenant is responsible for all utilities."}

5. USE OF PREMISES
The property shall be used solely as a residential dwelling for the named Tenants and their minor children.

Pets: ${i.petsAllowed}
Smoking: ${i.smokingAllowed}

6. MAINTENANCE AND REPAIRS
Landlord shall maintain the property in habitable condition and make necessary repairs.
Tenant shall keep the property clean and notify Landlord promptly of needed repairs.

7. ALTERATIONS
Tenant shall not make alterations or improvements without Landlord's prior written consent.

8. ENTRY BY LANDLORD
Landlord may enter the property with 24 hours notice for inspections, repairs, or showings.

9. SUBLETTING
Tenant shall not sublet the property without Landlord's written consent.

10. TERMINATION
Either party may terminate with 30 days written notice if the other party breaches material terms.

11. DEFAULT
If Tenant fails to pay rent or violates terms, Landlord may pursue eviction under state law.

12. GOVERNING LAW
This Lease is governed by the laws of [State].


LANDLORD                                   TENANT

_____________________________              _____________________________
${i.landlordName}                       ${i.tenantName}
Signature                                  Signature

Date: _____________________                Date: _____________________


LEGAL NOTICE: This template may not comply with all state and local laws. Consult an attorney.
`}generateBillOfSale(i){return`
BILL OF SALE

Date of Sale: ${this.formatDate(i.saleDate)}

SELLER: ${i.sellerName}

BUYER: ${i.buyerName}

ITEM DESCRIPTION:
${i.itemDescription}

${i.serialNumber?`Serial/VIN Number: ${i.serialNumber}`:""}

PURCHASE PRICE: ${this.formatCurrency(i.salePrice)}

CONDITION: ${i.condition}

${i.condition==="As-Is"?`
AS-IS DISCLAIMER:
The item is sold "AS-IS" without any warranties, express or implied. Buyer accepts the item in its current condition with all faults.
`:i.condition==="Warranted"?`
WARRANTY:
Seller warrants that the item is free from defects in materials and workmanship for a period of 30 days from the date of sale.
`:`
NEW ITEM:
Seller warrants that the item is new and unused.
`}

SELLER REPRESENTATIONS:
1. Seller has legal title to the item and full authority to sell it;
2. The item is free from all liens, encumbrances, and claims;
3. Seller will defend Buyer against any claims to the item;

BUYER ACKNOWLEDGMENT:
Buyer acknowledges inspection of the item and agrees to purchase it for the price stated above.

IN WITNESS WHEREOF, the parties have executed this Bill of Sale on the date first written above.


SELLER                                     BUYER

_____________________________              _____________________________
${i.sellerName}                         ${i.buyerName}
Signature                                  Signature

_____________________________              _____________________________
Print Name                                 Print Name

_____________________________              _____________________________
Address                                    Address

_____________________________              _____________________________
Date                                       Date


LEGAL NOTICE: Depending on the item and jurisdiction, additional documentation may be required (e.g., vehicle title transfer).
`}generateEmploymentOffer(i){return`
${i.companyName}

EMPLOYMENT OFFER LETTER

${this.formatDate(new Date)}

${i.candidateName}
[Address]

Dear ${i.candidateName},

We are pleased to offer you the position of ${i.positionTitle} at ${i.companyName}.

POSITION DETAILS:

Title: ${i.positionTitle}
Reports To: ${i.reportingTo}
Employment Type: ${i.employmentType}
Start Date: ${this.formatDate(i.startDate)}

COMPENSATION:

Annual Salary: ${this.formatCurrency(i.salary)}
Pay Frequency: ${i.payFrequency}

${i.benefits?`
BENEFITS:
${i.benefits}
`:""}

EMPLOYMENT TERMS:

1. This is an at-will employment relationship. Either you or ${i.companyName} may terminate employment at any time, with or without cause or notice.

2. You will be expected to comply with all company policies and procedures.

3. As a condition of employment, you may be required to sign confidentiality and non-disclosure agreements.

4. This offer is contingent upon satisfactory completion of background checks and reference verification.

5. On your first day, please bring:
   - Two forms of government-issued identification
   - Completed I-9 form
   - Signed offer letter

Please sign and return this letter by [Date] to indicate your acceptance of this offer. We look forward to welcoming you to our team!

If you have any questions, please contact Human Resources at [contact information].

Sincerely,

_____________________________
[Hiring Manager Name]
[Title]
${i.companyName}


ACCEPTANCE:

I accept the offer of employment with ${i.companyName} as set forth above.


_____________________________              _____________________________
${i.candidateName}                      Date
Signature


LEGAL NOTICE: This is a template. Employment offers should be reviewed by legal counsel to ensure compliance with applicable employment laws.
`}generateGenericDocument(i,r){let o=`${i.name.toUpperCase()}

`;return o+=`Generated on: ${new Date().toLocaleDateString()}

`,i.fields.forEach(a=>{r[a.id]&&(o+=`${a.label}: ${r[a.id]}
`)}),o+=`

LEGAL NOTICE: This is a template for informational purposes. Consult with a licensed attorney before using for legally binding agreements.`,o}downloadDocument(){if(!this.generatedDocument||!D(this.platformId))return;let i=new Blob([this.generatedDocument.content],{type:"text/plain"}),r=URL.createObjectURL(i),o=this.document.createElement("a");o.href=r,o.download=`${this.generatedDocument.templateName.replace(/\s+/g,"-")}-${Date.now()}.txt`,o.click(),URL.revokeObjectURL(r)}printDocument(){if(D(this.platformId)&&this.generatedDocument){let i=window.open("","_blank");i&&(i.document.write(`
          <html>
            <head>
              <title>${this.generatedDocument.templateName}</title>
              <style>
                body { font-family: 'Times New Roman', serif; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
                pre { white-space: pre-wrap; font-family: inherit; }
              </style>
            </head>
            <body>
              <pre>${this.generatedDocument.content}</pre>
            </body>
          </html>
        `),i.document.close(),i.print())}}saveDocument(){if(!this.generatedDocument)return;let i={id:this.generatedDocument.id,name:this.generatedDocument.templateName,category:this.selectedTemplate?.category||"personal",createdDate:this.generatedDocument.createdDate,preview:this.generatedDocument.content.substring(0,100)+"..."};this.savedDocuments.unshift(i),this.saveSavedDocuments(),alert("Document saved successfully!")}loadSavedDocument(i){this.switchTab("saved")}deleteSavedDocument(i){confirm("Are you sure you want to delete this document?")&&(this.savedDocuments=this.savedDocuments.filter(r=>r.id!==i),this.saveSavedDocuments())}saveSavedDocuments(){if(D(this.platformId))try{localStorage.setItem("legalDocuments",JSON.stringify(this.savedDocuments.slice(0,20)))}catch(i){console.error("Failed to save documents",i)}}loadSavedDocuments(){if(D(this.platformId))try{let i=localStorage.getItem("legalDocuments");i&&(this.savedDocuments=JSON.parse(i))}catch(i){console.error("Failed to load documents",i)}}formatDate(i){return i?new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}formatCurrency(i){return i?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(i):"$0.00"}getOrdinalSuffix(i){let r=i%10,o=i%100;return r===1&&o!==11?"st":r===2&&o!==12?"nd":r===3&&o!==13?"rd":"th"}delay(i){return new Promise(r=>setTimeout(r,i))}generateId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}switchTab(i){this.activeTab=i}requestAdvancedFeatures(){this.router.navigate(["/home/contact"],{queryParams:{subject:"Advanced Legal Document Features Request",feature:"Attorney Review, E-Signature, State-Specific Templates, Premium Documents"}})}setupAdvancedSEO(){let i=new Date().getFullYear();this.title.setTitle(`Legal Document Templates ${i} | Free NDA, Contract & Will Generator`);let r=(D(this.platformId),"https://www.zetsapp.com"),o=`${r}/tools/legal-documents`;if([{name:"description",content:`Free legal document templates ${i}. Generate NDA, contracts, power of attorney, lease agreements, and wills online. Customizable templates save $300-$2000 in legal fees. Better than LegalZoom or LawDepot. Professional legal forms for business and personal use.`},{name:"keywords",content:"legal document templates, free legal forms, nda template, contract template, lease agreement, power of attorney, will template, legalzoom alternative, free legal documents, business contracts, employment agreements, legal forms generator, customizable legal templates"},{name:"author",content:"ZetsApp - Legal Document Tools"},{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large"},{property:"og:type",content:"website"},{property:"og:url",content:o},{property:"og:title",content:`Legal Document Templates ${i}`},{property:"og:description",content:"Free customizable legal templates. Generate NDAs, contracts, wills online. Save thousands in legal fees."},{property:"og:image",content:`${r}/assets/images/tools/legal-documents-og.webp`},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Legal Document Templates ${i}`},{name:"twitter:description",content:"Free legal templates. Generate professional documents online."},{name:"theme-color",content:"#dc2626"}].forEach(c=>{c.name?this.meta.updateTag(c):c.property&&this.meta.updateTag(c)}),D(this.platformId)){let c=this.document.querySelector('link[rel="canonical"]');c||(c=this.document.createElement("link"),c.setAttribute("rel","canonical"),this.document.head.appendChild(c)),c.setAttribute("href",o)}this.createStructuredData(r,i)}createStructuredData(i,r){}static \u0275fac=function(r){return new(r||l)(E(ae),E(j),E(H),E(Q),E(W),E(R))};static \u0275cmp=$({type:l,selectors:[["app-legal-documents"]],decls:39,vars:8,consts:[["noTemplateSelected",""],["noDocumentGenerated",""],[1,"legal-page"],[1,"bg-orb","bg-orb-1"],[1,"bg-orb","bg-orb-2"],[1,"bg-orb","bg-orb-3"],[1,"page-header"],[1,"header-content"],[1,"header-badge"],[1,"year-badge"],[1,"header-subtitle"],[1,"header-stats"],[1,"stat-pill"],[1,"main-container"],["role","tablist",1,"tab-nav"],["class","tab-btn","role","tab",3,"active","click",4,"ngFor","ngForOf"],["class","tab-panel",4,"ngIf"],["aria-label","Legal Document Information",1,"seo-content"],[1,"seo-inner"],["role","tab",1,"tab-btn",3,"click"],[1,"tab-icon"],[1,"tab-label"],[1,"tab-panel"],[1,"templates-section"],[1,"filter-bar"],[1,"search-box"],["type","text","placeholder","Search templates...",1,"search-input",3,"ngModelChange","input","ngModel"],[1,"search-icon"],[1,"category-filters"],[1,"category-btn",3,"click"],[1,"templates-grid"],["class","template-card",3,"premium","click",4,"ngFor","ngForOf"],[1,"info-banner"],[1,"info-icon"],[1,"info-content"],[1,"template-card",3,"click"],[1,"template-icon"],[1,"template-content"],[1,"template-name"],["class","premium-badge",4,"ngIf"],[1,"template-description"],[1,"template-meta"],[1,"complexity-badge"],[1,"fields-count"],[1,"template-action"],[1,"use-template-btn"],[1,"premium-badge"],["class","editor-section",4,"ngIf","ngIfElse"],[1,"editor-section"],[1,"editor-header"],[1,"template-info"],[1,"template-icon-large"],[1,"back-btn",3,"click"],[1,"editor-grid"],[1,"form-column"],[1,"form-intro"],[1,"form-fields"],["class","form-group",4,"ngFor","ngForOf"],[1,"actions-column"],[1,"actions-card","sticky"],[1,"action-btn","primary","large",3,"click","disabled"],[1,"required-notice"],[1,"template-preview-box"],[1,"form-group"],[1,"form-label"],["class","required-mark",4,"ngIf"],["class","form-input",3,"type","ngModel","placeholder","ngModelChange",4,"ngIf"],["type","number","class","form-input",3,"ngModel","placeholder","ngModelChange",4,"ngIf"],["type","date","class","form-input",3,"ngModel","ngModelChange",4,"ngIf"],["class","form-textarea","rows","4",3,"ngModel","placeholder","ngModelChange",4,"ngIf"],["class","form-select",3,"ngModel","ngModelChange",4,"ngIf"],["class","checkbox-label",4,"ngIf"],["class","field-help",4,"ngIf"],[1,"required-mark"],[1,"form-input",3,"ngModelChange","type","ngModel","placeholder"],["type","number",1,"form-input",3,"ngModelChange","ngModel","placeholder"],["type","date",1,"form-input",3,"ngModelChange","ngModel"],["rows","4",1,"form-textarea",3,"ngModelChange","ngModel","placeholder"],[1,"form-select",3,"ngModelChange","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"checkbox-label"],["type","checkbox",1,"form-checkbox",3,"ngModelChange","ngModel"],[1,"field-help"],[1,"empty-state"],[1,"empty-icon"],[1,"action-btn","primary",3,"click"],["class","preview-section",4,"ngIf","ngIfElse"],[1,"preview-section"],[1,"preview-header"],[1,"preview-title"],[1,"preview-actions"],[1,"action-btn","secondary",3,"click"],[1,"document-preview"],[1,"document-paper"],[1,"document-content"],[1,"next-steps-card"],[1,"saved-section"],[1,"saved-header"],["class","saved-grid",4,"ngIf"],["class","empty-state",4,"ngIf"],[1,"saved-grid"],["class","saved-card",4,"ngFor","ngForOf"],[1,"saved-card"],[1,"saved-icon"],[1,"saved-content"],[1,"saved-preview"],[1,"saved-meta"],[1,"saved-category"],[1,"saved-date"],[1,"saved-actions"],["title","View",1,"btn-icon",3,"click"],["title","Delete",1,"btn-icon",3,"click"],[1,"guide-section"],[1,"guide-hero"],[1,"guide-card"],[1,"tip-box"],[1,"warning-box"],[1,"important-box"],[1,"cost-comparison"],[1,"comparison-table"],[1,"table-note"],[1,"advanced-features-card"],[1,"action-btn","primary","large",3,"click"]],template:function(r,o){r&1&&(n(0,"div",2),V(1,"div",3)(2,"div",4)(3,"div",5),n(4,"header",6)(5,"div",7)(6,"div",8),t(7,"\u2696\uFE0F 100% Free Templates"),e(),n(8,"h1"),t(9,"Legal Document Generator "),n(10,"span",9),t(11),e()(),n(12,"p",10),t(13,"Professional legal templates for business and personal use. Generate NDAs, contracts, wills, power of attorney, and lease agreements. Save $300-$2000 in legal fees with customizable documents."),e(),n(14,"div",11)(15,"div",12),t(16,"\u{1F4C4} 8+ Templates"),e(),n(17,"div",12),t(18,"\u26A1 Instant Generation"),e(),n(19,"div",12),t(20,"\u270F\uFE0F Fully Customizable"),e(),n(21,"div",12),t(22,"\u{1F4BE} Download & Print"),e()()()(),n(23,"div",13)(24,"nav",14),h(25,de,5,5,"button",15),e(),h(26,pe,28,12,"div",16)(27,De,4,2,"div",16)(28,Oe,4,2,"div",16)(29,Ne,9,2,"div",16)(30,ke,286,1,"div",16),e(),n(31,"section",17)(32,"div",18)(33,"h2"),t(34),e(),n(35,"p"),t(36,"Generate professional legal documents online with our free customizable templates. Create NDAs, independent contractor agreements, powers of attorney, wills, lease agreements, and employment contracts. Save $300-$2000 per document compared to attorney fees. Better than LegalZoom ($79+ per doc) or LawDepot ($8/month subscription)."),e(),n(37,"p"),t(38,"Perfect for small business owners, landlords, contractors, and individuals needing legal documents. Fully customizable templates with step-by-step guidance. Download, print, or save your documents instantly. Used by 500,000+ people to create legally sound documents without expensive legal fees."),e()()()()),r&2&&(s(11),f(o.currentYear),s(14),m("ngForOf",o.tabs),s(),m("ngIf",o.activeTab==="templates"),s(),m("ngIf",o.activeTab==="editor"),s(),m("ngIf",o.activeTab==="preview"),s(),m("ngIf",o.activeTab==="saved"),s(),m("ngIf",o.activeTab==="guide"),s(4),y("Legal Document Templates ",o.currentYear," \u2014 Free NDA, Contracts, Wills & More"))},dependencies:[G,B,ne,ie,Z,ee,K,te,J,X,Y],styles:[`[_nghost-%COMP%]{--primary: #dc2626;--primary-dark: #b91c1c;--primary-light: #ef4444;--accent: #fca5a5;--success: #10b981;--warning: #f59e0b;--danger: #dc2626;--bg: #fef2f2;--bg-dark: #7f1d1d;--surface: rgba(255, 255, 255, .96);--surface-dark: rgba(127, 29, 29, .95);--border: rgba(220, 38, 38, .12);--border-dark: rgba(220, 38, 38, .25);--text: #7f1d1d;--text-muted: #6b7280;--text-dark: #fef2f2;--text-muted-dark: #94a3b8;--shadow-sm: 0 2px 8px rgba(220, 38, 38, .08);--shadow-md: 0 4px 20px rgba(220, 38, 38, .12);--shadow-lg: 0 8px 40px rgba(220, 38, 38, .16);--radius: 16px;--radius-sm: 10px;--transition: .3s cubic-bezier(.4, 0, .2, 1)}.legal-page[_ngcontent-%COMP%]{min-height:100vh;background:var(--bg);color:var(--text);font-family:Georgia,Times New Roman,serif;position:relative;overflow-x:hidden}.dark-mode[_nghost-%COMP%]   .legal-page[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .legal-page[_ngcontent-%COMP%]{background:linear-gradient(135deg,#7f1d1d,#991b1b,#b91c1c);color:var(--text-dark)}.bg-orb[_ngcontent-%COMP%]{position:fixed;border-radius:50%;pointer-events:none;z-index:0;filter:blur(80px)}.bg-orb-1[_ngcontent-%COMP%]{width:600px;height:600px;background:radial-gradient(circle,rgba(220,38,38,.15) 0%,transparent 70%);top:-150px;right:-200px;animation:_ngcontent-%COMP%_orbFloat 15s ease-in-out infinite}.bg-orb-2[_ngcontent-%COMP%]{width:500px;height:500px;background:radial-gradient(circle,rgba(239,68,68,.12) 0%,transparent 70%);bottom:20%;left:-150px;animation:_ngcontent-%COMP%_orbFloat 18s ease-in-out infinite reverse}.bg-orb-3[_ngcontent-%COMP%]{width:400px;height:400px;background:radial-gradient(circle,rgba(252,165,165,.1) 0%,transparent 70%);top:50%;right:10%;animation:_ngcontent-%COMP%_orbFloat 12s ease-in-out infinite 3s}@keyframes _ngcontent-%COMP%_orbFloat{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(-30px) scale(1.05)}}.page-header[_ngcontent-%COMP%]{position:relative;z-index:1;background:linear-gradient(135deg,#b91c1c,#dc2626 40%,#ef4444);color:#fff;padding:clamp(48px,8vw,80px) clamp(20px,5vw,60px) 40px;text-align:center;overflow:hidden}.page-header[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;background:url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")}.header-content[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:900px;margin:16px auto 0}.header-badge[_ngcontent-%COMP%]{display:inline-block;background:#fff3;border:1px solid rgba(255,255,255,.3);color:#fff;padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:16px;font-family:Inter,sans-serif}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(28px,5vw,52px);font-weight:800;line-height:1.15;margin:0 0 16px;letter-spacing:-.02em;text-shadow:0 2px 20px rgba(0,0,0,.15)}.year-badge[_ngcontent-%COMP%]{background:#ffffff40;border-radius:8px;padding:2px 10px;font-size:.8em;vertical-align:middle}.header-subtitle[_ngcontent-%COMP%]{font-size:clamp(15px,2vw,18px);opacity:.9;max-width:680px;margin:0 auto 24px;line-height:1.6;font-family:Inter,sans-serif}.header-stats[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.stat-pill[_ngcontent-%COMP%]{background:#fff3;border:1px solid rgba(255,255,255,.3);border-radius:100px;padding:6px 14px;font-size:13px;font-weight:500;color:#fff;font-family:Inter,sans-serif}.main-container[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:1280px;margin:0 auto;padding:24px clamp(16px,4vw,40px) 48px}.tab-nav[_ngcontent-%COMP%]{display:flex;gap:4px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:6px;margin-bottom:24px;overflow-x:auto;box-shadow:var(--shadow-sm)}.dark-mode[_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .tab-nav[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.tab-btn[_ngcontent-%COMP%]{flex:1;min-width:120px;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border:none;border-radius:10px;background:transparent;color:var(--text-muted);font-size:14px;font-weight:500;cursor:pointer;transition:all var(--transition);white-space:nowrap;font-family:Inter,sans-serif}.tab-btn[_ngcontent-%COMP%]:hover{background:#dc26260f;color:var(--primary)}.tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-light) 100%);color:#fff;font-weight:700;box-shadow:0 4px 12px #dc26264d}.tab-panel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.filter-bar[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;margin-bottom:24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:16px}.dark-mode[_nghost-%COMP%]   .filter-bar[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .filter-bar[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.search-box[_ngcontent-%COMP%]{position:relative;max-width:500px}.search-input[_ngcontent-%COMP%]{width:100%;padding:12px 16px 12px 44px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:Inter,sans-serif;background:#fff;color:var(--text)}.dark-mode[_nghost-%COMP%]   .search-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{background:#ffffff0d;color:var(--text-dark);border-color:var(--border-dark)}.search-input[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none}.search-icon[_ngcontent-%COMP%]{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:18px}.category-filters[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.category-btn[_ngcontent-%COMP%]{padding:8px 16px;border:2px solid var(--border);border-radius:var(--radius-sm);background:transparent;color:var(--text);font-size:13px;font-weight:600;cursor:pointer;transition:all var(--transition);font-family:Inter,sans-serif}.category-btn[_ngcontent-%COMP%]:hover{border-color:var(--primary);background:#dc26260a}.category-btn.active[_ngcontent-%COMP%]{border-color:var(--primary);background:var(--primary);color:#fff}.templates-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:20px;margin-bottom:24px}.template-card[_ngcontent-%COMP%]{background:var(--surface);border:2px solid var(--border);border-radius:var(--radius);padding:24px;cursor:pointer;transition:all var(--transition);box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:16px}.dark-mode[_nghost-%COMP%]   .template-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .template-card[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.template-card[_ngcontent-%COMP%]:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg);border-color:var(--primary)}.template-card.premium[_ngcontent-%COMP%]{border-color:#fbbf24;background:linear-gradient(135deg,#fbbf240d,#fbbf2405)}.template-icon[_ngcontent-%COMP%]{font-size:48px;text-align:center}.template-content[_ngcontent-%COMP%]{flex:1}.template-name[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 8px;color:var(--text);display:flex;align-items:center;gap:8px;flex-wrap:wrap}.dark-mode[_nghost-%COMP%]   .template-name[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .template-name[_ngcontent-%COMP%]{color:var(--text-dark)}.premium-badge[_ngcontent-%COMP%]{font-size:11px;background:linear-gradient(135deg,#fbbf24,#f59e0b);color:#fff;padding:3px 8px;border-radius:100px;font-weight:700}.template-description[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);line-height:1.5;margin:0 0 12px;font-family:Inter,sans-serif}.template-meta[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.complexity-badge[_ngcontent-%COMP%]{padding:4px 10px;border-radius:6px;font-size:12px;font-weight:600;font-family:Inter,sans-serif}.complexity-badge.simple[_ngcontent-%COMP%]{background:#10b9811a;color:#059669}.complexity-badge.moderate[_ngcontent-%COMP%]{background:#f59e0b1a;color:#d97706}.complexity-badge.complex[_ngcontent-%COMP%]{background:#ef44441a;color:#dc2626}.fields-count[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);font-weight:600;font-family:Inter,sans-serif}.use-template-btn[_ngcontent-%COMP%]{width:100%;padding:12px;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;border:none;border-radius:var(--radius-sm);font-size:14px;font-weight:700;cursor:pointer;transition:transform var(--transition);font-family:Inter,sans-serif}.use-template-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px)}.info-banner[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:#ef44440f;border:1px solid rgba(239,68,68,.2);border-left:4px solid var(--primary);border-radius:var(--radius-sm)}.info-icon[_ngcontent-%COMP%]{font-size:24px;flex-shrink:0}.info-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin:0 0 8px;color:var(--text)}.info-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);margin:0;line-height:1.6;font-family:Inter,sans-serif}.editor-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.editor-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow-sm)}.dark-mode[_nghost-%COMP%]   .editor-header[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .editor-header[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.template-info[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center}.template-icon-large[_ngcontent-%COMP%]{font-size:48px}.template-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:800;margin:0 0 4px;color:var(--text)}.template-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);margin:0;font-family:Inter,sans-serif}.back-btn[_ngcontent-%COMP%]{padding:10px 20px;background:#dc262614;border:1px solid rgba(220,38,38,.2);color:var(--primary);border-radius:var(--radius-sm);font-size:14px;font-weight:600;cursor:pointer;transition:all var(--transition);font-family:Inter,sans-serif}.back-btn[_ngcontent-%COMP%]:hover{background:#dc262626}.editor-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 350px;gap:24px;align-items:start}.form-column[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-sm)}.dark-mode[_nghost-%COMP%]   .form-column[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-column[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.form-column[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 8px;color:var(--text)}.form-intro[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);margin:0 0 24px;font-family:Inter,sans-serif}.form-fields[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:6px}.form-label[_ngcontent-%COMP%]{font-size:14px;font-weight:700;color:var(--text);font-family:Inter,sans-serif}.dark-mode[_nghost-%COMP%]   .form-label[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-label[_ngcontent-%COMP%]{color:var(--text-dark)}.required-mark[_ngcontent-%COMP%]{color:var(--primary);margin-left:4px}.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%], .form-textarea[_ngcontent-%COMP%]{padding:12px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:Inter,sans-serif;background:#fff;color:var(--text);transition:border-color var(--transition)}.dark-mode[_nghost-%COMP%]   .form-input[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-input[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .form-select[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-select[_ngcontent-%COMP%], .dark-mode[_nghost-%COMP%]   .form-textarea[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .form-textarea[_ngcontent-%COMP%]{background:#ffffff0d;color:var(--text-dark);border-color:var(--border-dark)}.form-input[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus, .form-textarea[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none}.form-textarea[_ngcontent-%COMP%]{resize:vertical;min-height:100px}.checkbox-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--text);cursor:pointer;font-family:Inter,sans-serif}.form-checkbox[_ngcontent-%COMP%]{width:18px;height:18px;cursor:pointer}.field-help[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);font-style:italic;font-family:Inter,sans-serif}.actions-column[_ngcontent-%COMP%]{position:relative}.actions-card[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:24px;box-shadow:var(--shadow-sm);display:flex;flex-direction:column;gap:16px}.dark-mode[_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.actions-card.sticky[_ngcontent-%COMP%]{position:sticky;top:20px}.actions-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0;color:var(--text)}.actions-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);margin:0;font-family:Inter,sans-serif}.action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px 24px;border-radius:var(--radius-sm);border:none;font-size:14px;font-weight:700;cursor:pointer;transition:all var(--transition);font-family:Inter,sans-serif;white-space:nowrap}.action-btn.primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;box-shadow:0 4px 12px #dc26264d}.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #dc262666}.action-btn.secondary[_ngcontent-%COMP%]{background:#dc262614;border:1px solid rgba(220,38,38,.2);color:var(--primary)}.action-btn.secondary[_ngcontent-%COMP%]:hover{background:#dc262626}.action-btn.large[_ngcontent-%COMP%]{padding:14px 28px;font-size:16px;width:100%}.action-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}.required-notice[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);padding:12px;background:#dc26260a;border-radius:8px;font-family:Inter,sans-serif}.template-preview-box[_ngcontent-%COMP%]{padding:16px;background:#dc26260a;border-left:3px solid var(--primary);border-radius:0 8px 8px 0}.template-preview-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:14px;font-weight:700;margin:0 0 8px;color:var(--text)}.template-preview-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--text-muted);margin:0;line-height:1.5;font-family:Inter,sans-serif}.preview-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px}.preview-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow-sm);flex-wrap:wrap;gap:16px}.preview-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:24px;font-weight:800;margin:0 0 4px;color:var(--text)}.preview-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--text-muted);margin:0;font-family:Inter,sans-serif}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}.document-preview[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:40px;box-shadow:var(--shadow-md)}.document-paper[_ngcontent-%COMP%]{background:#fff;max-width:800px;margin:0 auto;padding:60px;box-shadow:0 4px 20px #0000001a;border-radius:4px}.dark-mode[_nghost-%COMP%]   .document-paper[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .document-paper[_ngcontent-%COMP%]{background:#fffffff2}.document-content[_ngcontent-%COMP%]{font-family:Times New Roman,serif;font-size:14px;line-height:1.8;color:#000;white-space:pre-wrap;margin:0}.next-steps-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#dc262614,#ef444414);border:2px solid rgba(220,38,38,.2);border-radius:var(--radius);padding:24px}.next-steps-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 16px;color:var(--text)}.next-steps-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding-left:20px;display:flex;flex-direction:column;gap:10px}.next-steps-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.6;color:var(--text);font-family:Inter,sans-serif}.saved-section[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:24px}.saved-header[_ngcontent-%COMP%]{text-align:center}.saved-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(24px,3vw,32px);font-weight:800;margin:0 0 8px;color:var(--text)}.saved-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);font-size:16px;margin:0;font-family:Inter,sans-serif}.saved-grid[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.saved-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);box-shadow:var(--shadow-sm);transition:all var(--transition)}.dark-mode[_nghost-%COMP%]   .saved-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .saved-card[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.saved-card[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}.saved-icon[_ngcontent-%COMP%]{font-size:32px;flex-shrink:0}.saved-content[_ngcontent-%COMP%]{flex:1}.saved-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin:0 0 6px;color:var(--text)}.saved-preview[_ngcontent-%COMP%]{font-size:13px;color:var(--text-muted);margin:0 0 8px;line-height:1.5;font-family:Inter,sans-serif}.saved-meta[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.saved-category[_ngcontent-%COMP%], .saved-date[_ngcontent-%COMP%]{font-size:12px;font-weight:600;font-family:Inter,sans-serif}.saved-category[_ngcontent-%COMP%]{color:var(--primary)}.saved-date[_ngcontent-%COMP%]{color:var(--text-muted)}.saved-actions[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.btn-icon[_ngcontent-%COMP%]{background:transparent;border:none;font-size:20px;cursor:pointer;padding:4px 8px;border-radius:6px;transition:background var(--transition)}.btn-icon[_ngcontent-%COMP%]:hover{background:#dc26261a}.guide-section[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:24px}.guide-hero[_ngcontent-%COMP%]{text-align:center}.guide-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(24px,3vw,36px);font-weight:800;margin:0 0 8px;color:var(--text)}.guide-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);font-size:16px;margin:0;font-family:Inter,sans-serif}.guide-card[_ngcontent-%COMP%]{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow-sm)}.dark-mode[_nghost-%COMP%]   .guide-card[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .guide-card[_ngcontent-%COMP%]{background:var(--surface-dark);border-color:var(--border-dark)}.guide-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 14px;color:var(--text)}.guide-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:var(--text-muted);line-height:1.7;margin:0 0 16px;font-family:Inter,sans-serif}.guide-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:16px 0;padding-left:20px;display:flex;flex-direction:column;gap:8px}.guide-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;line-height:1.6;color:var(--text);font-family:Inter,sans-serif}.tip-box[_ngcontent-%COMP%], .warning-box[_ngcontent-%COMP%], .important-box[_ngcontent-%COMP%]{padding:16px;border-radius:var(--radius-sm);margin:16px 0;font-family:Inter,sans-serif}.tip-box[_ngcontent-%COMP%]{background:#10b9810f;border-left:3px solid #10b981}.warning-box[_ngcontent-%COMP%]{background:#ef44440f;border-left:3px solid #ef4444}.important-box[_ngcontent-%COMP%]{background:#f59e0b0f;border-left:3px solid #f59e0b}.cost-comparison[_ngcontent-%COMP%]{margin-top:24px}.cost-comparison[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 16px;color:var(--text)}.comparison-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-bottom:8px;font-family:Inter,sans-serif}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px;text-align:left;border-bottom:1px solid var(--border)}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#dc262614;font-weight:700;font-size:13px;text-transform:uppercase}.comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:14px}.table-note[_ngcontent-%COMP%]{font-size:12px;color:var(--text-muted);font-style:italic;margin:8px 0 0}.advanced-features-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#dc262614,#ef444414);border:2px solid rgba(220,38,38,.2);border-radius:var(--radius);padding:32px;text-align:center}.advanced-features-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;font-weight:800;margin:0 0 12px;color:var(--text)}.advanced-features-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:var(--text-muted);margin:0 0 20px;line-height:1.6;font-family:Inter,sans-serif}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;background:var(--surface);border:2px dashed var(--border);border-radius:var(--radius)}.empty-icon[_ngcontent-%COMP%]{font-size:56px;margin-bottom:16px}.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;margin:0 0 8px;color:var(--text)}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--text-muted);font-size:14px;margin:0 0 20px;font-family:Inter,sans-serif}.seo-content[_ngcontent-%COMP%]{background:#dc262608;border-top:1px solid var(--border);padding:40px clamp(16px,5vw,60px);position:relative;z-index:1}.seo-inner[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.seo-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:700;color:var(--text);margin:0 0 12px}.seo-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);line-height:1.8;margin:0 0 10px;font-family:Inter,sans-serif}@media (max-width: 1200px){.editor-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.actions-card.sticky[_ngcontent-%COMP%]{position:static}}@media (max-width: 768px){.tab-btn[_ngcontent-%COMP%]{min-width:100px;font-size:12px}.category-filters[_ngcontent-%COMP%]{flex-direction:column}.category-btn[_ngcontent-%COMP%]{width:100%}.templates-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.preview-header[_ngcontent-%COMP%]{flex-direction:column}.preview-actions[_ngcontent-%COMP%]{width:100%;flex-direction:column}.action-btn[_ngcontent-%COMP%]{width:100%}.document-paper[_ngcontent-%COMP%]{padding:30px}}@media (max-width: 480px){.document-paper[_ngcontent-%COMP%]{padding:20px}.document-content[_ngcontent-%COMP%]{font-size:12px}}@media print{.bg-orb[_ngcontent-%COMP%], .tab-nav[_ngcontent-%COMP%], .action-btn[_ngcontent-%COMP%], .preview-actions[_ngcontent-%COMP%], .header-stats[_ngcontent-%COMP%]{display:none!important}.document-paper[_ngcontent-%COMP%]{box-shadow:none;padding:0}*[_ngcontent-%COMP%]{box-shadow:none!important}}@media (prefers-reduced-motion: reduce){*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after{animation:none!important;transition-duration:.01ms!important}}button[_ngcontent-%COMP%]:focus-visible, input[_ngcontent-%COMP%]:focus-visible, textarea[_ngcontent-%COMP%]:focus-visible, select[_ngcontent-%COMP%]:focus-visible{outline:3px solid var(--primary);outline-offset:3px}`]})};var Ae=[{path:"",component:O}],S=class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=P({type:l});static \u0275inj=M({imports:[A.forChild(Ae),A]})};var se=class l{static \u0275fac=function(r){return new(r||l)};static \u0275mod=P({type:l});static \u0275inj=M({imports:[U,re,S,oe]})};export{se as LegalDocumentsModule};
