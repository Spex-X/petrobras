"use client";

import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Lock,
  Mail,
  MapPin,
  Shield,
  ShieldCheck,
  Star,
  Target,
  Timer,
  Users,
  XCircle,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

const heroBg = "/hero-bg.jpg";
const refineryImg = "/refinery-1-pcrfFwP2.jpg";
const platformImg = "/platform-offshore-9MnS5Vxx.jpg";
const studentsImg = "/students-studying-b3B3vtWr.jpg";
const professorImg = "/professor-avatar-.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Refinaria Petrobras" className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-hero-gradient" />
    </div>
    <div className="relative z-10 container mx-auto px-4 py-20 text-center">
      <div className="inline-block bg-secondary/20 border border-secondary/40 rounded-full px-6 py-2 mb-6">
        <span className="text-secondary font-semibold text-sm uppercase tracking-widest">🔥 Vagas Limitadas — Turma Fechando</span>
      </div>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight mb-6">
        DOMINE O PADRÃO CESGRANRIO E{" "}
        <span className="text-gold-gradient">ATROPELE A CONCORRÊNCIA</span>
        <br />
        <span className="text-2xl md:text-4xl lg:text-5xl text-foreground/80">EM 21 DIAS</span>
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
        O Plano de Guerra para quem não tem tempo a perder e precisa focar apenas no que realmente cai na prova da Petrobras.
      </p>
      <p className="text-base md:text-lg text-foreground/60 italic max-w-2xl mx-auto mb-8">
        "Se você já estudou, já tentou, já fez prova e não viu seu nome na lista… o problema não é você.{" "}
        <span className="text-primary font-semibold not-italic">É a falta de método.</span>"
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <a
          href="https://pay.cakto.com.br/hvjw998_783768"
          className="bg-gold-gradient text-primary-foreground font-heading text-lg md:text-xl font-bold uppercase px-10 py-5 rounded-lg animate-pulse-glow hover:scale-105 transition-transform"
        >
          Quero Ser Aprovado na Petrobras
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-foreground/80 text-sm md:text-base">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-secondary" /> +200 questões estratégicas
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-secondary" /> Plano diário pronto
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-secondary" /> Foco nas matérias que mais caem
        </div>
      </div>
    </div>
  </section>
);

const MistakeSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 rounded-full px-5 py-2 mb-6">
        <AlertTriangle className="w-5 h-5 text-destructive" />
        <span className="text-destructive font-semibold text-sm uppercase tracking-wider">Atenção</span>
      </div>
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-8">
        O erro que faz 90% dos candidatos{" "}
        <span className="text-gold-gradient">reprovar</span>
      </h2>
      <div className="space-y-4 text-lg text-muted-foreground mb-10">
        <p className="flex items-center justify-center gap-3">
          <XCircle className="w-5 h-5 text-destructive shrink-0" />
          A maioria estuda tudo, mas não estuda <strong className="text-foreground">o que realmente importa.</strong>
        </p>
        <p className="flex items-center justify-center gap-3">
          <XCircle className="w-5 h-5 text-destructive shrink-0" />
          Pulam de conteúdo em conteúdo sem direção.
        </p>
        <p className="flex items-center justify-center gap-3">
          <XCircle className="w-5 h-5 text-destructive shrink-0" />
          Não fazem revisões estratégicas.
        </p>
        <p className="flex items-center justify-center gap-3">
          <XCircle className="w-5 h-5 text-destructive shrink-0" />
          Não treinam sob pressão de tempo real.
        </p>
      </div>
      <div className="bg-card-gradient border border-primary/30 rounded-xl p-8 glow-gold">
        <p className="text-xl md:text-2xl font-heading font-bold text-foreground">
          O <span className="text-gold-gradient">Desafio 21 Dias</span> foi criado para corrigir exatamente isso.
        </p>
      </div>
    </div>
  </section>
);

