import { useNavigate, useParams } from 'react-router-dom';
import IntroRenderer from '../components/test/IntroRenderer';
import { TESTS } from "../data/TESTS";
import { useEffect, useState } from 'react';
import IntroMetatagRenderer from "../components/metatagRenderer/IntroMetatagRenderer";

function Test(){
    const {testParam} = useParams(); //동적 파라미터 
    const [currentTest, setCurrentTest] = useState({});
    const navigate = useNavigate();
    
    useEffect(()=>{
        //1. testParam이 우리 DB에 존재하는가 필터링
        //1-1 존재 X : alert로 안내 후 Home으로 라우팅
        //1-2 존재 O : 해당 테스트의 콘텐츠를 렌더링
        const theTest = TESTS?.find((test)=> test?.info?.mainUrl === testParam)
        if(!theTest){
            alert("해당 테스트는 존재하지 않습니다.");
            return navigate("/");
        }
        setCurrentTest(theTest);
    },[testParam,navigate]);

    return (
        <div>
            <IntroMetatagRenderer currentTest={currentTest}/>
            <IntroRenderer currentTest={currentTest}/>
        </div>
    )
}

export default Test;