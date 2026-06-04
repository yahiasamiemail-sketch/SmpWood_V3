import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "fr"],
  defaultLocale: "fr",
  pathnames: {
    "/": "/",
    "/products": {
      en: "/products",
      fr: "/produits",
    },
    "/contact": {
      en: "/contact",
      fr: "/nous-contacter",
    },
    "/faq": {
      en: "/faq",
      fr: "/faq",
    },
  },
});

export const config = {
  matcher: ["/", "/(fr|en)/:path*"],
};
