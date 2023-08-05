/*
function criarPessoa(nome, sobrenome, idade) {
    return { nome, sobrenome, idade};
}

const pessoa1 = criarPessoa('Reyson', 'Silva', 23)
const pessoa2 = criarPessoa('Denise', 'Moret', 21)
const pessoa3 = criarPessoa('Guilherme', 'Misquita', 15)


console.log(pessoa1.nome, pessoa2.sobrenome, pessoa3.idade);
*/

const pessoa1 = {
    nome: 'Reyson',
    sobrenome: 'Silva',
    idade: 23,

    fala() {
        console.log('Olá mundo!');
    }
};

pessoa1.fala();