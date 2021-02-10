"use strict";
// TerminalExpression class implementing
// the above interface. This interpreter
// just check if the data is the same as 
// the interpreter data
class TerminalExpression {
    constructor(data) {
        this.data = data;
    }
    interpreter(context) {
        if (context.length > 0) {
            return true;
        }
        return false;
    }
}
// OrExpression class implements the above interface
// This interpreter just returns the or condition
// of the data is same as the interpreter data
class OrExpression {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    interpreter(context) {
        return this.expr1.interpreter(context) || this.expr2.interpreter(context);
    }
}
class AndExpression {
    constructor(expr1, expr2) {
        this.expr1 = expr1;
        this.expr2 = expr2;
    }
    interpreter(context) {
        return this.expr1.interpreter(context) && this.expr2.interpreter(context);
    }
}
//# sourceMappingURL=example.js.map