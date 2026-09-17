import { forwardRef } from "react";
import { User, Ticket, Mail, Info } from "lucide-react";
import type { TrainTicket } from "../utils/trainData";

interface DownloadableTrainTicketProps {
  ticket: TrainTicket;
}

export const DownloadableTrainTicket = forwardRef<
  HTMLDivElement,
  DownloadableTrainTicketProps
>(({ ticket }, ref) => {
  return (
    <div
      ref={ref}
      className="
        relative
        flex
        w-[900px]
        overflow-visible
        rounded-2xl
        border
        border-black/15
        bg-white
        text-slate-800
        shadow-2xl
      "
    >
      {/* Top Notch */}
      <div
        className="
          absolute
          top-0
          left-[calc(100%-18rem)]
          -translate-x-1/2
          -translate-y-1/2
          w-12
          h-12
          rounded-full
          bg-white
          border
          border-black/15
          z-30
          md:block
        "
      />

      {/* Bottom Notch */}
      <div
        className="
          absolute
          bottom-0
          left-[calc(100%-18rem)]
          -translate-x-1/2
          translate-y-1/2
          w-12
          h-12
          rounded-full
         bg-white
          border
          border-black/15
          z-30
          md:block
        "
      />

      {/* Left Side: Journey Details */}
      <div className="flex-1 p-6 flex flex-col justify-between border-r border-dashed border-gray-300 relative bg-white rounded-l-2xl">
        {/* Header: IRCTC Logo & e-Ticket subtext */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <img
              src="/irctc.png"
              alt="IRCTC Logo"
              className="w-10 h-10 object-contain"
            />
            <div>
              <span className="text-xl font-semibold tracking-tight text-slate-900 block leading-none">
                IRCTC
              </span>
              <span className="text-[10px] text-slate-500 font-medium">
                Indian Railway Catering and Tourism Corporation Ltd.
              </span>
            </div>
          </div>
        </div>

        {/* Train Name & Class Badge */}
        <div className="flex items-start justify-between my-2">
          <div>
            <p className="text-[8px] text-slate-400 font-medium uppercase tracking-wider">
              Train No. / Name
            </p>
            <h3 className="text-[10px] font-medium text-slate-900 mt-0.5">
              {ticket.trainName}
            </h3>
          </div>
          <span className="text-[8px] text-sky-700 font-medium uppercase tracking-wider">
            {ticket.classType}
          </span>
        </div>

        {/* Timeline Section */}
        <div className="flex items-center justify-between my-2 px-2">
          {/* Departure */}
          <div>
            <p className="text-[11px] text-slate-400 font-medium mb-0.5">
              Departure
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
              {ticket.departureTime}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              {ticket.departureDate}
            </p>
            <p className="text-[11px] text-slate-600 font-semibold mt-0.5">
              {ticket.sourceStation} ({ticket.sourceCode})
            </p>
          </div>

          {/* Duration Graphic */}
          <div className="flex flex-col items-center px-4 flex-1">
            <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-3 py-0.5 rounded-full mb-1 border border-sky-200 whitespace-nowrap shadow-sm">
              {ticket.duration}
            </span>
            <div className="w-full flex items-center">
              <div className="w-2 h-2 rounded-full bg-sky-600 shrink-0" />
              <div className="flex-1 border-t border-dashed border-sky-400 mx-1" />
              <div className="w-2 h-2 rounded-full bg-sky-600 shrink-0" />
            </div>
            <span className="text-[10px] text-slate-400 font-medium mt-1">
              {ticket.stops}
            </span>
          </div>

          {/* Arrival */}
          <div className="text-right">
            <p className="text-[11px] text-slate-400 font-medium mb-0.5">
              Arrival
            </p>
            <h3 className="text-2xl font-semibold text-slate-900 tracking-tight">
              {ticket.arrivalTime}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              {ticket.arrivalDate}
            </p>
            <p className="text-[11px] text-slate-600 font-semibold mt-0.5">
              {ticket.destinationStation} ({ticket.destinationCode})
            </p>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="bg-amber-50/70 rounded-md p-2.5 flex items-center space-x-2.5 mt-2 border border-dashed border-amber-200">
          <div className="text-amber-600 shrink-0">
            <Info className="w-4 h-4" />
          </div>

          <p className="text-[8px] text-amber-800 leading-tight">
            This ticket is generated for demonstration purposes only and does
            not constitute a valid travel document or proof of reservation.
          </p>
        </div>
      </div>

      {/* Right Side: Passenger, QR & Seat Details */}
      <div className="w-72 p-6 flex flex-col justify-between bg-white relative rounded-r-2xl">
        <div className="flex justify-between mb-1">
          <div className="text-left">
            <h4 className="text-lg font-semibold text-slate-900 leading-tight">
              E Ticket
            </h4>
            <span className="text-[10px] text-slate-400 font-medium block">
              Electronic Reservation Slip
            </span>
          </div>

          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
            <img
              src="./rail.png"
              className="h-full w-full object-cover "
              alt=""
            />
          </div>
        </div>

        {/* Passenger Info Fields */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-start space-x-2.5">
              <User className="w-2.5 h-2.5 text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
                  Passenger Name
                </p>
                <p className="text-[10px] font-semibold text-slate-900 ">
                  {ticket.passengerName}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-2.5">
              <Ticket className="w-2.5 h-2.5 text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
                  PNR Number
                </p>
                <p className="text-[10px] font-semibold text-slate-900">
                  {ticket.pnr}
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-2.5">
            <Mail className="w-2.5 h-2.5 text-slate-400 mt-0.5 shrink-0" />
            <div className="overflow-hidden">
              <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
                Email
              </p>
              <p className="text-[10px] font-semibold text-slate-900 truncate">
                {ticket.email}
              </p>
            </div>
          </div>
        </div>

        {/* Coach / Berth Grid */}
        <div className="grid grid-cols-2 gap-2 my-3">
          <div className="bg-slate-50 rounded-sm p-2 text-center border border-slate-100">
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
              Coach
            </p>
            <p className="text-[12px] font-semibold text-slate-900">
              {ticket.coach}
            </p>
          </div>
          <div className="bg-slate-50 rounded-sm p-2 text-center border border-slate-100">
            <p className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
              Berth
            </p>
            <p className="text-[12px] font-semibold text-slate-900">
              {ticket.berth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

DownloadableTrainTicket.displayName = "DownloadableTrainTicket";
