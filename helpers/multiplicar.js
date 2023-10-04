const fs = require('fs');
const colors = require('colors');


const crearArchivo = async (base, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i++) {

            salida += `  ${i} x ${base} = ${i * base}\n`;
            consola += `  ${i} ${'x'.green} ${base} ${'='.green} ${i * base}\n`;

        }
        if (listar) {
            console.log(`====================================`.green);
            console.log(`   ******  Tabla del ${base}   ********`.rainbow);
            console.log(`====================================`.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, salida);

        return (`Tabla-del-${base}.txt `);
    } catch (err) {
        throw err;
    }
};
module.exports = {
    crearArchivo,
}
