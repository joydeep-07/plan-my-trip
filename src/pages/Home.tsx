import Hero from "../components/Hero";
import Map from "../components/Map";
import Service from "../components/Service";
import TravelCards from "../components/TravelCards";
import Why from "../components/Why";

const Home = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Why />
      <Map />
      <TravelCards/>
    </div>
  );
};

export default Home;
