"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pattern_1 = require("./../pattern");
(() => {
    const expr = '5 < 3';
    //const expr = '5 < 3 or 10 != 10';
    //const expr = '5 > 3 or 10 = 10 and 11 > 3 and 10 < 9';
    //const expr = '10 = 10 and 11 > 3 and 10 < 9';
    console.log(`expr: ${expr}`);
    console.log(pattern_1.calculate(expr));
})();
//# sourceMappingURL=www.js.map