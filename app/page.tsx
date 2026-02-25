import { Mail, Phone, MapPin, Linkedin, Github, ArrowRight, TrendingUp, Database, BarChart3, Zap, LineChart, Users } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">VS</div>
          <div className="flex gap-6">
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">Sobre</a>
            <a href="#projetos" className="text-gray-700 hover:text-blue-600 transition-colors">Projetos</a>
            <a href="#habilidades" className="text-gray-700 hover:text-blue-600 transition-colors">Habilidades</a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideUp">
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Disponível para novas oportunidades
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                Vinicius Sales
                <span className="block text-blue-600">de Souza</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Analista de Dados & Sales Operations
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Transformo dados complexos em decisões estratégicas. Especialista em automação de pipelines, 
                Power BI e inteligência comercial.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#projetos"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Ver Projetos <ArrowRight size={20} />
                </a>
                <a 
                  href="#contato"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Entre em Contato
                </a>
              </div>
            </div>
            <div className="relative animate-fadeIn">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">R$ 11M+</div>
                      <div className="text-blue-100">Pipeline gerenciado</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Database size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">561</div>
                      <div className="text-blue-100">Tabelas sincronizadas</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <Zap size={24} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-blue-100">Automação de processos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">Sobre Mim</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Profissional com forte viés analítico e histórico de <strong>rápida ascensão</strong>, 
                especializado em Sales Operations, inteligência comercial e engenharia de dados.
              </p>
              <p>
                Desenvolvo <strong>pipelines de dados completos</strong> — da extração via API até 
                dashboards analíticos em Power BI — eliminando processos manuais e acelerando a 
                tomada de decisão.
              </p>
              <p>
                Fui <strong>promovido internamente</strong> para a matriz do Grupo Berbel por entregar 
                soluções de dados que geraram visibilidade real do funil de vendas para a diretoria.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Experiência Atual</h3>
                <p className="text-gray-700 mb-2"><strong>Assistente Comercial Sênior | BI & CRM</strong></p>
                <p className="text-gray-600">Grupo Berbel · 05/2025 - Atual</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Formação</h3>
                <p className="text-gray-700 mb-2"><strong>Técnico em Logística</strong></p>
                <p className="text-gray-600">E.T.E.C. Cerquilho · 2015-2018</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg mb-3 text-gray-900">Localização</h3>
                <p className="text-gray-700">📍 Sorocaba, SP</p>
                <p className="text-gray-600 text-sm">Disponível para presencial, híbrido ou remoto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Projetos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções de dados que transformaram operações comerciais e geraram impacto mensurável
            </p>
          </div>

          <div className="space-y-8">
            {/* Projeto 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Database className="text-blue-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Pipeline de Automação Odoo → Power BI
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">XML-RPC API</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Power BI</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-gray-900">🎯 Desafio:</strong> Processo manual diário de download, 
                  restauração e atualização de backup consumia horas da equipe.
                </div>
                <div>
                  <strong className="text-gray-900">💡 Solução:</strong> Pipeline 100% automatizado sincronizando 
                  561 tabelas do Odoo para PostgreSQL via API, com Power BI Gateway para atualização na nuvem.
                </div>
                <div>
                  <strong className="text-gray-900">📊 Impacto:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Eliminação de 100% do trabalho manual</li>
                    <li>Sincronização automática às 06:00 via Windows Task Scheduler</li>
                    <li>561 tabelas sincronizadas com paginação de 1.000 registros</li>
                    <li>Configuração SSL enterprise completa</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-lg">
                  <BarChart3 className="text-green-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Dashboard de Sales Analytics Executivo
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Power BI</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">DAX</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Sales Analytics</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-gray-900">🎯 Desafio:</strong> Dar à diretoria visão consolidada 
                  e financeira de todo o funil de vendas e ciclo comercial.
                </div>
                <div>
                  <strong className="text-gray-900">💡 Solução:</strong> Dashboard C-Level com KPIs críticos 
                  de vendas, evolução mensal de faturamento e categorização de motivos de perda.
                </div>
                <div>
                  <strong className="text-gray-900">📊 Impacto:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Monitoramento de 700+ oportunidades</li>
                    <li>R$ 11 milhões em receita esperada mapeada</li>
                    <li>Win rate de 12,22% com ciclo médio de 38 dias</li>
                    <li>Análise de razões de perda para ajustes estratégicos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projeto 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <LineChart className="text-purple-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Inteligência de Cadência e Mapa de Calor
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Data Analysis</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Sales Ops</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Power BI</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-gray-900">🎯 Desafio:</strong> Acabar com o "achismo" sobre melhor 
                  horário para prospecção e quantas tentativas são necessárias.
                </div>
                <div>
                  <strong className="text-gray-900">💡 Solução:</strong> Análise de coorte com mapa de calor 
                  por dia/horário e curva de eficiência de tentativas de ligação.
                </div>
                <div>
                  <strong className="text-gray-900">📊 Impacto:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Identificação de horários com +40% de conversão</li>
                    <li>Otimização da estratégia comercial baseada em dados</li>
                    <li>Redução de tempo perdido em tentativas ineficazes</li>
                    <li>Direcionamento preciso da energia da equipe</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projeto 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Users className="text-orange-600" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Painel de Diagnóstico de Prospecção (Cold Calling)
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">SDR/BDR Analytics</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">CRM</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">Odoo</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-gray-900">🎯 Desafio:</strong> Monitorar eficiência da equipe de 
                  pré-vendas e identificar gargalos no primeiro contato.
                </div>
                <div>
                  <strong className="text-gray-900">💡 Solução:</strong> Dashboard categorizando feedbacks 
                  de ligações, cruzando volume de tentativas com taxa de conversão.
                </div>
                <div>
                  <strong className="text-gray-900">📊 Impacto:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Visibilidade de que maioria cai em "Caixa Postal"</li>
                    <li>Reavaliação de listas de contatos e horários</li>
                    <li>Otimização de cadências de abordagem</li>
                    <li>Melhoria da taxa de conversão de 3,61%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <h3 className="font-bold text-xl mb-4 text-blue-900">BI & Visualização</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Power BI Avançado</li>
                <li>• DAX & Power Query</li>
                <li>• Modelagem Dimensional</li>
                <li>• Gateway & Service</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <h3 className="font-bold text-xl mb-4 text-green-900">Linguagens</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Python (ETL, APIs)</li>
                <li>• SQL Avançado</li>
                <li>• PostgreSQL</li>
                <li>• XML-RPC/JSON-RPC</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <h3 className="font-bold text-xl mb-4 text-purple-900">CRM & Automação</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Odoo (Studio & API)</li>
                <li>• Windows Task Scheduler</li>
                <li>• Pipelines de Dados</li>
                <li>• Git & PowerShell</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
              <h3 className="font-bold text-xl mb-4 text-orange-900">Análise Comercial</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• KPIs de Vendas</li>
                <li>• Pipeline Management</li>
                <li>• Funil de Conversão</li>
                <li>• Sales Analytics</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
              <h3 className="font-bold text-xl mb-4 text-red-900">Banco de Dados</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PostgreSQL Admin</li>
                <li>• Configuração SSL</li>
                <li>• Queries Complexas</li>
                <li>• pgAdmin</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
              <h3 className="font-bold text-xl mb-4 text-indigo-900">Ferramentas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Excel Avançado</li>
                <li>• Git & GitHub</li>
                <li>• VS Code</li>
                <li>• Jupyter Notebook</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Vamos Conversar?</h2>
          <p className="text-xl mb-12 text-blue-100">
            Estou disponível para discutir como dados podem impulsionar seu negócio
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a 
              href="mailto:viniciussouza7102@gmail.com"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-xl backdrop-blur-sm"
            >
              <Mail size={24} />
              <div className="text-left">
                <div className="text-sm text-blue-200">Email</div>
                <div className="font-medium">viniciussouza7102@gmail.com</div>
              </div>
            </a>
            <a 
              href="tel:+5515996784892"
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 transition-colors p-6 rounded-xl backdrop-blur-sm"
            >
              <Phone size={24} />
              <div className="text-left">
                <div className="text-sm text-blue-200">Telefone</div>
                <div className="font-medium">(15) 99678-4892</div>
              </div>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.linkedin.com/in/vinicius-sales-7a0379238/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/viniciussales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border-2 border-white text-white rounded-lg transition-colors font-medium backdrop-blur-sm"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-2 text-blue-200">
            <MapPin size={20} />
            <span>Sorocaba, SP - Disponível para presencial, híbrido ou remoto</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-gray-400 text-center">
        <p>© 2025 Vinicius Sales de Souza. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Construído com Next.js & Tailwind CSS</p>
      </footer>
    </main>
  )
}
