import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from "@prerenderer/rollup-plugin";
import PuppeteerRenderer from "@prerenderer/renderer-puppeteer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/attackOnTitanMBTI",
        "/attackOnTitanMBTIEng",
        "/attackOnTitanMBTIJp",
        "/blog/attackOnTitanMBTI",
        "/blog/attackOnTitanMBTIEng",
        "/blog/attackOnTitanMBTIJp",
        "/attackOnTitanMBTI/result/1qe2ws3et4rp", //ESTP
        "/attackOnTitanMBTI/result/1qe2ws3ef4rj", //ESFJ
        "/attackOnTitanMBTI/result/1qe2ws3ef4rp", //ESFP
        "/attackOnTitanMBTI/result/1qe2wn3et4rj", //ENTJ
        "/attackOnTitanMBTI/result/1qe2wn3et4rp", //ENTP
        "/attackOnTitanMBTI/result/1qe2wn3ef4rj", //ENFJ
        "/attackOnTitanMBTI/result/1qe2wn3ef4rp", //ENFP
        "/attackOnTitanMBTI/result/1qi2ws3et4rj", //ISTJ
        "/attackOnTitanMBTI/result/1qi2ws3et4rp", //ISTP
        "/attackOnTitanMBTI/result/1qi2ws3ef4rj", //ISFJ
        "/attackOnTitanMBTI/result/1qi2ws3ef4rp", //ISFP
        "/attackOnTitanMBTI/result/1qi2wn3et4rj", //INTJ
        "/attackOnTitanMBTI/result/1qi2wn3et4rp", //INTP
        "/attackOnTitanMBTI/result/1qi2wn3ef4rj", //INFJ
        "/attackOnTitanMBTI/result/1qi2wn3ef4rp", //INFP
        "/attackOnTitanMBTIEng/result/1qe2ws3et4rj", //ESTJ
        "/attackOnTitanMBTIEng/result/1qe2ws3et4rp", //ESTP
        "/attackOnTitanMBTIEng/result/1qe2ws3ef4rj", //ESFJ
        "/attackOnTitanMBTIEng/result/1qe2ws3ef4rp", //ESFP
        "/attackOnTitanMBTIEng/result/1qe2wn3et4rj", //ENTJ
        "/attackOnTitanMBTIEng/result/1qe2wn3et4rp", //ENTP
        "/attackOnTitanMBTIEng/result/1qe2wn3ef4rj", //ENFJ
        "/attackOnTitanMBTIEng/result/1qe2wn3ef4rp", //ENFP
        "/attackOnTitanMBTIEng/result/1qi2ws3et4rj", //ISTJ
        "/attackOnTitanMBTIEng/result/1qi2ws3et4rp", //ISTP
        "/attackOnTitanMBTIEng/result/1qi2ws3ef4rj", //ISFJ
        "/attackOnTitanMBTIEng/result/1qi2ws3ef4rp", //ISFP
        "/attackOnTitanMBTIEng/result/1qi2wn3et4rj", //INTJ
        "/attackOnTitanMBTIEng/result/1qi2wn3et4rp", //INTP
        "/attackOnTitanMBTIEng/result/1qi2wn3ef4rj", //INFJ
        "/attackOnTitanMBTIEng/result/1qi2wn3ef4rp", //INFP
        "/attackOnTitanMBTIJp/result/1qe2ws3et4rj", //ESTJ
        "/attackOnTitanMBTIJp/result/1qe2ws3et4rp", //ESTP
        "/attackOnTitanMBTIJp/result/1qe2ws3ef4rj", //ESFJ
        "/attackOnTitanMBTIJp/result/1qe2ws3ef4rp", //ESFP
        "/attackOnTitanMBTIJp/result/1qe2wn3et4rj", //ENTJ
        "/attackOnTitanMBTIJp/result/1qe2wn3et4rp", //ENTP
        "/attackOnTitanMBTIJp/result/1qe2wn3ef4rj", //ENFJ
        "/attackOnTitanMBTIJp/result/1qe2wn3ef4rp", //ENFP
        "/attackOnTitanMBTIJp/result/1qi2ws3et4rj", //ISTJ
        "/attackOnTitanMBTIJp/result/1qi2ws3et4rp", //ISTP
        "/attackOnTitanMBTIJp/result/1qi2ws3ef4rj", //ISFJ
        "/attackOnTitanMBTIJp/result/1qi2ws3ef4rp", //ISFP
        "/attackOnTitanMBTIJp/result/1qi2wn3et4rj", //INTJ
        "/attackOnTitanMBTIJp/result/1qi2wn3et4rp", //INTP
        "/attackOnTitanMBTIJp/result/1qi2wn3ef4rj", //INFJ
        "/attackOnTitanMBTIJp/result/1qi2wn3ef4rp", //INFP
        "/areYouT",
        "/areYouTEng",
        "/areYouTJp",
        "/areYouT/result/qsdcred",
        "/areYouT/result/asdascr",
        "/areYouT/result/ascxrcd",
        "/areYouT/result/ascxdda",
        "/areYouTEng/result/qsdcred",
        "/areYouTEng/result/asdascr",
        "/areYouTEng/result/ascxrcd",
        "/areYouTEng/result/ascxdda",
        "/areYouTJp/result/qsdcred",
        "/areYouTJp/result/asdascr",
        "/areYouTJp/result/ascxrcd",
        "/areYouTJp/result/ascxdda",
        "/oldMan",
        "/oldMan/result/cjdbfgk",
        "/oldMan/result/vndsjfo",
        "/oldMan/result/mndsfkn",
      ],
      renderer: PuppeteerRenderer,
      server: {
        port: 3000,
        host: "localhost",
      },
      rendererOptions: {
        maxConcurrentRoutes: 1,
        renderAfterTime: 500, // 이 시간도 매우 크게 늘려봤으나 안됨...
      },
      rendererConfig: {
        // --- 여기가 핵심입니다 ---
        // puppeteer.launch() 함수에 직접 전달되는 옵션들입니다.

        // 프로토콜 타임아웃 늘리기 (단위: 밀리초)
        // 기본값은 30000 (30초)입니다.
        protocolTimeout: 600000, // 60초로 설정, 필요시 더 늘리세요

        // `protocolTimeout`만으로 해결되지 않으면 다른 타임아웃도 고려해볼 수 있습니다:
        timeout: 600000, // Puppeteer 작업 전반에 대한 일반적인 시간 제한
      },
      postProcess(renderedRoute) {
        renderedRoute.html = renderedRoute.html
          .replace(/http:/i, "https:")
          .replace(
            /(https:\/\/)?(localhost|127\.0\.0\.1):\d*/i,
            "https://testkoko.com/"
          );
      },
    }),
   ],
})
