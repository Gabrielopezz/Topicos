const body = document.querySelector('body')

const colores = ['DarkSlateGray','SlateGray','Silver','MistyRose','Sienna','Chocolate','DarkGoldenrod','RosyBrown','Tan','Blue','MediumSlateBlue','DodgerBlue','LightSkyBlue','CadetBlue','MediumSeaGreen','YellowGreen','LimeGreen','DarkOrchid','Pink','Salmon']

colores.sort(() => Math.random() - 0.5);

for(let i=0;  i<10; i++){
    const div = document.createElement('div')
    div.style.height = '40px'
    
    if (colores.length > 0) {
        const color = colores.pop();
        div.style.backgroundColor = color;

        const parrafo = document.createElement('p');
        div.appendChild(parrafo);
        body.appendChild(div);
    } else {
        console.error('No hay más colores disponibles.');
        break;
    }
}