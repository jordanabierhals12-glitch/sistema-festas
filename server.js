document.getElementById('btn-gerar').addEventListener('click', gerarResumo);

function gerarResumo() {
    // Busca todos os pratos que foram selecionados pelo usuário
    const selecionados = document.querySelectorAll('input[type="checkbox"]:checked');
    
    if (selecionados.length === 0) {
        alert("Por favor, selecione ao menos um item!");
        return;
    }

    // Estrutura o objeto temporário de categorias
    let resumo = "📋 *RESUMO DO CARDÁPIO ESCOLHIDO*\n\n";
    let categorias = {};

    selecionados.forEach(item => {
        if (!categorias[item.name]) {
            categorias[item.name] = [];
        }
        categorias[item.name].push(item.value);
    });

    // Mapeia e formata o texto para exibição limpa
    for (let cat in categorias) {
        let nomeCategoria = cat.toUpperCase();
        resumo += `🔸 *${nomeCategoria}:*\n`;
        categorias[cat].forEach(prato => {
            resumo += `  - ${prato}\n`;
        });
        resumo += "\n";
    }

    // Exibe a div de texto na tela com efeito suave de rolagem
    const divOutput = document.getElementById("output");
    divOutput.innerText = resumo;
    divOutput.style.display = "block";
    divOutput.scrollIntoView({ behavior: 'smooth' });
}
