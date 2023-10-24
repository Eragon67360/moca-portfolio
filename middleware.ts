import createMiddleware from "next-intl/middleware";
import { authMiddleware } from "@clerk/nextjs";


const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "de", "fr", "es"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
  localeDetection: false
});

export default authMiddleware({
  beforeAuth: (req) => {
    // Execute next-intl middleware before Clerk's auth middleware
    return intlMiddleware(req);
  },
 
  // Ensure that locale specific sign-in pages are public
  publicRoutes: ["/", "/:locale/sign-in",'/home','/about','/contact','/booking','/privacy', '/payment'],
});


export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
