// (condicao) ? 'Valor para verdadeira' : 'Valor para falso';
 
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP!' : 'Usuário normal!'

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';


console.log(nivelUsuario, corPadrao)