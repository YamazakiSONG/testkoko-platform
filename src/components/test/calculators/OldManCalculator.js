class OldManCalculator {
    calculate(scores, testData) {
        // 모든 점수를 합산
        const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
        
        // 점수 범위에 따라 타입 결정
        let targetType;
        if (totalScore >= 0 && totalScore <= 7) {
            targetType = "O1";
        } else if (totalScore >= 8 && totalScore <= 14) {
            targetType = "O2";
        } else if (totalScore >= 15 && totalScore <= 20) {
            targetType = "O3";
        }

        // 해당 타입의 결과 query 찾기
        const result = testData?.results?.find(result => result.type === targetType);
        return result?.query;
    }
}

export default OldManCalculator; 