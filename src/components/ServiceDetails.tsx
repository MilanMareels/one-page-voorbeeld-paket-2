import { Carousel, HR } from "flowbite-react";
import NavBarSection from "./NavBar";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";
import FooterSection from "./Footer";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = serviceItems.find((item) => item.id === parseInt(id!))!;

  return (
    <>
      <NavBarSection />
      <div className="flex flex-col">
        <section className="h-56 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000}>
            {service.src.map((src, index) => (
              <img key={index} src={src} alt={`Service image ${index + 1}`} />
            ))}
          </Carousel>
        </section>
        <section className="flex flex-col sm:flex-row w-full mt-4 pl-4 pr-4">
          <div className="w-full sm:w-[60%] border-b-0 sm:border-r-2 border-black pb-4 sm:pb-0">
            <h1 className="text-2xl font-bold">{service.title}</h1>
            <p className="mt-2 mr-4">{service.description}</p>
          </div>
          <HR />
          <div className="w-full sm:w-[40%] sm:ml-6 pt-4 sm:pt-0">
            <h1 className="text-xl font-bold">Price</h1>
            <p className="mt-2">The price for this service is &euro;{service.price}</p>
          </div>
        </section>

        <section className="pl-4 pr-4">
          <HR />
          <p className="w-[50%] flex justify-center items-center m-auto font-style: italic">
            If this service interests you or if you have any questions, feel free to get in touch with us directly from this page. Simply fill in below to request the service or to learn more. We’re
            happy to assist you!
          </p>
        </section>
        <ContactForm />
      </div>
      <FooterSection />
    </>
  );
}
