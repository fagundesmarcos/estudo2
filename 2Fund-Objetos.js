// OJETOS NO JS {}

//const listaCPF = [ "28767397687" , "63478390987", "376839012555"] XXXXXXX
//const cliente = ["nome", "Andre", "idade", 36] XXXXXXXX

//const Cliente = {
//    nome: "Andre"
//    idade: 36
//    CPF: "37098765456"
//    email: andre@email.com
//}


//#### CHAMA DE CHAVE / VALOR
//----------------------------------------------------------------------------------------------------------------------------------------------

// PRINTAR INFOS -------    substring() 1º parametro onde começa e o 2º até onde mostra.

//const clienteAleluia = {
//    nome: "Tião",
//    idade: 54,
//    CPF: "35635679876",
//    email: "tiaodoido@email.com"
//}


//console.log(`O nome do cliente solicitado é ${clienteAleluia.nome}, e o seu email é ${clienteAleluia.email}`)
//console.log(`Os 3 primeiros numeros do CPF são: ${clienteAleluia.CPF.substring(0,3)}` )



//----------------------------------------------------------------------------------------------------------------------------------------------

// ACESSAR CHAVES  ------------ 
//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com"
//}
//               //0      1        2       3
//let chaves = ["nome", "idade", "CPF", "email"]

//console.log(cliente2[chaves[1]])

//chaves.forEach(info => console.log(cliente2[info])) 


//----------------------------------------------------------------------------------------------------------------------------------------------

// ADICIONANDO CAMPOS

//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com"
//}

//cliente2.fone = "978780997"
//cliente2.endereço = "Rua Feira Livre, 33"

//console.log(cliente2)

//----------------------------------------------------------------------------------------------------------------------------------------------

// ACESSAR TELEFONES


//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//   email: "zezinho@email.com",
//    fone: ["55657678", "945677676"]
//}
//cliente2.fone.push("99999999999") // adicionando um telefone na array dentro do objeto

//console.log(cliente2.fone)


//cliente2.fone.forEach(fone => console.log(fone))

//----------------------------------------------------------------------------------------------------------------------------------------------

// COMPONDO OBJETOS



//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com",
//    fone: ["55657678", "945677676"]
//}

//cliente2.dependente = {
//    nome: "Sara",
//    parentesco: "Filha",
//    dataNasc: "20/03/2011"
//}

//cliente2.dependente.nome = "Sara Silva" // adicionando ou atualizando algum item

//console.log(cliente2)
 
//----------------------------------------------------------------------------------------------------------------------------------------------
//AGREGANDO MAIS UM OBJETO  e FILTRANDO PARA ACHAR QUEM É QUEM


//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com",
//    fone: ["55657678", "945677676"],
//    dependentes: [{
//        nome: "Sara Silva",
//        parentesco: "Filha",
//        dataNasc: "20/03/2011"}]
//}

///console.log(cliente2)

//cliente2.dependentes.push({
//    nome: "Antonia Silva",
//    parentesco: "Sobrinha",
//    dataNasc: "15/08/2014"
//})

//cliente2.dependentes.push({
//    nome:"Antonia",
//    parentesco: "Sobrinha",
//    dataNasc: "11/01/1999"
//})

///console.log(cliente2)

//const grauDeParentesco = cliente2.dependentes.filter(dependente => dependente.parentesco==="Filha")

//console.log(grauDeParentesco) // Caso eu queira os dados completos

//console.log(grauDeParentesco[0].nome) // Caso eu queira só o nome da pessoa.....


//----------------------------------------------------------------------------------------------------------------------------------------------
//DEPOSITAR / SACAR


//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com",
//    fone: ["55657678", "945677676"],
//    dependentes: [{
//        nome: "Sara Silva",
//        parentesco: "Filha",
//        dataNasc: "20/03/2011"},
//        {
//            nome: "Antonia Silva",
//            parentesco: "Sobrinha",
//            dataNasc: "15/08/2014"},
//        {
//            nome:"Antonia",
//            parentesco: "Sobrinha",
//            dataNasc: "11/01/1999"}],
//    saldo: 100,
//    depositar:function(valor){
//        this.saldo += valor
//    },
//    sacar:function(valor){
//        this.saldo -= valor
//    },        
//}

//console.log(cliente2.saldo)
//cliente2.depositar(30)
//console.log(cliente2.saldo)
//cliente2.sacar(50)
//console.log(cliente2.saldo)

//----------------------------------------------------------------------------------------------------------------------------------------------
// PUXANDO RELATORIO / FOR..IN / TYPEOF

//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com",
//    fone: ["55657678", "945677676"],
//    dependentes: [{
//        nome: "Sara Silva",
//        parentesco: "Filha",
//        dataNasc: "20/03/2011"},
//        {
//          nome: "Antonia Silva",
//            parentesco: "Sobrinha",
//            dataNasc: "15/08/2014"},
//        {
//            nome:"Antonia",
//            parentesco: "Sobrinha",
//            dataNasc: "11/01/1999"}],
//    saldo: 100,
//    depositar:function(valor){
//        this.saldo += valor
//    },
//    sacar:function(valor){
//        this.saldo -= valor
//    },        
//}


