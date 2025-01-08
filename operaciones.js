const fs = require('fs');

// Función para registrar una nueva cita
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const nuevaCita = { nombre, edad, tipo, color, enfermedad };

    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        const citas = data ? JSON.parse(data) : [];
        citas.push(nuevaCita);

        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar la cita:', err);
            } else {
                console.log('Cita registrada con éxito.');
            }
        });
    });
};

// Función para leer todas las citas
const leer = () => {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        const citas = data ? JSON.parse(data) : [];
        console.log('Citas registradas:');
        citas.forEach((cita, index) => {
            console.log(`${index + 1}. ${JSON.stringify(cita)}`);
        });
    });
};

module.exports = { registrar, leer };
