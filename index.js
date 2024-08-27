let pvp = game(21, 0); 
let nivel = "";


console.log(pvp);


function game(vitorias, derrotas) {
    let calculated = vitorias - derrotas 
    return calculated;
}

if (pvp <= 10){
    let nivel = "Ferro"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel )}

else if (pvp <20) {
    let nivel = "Bronze";
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:`+ nivel)}

else if (pvp <=50) {
    let nivel = "Prata"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel)}

else if (pvp <=80){
    let nivel = "Ouro"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel)}

else if (pvp <=90){
    let nivel = "Diamante"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel)}

else if (pvp <= 100){
    let nivel = "Lendário"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel)}

else if (pvp => 101){
    let nivel = "teste"
    console.log(`O Herói tem saldo de ${pvp}\n está no nível de Nível:` + nivel)}

else;

