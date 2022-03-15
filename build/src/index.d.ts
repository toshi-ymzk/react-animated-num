import React from 'react';
export declare type AnimatedNumberType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
interface AnimatedNumberProp {
    number: AnimatedNumberType;
}
declare const AnimatedNumber: React.FC<AnimatedNumberProp>;
export default AnimatedNumber;
