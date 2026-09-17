import { forwardRef } from "react";
import { FileText } from "lucide-react";
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
    border-black/10
    bg-white
    text-slate-800
    shadow-xl
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
    w-14
    h-14
    rounded-full
    bg-white
    border
    border-black/10
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
    w-14
    h-14
    rounded-full
    bg-white
    border
    border-black/10
    z-30
     md:block
  "
      />

      {/* Left Side: Journey Details */}
      <div className="flex-1 p-6 flex flex-col justify-between border-r border-dashed border-gray-500/50 relative">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-medium tracking-wider text-slate-900">
            IRCTC
          </span>
          <span className="text-xs font-semibold text-slate-600 text-right">
            {ticket.trainName}
          </span>
        </div>

        <div className="flex items-center justify-between my-2 px-1">
          <div>
            <p className="text-[11px] text-slate-400 font-medium mb-0.5">
              Depart
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              {ticket.departureTime}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              {ticket.departureDate}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {ticket.sourceStation} ({ticket.sourceCode})
            </p>
          </div>

          <div className="flex flex-col items-center px-4 flex-1">
            <span className="text-[11px] font-medium text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full mb-1.5 border border-sky-100 whitespace-nowrap">
              {ticket.duration}
            </span>
            <div className="w-full flex items-center">
              <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
              <div className="flex-1 border-t-2 border-dashed border-sky-300 mx-1" />
              <div className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
            </div>
            <span className="text-[9px] text-slate-400 mt-0.5">
              {ticket.stops}
            </span>
          </div>

          <div className="text-right">
            <p className="text-[11px] text-slate-400 font-medium mb-0.5">
              Arrive
            </p>
            <h3 className="text-xl font-bold text-slate-900">
              {ticket.arrivalTime}
            </h3>
            <p className="text-[11px] text-slate-500 font-medium">
              {ticket.arrivalDate}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {ticket.destinationStation} ({ticket.destinationCode})
            </p>
          </div>
        </div>

        <div className="bg-slate-50 rounded-sm p-3 flex items-center space-x-2.5 mt-4 border border-slate-100">
          <div className="p-1.5 rounded-xl text-sky-600 shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <p className="text-[11px] text-slate-500 leading-tight">
            Show e-tickets and valid government photo identity during ticket
            inspection.
          </p>
        </div>
      </div>

      {/* Right Side: Passenger & Seat Details */}
      <div className="w-72 p-6 flex flex-col justify-between bg-white relative">
        <div className="flex justify-end mb-2">
          <span className="text-[11px] font-semibold text-sky-600 border border-sky-200 px-2.5 py-0.5 rounded-full bg-sky-50/50">
            {ticket.classType}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              Name
            </p>
            <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
              {ticket.passengerName}
            </p>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              PNR Number
            </p>
            <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
              {ticket.pnr}
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
              Email
            </p>
            <p className="text-xs font-bold text-slate-800 mt-0.5 truncate">
              {ticket.email}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 mt-auto">
          <div className="bg-slate-50 rounded-sm p-2.5 text-center border border-slate-100">
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
              Coach
            </p>
            <p className="text-base font-semibold text-slate-900">
              {ticket.coach}
            </p>
          </div>
          <div className="bg-slate-50 rounded-sm p-2.5 text-center border border-slate-100">
            <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold mb-0.5">
              Berth
            </p>
            <p className="text-base font-semibold text-slate-900">
              {ticket.berth}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

DownloadableTrainTicket.displayName = "DownloadableTrainTicket";
4;
