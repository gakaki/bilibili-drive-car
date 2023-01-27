import { HandlerContext } from "$fresh/server.ts";
// import { encode, decode } from "https://deno.land/std/encoding/base64.ts"

import {
    decode,
    encode,
  } from "https://deno.land/std@0.174.0/encoding/base64.ts";
  

export const handler = (_req: Request, _ctx: HandlerContext): Response =>  {
    const data = _req.body.getReader().read()
    console.log(data)
    // const decoder = new TextDecoder()
    // console.log(decoder.decode(_req.body))

    // // let need_decode_str = _req.body.replace("SAMLResponse=","")
    // // let d = decode(need_decode_str)
    // // console.log(d,need_decode_str)    

    return new Response(_req.body);
//   return new Response(body);
};
