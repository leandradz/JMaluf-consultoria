# JMaluf Consultoria

Aplicativo de consultoria web desenvolvido com React + Vite, suportando múltiplos idiomas.

## 🌐 Idiomas Disponíveis

- Português (Brasil)
- English
- Español

## 🚀 Funcionalidades

- **SPA (Single Page Application)** com React e Vite
- **Internacionalização (i18n)** com suporte para 3 idiomas
- **Rotas**: Home, Sobre e Contato
- **Testes** com Jest e React Testing Library
- **Estrutura de pastas limpa e organizada**
- **Deploy automatizado** no GitHub Pages

## 📁 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Navigation.jsx
│   └── Navigation.css
├── pages/             # Páginas da aplicação
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
├── locales/           # Arquivos de tradução
│   ├── pt-BR.json
│   ├── en.json
│   └── es.json
├── styles/            # Estilos globais
│   └── pages.css
├── __tests__/         # Testes
│   ├── Home.test.jsx
│   └── Navigation.test.jsx
├── i18n.js            # Configuração i18n
├── App.jsx            # Componente principal
└── main.jsx           # Ponto de entrada
```

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Executar testes
npm test

# Executar testes em modo watch
npm test:watch

# Gerar relatório de cobertura
npm test:coverage

# Executar linter
npm run lint

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌍 GitHub Pages

O projeto está configurado para deploy automático no GitHub Pages. Toda vez que houver um push na branch `main`, o GitHub Actions irá:

1. Instalar as dependências
2. Fazer o build da aplicação
3. Fazer o deploy no GitHub Pages

### Acessando a aplicação

Após o deploy, a aplicação estará disponível em:
```
https://[seu-username].github.io/[nome-do-repositorio]/
```

## 🔧 Configuração de Domínio Personalizado

Para configurar um domínio personalizado (ex: www.jmalufconsultant.com):

### 1. Configuração no GitHub

1. Acesse as configurações do repositório no GitHub
2. Vá em **Settings** → **Pages**
3. Na seção **Custom domain**, insira seu domínio personalizado
4. Clique em **Save**

### 2. Configuração no Provedor de DNS

No seu provedor de domínio (ex: GoDaddy, Namecheap, etc.), adicione os seguintes registros DNS:

#### Para usar `www.jmalufconsultant.com`:
```
CNAME: www → [seu-username].github.io
```

#### Para usar `jmalufconsultant.com` (apex domain):
```
A: @ → 185.199.108.153
A: @ → 185.199.109.153
A: @ → 185.199.110.153
A: @ → 185.199.111.153
CNAME: www → [seu-username].github.io
```

### 3. Adicionar arquivo CNAME

Crie um arquivo `CNAME` na pasta `public/` com o conteúdo:
```
www.jmalufconsultant.com
```

Este arquivo será copiado para o diretório `dist/` durante o build e garantirá que o domínio personalizado seja mantido após cada deploy.

### 4. Atualizar vite.config.js (se necessário)

Se você usar um domínio personalizado, atualize o `base` no `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' para domínio personalizado
})
```

### ⚠️ Importante
- A propagação de DNS pode levar de algumas horas até 48 horas
- Certifique-se de habilitar HTTPS nas configurações do GitHub Pages
- Verifique se o certificado SSL foi provisionado com sucesso

## 🧪 Testes

O projeto utiliza Jest e React Testing Library para testes. Os testes estão localizados na pasta `src/__tests__/`.

Exemplos de testes implementados:
- Renderização de componentes
- Navegação entre páginas
- Troca de idiomas

## 📝 Licença

Este projeto está sob a licença especificada no arquivo LICENSE.
