document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('logoForm');
    const descricaoInput = document.getElementById('descricao');
    const resultadoDiv = document.getElementById('resultado');
    const logoImg = document.getElementById('logoGerada');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const descricao = descricaoInput.value;

        if (!descricao) {
            alert('Por favor, insira uma descrição para a logo.');
            return;
        }

        // Chamada para a API de geração de logos
        try {
            const response = await fetch('./api/generateLogo.js', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ descricao })
            });

            const data = await response.json();
            if (data.url) {
                logoImg.src = data.url;
                resultadoDiv.style.display = 'block';
            } else {
                alert('Erro ao gerar a logo. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao gerar a logo. Tente novamente.');
        }
    });
});
