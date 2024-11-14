document.addEventListener('DOMContentLoaded', function () {
    const carrosselNovidadesEsquerda = document.getElementById('carrossel-novidades-esquerda');
    const carrosselNovidadesMeio = document.getElementById('carrossel-novidades-meio');
    const carrosselNovidadesDireita = document.getElementById('carrossel-novidades-direita');
    const carrosselPromocoesEsquerda = document.getElementById('carrossel-promocoes-esquerda');
    const carrosselPromocoesMeio = document.getElementById('carrossel-promocoes-meio');
    const carrosselPromocoesDireita = document.getElementById('carrossel-promocoes-direita');

    let indexNovidades = 0;
    let indexPromocoes = 0;

    // Função para mostrar apenas 1 imagem e ocultar as outras
    function updateVisibility(carrossel, index) {
        const images = carrossel.children;
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }
        images[index].classList.add('active');
    }

    // Função para mover o carrossel com base na direção
    function moveCarrossel(carrosselEsquerda, carrosselMeio, carrosselDireita, direction, index) {
        const totalImages = carrosselDireita.children.length;

        // Controle do índice das imagens, considerando a direção
        if (direction === 'next') {
            index = (index + 1) % totalImages;
        } else {
            index = (index - 1 + totalImages) % totalImages;
        }

        // Atualizar a visibilidade das imagens com base no novo índice
        updateVisibility(carrosselEsquerda, index);
        updateVisibility(carrosselMeio, index);
        updateVisibility(carrosselDireita, index);

        return index;
    }

    // Função de looping contínuo para ambos os carrosséis
    function startCarouselLoop() {
        setInterval(() => {
            indexNovidades = moveCarrossel(carrosselNovidadesEsquerda, carrosselNovidadesMeio, carrosselNovidadesDireita, 'next', indexNovidades);
            indexPromocoes = moveCarrossel(carrosselPromocoesEsquerda, carrosselPromocoesMeio, carrosselPromocoesDireita, 'next', indexPromocoes);
        }, 3000); // Atualiza a cada 3 segundos
    }

    // Configura os botões de navegação para os carrosséis de Novidades
    document.getElementById("next-novidades").addEventListener("click", () => {
        indexNovidades = moveCarrossel(carrosselNovidadesEsquerda, carrosselNovidadesMeio, carrosselNovidadesDireita, 'next', indexNovidades);
    });
    document.getElementById("prev-novidades").addEventListener("click", () => {
        indexNovidades = moveCarrossel(carrosselNovidadesEsquerda, carrosselNovidadesMeio, carrosselNovidadesDireita, 'prev', indexNovidades);
    });

    // Configura os botões de navegação para os carrosséis de Promoções
    document.getElementById("next-promocoes").addEventListener("click", () => {
        indexPromocoes = moveCarrossel(carrosselPromocoesEsquerda, carrosselPromocoesMeio, carrosselPromocoesDireita, 'next', indexPromocoes);
    });
    document.getElementById("prev-promocoes").addEventListener("click", () => {
        indexPromocoes = moveCarrossel(carrosselPromocoesEsquerda, carrosselPromocoesMeio, carrosselPromocoesDireita, 'prev', indexPromocoes);
    });

    // Inicia os carrosséis com as visibilidades corretas
    updateVisibility(carrosselNovidadesEsquerda, indexNovidades);
    updateVisibility(carrosselNovidadesMeio, indexNovidades);
    updateVisibility(carrosselNovidadesDireita, indexNovidades);
    updateVisibility(carrosselPromocoesEsquerda, indexPromocoes);
    updateVisibility(carrosselPromocoesMeio, indexPromocoes);
    updateVisibility(carrosselPromocoesDireita, indexPromocoes);

    // Inicia a atualização contínua dos carrosséis
    startCarouselLoop();
});
