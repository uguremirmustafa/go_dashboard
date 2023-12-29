import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css';
import App from './App.tsx';
import { AuthWrapper } from './context/AuthContext.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from './components/theme/ThemeWrapper.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AuthWrapper>
          <ThemeWrapper>
            <App />
          </ThemeWrapper>
        </AuthWrapper>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
