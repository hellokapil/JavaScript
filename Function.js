function calculator(a,operator,b){

    switch(operator){

        case '+':
            return a+b;

            case '-':
                return a-b;

                case '*':
                    return a*b;
                    
                    case '/':
                        return a/b;

                        case '%':
                            return a%b;

                        default:console.log("invalid operator");


    }
}
console.log(calculator (100,'+',2));