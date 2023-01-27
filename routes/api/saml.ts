import { encode, decode } from "https://deno.land/std/encoding/base64.ts"
import { HandlerContext, Handlers } from "$fresh/server.ts"
import { unescape } from "https://deno.land/std@0.170.0/node/querystring.ts";
import {parse} from "https://denopkg.com/ThauEx/deno-fast-xml-parser/mod.ts";

export const handler: Handlers = {
  async POST(req: Request, ctx: HandlerContext): Promise<Response> {
    // const payload = req.body

    // if (payload === null) {
    //   return new Response("Invalid request: body is null");
    // }
    // console.log(payload)
    // const decoder = new TextDecoder()
    // for await (const chunk of payload) {
    //   // decode the bytes into a string and print it
    //   console.log(decoder.decode(chunk))
    // }

    // console.log("Method:", req.method);
    
    // const url = new URL(req.url);
    // console.log("Path:", url.pathname);
    // console.log("Query parameters:", url.searchParams);


    if (req.body) {

        const body  = await req.text();
        let res     = unescape(body)
        res         = res.replace("SAMLResponse=","")
        res         = decode(res)
        let str     = new TextDecoder().decode(res);
        // console.log(str)

        const parsed = parse(str);
        // console.log(parsed);
        return new Response(JSON.stringify(parsed));
    }

    return new Response("Hello, World!");
  }
};
