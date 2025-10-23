# Projeto Mobiletes

Aplicação web criada em React + TypeScript para reutilizar o layout e o conteúdo que antes estavam disponíveis apenas em arquivos HTML estáticos dentro da pasta `old`. Todo o visual original foi migrado para componentes React e páginas com rotas do `react-router-dom`, mantendo o mesmo design por meio da folha de estilos original (`src/styles/style.css`).

## Principais pontos
- Estrutura de layout compartilhada com cabeçalho, rodapé e formulário de busca.
- Conteúdo das páginas organizado em módulos de dados (`src/data`) para facilitar manutenção e reutilização.
- Conjunto completo de páginas públicas (home, categorias, destaques, newsletter, autenticação) e páginas administrativas com painel e listas reutilizáveis.
- Build e bundling feitos com Vite.

## Como executar o projeto

1. **Instale as dependências**
   ```bash
   npm install
   ```

2. **Suba o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```
   O terminal mostrará o endereço (por padrão `http://localhost:5173`) para acessar a aplicação.

3. **Gerar build de produção**
   ```bash
   npm run build
   ```
   Os arquivos prontos para deploy ficam em `dist/`. Para checar o build localmente você pode usar:
   ```bash
   npm run preview
   ```

## Estrutura recomendada
- `src/components`: componentes reutilizáveis (layout, seções, listas, etc.).
- `src/pages`: páginas públicas, administrativas e de autenticação.
- `src/data`: conteúdo mockado utilizado para renderizar as páginas.
- `src/assets`: imagens migradas da versão original.
- `old`: referência da versão HTML/CSS estática original.

Sinta-se à vontade para substituir os dados mockados por integrações reais quando houver uma API disponível.  
Contribuições são bem-vindas! Ajuste ou crie novos componentes seguindo a mesma abordagem modular.*** End Patch
