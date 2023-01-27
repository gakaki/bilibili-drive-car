import { HandlerContext, Handlers } from "$fresh/server.ts";

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

			console.log("Method:", req.method);

			const url = new URL(req.url);
			console.log("Path:", url.pathname);
			console.log("Query parameters:", url.searchParams);
		
			console.log("Headers:", req.headers);
		
			if (req.body) {
				const body = await req.text();
				console.log("Body:", body);
			}
		
			return new Response("Hello, World!");
  }
};