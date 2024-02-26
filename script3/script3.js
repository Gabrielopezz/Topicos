const body = document.querySelector('body');

const palabras = ['el', 'la', 'los', 'a', 'como', 'así', 'mi', 'tus', 'gato', 'corre', 'rápido', 'bajo',
    'sol', 'brillante', 'niño', 'juega', 'parque', 'madre', 'cocinan', 'delicioso', 'pastel', 'profesor',
    'enseña', 'escuela', 'amigos', 'celebran', 'cumpleaños', 'regalos', 'abuelo', 'lee', 'periódico', 'mañana',
    'ciudad', 'pájaros', 'cantan', 'árboles', 'primavera', 'hacer'
];

for (let i = 0; i < 5; i++) {
    const tamañoParrafo = Math.floor(Math.random() * (100 - 50 + 1) + 50);
    let parrafoTexto = '';

    for (let j = 0; j < tamañoParrafo; j++) {
        const seleccionPalabra = Math.floor(Math.random() * palabras.length);
        parrafoTexto += palabras[seleccionPalabra] + ' ';
    }

    const parrafo = document.createElement('p');
    parrafo.textContent = parrafoTexto.trim();

    const tamañoCaracteres = document.createElement('span');
    tamañoCaracteres.textContent = ` (${parrafoTexto.trim().length} caracteres)`;

    parrafo.appendChild(tamañoCaracteres);
    body.appendChild(parrafo);

    console.log(parrafoTexto.trim() + ` (${parrafoTexto.trim().length} caracteres)`);
}
