const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        type: 'number',
        describe: 'valor de la base de la multiplicacion',
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'lista la tabla en consola',
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'longitud de la tabla',
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un numero'
        }
        return true;
    })
    .argv;

module.exports = argv;