import { Card, CustomFlowbiteTheme } from "flowbite-react";
import { serviceItems } from "../data/serviceItems";
import { Link } from "react-router-dom";

export default function ServiceSection() {
  const customTheme: CustomFlowbiteTheme["card"] = {
    root: {
      base: "flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 hover:scale-105 ease-in-out duration-500",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
    img: {
      base: "",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  };

  return (
    <section className="flex justify-center items-center flex-col bg-gray-100" id="services">
      <div className="pt-10 flex justify-center items-center flex-col gap-5">
        <h1 className="font-semibold text-3xl">Services</h1>
        <div className="max-w-[700px] m-auto text-center p-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab, similique reprehenderit atque aliquam impedit fuga libero quos vel voluptatem nemo inventore, numquam tempore eum
            ad ut dolorum deleniti quia.
          </p>
        </div>
      </div>
      <section className="grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-10 p-10 m-auto cursor-pointer">
        {serviceItems.map((i) => (
          <Link to={`/services/${i.id}`}>
            <Card theme={customTheme} className="w-full max-w-xs" imgAlt="Meaningful alt text for an image that is not purely decorative" imgSrc={i.src[0]}>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{i.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 truncate">{i.description}</p>
            </Card>
          </Link>
        ))}
      </section>
    </section>
  );
}
