/**
 * Retorna o valor total a ser do rendimento
 * @param {Number} m é o montante total
 * @param {Number} c é o capital inicial
 * @param {Number} t é o tempo em meses
 * @param {Number} i é a taxa de juros
 */
function calculate(m, c, t, i) {
    t = Math.round(t);
    let resultado = 0;
    switch (c) {
        case 'continua':
            resultado = (m * Math.pow(Math.E, ((i * t) / 100)));
        break;
        case 'composta':
            resultado = (m * Math.pow((1 + (i / 100)), t));
        break;
        case 'simples':
            resultado = (m * ( 1 + ((i * t) / 100)));
        break;
        default:
            resultado = 0;
    }
    return resultado;
}

export default calculate;