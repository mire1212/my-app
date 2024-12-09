import createMiddleware from "next-intl/middleware";

export default createMiddleware({
    locales: ['fi', 'swe', 'en'],
    defaultLocale: 'fi'
});

export const config = {
    matcher: ['/', '/(fi|swe|en)/:path*']
}