import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/shared/config/theme';

import '@/shared/config/i18n/i18nConfig';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
