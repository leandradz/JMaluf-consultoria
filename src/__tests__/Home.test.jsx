import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Home from '../pages/Home';

describe('Home Page', () => {
  it('renders home page title', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </I18nextProvider>
    );
    
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('renders home page description', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </I18nextProvider>
    );
    
    expect(screen.getByText(/soluções/i)).toBeInTheDocument();
  });
});
