import { Button } from "flowbite-react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

export default function CookieConsent() {
  const [cookie, setCookie] = useCookies(["cookieContent"]);

  const giveCookieConsent = () => {
    let date = new Date();
    date.setDate(date.getDate() + 7);
    setCookie("cookieContent", true, { path: "/", expires: date });
  };

  return (
    <div className="flex justify-between items-center w-full fixed bottom-0 bg-white p-5">
      <p className="w-[70%]">
        Wij gebruiken cookies om uw gebruikerservaring te verbeteren. Als u akkoord gaat met ons gebruik van cookies.{" "}
        <Link to={"/privacy"} className="underline">
          Meer informatie.
        </Link>
      </p>
      <Button onClick={giveCookieConsent} className="w-[150px] rounded-none border-2 border-black bg-transparent text-black hover:text-white" color="dark">
        Accepteren
      </Button>
    </div>
  );
}
