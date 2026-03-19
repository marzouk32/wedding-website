import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import WeddingDetails from "./components/WeddingDetails/WeddingDetails";
import RsvpForm from "./components/RsvpForm/RsvpForm";
import Venue from "./components/Venue/Venue";
import Footer from "./components/Footer/Footer";
import Divider from "./components/shared/Divider";
import Envelope from "./components/Envelope/Envelope";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return <Envelope onOpen={() => setIsOpen(true)} />;
  }

  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Divider />
        <section id="details">
          <WeddingDetails />
        </section>
        <Divider />
        <section id="rsvp">
          <RsvpForm />
        </section>
        <Divider />
        <section id="venue">
          <Venue />
        </section>
      </main>
      <Footer />
    </>
  );
}
