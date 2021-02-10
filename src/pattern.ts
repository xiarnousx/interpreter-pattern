
enum OPS  {
    lt = "<",
    gt = ">",
    lte = "<=",
    gte = ">=",
    eq = "=",
    neq = "!=",
    and = "and",
    or = "or",
}


export function calculate(expr: string): boolean {
    const exprSplit: Array<string> = expr.split(' ');
    return interpreter(exprSplit);
}

function interpreter(exprSplit: Array<string>): any {
    const expressions = [... exprSplit];

    for (let i = 0; i < expressions.length; i++) {
        const left: string | undefined = exprSplit.shift();
        const op: string | undefined = exprSplit.shift();
        const right: string | undefined = exprSplit.shift();
        const operand: string | undefined = exprSplit.shift();

        const func = comperable(op);
        if (func == null) {
            throw Error('exception one');
        }
        
        const res = func(Number(left), Number(right));

        if (operand == undefined) {
            return res;
        }

        const operandFunc = logicable(operand);

        if (operandFunc == null) {
            throw Error('exception two');
        }

        return  operandFunc(res, interpreter([...exprSplit]));
    }
}


function logicable(operation: string | undefined): null | ((a: boolean, b: boolean) => boolean) {
    switch(operation) {
        case OPS.or:
            return (a, b) => a || b;
        break;
        case OPS.and:
            return (a, b) => a && b;
        break;
    }

    return null;
}

function comperable(operation: string | undefined):  null | ((a:number, b:number) => boolean) {

    switch(operation) {
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