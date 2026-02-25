# Portfólio Vinicius Sales de Souza

Site profissional otimizado para SEO showcasing experiência em Data Analytics, Sales Operations e Business Intelligence.

## 🚀 Deploy na Vercel (3 passos simples)

### Passo 1: Criar conta na Vercel
1. Acesse: https://vercel.com/signup
2. Crie conta com seu email ou GitHub (grátis)

### Passo 2: Preparar o código
1. Crie um repositório no GitHub
2. Faça upload de todos os arquivos deste projeto
3. Commit e push para o GitHub

### Passo 3: Deploy
1. No Vercel, clique em "Add New Project"
2. Selecione "Import Git Repository"
3. Escolha seu repositório do GitHub
4. Configure:
   - Framework Preset: **Next.js**
   - Root Directory: `./` (deixar padrão)
   - Build Command: `npm run build` (deixar padrão)
   - Output Directory: `.next` (deixar padrão)
5. Clique em **Deploy**

**Pronto!** Em 2-3 minutos seu site estará no ar em `seu-nome.vercel.app`

## 📝 Customizar domínio (opcional)

Para ter `viniciussales.com` ao invés de `.vercel.app`:
1. Compre um domínio (Registro.br, Hostinger, etc)
2. No Vercel, vá em Settings → Domains
3. Adicione seu domínio e siga instruções

## 🎨 Personalizar o site

### Atualizar projetos
Edite o arquivo: `app/page.tsx`
- Procure por `{/* Projeto 1 */}`, `{/* Projeto 2 */}`, etc
- Altere textos, adicione novos projetos

### Mudar cores
Edite o arquivo: `tailwind.config.js`
```js
colors: {
  primary: '#2563eb',  // Azul principal
  secondary: '#1e40af', // Azul secundário
}
```

### Adicionar imagens dos dashboards
1. Crie pasta: `public/projects/`
2. Adicione suas imagens: `dashboard1.png`, `dashboard2.png`, etc
3. No código, adicione antes do título do projeto:
```jsx
<img src="/projects/dashboard1.png" alt="Dashboard" className="w-full rounded-lg mb-4" />
```

## 🔍 SEO já configurado

✅ Meta tags otimizadas
✅ Keywords estratégicas
✅ Open Graph para redes sociais
✅ Sitemap automático
✅ Robots.txt

## 📱 Responsivo

✅ Mobile, Tablet, Desktop
✅ Performance otimizada
✅ Carregamento rápido

## 🛠️ Tecnologias

- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- Lucide Icons

## 📧 Suporte

Qualquer dúvida, consulte a documentação:
- Next.js: https://nextjs.org/docs
- Vercel: https://vercel.com/docs
- Tailwind: https://tailwindcss.com/docs
