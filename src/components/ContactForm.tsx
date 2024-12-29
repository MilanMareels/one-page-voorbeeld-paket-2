import { useState } from "react";
import Swal from "sweetalert2";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(result);

    const formData = new FormData(event.target);

    formData.append("access_key", "bcc5c11a-9cfd-4be8-b682-0660b76e2805"); // Moet nog naar env file! Dit is de key van de mail van de klant!!

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      Swal.fire({
        title: "Success!",
        text: "Email sent succsessfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-10" id="contact">
      <form onSubmit={onSubmit} className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Contact Us</h2>
        <input type="hidden" name="subject" value="New message form customer" />
        <input type="hidden" name="from_name" value="Besdrijfs naam" />
        <div>
          <label htmlFor="user_name" className="block text-gray-700 font-semibold mb-2">
            Name
          </label>
          <input type="text" name="name" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your name" required />
        </div>

        <div>
          <label htmlFor="user_email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input type="email" name="email" id="user_email" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Your email" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
            Message
          </label>
          <textarea name="message" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" rows={4} placeholder="Your message" required></textarea>
        </div>

        <div className="text-center">
          <input type="submit" value="Send Message" className="w-full bg-blue-500 text-white p-3 rounded-lg cursor-pointer hover:bg-blue-600 transition" />
        </div>
      </form>
    </div>
  );
}
