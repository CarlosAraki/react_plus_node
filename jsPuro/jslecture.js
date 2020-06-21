
function a() {
    alert('aa');
}

function algo(){
    document.write("Indo...<br>")
}
// setInterval(algo,1000) //intervalo repetido
// setTimeout(algo,3000) //um timeout

localStorage.setItem('key','value');
console.log(localStorage.getItem('key'));
localStorage.removeItem('key');
console.log(localStorage.getItem('key'));
localStorage.setItem('key','value');
localStorage.key = 'olá'
console.log(localStorage.getItem('key'));
console.log(localStorage.getItem('aqui'));
localStorage.clear()
if(typeof localStorage.nome == 'undefined'){
    // localStorage.nome = prompt("Digite o Nome");
}
// console.log(localStorage.nome);
document.getElementById('aquiii').innerHTML = (localStorage.nome)
$str =  "uau"
$str2 = "Concata"

$str3 = `Meu deus eu cansei de fica ${$str2} com muita tristeza do ${$str} `; // problema é q usa ``
$str3 = "Meu deus eu cansei de fica " + $str2 + " com muita tristeza do "+$str; // problema é q é feio  

document.getElementById('aquiii').innerHTML = ($str3)
// let obj = {
//     roberto: 'lalalala',
//     mds:45
// }

// let{ roberto:minhanovar } = obj;
// console.log(minhanovar) 
// console.log(obj.roberto) 

// let arraySupa = ['aqui',1,'aa','aaaa']
// let { 1:oi, 0:oi2} = arraySupa
// console.log(oi)
// console.log(oi2)
// let [oi3, oi4 , ,oi5] = arraySupa
// console.log(oi3)
// console.log(oi4)
// console.log(oi5)

function restOperator(azul,...params) {
    spreadOperator   = [ ...azul,...params];
    console.log(spreadOperator)
}

const list  = [1,2,3,4,5,6]
let newList = list.map(function(item,index) {
    return item + index
})
console.log(newList)

let soma = list.reduce(function(total,proximo) {
    return total + proximo
})
console.log(soma)


let find = list.find(function(item,index) {
    if(item == 6)
        console.log(index)
})
console.log(find)

function adicionar (...numeros){
    console.log(numeros.reduce((total,proximo)=> total+proximo))
}

adicionar(25,2)

console.log(list.includes(2))
console.log($str3.startsWith('Meu deus eu cansei'))
console.log($str3.endsWith('Meu deus eu cansei'))

newObj  = [
    {
        ola:14,
        tudo:'AAAA'
    },
    {
        ola:12,
        tudo:'AAAA'
    },
    {
        ola:15,
        tudo:'AAAA'
    }
]

console.log(newObj.some(obj => obj.ola === 14 ))
console.log(newObj.every(obj => obj.ola === 14 ))