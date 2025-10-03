Telas incluídas

Dashboard / Categorias — admin_categorias.html
Topbar com busca, KPIs e uma lista de categorias com Editar/Excluir.
Obs.: aqui tem modo escuro automático e menu hamburger acessível.

Criar Post — admin_criarpost.html
Formulário com Título, Conteúdo, Tags e Upload de capa, além dos botões Salvar, Enviar para revisão e Publicar.

Escolhas do Editor — admin_escolhaseditor.html
Campo de busca + lista de posts com ações Agendar/Remover.

Todos compartilham o mesmo CSS (styles.css) e a fonte Roboto.



Como o layout foi pensado

Mobile-first: começamos do celular e vamos “abrindo” o layout nos breakpoints.

Grid + Flex:

A página usa CSS Grid para dividir sidebar e conteúdo.

Menus, listas e botões usam Flexbox para alinhar tudo direitinho.

Listas tipo “tabela”: são <ul> com linhas em Grid — ficam mais fáceis de adaptar em telas pequenas.

Design tokens: cores, tamanhos de fonte, espaçamentos e sombras estão em variáveis CSS (:root).

Paleta:
#3D5E6B (principal), #9CA5B1, #D5D0C4, #877C73, #44474D + branco e preto.



Breakpoints usados

Base (mobile): 320–420px
1 coluna; KPIs em 1 coluna; formulários em pilha; nav com hamburger (só na dashboard).

Tablet: min-width: 768px
KPIs em 2 colunas; alguns campos do formulário ficam lado a lado.

Desktop: min-width: 1024px
Layout vira sidebar + conteúdo, KPIs em 4 colunas; cabeçalhos de seção e buscas lado a lado; nav horizontal.



Acessibilidade (o que foi cuidado)

Semântica: header, nav, main, section, article, aside, footer.
Títulos na ordem certa: h1 → h2 → h3.

Formulários: todo input/textarea tem label vinculado; type e inputmode corretos.

Teclado: foco visível com :focus-visible (alto contraste) e skip link “Pular para o conteúdo”.

ARIA onde faz sentido: role="search", aria-current="page", aria-label em botões/icones sem texto.
O hamburger (na dashboard) usa aria-controls e aria-expanded.

Contraste: combinações de cor pensadas para WCAG AA no claro e no escuro.

Dark mode: liga sozinho via prefers-color-scheme — só trocamos as variáveis; nada de duplicar CSS.

Imagens: fluidas e com alt (quando não são decorativas).

Menos movimento: respeita prefers-reduced-motion.


Estrutura
/projeto
├─ index.html                
├─ admin_categorias.html         
├─ admin_criarpost.html
├─ admin_escolhaseditor.html
├─ styles.css               
└─ README.md


