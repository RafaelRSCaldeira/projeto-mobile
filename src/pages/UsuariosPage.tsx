const userEntries = [
  { title: 'Post 1', status: 'Rascunho', statusClass: 'draft' },
  { title: 'Post 2', status: 'Publicado', statusClass: 'published' },
  { title: 'Comentário 1', status: 'Em análise', statusClass: 'review' },
  { title: 'Comentário 2', status: 'Publicado', statusClass: 'published' },
];

export function UsuariosPage() {
  return (
    <main className="page-main">
      <div className="wrapper">
        <section className="dashboard-surface">
          <div className="dashboard-grid">
            <aside className="profile-panel" aria-labelledby="perfil-heading">
              <h2 id="perfil-heading">Perfil</h2>
              <div className="avatar-placeholder" aria-hidden="true" />
              <form className="profile-form">
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="profile-name">
                    Nome
                  </label>
                  <input id="profile-name" type="text" placeholder="Nome" />
                </div>
                <div className="form-group">
                  <label className="visually-hidden" htmlFor="profile-bio">
                    Bio
                  </label>
                  <textarea id="profile-bio" placeholder="Bio" />
                </div>
                <button type="submit" className="btn btn--primary">
                  Salvar
                </button>
              </form>
            </aside>
            <section className="posts-panel" aria-labelledby="posts-heading">
              <h2 id="posts-heading">Suas postagens</h2>
              <div className="post-list">
                {userEntries.map(({ title, status, statusClass }) => (
                  <article key={title} className="post-card">
                    <div className="post-thumb" aria-hidden="true" />
                    <div className="post-details">
                      <span className={`post-status ${statusClass}`}>{status}</span>
                      <h3>{title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}

export default UsuariosPage;
