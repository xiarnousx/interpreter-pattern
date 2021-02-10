"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculate = void 0;
var OPS;
(function (OPS) {
    OPS["lt"] = "<";
    OPS["gt"] = ">";
    OPS["lte"] = "<=";
    OPS["gte"] = ">=";
    OPS["eq"] = "=";
    OPS["neq"] = "!=";
    OPS["and"] = "and";
    OPS["or"] = "or";
})(OPS || (OPS = {}));
function calculate(expr) {
    const exprSplit = expr.split(' ');
    return interpreter(exprSplit);
}
exports.calculate = calculate;
function interpreter(exprSplit) {
    const expressions = [...exprSplit];
    for (let i = 0; i < expressions.length; i++) {
        const left = exprSplit.shift();
        const op = exprSplit.shift();
        const right = exprSplit.shift();
        const operand = exprSplit.shift();
        const func = comperable(op);
        if (func == null) {
            throw Error('shit happens');
        }
        const res = func(Number(left), Number(right));
        if (operand == undefined) {
            return res;
        }
        const operandFunc = logicable(operand);
        if (operandFunc == null) {
            throw Error('shit happens twice');
        }
        return operandFunc(res, interpreter([...exprSplit]));
    }
}
function logicable(operation) {
    switch (operation) {
        case OPS.or:
            return (a, b) => a || b;
            break;
        case OPS.and:
            return (a, b) => a && b;
            break;
    }
    return null;
}
function comperable(operation) {
    switch (operation) {
        case OPS.lt:
            return (a, b) => a < b;
            break;
        case OPS.gt:
            return (a, b) => a > b;
            break;
        case OPS.lte:
            return (a, b) => a <= b;
            break;
        case OPS.gte:
            return (a, b) => a >= b;
        case OPS.eq:
            return (a, b) => a == b;
            break;
        case OPS.neq:
            return (a, b) => a != b;
            break;
    }
    return null;
}
//# sourceMappingURL=pattern.js.map