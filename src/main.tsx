import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './styles/style.css';
import AdminLayout from './components/admin/AdminLayout';
import HomePage from './pages/HomePage';
import NewsletterPage from './pages/NewsletterPage';
import UsuariosPage from './pages/UsuariosPage';
import AdminCategoriesPage from './pages/admin/AdminCategoriesPage';
import AdminCommentsQueuePage from './pages/admin/AdminCommentsQueuePage';
import AdminCreatePostPage from './pages/admin/AdminCreatePostPage';
import AdminEditorChoicesPage from './pages/admin/AdminEditorChoicesPage';
import AdminReviewQueuePage from './pages/admin/AdminReviewQueuePage';
import AdminUsersPage from './pages/admin/AdminUsersPage';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="newsletter" element={<NewsletterPage />} />
          <Route path="usuarios" element={<UsuariosPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminCategoriesPage />} />
          <Route path="categorias" element={<AdminCategoriesPage />} />
          <Route path="criar-post" element={<AdminCreatePostPage />} />
          <Route path="escolhas-editor" element={<AdminEditorChoicesPage />} />
          <Route path="usuarios" element={<AdminUsersPage />} />
          <Route path="fila-revisao" element={<AdminReviewQueuePage />} />
          <Route path="fila-comentarios" element={<AdminCommentsQueuePage />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  );
}


