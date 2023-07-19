 /*
        Reyson Silva tem 23 anos, pesa 74 Kg
        tem 1.74 de altura e seu IMC é de 25.1231512341234
        Reyson Silva Nasceu em 2000
 */
 
 const nome = 'Reyson';
 const sobrenome = 'Silva';
 const idade = 23;
 const peso = 74;
 const altura = 1.74;
 const anoAtual = 2023;

 let imc;  // peso / (altura * altura)
 let anoNascimento;

 imc = peso / (altura * altura);
 anoNascimento = anoAtual - idade;

 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`);
 console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
 console.log(`${nome} nasceu em ${anoNascimento}`);