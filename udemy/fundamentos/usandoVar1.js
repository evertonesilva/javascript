{
    {
        {
            {
                var sera = 'Será'
            }
        }
    }
}

console.log(sera)

function teste (){
    var local = 123 // var tem scopo global fora de uma function 
    console.log(local) // declarada dentro de uma function ele terá scopo de function
} 
teste()

console.log(local)