## Mobiletes — Projeto da disciplina

Este repositório contém o projeto "Mobiletes" desenvolvido para a disciplina. O objetivo deste README é orientar configuração, desenvolvimento, critérios de avaliação e o que precisa ser entregue, com base no direcionamento do professor.

Observação: alguns trechos que estiverem marcados como PREENCHER/CONFIRMAR para alinharmos exatamente com o PDF de instruções do professor.

### Sumário
- [Visão geral](#visão-geral)
- [Objetivos do projeto](#objetivos-do-projeto)
- [Escopo e requisitos](#escopo-e-requisitos)
- [Arquitetura e tecnologias](#arquitetura-e-tecnologias)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Guia de desenvolvimento](#guia-de-desenvolvimento)
- [Padrões de código e UI](#padrões-de-código-e-ui)
- [Acessibilidade e responsividade](#acessibilidade-e-responsividade)
- [Roadmap e pendências](#roadmap-e-pendências)
- [Critérios de avaliação](#critérios-de-avaliação)
- [Entrega (deploy) e apresentação](#entrega-deploy-e-apresentação)
- [Licença](#licença)

### Visão geral
Interface web simples, com navegação e elementos de UI (barra de navegação, links, campo de busca, botões) definida em `index.html` e estilizada por `css/style.css`.

- Nome do projeto: Mobiletes
- Contexto: Projeto da disciplina (PREENCHER/CONFIRMAR: nome da matéria e período)
- Tema / problema: PREENCHER com o tema exato proposto pelo professor

### Objetivos do projeto
PREENCHER/CONFIRMAR com base no PDF:
- Objetivo principal do sistema/protótipo.
- Funcionalidades mínimas obrigatórias.
- Critérios de qualidade esperados (design, semântica, performance, acessibilidade, etc.).

### Escopo e requisitos
PREENCHER/CONFIRMAR os requisitos conforme o professor especificou:
- Requisito 1: ...
- Requisito 2: ...
- Requisito 3: ...

Regras e restrições:
- Navegação e seções previstas (Início, Páginas, Destaques, Assinar, Admin) já estão no layout inicial.
- PREENCHER: restrições de bibliotecas, prazos, formato de entrega, tamanho do grupo, etc.

### Arquitetura e tecnologias
- HTML5 semântico
- CSS3 (variáveis CSS para tokens de design)
- Sem dependências externas por enquanto

Opcional (a confirmar com o professor):
- Frameworks/bibliotecas (ex.: Tailwind/Bootstrap) — PREENCHER/CONFIRMAR
- Integração com back-end/APIs — PREENCHER/CONFIRMAR

### Estrutura de pastas
```
projeto-mobile/
  ├─ css/
  │  └─ style.css
  ├─ index.html
  ├─ README.md
  └─ exdercicio.pdf  (direcionamento do professor)
```

Arquivos principais:
- `index.html`: marcação da página inicial (nav, links, inputs e botões).
- `css/style.css`: tokens de espaçamento/cores e estilos de navegação, botões e separadores.

### Guia de desenvolvimento
Pré-requisitos: apenas um navegador moderno.

Passos para rodar localmente:
1. Faça o clone do repositório ou baixe o ZIP.
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou arraste para a janela do navegador).
   - Alternativa: sirva estático com uma extensão de Live Server do VS Code.

Fluxo de trabalho sugerido:
- Evoluir a marcação semântica no `index.html` (header/main/footer, landmarks ARIA quando fizer sentido).
- Incrementar estilos no `css/style.css`, mantendo consistência com os tokens de design.
- Criar novas seções/componentes conforme requisitos do professor.

### Padrões de código e UI
- HTML semântico: usar `header`, `nav`, `main`, `footer`, `section`, `article` quando apropriado.
- CSS com variáveis: utilizar os tokens já definidos em `:root` (ex.: `--primary-color`, `--space-*`).
- Nominação de classes: consistente e descritiva.
- Evitar estilos inline; centralizar estilos em `css/style.css`.
- Coerência visual: tipografia, espaçamentos e contraste.

### Acessibilidade e responsividade
- Contraste de cores adequado (ex.: verificar com um verificador de contraste).
- Tamanhos clicáveis e estados de foco visíveis para botões e links.
- Labels/Placeholders claros para campos de entrada.
- Layout responsivo: adaptar `nav` e `ul.nav-links` em telas menores (menu empilhado/colapsado).

Checklist rápido:
- [ ] Títulos hierárquicos (`h1`/`h2`/`h3`) corretos
- [ ] Foco visível e navegabilidade por teclado
- [ ] `lang="pt-BR"` definido (já presente)
- [ ] Meta viewport (já presente)
- [ ] Testes em mobile/desktop

### Roadmap e pendências
Pontos a implementar com base no PDF (preencher):
- [ ] Conteúdo real das seções "Início", "Páginas", "Destaques".
- [ ] Ação da barra de busca (comportamento esperado).
- [ ] Fluxo de "Assinar" (CTA, formulário, validação).
- [ ] Área "Admin" (escopo e permissões).
- [ ] Responsividade (breakpoints) e menu mobile.
- [ ] Melhorias de acessibilidade (foco, rótulos, aria-* se necessário).

### Critérios de avaliação
PREENCHER/CONFIRMAR (extraídos do PDF):
- Entrega pontual e aderência ao escopo.
- Qualidade do código (semântico, organizado, comentado quando necessário).
- Qualidade visual (consistência, contraste, responsividade).
- Demonstração/apresentação e justificativa das escolhas.

### Entrega (deploy) e apresentação
- Entrega mínima: repositório com `index.html`, `css/style.css` e este `README.md` atualizado.
- Deploy sugerido: GitHub Pages.
  - Passos: criar branch `gh-pages` ou configurar Pages a partir da branch principal, pasta raiz.
  - Atualizar aqui a URL publicada após o deploy (PREENCHER: `https://seu-usuario.github.io/projeto-mobile`).
- Apresentação: PREENCHER/CONFIRMAR formato (tempo, tópicos, critérios).

### Licença
PREENCHER/CONFIRMAR conforme orientação do professor (ex.: MIT) ou manter como "Todos os direitos reservados" se for apenas acadêmico.

