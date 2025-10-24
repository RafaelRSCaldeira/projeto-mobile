import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

export function LoginPage() {
  return (
    <AuthLayout
      title="Entrar"
      footer={
        <div className="auth-links">
          <a href="#">Esqueci a senha</a>
          <span>·</span>
          <Link to="/criar-conta">Criar conta</Link>
        </div>
      }
    >
      <form className="auth-form">
        <div className="form-group">
          <label className="visually-hidden" htmlFor="login-email">
            E-mail
          </label>
          <input id="login-email" type="email" placeholder="E-mail" required />
        </div>
        <div className="form-group">
          <label className="visually-hidden" htmlFor="login-password">
            Senha
          </label>
          <input id="login-password" type="password" placeholder="Senha" required />
        </div>
        <div className="form-actions">
          <button type="submit" className="btn btn--primary">
            Entrar
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;

