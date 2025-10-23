import type { ReactNode } from 'react';

type AuthLayoutProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};

export function AuthLayout({ title, children, footer }: AuthLayoutProps) {
  return (
    <main className="page-main">
      <div className="wrapper">
        <div className="surface-block center">
          <section className="card auth-card">
            <h1>{title}</h1>
            {children}
            {footer}
          </section>
        </div>
      </div>
    </main>
  );
}

export default AuthLayout;

