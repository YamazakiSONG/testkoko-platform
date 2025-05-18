class MBTICalculator {
    calculate(scores, testData) {
        const mbtiPairs = [
            ["E", "I"],
            ["N", "S"],
            ["T", "F"],
            ["J", "P"]
        ];

        let resultType = "";
        
        for (let pair of mbtiPairs) {
            let firstType = pair[0];
            let secondType = pair[1];
            
            let firstTypeScore = scores[firstType];
            let secondTypeScore = scores[secondType];

            resultType += firstTypeScore > secondTypeScore ? firstType : secondType;
        }

        return testData?.results?.find((result) => result?.type === resultType)?.query;
    }
}

export default MBTICalculator; 