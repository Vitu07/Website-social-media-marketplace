let slideAtual = 0;

function passarSlide(direcao) {
    const slides = document.querySelectorAll('.carrossel-item');
    slides[slideAtual].classList.remove('ativo');
    
    slideAtual = (slideAtual + direcao + slides.length) % slides.length;
    
    slides[slideAtual].classList.add('ativo');
}