import{a as ve}from"./chunk-25XDLMBK.js";import{i as Ce}from"./chunk-374VWTYN.js";import{b as ce,c as de,e as pe,h as me,j as ge,q as ue,r as xe,s as fe,t as he,u as ye,y as be}from"./chunk-QMEZJ6QG.js";import{$a as Y,Aa as d,Ab as F,C as G,G as X,H as L,Ja as Q,Jb as ae,Ka as n,Kb as le,L as p,La as v,M as m,Ma as R,Na as $,Qa as x,Qb as se,Ra as f,Sa as h,Tb as B,V as Z,_a as W,ab as J,ba as s,ca as I,ka as _,lb as ee,na as u,nb as te,oa as D,ob as ne,pa as k,sa as t,ta as e,ua as O,vb as ie,xb as oe,ya as w,za as C,zb as re}from"./chunk-XH7KITLT.js";import{a as V,f as q}from"./chunk-EQDQRRRY.js";function Se(c,l){if(c&1){let i=w();t(0,"button",18),C("click",function(){let o=p(i).$implicit,a=d();return m(a.switchTab(o.id))}),t(1,"span",19),n(2),e(),t(3,"span",20),n(4),e()()}if(c&2){let i=l.$implicit,r=d();k("active",r.activeTab===i.id),s(2),v(i.icon),s(2),v(i.label)}}function Ee(c,l){if(c&1){let i=w();t(0,"div",25)(1,"label"),n(2,"State"),e(),t(3,"input",41),h("ngModelChange",function(o){p(i);let a=d(2);return f(a.businessInfo.state,o)||(a.businessInfo.state=o),m(o)}),e()()}if(c&2){let i=d(2);s(3),x("ngModel",i.businessInfo.state)}}function Oe(c,l){c&1&&(t(0,"span",50),n(1,"Required"),e())}function Me(c,l){if(c&1){let i=w();t(0,"label",42)(1,"input",43),C("change",function(){let o=p(i).$implicit,a=d(2);return m(a.toggleDocument(o.id))}),e(),t(2,"div",44)(3,"div",45)(4,"span",46),n(5),e(),t(6,"span",47),n(7),e(),_(8,Oe,2,0,"span",48),e(),t(9,"p",49),n(10),e()()()}if(c&2){let i=l.$implicit,r=d(2);s(),u("checked",r.selectedDocuments.has(i.id))("disabled",i.legalRequired),s(4),v(i.icon),s(2),v(i.name),s(),u("ngIf",i.legalRequired),s(2),v(i.description)}}function Te(c,l){if(c&1){let i=w();t(0,"div",21)(1,"div",22)(2,"div",23)(3,"div",24)(4,"h3"),n(5,"\u{1F3E2} Business Information"),e(),t(6,"div",25)(7,"label"),n(8,"Company/Website Name *"),e(),t(9,"input",26),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.companyName,o)||(a.businessInfo.companyName=o),m(o)}),e()(),t(10,"div",25)(11,"label"),n(12,"Website URL *"),e(),t(13,"input",27),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.websiteUrl,o)||(a.businessInfo.websiteUrl=o),m(o)}),e()(),t(14,"div",25)(15,"label"),n(16,"Contact Email *"),e(),t(17,"input",28),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.email,o)||(a.businessInfo.email=o),m(o)}),e()(),t(18,"div",25)(19,"label"),n(20,"Business Address"),e(),t(21,"input",29),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.address,o)||(a.businessInfo.address=o),m(o)}),e()(),t(22,"div",30)(23,"div",25)(24,"label"),n(25,"Country *"),e(),t(26,"select",31),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.country,o)||(a.businessInfo.country=o),m(o)}),C("change",function(){p(i);let o=d();return m(o.autoDetectCompliance())}),t(27,"option"),n(28,"United States"),e(),t(29,"option"),n(30,"United Kingdom"),e(),t(31,"option"),n(32,"Canada"),e(),t(33,"option"),n(34,"Germany"),e(),t(35,"option"),n(36,"France"),e(),t(37,"option"),n(38,"Australia"),e(),t(39,"option"),n(40,"Brazil"),e(),t(41,"option"),n(42,"India"),e()()(),_(43,Ee,4,1,"div",32),e(),t(44,"div",25)(45,"label"),n(46,"Entity Type"),e(),t(47,"select",33),h("ngModelChange",function(o){p(i);let a=d();return f(a.businessInfo.entityType,o)||(a.businessInfo.entityType=o),m(o)}),t(48,"option",34),n(49,"Individual/Sole Proprietor"),e(),t(50,"option",35),n(51,"Company/Corporation"),e(),t(52,"option",36),n(53,"Nonprofit Organization"),e()()()(),t(54,"div",24)(55,"h3"),n(56,"\u{1F4C4} Select Documents"),e(),t(57,"div",37),_(58,Me,11,6,"label",38),e()()(),t(59,"div",39)(60,"button",40),C("click",function(){p(i);let o=d();return m(o.switchTab("customize"))}),n(61," Next: Customize Details \u2192 "),e()()()()}if(c&2){let i=d();s(9),x("ngModel",i.businessInfo.companyName),s(4),x("ngModel",i.businessInfo.websiteUrl),s(4),x("ngModel",i.businessInfo.email),s(4),x("ngModel",i.businessInfo.address),s(5),x("ngModel",i.businessInfo.country),s(17),u("ngIf",i.businessInfo.country==="United States"),s(4),x("ngModel",i.businessInfo.entityType),s(11),u("ngForOf",i.documentTypes)}}function De(c,l){if(c&1){let i=w();t(0,"div",72)(1,"div",73)(2,"strong"),n(3),e(),t(4,"span",74),n(5),e()(),t(6,"button",75),C("click",function(){let o=p(i).index,a=d(3);return m(a.removeThirdPartyService(o))}),n(7,"\u2715"),e()()}if(c&2){let i=l.$implicit;s(3),v(i.name),s(2),v(i.category)}}function Ie(c,l){if(c&1&&(t(0,"option",76),n(1),e()),c&2){let i=l.$implicit;u("value",i.name),s(),$(" ",i.name," (",i.category,") ")}}function ke(c,l){if(c&1){let i=w();t(0,"div",52)(1,"h3"),n(2,"\u{1F50C} Third-Party Services"),e(),t(3,"p"),n(4,"Add services you use that access user data"),e(),t(5,"div",66),_(6,De,8,2,"div",67),e(),t(7,"div",68)(8,"select",69,0)(10,"option",70),n(11,"Select a service..."),e(),_(12,Ie,2,3,"option",71),e(),t(13,"button",64),C("click",function(){p(i);let o=Q(9);return d(2).addServiceFromSelect(o.value),m(o.value="")}),n(14," Add Service "),e()()()}if(c&2){let i=d(2);s(6),u("ngForOf",i.thirdPartyServices),s(6),u("ngForOf",i.availableServices)}}function Re(c,l){if(c&1){let i=w();t(0,"div",21)(1,"div",51)(2,"div",52)(3,"h3"),n(4,"\u{1F4CA} Data Collection"),e(),t(5,"p"),n(6,"Select what types of data you collect from users"),e(),t(7,"div",53)(8,"label",54)(9,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.personalInfo,o)||(a.dataCollection.personalInfo=o),m(o)}),e(),t(10,"span"),n(11,"Personal Information (Name, Email, Phone)"),e()(),t(12,"label",54)(13,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.paymentInfo,o)||(a.dataCollection.paymentInfo=o),m(o)}),e(),t(14,"span"),n(15,"Payment Information"),e()(),t(16,"label",54)(17,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.cookies,o)||(a.dataCollection.cookies=o),m(o)}),e(),t(18,"span"),n(19,"Cookies & Tracking"),e()(),t(20,"label",54)(21,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.analytics,o)||(a.dataCollection.analytics=o),m(o)}),e(),t(22,"span"),n(23,"Analytics Data"),e()(),t(24,"label",54)(25,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.location,o)||(a.dataCollection.location=o),m(o)}),e(),t(26,"span"),n(27,"Location Data"),e()(),t(28,"label",54)(29,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.deviceInfo,o)||(a.dataCollection.deviceInfo=o),m(o)}),e(),t(30,"span"),n(31,"Device Information"),e()(),t(32,"label",54)(33,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.socialMedia,o)||(a.dataCollection.socialMedia=o),m(o)}),e(),t(34,"span"),n(35,"Social Media Integration"),e()(),t(36,"label",54)(37,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataCollection.thirdPartyServices,o)||(a.dataCollection.thirdPartyServices=o),m(o)}),e(),t(38,"span"),n(39,"Third-Party Services"),e()()()(),t(40,"div",52)(41,"h3"),n(42,"\u2705 Compliance Requirements"),e(),t(43,"p"),n(44,"Select applicable privacy regulations"),e(),t(45,"div",56)(46,"label",57)(47,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.gdpr,o)||(a.complianceRequirements.gdpr=o),m(o)}),e(),t(48,"div",58)(49,"span",59),n(50,"\u{1F1EA}\u{1F1FA}"),e(),t(51,"div")(52,"strong"),n(53,"GDPR"),e(),t(54,"small"),n(55,"European Union (EU/EEA)"),e()()()(),t(56,"label",57)(57,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.ccpa,o)||(a.complianceRequirements.ccpa=o),m(o)}),e(),t(58,"div",58)(59,"span",59),n(60,"\u{1F1FA}\u{1F1F8}"),e(),t(61,"div")(62,"strong"),n(63,"CCPA"),e(),t(64,"small"),n(65,"California, USA"),e()()()(),t(66,"label",57)(67,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.coppa,o)||(a.complianceRequirements.coppa=o),m(o)}),e(),t(68,"div",58)(69,"span",59),n(70,"\u{1F476}"),e(),t(71,"div")(72,"strong"),n(73,"COPPA"),e(),t(74,"small"),n(75,"Children Under 13"),e()()()(),t(76,"label",57)(77,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.pipeda,o)||(a.complianceRequirements.pipeda=o),m(o)}),e(),t(78,"div",58)(79,"span",59),n(80,"\u{1F1E8}\u{1F1E6}"),e(),t(81,"div")(82,"strong"),n(83,"PIPEDA"),e(),t(84,"small"),n(85,"Canada"),e()()()(),t(86,"label",57)(87,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.lgpd,o)||(a.complianceRequirements.lgpd=o),m(o)}),e(),t(88,"div",58)(89,"span",59),n(90,"\u{1F1E7}\u{1F1F7}"),e(),t(91,"div")(92,"strong"),n(93,"LGPD"),e(),t(94,"small"),n(95,"Brazil"),e()()()(),t(96,"label",57)(97,"input",55),h("ngModelChange",function(o){p(i);let a=d();return f(a.complianceRequirements.hipaa,o)||(a.complianceRequirements.hipaa=o),m(o)}),e(),t(98,"div",58)(99,"span",59),n(100,"\u{1F3E5}"),e(),t(101,"div")(102,"strong"),n(103,"HIPAA"),e(),t(104,"small"),n(105,"Healthcare (USA)"),e()()()()()(),_(106,ke,15,2,"div",60),t(107,"div",52)(108,"h3"),n(109,"\u2699\uFE0F Additional Options"),e(),t(110,"div",61)(111,"div",25)(112,"label"),n(113,"Data Retention Period (months)"),e(),t(114,"input",62),h("ngModelChange",function(o){p(i);let a=d();return f(a.dataRetentionPeriod,o)||(a.dataRetentionPeriod=o),m(o)}),e()(),t(115,"div",25)(116,"label"),n(117,"Data Protection Officer Email"),e(),t(118,"input",63),h("ngModelChange",function(o){p(i);let a=d();return f(a.contactDPO,o)||(a.contactDPO=o),m(o)}),e()()()(),t(119,"div",39)(120,"button",64),C("click",function(){p(i);let o=d();return m(o.switchTab("setup"))}),n(121,"\u2190 Back"),e(),t(122,"button",65),C("click",function(){p(i);let o=d();return m(o.generateDocuments())}),n(123),e()()()()}if(c&2){let i=d();s(9),x("ngModel",i.dataCollection.personalInfo),s(4),x("ngModel",i.dataCollection.paymentInfo),s(4),x("ngModel",i.dataCollection.cookies),s(4),x("ngModel",i.dataCollection.analytics),s(4),x("ngModel",i.dataCollection.location),s(4),x("ngModel",i.dataCollection.deviceInfo),s(4),x("ngModel",i.dataCollection.socialMedia),s(4),x("ngModel",i.dataCollection.thirdPartyServices),s(10),x("ngModel",i.complianceRequirements.gdpr),s(10),x("ngModel",i.complianceRequirements.ccpa),s(10),x("ngModel",i.complianceRequirements.coppa),s(10),x("ngModel",i.complianceRequirements.pipeda),s(10),x("ngModel",i.complianceRequirements.lgpd),s(10),x("ngModel",i.complianceRequirements.hipaa),s(9),u("ngIf",i.dataCollection.thirdPartyServices),s(8),x("ngModel",i.dataRetentionPeriod),s(4),x("ngModel",i.contactDPO),s(4),u("disabled",i.isGenerating),s(),R(" ",i.isGenerating?"\u23F3 Generating...":"\u{1F680} Generate Documents"," ")}}function Ae(c,l){if(c&1){let i=w();t(0,"button",82),C("click",function(){let o=p(i).$implicit,a=d(2);return m(a.setActivePreviewDoc(o))}),n(1),e()}if(c&2){let i=l.$implicit,r=d(2);k("active",r.generatedDocuments.get(i)),s(),$(" ",r.getDocumentIcon(i)," ",r.getDocumentName(i)," ")}}function Ne(c,l){if(c&1){let i=w();t(0,"div",85)(1,"div",86)(2,"h3"),n(3),e(),t(4,"div",87)(5,"button",64),C("click",function(){let o=p(i).$implicit,a=d(3);return m(a.downloadDocument(o.key,"txt"))}),n(6," \u{1F4C4} Download TXT "),e(),t(7,"button",64),C("click",function(){let o=p(i).$implicit,a=d(3);return m(a.downloadDocument(o.key,"html"))}),n(8," \u{1F310} Download HTML "),e()()(),t(9,"div",88)(10,"pre",89),n(11),e()()()}if(c&2){let i=l.$implicit,r=d(3);s(3),v(r.getDocumentName(i.key)),s(8),v(i.value.content)}}function Fe(c,l){if(c&1&&(t(0,"div",83),_(1,Ne,12,2,"div",84),W(2,"keyvalue"),e()),c&2){let i=d(2);s(),u("ngForOf",Y(2,1,i.generatedDocuments))}}function Ge(c,l){if(c&1){let i=w();t(0,"div",90)(1,"div",91),n(2,"\u{1F4C4}"),e(),t(3,"h3"),n(4,"No Documents Generated"),e(),t(5,"p"),n(6,"Complete the setup and customize steps to generate your documents"),e(),t(7,"button",92),C("click",function(){p(i);let o=d(2);return m(o.switchTab("setup"))}),n(8,"Start Setup"),e()()}}function Le(c,l){if(c&1&&(t(0,"div",21)(1,"div",77)(2,"div",78),_(3,Ae,2,4,"button",79),e(),_(4,Fe,3,3,"div",80)(5,Ge,9,0,"div",81),e()()),c&2){let i=d();s(3),u("ngForOf",i.selectedDocuments),s(),u("ngIf",i.generatedDocuments.size>0),s(),u("ngIf",i.generatedDocuments.size===0)}}function We(c,l){c&1&&(t(0,"div",141),n(1,"\u2713 Selected"),e())}function ze(c,l){if(c&1){let i=w();t(0,"div",130),C("click",function(){let o=p(i).$implicit,a=d(2);return m(a.selectTemplate(o))}),t(1,"div",131)(2,"div",132),n(3),e(),t(4,"div",86)(5,"div",133),n(6),e()(),t(7,"div",134),O(8,"div",135)(9,"div",136)(10,"div",135),e()(),t(11,"div",137)(12,"h4"),n(13),e(),t(14,"p"),n(15),e(),t(16,"div",138),O(17,"span",139)(18,"span",139),e()(),_(19,We,2,0,"div",140),e()}if(c&2){let i=l.$implicit,r=d(2);k("selected",r.selectedTemplate.id===i.id),s(3),v(i.preview),s(),D("background","linear-gradient(135deg, "+i.primaryColor+", "+i.accentColor+")"),s(2),v(i.name),s(2),D("background-color",i.primaryColor),s(),D("background-color",i.accentColor),s(),D("background-color",i.primaryColor),s(3),v(i.name),s(2),v(i.description),s(2),D("background-color",i.primaryColor),s(),D("background-color",i.accentColor),s(),u("ngIf",r.selectedTemplate.id===i.id)}}function Ue(c,l){if(c&1){let i=w();t(0,"div",142)(1,"div",143),n(2),e(),t(3,"div",144)(4,"h4"),n(5),e(),t(6,"p",145)(7,"span"),n(8),W(9,"date"),e(),t(10,"span",146),n(11,"\u2022"),e(),t(12,"span"),n(13),e()()(),t(14,"div",147)(15,"button",148),C("click",function(){let o=p(i).$implicit,a=d(2);return m(a.downloadDocument(o.key,"txt"))}),t(16,"span",149),n(17,"\u{1F4C4}"),e(),t(18,"span",150),n(19,"TXT"),e()(),t(20,"button",151),C("click",function(){let o=p(i).$implicit,a=d(2);return m(a.downloadDocument(o.key,"html"))}),t(21,"span",149),n(22,"\u{1F310}"),e(),t(23,"span",150),n(24,"HTML"),e()(),t(25,"button",152),C("click",function(){let o=p(i).$implicit,a=d(2);return m(a.downloadDocument(o.key,"pdf"))}),t(26,"span",149),n(27,"\u{1F4D1}"),e(),t(28,"span",150),n(29,"PDF"),e()()()()}if(c&2){let i=l.$implicit,r=d(2);s(2),v(r.getDocumentIcon(i.key)),s(3),v(r.getDocumentName(i.key)),s(3),R("Generated: ",J(9,4,i.value.generatedDate,"short"),""),s(5),R("",i.value.content.split(" ").length," words")}}function Ve(c,l){if(c&1){let i=w();t(0,"div",21)(1,"div",93)(2,"div",94)(3,"h2"),n(4,"\u{1F4E5} Download Your Legal Documents"),e(),t(5,"p",95),n(6,"Choose your design template and export in your preferred format"),e()(),t(7,"div",96)(8,"h3"),n(9,"\u{1F3A8} Choose Design Template"),e(),t(10,"p",97),n(11,"Select a professional design that matches your brand"),e(),t(12,"div",98),_(13,ze,20,19,"div",99),e()(),t(14,"div",100)(15,"h3"),n(16,"\u{1F3A8} Customize Colors (Optional)"),e(),t(17,"p",97),n(18,"Override template colors with your brand colors"),e(),t(19,"div",101)(20,"div",102)(21,"label"),n(22,"Primary Color"),e(),t(23,"div",103)(24,"input",104),h("ngModelChange",function(o){p(i);let a=d();return f(a.customPrimaryColor,o)||(a.customPrimaryColor=o),m(o)}),e(),t(25,"input",105),h("ngModelChange",function(o){p(i);let a=d();return f(a.customPrimaryColor,o)||(a.customPrimaryColor=o),m(o)}),e()()(),t(26,"div",102)(27,"label"),n(28,"Accent Color"),e(),t(29,"div",103)(30,"input",104),h("ngModelChange",function(o){p(i);let a=d();return f(a.customAccentColor,o)||(a.customAccentColor=o),m(o)}),e(),t(31,"input",106),h("ngModelChange",function(o){p(i);let a=d();return f(a.customAccentColor,o)||(a.customAccentColor=o),m(o)}),e()()(),t(32,"div",107)(33,"div",108)(34,"span"),n(35,"Color Preview"),e()()()()(),t(36,"div",109)(37,"h3"),n(38,"\u{1F4C4} Your Generated Documents"),e(),t(39,"div",110),_(40,Ue,30,7,"div",111),W(41,"keyvalue"),e()(),t(42,"div",112)(43,"div",113)(44,"div",114),n(45,"\u{1F4E6}"),e(),t(46,"div",115)(47,"h3"),n(48,"Download All Documents"),e(),t(49,"p"),n(50),e()()(),t(51,"div",116)(52,"button",117),C("click",function(){p(i);let o=d();return m(o.downloadAll())}),n(53," \u{1F4E5} Download All as TXT "),e()()(),t(54,"div",118)(55,"h3"),n(56,"\u{1F680} Implementation Guide"),e(),t(57,"div",119)(58,"div",120)(59,"div",121),n(60,"1"),e(),t(61,"div",122)(62,"h4"),n(63,"Upload to Your Website"),e(),t(64,"p"),n(65,"Add the HTML files to your website's legal directory (e.g., /legal/ or /policies/)"),e(),t(66,"div",123)(67,"code"),n(68,"/legal/privacy-policy.html"),e(),t(69,"code"),n(70,"/legal/terms-of-service.html"),e()()()(),t(71,"div",120)(72,"div",121),n(73,"2"),e(),t(74,"div",122)(75,"h4"),n(76,"Add Footer Links"),e(),t(77,"p"),n(78,"Link to your legal pages from your website footer for easy access"),e(),t(79,"div",123)(80,"code"),n(81,'<a href="/legal/privacy-policy.html">Privacy Policy</a>'),e()()()(),t(82,"div",120)(83,"div",121),n(84,"3"),e(),t(85,"div",122)(86,"h4"),n(87,"Add Cookie Banner (GDPR)"),e(),t(88,"p"),n(89,"If you have EU visitors, implement a cookie consent banner"),e(),t(90,"div",124)(91,"strong"),n(92,"Tip:"),e(),n(93," Use tools like Cookiebot, OneTrust, or CookieYes for compliance "),e()()(),t(94,"div",120)(95,"div",121),n(96,"4"),e(),t(97,"div",122)(98,"h4"),n(99,"Review & Update Annually"),e(),t(100,"p"),n(101,"Review your legal documents yearly or whenever your data practices change"),e(),t(102,"div",124)(103,"strong"),n(104,"Important:"),e(),n(105," Keep a dated changelog of updates "),e()()()()(),t(106,"div",125)(107,"h3"),n(108,"\u{1F4A1} Professional Tips"),e(),t(109,"div",126)(110,"div",127)(111,"div",128),n(112,"\u2713"),e(),t(113,"div",129)(114,"strong"),n(115,"Use HTML for websites"),e(),n(116," - Best for embedding directly in your site with matching design "),e()(),t(117,"div",127)(118,"div",128),n(119,"\u2713"),e(),t(120,"div",129)(121,"strong"),n(122,"Use PDF for formal documents"),e(),n(123," - Perfect for sending to partners or legal review "),e()(),t(124,"div",127)(125,"div",128),n(126,"\u2713"),e(),t(127,"div",129)(128,"strong"),n(129,"Keep TXT as backup"),e(),n(130," - Easy to edit and version control "),e()(),t(131,"div",127)(132,"div",128),n(133,"\u2713"),e(),t(134,"div",129)(135,"strong"),n(136,"Match your brand colors"),e(),n(137," - Use the color picker for consistent branding "),e()()()()()()}if(c&2){let i=d();s(13),u("ngForOf",i.designTemplates),s(11),x("ngModel",i.customPrimaryColor),s(),x("ngModel",i.customPrimaryColor),s(5),x("ngModel",i.customAccentColor),s(),x("ngModel",i.customAccentColor),s(2),D("background","linear-gradient(135deg, "+i.customPrimaryColor+", "+i.customAccentColor+")"),s(7),u("ngForOf",Y(41,9,i.generatedDocuments)),s(10),R("Get all ",i.generatedDocuments.size," legal documents at once")}}function qe(c,l){c&1&&(t(0,"p"),n(1,"Compliant - EU data protection rules included"),e())}function $e(c,l){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if you have EU visitors"),e())}function Ye(c,l){c&1&&(t(0,"p"),n(1,"Compliant - California privacy rights included"),e())}function Be(c,l){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if you have California users"),e())}function He(c,l){c&1&&(t(0,"p"),n(1,"Compliant - Children's privacy protections included"),e())}function je(c,l){c&1&&(t(0,"p"),n(1,"Not enabled - Enable if users may be under 13"),e())}function Ke(c,l){if(c&1){let i=w();t(0,"div",21)(1,"div",153)(2,"h2"),n(3,"\u2705 Compliance Checker"),e(),t(4,"div",154)(5,"div",155)(6,"div",156),n(7),e(),t(8,"div")(9,"h4"),n(10,"GDPR (EU)"),e(),_(11,qe,2,0,"p",157)(12,$e,2,0,"p",157),e()(),t(13,"div",155)(14,"div",156),n(15),e(),t(16,"div")(17,"h4"),n(18,"CCPA (California)"),e(),_(19,Ye,2,0,"p",157)(20,Be,2,0,"p",157),e()(),t(21,"div",155)(22,"div",156),n(23),e(),t(24,"div")(25,"h4"),n(26,"COPPA (Children)"),e(),_(27,He,2,0,"p",157)(28,je,2,0,"p",157),e()()(),t(29,"div",158)(30,"h3"),n(31,"\u{1F4CB} Compliance Checklist"),e(),t(32,"div",159)(33,"label",160),O(34,"input",161),t(35,"span"),n(36,"Privacy Policy posted and accessible"),e()(),t(37,"label",160),O(38,"input",161),t(39,"span"),n(40,"Terms of Service clearly displayed"),e()(),t(41,"label",160),O(42,"input",162),t(43,"span"),n(44,"Cookie Policy for tracking technologies"),e()(),t(45,"label",160),O(46,"input",162),t(47,"span"),n(48,"GDPR compliance for EU users"),e()(),t(49,"label",160),O(50,"input",162),t(51,"span"),n(52,"CCPA compliance for California residents"),e()(),t(53,"label",160),O(54,"input",163),t(55,"span"),n(56,"Cookie consent banner implemented"),e()(),t(57,"label",160),O(58,"input",163),t(59,"span"),n(60,"Data breach notification process in place"),e()(),t(61,"label",160),O(62,"input",163),t(63,"span"),n(64,"User data request/deletion mechanism"),e()()()(),t(65,"div",164)(66,"h3"),n(67,"Need Advanced Compliance?"),e(),t(68,"p"),n(69,"Get attorney review, ongoing updates, and compliance monitoring"),e(),t(70,"button",40),C("click",function(){p(i);let o=d();return m(o.requestAdvancedFeatures())}),n(71," \u{1F4DE} Get Legal Review "),e()()()()}if(c&2){let i=d();s(5),k("compliant",i.complianceRequirements.gdpr),s(2),v(i.complianceRequirements.gdpr?"\u2705":"\u26A0\uFE0F"),s(4),u("ngIf",i.complianceRequirements.gdpr),s(),u("ngIf",!i.complianceRequirements.gdpr),s(),k("compliant",i.complianceRequirements.ccpa),s(2),v(i.complianceRequirements.ccpa?"\u2705":"\u26A0\uFE0F"),s(4),u("ngIf",i.complianceRequirements.ccpa),s(),u("ngIf",!i.complianceRequirements.ccpa),s(),k("compliant",i.complianceRequirements.coppa),s(2),v(i.complianceRequirements.coppa?"\u2705":"\u26A0\uFE0F"),s(4),u("ngIf",i.complianceRequirements.coppa),s(),u("ngIf",!i.complianceRequirements.coppa),s(14),u("checked",i.dataCollection.cookies),s(4),u("checked",i.complianceRequirements.gdpr),s(4),u("checked",i.complianceRequirements.ccpa)}}function Xe(c,l){if(c&1&&(t(0,"div",21)(1,"div",165)(2,"div",166)(3,"h2"),n(4),e(),t(5,"p"),n(6,"Everything you need to know about legal documents for your website"),e()(),t(7,"div",167)(8,"h3"),n(9,"\u{1F512} Why You Need a Privacy Policy"),e(),t(10,"p")(11,"strong"),n(12,"Legal Requirements:"),e()(),t(13,"ul")(14,"li"),n(15,"Required by GDPR (EU), CCPA (California), and most countries"),e(),t(16,"li"),n(17,"Mandatory for Google AdSense, Facebook Ads approval"),e(),t(18,"li"),n(19,"Required by App Store and Google Play"),e(),t(20,"li"),n(21,"Penalties up to \u20AC20M or 4% of revenue for violations"),e()(),t(22,"p")(23,"strong"),n(24,"What It Must Include:"),e()(),t(25,"ul")(26,"li"),n(27,"What data you collect and how"),e(),t(28,"li"),n(29,"Why you collect it (purpose)"),e(),t(30,"li"),n(31,"How you use and protect the data"),e(),t(32,"li"),n(33,"User rights (access, deletion, portability)"),e(),t(34,"li"),n(35,"Cookie usage disclosure"),e(),t(36,"li"),n(37,"Third-party service providers"),e()()(),t(38,"div",167)(39,"h3"),n(40,"\u{1F4DC} Terms of Service Essentials"),e(),t(41,"p"),n(42,"Terms of Service (ToS) protect your business and set rules for users:"),e(),t(43,"ul")(44,"li")(45,"strong"),n(46,"Limitation of Liability:"),e(),n(47," Reduce legal exposure"),e(),t(48,"li")(49,"strong"),n(50,"Acceptable Use:"),e(),n(51," Define prohibited activities"),e(),t(52,"li")(53,"strong"),n(54,"Intellectual Property:"),e(),n(55," Protect your content"),e(),t(56,"li")(57,"strong"),n(58,"Account Terms:"),e(),n(59," User responsibilities"),e(),t(60,"li")(61,"strong"),n(62,"Termination Rights:"),e(),n(63," When you can ban users"),e(),t(64,"li")(65,"strong"),n(66,"Dispute Resolution:"),e(),n(67," How to handle conflicts"),e()()(),t(68,"div",167)(69,"h3"),n(70,"\u{1F36A} Cookie Policy & GDPR"),e(),t(71,"p"),n(72,"GDPR requires explicit consent for non-essential cookies:"),e(),t(73,"ul")(74,"li")(75,"strong"),n(76,"Essential Cookies:"),e(),n(77," No consent needed (site functionality)"),e(),t(78,"li")(79,"strong"),n(80,"Analytics Cookies:"),e(),n(81," Require consent (Google Analytics, etc.)"),e(),t(82,"li")(83,"strong"),n(84,"Advertising Cookies:"),e(),n(85," Require consent (Facebook Pixel, Google Ads)"),e(),t(86,"li")(87,"strong"),n(88,"Social Media Cookies:"),e(),n(89," Require consent (social sharing buttons)"),e()(),t(90,"p")(91,"strong"),n(92,"Implementation:"),e(),n(93," Use a cookie consent banner that allows users to accept/reject optional cookies."),e()(),t(94,"div",167)(95,"h3"),n(96,"\u2705 GDPR Compliance Requirements"),e(),t(97,"p"),n(98,"General Data Protection Regulation (EU) key requirements:"),e(),t(99,"ul")(100,"li")(101,"strong"),n(102,"Lawful Basis:"),e(),n(103," Must have valid reason to process data"),e(),t(104,"li")(105,"strong"),n(106,"User Rights:"),e(),n(107," Access, rectification, erasure, portability"),e(),t(108,"li")(109,"strong"),n(110,"Data Minimization:"),e(),n(111," Only collect necessary data"),e(),t(112,"li")(113,"strong"),n(114,"Purpose Limitation:"),e(),n(115," Only use data for stated purpose"),e(),t(116,"li")(117,"strong"),n(118,"Breach Notification:"),e(),n(119," Report breaches within 72 hours"),e(),t(120,"li")(121,"strong"),n(122,"DPO Required:"),e(),n(123," For large-scale processing or public bodies"),e()()(),t(124,"div",167)(125,"h3"),n(126,"\u{1F1FA}\u{1F1F8} CCPA (California) Requirements"),e(),t(127,"p"),n(128,"California Consumer Privacy Act applies if you:"),e(),t(129,"ul")(130,"li"),n(131,"Have $25M+ annual revenue, OR"),e(),t(132,"li"),n(133,"Buy/sell personal info of 50,000+ CA residents, OR"),e(),t(134,"li"),n(135,"Derive 50%+ revenue from selling personal info"),e()(),t(136,"p")(137,"strong"),n(138,"Consumer Rights:"),e()(),t(139,"ul")(140,"li"),n(141,"Right to know what data is collected"),e(),t(142,"li"),n(143,"Right to delete personal information"),e(),t(144,"li"),n(145,"Right to opt-out of data sales"),e(),t(146,"li"),n(147,"Right to non-discrimination"),e()(),t(148,"p")(149,"strong"),n(150,'"Do Not Sell My Info" link required'),e(),n(151," in footer if you sell data"),e()(),t(152,"div",168)(153,"h3"),n(154,"\u{1F4B0} Cost Comparison"),e(),t(155,"table",169)(156,"tr")(157,"th"),n(158,"Service"),e(),t(159,"th"),n(160,"Our Tool"),e(),t(161,"th"),n(162,"Termly"),e(),t(163,"th"),n(164,"PrivacyPolicies"),e(),t(165,"th"),n(166,"Attorney"),e()(),t(167,"tr")(168,"td"),n(169,"Privacy Policy"),e(),t(170,"td")(171,"strong"),n(172,"FREE"),e()(),t(173,"td"),n(174,"$10/mo"),e(),t(175,"td"),n(176,"$14/mo"),e(),t(177,"td"),n(178,"$500-$2,000"),e()(),t(179,"tr")(180,"td"),n(181,"Terms of Service"),e(),t(182,"td")(183,"strong"),n(184,"FREE"),e()(),t(185,"td"),n(186,"$10/mo"),e(),t(187,"td"),n(188,"$14/mo"),e(),t(189,"td"),n(190,"$500-$2,000"),e()(),t(191,"tr")(192,"td"),n(193,"Cookie Policy"),e(),t(194,"td")(195,"strong"),n(196,"FREE"),e()(),t(197,"td"),n(198,"$10/mo"),e(),t(199,"td"),n(200,"$14/mo"),e(),t(201,"td"),n(202,"$300-$1,000"),e()(),t(203,"tr")(204,"td"),n(205,"All Documents"),e(),t(206,"td")(207,"strong"),n(208,"FREE"),e()(),t(209,"td"),n(210,"Included"),e(),t(211,"td"),n(212,"Included"),e(),t(213,"td"),n(214,"$1,500-$5,000"),e()(),t(215,"tr",170)(216,"td")(217,"strong"),n(218,"Annual Cost"),e()(),t(219,"td")(220,"strong"),n(221,"$0"),e()(),t(222,"td")(223,"strong"),n(224,"$120"),e()(),t(225,"td")(226,"strong"),n(227,"$168"),e()(),t(228,"td")(229,"strong"),n(230,"$1,500+"),e()()()()()()()),c&2){let i=d();s(4),R("Privacy Policy & Terms Guide ",i.currentYear,"")}}var z=class c{constructor(l,i,r,o,a,g){this.seoService=l;this.meta=i;this.title=r;this.router=o;this.document=a;this.platformId=g}activeTab="setup";tabs=[{id:"setup",label:"Setup",icon:"\u2699\uFE0F"},{id:"customize",label:"Customize",icon:"\u270F\uFE0F"},{id:"preview",label:"Preview",icon:"\u{1F441}\uFE0F"},{id:"download",label:"Download",icon:"\u{1F4E5}"},{id:"compliance",label:"Compliance",icon:"\u2705"},{id:"guide",label:"Guide",icon:"\u{1F4D6}"}];documentTypes=[{id:"privacy-policy",name:"Privacy Policy",description:"How you collect, use, and protect user data",icon:"\u{1F512}",required:!0,legalRequired:!0},{id:"terms-of-service",name:"Terms of Service",description:"Rules and guidelines for using your website/app",icon:"\u{1F4DC}",required:!0,legalRequired:!0},{id:"cookie-policy",name:"Cookie Policy",description:"Disclosure of cookie usage (GDPR required)",icon:"\u{1F36A}",required:!0,legalRequired:!0},{id:"disclaimer",name:"Disclaimer",description:"Limit liability for content and advice",icon:"\u26A0\uFE0F",required:!1,legalRequired:!1},{id:"return-refund",name:"Return & Refund Policy",description:"E-commerce return and refund terms",icon:"\u{1F4B0}",required:!1,legalRequired:!1},{id:"acceptable-use",name:"Acceptable Use Policy",description:"Prohibited activities and behaviors",icon:"\u{1F6AB}",required:!1,legalRequired:!1}];businessInfo={companyName:"",websiteUrl:"",email:"",address:"",country:"United States",state:"",entityType:"company"};dataCollection={personalInfo:!0,paymentInfo:!1,cookies:!0,analytics:!0,thirdPartyServices:!1,location:!1,deviceInfo:!0,socialMedia:!1};complianceRequirements={gdpr:!1,ccpa:!1,coppa:!1,hipaa:!1,pipeda:!1,lgpd:!1};thirdPartyServices=[];availableServices=[{name:"Google Analytics",category:"analytics",purpose:"Website analytics",dataShared:"Usage data, IP address"},{name:"Stripe",category:"payment",purpose:"Payment processing",dataShared:"Payment details, billing address"},{name:"PayPal",category:"payment",purpose:"Payment processing",dataShared:"Payment details, email"},{name:"Mailchimp",category:"email",purpose:"Email marketing",dataShared:"Email address, name"},{name:"Facebook Pixel",category:"advertising",purpose:"Advertising analytics",dataShared:"Browsing behavior"},{name:"Google Ads",category:"advertising",purpose:"Advertising",dataShared:"Browsing behavior, IP address"},{name:"AWS",category:"hosting",purpose:"Web hosting",dataShared:"All website data"},{name:"Cloudflare",category:"hosting",purpose:"CDN and security",dataShared:"IP address, browsing data"}];selectedDocuments=new Set(["privacy-policy","terms-of-service","cookie-policy"]);generatedDocuments=new Map;isGenerating=!1;designTemplates=[{id:"professional",name:"Professional",description:"Clean and formal design for corporate use",preview:"\u{1F4CB}",primaryColor:"#1e40af",accentColor:"#3b82f6",fontFamily:"Georgia, serif",headerStyle:"professional"},{id:"modern",name:"Modern",description:"Contemporary design with bold accents",preview:"\u{1F3A8}",primaryColor:"#7c3aed",accentColor:"#a78bfa",fontFamily:"Inter, sans-serif",headerStyle:"modern"},{id:"minimal",name:"Minimal",description:"Simple and elegant minimalist style",preview:"\u2728",primaryColor:"#000000",accentColor:"#6b7280",fontFamily:"Helvetica, Arial, sans-serif",headerStyle:"minimal"},{id:"trustworthy",name:"Trustworthy",description:"Professional blue tones for credibility",preview:"\u{1F6E1}\uFE0F",primaryColor:"#0891b2",accentColor:"#06b6d4",fontFamily:"system-ui, sans-serif",headerStyle:"corporate"},{id:"legal",name:"Legal",description:"Traditional legal document style",preview:"\u2696\uFE0F",primaryColor:"#1f2937",accentColor:"#374151",fontFamily:"Times New Roman, serif",headerStyle:"professional"}];selectedTemplate=this.designTemplates[0];customPrimaryColor="#1e40af";customAccentColor="#3b82f6";includeEUClause=!1;includeCaliforniaRights=!1;includeChildrenPrivacy=!1;dataRetentionPeriod=24;contactDPO="";activePreviewDoc="";Math=Math;currentYear=new Date().getFullYear();ngOnInit(){this.setupAdvancedSEO(),this.autoDetectCompliance()}ngOnDestroy(){}autoDetectCompliance(){this.businessInfo.country==="United States"&&this.businessInfo.state==="California"&&(this.complianceRequirements.ccpa=!0,this.includeCaliforniaRights=!0),["Germany","France","United Kingdom","Spain","Italy","Netherlands","Belgium","Ireland"].includes(this.businessInfo.country)&&(this.complianceRequirements.gdpr=!0,this.includeEUClause=!0),this.businessInfo.country==="Canada"&&(this.complianceRequirements.pipeda=!0),this.businessInfo.country==="Brazil"&&(this.complianceRequirements.lgpd=!0)}generateDocuments(){return q(this,null,function*(){if(!this.validateBusinessInfo()){alert("Please fill in all required business information");return}this.isGenerating=!0,yield this.delay(2e3),this.generatedDocuments.clear();for(let l of this.selectedDocuments){let i=this.generateDocumentContent(l);this.generatedDocuments.set(l,{id:this.generateId(),type:l,content:i,businessInfo:V({},this.businessInfo),generatedDate:new Date,lastUpdated:new Date})}this.isGenerating=!1,this.switchTab("preview")})}validateBusinessInfo(){return!!(this.businessInfo.companyName&&this.businessInfo.websiteUrl&&this.businessInfo.email&&this.businessInfo.country)}generateDocumentContent(l){switch(l){case"privacy-policy":return this.generatePrivacyPolicy();case"terms-of-service":return this.generateTermsOfService();case"cookie-policy":return this.generateCookiePolicy();case"disclaimer":return this.generateDisclaimer();case"return-refund":return this.generateReturnPolicy();case"acceptable-use":return this.generateAcceptableUse();default:return""}}generatePrivacyPolicy(){return`
PRIVACY POLICY

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

1. INTRODUCTION

${this.businessInfo.companyName} ("we," "our," or "us") operates ${this.businessInfo.websiteUrl} (the "Site"). This Privacy Policy informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Site and the choices you have associated with that data.

We use your data to provide and improve the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.

2. INFORMATION COLLECTION AND USE

We collect several different types of information for various purposes to provide and improve our Site to you.

2.1 Types of Data Collected

${this.dataCollection.personalInfo?`
Personal Data: While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to:
- Name
- Email address
- Phone number
- Address, State, ZIP/Postal code, City
`:""}

${this.dataCollection.paymentInfo?`
Payment Information: If you make purchases through our Site, we collect payment card information and billing details necessary to process your transactions.
`:""}

${this.dataCollection.cookies?`
Cookies and Usage Data: We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.
`:""}

${this.dataCollection.analytics?`
Usage Data: We may collect information about how the Site is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's IP address, browser type, browser version, the pages you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
`:""}

${this.dataCollection.location?`
Location Data: We may collect and process information about your actual location. We use various technologies to determine location, including IP address, GPS, and other sensors.
`:""}

3. USE OF DATA

${this.businessInfo.companyName} uses the collected data for various purposes:
- To provide and maintain our Site
- To notify you about changes to our Site
- To allow you to participate in interactive features when you choose to do so
- To provide customer support
- To gather analysis or valuable information so that we can improve our Site
- To monitor the usage of our Site
- To detect, prevent and address technical issues
${this.dataCollection.analytics?`- To analyze user behavior and trends
`:""}
${this.dataCollection.paymentInfo?`- To process payments and prevent fraud
`:""}

4. DATA RETENTION

We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.

Data Retention Period: ${this.dataRetentionPeriod} months from last activity.

5. TRANSFER OF DATA

Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ.

${this.businessInfo.companyName} will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.

6. DISCLOSURE OF DATA

Legal Requirements: ${this.businessInfo.companyName} may disclose your Personal Data in the good faith belief that such action is necessary to:
- Comply with a legal obligation
- Protect and defend the rights or property of ${this.businessInfo.companyName}
- Prevent or investigate possible wrongdoing in connection with the Site
- Protect the personal safety of users of the Site or the public
- Protect against legal liability

7. SECURITY OF DATA

The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.

8. YOUR RIGHTS

${this.complianceRequirements.gdpr?this.generateGDPRRights():""}
${this.complianceRequirements.ccpa?this.generateCCPARights():""}
${this.complianceRequirements.coppa?this.generateCOPPARights():""}

You have the right to:
- Access your personal data
- Correct inaccurate data
- Request deletion of your data
- Object to processing of your data
- Request restriction of processing
- Data portability
- Withdraw consent

To exercise these rights, please contact us at ${this.businessInfo.email}.

9. THIRD-PARTY SERVICES

${this.thirdPartyServices.length>0?`
We may employ third-party companies and individuals to facilitate our Site ("Service Providers"), provide the Site on our behalf, perform Site-related services, or assist us in analyzing how our Site is used.

Third-party services we use:
${this.thirdPartyServices.map(i=>`
- ${i.name} (${i.category}): ${i.purpose}
  Data shared: ${i.dataShared}
`).join("")}

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
`:"We do not currently use third-party service providers that have access to your Personal Data."}

10. CHILDREN'S PRIVACY

${this.complianceRequirements.coppa||this.includeChildrenPrivacy?`
Our Site does not address anyone under the age of 13 ("Children"). We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
`:"Our Site is not intended for use by children under the age of 13."}

11. CHANGES TO THIS PRIVACY POLICY

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

12. CONTACT US

If you have any questions about this Privacy Policy, please contact us:

${this.businessInfo.companyName}
Email: ${this.businessInfo.email}
${this.businessInfo.address?`Address: ${this.businessInfo.address}`:""}
${this.contactDPO?`Data Protection Officer: ${this.contactDPO}`:""}

---

This Privacy Policy was generated using Privacy Policy Generator.
For legal advice, consult a qualified attorney.
`}generateGDPRRights(){return`
GDPR RIGHTS (European Union Users)

Under the General Data Protection Regulation (GDPR), if you are a resident of the European Economic Area (EEA), you have certain data protection rights:

- Right to Access: You have the right to request copies of your personal data.
- Right to Rectification: You have the right to request correction of inaccurate or incomplete data.
- Right to Erasure: You have the right to request deletion of your personal data ("right to be forgotten").
- Right to Restrict Processing: You have the right to request restriction of processing of your personal data.
- Right to Object: You have the right to object to processing of your personal data.
- Right to Data Portability: You have the right to request transfer of your data to another organization.
- Right to Withdraw Consent: You have the right to withdraw consent at any time where we relied on consent.
- Right to Lodge a Complaint: You have the right to lodge a complaint with a supervisory authority.

Legal Basis for Processing: We process your data based on:
- Your consent
- Performance of a contract
- Compliance with legal obligations
- Our legitimate interests

Data Protection Officer Contact: ${this.contactDPO||this.businessInfo.email}
`}generateCCPARights(){return`
CCPA RIGHTS (California Residents)

If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights:

- Right to Know: You have the right to request information about the personal information we collect, use, disclose, and sell.
- Right to Delete: You have the right to request deletion of personal information we have collected from you.
- Right to Opt-Out: You have the right to opt-out of the sale of your personal information (Note: We do not sell personal information).
- Right to Non-Discrimination: You have the right not to receive discriminatory treatment for exercising your CCPA rights.

To exercise these rights, email us at ${this.businessInfo.email} with "CCPA Request" in the subject line.

We do not sell your personal information to third parties.
`}generateCOPPARights(){return`
CHILDREN'S ONLINE PRIVACY PROTECTION ACT (COPPA)

Our Site complies with the Children's Online Privacy Protection Act (COPPA). We do not knowingly collect personal information from children under 13 years of age without verifiable parental consent.

If we learn that we have collected personal information from a child under 13 without parental consent, we will delete that information as quickly as possible.

Parents can contact us to review, delete, or stop the collection of their child's information at ${this.businessInfo.email}.
`}generateTermsOfService(){return`
TERMS OF SERVICE

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

1. AGREEMENT TO TERMS

These Terms of Service ("Terms") govern your access to and use of ${this.businessInfo.websiteUrl} (the "Site") operated by ${this.businessInfo.companyName} ("we," "us," or "our").

By accessing or using the Site, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Site.

2. USE LICENSE

Permission is granted to temporarily access the Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
- Modify or copy the materials
- Use the materials for any commercial purpose or for any public display
- Attempt to reverse engineer any software contained on the Site
- Remove any copyright or other proprietary notations from the materials
- Transfer the materials to another person or "mirror" the materials on any other server

3. USER ACCOUNTS

${this.dataCollection.personalInfo?`
When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms.

You are responsible for:
- Maintaining the confidentiality of your account and password
- Restricting access to your computer and account
- All activities that occur under your account

You must notify us immediately of any unauthorized use of your account.
`:"No user accounts are required to use this Site."}

4. PROHIBITED USES

You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use the Site:
- In any way that violates any applicable national or international law or regulation
- To transmit, or procure the sending of, any advertising or promotional material without our prior written consent
- To impersonate or attempt to impersonate ${this.businessInfo.companyName}, an employee, another user, or any other person or entity
- In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful
- To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site

5. INTELLECTUAL PROPERTY

The Site and its original content, features, and functionality are owned by ${this.businessInfo.companyName} and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

6. USER CONTENT

${this.dataCollection.personalInfo?`
Our Site may allow you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content").

You retain ownership of Content you submit. However, by submitting Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and display such Content.

You represent and warrant that:
- You own or have the necessary rights to submit the Content
- The Content does not violate the privacy rights, publicity rights, copyrights, or other rights of any person

We have the right to remove any Content that violates these Terms or is otherwise objectionable.
`:""}

7. LINKS TO OTHER WEBSITES

Our Site may contain links to third-party websites or services that are not owned or controlled by ${this.businessInfo.companyName}.

We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that ${this.businessInfo.companyName} shall not be responsible or liable for any damage or loss caused by your use of any such content.

8. DISCLAIMER OF WARRANTIES

THE SITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ${this.businessInfo.companyName.toUpperCase()} MAKES NO WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL WARRANTIES INCLUDING, WITHOUT LIMITATION, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

9. LIMITATION OF LIABILITY

IN NO EVENT SHALL ${this.businessInfo.companyName.toUpperCase()}, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF THE SITE.

10. INDEMNIFICATION

You agree to defend, indemnify, and hold harmless ${this.businessInfo.companyName} and its affiliates from and against any claims, damages, obligations, losses, liabilities, costs, and expenses arising from:
- Your use of the Site
- Your violation of these Terms
- Your violation of any third party right

11. TERMINATION

We may terminate or suspend your account and access to the Site immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.

Upon termination, your right to use the Site will immediately cease.

12. GOVERNING LAW

These Terms shall be governed by and construed in accordance with the laws of ${this.businessInfo.country}${this.businessInfo.state?`, ${this.businessInfo.state}`:""}, without regard to its conflict of law provisions.

13. CHANGES TO TERMS

We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes by posting the new Terms on this page and updating the "Last Updated" date.

Your continued use of the Site after changes become effective constitutes acceptance of the revised Terms.

14. CONTACT US

If you have questions about these Terms, please contact us:

${this.businessInfo.companyName}
Email: ${this.businessInfo.email}
${this.businessInfo.address?`Address: ${this.businessInfo.address}`:""}

---

These Terms of Service were generated using Privacy Policy Generator.
For legal advice, consult a qualified attorney.
`}generateCookiePolicy(){return`
COOKIE POLICY

Last Updated: ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}

This Cookie Policy explains how ${this.businessInfo.companyName} uses cookies and similar technologies on ${this.businessInfo.websiteUrl}.

1. WHAT ARE COOKIES?

Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.

2. HOW WE USE COOKIES

We use cookies for the following purposes:

Essential Cookies: Required for the Site to function properly. These cannot be disabled.
${this.dataCollection.analytics?`- Analytics Cookies: Help us understand how visitors use our Site
`:""}
${this.dataCollection.personalInfo?`- Functionality Cookies: Remember your preferences and settings
`:""}
${this.dataCollection.socialMedia?`- Social Media Cookies: Enable social media features
`:""}

3. TYPES OF COOKIES WE USE

Session Cookies: Temporary cookies that expire when you close your browser.
Persistent Cookies: Remain on your device for a set period or until you delete them.

4. THIRD-PARTY COOKIES

${this.thirdPartyServices.length>0?`
We use the following third-party services that may set cookies:
${this.thirdPartyServices.filter(l=>l.category==="analytics"||l.category==="advertising").map(l=>`- ${l.name}: ${l.purpose}`).join(`
`)}
`:"We do not currently use third-party cookies."}

5. YOUR CHOICES

You can control cookies through your browser settings. You can:
- Delete existing cookies
- Block future cookies
- Set your browser to notify you when cookies are sent

Note: Disabling cookies may affect functionality of the Site.

6. CONTACT US

Questions about our Cookie Policy? Contact us at ${this.businessInfo.email}.
`}generateDisclaimer(){return`
DISCLAIMER

The information provided by ${this.businessInfo.companyName} on ${this.businessInfo.websiteUrl} is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability or completeness of any information on the Site.

UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.
`}generateReturnPolicy(){return`
RETURN AND REFUND POLICY

Last Updated: ${new Date().toLocaleDateString()}

Thank you for shopping at ${this.businessInfo.companyName}.

1. RETURN PERIOD

You have 30 days from the date of purchase to return an item.

2. ELIGIBILITY

To be eligible for a return, items must be:
- Unused and in the same condition as received
- In the original packaging
- Accompanied by proof of purchase

3. REFUNDS

Once we receive your return, we will inspect it and notify you of the refund status. If approved, your refund will be processed within 7-10 business days to your original payment method.

4. SHIPPING COSTS

You will be responsible for paying shipping costs for returning items. Shipping costs are non-refundable.

5. CONTACT US

For return questions, email ${this.businessInfo.email}.
`}generateAcceptableUse(){return`
ACCEPTABLE USE POLICY

This Acceptable Use Policy governs your use of ${this.businessInfo.websiteUrl}.

PROHIBITED ACTIVITIES:

You may not use the Site to:
- Violate any laws or regulations
- Infringe intellectual property rights
- Transmit harmful code or malware
- Attempt unauthorized access to systems
- Harass, abuse, or harm others
- Spam or send unsolicited messages
- Collect user information without consent
- Impersonate others
- Engage in fraudulent activities

ENFORCEMENT:

Violations may result in:
- Account suspension or termination
- Legal action
- Reporting to law enforcement

For questions, contact ${this.businessInfo.email}.
`}downloadDocument(l,i){let r=this.generatedDocuments.get(l);if(r)if(i==="pdf")this.generatePDF(r);else{let o=r.content,a="text/plain",g="txt";if(i==="html"&&(o=this.convertToHTML(o),a="text/html",g="html"),F(this.platformId)){let b=new Blob([o],{type:a}),y=URL.createObjectURL(b),A=this.document.createElement("a");A.href=y,A.download=`${l}-${Date.now()}.${g}`,A.click(),URL.revokeObjectURL(y)}}}generatePDF(l){return q(this,null,function*(){if(F(this.platformId))try{let{default:i}=yield import("./chunk-QRCHYTUS.js"),r=new i({orientation:"portrait",unit:"mm",format:"a4"}),o=r.internal.pageSize.getWidth(),a=r.internal.pageSize.getHeight(),g=20,b=o-g*2,y=g,A=this.customPrimaryColor||this.selectedTemplate.primaryColor,S=this.customAccentColor||this.selectedTemplate.accentColor,H=N=>{let P=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(N);return P?{r:parseInt(P[1],16),g:parseInt(P[2],16),b:parseInt(P[3],16)}:{r:0,g:0,b:0}},M=H(A),T=H(S);r.setFillColor(M.r,M.g,M.b),r.rect(0,0,o,35,"F"),r.setTextColor(255,255,255),r.setFontSize(20),r.setFont("helvetica","bold"),r.text(this.businessInfo.companyName,g,15),r.setFontSize(14),r.setFont("helvetica","normal");let j=this.documentTypes.find(N=>N.id===l.type)?.name||"Legal Document";r.text(j,g,25),y=45,r.setDrawColor(T.r,T.g,T.b),r.setLineWidth(.5),r.line(g,y,o-g,y),y+=10,r.setTextColor(60,60,60),r.setFontSize(10),r.setFont("helvetica","normal");let we=l.content.split(`
`);for(let N of we){y>a-g&&(r.addPage(),y=g,this.addPDFFooter(r,a,g,T));let P=N.trim();if(P===""){y+=4;continue}if(P.match(/^[A-Z\s]+$/)&&P.length<50){r.setFontSize(14),r.setFont("helvetica","bold"),r.setTextColor(M.r,M.g,M.b);let E=r.splitTextToSize(P,b);r.text(E,g,y),y+=E.length*7+4,r.setFontSize(10),r.setFont("helvetica","normal"),r.setTextColor(60,60,60)}else if(P.match(/^\d+\./)){r.setFontSize(12),r.setFont("helvetica","bold"),r.setTextColor(M.r,M.g,M.b);let E=r.splitTextToSize(P,b);r.text(E,g,y),y+=E.length*6+3,r.setFontSize(10),r.setFont("helvetica","normal"),r.setTextColor(60,60,60)}else if(P.match(/^\d+\.\d+/)){r.setFont("helvetica","bold"),r.setTextColor(T.r,T.g,T.b);let E=r.splitTextToSize(P,b);r.text(E,g+5,y),y+=E.length*5+2,r.setFont("helvetica","normal"),r.setTextColor(60,60,60)}else if(P.startsWith("-")){let E=P.substring(1).trim(),K=r.splitTextToSize(E,b-8);r.circle(g+2,y-1,.5,"F"),r.text(K,g+5,y),y+=K.length*5+1}else{let E=r.splitTextToSize(P,b);r.text(E,g,y),y+=E.length*5+2}}this.addPDFFooter(r,a,g,T),r.setProperties({title:j,subject:"Legal Document",author:this.businessInfo.companyName,keywords:"legal, privacy, terms",creator:"Privacy Policy Generator"}),r.save(`${l.type}-${Date.now()}.pdf`)}catch(i){console.error("PDF generation error:",i),alert("Unable to generate PDF. Please ensure you have a stable internet connection and try again.")}})}addPDFFooter(l,i,r,o){let a=i-15;l.setFontSize(8),l.setTextColor(150,150,150),l.setFont("helvetica","normal");let g=l.internal.getCurrentPageInfo().pageNumber,b=l.internal.getNumberOfPages();l.text(`Page ${g} of ${b}`,l.internal.pageSize.getWidth()-r-20,a),l.text(`Generated: ${new Date().toLocaleDateString()}`,r,a),l.setDrawColor(o.r,o.g,o.b),l.setLineWidth(.3),l.line(r,a-5,l.internal.pageSize.getWidth()-r,a-5)}convertToHTML(l){let i=l.split(`
`),r=this.customPrimaryColor||this.selectedTemplate.primaryColor,o=this.customAccentColor||this.selectedTemplate.accentColor,a=this.selectedTemplate.fontFamily,g=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.businessInfo.companyName} - Legal Document</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: ${a}; 
      line-height: 1.8; 
      color: #333;
      background: #f9fafb;
    }
    .container { 
      max-width: 900px; 
      margin: 0 auto; 
      padding: 40px 20px;
      background: white;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, ${r}, ${o});
      color: white;
      padding: 40px;
      margin: -40px -20px 40px -20px;
      border-radius: 0;
    }
    .header h1 { 
      font-size: 32px; 
      margin-bottom: 10px;
      font-weight: 700;
    }
    .header p { 
      font-size: 16px; 
      opacity: 0.9;
    }
    .meta-info {
      background: #f3f4f6;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      border-left: 4px solid ${r};
    }
    .meta-info p {
      margin: 5px 0;
      font-size: 14px;
      color: #6b7280;
    }
    h1 { 
      color: ${r}; 
      font-size: 28px;
      margin: 30px 0 20px 0;
      padding-bottom: 10px;
      border-bottom: 3px solid ${o};
      font-weight: 700;
    }
    h2 { 
      color: ${r}; 
      font-size: 22px;
      margin: 25px 0 15px 0;
      font-weight: 600;
    }
    h3 { 
      color: ${o}; 
      font-size: 18px;
      margin: 20px 0 12px 0;
      font-weight: 600;
    }
    p { 
      margin: 12px 0; 
      line-height: 1.8;
      text-align: justify;
    }
    .section {
      margin-bottom: 25px;
    }
    ul, ol {
      margin: 15px 0 15px 25px;
    }
    li {
      margin: 8px 0;
      line-height: 1.7;
    }
    .highlight {
      background: ${o}15;
      padding: 15px 20px;
      border-left: 4px solid ${o};
      margin: 20px 0;
      border-radius: 4px;
    }
    .footer {
      margin-top: 50px;
      padding-top: 30px;
      border-top: 2px solid #e5e7eb;
      text-align: center;
      color: #6b7280;
      font-size: 13px;
    }
    @media print {
      body { background: white; }
      .container { box-shadow: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${this.businessInfo.companyName}</h1>
      <p>${this.documentTypes.find(y=>this.generatedDocuments.has(y.id))?.name||"Legal Document"}</p>
    </div>
    
    <div class="meta-info">
      <p><strong>Company:</strong> ${this.businessInfo.companyName}</p>
      <p><strong>Website:</strong> ${this.businessInfo.websiteUrl}</p>
      <p><strong>Generated:</strong> ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>
      <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}</p>
    </div>
    
    <div class="content">
`,b=!1;return i.forEach((y,A)=>{let S=y.trim();S===""?(b&&(g+="</ul>",b=!1),g+="<br>"):S.match(/^[A-Z\s]+$/)&&S.length<60?(b&&(g+="</ul>",b=!1),g+=`<h1>${S}</h1>`):S.match(/^\d+\./)?(b&&(g+="</ul>",b=!1),g+=`<h2>${S}</h2>`):S.match(/^\d+\.\d+/)?(b&&(g+="</ul>",b=!1),g+=`<h3>${S}</h3>`):S.startsWith("-")?(b||(g+="<ul>",b=!0),g+=`<li>${S.substring(1).trim()}</li>`):(b&&(g+="</ul>",b=!1),g+=`<p>${S}</p>`)}),b&&(g+="</ul>"),g+=`
    </div>
    
    <div class="footer">
      <p>This document was generated using Privacy Policy Generator</p>
      <p>For legal advice, please consult with a qualified attorney</p>
      <p>&copy; ${new Date().getFullYear()} ${this.businessInfo.companyName}. All rights reserved.</p>
    </div>
  </div>
</body>
</html>`,g}selectTemplate(l){this.selectedTemplate=l,this.customPrimaryColor=l.primaryColor,this.customAccentColor=l.accentColor}downloadAll(){for(let l of this.selectedDocuments)this.downloadDocument(l,"txt")}getDocumentName(l){return this.documentTypes.find(i=>i.id===l)?.name||""}getDocumentIcon(l){return this.documentTypes.find(i=>i.id===l)?.icon||""}addServiceFromSelect(l){let i=this.availableServices.find(r=>r.name===l);i&&this.addThirdPartyService(i)}setActivePreviewDoc(l){this.activePreviewDoc=l}toggleDocument(l){this.selectedDocuments.has(l)?this.documentTypes.find(r=>r.id===l)?.legalRequired||this.selectedDocuments.delete(l):this.selectedDocuments.add(l)}addThirdPartyService(l){this.thirdPartyServices.push(V({},l))}removeThirdPartyService(l){this.thirdPartyServices.splice(l,1)}delay(l){return new Promise(i=>setTimeout(i,l))}generateId(){return Date.now().toString(36)+Math.random().toString(36).substring(2)}switchTab(l){this.activeTab=l}requestAdvancedFeatures(){this.router.navigate(["/home/contact"],{queryParams:{subject:"Legal Document Services Request",feature:"Attorney Review, Custom Legal Documents, Ongoing Updates"}})}setupAdvancedSEO(){let l=new Date().getFullYear();this.title.setTitle(`Privacy Policy Generator ${l} | Free GDPR/CCPA Compliant Templates`);let i=(F(this.platformId),"https://www.zetsapp.com"),r=`${i}/tools/privacy-generator`;if([{name:"description",content:`Free privacy policy generator ${l}. Create GDPR, CCPA, COPPA compliant privacy policies, terms of service, and cookie policies. Better than Termly ($10/mo) or PrivacyPolicies ($14/mo). Generate legal documents for your website instantly.`},{name:"keywords",content:"privacy policy generator, terms of service generator, gdpr privacy policy, ccpa compliance, cookie policy generator, free privacy policy, termly alternative, legal document generator, privacy policy template"},{name:"author",content:"ZetsApp - Legal Document Tools"},{name:"robots",content:"index, follow, max-snippet:-1, max-image-preview:large"},{property:"og:type",content:"website"},{property:"og:url",content:r},{property:"og:title",content:`Privacy Policy Generator ${l}`},{property:"og:description",content:"Free GDPR/CCPA compliant privacy policy and terms generator."},{property:"og:image",content:`${i}/assets/images/tools/privacy-generator-og.webp`},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:title",content:`Privacy Policy Generator ${l}`},{name:"twitter:description",content:"Generate compliant legal documents for free."},{name:"theme-color",content:"#10b981"}].forEach(a=>{a.name?this.meta.updateTag(a):a.property&&this.meta.updateTag(a)}),F(this.platformId)){let a=this.document.querySelector('link[rel="canonical"]');a||(a=this.document.createElement("link"),a.setAttribute("rel","canonical"),this.document.head.appendChild(a)),a.setAttribute("href",r)}}static \u0275fac=function(i){return new(i||c)(I(ve),I(ae),I(le),I(se),I(ee),I(Z))};static \u0275cmp=X({type:c,selectors:[["app-privacy-generator"]],decls:38,vars:9,consts:[["serviceSelect",""],[1,"privacy-page"],[1,"bg-orb","bg-orb-1"],[1,"bg-orb","bg-orb-2"],[1,"bg-orb","bg-orb-3"],[1,"page-header"],[1,"header-content"],[1,"header-badge"],[1,"year-badge"],[1,"header-subtitle"],[1,"header-stats"],[1,"stat-pill"],[1,"main-container"],["role","tablist",1,"tab-nav"],["class","tab-btn",3,"active","click",4,"ngFor","ngForOf"],["class","tab-panel",4,"ngIf"],[1,"seo-content"],[1,"seo-inner"],[1,"tab-btn",3,"click"],[1,"tab-icon"],[1,"tab-label"],[1,"tab-panel"],[1,"setup-section"],[1,"setup-grid"],[1,"setup-card"],[1,"form-group"],["type","text","placeholder","Acme Corporation",1,"form-input",3,"ngModelChange","ngModel"],["type","url","placeholder","https://example.com",1,"form-input",3,"ngModelChange","ngModel"],["type","email","placeholder","legal@example.com",1,"form-input",3,"ngModelChange","ngModel"],["type","text","placeholder","123 Main St, City, State",1,"form-input",3,"ngModelChange","ngModel"],[1,"form-row"],[1,"form-select",3,"ngModelChange","change","ngModel"],["class","form-group",4,"ngIf"],[1,"form-select",3,"ngModelChange","ngModel"],["value","individual"],["value","company"],["value","nonprofit"],[1,"document-checklist"],["class","doc-checkbox-label",4,"ngFor","ngForOf"],[1,"action-center"],[1,"action-btn","primary","large",3,"click"],["type","text","placeholder","California",1,"form-input",3,"ngModelChange","ngModel"],[1,"doc-checkbox-label"],["type","checkbox",1,"doc-checkbox",3,"change","checked","disabled"],[1,"doc-info"],[1,"doc-header"],[1,"doc-icon"],[1,"doc-name"],["class","required-badge",4,"ngIf"],[1,"doc-description"],[1,"required-badge"],[1,"customize-section"],[1,"customize-card"],[1,"checkbox-grid"],[1,"checkbox-label"],["type","checkbox",3,"ngModelChange","ngModel"],[1,"compliance-grid"],[1,"compliance-label"],[1,"compliance-info"],[1,"compliance-icon"],["class","customize-card",4,"ngIf"],[1,"options-grid"],["type","number","min","1","max","120",1,"form-input",3,"ngModelChange","ngModel"],["type","email","placeholder","dpo@example.com",1,"form-input",3,"ngModelChange","ngModel"],[1,"action-btn","secondary",3,"click"],[1,"action-btn","primary","large",3,"click","disabled"],[1,"services-list"],["class","service-item",4,"ngFor","ngForOf"],[1,"add-service"],[1,"form-select"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"service-item"],[1,"service-info"],[1,"service-category"],[1,"remove-btn",3,"click"],[3,"value"],[1,"preview-section"],[1,"preview-tabs"],["class","preview-tab-btn",3,"active","click",4,"ngFor","ngForOf"],["class","preview-content",4,"ngIf"],["class","empty-state",4,"ngIf"],[1,"preview-tab-btn",3,"click"],[1,"preview-content"],["class","preview-document",4,"ngFor","ngForOf"],[1,"preview-document"],[1,"preview-header"],[1,"preview-actions"],[1,"preview-paper"],[1,"preview-text"],[1,"empty-state"],[1,"empty-icon"],[1,"action-btn","primary",3,"click"],[1,"download-section"],[1,"download-header"],[1,"section-subtitle"],[1,"template-selector-card"],[1,"template-description"],[1,"template-grid"],["class","template-option",3,"selected","click",4,"ngFor","ngForOf"],[1,"color-picker-card"],[1,"color-inputs"],[1,"color-input-group"],[1,"color-picker-wrapper"],["type","color",1,"color-input",3,"ngModelChange","ngModel"],["type","text","placeholder","#1e40af",1,"color-text-input",3,"ngModelChange","ngModel"],["type","text","placeholder","#3b82f6",1,"color-text-input",3,"ngModelChange","ngModel"],[1,"color-preview"],[1,"preview-sample"],[1,"documents-export-card"],[1,"documents-list"],["class","document-export-item",4,"ngFor","ngForOf"],[1,"bulk-download-card"],[1,"bulk-content"],[1,"bulk-icon"],[1,"bulk-info"],[1,"bulk-actions"],[1,"action-btn","secondary","large",3,"click"],[1,"implementation-guide-card"],[1,"implementation-steps"],[1,"impl-step"],[1,"step-badge"],[1,"step-content"],[1,"step-code"],[1,"step-note"],[1,"tips-card"],[1,"tips-grid"],[1,"tip-item"],[1,"tip-icon"],[1,"tip-text"],[1,"template-option",3,"click"],[1,"template-preview"],[1,"preview-icon"],[1,"preview-title"],[1,"preview-body"],[1,"preview-line"],[1,"preview-line","short"],[1,"template-info"],[1,"template-colors"],[1,"color-dot"],["class","selected-badge",4,"ngIf"],[1,"selected-badge"],[1,"document-export-item"],[1,"document-icon"],[1,"document-info-export"],[1,"document-meta"],[1,"separator"],[1,"export-buttons"],["title","Download as Plain Text",1,"export-btn","txt",3,"click"],[1,"btn-icon"],[1,"btn-label"],["title","Download as HTML with your design",1,"export-btn","html",3,"click"],["title","Download as PDF with your design",1,"export-btn","pdf",3,"click"],[1,"compliance-checker-section"],[1,"compliance-status"],[1,"status-card"],[1,"status-icon"],[4,"ngIf"],[1,"compliance-guide-card"],[1,"checklist"],[1,"checklist-item"],["type","checkbox","checked","","disabled",""],["type","checkbox",3,"checked"],["type","checkbox"],[1,"advanced-compliance-card"],[1,"guide-section"],[1,"guide-hero"],[1,"guide-card"],[1,"cost-comparison-card"],[1,"comparison-table"],[1,"total-row"]],template:function(i,r){i&1&&(t(0,"div",1),O(1,"div",2)(2,"div",3)(3,"div",4),t(4,"header",5)(5,"div",6)(6,"div",7),n(7,"\u{1F512} 100% Free & Compliant"),e(),t(8,"h1"),n(9,"Privacy Policy & Terms Generator "),t(10,"span",8),n(11),e()(),t(12,"p",9),n(13,"Generate GDPR, CCPA, COPPA compliant privacy policies, terms of service, and cookie policies instantly. Free alternative to Termly ($10/mo) and PrivacyPolicies ($14/mo). Perfect for websites, apps, and businesses."),e(),t(14,"div",10)(15,"div",11),n(16,"\u{1F512} GDPR Compliant"),e(),t(17,"div",11),n(18,"\u{1F4DC} 6 Document Types"),e(),t(19,"div",11),n(20,"\u26A1 Instant Generation"),e(),t(21,"div",11),n(22,"\u{1F4E5} Download All"),e()()()(),t(23,"div",12)(24,"nav",13),_(25,Se,5,4,"button",14),e(),_(26,Te,62,8,"div",15)(27,Re,124,19,"div",15)(28,Le,6,3,"div",15)(29,Ve,138,11,"div",15)(30,Ke,72,18,"div",15)(31,Xe,231,1,"div",15),e(),t(32,"section",16)(33,"div",17)(34,"h2"),n(35),e(),t(36,"p"),n(37,"Generate professional, legally compliant privacy policies, terms of service, and cookie policies for your website or app. 100% free alternative to Termly ($10/month) and PrivacyPolicies ($14/month). GDPR, CCPA, COPPA, PIPEDA, and LGPD compliant. Instant generation with customization options. Perfect for websites, mobile apps, SaaS businesses, and e-commerce stores. Used by 200M+ websites worldwide."),e()()()()),i&2&&(s(11),v(r.currentYear),s(14),u("ngForOf",r.tabs),s(),u("ngIf",r.activeTab==="setup"),s(),u("ngIf",r.activeTab==="customize"),s(),u("ngIf",r.activeTab==="preview"),s(),u("ngIf",r.activeTab==="download"),s(),u("ngIf",r.activeTab==="compliance"),s(),u("ngIf",r.activeTab==="guide"),s(4),R("Privacy Policy Generator ",r.currentYear," \u2014 Free GDPR/CCPA Compliant Templates"))},dependencies:[te,ne,xe,fe,de,ge,ce,ue,pe,ye,he,me,ie,oe],styles:["[_nghost-%COMP%]{--primary: #10b981;--primary-dark: #059669;--primary-light: #34d399;--success: #10b981;--warning: #f59e0b;--danger: #ef4444}.header-content[_ngcontent-%COMP%]{margin-top:28px}.privacy-page[_ngcontent-%COMP%]{min-height:100vh;background:#f0fdf4;font-family:Inter,sans-serif;position:relative}.bg-orb[_ngcontent-%COMP%]{position:fixed;border-radius:50%;pointer-events:none;filter:blur(80px)}.bg-orb-1[_ngcontent-%COMP%]{width:600px;height:600px;background:radial-gradient(circle,rgba(16,185,129,.15),transparent 70%);top:-150px;right:-200px;animation:_ngcontent-%COMP%_orbFloat 15s ease-in-out infinite}.bg-orb-2[_ngcontent-%COMP%]{width:500px;height:500px;background:radial-gradient(circle,rgba(52,211,153,.12),transparent 70%);bottom:20%;left:-150px;animation:_ngcontent-%COMP%_orbFloat 18s ease-in-out infinite reverse}.bg-orb-3[_ngcontent-%COMP%]{width:400px;height:400px;background:radial-gradient(circle,rgba(167,243,208,.1),transparent 70%);top:50%;right:10%;animation:_ngcontent-%COMP%_orbFloat 12s ease-in-out infinite 3s}@keyframes _ngcontent-%COMP%_orbFloat{0%,to{transform:translateY(0)}50%{transform:translateY(-30px)}}.page-header[_ngcontent-%COMP%]{position:relative;z-index:1;background:linear-gradient(135deg,#059669,#10b981,#34d399);color:#fff;padding:clamp(48px,8vw,80px) clamp(20px,5vw,60px) 40px;text-align:center}.header-badge[_ngcontent-%COMP%]{display:inline-block;background:#fff3;border:1px solid rgba(255,255,255,.3);padding:6px 16px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:16px}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(28px,5vw,52px);font-weight:800;margin:0 0 16px}.year-badge[_ngcontent-%COMP%]{background:#ffffff40;border-radius:8px;padding:2px 10px;font-size:.8em}.header-subtitle[_ngcontent-%COMP%]{font-size:clamp(15px,2vw,18px);opacity:.9;max-width:680px;margin:0 auto 24px}.header-stats[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}.stat-pill[_ngcontent-%COMP%]{background:#fff3;border:1px solid rgba(255,255,255,.3);border-radius:100px;padding:6px 14px;font-size:13px}.main-container[_ngcontent-%COMP%]{max-width:1280px;margin:0 auto;padding:24px clamp(16px,4vw,40px) 48px;position:relative;z-index:1}.tab-nav[_ngcontent-%COMP%]{display:flex;gap:4px;background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:6px;margin-bottom:24px;overflow-x:auto;box-shadow:0 2px 8px #10b98114}.tab-btn[_ngcontent-%COMP%]{flex:1;min-width:120px;display:flex;align-items:center;justify-content:center;gap:8px;padding:10px 16px;border:none;border-radius:10px;background:transparent;font-size:14px;font-weight:500;cursor:pointer;transition:.3s;font-family:inherit}.tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;font-weight:700;box-shadow:0 4px 12px #10b9814d}.tab-panel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.setup-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;margin-bottom:24px}.setup-card[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%], .download-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;box-shadow:0 2px 8px #10b98114}.setup-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:18px;margin:0 0 16px}.form-group[_ngcontent-%COMP%]{margin-bottom:16px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:700;margin-bottom:6px}.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{width:100%;padding:12px;border:2px solid rgba(16,185,129,.2);border-radius:10px;font-size:15px;font-family:inherit}.form-input[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none}.form-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.document-checklist[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.doc-checkbox-label[_ngcontent-%COMP%]{display:flex;gap:12px;padding:12px;border:2px solid rgba(16,185,129,.12);border-radius:10px;cursor:pointer;transition:.3s}.doc-checkbox-label[_ngcontent-%COMP%]:has(input:checked){border-color:var(--primary);background:#10b9810f}.doc-checkbox[_ngcontent-%COMP%]{width:20px;height:20px}.doc-info[_ngcontent-%COMP%]{flex:1}.doc-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;margin-bottom:4px}.doc-icon[_ngcontent-%COMP%]{font-size:20px}.doc-name[_ngcontent-%COMP%]{font-weight:700;font-size:15px}.required-badge[_ngcontent-%COMP%]{padding:3px 8px;background:#ef44441a;color:#dc2626;border-radius:6px;font-size:11px;font-weight:700}.doc-description[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.action-center[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:16px}.action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:12px 24px;border-radius:10px;border:none;font-size:14px;font-weight:700;cursor:pointer;transition:.3s;font-family:inherit}.action-btn.primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;box-shadow:0 4px 12px #10b9814d}.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 6px 20px #10b98166}.action-btn.secondary[_ngcontent-%COMP%]{background:#10b98114;color:var(--primary)}.action-btn.large[_ngcontent-%COMP%]{padding:16px 32px;font-size:16px}.checkbox-grid[_ngcontent-%COMP%], .compliance-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:16px}.checkbox-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px;border:1px solid rgba(16,185,129,.12);border-radius:8px;cursor:pointer}.checkbox-label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:18px;height:18px}.compliance-label[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:12px;border:2px solid rgba(16,185,129,.12);border-radius:10px;cursor:pointer;transition:.3s}.compliance-label[_ngcontent-%COMP%]:has(input:checked){border-color:var(--primary);background:#10b9810f}.compliance-info[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.compliance-icon[_ngcontent-%COMP%]{font-size:24px}.services-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;margin-bottom:16px}.service-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:12px;background:#10b9810f;border-radius:8px}.service-category[_ngcontent-%COMP%]{padding:3px 8px;background:#10b98133;border-radius:6px;font-size:11px;margin-left:10px}.remove-btn[_ngcontent-%COMP%]{background:#ef4444;color:#fff;border:none;border-radius:6px;padding:4px 10px;cursor:pointer;font-weight:700}.add-service[_ngcontent-%COMP%]{display:flex;gap:10px}.options-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:16px}.preview-tabs[_ngcontent-%COMP%]{display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap}.preview-tab-btn[_ngcontent-%COMP%]{padding:10px 16px;border:2px solid rgba(16,185,129,.12);border-radius:10px;background:#fff;cursor:pointer;font-weight:600;transition:.3s;font-family:inherit}.preview-tab-btn.active[_ngcontent-%COMP%]{border-color:var(--primary);background:#10b9810f}.preview-document[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;margin-bottom:24px}.preview-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:16px}.preview-actions[_ngcontent-%COMP%]{display:flex;gap:10px}.preview-paper[_ngcontent-%COMP%]{background:#fafafa;border:1px solid #e5e7eb;border-radius:10px;padding:30px;max-height:600px;overflow-y:auto}.preview-text[_ngcontent-%COMP%]{font-family:Courier New,monospace;font-size:13px;line-height:1.8;white-space:pre-wrap;margin:0}.download-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:20px;margin-bottom:32px}.download-icon[_ngcontent-%COMP%]{font-size:48px;text-align:center;margin-bottom:12px}.download-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin:0 0 8px;text-align:center}.download-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;text-align:center;margin:0 0 16px}.download-buttons[_ngcontent-%COMP%]{display:flex;gap:10px}.download-btn[_ngcontent-%COMP%]{flex:1;padding:10px;border:none;border-radius:8px;font-weight:700;cursor:pointer;transition:.3s;font-family:inherit}.download-btn.txt[_ngcontent-%COMP%]{background:#3b82f6;color:#fff}.download-btn.html[_ngcontent-%COMP%]{background:#8b5cf6;color:#fff}.download-all-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b98114,#34d39914);border:2px solid rgba(16,185,129,.2);border-radius:16px;padding:32px;text-align:center;margin-bottom:32px}.implementation-guide[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px}.implementation-guide[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0 0 20px}.guide-steps[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.guide-step[_ngcontent-%COMP%]{display:flex;gap:16px}.step-number[_ngcontent-%COMP%]{width:36px;height:36px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}.guide-step[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:15px;margin:0 0 4px}.guide-step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.compliance-status[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:16px;margin-bottom:32px}.status-card[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:#fff;border:2px solid rgba(16,185,129,.12);border-radius:12px}.status-card.compliant[_ngcontent-%COMP%]{border-color:var(--success);background:#10b9810f}.status-icon[_ngcontent-%COMP%]{font-size:32px}.status-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;margin:0 0 6px}.status-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:#6b7280;margin:0}.compliance-guide-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px;margin-bottom:24px}.checklist[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px;margin-top:16px}.checklist-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;padding:10px;cursor:pointer}.checklist-item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:20px;height:20px}.advanced-compliance-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#10b98114,#34d39914);border:2px solid rgba(16,185,129,.2);border-radius:16px;padding:32px;text-align:center}.guide-section[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;display:flex;flex-direction:column;gap:24px}.guide-hero[_ngcontent-%COMP%]{text-align:center}.guide-hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:clamp(24px,3vw,36px);margin:0 0 8px}.guide-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:28px}.guide-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:0 0 14px}.guide-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:#6b7280;line-height:1.7;margin:0 0 16px}.guide-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:16px 0;padding-left:20px}.guide-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:14px;margin-bottom:8px}.cost-comparison-card[_ngcontent-%COMP%]{background:#fff;border:1px solid rgba(16,185,129,.12);border-radius:16px;padding:24px}.comparison-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:16px}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .comparison-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:12px;text-align:left;border-bottom:1px solid rgba(16,185,129,.1)}.comparison-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#10b98114;font-weight:700;font-size:13px}.total-row[_ngcontent-%COMP%]{background:#10b9810f;font-weight:700}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:60px 20px;background:#fff;border:2px dashed rgba(16,185,129,.2);border-radius:16px}.empty-icon[_ngcontent-%COMP%]{font-size:56px;margin-bottom:16px}.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;margin:0 0 8px}.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#6b7280;font-size:14px;margin:0 0 20px}.seo-content[_ngcontent-%COMP%]{background:#10b98108;border-top:1px solid rgba(16,185,129,.12);padding:40px clamp(16px,5vw,60px)}.seo-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 12px}.seo-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#6b7280;line-height:1.8;margin:0}@media (max-width:1200px){.setup-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}@media (max-width:768px){.tab-btn[_ngcontent-%COMP%]{min-width:100px;font-size:12px}.checkbox-grid[_ngcontent-%COMP%], .compliance-grid[_ngcontent-%COMP%], .options-grid[_ngcontent-%COMP%], .form-row[_ngcontent-%COMP%]{grid-template-columns:1fr}.download-buttons[_ngcontent-%COMP%]{flex-direction:column}}[_nghost-%COMP%]{--primary: #1e40af;--primary-dark: #1e3a8a;--primary-light: #3b82f6;--accent: #0891b2;--accent-light: #06b6d4;--success: #059669;--warning: #d97706;--danger: #dc2626;--bg-main: #f8fafc;--bg-card: #ffffff;--text-primary: #0f172a;--text-secondary: #475569;--text-muted: #64748b;--border: #e2e8f0;--border-dark: #cbd5e1;--shadow-sm: 0 1px 3px rgba(15, 23, 42, .08);--shadow-md: 0 4px 12px rgba(15, 23, 42, .1);--shadow-lg: 0 10px 40px rgba(15, 23, 42, .12);--shadow-xl: 0 20px 60px rgba(15, 23, 42, .15);--radius-sm: 8px;--radius-md: 12px;--radius-lg: 16px;--radius-xl: 20px}.privacy-page[_ngcontent-%COMP%]{min-height:100vh;background:var(--bg-main);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Helvetica Neue,sans-serif;position:relative;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bg-orb[_ngcontent-%COMP%]{position:fixed;border-radius:50%;pointer-events:none;filter:blur(120px);opacity:.4;z-index:0}.bg-orb-1[_ngcontent-%COMP%]{width:800px;height:800px;background:radial-gradient(circle,rgba(30,64,175,.15),transparent 70%);top:-200px;right:-300px;animation:_ngcontent-%COMP%_orbFloat 20s ease-in-out infinite}.bg-orb-2[_ngcontent-%COMP%]{width:600px;height:600px;background:radial-gradient(circle,rgba(8,145,178,.12),transparent 70%);bottom:-100px;left:-200px;animation:_ngcontent-%COMP%_orbFloat 25s ease-in-out infinite reverse}.bg-orb-3[_ngcontent-%COMP%]{width:500px;height:500px;background:radial-gradient(circle,rgba(59,130,246,.1),transparent 70%);top:40%;right:15%;animation:_ngcontent-%COMP%_orbFloat 18s ease-in-out infinite 3s}@keyframes _ngcontent-%COMP%_orbFloat{0%,to{transform:translateY(0) scale(1)}50%{transform:translateY(-40px) scale(1.05)}}.page-header[_ngcontent-%COMP%]{position:relative;z-index:1;background:linear-gradient(135deg,#1e3a8a,#1e40af,#3b82f6);color:#fff;padding:clamp(60px,10vw,100px) clamp(24px,5vw,60px) 50px;text-align:center;box-shadow:0 4px 20px #1e40af33}.header-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:8px;background:#ffffff26;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);padding:8px 20px;border-radius:100px;font-size:14px;font-weight:600;margin-bottom:20px;box-shadow:0 2px 8px #0000001a}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:clamp(32px,5.5vw,56px);font-weight:800;margin:0 0 20px;letter-spacing:-.02em;line-height:1.1}.year-badge[_ngcontent-%COMP%]{background:#fff3;backdrop-filter:blur(10px);border-radius:10px;padding:4px 14px;font-size:.75em;font-weight:700;vertical-align:middle}.header-subtitle[_ngcontent-%COMP%]{font-size:clamp(16px,2.2vw,19px);opacity:.95;max-width:720px;margin:0 auto 30px;line-height:1.6;font-weight:400}.header-stats[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}.stat-pill[_ngcontent-%COMP%]{background:#ffffff26;backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);border-radius:100px;padding:8px 18px;font-size:14px;font-weight:500;box-shadow:0 2px 6px #00000014}.main-container[_ngcontent-%COMP%]{max-width:1400px;margin:0 auto;padding:32px clamp(20px,4vw,48px) 60px;position:relative;z-index:1}.tab-nav[_ngcontent-%COMP%]{display:flex;gap:6px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:8px;margin-bottom:32px;overflow-x:auto;box-shadow:var(--shadow-sm)}.tab-btn[_ngcontent-%COMP%]{flex:1;min-width:140px;display:flex;align-items:center;justify-content:center;gap:10px;padding:14px 20px;border:none;border-radius:var(--radius-md);background:transparent;color:var(--text-secondary);font-size:15px;font-weight:600;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);font-family:inherit;white-space:nowrap}.tab-btn[_ngcontent-%COMP%]:hover{background:#1e40af0d;color:var(--primary);transform:translateY(-1px)}.tab-btn.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;font-weight:700;box-shadow:0 4px 16px #1e40af40}.tab-icon[_ngcontent-%COMP%]{font-size:18px}.setup-card[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%], .template-selector-card[_ngcontent-%COMP%], .color-picker-card[_ngcontent-%COMP%], .documents-export-card[_ngcontent-%COMP%], .bulk-download-card[_ngcontent-%COMP%], .implementation-guide-card[_ngcontent-%COMP%], .tips-card[_ngcontent-%COMP%]{background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius-lg);padding:32px;box-shadow:var(--shadow-md);margin-bottom:24px}.setup-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .customize-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--text-primary);margin:0 0 20px;display:flex;align-items:center;gap:10px}.section-subtitle[_ngcontent-%COMP%], .template-description[_ngcontent-%COMP%]{font-size:15px;color:var(--text-secondary);margin:-8px 0 24px;line-height:1.6}.template-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:20px;margin-top:24px}.template-option[_ngcontent-%COMP%]{background:var(--bg-card);border:2px solid var(--border);border-radius:var(--radius-md);padding:16px;cursor:pointer;transition:all .3s;position:relative}.template-option[_ngcontent-%COMP%]:hover{border-color:var(--primary);box-shadow:var(--shadow-lg);transform:translateY(-4px)}.template-option.selected[_ngcontent-%COMP%]{border-color:var(--primary);background:#1e40af05;box-shadow:0 0 0 4px #1e40af1a}.template-preview[_ngcontent-%COMP%]{background:#f8fafc;border-radius:8px;padding:16px;margin-bottom:16px;height:180px;display:flex;flex-direction:column;gap:8px}.preview-icon[_ngcontent-%COMP%]{font-size:32px;text-align:center}.preview-header[_ngcontent-%COMP%]{height:40px;border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px}.preview-body[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:6px;justify-content:center}.preview-line[_ngcontent-%COMP%]{height:8px;border-radius:4px;opacity:.6}.preview-line.short[_ngcontent-%COMP%]{width:60%;opacity:.4}.template-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin:0 0 6px;color:var(--text-primary)}.template-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;color:var(--text-secondary);margin:0 0 12px;line-height:1.5}.template-colors[_ngcontent-%COMP%]{display:flex;gap:8px}.color-dot[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:2px solid white;box-shadow:0 2px 8px #00000026}.selected-badge[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px;background:var(--success);color:#fff;padding:4px 12px;border-radius:100px;font-size:12px;font-weight:700;box-shadow:0 2px 8px #0596694d}.color-inputs[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;margin-top:24px}.color-input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;color:var(--text-primary);margin-bottom:10px}.color-picker-wrapper[_ngcontent-%COMP%]{display:flex;gap:12px;align-items:center}.color-input[_ngcontent-%COMP%]{width:60px;height:48px;border:2px solid var(--border);border-radius:var(--radius-sm);cursor:pointer;transition:all .3s}.color-input[_ngcontent-%COMP%]:hover{border-color:var(--primary)}.color-text-input[_ngcontent-%COMP%]{flex:1;height:48px;padding:0 16px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:Monaco,Courier New,monospace;font-weight:600}.color-text-input[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none}.color-preview[_ngcontent-%COMP%]   .preview-sample[_ngcontent-%COMP%]{height:100px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:18px;box-shadow:var(--shadow-md)}.documents-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px;margin-top:24px}.document-export-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;padding:24px;background:var(--bg-main);border:2px solid var(--border);border-radius:var(--radius-md);transition:all .3s}.document-export-item[_ngcontent-%COMP%]:hover{border-color:var(--primary);box-shadow:var(--shadow-md)}.document-icon[_ngcontent-%COMP%]{font-size:40px;flex-shrink:0}.document-info-export[_ngcontent-%COMP%]{flex:1}.document-info-export[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 6px;color:var(--text-primary)}.document-meta[_ngcontent-%COMP%]{font-size:14px;color:var(--text-muted);display:flex;align-items:center;gap:8px;flex-wrap:wrap}.separator[_ngcontent-%COMP%]{color:var(--border-dark)}.export-buttons[_ngcontent-%COMP%]{display:flex;gap:12px;flex-wrap:wrap}.export-btn[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 20px;border:2px solid var(--border);border-radius:var(--radius-sm);background:var(--bg-card);cursor:pointer;transition:all .3s;font-family:inherit;min-width:80px}.export-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}.export-btn.txt[_ngcontent-%COMP%]{border-color:#3b82f6;color:#3b82f6}.export-btn.txt[_ngcontent-%COMP%]:hover{background:#3b82f6;color:#fff}.export-btn.html[_ngcontent-%COMP%]{border-color:#8b5cf6;color:#8b5cf6}.export-btn.html[_ngcontent-%COMP%]:hover{background:#8b5cf6;color:#fff}.export-btn.pdf[_ngcontent-%COMP%]{border-color:#dc2626;color:#dc2626}.export-btn.pdf[_ngcontent-%COMP%]:hover{background:#dc2626;color:#fff}.btn-icon[_ngcontent-%COMP%]{font-size:24px}.btn-label[_ngcontent-%COMP%]{font-size:12px;font-weight:700;text-transform:uppercase}.bulk-download-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#1e40af0d,#3b82f60d);border:2px solid var(--primary)}.bulk-content[_ngcontent-%COMP%]{display:flex;align-items:center;gap:24px;margin-bottom:24px}.bulk-icon[_ngcontent-%COMP%]{font-size:64px}.bulk-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:24px;font-weight:800;margin:0 0 8px;color:var(--text-primary)}.bulk-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:var(--text-secondary);margin:0}.implementation-steps[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:24px;margin-top:24px}.impl-step[_ngcontent-%COMP%]{display:flex;gap:20px;padding:24px;background:var(--bg-main);border-radius:var(--radius-md);border-left:4px solid var(--primary)}.step-badge[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:900;flex-shrink:0;box-shadow:0 4px 12px #1e40af4d}.step-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:18px;font-weight:700;margin:0 0 8px;color:var(--text-primary)}.step-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:var(--text-secondary);margin:0 0 12px;line-height:1.6}.step-code[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px;margin-top:12px}.step-code[_ngcontent-%COMP%]   code[_ngcontent-%COMP%]{display:inline-block;padding:8px 16px;background:#1e293b;color:#10b981;border-radius:6px;font-family:Monaco,Courier New,monospace;font-size:13px}.step-note[_ngcontent-%COMP%]{padding:12px 16px;background:#0891b214;border-left:3px solid var(--accent);border-radius:6px;margin-top:12px;font-size:14px;color:var(--text-secondary)}.step-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--accent)}.tips-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:24px}.tip-item[_ngcontent-%COMP%]{display:flex;gap:16px;padding:20px;background:var(--bg-main);border-radius:var(--radius-md);border:1px solid var(--border)}.tip-icon[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:900;flex-shrink:0}.tip-text[_ngcontent-%COMP%]{font-size:14px;line-height:1.6;color:var(--text-secondary)}.tip-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:var(--text-primary);display:block;margin-bottom:4px}.form-group[_ngcontent-%COMP%]{margin-bottom:20px}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;font-size:14px;font-weight:600;color:var(--text-primary);margin-bottom:8px}.form-input[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%]{width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:var(--radius-sm);font-size:15px;font-family:inherit;background:var(--bg-card);color:var(--text-primary);transition:all .3s}.form-input[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus{border-color:var(--primary);outline:none;box-shadow:0 0 0 4px #1e40af1a}.action-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:14px 28px;border-radius:var(--radius-md);border:none;font-size:15px;font-weight:700;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);font-family:inherit;white-space:nowrap}.action-btn.primary[_ngcontent-%COMP%]{background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;box-shadow:0 4px 16px #1e40af40}.action-btn.primary[_ngcontent-%COMP%]:hover:not(:disabled){transform:translateY(-2px);box-shadow:0 8px 24px #1e40af59}.action-btn.secondary[_ngcontent-%COMP%]{background:#1e40af14;border:2px solid var(--primary);color:var(--primary)}.action-btn.secondary[_ngcontent-%COMP%]:hover{background:var(--primary);color:#fff}.action-btn.large[_ngcontent-%COMP%]{padding:16px 36px;font-size:16px}.action-btn[_ngcontent-%COMP%]:disabled{opacity:.5;cursor:not-allowed}@media (max-width: 1200px){.template-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(auto-fit,minmax(200px,1fr))}}@media (max-width: 768px){.tab-btn[_ngcontent-%COMP%]{min-width:110px;font-size:13px;padding:12px 16px}.document-export-item[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start}.export-buttons[_ngcontent-%COMP%]{width:100%;justify-content:stretch}.export-btn[_ngcontent-%COMP%]{flex:1}.color-inputs[_ngcontent-%COMP%]{grid-template-columns:1fr}.bulk-content[_ngcontent-%COMP%]{flex-direction:column;text-align:center}}.tab-panel[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeSlideIn .4s cubic-bezier(.4,0,.2,1)}@keyframes _ngcontent-%COMP%_fadeSlideIn{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}.seo-content[_ngcontent-%COMP%]{background:var(--bg-card);border-top:1px solid var(--border);padding:48px clamp(20px,5vw,60px);box-shadow:inset 0 1px 3px #0f172a0d}.seo-inner[_ngcontent-%COMP%]{max-width:900px;margin:0 auto}.seo-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700;color:var(--text-primary);margin:0 0 16px}.seo-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;color:var(--text-secondary);line-height:1.8;margin:0}"]})};var Ze=[{path:"",component:z}],U=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=L({type:c});static \u0275inj=G({imports:[B.forChild(Ze),B]})};var Pe=class c{static \u0275fac=function(i){return new(i||c)};static \u0275mod=L({type:c});static \u0275inj=G({imports:[re,be,U,Ce]})};export{Pe as PrivacyGeneratorModule};
