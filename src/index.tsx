import React from 'react';
import Lottie from 'react-lottie';
import number0 from '../assets/numbers/number0.json';
import number1 from '../assets/numbers/number1.json';
import number2 from '../assets/numbers/number2.json';
import number3 from '../assets/numbers/number3.json';
import number4 from '../assets/numbers/number4.json';
import number5 from '../assets/numbers/number5.json';
import number6 from '../assets/numbers/number6.json';
import number7 from '../assets/numbers/number7.json';
import number8 from '../assets/numbers/number8.json';
import number9 from '../assets/numbers/number9.json';

const dataList: { [k: string]: any }[] = [
    number0,
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
];

interface AnimatedNumberProp {
    number: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

const AnimatedNumber: React.FC<AnimatedNumberProp> = ({ number }) => {
    const animationData = dataList[number];
    const options = {
        loop: false,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return <Lottie options={options} width={83} height={160} />;
};

export default AnimatedNumber;
