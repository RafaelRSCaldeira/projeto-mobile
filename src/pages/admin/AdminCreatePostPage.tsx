import AdminFootnote from '../../components/admin/AdminFootnote';
import AdminQuickTags from '../../components/admin/AdminQuickTags';
import KpiGrid from '../../components/admin/KpiGrid';

export function AdminCreatePostPage() {
  return (
    <>
      <KpiGrid />

      <section className="card" aria-labelledby="admin-criar-post">
        <header className="section__head">
          <h2 id="admin-criar-post">Criar Post</h2>
        </header>

        <form className="form" aria-describedby="hint-editor">
          <div className="field">
            <label htmlFor="titulo">Título</label>
            <input id="titulo" name="titulo" type="text" placeholder="Título" required />
          </div>

          <div className="field">
            <label htmlFor="editor">Conteúdo</label>
            <textarea
              id="editor"
              name="editor"
              rows={8}
              placeholder="Escreva aqui. (Editor simulador)"
            />
            <small id="hint-editor" className="help">
              Use Markdown básico. Imagens têm <code>alt</code> obrigatório.
            </small>
          </div>

          <div className="row-2">
            <div className="field">
              <label htmlFor="tags">Categorias e tags</label>
              <input id="tags" name="tags" type="text" placeholder="Ex.: Tecnologia, UX, IA" />
            </div>
            <div className="field">
              <label htmlFor="capa">Upload da imagem de capa</label>
              <input id="capa" name="capa" type="file" accept="image/*" />
            </div>
          </div>

          <div className="actions">
            <button type="button" className="btn">
              Salvar rascunho
            </button>
            <button type="submit" className="btn btn--outline">
              Enviar para revisão
            </button>
            <button type="submit" className="btn btn--primary" aria-label="Publicar como administrador">
              Publicar (admin)
            </button>
          </div>
        </form>
      </section>

      <AdminQuickTags />
      <AdminFootnote />
    </>
  );
}

export default AdminCreatePostPage;

