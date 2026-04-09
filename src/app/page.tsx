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
        { name: "Início", id: "hero" },
        { name: "Serviços", id: "services" },
        { name: "Resultados", id: "results" },
        { name: "Contato", id: "contact" },
      ]}
      brandName="Felisberto Estética"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{ variant: "gradient-bars" }}
      title="Felisberto Estética Automotiva"
      description="Excelência e precisão no cuidado com seu veículo. Devolvemos o brilho e a originalidade com um padrão de acabamento incomparável."
      buttons={[
        { text: "Agende seu atendimento", href: "https://wa.me/5563991226870" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775692966198-nb5h9rac.webp"
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
          title: "Reparos de Precisão",          description: "Eliminação definitiva de amassados e riscos com alinhamento de fábrica.",          phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775693209069-s82ks358.png", imageAlt: "Reparo técnico" },
          phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775693221315-v995a65d.png", imageAlt: "Ferramentas" },
        },
        {
          title: "Pintura de Elite",          description: "Tecnologia de colorimetria para uma pintura sem diferença de tonalidade.",          phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775693323043-47u4jdls.png", imageAlt: "Pintura acabamento" },
          phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775693363006-m4gkbvac.png", imageAlt: "Brilho intenso" },
        },
        {
          title: "Estética Premium",          description: "Revitalização completa que devolve o aspecto de veículo recém-saído da concessionária.",          phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775751836522-clo2htzf.png", imageAlt: "Estética automotiva" },
          phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775751803931-l2ekr1k3.png", imageAlt: "Polimento detalhado" },
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
        { id: "1", brand: "Felisberto", name: "Restauração de Parachoque", price: "", rating: 5, reviewCount: "24", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775752126201-qfwrcrny.webp" },
        { id: "2", brand: "Felisberto", name: "Pintura de Porta (Sem emenda)", price: "", rating: 5, reviewCount: "18", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775752156874-ny8sc2bh.webp" },
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
        { id: "1", name: "Roberto F.", handle: "@roberto", testimonial: "Serviço impecável, Felisberto é um mestre.", imageSrc: "http://img.b2bpic.net/free-photo/handshake-with-smiling-businessman_23-2147708181.jpg" },
      ]}
      title="Excelência aprovada"
      description="Veja o que nossos clientes dizem sobre o padrão de restauração da Felisberto Estética Automotiva."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "A cor fica idêntica?", content: "Sim, utilizamos tecnologia de ponta para garantir originalidade." },
        { id: "4", title: "Como solicitar orçamento?", content: "Clique no botão de WhatsApp e envie fotos do seu veículo." },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3C5ywkHoyR3BEj5CztBo3ErmScV/uploaded-1775752075025-drihji00.webp"
      imageAlt="Ambiente de restauração"
      mediaAnimation="slide-up"
      title="Perguntas frequentes"
      description="Tire suas dúvidas antes de solicitar o seu orçamento!"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "radial-gradient" }}
      tag="Faça seu Orçamento"
      title="Pronto para restaurar seu carro?"
      description="Entre em contato no WhatsApp da Felisberto Estética Automotiva agora."
      buttons={[
        { text: "WhatsApp Fixo", href: "https://wa.me/5563991226870" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        { title: "Institucional", items: [{ label: "Sobre Nós", href: "#" }, { label: "Como Funciona", href: "#" }] },
        { title: "Serviços", items: [{ label: "Funilaria", href: "#" }, { label: "Pintura", href: "#" }] },
        { title: "Contato", items: [{ label: "WhatsApp", href: "https://wa.me/5563991226870" }, { label: "Palmas, TO", href: "#" }] },
      ]}
      bottomLeftText="Felisberto Estética Automotiva © 2025"
      bottomRightText="Todos os direitos reservados"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}