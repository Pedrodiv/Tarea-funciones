
function mayor(a,b,c){
    let may
    if(a>=b && a>=c){
        may = a
    }else if (b>=a && b>=c){
        may = b
    }else if (c>=a && c>=b){
        may = c
    }
    return may
}
let resultado = mayor(1,2,3)
console.log(resultado)