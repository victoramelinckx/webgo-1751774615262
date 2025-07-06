
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Tu Tienda Online en 24 Horas" subheadline="Digitaliza tu negocio rápidamente con soporte 24/7, sin complicaciones ni pérdida de tiempo." cta1="Comienza Ahora" />
<How step1Title="Contáctanos hoy" step1Desc="Explícanos tu negocio y metas." step2Title="Web en 24 horas" step2Desc="Creamos tu sitio de ventas rápidamente." step3Title="Soporte continuo" step3Desc="Asistencia constante para crecer online." />
<Aboutus headline="WebGo: Digitaliza y crece ventas" subheadline="Transformamos tu negocio offline al online, gestionamos todo por ti." beneficiotitulo1="Fácil Implementación" beneficio1="Sin complicaciones ni estrés." beneficiotitulo2="Aumento de Ventas" beneficio2="Llega a más clientes online." />
<Services heading="Digitaliza Tu Negocio en 24 Horas" description="WebGo crea tu sitio de ventas optimizado sin esfuerzo." services={[{"name":"Desarrollo Rápido","icon":"flash","description":"Web lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu web."},{"name":"SEO Avanzado","icon":"search","description":"Posiciona mejor con WebGo."},{"name":"Diseños Atractivos","icon":"palette","description":"Capta clientes con diseño impactante."},{"name":"Integraciones eCommerce","icon":"cart","description":"Facilita ventas con pago online."},{"name":"Análisis de Datos","icon":"chart-bar","description":"Conoce y mejora tus ventas."}]} />
<BeforeAndAfter subheadline="Transformando ideas en realidades digitales con resultados impresionantes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mi pequeño negocio en Santiago?","respuesta":"WebGo te ayuda a crear una tienda online fácil de usar, para que puedas empezar a vender en Internet rápidamente. Nos encargamos de todo, desde el diseño del sitio web hasta el manejo de pagos, para que puedas concentrarte en lo que mejor sabes hacer: manejar tu negocio."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo lo soluciona WebGo?","respuesta":"¡No te preocupes! En WebGo nos encargamos de gestionar tu sitio web por ti. Desde actualizaciones hasta soporte técnico, nuestro equipo se encarga de todo para que tú no tengas que preocuparte por nada."},{"pregunta":"¿Qué beneficios ofrece WebGo para aumentar mis ventas online?","respuesta":"Con WebGo, no solo creas un sitio web, sino que también optimizamos tu presencia online para que más clientes encuentren tu negocio. Usamos estrategias SEO para que aparezcas en los primeros resultados de Google, aumentando tus oportunidades de venta."},{"pregunta":"¿Es complicado aprender a usar las herramientas de WebGo?","respuesta":"Para nada. WebGo está diseñado para ser fácil de usar, incluso si no tienes experiencia previa. Te ofrecemos tutoriales y soporte constante para responder todas tus preguntas y ayudarte a aprovechar al máximo tu sitio web."},{"pregunta":"¿Cómo WebGo puede ayudarme a generar ventas si solo vendo por recomendación?","respuesta":"WebGo transforma esas recomendaciones en ventas al crear una presencia online donde tus clientes pueden comprar directamente. Al tener un sitio web, tus clientes pueden compartir tu producto fácilmente, ampliando tu alcance y aumentando tus ventas."}]} />
<BookAppointment 
                      heading="Digitaliza Tu Negocio en Santiago" 
                      description="Transforma tus recomendaciones en ventas online con WebGo. Simplificamos la gestión de tu sitio web para que puedas enfocarte en lo que realmente importa."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
