import { Button } from "flowbite-react";

export default function ContactButton() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Button href="#contact" className="mt-10 bg-transparent border-2 rounded-none border-black text-black w-[150px]">
        Contact us
      </Button>
    </div>
  );
}
