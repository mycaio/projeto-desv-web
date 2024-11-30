const projetos = [
    {
        titulo: "Sistema de Biblioteca",
        descricao: "O projeto é um Sistema de Biblioteca desenvolvido em Python, que aplica os princípios da Programação Orientada a Objetos para gerenciar livros, usuários e empréstimos de forma eficiente. O sistema permite o cadastro de livros com informações detalhadas (como título, autor e ano de publicação), o registro de usuários (alunos e professores) e o controle dos empréstimos, verificando disponibilidade de livros e limites de empréstimo por pessoa. Além disso, o sistema oferece funcionalidades para registrar devoluções e listar os itens cadastrados, proporcionando uma solução prática para simular o gerenciamento de uma biblioteca real.",
        imagem: "imagens/biblioteca.jpeg"
    },
    {
        titulo: "Batalha Naval",
        descricao: "O projeto é um Jogo de Batalha Naval desenvolvido em Python, que simula a clássica disputa entre dois jogadores em um tabuleiro virtual. O jogo utiliza conceitos de Programação Orientada a Objetos para estruturar os elementos principais, como tabuleiros, navios e jogadas. Cada jogador posiciona seus navios estrategicamente no tabuleiro, enquanto tenta adivinhar a localização dos navios adversários, marcando ataques e registrando acertos ou erros. Com um sistema simples de interface em terminal, o jogo proporciona uma experiência interativa, desafiadora e divertida, sendo ideal para reforçar conceitos como encapsulamento, manipulação de listas bidimensionais e lógica de jogo.",
        imagem: "imagens/batalhanaval.png"
    },
    {
        titulo: "Portfólio Pessoal",
        descricao: "O projeto é uma aplicação web de portfólio pessoal desenvolvida com HTML, CSS e JavaScript, ideal para apresentar informações de forma profissional e interativa. A aplicação é composta por páginas dedicadas, incluindo uma seção 'Sobre Mim', onde são exibidos detalhes sobre a formação, habilidades e experiências do desenvolvedor; uma página de 'Projetos', que destaca trabalhos anteriores com descrições e links; e uma área de 'Contato', que facilita o envio de mensagens ou a conexão via redes sociais. Com um design responsivo e estilização personalizada, o portfólio busca refletir a identidade do criador enquanto proporciona uma navegação fluida e visualmente atraente.",
        imagem: "imagens/portfolio.jpeg"
    }
];

const container = document.getElementById("projetos-container");

projetos.forEach(projeto => {
    const projetoDiv = document.createElement("div");
    projetoDiv.classList.add("projetos");

    const imagem = document.createElement("img");
    imagem.src = projeto.imagem; // Usa o caminho da imagem do projeto
    imagem.alt = "Imagem do Projeto";

    const textoDiv = document.createElement("div");
    textoDiv.classList.add("projetos_texto");

    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    textoDiv.appendChild(titulo);
    textoDiv.appendChild(descricao);

    projetoDiv.appendChild(imagem);
    projetoDiv.appendChild(textoDiv);

    container.appendChild(projetoDiv);
});
