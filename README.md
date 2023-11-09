# next-clerk-error-minimal-repo

## Repro

To repro, please run:

* `npm install`
* `npm run build`
* `npm start`
* Navigate to <http://localhost:3000>, which will result in an error: `Application error: a server-side exception has occurred (see the server logs for more information).`

## Error

The nextjs logs output this:

```
Error: Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server".
  {sessionClaims: Null, sessionId: Null, session: ..., userId: ..., user: ..., actor: ..., orgId: ..., orgRole: ..., orgSlug: ..., organization: ..., experimental__has: function}
                                                                                                                                                                         ^^^^^^^^
    at /home/ryan/Projects/next-clerk-error-minimal-repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:25042
    at Object.toJSON (/home/ryan/Projects/next-clerk-error-minimal-repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:25726)
    at stringify (<anonymous>)
    at eE (/home/ryan/Projects/next-clerk-error-minimal-repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:14115)
    at eR (/home/ryan/Projects/next-clerk-error-minimal-repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:14558)
    at Timeout._onTimeout (/home/ryan/Projects/next-clerk-error-minimal-repo/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:76:11338)
    at listOnTimeout (node:internal/timers:569:17)
    at process.processTimers (node:internal/timers:512:7)
```
