'use client';

import { useEffect, useState } from 'react';
import { 
  Layers, 
  Ear, 
  Target, 
  FileCheck2, 
  Check, 
  UsersRound, 
  ShieldCheck, 
  BriefcaseBusiness,
  HeartPulse,
  Brain,
  MessageSquareWarning,
  Settings2,
  Plus,
  Map,
  ClipboardList,
  FileBarChart,
  BookOpenCheck
} from 'lucide-react';

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const faqs = [
    {
      q: "PsicoSafe substitui consultoria de NR-1?",
      a: "Não exatamente. Consultoria entrega laudo e recomendação. PsicoSafe é o sistema vivo que executa o que o laudo recomenda — mapeamento contínuo, ouvidoria, atestados, plano de ação. Consultoria + PsicoSafe = combo ideal. Se precisa escolher um, a maioria dos nossos clientes encontra mais valor recorrente na plataforma."
    },
    {
      q: "Como funciona o anonimato da ouvidoria e dos questionários?",
      a: "Ouvidoria tem toggle de anonimato por relato — o colaborador escolhe a cada envio. Quando anônimo, nenhum dado pessoal é registrado em nenhum momento, nem mesmo administradores rastreiam quem enviou. Em questionários psicossociais, o CPF serve apenas para garantir resposta única — depois disso a resposta é dissociada da identidade no banco. Empresa enxerga apenas agregados por setor."
    },
    {
      q: "E a LGPD? Como vocês tratam os dados?",
      a: "Tratamos cada dado com finalidade explícita e mínima. Dados pessoais e respostas individuais ficam segregados; dados agregados são o que a empresa vê. Arquitetura preparada para auditoria de DPO, com trilha completa de acessos. Documentação técnica disponível sob NDA."
    },
    {
      q: "Posso integrar com meu sistema de RH atual?",
      a: "Sim. No plano Pro, você importa colaboradores via CSV/XLSX e atualiza periodicamente. No plano Enterprise, oferecemos integração nativa com Senior, TOTVS, Sólides e outros via API."
    },
    {
      q: "Qual o ROI esperado?",
      a: "O ROI mais defensável vem da prevenção: um afastamento longo custa 6 meses de salário + INSS + substituição. Uma autuação da NR-1 vai de R$ 4k a R$ 50k por irregularidade. Empresa típica de 200 colaboradores tem 2–3 afastamentos longos/ano. Prevenir um único incidente já paga dois anos de PsicoSafe."
    },
    {
      q: "Quanto tempo leva o onboarding?",
      a: "No plano Pro, 4 horas de onboarding guiado por nossa equipe + cadastro inicial (importação CSV reduz drasticamente). A maioria dos clientes dispara o primeiro questionário em até 7 dias após o contrato."
    },
    {
      q: "Existe garantia? E se não funcionar?",
      a: "Sim — 30 dias de garantia incondicional. Se sua empresa não conseguir disparar o primeiro questionário psicossocial nesse período, devolvemos integralmente o valor pago. Sem perguntas."
    },
    {
      q: "Como é o suporte no dia a dia?",
      a: "Plano Pro tem chat humano com resposta em até 4h úteis. Plano Enterprise tem SLA contratual de 1h e CSM dedicado. Toda comunicação é em português, com gente que conhece NR-1 e RH brasileiro — não chatbot."
    }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="header reveal">
        <div className="container header-inner">
          <a href="#" className="logo">
            <span className="logo-text">PsicoSafe</span>
          </a>
          <nav className="nav">
            <a href="#como-funciona">Como funciona</a>
            <a href="#produto">Produto</a>
            <a href="#para-quem">Para quem é</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a href="#cta" className="btn btn-primary btn-sm">Agendar demo</a>
        </div>
      </header>

      {/* HERO PRINCIPAL */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <p className="overline hero-eyebrow">Conformidade NR-1 · Riscos psicossociais</p>
            <h1 className="hero-headline">A NR-1 não é uma planilha. É <em className="editorial">gente</em>.</h1>
            <p className="hero-sub">A PSICOSAFE reúne, em uma única plataforma, todas as ferramentas necessárias para a gestão dos riscos psicossociais no ambiente de trabalho e o fortalecimento da Saúde e Segurança do Trabalho (SST).</p>
            <div className="hero-actions">
              <a href="#cta" className="btn btn-primary btn-lg">Agendar demo</a>
              <a href="#como-funciona" className="btn btn-ghost btn-lg">Ver como funciona →</a>
            </div>
          </div>
          <div className="hero-image reveal delay-200">
            <img src="/hero-principal.png" alt="Visualização editorial do conceito de risco psicossocial" />
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="trusted">
        <div className="container trusted-inner reveal">
          <p className="overline trusted-label">Em conversa</p>
          <p className="trusted-tagline">Em conversa com mais de 30 empresas brasileiras de 200 a 1.000 colaboradores que estão se adequando à NR-1 atualizada.</p>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how-it-works" id="como-funciona">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline section-eyebrow">Como funciona</p>
            <h2 className="section-title">Quatro fases que <em className="editorial">cabem</em> no seu dia.</h2>
            <p className="section-sub">PsicoSafe organiza a NR-1 em uma jornada simples: do mapeamento da estrutura ao plano de ação rastreável.</p>
          </div>
          <div className="phases-grid">
            <div className="phase reveal">
              <p className="phase-number">01 · ENTENDA</p>
              <div className="phase-icon"><Layers /></div>
              <h3 className="phase-title">Mapeie</h3>
              <p className="phase-desc">Cadastre setores, colaboradores e indicadores de saúde ocupacional. Tenha uma fotografia honesta de quem está exposto e a quê.</p>
            </div>
            <div className="phase reveal delay-100">
              <p className="phase-number">02 · ESCUTE</p>
              <div className="phase-icon"><Ear /></div>
              <h3 className="phase-title">Ouça</h3>
              <p className="phase-desc">Abra canais para o que ainda não tem voz. Ouvidoria anônima e questionários psicossociais validados, sem a empresa acessar dados individuais.</p>
            </div>
            <div className="phase reveal delay-200">
              <p className="phase-number">03 · INTERVENHA</p>
              <div className="phase-icon"><Target /></div>
              <h3 className="phase-title">Aja</h3>
              <p className="phase-desc">Transforme dado em plano. Cada risco identificado vira ação rastreável, com responsável, prazo e evidência de execução.</p>
            </div>
            <div className="phase reveal delay-300">
              <p className="phase-number">04 · DOCUMENTE</p>
              <div className="phase-icon"><FileCheck2 /></div>
              <h3 className="phase-title">Prove</h3>
              <p className="phase-desc">Relatórios prontos para fiscalização do MPT. Controle de atestados e afastamentos. Trilha de auditoria completa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HERO SECUNDÁRIO */}
      <section className="hero-secondary" id="produto">
        <div className="container hero-secondary-grid">
          <div className="hero-secondary-image reveal">
            <img src="/logo.png" alt="Dashboard do PsicoSafe" />
          </div>
          <div className="reveal delay-200">
            <p className="overline hero-eyebrow">A plataforma</p>
            <h2 className="hero-secondary-headline">Tudo o que você precisa pra cumprir a NR-1 — em <em className="editorial">um lugar</em>.</h2>
            <p className="hero-secondary-sub">Cadastra colaboradores, dispara questionários, recebe denúncias, controla atestados e gera relatórios de risco. Sem planilhas. Sem consultoria.</p>
            <ul className="feature-list">
              <li><span className="feature-check"><Check /></span>Mapeamento de risco por setor, com heatmap visual</li>
              <li><span className="feature-check"><Check /></span>Ouvidoria anônima com trilha de auditoria</li>
              <li><span className="feature-check"><Check /></span>Questionários psicossociais validados (COPSOQ, JCQ)</li>
              <li><span className="feature-check"><Check /></span>Relatórios prontos pra fiscalização do MPT</li>
              <li><span className="feature-check"><Check /></span>Encaminhamento INSS automático em atestados &gt;15 dias</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="who" id="para-quem">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline section-eyebrow">Para quem é</p>
            <h2 className="section-title">Pensado para quem leva NR-1 <em className="editorial">a sério</em>.</h2>
          </div>
          <div className="personas-grid">
            <div className="persona reveal">
              <div className="persona-icon"><UsersRound /></div>
              <p className="persona-role">RH · DHO · People</p>
              <h3 className="persona-title">Diretor(a) de RH</h3>
              <p className="persona-desc">Você que precisa cumprir a NR-1 e cuidar das pessoas sem afogar em planilhas. Quer entender o que está acontecendo nos setores antes do problema chegar à diretoria.</p>
            </div>
            <div className="persona reveal delay-100">
              <div className="persona-icon"><ShieldCheck /></div>
              <p className="persona-role">SESMT · SST</p>
              <h3 className="persona-title">Gestor(a) de SESMT</h3>
              <p className="persona-desc">Você que precisa entregar relatórios rastreáveis para auditoria, MPT e CIPA. Trabalha com riscos ocupacionais e agora também com psicossociais.</p>
            </div>
            <div className="persona reveal delay-200">
              <div className="persona-icon"><BriefcaseBusiness /></div>
              <p className="persona-role">C-LEVEL · DIRETORIA</p>
              <h3 className="persona-title">Diretor(a) executivo(a)</h3>
              <p className="persona-desc">Você que precisa proteger a empresa de risco trabalhista, tomar decisões baseadas em dado e mostrar à diretoria que saúde mental virou agenda regulatória.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="areas">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline section-eyebrow">Funcionalidades da Plataforma</p>
            <h2 className="section-title">Da planilha caótica ao <em className="editorial">controle</em> total.</h2>
            <p className="section-sub">Tudo que sua empresa precisa para gerir saúde, segurança e prevenir riscos, com uma interface que convida à ação.</p>
          </div>
          <div className="feature-grid">
            <div className="feat-card feat-card-bg1 reveal">
              <div className="feat-icon"><Map /></div>
              <h3 className="feat-title">Mapeamento de Riscos</h3>
              <p className="feat-desc">Identifique e visualize os riscos psicossociais por setor por meio de heatmaps e indicadores inteligentes.</p>
            </div>
            <div className="feat-card feat-card-bg2 reveal delay-100">
              <div className="feat-icon"><MessageSquareWarning /></div>
              <h3 className="feat-title">Ouvidoria Anônima</h3>
              <p className="feat-desc">Receba relatos com segurança, confidencialidade e rastreabilidade para fortalecer a cultura organizacional.</p>
            </div>
            <div className="feat-card feat-card-bg3 reveal delay-200">
              <div className="feat-icon"><ClipboardList /></div>
              <h3 className="feat-title">Questionários</h3>
              <p className="feat-desc">Aplique questionários validados para identificar fatores de risco psicossocial e subsidiar decisões preventivas.</p>
            </div>
            <div className="feat-card feat-card-bg4 reveal">
              <div className="feat-icon"><HeartPulse /></div>
              <h3 className="feat-title">Gestão de Atestados</h3>
              <p className="feat-desc">Controle afastamentos, acompanhe indicadores e receba alertas para casos que demandam atenção.</p>
            </div>
            <div className="feat-card feat-card-bg5 reveal delay-100">
              <div className="feat-icon"><FileBarChart /></div>
              <h3 className="feat-title">Relatórios Gerenciais</h3>
              <p className="feat-desc">Gere relatórios técnicos, dashboards e indicadores para apoiar auditorias, fiscalizações e a gestão da SST.</p>
            </div>
            <div className="feat-card feat-card-bg6 reveal delay-200">
              <div className="feat-icon"><Target /></div>
              <h3 className="feat-title">Plano de Ação</h3>
              <p className="feat-desc">Registre, acompanhe e monitore as ações corretivas e preventivas, com responsáveis e prazos definidos.</p>
            </div>
          </div>
          
          <div className="imgsst-banner reveal">
            <div className="imgsst-icon"><BookOpenCheck /></div>
            <div className="imgsst-content">
              <h2>Índice de Maturidade de Governança <em className="editorial">(IMGSST)</em></h2>
              <p>Avalie o nível de conformidade da empresa com a NR-01. Integramos todos os controles de documentos da empresa para que você possa identificar rapidamente as oportunidades de melhoria e fortalecer sua gestão de SST.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVO */}
      <section className="comparison">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline section-eyebrow">Por que não consultoria?</p>
            <h2 className="section-title">Consultoria entrega <em className="editorial">laudo</em>. Plataforma entrega <em className="editorial">resultado</em>.</h2>
            <p className="section-sub">Consultoria + PsicoSafe é o combo ideal. Mas se você precisa escolher um, veja a diferença.</p>
          </div>
          <div className="comparison-table reveal">
            <div className="comparison-row head">
              <div className="comparison-cell head"></div>
              <div className="comparison-cell head">Consultoria de NR-1</div>
              <div className="comparison-cell head" style={{background: 'var(--primary)', color: 'var(--on-primary)', borderRadius: 0}}>PsicoSafe</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell label">Custo anual estimado</div>
              <div className="comparison-cell text-muted">R$ 30k–80k (one-shot)</div>
              <div className="comparison-cell psicosafe"><Check className="text-success" /> A partir de R$ 18k/ano</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell label">Tempo até primeiro resultado</div>
              <div className="comparison-cell text-muted">3–6 meses</div>
              <div className="comparison-cell psicosafe"><Check className="text-success" /> 2 semanas</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell label">Mapeamento de risco contínuo</div>
              <div className="comparison-cell text-muted">Pontual (1x/ano)</div>
              <div className="comparison-cell psicosafe"><Check className="text-success" /> Contínuo, em tempo real</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell label">Ouvidoria anônima ativa</div>
              <div className="comparison-cell text-muted">— (não inclui)</div>
              <div className="comparison-cell psicosafe"><Check className="text-success" /> Incluso</div>
            </div>
            <div className="comparison-row">
              <div className="comparison-cell label">Relatórios para MPT</div>
              <div className="comparison-cell text-muted">Geração manual</div>
              <div className="comparison-cell psicosafe"><Check className="text-success" /> Exportação automática</div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="container manifesto-inner reveal">
          <p className="overline manifesto-overline">Nosso Compromisso</p>
          <p className="manifesto-text" style={{ fontSize: '32px', marginBottom: '24px' }}>
            O sofrimento no trabalho não surge de um dia para o outro — ele se acumula em <em className="editorial">silêncio</em>.
          </p>
          <p className="manifesto-text" style={{ fontSize: '24px', opacity: 0.9, marginBottom: '48px', fontWeight: 400 }}>
            Promover a saúde mental no trabalho não é apenas um benefício: é um compromisso com as pessoas, uma responsabilidade da empresa e um requisito para uma gestão preventiva.
          </p>
          <h2 style={{ fontSize: '48px', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--inverse-primary)' }}>
            PSICOSAFE
          </h2>
          <p style={{ fontSize: '22px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', opacity: 0.9 }}>
            Cuidar da saúde é prevenir riscos.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header reveal">
            <p className="overline section-eyebrow">Dúvidas frequentes</p>
            <h2 className="section-title">Perguntas que <em className="editorial">sempre</em> aparecem.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item reveal delay-${(index % 3) * 100} ${openFaqIndex === index ? 'open' : ''}`} key={index}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <Plus className="faq-icon" />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner" dangerouslySetInnerHTML={{__html: faq.a}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FECHAMENTO */}
      <section className="cta" id="cta">
        <div className="container cta-inner reveal">
          <h2 className="cta-headline">Coloque a NR-1 sob controle. Em <em className="editorial">semanas</em>, não meses.</h2>
          <p className="cta-sub">Agende uma demo de 30 minutos. A gente mostra o produto e responde tudo.</p>
          <a href="#" className="btn btn-primary btn-lg">Agendar demo</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer reveal">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <img src="/logo.png" alt="PsicoSafe" />
              <p className="footer-tag">Gestão de riscos psicossociais que respeita a NR-1 — e respeita as pessoas.</p>
            </div>
            <div className="footer-col">
              <h4>Produto</h4>
              <ul>
                <li><a href="#produto">Funcionalidades</a></li>
                <li><a href="#para-quem">Para quem é</a></li>
                <li><a href="#faq">Dúvidas</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contato</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Termos de uso</a></li>
                <li><a href="#">Política de privacidade</a></li>
                <li><a href="#">LGPD</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 PsicoSafe. Todos os direitos reservados.</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </footer>
    </>
  );
}
