import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vinicius Sales de Souza | Analista de Dados & Sales Operations',
  description: 'Especialista em automação de pipelines de dados, Power BI e Sales Operations. Pipeline completo Odoo → PostgreSQL → Power BI gerenciando R$ 11M+ em receita.',
  keywords: [
    'analista de dados',
    'sales operations',
    'power bi',
    'revenue operations',
    'business intelligence',
    'python etl',
    'odoo crm',
    'data analyst',
    'sales analytics',
    'pipeline automation'
  ],
  authors: [{ name: 'Vinicius Sales de Souza' }],
  openGraph: {
    title: 'Vinicius Sales de Souza | Analista de Dados & Sales Operations',
    description: 'Especialista em automação de pipelines de dados, Power BI e Sales Operations',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  )
}
