import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import LoveStory from "./components/LoveStory/LoveStory";
import EventDetails from "./components/EventDetails/EventDetails";
import Gallery from "./components/Gallery/Gallery";
import RsvpForm from "./components/RsvpForm/RsvpForm";
import Venue from "./components/Venue/Venue";
import Footer from "./components/Footer/Footer";
import Divider from "./components/shared/Divider";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="story">
          <LoveStory />
        </section>
        <Divider />
        <section id="details">
          <EventDetails />
        </section>
        <Divider />
        <section id="gallery">
          <Gallery />
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
