"use strict";
const minhasCartas = [
    {
        id: 1,
        dataLiberacao: "2026-05-17",
        conteudo: "Eu sei que às vezes pareço recuado e que minhas palavras falham, mas queria que soubesse que meu amor nunca foi mero capricho. Quando você disse que eu não sabia o que queria, meu coração apertou, porque a única certeza que eu tive foi você. Sou meio tímido para demonstrar, mas estou tentando destruir essa armadura. Nossa filha nos uniu de uma forma eterna e por ela, e por nós, prometo estar sempre aqui, de braços abertos, sem medos ou máscaras, apenas te amando com toda a minha alma. -E",
        spotifyTrackId: "5yJaXWIErrrsjQ3J0eR5aK",
        linkTraducao: "https://www.letras.mus.br/lord-huron/the-night-we-met/"
    },
    {
        id: 2,
        dataLiberacao: "2026-05-18",
        conteudo: "Você sempre achou que eu escondia meus sentimentos atrás de uma pose de durão, mas a verdade é que eu só não sabia como lidar com o turbilhão de coisas que o mundo desperta na minha cabeça. Amo os seus sentimentos que transbordam, eles deram uma cor a mais pra minha vida. Não quero que pense que sou egoísta ou que fujo; eu quero ficar, mas não vou fazer isso agora que sei que você está bem. Seria ser uma pessoa ruim e eu não quero isso. Mesmo com todas as nossas brigas e a dor da nossa perda, você foi meu porto seguro. Eu quis ser o seu também, para sempre, segurando sua mão nos dias escuros e te lembrando do que eu sinto.",
        spotifyTrackId: "4FE9SgxcOoCNuGnaaU8TXz",
        linkTraducao: "https://www.letras.mus.br/lord-huron/when-the-night-is-over/"
    },
    {
        id: 3,
        dataLiberacao: "2026-05-19",
        conteudo: "Talvez eu tenha demorado a falar, a minha timidez sempre foi um muro, mas hoje quero derrubá-lo. Você não foi só mais uma, você foi e é a pessoa mais especial da minha vida. A saudade da nossa menina me dói todos os dias, e foi em você que eu encontrei todas as forças. Não volto por culpa ou ansiedade, volto porque meu peito só bate em paz com você. Nunca mais quero te mandar embora, mas eu sinto sinceramente que seria de um egoísmo tremendo ficar.",
        spotifyTrackId: "75JFxkI2RXiU7L9VXzMkle",
        linkTraducao: "https://www.letras.mus.br/coldplay/64278/"
    },
    {
        id: 4,
        dataLiberacao: "2026-05-20",
        conteudo: "Me dói saber que você pensou que eu só queria um alívio rápido. Eu quis ser o seu apoio, a sua rocha, o lugar para onde você correira quando o mundo pesasse. Sou falho e muitas vezes me calei quando deveria ter gritado ao mundo o quanto te amo. Não tenho crise alguma além da crise de estar longe de você. Quero aceitar cada pedacinho seu, sem julgamentos. Se você precisar, eu estarei ali, mesmo que em silêncio, apenas para te ouvir e provar que o que vivemos é o sentimento mais puro.",
        spotifyTrackId: "1PzpE3BKEKTRa5uDKjXuom",
        linkTraducao: "https://www.letras.mus.br/jose-gonzalez/477414/"
    },
    {
        id: 5,
        dataLiberacao: "2026-05-21",
        conteudo: "Sei que você pensou que eu precisava de status para te manter por perto, mas eu só precisava pedir para você ficar e é verdade e eu só vejo isso agora. E é isso que faço agora, com toda a humildade eu digo que você iluminou meu ano mais intenso e compartilhou a maior dor que poderíamos ter com a perda da nossa bebê. Não sou forte o tempo todo e não quero mais fingir que sou.",
        spotifyTrackId: "3QI5bIozef0HZ1kJnA2RdT",
        linkTraducao: "https://www.letras.mus.br/charlie-brown-jr/63495/"
    },
    {
        id: 6,
        dataLiberacao: "2026-05-22",
        conteudo: "Hoje eu queria pedir perdão. Me perdoa se alguma vez fiz parecer que seus sentimentos eram demais para mim. A verdade é que a sua capacidade de amar me assustava porque eu nunca tinha recebido algo tão grande. Eu não quero te devolver para o mundo. Nossas brigas foram reflexo das minhas próprias inseguranças, mas hoje eu sei exatamente isso. Estarei sempre aqui, na alegria e na tristeza, honrando a memória que temos. Você pode contar comigo. Eternamente. Você foi a minha escapatória da vida monótona. Obrigado por me ensinar tanto.",
        spotifyTrackId: "1GIPP103zfsythULEpsmdw",
        linkTraducao: "https://www.letras.mus.br/patrick-watson/974659/"
    },
    {
        id: 7,
        dataLiberacao: "2026-05-23",
        conteudo: "Eu sei que nunca fui digno ou a pessoa mais certa pra você. E eu sinto muito por isso. Eu vou te acompanhar a vida inteira e te ajudar onde você precisar. Eu prometo.",
        spotifyTrackId: "7D0RhFcb3CrfPuTJ0obrod",
        linkTraducao: "https://www.letras.mus.br/coldplay/8090/"
    },
    {
        id: 8,
        dataLiberacao: "2026-05-24",
        conteudo: "Bem gaymente, eu queria que essa tocasse no dia do nosso casamento.",
        spotifyTrackId: "1X3T2J7S1s6aCIbmjFf2NG",
        linkTraducao: "https://www.letras.mus.br/iron-wine/1083502/"
    },
    {
        id: 9,
        dataLiberacao: "2026-05-25",
        conteudo: "Eu não sei por que, mas sempre nos imaginei indo pescar numa manhã bem cedo e ouvindo SOJA dentro do carro. É uma das memórias que vão ficar comigo.",
        spotifyTrackId: "1HnriuDThLq7bEl1QKiaJL",
        linkTraducao: "https://www.letras.mus.br/soja/210837/"
    },
    {
        id: 10,
        dataLiberacao: "2026-05-26",
        conteudo: "Essa é mais uma da série: Eu andaria muito com a Brenda ouvindo essa música até o talo no volume em um carro velho.",
        spotifyTrackId: "6WkJ2OK163XXS2oARUC9JM",
        linkTraducao: "https://www.letras.mus.br/aaron-smith/472671/"
    }
];
function renderizarCartas() {
    const containerHoje = document.getElementById('container-hoje');
    const containerPassadas = document.getElementById('container-passadas');
    if (!containerHoje || !containerPassadas)
        return;
    const agora = new Date();
    const hojeStr = agora.toLocaleDateString('en-CA');
    const horaAtual = agora.getHours();
    const cartasDisponiveis = minhasCartas.filter(carta => {
        if (carta.dataLiberacao < hojeStr)
            return true;
        if (carta.dataLiberacao === hojeStr && horaAtual >= 18)
            return true;
        return false;
    });
    cartasDisponiveis.sort((a, b) => new Date(b.dataLiberacao).getTime() - new Date(a.dataLiberacao).getTime());
    containerHoje.innerHTML = '';
    containerPassadas.innerHTML = '';
    if (cartasDisponiveis.length === 0) {
        containerHoje.innerHTML = `<p style="color: var(--text-sub); text-align: center;">Nenhuma carta disponível ainda. Volte às 18h.</p>`;
        return;
    }
    cartasDisponiveis.forEach((carta, index) => {
        const isMaisRecente = index === 0;
        const playerSpotifyHTML = carta.spotifyTrackId ? `
            <div style="margin-top: 1.5rem;">
                <iframe style="border-radius:12px" 
                    src="https://open.spotify.com/embed/track/${carta.spotifyTrackId}?utm_source=generator&theme=0" 
                    width="100%" 
                    height="152" 
                    frameBorder="0" 
                    allowfullscreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy">
                </iframe>
            </div>
        ` : '';
        // Cria a condicional para o botão de tradução
        const botaoTraducaoHTML = carta.linkTraducao ? `
            <div style="margin-top: 1rem; text-align: right;">
                <a href="${carta.linkTraducao}" target="_blank" rel="noopener noreferrer" class="btn-secundario">
                    Clique para ver a tradução
                </a>
            </div>
        ` : '';
        // Adiciona a variável ${botaoTraducaoHTML} na montagem final da carta
        const cartaHTML = `
            <div class="carta ${isMaisRecente ? 'carta-hoje' : ''}">
                <p class="carta-data">${formatarData(carta.dataLiberacao)} ${isMaisRecente ? '— A carta de hoje' : ''}</p>
                <p style="line-height: 1.6;">"${carta.conteudo}"</p>
                ${playerSpotifyHTML}
                ${botaoTraducaoHTML}
            </div>
        `;
        if (isMaisRecente) {
            containerHoje.innerHTML += cartaHTML;
        }
        else {
            containerPassadas.innerHTML += cartaHTML;
        }
    });
}
function formatarData(dataStr) {
    const partes = dataStr.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}
window.onload = renderizarCartas;
