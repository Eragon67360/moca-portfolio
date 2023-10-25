import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";

const locales = ["en", "de", "fr", "es"];
const basePublicRoutes = [
  "/",
  "/sign-in",
  "/home",
  "/about",
  "/contact",
  "/booking",
  "/privacy",
  "/payment",
  "/signup",
  "/cancel",
  "/subscriptions",
];

const generatePublicRoutes = (baseRoutes: any, localeList: any) => {
  const allRoutes = [...baseRoutes]; // start with base routes

  // for each locale, generate a route with that locale prefix
  for (const locale of localeList) {
    for (const route of baseRoutes) {
      if (route !== "/") {
        // Skip the base root as it doesn't need a locale prefix
        allRoutes.push(`/${locale}${route}`);
      }
    }
  }

  return allRoutes;
};

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "fr", "es"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: false,
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },

  // Ensure that locale specific sign-in pages are public
  publicRoutes: generatePublicRoutes(basePublicRoutes, locales),
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