//let relatorio = "";

//for (let info in cliente2){
//    if(typeof cliente2[info] === "object" || typeof cliente2[info] === "function"){
//        continue
//    }else{
//        relatorio += ` 
//        ${info} ==> ${cliente2[info]}
//        `
//    }
//}
//console.log(relatorio)

//----------------------------------------------------------------------------------------------------------------------------------------------
// OFERECER "SEGURO DE VIDA" PARA QUEM TEM DEPENDENTE - - - OBJECT.KEYS()

//const cliente2 = {
//    nome: "Zé",
//    idade: 39,
//    CPF: "35467341908",
//    email: "zezinho@email.com",
//    fone: ["55657678", "945677676"],
//    dependentes: [{
//        nome: "Sara Silva",
//        parentesco: "Filha",
//        dataNasc: "20/03/2011"},
//        {
//            nome: "Antonia Silva",
//            parentesco: "Sobrinha",
//            dataNasc: "15/08/2014"},
//        {
//            nome:"Antonia",
//            parentesco: "Sobrinha",
//            dataNasc: "11/01/1999"}],
//    saldo: 100,
//    depositar:function(valor){
//        this.saldo += valor
//    },
//    sacar:function(valor){
//        this.saldo -= valor
//    },        
//}

//function oferecerSeguro(obj){
//    const propsCliente = Object.keys(obj);
//    if(propsCliente.includes("dependentes")){
//        console.log(`Oferta de seguro de vida para ${obj.nome}`)
//    }

//}
//oferecerSeguro(cliente2)



//----------------------------------------------------------------------------------------------------------------------------------------------
// console.table --/////-- ""..."" spread operator - espalhar em outra array

//const clientes = [{
//    nome: "Jose",
//    idade: 55,
//    dependente: [{
//        nome: "Maria",
//        parentesco: "filha",
//        idade: 23},{
//        nome: "Silmara",
//        parentesco: "sobrinha",
//        idade: 27}] 
//        },
//    {nome: "Rodrigo",
//    idade: 77,
//    dependente: [{
//       nome: "Marcelo",
//       parentesco: "neto",
//       idade: 27},{
//       nome: "Fernanda",
//       parentesco: "Amante",
//       idade: 21
//       }]}]


//const listaDependentes = [...clientes[0].dependente, ...clientes[1].dependente]

//console.log(listaDependentes)

//console.table(listaDependentes)

//=================exemplo e exercicio=========================================

//const fichaCarro = {
//    nome: "Astra",
//    tipo: "hatch",
//}
//const motorCarro = {
//    cavalos: "140cavalos",
//    potencia: 2.0,
//}

//const carro = {fichaCarro, motorCarro};
////console.log(carro)

//const carroCompleto = {...fichaCarro, ...motorCarro}
////console.log(carroCompleto)

//console.table(carroCompleto)


//----------------------------------------------------------------------------------------------------------------------------------------------
//PROTOTYPE.

//function cliente(nome, cpf, email, saldo){
//    this.nome = nome
//    this.cpf = cpf
//    this.email = email
//    this.saldo = saldo
//    this.depositar = function(valor){
//        this.saldo += valor
//    }
//}
////const marcos = new cliente("Marcos", "37872654093", "marcos@marcos.com", 250);

////console.log(marcos)

//function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
//    cliente.call(this, nome, cpf, email, saldo)
//    this.saldoPoup = saldoPoup
//}


//const marcos = new clientePoupanca("Marcos", "38290986469", "marcos@email.com", 250,500)

//console.log(marcos)


//clientePoupanca.prototype.depositarPoup = function(valor){
//    this.saldoPoup += valor;
//}

//marcos.depositarPoup(10)


//console.log(marcos.saldoPoup)


//----------------------------------------------------------------------------------------------------------------------------------------------
// ORIENTAÇÃO A OBJETOS // O.O

// CRIANDO UM OBJETO ---- CLASS (começa sempre com maiuscula), e não precisa colocar a palavra function, o próprio JS reconhece como função.

/*class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

//const marcos = new Cliente("Marcos", "marcos@email.com", "12345678912", 100)

//console.log(marcos)

const laura = new Cliente("Laura", "laura@email.com", "34390956565", 200)

//console.log(marcos, laura)

*/

//----------------------------------------------------------------------------------------------------------------------------------------------


/*class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super (nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}
const marcos = new ClientePoupanca( "Marcos", "m@email.com", "12345678901", 100, 500)

console.log(marcos)

marcos.depositar(200)
marcos.depositarPoupanca(300)

console.log(marcos)
*/


//----------------------------------------------------------------------------------------------------------------------------------------------





