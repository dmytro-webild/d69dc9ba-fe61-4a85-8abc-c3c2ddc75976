"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="medium"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Serviços",
          id: "services",
        },
        {
          name: "Resultados",
          id: "results",
        },
        {
          name: "Contato",
          id: "contact",
        },
      ]}
      brandName="Diamond Studio Car"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars",
      }}
      title="Seu carro restaurado com padrão de excelência"
      description="Funilaria e pintura com acabamento profissional em Palmas. Tratamos cada detalhe como uma obra de arte."
      buttons={[
        {
          text: "Solicitar Orçamento",
          href: "https://wa.me/5563999999999",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg"
      imageAlt="Veículo com acabamento premium espelhado"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Reparos de Precisão",
          description: "Eliminação definitiva de amassados e riscos com alinhamento de fábrica.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
            imageAlt: "Reparo técnico",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg",
            imageAlt: "Ferramentas",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
          imageAlt: "flawless black car paint reflection",
        },
        {
          title: "Pintura de Elite",
          description: "Tecnologia de colorimetria para uma pintura sem diferença de tonalidade.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wrapping-car-job_23-2149385697.jpg",
            imageAlt: "Pintura acabamento",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
            imageAlt: "Brilho intenso",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
          imageAlt: "macro car paint polish reflection",
        },
        {
          title: "Estética Premium",
          description: "Revitalização completa que devolve o aspecto de veículo recém-saído da concessionária.",
          phoneOne: {
            imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg",
            imageAlt: "Estética automotiva",
          },
          phoneTwo: {
            imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wrapping-car-job_23-2149385697.jpg",
            imageAlt: "Polimento detalhado",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg",
          imageAlt: "professional car restoration work precision",
        },
      ]}
      showStepNumbers={true}
      title="Sua confiança, nosso compromisso"
      description="Nossa abordagem combina técnicas avançadas e um rigoroso padrão de qualidade para restaurar o valor do seu veículo."
    />
  </div>

  <div id="results" data-section="results">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          brand: "Diamond",
          name: "Restauração de Parachoque",
          price: "Premium",
          rating: 5,
          reviewCount: "24",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
        },
        {
          id: "2",
          brand: "Diamond",
          name: "Pintura de Porta (Sem emenda)",
          price: "Premium",
          rating: 5,
          reviewCount: "18",
          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg",
        },
        {
          id: "3",
          brand: "Diamond",
          name: "Polimento Técnico Total",
          price: "Premium",
          rating: 5,
          reviewCount: "32",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-wrapping-car-job_23-2149385697.jpg",
        },
        {
          id: "4",
          brand: "Diamond",
          name: "Funilaria de Coluna",
          price: "Premium",
          rating: 5,
          reviewCount: "12",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
        },
        {
          id: "5",
          brand: "Diamond",
          name: "Recuperação de Teto",
          price: "Premium",
          rating: 5,
          reviewCount: "9",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-water-drops-white-surface_181624-59940.jpg",
        },
        {
          id: "6",
          brand: "Diamond",
          name: "Reparo Lateral de Luxo",
          price: "Premium",
          rating: 5,
          reviewCount: "21",
          imageSrc: "http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg",
        },
      ]}
      title="Resultados que impressionam"
      description="Veja o nível de detalhamento e o acabamento que entregamos em cada transformação."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Roberto F.",
          handle: "@roberto",
          testimonial: "O serviço foi impecável. Não consigo nem notar onde estava o amassado. Profissionalismo puro.",
          imageSrc: "http://img.b2bpic.net/free-photo/handshake-with-smiling-businessman_23-2147708181.jpg",
        },
        {
          id: "2",
          name: "Ana Clara",
          handle: "@anaclara",
          testimonial: "A cor ficou exatamente igual ao resto do carro. Serviço sério e honesto.",
          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-car-owner-communicating-about-vehicle-breakdown-auto-repair-shop_637285-7756.jpg",
        },
        {
          id: "3",
          name: "Marcos S.",
          handle: "@marcoss",
          testimonial: "Trataram meu carro como se fosse deles. Qualidade nota 10.",
          imageSrc: "http://img.b2bpic.net/free-photo/young-man-choosing-car-car-showroom_1303-21751.jpg",
        },
        {
          id: "4",
          name: "Luciana M.",
          handle: "@luciana",
          testimonial: "Cansada de oficinas baratas que estragam o carro. Aqui encontrei o nível que eu buscava.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-black-mechanic-taking-notes-while-talking-customer-auto-repair-shop_637285-11587.jpg",
        },
        {
          id: "5",
          name: "Carlos V.",
          handle: "@carlosv",
          testimonial: "Acabamento de fábrica. Recomendo muito para quem tem carro de valor.",
          imageSrc: "http://img.b2bpic.net/free-photo/satisfied-customer-shaking-hands-with-mechanic_1170-1275.jpg",
        },
      ]}
      title="Excelência aprovada"
      description="Veja o que nossos clientes dizem sobre o padrão de restauração da Diamond Studio Car."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "A cor fica idêntica à de fábrica?",
          content: "Sim. Utilizamos tecnologia de ponta em colorimetria e materiais premium para garantir que a tonalidade seja idêntica ao original.",
        },
        {
          id: "2",
          title: "Quanto tempo o carro precisa ficar?",
          content: "Depende da complexidade do serviço. Após analisarmos as fotos, informamos o prazo exato para entrega.",
        },
        {
          id: "3",
          title: "Vocês trabalham com seguros?",
          content: "Sim, emitimos toda a documentação necessária para que você possa solicitar o reembolso ou seguir pelo processo do seu seguro.",
        },
        {
          id: "4",
          title: "Como solicito o orçamento?",
          content: "Muito simples. Clique no botão de WhatsApp, envie as fotos do dano e nossos consultores farão uma análise preliminar para você.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/set-mechanical-tools-professional-car-mechanic-using-different-tools-working_146671-19065.jpg"
      imageAlt="Ambiente de restauração"
      mediaAnimation="slide-up"
      title="Perguntas frequentes"
      description="Tire suas dúvidas antes de solicitar o seu orçamento."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Orçamento Ágil"
      title="Pronto para restaurar seu carro?"
      description="Entre em contato agora e receba um atendimento especializado para o seu veículo."
      buttons={[
        {
          text: "WhatsApp Fixo",
          href: "https://wa.me/5563999999999",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Institucional",
          items: [
            {
              label: "Sobre Nós",
              href: "#",
            },
            {
              label: "Como Funciona",
              href: "#",
            },
          ],
        },
        {
          title: "Serviços",
          items: [
            {
              label: "Funilaria",
              href: "#",
            },
            {
              label: "Pintura",
              href: "#",
            },
            {
              label: "Estética",
              href: "#",
            },
          ],
        },
        {
          title: "Contato",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/5563999999999",
            },
            {
              label: "Palmas, TO",
              href: "#",
            },
          ],
        },
      ]}
      bottomLeftText="Diamond Studio Car © 2024"
      bottomRightText="Todos os direitos reservados"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
