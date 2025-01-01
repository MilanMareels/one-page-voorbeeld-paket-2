import { CustomFlowbiteTheme, Navbar } from "flowbite-react";

export default function NavBarSection() {
  const companyName: string = import.meta.env.VITE_COMPANY_NAME!;

  const customTheme: CustomFlowbiteTheme["navbar"] = {
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700",
        off: "border-b border-gray-100 text-gray-700 hover:bg-[#E7E34F] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#E7E34F] dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-[#E7E34F] md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed dark:text-gray-600",
        off: "",
      },
    },
  };

  return (
    <Navbar fluid rounded theme={customTheme}>
      <Navbar.Brand>
        <img src="./LA aRCHITECKTURE.png" className="mr-3 h-10 sm:h-10" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{companyName}</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/#" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="/#contact" className="text-lg">
          Contact
        </Navbar.Link>
        <Navbar.Link href="/#services" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="/#about" className="text-lg">
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
