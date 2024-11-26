const url = 'https://raw.githubusercontent.com/pmatjayme/api/refs/heads/main/ket.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `A bilheteria do primeiro filme foi de <span>${dados.Jogos_Vorazes_2012}</span>, já do segundo foi de <span>${dados.Jogos_Vorazes_Em_Chamas_2013}</span> em comparação, o terceiro foi dividido em duas partes e obteve um decaimento de <span>${dados.Jogos_Vorazes_A_Esperança_Parte_1_2014}</span> na parte.1 e na parte.2 de <span>${dados.Jogos_Vorazes_A_Esperança_Final_2015}</span> vizualizações.<br> Em 2023 foi lançado um novo filme com aproximadamente <span>${dados.Jogos_Vorazes_A_Cantiga_dos_Pássaros_e_das_Serpentes_2023}%</span> de vizualizações.`

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
