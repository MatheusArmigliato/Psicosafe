'use client';

import { 
  CheckCircle2, 
  Leaf,
  Brain,
  MessageSquareHeart,
  ClipboardList,
  ShieldCheck,
  TrendingUp,
  HeartPulse,
  Layers,
  Ear,
  Target,
  FileCheck2,
  UsersRound,
  BriefcaseBusiness,
  Settings2,
  Check
} from 'lucide-react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.colored-card, .process-step, .persona-card, .faq-item, .feature-text, .feature-image, .about-text, .about-image, .comparativo h2, .comparativo table'
    );
    
    elements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "Qual a diferença entre uma consultoria e a PsicoSafe?",
      a: "A consultoria entrega um laudo pontual e recomendações. A PsicoSafe é uma plataforma inteligente com metodologia própria — baseada na CLT, na NR-01 e na ISO 45003 — que executa todo o processo: aplica o questionário, consolida os dados, classifica os riscos, gera indicadores, identifica os fatores de risco e elabora automaticamente o laudo técnico e o plano de ação. Ainda faz o monitoramento contínuo com indicadores, controle de evidências, ouvidoria anônima e relatórios gerenciais. A atuação dos profissionais de SST segue essencial na análise técnica e na validação das informações."
    },
    {
      q: "Como funciona o anonimato da ouvidoria e dos questionários?",
      a: "A ouvidoria tem opção de anonimato por relato — o colaborador escolhe a cada envio. Quando anônimo, nenhum dado pessoal é registrado, nem mesmo administradores rastreiam quem enviou. A empresa enxerga apenas agregados por setor."
    },
    {
      q: "E a LGPD? Como vocês tratam os dados?",
      a: "Tratamos cada dado com finalidade explícita e mínima. Dados pessoais e respostas individuais ficam segregados; dados agregados são o que a empresa vê. Arquitetura preparada para auditoria de DPO."
    },
    {
      q: "Posso integrar com meu sistema de RH atual?",
      a: "Sim. No plano Pro, você importa colaboradores via CSV/XLSX. No plano Enterprise, oferecemos integração nativa com Senior, TOTVS, Sólides e outros via API."
    },
    {
      q: "Qual o ROI esperado?",
      a: "O ROI mais defensável vem da prevenção: um afastamento longo custa 6 meses de salário + INSS + substituição. Prevenir um único incidente já paga dois anos de PsicoSafe."
    }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <img src="/logo-principal.png" alt="PsicoSafe" height={32} />
            PsicoSafe
          </a>
          <nav className="nav-links">
            <a href="#como-funciona">Como funciona</a>
            <a href="#solucoes">Produto</a>
            <a href="#diferenciais">Diferenciais</a>
            <a href="#para-quem">Para quem é</a>
            <a href="#faq">Dúvidas</a>
            <a href="#agendar" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
              Agendar Demo
            </a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-shape"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <span className="overline">Conformidade NR-1 · Riscos psicossociais</span>
            <h1>
              A NR-1 não é uma planilha. É <span>gente</span>.
            </h1>
            <p>
              A PSICOSAFE reúne, em uma única plataforma, todas as ferramentas necessárias para a gestão dos riscos psicossociais no ambiente de trabalho e o fortalecimento da Saúde e Segurança do Trabalho (SST).
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="#agendar" className="btn btn-primary">
                Agendar demo
              </a>
              <a href="#como-funciona" className="btn btn-outline">
                Ver como funciona
              </a>
            </div>
          </div>
          
          <div className="hero-image-wrapper">
            <img src="/hero-cutout.png" alt="Profissional de RH" />
            
            <div className="floating-badge badge-1" style={{ bottom: '120px', left: '-10px' }}>
              <CheckCircle2 size={18} />
              Avaliação de Governança
            </div>
            <div className="floating-badge badge-2" style={{ top: '100px', right: '0px' }}>
              <Leaf size={18} />
              Saúde Mental em foco
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS COLORIDOS */}
      <section className="features-colored">
        <div className="container">
          <div className="colored-grid">
            <div className="colored-card c-forest">
              <Brain size={32} />
              <div>
                <h3>Mapeamento</h3>
                <p>Identifique riscos por setor com heatmaps.</p>
              </div>
            </div>
            <div className="colored-card c-sage">
              <ShieldCheck size={32} />
              <div>
                <h3>Governança</h3>
                <p>Avalie o nível de conformidade com a NR-01.</p>
              </div>
            </div>
            <div className="colored-card c-burgundy">
              <MessageSquareHeart size={32} />
              <div>
                <h3>Ouvidoria</h3>
                <p>Relatos confidenciais e rastreabilidade total.</p>
              </div>
            </div>
            <div className="colored-card c-soft">
              <ClipboardList size={32} />
              <div>
                <h3>Questionários</h3>
                <p>Instrumentos validados para apoio à decisão.</p>
              </div>
            </div>
            <div className="colored-card c-parchment">
              <HeartPulse size={32} />
              <div>
                <h3>Atestados</h3>
                <p>Controle de afastamentos e alertas imediatos.</p>
              </div>
            </div>
            <div className="colored-card c-light">
              <TrendingUp size={32} />
              <div>
                <h3>Relatórios</h3>
                <p>Gere relatórios para auditorias e MPT.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <div className="container">
          <p>Em conversa com mais de 30 empresas brasileiras de 200 a 1.000 colaboradores que estão se adequando à NR-1 atualizada.</p>
        </div>
      </section>

      {/* ABOUT / NOSSA ABORDAGEM */}
      <section className="about section-pad" id="sobre">
        <div className="container about-grid">
          <div className="about-image">
            <img src="/about-prof.jpg" alt="Profissional PsicoSafe" />
          </div>
          <div className="about-text">
            <span className="overline">Nossa Abordagem</span>
            <h2>O sofrimento no trabalho não surge de um dia para o outro.</h2>
            <p>
              Ele se acumula em silêncio. Acreditamos que promover a saúde mental não é apenas um benefício ou um "nice to have": é um compromisso real com as pessoas e uma responsabilidade inegociável da empresa.
            </p>
            <p>
              Com a PsicoSafe, você não entrega apenas um laudo para a gaveta. Você estabelece uma cultura de escuta, prevenção e rastreabilidade, avaliando a Maturidade da Governança (IMGSST) e garantindo conformidade viva com a NR-01.
            </p>
            <div className="signature">
              PsicoSafe
            </div>
            <p style={{ fontSize: '14px', marginTop: '8px', color: 'rgba(255,255,255,0.8)', fontFamily: 'var(--font-sans)' }}>Plataforma SaaS de Gestão de Risco Psicossocial</p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA (4 FASES) */}
      <section className="how-it-works section-pad" id="como-funciona">
        <div className="container">
          <div className="text-center">
            <span className="overline">Como funciona</span>
            <h2>Quatro fases que <em>cabem</em> no seu dia.</h2>
            <p className="text-sans" style={{ color: 'var(--on-surface-muted)', maxWidth: '600px', margin: '16px auto 0' }}>
              PsicoSafe organiza a NR-1 em uma jornada simples: do mapeamento da estrutura ao plano de ação rastreável.
            </p>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="num">01 · ENTENDA</span>
              <h3>Mapeie</h3>
              <p>Cadastre setores, colaboradores e indicadores de saúde ocupacional. Tenha uma fotografia honesta de quem está exposto e a quê.</p>
            </div>
            <div className="process-step">
              <span className="num">02 · ESCUTE</span>
              <h3>Ouça</h3>
              <p>Abra canais para o que ainda não tem voz. Ouvidoria anônima e questionários psicossociais validados.</p>
            </div>
            <div className="process-step">
              <span className="num">03 · INTERVENHA</span>
              <h3>Aja</h3>
              <p>Transforme dado em plano. Cada risco identificado vira ação rastreável, com responsável e evidência de execução.</p>
            </div>
            <div className="process-step">
              <span className="num">04 · DOCUMENTE</span>
              <h3>Prove</h3>
              <p>Relatórios prontos para fiscalização do MPT. Controle de atestados e afastamentos. Trilha de auditoria completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES VISUAIS */}
      <section className="features section-pad" id="solucoes">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '80px' }}>
            <span className="overline">Funcionalidades da Plataforma</span>
            <h2>Da planilha caótica ao <em>controle</em> total.</h2>
          </div>

          <div className="feature-showcase">
            <div className="feature-img">
              <img src="/dash-riscos.jpg" alt="Dashboard de Mapeamento de Riscos" />
            </div>
            <div className="feature-text">
              <h3>Inteligência e Prevenção</h3>
              <p>Identifique os riscos psicossociais antes que eles se transformem em afastamentos e processos. Nós cuidamos dos dados para você cuidar das pessoas.</p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon"><Brain /></div>
                  <div>
                    <h4>Mapeamento de Riscos</h4>
                    <p>Identifique e visualize os riscos por setor por meio de heatmaps e indicadores inteligentes.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><ClipboardList /></div>
                  <div>
                    <h4>Questionários Psicossociais</h4>
                    <p>Aplique questionários validados para identificar fatores de risco psicossocial e subsidiar decisões.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><MessageSquareHeart /></div>
                  <div>
                    <h4>Ouvidoria Anônima</h4>
                    <p>Receba relatos com segurança, confidencialidade e rastreabilidade para fortalecer a cultura.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-showcase">
            <div className="feature-img">
              <img src="/dash-relatorios.jpg" alt="Dashboard de Relatórios e Planos de Ação" />
            </div>
            <div className="feature-text">
              <h3>Ação e Governança</h3>
              <p>Avalie a Maturidade da Governança (IMGSST), verificando a conformidade com a NR-01. Integre e tenha todos os controles da empresa nas suas mãos.</p>
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon"><ShieldCheck /></div>
                  <div>
                    <h4>Avaliação de Governança (IMGSST)</h4>
                    <p>Avalie o nível de conformidade da empresa com a NR-01 e integre todos os controles de documentos.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><Target /></div>
                  <div>
                    <h4>Plano de Ação</h4>
                    <p>Registre, acompanhe e monitore as ações corretivas e preventivas, com responsáveis e prazos definidos.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon"><TrendingUp /></div>
                  <div>
                    <h4>Relatórios Gerenciais</h4>
                    <p>Gere relatórios técnicos, dashboards e indicadores para apoiar auditorias e fiscalizações da SST.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="personas section-pad" id="para-quem">
        <div className="container">
          <div className="text-center">
            <span className="overline">Para quem é</span>
            <h2>Pensado para quem leva NR-1 <em>a sério</em>.</h2>
          </div>
          <div className="personas-grid">
            <div className="persona-card">
              <span className="persona-role">RH · DHO · People</span>
              <h4>Diretor(a) de RH</h4>
              <p>Você que precisa cumprir a NR-1 e cuidar das pessoas sem afogar em planilhas. Quer entender o que está acontecendo nos setores antes do problema chegar à diretoria.</p>
            </div>
            <div className="persona-card">
              <span className="persona-role">SESMT · SST</span>
              <h4>Gestor(a) de SESMT</h4>
              <p>Você que precisa entregar relatórios rastreáveis para auditoria, MPT e CIPA. Trabalha com riscos ocupacionais e agora também com psicossociais.</p>
            </div>
            <div className="persona-card">
              <span className="persona-role">C-Level · Diretoria</span>
              <h4>Diretor(a) Executivo(a)</h4>
              <p>Você que precisa proteger a empresa de risco trabalhista, tomar decisões baseadas em dado e mostrar à diretoria que saúde mental virou agenda regulatória.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS / POR QUE ESCOLHER */}
      <section className="diferenciais section-pad" id="diferenciais">
        <div className="container">
          <div className="text-center">
            <span className="overline">O diferencial da plataforma</span>
            <h2>Por que escolher a <em>PsicoSafe</em>?</h2>
          </div>
          <div className="dif-grid">
            <div className="dif-card">
              <div className="dif-icon"><Layers size={28} /></div>
              <h4>Todo processo digital</h4>
              <p>Do levantamento ao laudo, tudo em uma única plataforma — sem planilhas soltas.</p>
            </div>
            <div className="dif-card">
              <div className="dif-icon"><FileCheck2 size={28} /></div>
              <h4>Metodologia própria</h4>
              <p>Baseada na CLT, na NR-01 e na ISO 45003, com referências técnicas reconhecidas.</p>
            </div>
            <div className="dif-card">
              <div className="dif-icon"><Settings2 size={28} /></div>
              <h4>Controles rápidos e eficientes</h4>
              <p>Indicadores em tempo real e rastreabilidade para apoiar a conformidade.</p>
            </div>
            <div className="dif-card">
              <div className="dif-icon"><ClipboardList size={28} /></div>
              <h4>Questionário via link</h4>
              <p>Aplicado por link e totalmente anônimo, para respostas honestas e maior adesão.</p>
            </div>
            <div className="dif-card">
              <div className="dif-icon"><Ear size={28} /></div>
              <h4>Canal de ouvidoria anônimo</h4>
              <p>Relatos confidenciais que fortalecem a escuta e a cultura de segurança.</p>
            </div>
            <div className="dif-card">
              <div className="dif-icon"><Target size={28} /></div>
              <h4>Plano de ação</h4>
              <p>Com total controle: acompanhamento das ações, evidências e prazos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="comparativo section-pad">
        <div className="container">
          <div className="text-center">
            <span className="overline">Por que não consultoria?</span>
            <h2>Consultoria entrega laudo. <br/>A PsicoSafe entrega <em>resultado</em>.</h2>
          </div>
          <table className="comp-table">
            <thead>
              <tr>
                <th></th>
                <th>Consultoria de NR-1</th>
                <th className="highlight">PsicoSafe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custo anual estimado</td>
                <td>R$ 30k–80k (one-shot)</td>
                <td className="highlight"><Check size={18} style={{marginRight:'8px', verticalAlign:'middle'}}/> A partir de R$ 18k/ano</td>
              </tr>
              <tr>
                <td>Tempo até 1º resultado</td>
                <td>3–6 meses</td>
                <td className="highlight"><Check size={18} style={{marginRight:'8px', verticalAlign:'middle'}}/> 2 semanas</td>
              </tr>
              <tr>
                <td>Mapeamento contínuo</td>
                <td>Pontual (1x/ano)</td>
                <td className="highlight"><Check size={18} style={{marginRight:'8px', verticalAlign:'middle'}}/> Em tempo real</td>
              </tr>
              <tr>
                <td>Ouvidoria anônima</td>
                <td>Não inclui</td>
                <td className="highlight"><Check size={18} style={{marginRight:'8px', verticalAlign:'middle'}}/> Incluso</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq section-pad" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="overline">Dúvidas frequentes</span>
            <h2>Perguntas que <em>sempre</em> aparecem.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question">{faq.q}</div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFESTO / CTA BANNER */}
      <section className="cta-banner" id="contato">
        <div className="container">
          <span className="overline" style={{ marginBottom: '24px' }}>Nosso Compromisso</span>
          <p style={{ fontSize: '28px', color: 'var(--on-surface)', fontFamily: 'var(--font-serif)', maxWidth: '900px' }}>
            "O sofrimento no trabalho não surge de um dia para o outro — ele se acumula em silêncio. Promover a saúde mental não é apenas um benefício: é um compromisso com as pessoas."
          </p>
          <img className="compromisso-logo" src="/logo-lockup.png" alt="PsicoSafe — Consultoria de Saúde e Segurança do Trabalho" />
          <div style={{ marginTop: '48px' }}>
            <a href="#agendar" className="btn btn-primary">
              Agendar minha demonstração
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <a href="#">Início</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#solucoes">Soluções</a>
            <a href="#faq">Dúvidas</a>
            <a href="#">Contato</a>
          </div>
          <p style={{ opacity: 0.8, fontSize: '14px' }}>© 2026 PsicoSafe – Saúde e Segurança do Trabalho. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
}
