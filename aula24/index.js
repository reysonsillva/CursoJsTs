/*
    Entre 0 - 11 = Bom dia!
    Entre 12 - 17 = Boa tarde!
    Entre 18 - 23 = Boa noite!
*/

// If pode ser usado sozinho
// Sempre que utilizo else, preciso de um if antes
// Eu posso ter vários else if na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 24;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!')
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!')
} else {
    console.log('Oi')
}