import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import Page404 from './pages/404Page';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute redirect="/login" />}>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
