import { Helmet } from "react-helmet";
import { base_url } from "../../App";
import { useSearchParams } from "react-router-dom";

const MainMetatagRenderer = () => {
  const [searchParams] = useSearchParams();
  const language = searchParams.get("lang") || "Kor";
  if (language === "Kor") {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>테스트코코 - 나의 또 다른 모습을 찾는 심리테스트(MBTI,연애,성격,아이돌 세계관,애니 세계관,엠비티아이)</title>
        <meta name="title" content="테스트코코 - 나의 또 다른 모습을 찾는 심리테스트(MBTI,연애,성격,아이돌세계관,드라마세계관,애니세계관,엠비티아이)" />
        <meta
          name="description"
          content="나의 또 다른 모습을 찾을 수 있는 심리테스트 및 MBTI 테스트 : 심리테스트,MBTI 테스트,MBTI 검사,엠비티아이테스트,엠비티아이검사,MBTI 궁합,성격테스트,연애심리테스트,아이돌 세계관 기반 심리테스트,애니 세계관 기반 심리테스트,드라마 세계관 기반 심리테스트,스낵테스트"
        />
        <meta name="application-name" content="테스트코코"/>
        <meta
          name="keywords"
          content="심리테스트,MBTI 테스트,MBTI 검사,엠비티아이검사,엠비티아이테스트,MBTI 궁합,성격테스트,연애심리테스트,아이돌 세계관 기반 심리테스트,애니 세계관 기반 심리테스트,드라마 세계관 기반 심리테스트,스낵테스트,MBTI 유형-ESTJ,ESTP,ESFJ,ESFP,ENTJ,ENTP,ENFJ,ENFP,ISTJ,ISTP,ISFJ,ISFP,INTJ,INTP,INFJ,INFP"
        />
        <meta name="creator" content="테스트코코"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="테스트코코 - 나의 또 다른 모습을 찾는 심리테스트(MBTI,연애,성격,아이돌세계관,드라마세계관,애니세계관,엠비티아이)" />
        <meta
          property="og:description"
          content="나의 또 다른 모습을 찾을 수 있는 심리테스트 및 MBTI 테스트 : 심리테스트,MBTI 테스트,MBTI 검사,엠비티아이테스트,엠비티아이검사,MBTI 궁합,성격테스트,연애심리테스트,아이돌 세계관 기반 심리테스트,애니 세계관 기반 심리테스트,드라마 세계관 기반 심리테스트,스낵테스트"
        />
        <meta property="og:url" content={base_url} />
        <meta property="og:site_name" content="테스트코코" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:title" content="테스트코코 - 나의 또 다른 모습을 찾는 심리테스트(MBTI,연애,성격,아이돌세계관,드라마세계관,애니세계관,엠비티아이)" />
        <meta
          property="twitter:description"
          content="나의 또 다른 모습을 찾을 수 있는 심리테스트 및 MBTI 테스트 : 심리테스트,MBTI 테스트,MBTI 검사,엠비티아이테스트,엠비티아이검사,MBTI 궁합,성격테스트,연애심리테스트,아이돌 세계관 기반 심리테스트,애니 세계관 기반 심리테스트,드라마 세계관 기반 심리테스트,스낵테스트"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="테스트코코" />
        <meta property="twitter:url" content={base_url} />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
        <meta
          property="twitter:image:alt"
          content="테스트코코"
        />
      </Helmet>
    );
  } else if (language === "Jp") {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>テストココ - 自分の新たな一面を見つけるための心理テスト（MBTI、恋愛、性格、アイドルの世界観、アニメの世界観）</title>
        <meta name="title" content="テストココ - 自分の新たな一面を見つけるための心理テスト（MBTI、恋愛、性格、アイドルの世界観、アニメの世界観）" />
        <meta
          name="description"
          content="自分の新たな一面を発見できる心理テスト・MBTIテスト：心理テスト、MBTIテスト、MBTI診断、MBTI相性、性格診断、恋愛心理テスト、アイドル世界観ベースの心理テスト、アニメ世界観ベースの心理テスト、ドラマ世界観ベースの心理テスト、スナックテスト"
        />
        <meta name="application-name" content="テストココ"/>
        <meta
          name="keywords"
          content="心理テスト、MBTIテスト、MBTI診断、MBTI相性診断、性格診断、恋愛心理テスト、アイドル世界観ベースの心理テスト、アニメ世界観ベースの心理テスト、ドラマ世界観ベースの心理テスト、スナックテスト、MBTIタイプ – ESTJ、ESTP、ESFJ、ESFP、ENTJ、ENTP、ENFJ、ENFP、ISTJ、ISTP、ISFJ、ISFP、INTJ、INTP、INFJ、INFP"
        />
        <meta name="creator" content="テストココ"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url} />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="テストココ - 自分の新たな一面を見つけるための心理テスト（MBTI、恋愛、性格、アイドルの世界観、アニメの世界観）" />
        <meta
          property="og:description"
          content="自分の新たな一面を発見できる心理テスト・MBTIテスト：心理テスト、MBTIテスト、MBTI診断、MBTI相性、性格診断、恋愛心理テスト、アイドル世界観ベースの心理テスト、アニメ世界観ベースの心理テスト、ドラマ世界観ベースの心理テスト、スナックテスト"
        />
        <meta property="og:url" content={base_url} />
        <meta property="og:site_name" content="テストココ" />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
        {/* <!-- Twitter --> */}
        <meta property="twitter:title" content="テストココ - 自分の新たな一面を見つけるための心理テスト（MBTI、恋愛、性格、アイドルの世界観、アニメの世界観）" />
        <meta
          property="twitter:description"
          content="自分の新たな一面を発見できる心理テスト・MBTIテスト：心理テスト、MBTIテスト、MBTI診断、MBTI相性、性格診断、恋愛心理テスト、アイドル世界観ベースの心理テスト、アニメ世界観ベースの心理テスト、ドラマ世界観ベースの心理テスト、スナックテスト"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="テストココ" />
        <meta property="twitter:url" content={base_url} />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
        <meta
          property="twitter:image:alt"
          content="テストココ"
        />
      </Helmet>
    );
  } else {
    return (
      <Helmet>
        {/* <!-- Primary Meta Tags --> */}
        <title>TestKOKO - Personality tests to discover another side of you (MBTI,Love,Personality,Idol universes,Anime universes)</title>
        <meta name="title" content="TestKOKO - Personality tests to discover another side of you (MBTI,Love,Personality,Idol universes,Anime universes)" />
        <meta
          name="description"
          content="Discover another side of yourself with personality and MBTI tests: personality tests, MBTI tests, MBTI assessments, MBTI compatibility, character tests, love psychology tests, kpop universe-based personality tests, anime universe-based personality tests, drama universe-based personality tests, and snack-style tests."
        />
        <meta
          name="keywords"
          content="Personality tests, MBTI tests, MBTI assessments, MBTI compatibility, character tests, love psychology tests, kpop universe-based tests, anime universe-based tests, drama universe-based tests, snack-style tests, MBTI types – ESTJ, ESTP, ESFJ, ESFP, ENTJ, ENTP, ENFJ, ENFP, ISTJ, ISTP, ISFJ, ISFP, INTJ, INTP, INFJ, INFP"
        />
        <meta name="creator" content="TestKOKO"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={base_url + "/?lang=Eng"} />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:title" content="TestKOKO - Personality tests to discover another side of you (MBTI,Love,Personality,Idol universes,Anime universes)" />
        <meta
          property="og:description"
          content="Discover another side of yourself with personality and MBTI tests: personality tests, MBTI tests, MBTI assessments, MBTI compatibility, character tests, love psychology tests, kpop universe-based personality tests, anime universe-based personality tests, drama universe-based personality tests, and snack-style tests."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={base_url + "/?lang=Eng"} />
        <meta property="og:site_name" content="TestKOKO" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:title" content="TestKOKO - Personality tests to discover another side of you (MBTI,Love,Personality,Idol universes,Anime universes)" />
        <meta
          property="twitter:description"
          content="Discover another side of yourself with personality and MBTI tests: personality tests, MBTI tests, MBTI assessments, MBTI compatibility, character tests, love psychology tests, kpop universe-based personality tests, anime universe-based personality tests, drama universe-based personality tests, and snack-style tests."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="TestKOKO" />
        <meta property="twitter:url" content={base_url} />
        <meta
          property="twitter:image"
          content="https://www.dropbox.com/scl/fi/x2b3tms9ml6kbz3vcot9h/personalColorEng-thumb.png?rlkey=alaxfwbswgfn34xao2zm99a84&st=zvw3w510&dl=1"
        />
        <meta
          property="twitter:image:alt"
          content="TestKOKO"
        />
      </Helmet>
    );
  }
};

export default MainMetatagRenderer;