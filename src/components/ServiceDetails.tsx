import { Carousel, HR } from "flowbite-react";
import ContactForm from "./ContactForm";
import { useParams } from "react-router-dom";
import { serviceItems } from "../data/serviceItems";

export default function ServiceDetails() {
  const { id } = useParams();
  const service = serviceItems.find((item) => item.id === parseInt(id!))!;

  return (
    <>
      <div className="flex flex-col w-full md:w-[60%] m-auto">
        <HR />
        <div className="w-full pb-4 sm:pb-0 pl-4">
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="mt-2 mr-4">{service.description}</p>
        </div>
        <HR />
        <section className="h-64 sm:h-64 xl:h-80 2xl:h-[600px]">
          <Carousel slideInterval={3000}>
            {service.src.map((src, index) => (
              <img key={index} src={src} alt={`Service image ${index + 1}`} />
            ))}
          </Carousel>
        </section>
        <HR />
        <section className="flex flex-col sm:flex-row w-full pl-4">
          <div className="w-full sm:ml-6 pt-4 sm:pt-0">
            <h1 className="text-xl font-bold">Prijs</h1>
            <p className="mt-2 mr-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, incidunt? Dolor ipsum eveniet atque, inventore impedit alias explicabo est labore. Incidunt quia earum nihil
              consequatur quaerat quae quas dolore sequi.
            </p>
          </div>
        </section>
        <HR />
        <ContactForm />
      </div>
    </>
  );
}
