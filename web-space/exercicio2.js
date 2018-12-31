const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];
let index = 0;
const next = document.getElementById('proximo');
const previous = document.getElementById('anterior');

const slider = (Index) => {
  const slide = document.getElementById('slide')
  let srcImage = servidorDasImagens + todasAsImagens[Index];
  slide.src = srcImage;
};

next.addEventListener('click', (e) => {
  index++;
  index = index == 5 ? 0 : index;
  slider(index);
});

previous.addEventListener('click', (e) => {
  index--;
  index = index == -1 ? 4 : index;
  slider(index);
});

slider(index);