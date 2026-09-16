import ServiceBanner from "../components/ServiceBanner"
import TrainTicket from "../components/TrainTicket";
import TravelCards from "../components/TravelCards"


const OurServices = () => {
  return (
    <div>
      <ServiceBanner />
      <div className="px-2 md:px-0">
        <TravelCards />
        <TrainTicket />
      </div>
    </div>
  );
}

export default OurServices