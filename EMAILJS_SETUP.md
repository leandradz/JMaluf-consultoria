# Configuração EmailJS - JMaluf Consultoria

Este guia ajudará você a configurar o EmailJS para o formulário de contato.

## ⚙️ Passos para Configurar

### 1. Criar Conta no EmailJS
- Acesse: https://www.emailjs.com/
- Clique em "Sign Up" e crie uma conta gratuita
- Confirme seu email

### 2. Adicionar Email Service (Gmail, Hotmail, etc)
- No dashboard, vá para **"Email Services"**
- Clique em **"Add Service"**
- Escolha seu provedor:
  - **Gmail**: Use sua conta Google
  - **Hotmail/Outlook**: Use sua conta Microsoft
  - Outro: Configure SMTP manualmente
- Siga as instruções na tela
- Clique em **"Create Service"**
- Copie o **Service ID** (exemplo: `service_abc123def456`)

### 3. Criar Email Template
- No dashboard, vá para **"Email Templates"**
- Clique em **"Create New Template"**
- Configure assim:

**Template Name:**
```
Contact Form
```

**Template Content:**
```
Subject: Nova Mensagem de {{name}}

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

- Clique em **"Save"**
- Copie o **Template ID** (exemplo: `template_abc123def456`)

### 4. Pegar a Public Key
- No dashboard, vá para **"Account"**
- Na seção **"API Keys"**, copie a **Public Key**

### 5. Atualizar o Código
- Abra o arquivo: `src/pages/Home/Home.jsx`
- Encontre essas linhas no topo do arquivo:

```javascript
const SERVICE_ID = "YOUR_SERVICE_ID"; // Substituir
const TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Substituir
const PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Substituir
const RECIPIENT_EMAIL = "leticia_andrade94@hotmail.com"; // Substituir
```

- Substitua pelos seus valores do EmailJS
- Para alterar o email de destino, mude apenas o `RECIPIENT_EMAIL`

## ✅ Pronto!

Agora o formulário enviará emails automaticamente para o endereço configurado em `RECIPIENT_EMAIL`.

## 🔄 Para Alterar o Email Depois

Se quiser mudar o email para receber as mensagens:
- Edite apenas a linha: `const RECIPIENT_EMAIL = "seu_novo_email@dominio.com";`
- Não precisa mudar nenhuma outra coisa!

## 📝 Notas Importantes

- O plano gratuito do EmailJS permite até 200 emails/mês
- Não exponha sua `Public Key` em produção (considere usar variáveis de ambiente)
- Para produção, crie variáveis `.env.local` com:
  ```
  VITE_SERVICE_ID=seu_service_id
  VITE_TEMPLATE_ID=seu_template_id
  VITE_PUBLIC_KEY=sua_public_key
  ```

## ❓ Problemas?

Se o email não funcionar:
1. Verifique se o Service ID, Template ID e Public Key estão corretos
2. Verifique se o template tem as variáveis: `{{name}}`, `{{email}}`, `{{message}}`
3. Verifique o console do navegador (F12) para mensagens de erro
4. Teste no dashboard do EmailJS: "Test Email Template"
