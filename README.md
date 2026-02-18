# Audiobook - Dom Casmurro

## Visão Geral

Projeto de uma aplicação web para reprodução de audiobooks. Desenvolvido com foco em criar um player de áudio interativo e responsivo para a obra clássica "Dom Casmurro" de Machado de Assis. A aplicação oferece uma interface intuitiva com navegação entre capítulos, controle de reprodução e um design moderno e acessível.

## Demonstração

A aplicação está hospedada em: [https://projeto-audiobook-lake.vercel.app/](https://projeto-audiobook-lake.vercel.app/)

## Tecnologias Utilizadas

### HTML5
HTML5 é utilizado como base estrutural da aplicação, fornecendo a semântica apropriada para uma web moderna. Principais características implementadas:

- **Elemento de áudio nativo**: Utiliza a tag `<audio>` do HTML5 para gerenciar a reprodução de arquivos de áudio sem dependências externas.
- **Meta tags responsivas**: Implementa `viewport` para garantir compatibilidade com diferentes dispositivos e `charset UTF-8` para suporte a caracteres especiais em português.
- **Semântica estruturada**: Organização lógica dos elementos com `div` semanticamente identificados para facilitar manutenção e acessibilidade.

### CSS3
CSS3 é responsável pela apresentação visual e experiência do usuário, com técnicas modernas de layout:

- **Flexbox**: Utilizado para criar layouts flexíveis e responsivos, centralizando elementos e organizando o posicionamento dos botões de controle de forma adaptativa.
- **Gradientes lineares**: Implementa gradientes personalizados no fundo da aplicação, criando uma identidade visual única com transição de cores em verde.
- **Responsividade**: Media queries e dimensionamento proporcionais garantem que a interface funcione perfeitamente em dispositivos de diferentes tamanhos.
- **Tipografia**: Utiliza a fonte "Montserrat" para um visual profissional e legível, com hierarquia de tamanhos para diferentes elementos.

### JavaScript Vanilla
JavaScript é utilizado para gerenciar toda a lógica interativa da aplicação, sem dependências de frameworks:

- **Manipulação do DOM**: Acessa e modifica elementos HTML dinamicamente para atualizar informações de capítulo e controlar estados visuais da interface.
- **Event Listeners**: Implementa listeners de clique nos botões de play/pause e navegação entre capítulos, respondendo às interações do usuário.
- **Controle de áudio**: Gerencia a reprodução de áudio através da API nativa do HTML5 (`play()`, `pause()`, atualização de `src`).
- **Lógica de estado**: Mantém o controle do capítulo atual e estado de reprodução, permitindo navegação cíclica entre os 10 capítulos.

## Recursos Principais

- Reprodução de áudio com play e pause.
- Navegação entre capítulos (anterior e próximo).
- Navegação cíclica (volta ao primeiro capítulo após o último).
- Interface reativa com indicativo visual de reprodução ativa.
- Design responsivo adaptado para diferentes tamanhos de tela.
- Suporte nativo a HTML5 Audio API.

## Estrutura do Projeto

```
projeto-audiobook/
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Estilos e layout da aplicação
├── script.js           # Lógica de interação e controle
├── audios/             # Pasta com arquivos de áudio dos capítulos
└── imagens/            # Pasta com capa do livro e outros recursos visuais
```

## Como Usar

1. Acesse a aplicação através do link: [https://projeto-audiobook-lake.vercel.app/](https://projeto-audiobook-lake.vercel.app/)
2. Clique no botão de play para iniciar a reprodução do capítulo
3. Use os botões de navegação para avançar ou retroceder entre capítulos
4. O título do capítulo atual é exibido abaixo da capa

## Autor

Desenvolvido como projeto de aprendizado web.
