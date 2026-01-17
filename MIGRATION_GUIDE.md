# 🚀 Guia Rápido de Migração

## Passo a Passo para Aplicar o Refactoring

### 1️⃣ Backup do Código Atual
```bash
cd /Users/leticia.andrade/Desktop/Pessoal/JMaluf\ Consultoria/JMaluf-consultoria
git add .
git commit -m "backup: código antes do refactoring"
```

### 2️⃣ Substituir Home.jsx

```bash
# Fazer backup do arquivo antigo
mv src/pages/Home/Home.jsx src/pages/Home/Home-old.jsx
mv src/pages/Home/Home.css src/pages/Home/Home-old.css

# Usar o novo arquivo
mv src/pages/Home/Home-new.jsx src/pages/Home/Home.jsx
```

### 3️⃣ Testar a Aplicação

```bash
npm run dev
```

Acesse http://localhost:5173 e verifique se tudo está funcionando:

- [ ] Hero section carrega corretamente
- [ ] Seção About exibe valores
- [ ] Seção Services exibe cards
- [ ] Seção Contact tem formulário funcional
- [ ] Formulário de contato funciona
- [ ] Botões de WhatsApp, LinkedIn e Telefone funcionam
- [ ] Navegação entre seções funciona
- [ ] Troca de idioma funciona
- [ ] Responsividade está ok (teste mobile)

### 4️⃣ Verificar CSS

As variáveis CSS devem estar funcionando. Abra o DevTools e verifique se as cores estão aplicadas corretamente.

### 5️⃣ Limpar Arquivos Antigos

Depois de verificar que tudo funciona:

```bash
# Remover arquivos antigos
rm src/pages/Home/Home-old.jsx
rm src/pages/Home/Home-old.css
```

### 6️⃣ Commit das Mudanças

```bash
git add .
git commit -m "refactor: aplicar boas práticas e componentização

- Criar sistema de variáveis CSS centralizadas
- Criar arquivo de constantes para configurações
- Componentizar seções (Hero, About, Services, Contact)
- Criar componentes reutilizáveis (ServiceCard, ValueCard, ContactItem)
- Simplificar Home.jsx de 390 para 20 linhas
- Adicionar documentação JSDoc em componentes
- Melhorar organização de arquivos"
```

## 🐛 Troubleshooting

### Problema: Estilos não estão aplicados
**Solução:** Verifique se `src/styles/variables.css` está sendo importado em `main.jsx`

### Problema: Componentes não encontrados
**Solução:** Verifique os paths de import. Certifique-se de que os arquivos estão na estrutura correta.

### Problema: Formulário não envia
**Solução:** Verifique se as constantes em `config.js` estão corretas, especialmente EMAIL_CONFIG.

### Problema: Animações não funcionam
**Solução:** Certifique-se de que as keyframes estão definidas nos arquivos CSS das seções.

## 📝 Verificações Finais

- [ ] Todos os links funcionam
- [ ] Formulário valida campos corretamente  
- [ ] Mensagens de sucesso/erro aparecem
- [ ] Hover effects funcionam nos cards
- [ ] Layout responsivo em mobile
- [ ] Nenhum erro no console do navegador
- [ ] Todos os textos estão traduzidos
- [ ] Performance está ok (sem lentidão)

## 🎉 Pronto!

Seu código agora está:
- ✅ Mais organizado
- ✅ Mais fácil de manter
- ✅ Seguindo boas práticas
- ✅ Pronto para escalar

Para mais detalhes, consulte o arquivo `REFACTORING.md`.
