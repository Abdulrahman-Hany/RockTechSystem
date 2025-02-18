const translations = {
    ar: {
      nav: {
        home: "الرئيسية",
        about: "المميزات",
        services: "القطاعات",
        products: "الاسئلة الشائعة",
        Contact: "سياسة الخصوصية",
      },
      subscribebtn: "إشترك الان",
      home_slider: "الرئيسية",
      about_slider: "المميزات",
      services_slider: "القطاعات",
      products_slider: "الاسئلة الشائعة",
      Contact_slider: "سياسة الخصوصية",
      
      company_text:"يعد روك تك برنامج ERP متكامل يعمل على مساعدتك في إدارة كل جوانب أعمالك بواجهة سهلة الاستخدام تدعم اللغة العربية، أصدر فواتيرك وأدِر مبيعاتك ومخزونك وعملائك موظفيك وحساباتك ودورة العمل لديك، مع تطبيقات إدارة شاملة وقابلة للتخصيص لتلبية احتياجات أعمالك، حيث يُمكِنُك استخدامه في أي وقت ومن أي مكان لكونه نظامًا سحابيًا بإجراءات أمان قوية تضمن سلامة بياناتك.",
      quick_links_title:"روابط سريعة",
      quick_links_title_two:"تابعنا",
      quick_link_item_1:"الرئيسية",
      quick_link_item_2:"اتصل بنا",
      quick_link_item_3:"عن الشركة",
      copyright_text:"حقوق النسخ محفوظة © نظام روك تك المحاسبي",
      titel_img_banner:"سياسة الخصوصية",
      party_desc_1: '<span class="party-highlight">الطرف الأول</span>، شركة مسار سوقت لتقنية المعلومات (مقدم الخدمة)',
      party_desc_2: '<span class="party-highlight">الطرف الثاني</span>، المشتركون بالخدمة',
      agreement_text:"يُمثل هذا العقد اتفاقية رسمية بين شركة مسار سوقت لتقنية المعلومات والمشتركين بالخدمة. كما يحق للشركة إجراء تغييرات على هذه الاتفاقية دون الحاجة لموافقة الطرف الثاني.",    
      nav_item_1:"الشروط العامة",
      nav_item_2:"الشروط المالية والاسترداد",
      nav_item_3:"أمن المعلومات",
      nav_item_4:"حماية الخصوصية",
      section_title_1:"الشروط العامة",
      section_title_2:"الشروط المالية والاسترداد",
      section_title_3:"أمن المعلومات",
      section_title_4:"حماية الخصوصية ",
      terms_content_1:"مدة العقد سنة ميلادية كاملة وتجدد تلقائيًا مالم يشعر أحد الأطراف الآخر برغبته بعدم التجديد قبل انتهائه المدة بثلاثين يومًا.",
      terms_content_2:"يحق لأحد طرفي العقد فسخه بشرط إبلاغ الطرف الآخر قبل ثلاثين يومًا من انتهاء مدة الاشتراك، ويجوز للطرف الثاني طلب نسخة احتياطية من بياناته إذا توافرت، ويحدد أجر في حالة القيام بذلك.",
      terms_content_3:"تلتزم شركة مسار سوفت لتقنية المعلومات بتقديم الصيانة خلال فترة العقد، كما تقوم شركة مسار سوفت لتقنية المعلومات بمعالجة الأعطال البرمجية خلال مدة لا تتجاوز ٤٨ ساعة من وقت علمها الحقيقي بذلك.",
      terms_content_4:"يجب على العميل توفير متطلبات العمل على النظام، وتتحمل مسؤولية أي إخلال بالمعايير والمتطلبات المتعارف عليها، ومن ذلك على سبيل المثال، توفير أجهزة الحاسوب الحديثة والمتوافقة مع طبيعة البرنامج، وتوفير الإنترنت عالي السرعة لضمان فعالية عمل النظام.",
      terms_content_5:"نحاول أن يكون نظامنا لا يحتوي على أي خطأ أو عيب أو خلل، فذلك لتتحمل المسؤولية في أي ضرر أو فقد للبيانات على نظام الكمبيوتر الشخصي للمشترك أو الشبكة أو الخادم الناتج عن استخدام النظام أو تنزيل أي مواد يتم توفيرها عبر هذا النظام.",
      terms_content_6:"لا يمكننا أن نعد بأن الوصول إلى موقعنا سيكون خاليًا من الأخطاء أو منقطًا في جميع الأوقات.",
      terms_content_7:"قد يكون هناك أيضًا حالات يتم فيها قطع الوصول إلى الإرشادات الطارئة أو إجراء ترقيات لتحسين أداء وظائف النظام، قد يتم قطع الوصول بسبب فشل ومعدات الاتصالات السلكية واللاسلكية، والتي تكون خارجة عن إرادتنا.",
      terms_content_8:"إذا كان لديك حساب غير نشط لمدة ستة أشهر (أو وفقًا لما تحدده شركة مسار سوفت لتقنية المعلومات)، فقد نقوم بإلغاء تنشيط حسابك - لا يتم حذف الحسابات المعطلة، حيث نقوم بإعلامك عبر البريد الإلكتروني.",
      terms_content_9:"في حال قررنا إلغاء تنشيط حسابك، إذا قمت بتنشيط حسابك مسبقًا في أي وقت ما ولم ترد منا إلغاء تنشيطه، فأخبرنا. إذا كان حسابك غير نشط بعد تنشيط يتم إنهاؤه في أي وقت وبدون سابق إنذار.",
      terms_content_10:"يحق لـشركة مسار سوفت لتقنية المعلومات إنهاء أي حساب إذا خالف المستخدم شروطها وسياساتها من أي التزام تجاه المشترك.",
      contact_info_1:"يجب على العميل إبلاغ شركة مسار سوفت لتقنية المعلومات بالأعطال بالوسائل المناسبة، ومن ذلك عن طريق البريد الإلكتروني التالي:",
      contact_info_2:"📧 info@masarsoft.com أو عبر واتساب: 📞 ٩٦٦٥١٠١٣٦٩٩٠+  ",

      terms_content_two_1:"تقوم شركة مسار سوفت لتقنية المعلومات بإرجاع أي مبلغ مالي مدفوع على البرمجيات خلال فترة لا تتجاوز ١٤ يوم من تاريخ الاشتراك.",
      terms_content_two_2:"يجب على العميل تأمين الأجهزة الإلكترونية المطلوبة، وإذا قام العميل باتفاق ببرنامج مستقل مع شركة مسار سوفت لتقنية المعلومات بتأمين بعض الأجهزة اللازمة، فإن شركة مسار سوفت لتقنية المعلومات لا تضمنها ولا تتعهد بصيانتها ولا يشمل مصطلح الصيانة بموجب هذا العقد صيانة أي جهاز إلكتروني بل يقتصر على النظام.",
      terms_content_two_3:"يتم سداد الاشتراكات عن طريق التحويل المباشر على حساب الشركة ويجب على المشتري تقديم تفاصيل عن ذلك عند تقديم طلب للحصول على خدماتنا.",
      terms_content_two_4:"نحتفظ بالحق في تعديل أسعار الاشتراكات دون إبلاغ أو تحذير آخر. مع العلم بأن أي تعديل أو تغيير في رسوم الاشتراك يسري فقط على المشتركين الجدد أو التجديد في الاشتراكات، ولن يؤثر على الاشتراكات الحالية.",
      terms_content_two_5:"أسعار الاشتراك موضحة على موقع www.msmart.space.",

      terms_content_three_1:"الإجراءات والتدابير المشددة لحماية أمن المعلومات والتقنية التي نستخدمها للوقاية من عمليات الاحتيال والدخول غير المصرح به إلى النظام.",
      terms_content_three_2:"التحديث المنتظم والدوري للإجراءات وضوابط الحماية.",
      terms_content_three_3:"يجب على المشترك إبلاغنا عن المشاكل والأعطال عبر الإيميل info@masarsoft.com أو الواتساب +٩٦٦٥١٠١٣٦٩٩٠ كما نحذر من إعطاء أي معلومات تخص الاشتراك إلى أي طرف آخر.",
      terms_content_three_4:"شركة مسار سوفت لتقنية المعلومات ليست مسؤولة عن أي بيانات يسيجلها المشترك في النظام، ونشجع شركة مسار سوفت لتقنية المعلومات جميع المستخدمين على الحفاظ على المعلومات الدقيقة وتحديثها سواء داخليًا أو تمت مشاركتها مع طرق ثالث.",
      terms_content_three_5:"أن موظفينا مؤهلون ومدربون على احترام سرية المعلومات الخاصة بالمشتركين.",

      terms_content_four_1:"الاتصال بنا بشكل فوري عندما تظن أن شخصًا ما استطاع الحصول على كلمة السر الخاصة بك، أو رمز الاستخدام، أو الرقم السري، أو أي معلومات سرية أخرى.",
      terms_content_four_2:"لا تزود معلومات سرية عبر الهاتف أو شبكة الإنترنت ما لم تعرف هوية الشخص أو الطرف المستقبل للمعلومة.",
      terms_content_four_3:"استخدم متصفحًا آمنًا عند قيامك بإنجاز المعاملات عبر الإنترنت مع إغلاق التطبيقات غير المستخدمة على الشبكة، وتأكد من أن برنامج الحماية من الفيروسات محدث على الدوام.",
    },
    en: {
        nav: {
            home: "Home",
            about: "Features",
            services: "Sectors",
            products: "Frequently Asked Questions",
            Contact: "Privacy Policy",
        },
    subscribebtn: "Subscribe now",
    about_slider: "Features",
    
    home_slider: "Home",
      services_slider: "Sectors",
      products_slider: "Frequently Asked Questions",
      Contact_slider: "Privacy Policy",
      
      company_text:"Rock Tech is a comprehensive ERP program that helps you manage all aspects of your business with an easy-to-use interface that supports the Arabic language. Issue your invoices and manage your sales, inventory, clients, employees, accounts, and workflow with comprehensive and customizable management applications to meet your business needs, as it can be used anytime and anywhere since it is a cloud-based system with strong security measures to ensure the safety of your data.",
      quick_links_title:"Quick Links",
      quick_links_title_two:"Follow Us",
      quick_link_item_1:"Home",
      quick_link_item_2:"Contact Us",
      quick_link_item_3:"About the Company",
      copyright_text:"Copyright © Rock Tech Accounting System",
      titel_img_banner:"Privacy Policy",
      party_desc_1: '<span class="party-highlight">The first party</span> Masar Souqat for Information Technology (the service provider)',
      party_desc_2: '<span class="party-highlight">The second party</span> the service subscribers',  
      agreement_text:"This contract represents a formal agreement between Masar Souqat for Information Technology and the service subscribers. The company also has the right to make changes to this agreement without the need for the second party's consent.",    
      nav_item_1:"General Terms",
      nav_item_2:"Financial Terms and Refund Policy",
      nav_item_3:"Information Security",
      nav_item_4:"Privacy Protection",
      section_title_1:"General Terms",
      section_title_2:"Financial Terms </br> and Refunds",
      section_title_3:"Information Security",
      section_title_4:"Privacy Protection",
      terms_content_1:"The contract duration is a full Gregorian year and automatically renews unless one party notifies the other of its desire not to renew at least thirty days before the end of the term.",
      terms_content_2:"Either party has the right to terminate the contract provided that the other party is notified thirty days before the subscription period ends, and the second party may request a backup copy of its data if available, with a fee specified for doing so.",
      terms_content_3:"Masar Soft for Information Technology is committed to providing maintenance during the contract period, and Masar Soft for Information Technology will address software malfunctions within no more than 48 hours from the time it becomes aware of them.",
      terms_content_4:"The client must provide the system's work requirements and is responsible for any breach of the recognized standards and requirements, including, for example, providing modern computers compatible with the nature of the program, and providing high-speed internet to ensure the system's effectiveness.",
      terms_content_5:"We strive to ensure that our system is free of any errors, defects, or faults, as you bear responsibility for any damage or loss of data on the subscriber's personal computer, network, or server resulting from the use of the system or downloading any materials provided through this system.",
      terms_content_6:"We cannot guarantee that access to our site will be error-free or uninterrupted at all times.",
      terms_content_7:"There may also be instances where access to emergency instructions is interrupted or upgrades are conducted to improve system functionality; access may be interrupted due to failures and wired or wireless communication equipment, which are beyond our control.",
      terms_content_8:"If you have an inactive account for six months (or as determined by Masar Soft for Information Technology), we may deactivate your account - inactive accounts are not deleted, and we will notify you via email.",
      terms_content_9:"If we decide to deactivate your account, if you have previously activated your account at any time and do not wish for us to deactivate it, please let us know. If your account remains inactive after activation, it may be terminated at any time without prior notice.",
      terms_content_10:"Masar Soft for Information Technology has the right to terminate any account if the user violates its terms and policies without any obligation towards the subscriber.",
      contact_info_1:"The client must notify Masar Soft for Information Technology of any malfunctions through appropriate means, including the following email:",
      contact_info_2:"📧 info@masarsoft.com or via WhatsApp: 📞 +966510136990",

      terms_content_two_1:"Masar Soft for Information Technology will refund any payment made for software within a period not exceeding 14 days from the date of subscription.",
      terms_content_two_2:"The client must secure the required electronic devices, and if the client enters into an agreement with Masar Soft for Information Technology to secure certain necessary devices, Masar Soft for Information Technology does not guarantee them and is not obligated to maintain them, and the term maintenance under this contract is limited to the system only.",
      terms_content_two_3:"Subscriptions are paid via direct transfer to the company's account, and the buyer must provide details of that when requesting our services.",
      terms_content_two_4:"We reserve the right to change subscription prices without further notice or warning. Please note that any modification or change in subscription fees applies only to new subscribers or renewals, and will not affect current subscriptions.",
      terms_content_two_5:"Subscription prices are detailed on the website www.msmart.space.",

      terms_content_three_1:"The procedures and measures taken to protect information security and the technology we use to prevent fraud and unauthorized access to the system.",
      terms_content_three_2:"Regular and periodic updates of procedures and security controls.",
      terms_content_three_3:"The subscriber must inform us of any issues and malfunctions via email at info@masarsoft.com or WhatsApp at +966510136990. We also warn against sharing any subscription-related information with any third party.",
      terms_content_three_4:"Masar Soft for Information Technology is not responsible for any data recorded by the subscriber in the system, and we encourage all users to maintain accurate information and update it whether internally or shared with third parties.",
      terms_content_three_5:"Our employees are qualified and trained to respect the confidentiality of subscriber information.",
      
      terms_content_four_1:"Contact us immediately if you believe someone has gained access to your password, access code, PIN, or any other confidential information.",
      terms_content_four_2:"Do not provide confidential information over the phone or online unless you know the identity of the person or entity receiving the information.",
      terms_content_four_3:"Use a secure browser when conducting online transactions, close unused applications on the network, and ensure that your antivirus software is always up to date.",
    },
  };
  
  const loadLanguage = () => {
    const savedLang = localStorage.getItem("selectedLang") || "en";
    const selectedLang = translations[savedLang]; 
    const langToggle = document.getElementById("language-toggle");
  
    document.querySelector(".header .nav-links a:nth-child(1)").textContent = selectedLang.nav.home;
    document.querySelector(".header .nav-links a:nth-child(2)").textContent = selectedLang.nav.about;
    document.querySelector(".header .nav-links a:nth-child(3)").textContent = selectedLang.nav.services;
    document.querySelector(".header .nav-links a:nth-child(4)").textContent = selectedLang.nav.products;
    document.querySelector(".header .nav-links a:nth-child(5)").textContent = selectedLang.nav.Contact;
    document.querySelector(".subscribe-btn span").textContent = selectedLang.subscribebtn;
    const sidebar = document.querySelectorAll(".sidebar ul a li span");
    sidebar[0].textContent = selectedLang.home_slider;
    sidebar[1].textContent = selectedLang.about_slider;
    sidebar[2].textContent = selectedLang.services_slider;
    sidebar[3].textContent = selectedLang.products_slider;
    sidebar[4].textContent = selectedLang.Contact_slider;
    document.querySelector(".subscribe-btn.side span").textContent = selectedLang.Contact_slider;
    
    document.querySelector(".company-text").textContent = selectedLang.company_text;
    document.querySelector(".quick-links-title").textContent = selectedLang.quick_links_title;
    document.querySelector(".quick-links-title.two").textContent = selectedLang.quick_links_title_two;
    document.querySelector(".copyright-text").textContent = selectedLang.copyright_text;
    const quick_link_item = document.querySelectorAll(".quick-links-list .quick-link-item");
    quick_link_item[0].textContent = selectedLang.quick_link_item_1;
    quick_link_item[1].textContent = selectedLang.quick_link_item_2;
    quick_link_item[2].textContent = selectedLang.quick_link_item_3;
    document.querySelector(".titel-img-banner h2").textContent = selectedLang.titel_img_banner;
    const party_desc = document.querySelectorAll(".party-description");
    party_desc[0].innerHTML = selectedLang.party_desc_1;
    party_desc[1].innerHTML = selectedLang.party_desc_2;
    document.querySelector(".agreement-text").textContent = selectedLang.agreement_text;
    const nav_item = document.querySelectorAll(".nav-tabs .nav-item");
    nav_item[0].textContent = selectedLang.nav_item_1;
    nav_item[1].textContent = selectedLang.nav_item_2;
    nav_item[2].textContent = selectedLang.nav_item_3;
    nav_item[3].textContent = selectedLang.nav_item_4;
    const section_title = document.querySelectorAll(".content-wrapperr .section-title");
    section_title[0].textContent = selectedLang.section_title_1;
    section_title[1].innerHTML = selectedLang.section_title_2;
    section_title[2].textContent = selectedLang.section_title_3;
    section_title[3].textContent = selectedLang.section_title_4;
    const terms_content = document.querySelectorAll(".terms-content.one .term-item");
    terms_content[0].textContent = selectedLang.terms_content_1;
    terms_content[1].textContent = selectedLang.terms_content_2;
    terms_content[2].textContent = selectedLang.terms_content_3;
    terms_content[3].textContent = selectedLang.terms_content_4;
    terms_content[4].textContent = selectedLang.terms_content_5;
    terms_content[5].textContent = selectedLang.terms_content_6;
    terms_content[6].textContent = selectedLang.terms_content_7;
    terms_content[7].textContent = selectedLang.terms_content_8;
    terms_content[8].textContent = selectedLang.terms_content_9;
    terms_content[9].textContent = selectedLang.terms_content_10;
    const contact_info = document.querySelectorAll(".terms-content.one .contact-info p");
    contact_info[0].textContent = selectedLang.contact_info_1;
    contact_info[1].textContent = selectedLang.contact_info_1;

    const terms_content_two = document.querySelectorAll(".terms-content.two .term-item");
    terms_content_two[0].textContent = selectedLang.terms_content_two_1;
    terms_content_two[1].textContent = selectedLang.terms_content_two_2;
    terms_content_two[2].textContent = selectedLang.terms_content_two_3;
    terms_content_two[3].textContent = selectedLang.terms_content_two_4;
    terms_content_two[4].textContent = selectedLang.terms_content_two_5;

    const terms_content_three = document.querySelectorAll(".terms-content.three .term-item");
    terms_content_three[0].textContent = selectedLang.terms_content_three_1;
    terms_content_three[1].textContent = selectedLang.terms_content_three_2;
    terms_content_three[2].textContent = selectedLang.terms_content_three_3;
    terms_content_three[3].textContent = selectedLang.terms_content_three_4;
    terms_content_three[4].textContent = selectedLang.terms_content_three_5;
    const terms_content_four = document.querySelectorAll(".terms-content.four .term-item");
    terms_content_four[0].textContent = selectedLang.terms_content_four_1;
    terms_content_four[1].textContent = selectedLang.terms_content_four_2;
    terms_content_four[2].textContent = selectedLang.terms_content_four_3;
    
    langToggle.checked = savedLang === "en";
    updatePageLanguage(savedLang);
  };
  
  const updatePageLanguage = (lang) => {
    const selectedLang = translations[lang];
    document.querySelector("title").textContent = selectedLang.title || "Title"; 
    document.documentElement.style.direction = selectedLang.direction || "rtl"; 
    document.documentElement.style.direction = lang === "en" ? "ltr" : "rtl";
  };
  
  document
    .getElementById("language-toggle")
    .addEventListener("change", function () {
      const lang = this.checked ? "en" : "ar";
      localStorage.setItem("selectedLang", lang);
      location.reload();
    });
  
  loadLanguage();  