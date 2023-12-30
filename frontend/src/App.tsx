import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';
import LoginPage from './pages/auth/LoginPage';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import Page404 from './pages/404Page';
import SettingsPage from './pages/SettingsPage';
import JsonComparePage from './pages/widgets/json-compare/JsonComparePage';
import WidgetsLayout from './components/layout/WidgetsLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<ProtectedRoute redirect="/login" />}>
          <Route index element={<HomePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="widgets" element={<WidgetsLayout />}>
            <Route path="json-compare" element={<JsonComparePage />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
