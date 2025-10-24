import AuthLayout from '../../components/AuthLayout';

export function SignUpPage() {
  return (
    <AuthLayout title="Criar conta">
      <form className="auth-form">
        <div className="form-group">
          <label className="visually-hidden" htmlFor="signup-name">
            Nome completo
          </label>
          <input id="signup-name" type="text" placeholder="Nome completo" required />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="signup-email">
            E-mail
          </label>
          <input id="signup-email" type="email" placeholder="E-mail" required />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="signup-password">
            Senha
          </label>
          <input id="signup-password" type="password" placeholder="Senha" required />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="signup-confirm-password">
            Confirmar senha
          </label>
          <input
            id="signup-confirm-password"
            type="password"
            placeholder="Confirmar senha"
            required
          />
        </div>
        <label className="form-checkbox" htmlFor="signup-terms">
          <input id="signup-terms" type="checkbox" required />
          <span>Concordo com os termos e a política de privacidade</span>
        </label>
        <div className="form-actions">
          <button type="submit" className="btn btn--primary">
            Cadastrar
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default SignUpPage;

