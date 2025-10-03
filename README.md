# HABIT — Admin (Usuários, Fila de Revisão e Fila de Comentários)

Trio de páginas do painel administrativo em **HTML/CSS puro**, responsivas, acessíveis e no mesmo design system das telas anteriores.  
Sem frameworks. Modo escuro automático.

---

## 📄 Telas incluídas

- **Usuários** — `admin_usuarios.html`  
  Busca interna + lista de usuários com **nome**, **e-mail**, **status** e ações **Bloquear/Desbloquear**.

- **Fila de revisão** — `admin_filarevisao.html`  
  Busca interna + fila de posts com **título**, **autor**, **status** e ações **Aprovar/Reprovar**.

- **Fila de comentários** — `admin_filacomentarios.html`  
  Busca interna + fila de comentários com **título**, **autor**, **status** e ações **Aprovar/Reprovar**.

> Todas as páginas reutilizam `styles.css` (mesma paleta e componentes) e a fonte **Roboto**.

---

## 🧩 Decisões de layout

- **Mobile-first**: base otimizada para telas pequenas; layout expande nos breakpoints.
- **Grid + Flex**:
  - **CSS Grid** para o layout principal (**sidebar + conteúdo**) e KPIs.
  - **Flexbox** para navegação, botões e alinhamento das ações.
- **Listas tipo “tabela”**: implementadas com `<ul>` e linhas em **Grid** — fica fluido no mobile.
- **Design tokens** em `:root`: cores, tipografia, espaçamentos, bordas e sombras.
- **Paleta**: `#3D5E6B` (brand), `#9CA5B1`, `#D5D0C4`, `#877C73`, `#44474D`, **branco** e **preto**.
- **Modo escuro**: automático via `prefers-color-scheme` (variáveis de cor trocadas, sem duplicar CSS).
- **Nav fixa**: navegação sempre visível nessas três páginas (sem botão hamburger).

---

## 📱 Breakpoints

- **Base (mobile)** — 320–420px  
  1 coluna; KPIs em 1 coluna; listas mostram **info + ações** em duas colunas.

- **Tablet** — `min-width: 768px`  
  KPIs em **2 colunas**; mais respiro entre “colunas” lógicas das listas (usuário/e-mail/status).

- **Desktop** — `min-width: 1024px`  
  Layout em **sidebar + conteúdo**; KPIs em **4 colunas**; cabeçalho de seção e busca alinhados; nav horizontal.

---

## ♿ Acessibilidade

- **Semântica**: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`.  
  Títulos em ordem (**h1 → h2 → h3**).
- **Formulários**: `label` associado por `for/id`, `type`/`inputmode` corretos; buscas com `role="search"`.
- **Teclado**: foco visível (`:focus-visible`); **skip link** “Pular para o conteúdo”.
- **ARIA**: `aria-current="page"` na nav; `aria-label` quando necessário.
- **Contraste**: combinações revisadas para **WCAG AA** (claro e escuro).
- **Imagens**: fluidas com `max-width: 100%; height: auto` e `alt` quando não decorativas.
- **Movimento**: respeita `prefers-reduced-motion`.

---

## 🗂 Estrutura

```text
/projeto
├─ admin_usuarios.html          
├─ admin_filarevisao.html       
├─ admin_filacomentarios.html   
├─ styles.css                   
└─ README.md