const benefits = [
  { icon: Target, title: "Método Focado", desc: "Conteúdo direcionado para as matérias mais cobradas no concurso Petrobras." },
  { icon: Zap, title: "Aulas Objetivas", desc: "Videoaulas curtas e diretas ao ponto para otimizar seu tempo de estudo." },
  { icon: BookOpen, title: "Material Completo", desc: "PDFs, resumos, mapas mentais e questões comentadas todos os dias." },
  { icon: Shield, title: "Suporte Diário", desc: "Tire dúvidas com professores especializados durante todo o desafio." },
  { icon: Users, title: "Grupo VIP", desc: "Comunidade de alunos focados para manter sua motivação lá em cima." },
  { icon: Award, title: "Certificado", desc: "Receba um certificado de conclusão ao completar os 21 dias do desafio." },
];

const BenefitsSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-4">
        O que você <span className="text-gold-gradient">vai receber</span>
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
        Tudo que você precisa para acelerar sua preparação
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, i) => (
          <div key={i} className="bg-card-gradient border border-border rounded-xl p-8 hover:border-primary/40 transition-colors group">
            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold uppercase mb-2">{b.title}</h3>
            <p className="text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImageBanner = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-xl overflow-hidden border border-border aspect-video">
          <img
            src={refineryImg}
            alt="Refinaria de petróleo ao pôr do sol"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl overflow-hidden border border-border aspect-video">
          <img
            src={platformImg}
            alt="Plataforma offshore de petróleo"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="rounded-xl overflow-hidden border border-border aspect-video">
          <img
            src={studentsImg}
            alt="Estudantes se preparando para o concurso"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      <p className="text-center text-muted-foreground mt-6 text-sm">Prepare-se para fazer parte de uma das maiores empresas do Brasil</p>
    </div>
  </section>
);

const weeks = [
  {
    week: "Semana 1",
    days: "Dias 1-7",
    title: "Fundamentos",
    topics: ["Língua Portuguesa", "Raciocínio Lógico", "Informática Básica"],
  },
  {
    week: "Semana 2",
    days: "Dias 8-14",
    title: "Conhecimentos Específicos",
    topics: ["Legislação Petrobras", "Conhecimentos do Setor", "Questões Anteriores"],
  },
  {
    week: "Semana 3",
    days: "Dias 15-21",
    title: "Revisão & Simulados",
    topics: ["Revisão Geral", "Simulados Completos", "Técnicas de Prova"],
  },
];

const TimelineSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-4">
        Sua jornada em <span className="text-gold-gradient">21 dias</span>
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">Um plano estruturado semana a semana</p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {weeks.map((w, i) => (
          <div key={i} className="relative">
            <div className="bg-card-gradient border border-border rounded-xl p-8 h-full hover:border-primary/40 transition-colors">
              <div className="bg-gold-gradient text-primary-foreground font-heading font-bold text-sm uppercase px-4 py-1 rounded-full inline-block mb-4">
                {w.days}
              </div>
              <h3 className="font-heading text-2xl font-bold uppercase mb-1">{w.week}</h3>
              <p className="text-primary font-semibold mb-4">{w.title}</p>
              <ul className="space-y-3">
                {w.topics.map((t, j) => (
                  <li key={j} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const AuthoritySection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-16">
        Quem está por trás do <span className="text-gold-gradient">Desafio</span>
      </h2>
      <div className="bg-card-gradient border border-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="shrink-0">
          <div className="w-40 h-40 rounded-2xl overflow-hidden border-2 border-primary/40 glow-gold">
            <img src={professorImg} alt="Professor especialista em concursos" className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl font-bold mb-2">Prof. Ricardo Mendes</h3>
          <p className="text-primary font-semibold mb-4">Especialista em Preparação para Concursos</p>
          <p className="text-foreground font-semibold mb-2">"Eu decifrei o código da Cesgranrio para que você não precise bater a cabeça no edital."</p>
          <p className="text-muted-foreground mb-4">
            Aprovado em 12 concursos federais | Especialista em estratégia Cesgranrio | Método testado com 2.500+ alunos
          </p>
          <p className="text-muted-foreground mb-6">
            Criado por especialista em preparação para concursos com foco em estratégia e alto desempenho. Método testado e validado com
            centenas de alunos aprovados em concursos de grande porte.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "8+", label: "Anos de experiência" },
              { value: "2.500+", label: "Alunos preparados" },
              { value: "87%", label: "Taxa de aprovação" },
              { value: "15+", label: "Concursos cobertos" },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-background/50 rounded-lg p-3">
                <p className="font-heading text-2xl font-bold text-gold-gradient">{stat.value}</p>
                <p className="text-muted-foreground text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const testimonials = [
  {
    name: "Carlos M.",
    city: "Rio de Janeiro, RJ",
    role: "Téc. de Operação — Aprovado 2024",
    text: "O desafio me deu a disciplina que eu precisava. Estudei de forma organizada pela primeira vez e fui aprovado em 4º lugar na minha região!",
    avatar: "CM",
  },
  {
    name: "Ana Paula S.",
    city: "Salvador, BA",
    role: "Téc. de Administração — Aprovada 2024",
    text: "Material excelente e muito bem organizado. Os simulados foram fundamentais para eu me sentir confiante no dia da prova. Passei de primeira!",
    avatar: "AP",
  },
  {
    name: "Rafael O.",
    city: "São Paulo, SP",
    role: "Téc. de Segurança — Aprovado 2023",
    text: "Fiz o desafio e na segunda tentativa passei! O método funciona de verdade, é só seguir o cronograma dia após dia.",
    avatar: "RO",
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-4">
        Resultados <span className="text-gold-gradient">Reais</span>
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-16 max-w-xl mx-auto">
        Veja quem já transformou sua preparação com o Desafio
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card-gradient border border-border rounded-xl p-8 flex flex-col">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 mb-6 italic flex-1">"{t.text}"</p>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-heading font-bold text-primary">{t.avatar}</span>
              </div>
              <div>
                <p className="font-heading font-bold">{t.name}</p>
                <p className="text-secondary text-sm font-semibold">{t.role}</p>
                <p className="text-muted-foreground text-xs flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {t.city}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 999);

    const tick = () => {
      const now = new Date();
      const diff = Math.max(0, endTime.getTime() - now.getTime());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <Timer className="w-5 h-5 text-destructive" />
      <span className="text-destructive font-semibold text-sm uppercase tracking-wider">Oferta expira em:</span>
      <div className="flex gap-1">
        {[
          { v: timeLeft.hours, l: "h" },
          { v: timeLeft.minutes, l: "m" },
          { v: timeLeft.seconds, l: "s" },
        ].map((u, i) => (
          <span key={i} className="bg-destructive/20 text-destructive font-heading font-bold px-2 py-1 rounded text-lg">
            {pad(u.v)}{u.l}
          </span>
        ))}
      </div>
    </div>
  );
};

const PricingSection = () => (
  <section id="preco" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-4">
        INVISTA NO SEU FUTURO POR MENOS QUE O PREÇO DE UM LANCHE
      </h2>
      <p className="text-muted-foreground text-center text-lg mb-6 max-w-3xl mx-auto">
        Se você fosse contratar um mentor ou um curso completo de meses, pagaria facilmente <strong className="text-foreground">R$ 497,00 ou mais.</strong><br/>
        Mas o nosso objetivo com o Desafio 21 Dias é democratizar o acesso ao Método de Elite e provar que você pode, sim, chegar competitivo na Petrobras sem gastar uma fortuna.
      </p>
      <div className="max-w-lg mx-auto">
        <div className="bg-card-gradient border-2 border-primary/50 rounded-2xl p-10 text-center glow-gold relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 bg-gold-gradient py-2">
            <span className="text-primary-foreground font-heading font-bold text-sm uppercase tracking-wider">🔥 OFERTA DE VALIDAÇÃO - LOTE 01</span>
          </div>
          <div className="mt-8 mb-2">
            <p className="text-muted-foreground line-through text-lg">De R$ 197,00</p>
            <div className="flex items-baseline justify-center gap-2 mt-2">
              <span className="text-muted-foreground text-2xl">POR APENAS R$</span>
              <span className="font-heading text-7xl font-bold text-gold-gradient">19</span>
              <span className="text-muted-foreground text-lg">,90</span>
            </div>
            <p className="text-secondary font-semibold mt-2">OU 2X DE R$ 10,35</p>
            <p className="text-primary text-sm font-semibold mt-4">Acesso imediato ao Plano de Guerra + 200 Questões Comentadas.</p>
          </div>
          <ul className="space-y-3 text-left my-8">
            {[
              "21 dias de conteúdo estruturado",
              "+200 questões comentadas",
              "Simulados exclusivos",
              "Grupo VIP de alunos",
              "Suporte com professores",
              "Acesso por 6 meses",
              "Certificado de conclusão",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground/90">
                <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://pay.cakto.com.br/hvjw998_783768"
            className="block w-full bg-gold-gradient text-primary-foreground font-heading text-xl font-bold uppercase py-5 rounded-lg hover:scale-105 transition-transform animate-pulse-glow"
          >
            👉 QUERO GARANTIR MINHA VAGA POR R$ 19,90
          </a>
          <div className="flex items-center justify-center gap-4 mt-6 text-muted-foreground text-sm">
            <span className="flex items-center gap-1">
              <Lock className="w-4 h-4" /> Compra 100% Segura
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" /> Acesso Imediato no E-mail
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" /> 7 Dias de Garantia Incondicional
            </span>
          </div>
          <div className="mt-6 p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
            <p className="text-destructive font-semibold text-sm text-center">
              ⚠️ ATENÇÃO: Este valor de R$ 19,90 é exclusivo para os primeiros 100 alunos desta turma de validação. Assim que o lote virar, o preço retorna para R$ 97,00 sem aviso prévio.
            </p>
          </div>
        </div>
        <div className="mt-6 bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center">
          <p className="text-destructive font-semibold text-sm">⚠️ As vagas são limitadas para manter a qualidade do acompanhamento no grupo.</p>
        </div>
      </div>
    </div>
  </section>
);

const faqs = [
  {
    q: "Para qual cargo é o desafio?",
    a: "O desafio é focado nos cargos de nível médio e técnico do concurso Petrobras, cobrindo as matérias comuns a todos os cargos.",
  },
  { q: "Preciso estudar quantas horas por dia?", a: "Recomendamos de 2 a 3 horas diárias para melhor aproveitamento do conteúdo." },
  { q: "Tenho acesso após os 21 dias?", a: "Sim! Você terá acesso a todo o material por 6 meses após a compra." },
  { q: "Posso fazer no meu ritmo?", a: "O ideal é seguir o cronograma de 21 dias, mas você pode assistir às aulas no seu horário." },
  { q: "Tem garantia?", a: "Sim, oferecemos 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor." },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center uppercase mb-16">
          Perguntas <span className="text-gold-gradient">Frequentes</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card-gradient border border-border rounded-xl overflow-hidden">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className="font-heading text-lg font-semibold">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <div className="px-6 pb-6 text-muted-foreground">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FooterCTA = () => (
  <section className="py-20 bg-background text-center">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="font-heading text-3xl md:text-5xl font-bold uppercase mb-6">Você pode continuar estudando do jeito errado…</h2>
      <p className="text-xl md:text-2xl text-muted-foreground mb-2">
        Ou pode <span className="text-gold-gradient font-bold">começar hoje</span> com um plano estruturado.
      </p>
      <p className="text-muted-foreground text-lg mb-10">A decisão é sua. Mas o concurso não vai esperar.</p>
      <a
        href="https://pay.cakto.com.br/hvjw998_783768"
        className="inline-block bg-gold-gradient text-primary-foreground font-heading text-xl font-bold uppercase px-12 py-5 rounded-lg hover:scale-105 transition-transform animate-pulse-glow"
      >
        Começar Agora e Garantir Minha Vaga
      </a>
      <div className="flex items-center justify-center gap-6 mt-6 text-muted-foreground text-sm">
        <span className="flex items-center gap-1">
          <Lock className="w-4 h-4" /> Compra segura
        </span>
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-4 h-4" /> 7 dias de garantia
        </span>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
      <p>© 2026 Desafio 21 Dias - Concurso Petrobras. Todos os direitos reservados.</p>
      <p className="mt-2">Este produto não possui vínculo com a Petrobras S.A.</p>
    </div>
  </footer>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <MistakeSection />
      <BenefitsSection />
      <ImageBanner />
      <TimelineSection />
      <AuthoritySection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FooterCTA />
      <Footer />
    </div>
  );
}
