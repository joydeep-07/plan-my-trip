export interface TrainTicket {
  pnr: string;
  trainNo: string;
  trainName: string;
  departureTime: string;
  departureDate: string;
  sourceStation: string;
  sourceCode: string;
  arrivalTime: string;
  arrivalDate: string;
  destinationStation: string;
  destinationCode: string;
  duration: string;
  stops: string;
  classType: string;
  passengerName: string;
  email: string;
  coach: string;
  berth: string;
}

export const dummyTickets: TrainTicket[] = [
  {
    pnr: "5748291630",
    trainNo: "12860",
    trainName: "Vande Bharat",
    departureTime: "21:05",
    departureDate: "18 November 2026",
    sourceStation: "Mumbai Central",
    sourceCode: "MMCT",
    arrivalTime: "06:00",
    arrivalDate: "20 November 2026",
    destinationStation: "Howrah Jn",
    destinationCode: "HWH",
    duration: "32 hr 55 min",
    stops: "25 stops",
    classType: "AC 3 Tier (3A)",
    passengerName: "John Doe",
    email: "john@example.com",
    coach: "B6",
    berth: "51",
  },
  {
    pnr: "9064715014",
    trainNo: "12301",
    trainName: "Howrah - New Delhi Rajdhani Express",
    departureTime: "16:50",
    departureDate: "4 October 2026",
    sourceStation: "Howrah Jn",
    sourceCode: "HWH",
    arrivalTime: "10:00",
    arrivalDate: "5 October 2026",
    destinationStation: "New Delhi",
    destinationCode: "NDLS",
    duration: "17 hr 10 min",
    stops: "5 stops",
    classType: "AC 2 Tier (2A)",
    passengerName: "Soumika Maji",
    email: "soumikamaji2005@gmail.com",
    coach: "A2",
    berth: "36",
  },
  {
    pnr: "9064547381",
    trainNo: "12951",
    trainName: "Mumbai Central - New Delhi Rajdhani Express",
    departureTime: "17:00",
    departureDate: "12 November 2026",
    sourceStation: "Mumbai Central",
    sourceCode: "MMCT",
    arrivalTime: "08:32",
    arrivalDate: "13 November 2026",
    destinationStation: "New Delhi",
    destinationCode: "NDLS",
    duration: "15 hr 32 min",
    stops: "5 stops",
    classType: "AC 2 Tier (2A)",
    passengerName: "Joydeep Paul",
    email: "joydeeprnp8821@gmail.com",
    coach: "A4",
    berth: "21",
  },
];
