"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_lottie_1 = __importDefault(require("react-lottie"));
var number0_json_1 = __importDefault(require("../assets/numbers/number0.json"));
var number1_json_1 = __importDefault(require("../assets/numbers/number1.json"));
var number2_json_1 = __importDefault(require("../assets/numbers/number2.json"));
var number3_json_1 = __importDefault(require("../assets/numbers/number3.json"));
var number4_json_1 = __importDefault(require("../assets/numbers/number4.json"));
var number5_json_1 = __importDefault(require("../assets/numbers/number5.json"));
var number6_json_1 = __importDefault(require("../assets/numbers/number6.json"));
var number7_json_1 = __importDefault(require("../assets/numbers/number7.json"));
var number8_json_1 = __importDefault(require("../assets/numbers/number8.json"));
var number9_json_1 = __importDefault(require("../assets/numbers/number9.json"));
var dataList = [
    number0_json_1.default,
    number1_json_1.default,
    number2_json_1.default,
    number3_json_1.default,
    number4_json_1.default,
    number5_json_1.default,
    number6_json_1.default,
    number7_json_1.default,
    number8_json_1.default,
    number9_json_1.default,
];
var AnimatedNumber = function (_a) {
    var number = _a.number;
    var animationData = dataList[number];
    var options = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return react_1.default.createElement(react_lottie_1.default, { options: options, width: 83, height: 160 });
};
exports.default = AnimatedNumber;
