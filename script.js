
//ATENÇÃO!!! TEME QUE ABRIR O 'DEVTOOLS' DO NAVEGADOR PARA UMA MELHOR COMPREENSÃO

//---CONSOLE---//

//O objeto 'console' tem diversos atributos entre eles:

console.log('usado para mensagens!')
console.error('usado pra mensagem de erro!')
console.warn('usado para Aviso!')

//---VARIÁVEIS---//

//usadas para guardar valores parauso posterior no programa
//Dentre as variáveis existem algumas, como:

//maneira mais antiga
var x = 10//o var é uma metodo 'antigo' de declarar variáveis, pois ela tem um escopo maior, ou seja ela sera interpetrada pelo código em qualquer lugar que ela esteja.

//maneiras mais modernas
let y = 20//a principal diferença entre um var e um let é que o let tem um escopo menor, ou seja, ele so sera interpretado pelo programa para aquele bloco que ele foi declarado

const z = 30//ja o const é muito parecido com o let, porem a dirferença é que o const não pode ser alterado ao longo do código, a não ser que eu faça uma nova variável

//exemplo:
if (1) {
    let y = 40
}
console.log(x)
console.log(y)/*aqui ele so mostrou o valor do y=20,  que esta fora do escopo do 'if' pois o console foi executado fora desse escopo, se caso eu pegar o console e coloca dentro do if ele mostrar o let de y=40*/
console.log(z)


//---TIPOS DE DADOS---//

//TEMOS AS STRINGS

//para saber o tipo do dado a ser declaro é so fazer o seguinte
const name = 'Bruno'//declra uma variável com o valor, nesse caso foi um nome
console.log(name)//aqui imprimi o conteudo de 'name'
console.log(typeof name)/*depois imprimi na tela usando o console e o parametro typeof, esse para metro vai dizer qual tpo de dado fo iinserido numa variável por exemplo*/

//outra observação dos tipos de dados é que o JS não consegue distinguir o que é um numero inteiro(exemplo:2) de um real(exemplo: 2,6), que, esse real, que são os numeros com virgulas tambem é conhecido como 'ponto flutuante'


//TEMOS OS NUMBER
const shirtyQty = 4 //tanto esse...
console.log(shirtyQty)
console.log(typeof shirtyQty)

const decimal = 12.5 //...como esse são considerados como number
console.log(decimal)
console.log(typeof decimal)


//TEMOS OS BOOLEANS

//os booleanos são as condições em dualidade, ou seja, verdadeiro(true) ou falso(false)
const isApproved = false
console.log(isApproved)
console.log(typeof isApproved)


//TEMOS O NULL(nulo)
let surname = null //geralmente declara-se uma variável como num quando não se tem um valor, ainda, pra ela, então declar ela como nulo
console.log(surname)
console.log(typeof surname)//porém,por padrão, o JS ira reconhecer ele como do tipo 'object'

surname = 'Gabriel'//e agora podemos declar aqualquer tipo
console.log(surname)
console.log(typeof surname)


// TEMOS TBM O UNDEFINED

let age //aqui foi declarado um variavel mas não foi atribuida um valor, então ela sera dada como indefinida 'undefined'
console.log(age)
console.log(typeof age)


//TEMOS OS ARRAYS

const language = ["Python","PHP","Java"]//são varios valores declarads em uma só variavel, e se caso eu quizer usar um valor eu pego atravésdos chamados 'indices' que nada mais é do quea posição do valor dentro desse array, e os indices comecam a partir do ZERO 
console.log(language)
console.log(typeof language)
//obs: dentro do array posso colocar dados misturados como strings e numbers
// e ao imprimir ele sera dado como um object


//E O OBJECT conhecido tbm como OBJECT LITERALS

//basicamente objetos são valores separados entre chaves '{}' E SÃO DIFERENTES DOS ARRAYS

const user = {email: 'bruno@teste.com', password: '123', age: 30}
console.log(user)
console.log(typeof user)

