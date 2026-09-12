import React, { useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Search, Users } from "lucide-react";

import {
  Autocomplete,
  TextField,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import dayjs, { type Dayjs } from "dayjs";

interface LocationOption {
  city: string;
  country: string;
  code: string;
  flag: string;
}

const locations: LocationOption[] = [
  {
    city: "Delhi",
    country: "India",
    code: "DEL",
    flag: "🇮🇳",
  },
  {
    city: "Mumbai",
    country: "India",
    code: "BOM",
    flag: "🇮🇳",
  },
  {
    city: "Goa",
    country: "India",
    code: "GOI",
    flag: "🇮🇳",
  },
  {
    city: "Kolkata",
    country: "India",
    code: "CCU",
    flag: "🇮🇳",
  },
  {
    city: "Bangalore",
    country: "India",
    code: "BLR",
    flag: "🇮🇳",
  },
  {
    city: "Hyderabad",
    country: "India",
    code: "HYD",
    flag: "🇮🇳",
  },
  {
    city: "Chennai",
    country: "India",
    code: "MAA",
    flag: "🇮🇳",
  },
  {
    city: "Srinagar",
    country: "India",
    code: "SXR",
    flag: "🇮🇳",
  },
  {
    city: "Jaipur",
    country: "India",
    code: "JAI",
    flag: "🇮🇳",
  },
  {
    city: "Manali",
    country: "India",
    code: "KUU",
    flag: "🇮🇳",
  },
  {
    city: "Mussoorie",
    country: "India",
    code: "DED",
    flag: "🇮🇳",
  },
  {
    city: "London",
    country: "United Kingdom",
    code: "LHR",
    flag: "🇬🇧",
  },
  {
    city: "Paris",
    country: "France",
    code: "CDG",
    flag: "🇫🇷",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    code: "DXB",
    flag: "🇦🇪",
  },
  {
    city: "Singapore",
    country: "Singapore",
    code: "SIN",
    flag: "🇸🇬",
  },
  {
    city: "Tokyo",
    country: "Japan",
    code: "NRT",
    flag: "🇯🇵",
  },
  {
    city: "New York",
    country: "United States",
    code: "JFK",
    flag: "🇺🇸",
  },
  {
    city: "Toronto",
    country: "Canada",
    code: "YYZ",
    flag: "🇨🇦",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    code: "BKK",
    flag: "🇹🇭",
  },
];

const FlightTickets: React.FC = () => {
  const [from, setFrom] = useState<LocationOption | null>(locations[0]);

  const [to, setTo] = useState<LocationOption | null>(
    locations.find((location) => location.city === "Goa") || null,
  );

  const [departure, setDeparture] = useState<Dayjs | null>(null);

  const [travelers, setTravelers] = useState("1");

  const swapLocations = () => {
    setFrom(to);
    setTo(from);
  };

  const handleTravelersChange = (event: SelectChangeEvent) => {
    setTravelers(event.target.value);
  };

  return (
    <div className="w-full min-w-0">
      <div
        className="
          relative
          w-full
          max-w-2xl
          min-w-0
          rounded-xl
          border
          border-neutral-800/50
          bg-[#121212]
          p-4
          backdrop-blur-xl
          sm:rounded-2xl
          sm:p-5
          md:p-6
          lg:p-8
        "
      >
        {/* Card Header */}
        <div
          className="
            flex
            flex-col
            gap-4
            px-1
            pb-5
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-2
            sm:pb-6
          "
        >
          <div className="min-w-0">
            <p className="text-base font-medium text-white sm:text-lg">
              Book a flight
            </p>

            <p className="mt-1 text-[11px] leading-relaxed text-neutral-400 sm:text-xs">
              Find the best flights for your journey
            </p>
          </div>

          <div
            className="
              flex
              w-fit
              shrink-0
              items-center
              gap-2
              rounded-full
              border
              border-neutral-800
              bg-neutral-900
              px-3
              py-1.5
              text-[10px]
              text-neutral-400
              sm:text-xs
            "
          >
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#9CCB63]" />
            Flexible booking
          </div>
        </div>

        {/* Inputs */}
        <div className="flex min-w-0 flex-col gap-3">
          {/* FROM / TO */}
          <div className="flex min-w-0 flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {/* FROM */}
            <div
              className="
                min-w-0
                w-full
                flex-1
                rounded-xl
                border
                border-neutral-800
                bg-[#18181b]
                px-4
                py-3.5
                transition
                hover:border-neutral-700
                sm:rounded-2xl
                sm:px-5
                sm:py-4
              "
            >
              <label
                className="
                  mb-2
                  block
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-neutral-400
                  sm:text-[10px]
                "
              >
                From
              </label>

              <div className="flex min-w-0 items-center gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-neutral-400"
                />

                <Autocomplete
                  fullWidth
                  options={locations}
                  value={from}
                  onChange={(_, value) => setFrom(value)}
                  getOptionLabel={(option) =>
                    `${option.city}, ${option.country}`
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.code === value.code
                  }
                  filterOptions={(options, { inputValue }) => {
                    const search = inputValue.toLowerCase();

                    return options.filter(
                      (option) =>
                        option.city.toLowerCase().includes(search) ||
                        option.country.toLowerCase().includes(search) ||
                        option.code.toLowerCase().includes(search),
                    );
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: "#18181b",
                        color: "#fff",
                        border: "1px solid #262626",
                        borderRadius: "14px",
                        marginTop: "6px",
                      },
                    },
                    popper: {
                      sx: {
                        zIndex: 9999,
                        maxWidth: "calc(100vw - 32px)",
                      },
                    },
                  }}
                  renderOption={(props, option) => (
                    <li
                      {...props}
                      key={option.code}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        color: "#fff",
                      }}
                    >
                      <span className="text-xl">{option.flag}</span>

                      <div className="flex min-w-0 flex-col">
                        <span className="text-sm font-medium">
                          {option.city}
                        </span>

                        <span className="text-xs text-neutral-500">
                          {option.country} · {option.code}
                        </span>
                      </div>
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search city or country"
                      variant="standard"
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        className: "!text-white !text-sm !font-medium !min-w-0",
                      }}
                      sx={{
                        width: "100%",

                        "& .MuiInputBase-root": {
                          minWidth: 0,
                        },

                        "& .MuiInputBase-input": {
                          color: "#fff",
                          padding: "0 !important",
                          fontSize: "14px",
                          minWidth: 0,
                          textOverflow: "ellipsis",
                        },

                        "& .MuiInputBase-input::placeholder": {
                          color: "#525252",
                          opacity: 1,
                        },

                        "& .MuiAutocomplete-endAdornment": {
                          display: "none",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </div>

            {/* SWAP */}
            <button
              type="button"
              onClick={swapLocations}
              aria-label="Swap departure and destination"
              className="
                hidden
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-neutral-700
                bg-neutral-900
                text-white
                shadow-[0_4px_12px_rgba(0,0,0,0.5)]
                transition
                hover:scale-105
                hover:bg-neutral-800
                lg:flex
              "
            >
              <ArrowRight size={17} />
            </button>

            {/* TO */}
            <div
              className="
                min-w-0
                w-full
                flex-1
                rounded-xl
                border
                border-neutral-800
                bg-[#18181b]
                px-4
                py-3.5
                transition
                hover:border-neutral-700
                sm:rounded-2xl
                sm:px-5
                sm:py-4
              "
            >
              <label
                className="
                  mb-2
                  block
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-neutral-400
                  sm:text-[10px]
                "
              >
                To
              </label>

              <div className="flex min-w-0 items-center gap-3">
                <MapPin
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-neutral-400"
                />

                <Autocomplete
                  fullWidth
                  options={locations}
                  value={to}
                  onChange={(_, value) => setTo(value)}
                  getOptionLabel={(option) =>
                    `${option.city}, ${option.country}`
                  }
                  isOptionEqualToValue={(option, value) =>
                    option.code === value.code
                  }
                  filterOptions={(options, { inputValue }) => {
                    const search = inputValue.toLowerCase();

                    return options.filter(
                      (option) =>
                        option.city.toLowerCase().includes(search) ||
                        option.country.toLowerCase().includes(search) ||
                        option.code.toLowerCase().includes(search),
                    );
                  }}
                  slotProps={{
                    paper: {
                      sx: {
                        backgroundColor: "#18181b",
                        color: "#fff",
                        border: "1px solid #262626",
                        borderRadius: "14px",
                        marginTop: "6px",
                      },
                    },
                    popper: {
                      sx: {
                        zIndex: 9999,
                        maxWidth: "calc(100vw - 32px)",
                      },
                    },
                  }}
                  renderOption={(props, option) => (
                    <li
                      {...props}
                      key={option.code}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "10px 14px",
                        color: "#fff",
                      }}
                    >
                      <span className="text-xl">{option.flag}</span>

                      <div className="flex min-w-0 flex-col">
                        <span className="text-sm font-medium">
                          {option.city}
                        </span>

                        <span className="text-xs text-neutral-500">
                          {option.country} · {option.code}
                        </span>
                      </div>
                    </li>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Search city or country"
                      variant="standard"
                      InputProps={{
                        ...params.InputProps,
                        disableUnderline: true,
                        className: "!text-white !text-sm !font-medium !min-w-0",
                      }}
                      sx={{
                        width: "100%",

                        "& .MuiInputBase-root": {
                          minWidth: 0,
                        },

                        "& .MuiInputBase-input": {
                          color: "#fff",
                          padding: "0 !important",
                          fontSize: "14px",
                          minWidth: 0,
                          textOverflow: "ellipsis",
                        },

                        "& .MuiInputBase-input::placeholder": {
                          color: "#525252",
                          opacity: 1,
                        },

                        "& .MuiAutocomplete-endAdornment": {
                          display: "none",
                        },
                      }}
                    />
                  )}
                />
              </div>
            </div>
          </div>

          {/* DATE / TRAVELERS */}
          <div className="flex min-w-0 flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {/* DATE */}
            <div
              className="
                min-w-0
                w-full
                flex-1
                rounded-xl
                border
                border-neutral-800
                bg-[#18181b]
                px-4
                py-3.5
                transition
                hover:border-neutral-700
                sm:rounded-2xl
                sm:px-5
                sm:py-4
              "
            >
              <label
                className="
                  mb-2
                  block
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-neutral-400
                  sm:text-[10px]
                "
              >
                Departure
              </label>

              <div className="flex min-w-0 items-center gap-3">
                <CalendarDays
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-neutral-400"
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={departure}
                    onChange={(newValue) => setDeparture(newValue)}
                    minDate={dayjs()}
                    format="DD MMM YYYY"
                    slotProps={{
                      textField: {
                        variant: "standard",
                        placeholder: "Departure date",
                        fullWidth: true,
                        InputProps: {
                          disableUnderline: true,
                        },
                        sx: {
                          width: "100%",

                          "& .MuiInputBase-root": {
                            minWidth: 0,
                          },

                          "& .MuiInputBase-input": {
                            color: "#d4d4d4",
                            padding: "0 !important",
                            fontSize: "14px",
                            fontWeight: 500,
                            minWidth: 0,
                          },

                          "& .MuiInputBase-input::placeholder": {
                            color: "#525252",
                            opacity: 1,
                          },

                          "& .MuiSvgIcon-root": {
                            color: "#737373",
                          },

                          "& .MuiInputAdornment-root": {
                            marginLeft: "0",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>

            {/* TRAVELERS */}
            <div
              className="
                min-w-0
                w-full
                flex-1
                rounded-xl
                border
                border-neutral-800
                bg-[#18181b]
                px-4
                py-3.5
                transition
                hover:border-neutral-700
                sm:rounded-2xl
                sm:px-5
                sm:py-4
              "
            >
              <label
                className="
                  mb-2
                  block
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-widest
                  text-neutral-400
                  sm:text-[10px]
                "
              >
                Travelers
              </label>

              <div className="flex min-w-0 items-center gap-3">
                <Users
                  size={17}
                  strokeWidth={1.6}
                  className="shrink-0 text-neutral-400"
                />

                <Select
                  value={travelers}
                  onChange={handleTravelersChange}
                  variant="standard"
                  disableUnderline
                  fullWidth
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        backgroundColor: "#18181b",
                        color: "#fff",
                        border: "1px solid #262626",
                        borderRadius: "14px",
                        marginTop: "6px",
                      },
                    },
                  }}
                  sx={{
                    minWidth: 0,
                    color: "#d4d4d4",
                    fontSize: "14px",
                    fontWeight: 500,

                    "& .MuiSelect-select": {
                      padding: "0 !important",
                      minWidth: "0 !important",
                    },

                    "& .MuiSvgIcon-root": {
                      color: "#737373",
                    },
                  }}
                >
                  <MenuItem value="1">1 Traveler</MenuItem>
                  <MenuItem value="2">2 Travelers</MenuItem>
                  <MenuItem value="3">3 Travelers</MenuItem>
                  <MenuItem value="4">4 Travelers</MenuItem>
                  <MenuItem value="5">5+ Travelers</MenuItem>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH BUTTON */}
        <div className="mt-5 flex w-full justify-end sm:mt-6">
          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-white
              px-6
              py-3.5
              text-sm
              font-semibold
              text-black
              shadow-[0_10px_25px_rgba(255,255,255,0.15)]
              transition
              hover:bg-neutral-200
              sm:w-auto
              sm:rounded-2xl
              sm:px-8
              sm:py-4
            "
          >
            <Search size={17} />
            Search flights
          </button>
        </div>

        {/* Decorative Label */}
        <div className="absolute -bottom-8 left-4 hidden items-center gap-3 text-xs text-neutral-500 xl:flex">
          <span className="h-px w-8 bg-neutral-800" />
          Start your journey from anywhere
        </div>
      </div>
    </div>
  );
};

export default FlightTickets;
