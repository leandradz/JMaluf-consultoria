import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Navigation from '../components/Navigation';

describe('Navigation Component', () => {
  it('renders navigation links', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </I18nextProvider>
    );
    
    expect(screen.getByText(/início/i)).toBeInTheDocument();
    expect(screen.getByText(/sobre/i)).toBeInTheDocument();
    expect(screen.getByText(/contato/i)).toBeInTheDocument();
  });

  it('renders language switcher buttons', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </I18nextProvider>
    );
    
    expect(screen.getByText('PT')).toBeInTheDocument();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });
});
