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
          Bilbili Learn Drive Vehicle
        </p>

        <div class="p-4 mx-auto max-w-screen-md flex space-x-3 space-x-4">
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
          <iframe src="//player.bilibili.com/player.html?aid=389804365&bvid=BV11d4y1C7Rn&cid=880918915&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
        </div>

      </div>
    </>
  );
}
