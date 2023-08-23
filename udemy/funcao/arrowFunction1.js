let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // quando se tem apenas um parametro não precisa colocar os "( )" nem as "{ }"
console.log(dobro(Math.PI)) // retorno implícito.

let ola = function (){
    return 'Ola'
}

ola = () => 'Ola' // função sem parametro
ola = _ => 'Ola' // função com parametro mais JS permite esse tipo de parametro "_"
console.log(ola())

