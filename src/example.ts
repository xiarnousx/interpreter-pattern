// Expression interface used to check the interpreter
interface Expression {
    interpreter(context: string): boolean;
}

// TerminalExpression class implementing
// the above interface. This interpreter
// just check if the data is the same as 
// the interpreter data
class TerminalExpression implements Expression {

    constructor(private data: string) {}

    interpreter(context: string): boolean {
        if (context.length > 0){
            return true;
        }

        return false;
    }
}

// OrExpression class implements the above interface
// This interpreter just returns the or condition
// of the data is same as the interpreter data
class OrExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpreter(context: string): boolean {
        return this.expr1.interpreter(context) || this.expr2.interpreter(context);
    }
}

class AndExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpreter(context: string): boolean {
        return this.expr1.interpreter(context) && this.expr2.interpreter(context);
    }
}

