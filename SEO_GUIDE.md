# 🔍 GUIA DE SEO - APÓS O DEPLOY

## O site já tem SEO embutido! ✅

Mas você pode turbinar ainda mais seguindo estes passos:

---

## PASSO 1: GOOGLE SEARCH CONSOLE (Essencial)

### Por que fazer?
- Mostra como o Google vê seu site
- Informa quando aparecer em buscas
- Detecta problemas de indexação

### Como fazer:
1. Acesse: https://search.google.com/search-console
2. Clique em **"Adicionar propriedade"**
3. Digite a URL do seu site: `https://seu-site.vercel.app`
4. Escolha método de verificação: **"Tag HTML"** (mais fácil)
5. Copie o código fornecido
6. Cole no arquivo `app/layout.tsx` dentro da tag `<head>`
7. Clique em **"Verificar"**

### Após verificar:
- Vá em **"Indexação"** → **"Solicitar indexação"**
- Cole a URL da sua home
- Google vai indexar em 1-3 dias

---

## PASSO 2: GOOGLE ANALYTICS (Opcional)

### Por que fazer?
- Ver quantas pessoas visitam
- De onde vêm (LinkedIn, Google, etc)
- Quais páginas mais acessadas

### Como fazer:
1. Acesse: https://analytics.google.com
2. Crie uma conta/propriedade
3. Copie o código de rastreamento (começa com `G-`)
4. Cole no arquivo `app/layout.tsx`

---

## PASSO 3: LINKEDIN & REDES SOCIAIS

### Otimizar compartilhamento:
Quando alguém compartilhar seu site, vai aparecer bonito com:
- ✅ Título profissional
- ✅ Descrição atraente
- ✅ Imagem destacada

Já está configurado no código! Teste em:
- https://cards-dev.twitter.com/validator
- https://www.opengraph.xyz/

### Adicionar no LinkedIn:
1. Perfil → Editar → Seção "Contato"
2. Campo "Website": Cole a URL do seu site
3. No seu resumo, adicione:
   ```
   🌐 Portfólio: https://seu-site.vercel.app
   ```

---

## PASSO 4: PALAVRAS-CHAVE ESTRATÉGICAS

Seu site já usa estas keywords (não precisa fazer nada):

✅ analista de dados
✅ sales operations
✅ power bi developer
✅ business intelligence
✅ revenue operations
✅ python etl
✅ data analyst
✅ sales analytics

### Para aparecer mais rápido no Google:
1. Crie posts no LinkedIn mencionando:
   - "Acabei de lançar meu portfólio de analista de dados"
   - Inclua o link do site
2. Peça para amigos/colegas visitarem
3. Adicione link do site em fóruns (ex: GitHub profile)

---

## PASSO 5: VELOCIDADE & PERFORMANCE

Seu site já é MUITO rápido porque usa Next.js! Mas você pode verificar:

1. Teste em: https://pagespeed.web.dev/
2. Digite a URL do seu site
3. Objetivo: Score 90+ (verde)

Se der score baixo:
- Comprima imagens antes de adicionar (use TinyPNG.com)
- Não adicione muitos GIFs pesados

---

## PASSO 6: RICH SNIPPETS (Avançado)

Para aparecer destacado no Google com estrelinhas/dados:

1. Adicione Schema.org markup
2. Teste em: https://search.google.com/test/rich-results

Exemplo de código para adicionar no `layout.tsx`:
```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vinicius Sales de Souza",
  "jobTitle": "Analista de Dados",
  "url": "https://seu-site.vercel.app",
  "sameAs": [
    "https://linkedin.com/in/seu-perfil",
    "https://github.com/seu-usuario"
  ]
}
</script>
```

---

## 📊 MONITORAMENTO (Primeira semana)

Nos primeiros 7 dias após o deploy, monitore:

### Google Search Console:
- [ ] Site foi indexado?
- [ ] Algum erro de indexação?
- [ ] Quantas páginas foram descobertas?

### Teste de busca:
Depois de 3-7 dias, pesquise no Google:
```
site:seu-site.vercel.app
```

Deve aparecer seu site! 🎉

### Testes de palavras-chave (após 2 semanas):
```
"vinicius sales" analista dados
"vinicius sales" power bi
analista dados sorocaba
sales operations sorocaba
```

---

## 🎯 META DE SEO (30 dias)

Objetivo em 1 mês:
- ✅ Site indexado no Google
- ✅ Aparece ao buscar seu nome
- ✅ 10+ visitas orgânicas no Analytics
- ✅ Score 90+ no PageSpeed

---

## 🚨 ERROS COMUNS

### "Meu site não aparece no Google"
**Normal!** Pode levar 7-14 dias para indexar
**Solução:** Use Google Search Console para acelerar

### "Aparece mas sem descrição bonita"
**Causa:** Cache do Google ainda não atualizou
**Solução:** Aguarde 48 horas ou use "Solicitar indexação"

### "Score baixo no PageSpeed"
**Causa:** Imagens pesadas
**Solução:** Comprima imagens em TinyPNG.com antes de adicionar

---

## 📈 OTIMIZAÇÕES CONTÍNUAS

A cada 2-3 meses:
1. Adicione novos projetos
2. Atualize KPIs (se mudaram)
3. Adicione certificações novas
4. Compartilhe nas redes sociais

---

**Dúvidas? Consulte:**
- Google Search Console Help: https://support.google.com/webmasters
- Next.js SEO Guide: https://nextjs.org/learn/seo/introduction-to-seo
