# 🚀 GUIA COMPLETO: DEPLOY NA VERCEL

## ⏱️ Tempo total: 10-15 minutos

---

## ETAPA 1: PREPARAR O CÓDIGO NO GITHUB (5 min)

### 1.1 Criar conta no GitHub (se não tiver)
- Acesse: https://github.com/signup
- Use seu email pessoal
- Confirme o email

### 1.2 Criar novo repositório
1. Clique no botão verde **"New"** (canto superior direito)
2. Preencha:
   - Repository name: `portfolio-vinicius-sales`
   - Description: `Meu portfólio profissional`
   - Deixe **Public**
   - ✅ Marque "Add a README file"
3. Clique **"Create repository"**

### 1.3 Fazer upload dos arquivos
**OPÇÃO A - Via interface web (mais fácil):**
1. No repositório criado, clique em **"Add file"** → **"Upload files"**
2. Arraste TODOS os arquivos da pasta `portfolio-vinicius`
3. Escreva na mensagem: "Initial commit"
4. Clique em **"Commit changes"**

**OPÇÃO B - Via Git (se souber usar):**
```bash
cd portfolio-vinicius
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/portfolio-vinicius-sales.git
git push -u origin main
```

---

## ETAPA 2: CRIAR CONTA NA VERCEL (2 min)

1. Acesse: https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize a conexão Vercel ↔ GitHub
4. Pronto! Conta criada

---

## ETAPA 3: FAZER DEPLOY (3 min)

### 3.1 Importar projeto
1. No painel da Vercel, clique em **"Add New..."** → **"Project"**
2. Na lista de repositórios do GitHub, encontre **`portfolio-vinicius-sales`**
3. Clique em **"Import"**

### 3.2 Configurar o projeto
A Vercel detecta automaticamente que é Next.js. Você verá:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

✅ **DEIXE TUDO COMO ESTÁ** (já vem configurado corretamente)

### 3.3 Deploy!
1. Clique no botão azul **"Deploy"**
2. Aguarde 2-3 minutos (barra de progresso vai aparecer)
3. Quando aparecer **"Congratulations!"** → está no ar! 🎉

### 3.4 Acessar seu site
- URL automática: `portfolio-vinicius-sales.vercel.app`
- Ou clique no botão **"Visit"** no painel

---

## ETAPA 4: CUSTOMIZAR DOMÍNIO (OPCIONAL)

### Opção 1: Usar subdomínio Vercel (grátis)
1. No projeto, vá em **Settings** → **Domains**
2. Adicione: `viniciussales.vercel.app`
3. Salve → Pronto!

### Opção 2: Usar domínio próprio (pago)
1. Compre um domínio (ex: viniciussales.com.br)
   - Registro.br: R$ 40/ano
   - Hostinger: R$ 50/ano
   - GoDaddy: variável
   
2. No Vercel, vá em **Settings** → **Domains**
3. Clique **"Add"** e digite seu domínio
4. Siga as instruções para configurar DNS (a Vercel te guia)

---

## 🔄 ATUALIZAR O SITE (SEMPRE QUE QUISER)

É super simples! Sempre que você fizer alterações:

1. Edite os arquivos no seu computador
2. Faça upload no GitHub (mesmo processo do passo 1.3)
3. **Vercel faz deploy automático!** (em 2-3 minutos)

Não precisa fazer nada na Vercel, ela detecta mudanças no GitHub automaticamente.

---

## ✅ CHECKLIST PÓS-DEPLOY

Depois que o site estiver no ar, teste:

- [ ] Site abre corretamente
- [ ] Links de navegação funcionam (Sobre, Projetos, etc)
- [ ] Botão de contato funciona
- [ ] Links para LinkedIn/GitHub funcionam
- [ ] Site responsivo no celular
- [ ] Adicione a URL do site no seu currículo e LinkedIn

---

## 🆘 PROBLEMAS COMUNS

### Erro: "Build failed"
**Solução:** Verifique se todos os arquivos foram enviados corretamente para o GitHub

### Site não carrega
**Solução:** Aguarde 5 minutos, DNS pode demorar para propagar

### Cores/fontes estranhas
**Solução:** Limpe o cache do navegador (Ctrl + Shift + R)

---

## 📞 PRECISA DE AJUDA?

Se tiver qualquer problema:
1. Tire um print da tela
2. Veja os logs de erro no Vercel (aba "Deployments")
3. Me mande a mensagem de erro

---

## 🎯 PRÓXIMOS PASSOS

Depois que o site estiver no ar:

1. ✅ Adicione a URL no seu LinkedIn (seção "Contato")
2. ✅ Atualize seu currículo com o link
3. ✅ Compartilhe com recrutadores
4. ✅ Configure Google Analytics (opcional)
5. ✅ Registre no Google Search Console para SEO

---

**Pronto para começar? Siga ETAPA 1 primeiro! 🚀**
