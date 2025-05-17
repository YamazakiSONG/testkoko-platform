import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url"; // ⛔ 빠짐!

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateSitemap() {
  const hostname = "https://testkoko.com";
  const routes = [
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
  ];

  const sitemapStream = new SitemapStream({ hostname });

  for (const route of routes) {
    sitemapStream.write({
      url: route,
      changefreq: "weekly",
      priority: 0.8,
    });
  }
  sitemapStream.end();
/*
  const sitemap = await streamToPromise(sitemapStream);
  const __dirname = path.dirname(new URL(import.meta.url).pathname);
  const outputPath = path.join(__dirname, "dist", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap.toString());
  console.log("sitemap.xml generated!");
  */
  const sitemap = await streamToPromise(sitemapStream);

  // ✅ 경로 생성
  const outputPath = path.join(__dirname, "dist", "sitemap.xml");

  // ✅ dist 폴더가 없으면 생성
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // ✅ 파일 작성
  fs.writeFileSync(outputPath, sitemap.toString(), 'utf-8');


  
  console.log("✅ sitemap.xml successfully generated at:", outputPath);
}

generateSitemap();