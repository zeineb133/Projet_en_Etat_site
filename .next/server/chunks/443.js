"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 2443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./contexts/LanguageContext.js
var LanguageContext = __webpack_require__(6461);
;// CONCATENATED MODULE: ./components/LanguageSwitcher.js
// components/LanguageSwitcher.js


function LanguageSwitcher() {
    const { language , toggleLanguage , t  } = (0,LanguageContext/* useLanguage */.Z)();
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        onClick: toggleLanguage,
        className: "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-gray-100",
        style: {
            direction: language === "ar" ? "rtl" : "ltr",
            fontFamily: language === "ar" ? "inherit" : "Arial, sans-serif"
        },
        children: language === "ar" ? t("switchToFrench") : t("switchToArabic")
    });
}

;// CONCATENATED MODULE: ./components/Navbar.js
// components/Navbar.js







function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { t , language  } = (0,LanguageContext/* useLanguage */.Z)();
    const menuItems = [
        {
            href: "/",
            label: t("home")
        },
        {
            href: "/about",
            label: t("about")
        },
        {
            href: "/project",
            label: t("projects")
        },
        // 👇 تم حذف news من هنا
        {
            href: "/roadmap",
            label: t("roadmap")
        },
        {
            href: "/event",
            label: t("events")
        },
        {
            href: "/recruitment",
            label: t("recruitment")
        },
        {
            href: "/contact",
            label: t("contact")
        }
    ];
    const isActive = (href)=>{
        return router.pathname === href;
    };
    return /*#__PURE__*/ jsx_runtime.jsx("nav", {
        className: "bg-white shadow-lg sticky top-0 z-50",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex justify-between items-center py-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                            href: "/",
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "w-12 h-12 ml-3",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                        src: "/images/logo.jpg",
                                        alt: "Logo Agence Num\xe9rique",
                                        width: 48,
                                        height: 48,
                                        className: "rounded-full object-cover"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                            className: "text-lg font-bold text-blue-900",
                                            children: t("agencyName")
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-sm text-gray-600",
                                            children: t("agencySubtitle")
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "hidden lg:flex space-x-reverse space-x-6",
                            children: [
                                menuItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: item.href,
                                        className: `px-3 py-2 rounded-md transition-colors duration-200 font-medium ${isActive(item.href) ? "text-blue-900 bg-blue-50 border-b-2 border-blue-900" : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"}`,
                                        children: item.label
                                    }, item.href)),
                                /*#__PURE__*/ jsx_runtime.jsx(LanguageSwitcher, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("button", {
                            className: "lg:hidden text-gray-700 hover:text-blue-900",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: isMenuOpen ? /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }) : /*#__PURE__*/ jsx_runtime.jsx("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M4 6h16M4 12h16M4 18h16"
                                })
                            })
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "lg:hidden py-4 border-t",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            menuItems.map((item)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: item.href,
                                    className: `px-3 py-2 rounded-md transition-colors duration-200 font-medium ${isActive(item.href) ? "text-blue-900 bg-blue-50" : "text-gray-700 hover:text-blue-900 hover:bg-gray-50"}`,
                                    onClick: ()=>setIsMenuOpen(false),
                                    children: item.label
                                }, item.href)),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "px-3 py-2",
                                children: /*#__PURE__*/ jsx_runtime.jsx(LanguageSwitcher, {})
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.js
// components/Layout.js






function Layout({ children  }) {
    const { language , t  } = (0,LanguageContext/* useLanguage */.Z)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        dir: language === "ar" ? "rtl" : "ltr",
        style: {
            fontFamily: language === "ar" ? "inherit" : "Arial, sans-serif"
        },
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "bg-blue-900 text-white py-12 mt-auto",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center mb-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "w-10 h-10 ml-3",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                        src: "/images/logo.jpg",
                                                        alt: "Logo Agence Num\xe9rique",
                                                        width: 40,
                                                        height: 40,
                                                        className: "rounded-lg object-cover"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                                            className: "text-lg font-bold",
                                                            children: t("agencyName")
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            className: "text-sm opacity-80",
                                                            children: t("agencySubtitle")
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "text-blue-200 mb-4",
                                            children: language === "ar" ? "نقود التحول الرقمي في موريتانيا من خلال تطوير حلول تقنية مبتكرة وتقديم خدمات رقمية عالية الجودة." : "Nous dirigeons la transformation num\xe9rique en Mauritanie en d\xe9veloppant des solutions techniques innovantes et en fournissant des services num\xe9riques de haute qualit\xe9."
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex space-x-4 space-x-reverse",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    className: "text-blue-300 hover:text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Facebook"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    className: "text-blue-300 hover:text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Twitter"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                d: "M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#",
                                                    className: "text-blue-300 hover:text-white",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "sr-only",
                                                            children: "LinkedIn"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "currentColor",
                                                            viewBox: "0 0 20 20",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                fillRule: "evenodd",
                                                                d: "M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z",
                                                                clipRule: "evenodd"
                                                            })
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-lg font-semibold mb-4",
                                            children: t("quickLinks")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "space-y-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/about",
                                                        className: "text-blue-200 hover:text-white",
                                                        children: t("aboutUs")
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/project",
                                                        className: "text-blue-200 hover:text-white",
                                                        children: t("projects")
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/recruitment",
                                                        className: "text-blue-200 hover:text-white",
                                                        children: t("recruitment")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                                            className: "text-lg font-semibold mb-4",
                                            children: t("contactInfo")
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                            className: "space-y-2 text-blue-200",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-2",
                                                            children: "\uD83D\uDCCD"
                                                        }),
                                                        language === "ar" ? "نواكشوط، موريتانيا" : "Nouakchott, Mauritanie"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-2",
                                                            children: "\uD83D\uDCE7"
                                                        }),
                                                        "contact@anetat.mr"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-2",
                                                            children: "\uD83D\uDCDE"
                                                        }),
                                                        "+222 45 25 XX XX"
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "border-t border-blue-800 mt-8 pt-8 text-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-blue-200",
                                children: t("copyright")
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;