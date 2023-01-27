/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

//https://deno.land/x/croner@5.4.1
import Cron from "https://deno.land/x/croner@5.4.1/src/croner.js";

// Cron("* * * * * *", () => {
//     console.log("[cron] bilibili Fetch JSON To Redis");
// });

import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";

import twindPlugin from "$fresh/plugins/twind.ts";
import twindConfig from "./twind.config.ts";

await start(manifest, { plugins: [twindPlugin(twindConfig)] });
