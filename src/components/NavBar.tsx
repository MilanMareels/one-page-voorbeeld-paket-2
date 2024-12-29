import { Navbar } from "flowbite-react";

export default function NavBarSection() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img src="https://flowbite.com/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bedrijfs naam</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">
          Home
        </Navbar.Link>
        <Navbar.Link href="#contact" className="text-lg">
          Contact
        </Navbar.Link>
        <Navbar.Link href="#services" className="text-lg">
          Services
        </Navbar.Link>
        <Navbar.Link href="#about" className="text-lg">
          About
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
