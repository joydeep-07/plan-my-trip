import Hero from "../components/Hero";
import Map from "../components/Map";
import Packages from "../components/Packages";
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
      <div className="px-2 md:px-0">
        <TravelCards />
      </div>
      <Packages />
    </div>
  );
};

export default Home;
