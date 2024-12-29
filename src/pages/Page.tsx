import AboutUsSection from "../components/AboutUsSection";
import ContactButton from "../components/ContactButton";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/Footer";
import Header from "../components/Header";
import NavBarSection from "../components/NavBar";
import ScrollToTopButton from "../components/ScrollToTopButton";
import ServiceSection from "../components/ServiceSection";

export default function Page() {
  return (
    <main>
      <NavBarSection />
      <Header />
      <ContactButton />
      <ServiceSection />
      <AboutUsSection />
      <section className="bg-gray-100">
        <ContactForm />
      </section>
      <ScrollToTopButton />
      <FooterSection />
    </main>
  );
}
