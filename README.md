# Repro Datadog / Next.js

Attempt to plug [`dd-trace`](https://github.com/DataDog/dd-trace-js) to NextJS through [Instrumentation experimental hook](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation).

While building the application, we can see there some issues :


```sh
❯ pnpm build

> @ build /Users/TERENCE/Dev/workspace-perso/repro-datadog-nextjs
> next build

- warn You have enabled experimental feature (instrumentationHook) in next.config.js.
- warn Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.

Failed to compile.

./node_modules/@datadog/native-iast-rewriter/js/source-map/index.js:2:0
Module not found: Can't resolve 'path'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/native-iast-rewriter/main.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/rewriter.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/index.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/index.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./instrumentation.ts

./node_modules/@datadog/native-iast-rewriter/js/source-map/index.js:3:0
Module not found: Can't resolve 'fs'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/native-iast-rewriter/main.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/rewriter.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/index.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/index.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./instrumentation.ts

./node_modules/@datadog/native-iast-rewriter/wasm/wasm_iast_rewriter.js:506:0
Module not found: Can't resolve 'path'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/native-iast-rewriter/main.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/rewriter.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/index.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/index.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./instrumentation.ts

./node_modules/@datadog/native-iast-rewriter/wasm/wasm_iast_rewriter.js:507:0
Module not found: Can't resolve 'fs'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/native-iast-rewriter/main.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/rewriter.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/taint-tracking/index.js
./node_modules/dd-trace/packages/dd-trace/src/appsec/iast/index.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./instrumentation.ts

./node_modules/@datadog/pprof/out/src/heap-profiler-bindings.js:42:0
Module not found: Can't resolve 'path'

https://nextjs.org/docs/messages/module-not-found

Import trace for requested module:
./node_modules/@datadog/pprof/out/src/heap-profiler.js
./node_modules/@datadog/pprof/out/src/index.js
./node_modules/dd-trace/packages/dd-trace/src/profiling/profiler.js
./node_modules/dd-trace/packages/dd-trace/src/profiling/index.js
./node_modules/dd-trace/packages/dd-trace/src/profiler.js
./node_modules/dd-trace/packages/dd-trace/src/proxy.js
./node_modules/dd-trace/packages/dd-trace/src/index.js
./node_modules/dd-trace/packages/dd-trace/index.js
./node_modules/dd-trace/index.js
./instrumentation.ts


> Build failed because of webpack errors
- info Creating an optimized production build . ELIFECYCLE  Command failed with exit code 1.

```