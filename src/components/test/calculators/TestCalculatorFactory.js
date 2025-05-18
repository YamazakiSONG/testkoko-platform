import MBTICalculator from './MBTICalculator';
import PersonalityCalculator from './PersonalityCalculator';
import OldManCalculator from './OldManCalculator';

class TestCalculatorFactory {
    static getCalculator(testType) {
        switch(testType) {
            case 'MBTI':
                return new MBTICalculator();
            case 'T_PERSONALITY':
                return new PersonalityCalculator();
            case 'OLD_MAN':
                return new OldManCalculator();
            default:
                throw new Error(`Unknown test type: ${testType}`);
        }
    }
}

export default TestCalculatorFactory; 