export function NewsletterPage() {
  return (
    <main className="newsletter-main">
      <section className="newsletter-box">
        <h2>Assine a newsletter</h2>
        <input type="email" placeholder="E-mail" aria-label="E-mail" />
        <label>
          <input type="checkbox" />
          Concordo em receber comunicações e li a política de privacidade.
        </label>
        <button type="button" className="button-primary">
          Assinar
        </button>
      </section>
    </main>
  );
}

export default NewsletterPage;

