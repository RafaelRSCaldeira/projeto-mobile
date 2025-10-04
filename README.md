# Projeto da Matéria de Desenvolvimento Mobile


## Professor - Jose Carmino

## Grupo
- Alice Ozaki - 10418466
- Catarina Senkiio - 10419495
- Guilherme Piragibe - 10401198
- Matheus Meloni - 10426969
- Rafael Caldera - 10417103

### Visão geral
Projeto para composição da nota N1 com telas estáticas composto por páginas públicas e páginas administrativas. O layout é responsivo (breakpoints em 320px, 768px e 1024px), utiliza a fonte Roboto (Google Fonts) e um CSS unificado para todas as páginas. O projeto foi versificado por meio do GitHub e as reuniões do grupo feitas pela plataforma Discord. As imagens da página principal ficam centralizadas na pasta `assets/`.

### Requisitos
- **Navegador moderno**: Chrome, Edge, Firefox ou Safari recente
- **Sem backend**: todas as páginas são estáticas (HTML + CSS)
- **Fonte**: Roboto carregada via Google Fonts no `<head>`
- (Opcional) **VS Code + Live Server** para servir os arquivos localmente

### Como executar localmente
- Abrir o arquivo `index.html` diretamente no navegador (duplo clique)
- Opcional (VS Code): abrir a pasta do projeto e usar a extensão Live Server para servir `index.html`

### Estrutura
- `css/style.css`: folha de estilos única compartilhada entre todas as páginas
- `assets/`: imagens utilizadas (hero, cards, posts, etc.)
- Arquivos `.html`: páginas públicas e administrativas (listadas abaixo)

### Páginas públicas
- `index.html`: página inicial (hero, categorias populares, todas as categorias, posts em destaque e escolhas do editor)
- `negocios.html`: categoria Negócios
- `tecnologia.html`: categoria Tecnologia
- `produtividade.html`: categoria Produtividade
- `filmes.html`: categoria Filmes
- `lifestyle.html`: categoria Lifestyle
- `educacao.html`: categoria Educação
- `mailing.html`: categoria Mailing
- `ecommerce.html`: categoria eCommerce
- `alimentacao.html`: categoria Alimentação
- `social.html`: categoria Social
- `newsletter.html`: página de inscrição/assinatura
- `login.html`: página de login
- `criar_conta.html`: página de criação de conta
- `destaques.html`: listagem de posts em destaque
- `escolhas_editor.html`: seleção/curadoria do editor
- `usuarios.html`: listagem/área geral de usuários

### Páginas administrativas
- `admin_usuarios.html`: gestão de usuários
- `admin_escolhaseditor.html`: gestão das escolhas do editor
- `admin_filacomentarios.html`: fila de comentários
- `admin_filarevisao.html`: fila de revisão
- `admin_categorias.html`: gestão de categorias
- `admin_criarpost.html`: criação de post

### Estilos (css/style.css)
- **Unificado**: uma única folha de estilos para todo o site
- **Design tokens**: variáveis CSS (espaçamentos, cor primária, cor de fonte)
- **Layout**: Grid/Flex em seções como hero, categorias, cards de posts e rodapé
- **Componentes**: barra de navegação, hero, cards de categoria, pills de filtro, cards de post, “Escolhas do Editor” e rodapé
- **Responsividade**: ajustes para 320px, 768px e 1024px

### Assets
- Todas as imagens utilizadas pela home e categorias ficam em `assets/`
- Exemplos: `hero.webp`, `post1.jpg`, `post2.png`, imagens de categorias



