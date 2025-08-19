"use strict";
exports.id = 461;
exports.ids = [461];
exports.modules = {

/***/ 6461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLanguage),
/* harmony export */   "i": () => (/* binding */ LanguageProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
// contexts/LanguageContext.js


const LanguageContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
function LanguageProvider({ children  }) {
    const [language, setLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("ar"); // 'ar' pour arabe, 'fr' pour français
    const translations = {
        ar: {
            // Navigation
            home: "الرئيسية",
            about: "عن الوكالة",
            projects: "المشاريع",
            events: "الفعاليات",
            roadmap: "خارطة الطريق",
            recruitment: "التوظيف",
            contact: "اتصل بنا",
            // Header
            agencyName: "الوكالة الرقمية للدولة",
            agencySubtitle: "AN-ETAT",
            heroTitle: "الوكالة الرقمية للدولة",
            heroSubtitle: "قيادة التحول الرقمي نحو مستقبل متطور ومبتكر",
            discoverProjects: "اكتشف مشاريعنا",
            contactUs: "تواصل معنا",
            // Projects Page
            projectsTitle: "المشاريع والمبادرات الرقمية",
            projectsSubtitle: "استكشف المشاريع الرقمية الرائدة التي تقود التحول التكنولوجي في موريتانيا",
            completedProjects: "مشاريع مكتملة",
            inProgress: "قيد التنفيذ",
            inDesign: "في التصميم",
            planned: "مخطط ومقترح",
            progressRate: "نسبة الإنجاز",
            startDate: "بداية",
            endDate: "نهاية",
            mainFeatures: "الميزات الأساسية",
            suggestProject: "اقتراح مشروع جديد",
            viewAllProjects: "عرض جميع المشاريع",
            haveProjectIdea: "هل لديك فكرة مشروع رقمي؟",
            projectIdeaText: "نحن نسعى دائماً لتطوير حلول رقمية مبتكرة تخدم المواطنين وتحسن الخدمات الحكومية. شاركنا أفكارك ومقترحاتك للمساهمة في التحول الرقمي.",
            // Events Page
            eventsTitle: "الفعاليات والأنشطة",
            eventsSubtitle: "اكتشف الفعاليات والأنشطة التي تنظمها الوكالة الرقمية للدولة",
            upcomingEvents: "فعاليات قادمة",
            openRegistration: "مفتوح للتسجيل",
            completed: "مكتملة",
            ongoing: "جارية",
            registerNow: "سجل الآن",
            registrationClosed: "انتهى التسجيل",
            suggestEvent: "اقتراح فعالية",
            viewAllEvents: "عرض جميع الفعاليات",
            wantToOrganize: "هل تريد تنظيم فعالية؟",
            eventText: "نحن نرحب بالشراكة مع المؤسسات والمنظمات لتنظيم فعاليات رقمية مشتركة تساهم في تطوير المجتمع الرقمي في موريتانيا.",
            // About Page
            aboutTitle: "عن الوكالة الرقمية للدولة",
            aboutSubtitle: "تعرف على رؤيتنا ومهمتنا وقيمنا في قيادة التحول الرقمي",
            ourVision: "رؤيتنا",
            ourMission: "مهمتنا",
            coreValues: "قيمنا الأساسية",
            innovation: "الابتكار",
            collaboration: "التعاون",
            efficiency: "الكفاءة",
            security: "الأمان",
            history: "مسيرتنا التاريخية",
            organizationalStructure: "هيكلنا التنظيمي",
            generalManagement: "الإدارة العامة",
            technicalDepartment: "القسم التقني",
            projectManagement: "إدارة المشاريع",
            contactCTA: "تواصل معنا",
            contactCTAText: "هل لديك استفسارات حول خدماتنا أو تريد معرفة المزيد عن مشاريعنا؟",
            contactNow: "اتصل بنا الآن",
            // Footer
            quickLinks: "روابط سريعة",
            aboutUs: "من نحن",
            contactInfo: "تواصل معنا",
            copyright: "\xa9 2024 الوكالة الرقمية للدولة - جميع الحقوق محفوظة",
            // Language Switcher
            switchToFrench: "Fran\xe7ais",
            switchToArabic: "العربية"
        },
        fr: {
            // Navigation
            home: "Accueil",
            about: "\xc0 propos",
            projects: "Projets",
            events: "\xc9v\xe9nements",
            roadmap: "Feuille de route",
            recruitment: "Recrutement",
            contact: "Contact",
            // Header
            agencyName: "Agence Num\xe9rique de l'\xc9tat",
            agencySubtitle: "AN-ETAT",
            heroTitle: "Agence Num\xe9rique de l'\xc9tat",
            heroSubtitle: "Diriger la transformation num\xe9rique vers un avenir \xe9volu\xe9 et innovant",
            discoverProjects: "D\xe9couvrir nos projets",
            contactUs: "Nous contacter",
            // Projects Page
            projectsTitle: "Projets et Initiatives Num\xe9riques",
            projectsSubtitle: "D\xe9couvrez les projets num\xe9riques pionniers qui dirigent la transformation technologique en Mauritanie",
            completedProjects: "Projets termin\xe9s",
            inProgress: "En cours",
            inDesign: "En conception",
            planned: "Planifi\xe9s et propos\xe9s",
            progressRate: "Taux de progression",
            startDate: "D\xe9but",
            endDate: "Fin",
            mainFeatures: "Fonctionnalit\xe9s principales",
            suggestProject: "Sugg\xe9rer un nouveau projet",
            viewAllProjects: "Voir tous les projets",
            haveProjectIdea: "Avez-vous une id\xe9e de projet num\xe9rique ?",
            projectIdeaText: "Nous cherchons toujours \xe0 d\xe9velopper des solutions num\xe9riques innovantes qui servent les citoyens et am\xe9liorent les services gouvernementaux. Partagez vos id\xe9es et suggestions pour contribuer \xe0 la transformation num\xe9rique.",
            // Events Page
            eventsTitle: "\xc9v\xe9nements et Activit\xe9s",
            eventsSubtitle: "D\xe9couvrez les \xe9v\xe9nements et activit\xe9s organis\xe9s par l'Agence Num\xe9rique de l'\xc9tat",
            upcomingEvents: "\xc9v\xe9nements \xe0 venir",
            openRegistration: "Inscriptions ouvertes",
            completed: "Termin\xe9s",
            ongoing: "En cours",
            registerNow: "S'inscrire maintenant",
            registrationClosed: "Inscriptions ferm\xe9es",
            suggestEvent: "Sugg\xe9rer un \xe9v\xe9nement",
            viewAllEvents: "Voir tous les \xe9v\xe9nements",
            wantToOrganize: "Voulez-vous organiser un \xe9v\xe9nement ?",
            eventText: "Nous accueillons le partenariat avec les institutions et organisations pour organiser des \xe9v\xe9nements num\xe9riques conjoints qui contribuent au d\xe9veloppement de la soci\xe9t\xe9 num\xe9rique en Mauritanie.",
            // About Page
            aboutTitle: "\xc0 propos de l'Agence Num\xe9rique de l'\xc9tat",
            aboutSubtitle: "D\xe9couvrez notre vision, notre mission et nos valeurs dans la direction de la transformation num\xe9rique",
            ourVision: "Notre Vision",
            ourMission: "Notre Mission",
            coreValues: "Nos Valeurs Fondamentales",
            innovation: "Innovation",
            collaboration: "Collaboration",
            efficiency: "Efficacit\xe9",
            security: "S\xe9curit\xe9",
            history: "Notre Parcours Historique",
            organizationalStructure: "Notre Structure Organisationnelle",
            generalManagement: "Direction G\xe9n\xe9rale",
            technicalDepartment: "D\xe9partement Technique",
            projectManagement: "Gestion de Projets",
            contactCTA: "Contactez-nous",
            contactCTAText: "Avez-vous des questions sur nos services ou souhaitez-vous en savoir plus sur nos projets ?",
            contactNow: "Contactez-nous maintenant",
            // Footer
            quickLinks: "Liens rapides",
            aboutUs: "\xc0 propos",
            contactInfo: "Contactez-nous",
            copyright: "\xa9 2024 Agence Num\xe9rique de l'\xc9tat - Tous droits r\xe9serv\xe9s",
            // Language Switcher
            switchToFrench: "Fran\xe7ais",
            switchToArabic: "العربية"
        }
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    const toggleLanguage = ()=>{
        setLanguage(language === "ar" ? "fr" : "ar");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t,
            toggleLanguage
        },
        children: children
    });
}
function useLanguage() {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}


/***/ })

};
;