import { calculate } from './../pattern';
(() => {
     const expr = '5 < 3';
     //const expr = '5 < 3 or 10 != 10';
     //const expr = '5 > 3 or 10 = 10 and 11 > 3 and 10 < 9';
     //const expr = '10 = 10 and 11 > 3 and 10 < 9';

    console.log(`expr: ${expr}`);
    console.log(calculate(expr));

})();