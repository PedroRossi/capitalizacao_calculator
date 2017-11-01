function calculate(aplicacao, capitalizacao, dias, juros) {
    let resultado;
    switch (capitalizacao) {
        case 'continua':
            resultado = 0;
        break;
        case 'composta':
            resultado = 0;
        break;
        default:
            resultado = 0;
    }
    return resultado;
}

export default calculate;