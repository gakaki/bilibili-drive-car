import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bilibili Learn Drive Auto Vehcile</title>
      </Head>
      <div class="text-2xl p-2 mx-auto max-w-screen-md">
        <p class="my-6">
          Go To Saml Redirect
        </p>

        <div class="p-4 mx-auto max-w-screen-md flex space-x-3 space-x-4">
          <a href="https://idp.myid.disney.com/idp/startSSO.ping?PartnerSpId=shdr-rm-development" target="_blank">to MyID</a>

          <a href="">Log out</a>
        </div>

      </div>
    </>
  );
}
