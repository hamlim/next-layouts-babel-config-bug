# Bug with Layouts and Babel config

The Layouts feature seems to now break if I include any babel config at all, unsure if this is intentional / planned or if babel is still meant to be supported!

## How to Reproduce:

- Clone the repo
- Install dependencies
- Run `yarn dev`
- Visit `http://localhost:3000` see working page
- Run `mv babel.config.tmpjs babel.config.js`
- Run `yarn dev`
- See below error in the browser and in the terminal

### Example output:

```sh
error - (sc_server)/node_modules/next/dist/client/components/hooks-client-context.js (7:40) @ eval
error - TypeError: (0 , _react).createContext is not a function
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/client/components/hooks-client-context.js:10:41)
    at (sc_server)/./node_modules/next/dist/client/components/hooks-client-context.js (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/app/page.js:208:1)
    at __webpack_require__ (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/client/components/app-router.client.js:22:27)
    at (sc_server)/./node_modules/next/dist/client/components/app-router.client.js (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/app/page.js:197:1)
    at __webpack_require__ (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/webpack-runtime.js:33:42)
    at eval (webpack-internal:///(sc_server)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Fmatt%2Fdev%2Ftemp-debug-layouts-next-sep-23%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!:26:24)
    at (sc_server)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fpage&appPaths=%2Fpage&pagePath=private-next-app-dir%2Fpage.tsx&appDir=%2FUsers%2Fmatt%2Fdev%2Ftemp-debug-layouts-next-sep-23%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js! (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/app/page.js:121:1)
    at __webpack_require__ (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/webpack-runtime.js:33:42)
    at __webpack_exec__ (/Users/matt/dev/temp-debug-layouts-next-sep-23/.next/server/app/page.js:358:39) {
  page: '/'
}
null

```
