class PersonalityCalculator {
    calculate(scores, testData) {
        // 점수의 총합을 계산
        const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
        
        let targetType;
        if (totalScore >= 0 && totalScore <= 5) {
            targetType = "T1";
        } else if (totalScore >= 6 && totalScore <= 10) {
            targetType = "T2";
        } else if (totalScore >= 11 && totalScore <= 15) {
            targetType = "T3";
        } else if (totalScore >= 16 && totalScore <= 20) {
            targetType = "T4";
        }

        const result = testData?.results?.find(result => result.type === targetType);
        return result?.query;
    }
}

export default PersonalityCalculator; 