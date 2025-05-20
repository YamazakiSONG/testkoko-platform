import { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BLOGS } from '../data/BLOGS';
import BlogRenderer from '../components/blog/BlogRenderer';
import BlogMetatagRenderer from '../components/metatagRenderer/BlogMetatagRendere';

// Blog 컴포넌트 정의
function Blog(){
    const {testParam, resultParam} = useParams();
    const navigate = useNavigate();
    const [blogContent, setBlogContent] = useState(null);

    // 블로그 콘텐츠 찾기 함수를 메모이제이션
    const findBlogContent = useCallback(() => {
      const theBlog = BLOGS.find(blog => 
        blog.testUrl === testParam && blog.resultParam === resultParam
      );
      
      if(!theBlog){
        alert("해당 블로그 글은 존재하지 않습니다!");
        navigate('/');
        return null;
      }
      
      return theBlog;
    }, [testParam, resultParam, navigate]);

    useEffect(() => {
      // 이미 블로그 콘텐츠가 있고 동일한 파라미터라면 재계산 방지
      if (blogContent && 
          blogContent.testUrl === testParam && 
          blogContent.resultParam === resultParam) {
        return;
      }

      const theBlog = findBlogContent();
      if (theBlog) {
        setBlogContent(theBlog);
      }
    }, [testParam, resultParam, blogContent, findBlogContent]);

    // 블로그 콘텐츠가 없다면 로딩 처리
    if (!blogContent) return <div>로딩 중...</div>;

    return (
      <div>
        <BlogMetatagRenderer content={blogContent}/>
        <BlogRenderer content={blogContent}/>
      </div>
    );
}

// memo로 컴포넌트 래핑: React 19에서 권장되는 방식
export default memo(Blog);