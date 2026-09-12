import { useState } from "react";
import { ArrowRight, CalendarDays, MapPin, Search, Users } from "lucide-react";
import {
  Autocomplete,
  MenuItem,
  Select,
  TextField,
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
}

const locations: LocationOption[] = [
  { city: "Delhi", country: "India", code: "DEL" },
  { city: "Mumbai", country: "India", code: "BOM" },
  { city: "Goa", country: "India", code: "GOI" },
  { city: "Kolkata", country: "India", code: "CCU" },
  { city: "Bangalore", country: "India", code: "BLR" },
  { city: "Hyderabad", country: "India", code: "HYD" },
  { city: "Chennai", country: "India", code: "MAA" },
  { city: "Srinagar", country: "India", code: "SXR" },
  { city: "Jaipur", country: "India", code: "JAI" },
  { city: "Manali", country: "India", code: "KUU" },
  { city: "Mussoorie", country: "India", code: "DED" },
  { city: "London", country: "United Kingdom", code: "LHR" },
  { city: "Paris", country: "France", code: "CDG" },
  { city: "Dubai", country: "UAE", code: "DXB" },
  { city: "Singapore", country: "Singapore", code: "SIN" },
  { city: "Tokyo", country: "Japan", code: "TYO" },
  { city: "New York", country: "United States", code: "JFK" },
  { city: "Toronto", country: "Canada", code: "YYZ" },
  { city: "Bangkok", country: "Thailand", code: "BKK" },
];

const FlightTickets = () => {
  const [from, setFrom] = useState<LocationOption>(locations[0]);

  const [to, setTo] = useState<LocationOption>(
    locations.find((location) => location.city === "Goa") ?? locations[1],
  );

  const [departure, setDeparture] = useState<Dayjs | null>(null);

  const [travelers, setTravelers] = useState("1");

  const handleSwap = () => {
    setFrom(to);
    setTo(from);
  };

  const handleTravelersChange = (event: SelectChangeEvent<string>) => {
    setTravelers(event.target.value);
  };

  const handleSearch = () => {
    console.log({
      from,
      to,
      departure: departure?.format("YYYY-MM-DD"),
      travelers,
    });
  };

  return (
    <section className="w-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[28px] border border-neutral-800 bg-[#121212] p-4 shadow-[0_20px_80px_rgba(255,255,255,0.04)] sm:p-6 lg:p-7">
          {/* HEADER */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-[10px] sm:tracking-[0.2em]">
                Book your journey
              </p>

              <h2 className="mt-1 text-xl font-medium tracking-tight text-white sm:text-2xl">
                Find your next flight
              </h2>
            </div>

            <div className="hidden shrink-0 items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900 px-3 py-2 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

              <span className="text-[10px] font-medium text-neutral-400">
                Best available fares
              </span>
            </div>
          </div>

          {/* FORM */}
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-[1fr_auto_1fr_0.8fr_0.65fr_auto] lg:items-end">
            {/* FROM */}
            <div className="min-w-0 rounded-2xl border border-neutral-800 bg-[#181818] p-4 transition-colors hover:border-neutral-700">
              <div className="mb-3 flex items-center gap-2">
                <MapPin size={14} className="text-neutral-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  From
                </span>
              </div>

              <Autocomplete
                value={from}
                onChange={(_, newValue) => {
                  if (newValue) {
                    setFrom(newValue);
                  }
                }}
                options={locations}
                isOptionEqualToValue={(option, value) =>
                  option.code === value.code
                }
                getOptionLabel={(option) => `${option.city}, ${option.country}`}
                disableClearable
                popupIcon={null}
                sx={{
                  width: "100%",

                  "& .MuiAutocomplete-inputRoot": {
                    padding: "0 !important",
                  },

                  "& .MuiAutocomplete-input": {
                    padding: "0 !important",
                  },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      backgroundColor: "#181818",
                      color: "#fff",
                      border: "1px solid #292929",
                      borderRadius: "16px",
                      overflow: "hidden",

                      "& .MuiAutocomplete-option": {
                        minHeight: "48px",
                        fontSize: "13px",
                        color: "#d4d4d4",

                        "&[aria-selected='true']": {
                          backgroundColor: "#242424",
                        },

                        "&:hover": {
                          backgroundColor: "#222",
                        },
                      },
                    },
                  },
                }}
                renderOption={(props, option) => (
                  <li {...props} key={option.code}>
                    <div className="flex w-full items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {option.city}
                        </p>

                        <p className="truncate text-[11px] text-neutral-500">
                          {option.country}
                        </p>
                      </div>

                      <span className="shrink-0 text-[10px] font-semibold tracking-wider text-neutral-600">
                        {option.code}
                      </span>
                    </div>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search city or country"
                    variant="standard"
                    sx={{
                      width: "100%",

                      "& .MuiInputBase-root": {
                        minWidth: 0,
                        color: "#fff",
                      },

                      "& .MuiInputBase-input": {
                        color: "#fff",
                        padding: "0 !important",
                        fontSize: "14px",
                        fontWeight: 500,
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

                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },

                      "& .MuiInput-underline:after": {
                        borderBottom: "none",
                      },

                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                    }}
                  />
                )}
              />
            </div>

            {/* SWAP */}
            <button
              type="button"
              onClick={handleSwap}
              aria-label="Swap departure and destination"
              className="mx-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-800 bg-[#181818] text-neutral-400 transition-all hover:border-neutral-600 hover:bg-neutral-800 hover:text-white lg:mb-3"
            >
              <ArrowRight size={15} className="rotate-90 lg:rotate-0" />
            </button>

            {/* TO */}
            <div className="min-w-0 rounded-2xl border border-neutral-800 bg-[#181818] p-4 transition-colors hover:border-neutral-700">
              <div className="mb-3 flex items-center gap-2">
                <MapPin size={14} className="text-neutral-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  To
                </span>
              </div>

              <Autocomplete
                value={to}
                onChange={(_, newValue) => {
                  if (newValue) {
                    setTo(newValue);
                  }
                }}
                options={locations}
                isOptionEqualToValue={(option, value) =>
                  option.code === value.code
                }
                getOptionLabel={(option) => `${option.city}, ${option.country}`}
                disableClearable
                popupIcon={null}
                sx={{
                  width: "100%",

                  "& .MuiAutocomplete-inputRoot": {
                    padding: "0 !important",
                  },

                  "& .MuiAutocomplete-input": {
                    padding: "0 !important",
                  },
                }}
                slotProps={{
                  paper: {
                    sx: {
                      mt: 1,
                      backgroundColor: "#181818",
                      color: "#fff",
                      border: "1px solid #292929",
                      borderRadius: "16px",
                      overflow: "hidden",

                      "& .MuiAutocomplete-option": {
                        minHeight: "48px",
                        fontSize: "13px",
                        color: "#d4d4d4",

                        "&[aria-selected='true']": {
                          backgroundColor: "#242424",
                        },

                        "&:hover": {
                          backgroundColor: "#222",
                        },
                      },
                    },
                  },
                }}
                renderOption={(props, option) => (
                  <li {...props} key={option.code}>
                    <div className="flex w-full items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-white">
                          {option.city}
                        </p>

                        <p className="truncate text-[11px] text-neutral-500">
                          {option.country}
                        </p>
                      </div>

                      <span className="shrink-0 text-[10px] font-semibold tracking-wider text-neutral-600">
                        {option.code}
                      </span>
                    </div>
                  </li>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search city or country"
                    variant="standard"
                    sx={{
                      width: "100%",

                      "& .MuiInputBase-root": {
                        minWidth: 0,
                        color: "#fff",
                      },

                      "& .MuiInputBase-input": {
                        color: "#fff",
                        padding: "0 !important",
                        fontSize: "14px",
                        fontWeight: 500,
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

                      "& .MuiInput-underline:before": {
                        borderBottom: "none",
                      },

                      "& .MuiInput-underline:after": {
                        borderBottom: "none",
                      },

                      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderBottom: "none",
                      },
                    }}
                  />
                )}
              />
            </div>

            {/* DEPARTURE */}
            <div className="min-w-0 rounded-2xl border border-neutral-800 bg-[#181818] p-4 transition-colors hover:border-neutral-700">
              <div className="mb-3 flex items-center gap-2">
                <CalendarDays size={14} className="text-neutral-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Departure
                </span>
              </div>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={departure}
                  onChange={(newValue) => setDeparture(newValue)}
                  minDate={dayjs()}
                  format="DD MMM YYYY"
                  slotProps={{
                    textField: {
                      variant: "standard",
                      fullWidth: true,

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

                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },

                        "& .MuiInput-underline:after": {
                          borderBottom: "none",
                        },

                        "& .MuiInput-underline:hover:not(.Mui-disabled):before":
                          {
                            borderBottom: "none",
                          },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            {/* TRAVELERS */}
            <div className="min-w-0 rounded-2xl border border-neutral-800 bg-[#181818] p-4 transition-colors hover:border-neutral-700">
              <div className="mb-3 flex items-center gap-2">
                <Users size={14} className="text-neutral-500" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  Travelers
                </span>
              </div>

              <Select
                value={travelers}
                onChange={handleTravelersChange}
                variant="standard"
                disableUnderline
                fullWidth
                sx={{
                  color: "#d4d4d4",
                  fontSize: "14px",
                  fontWeight: 500,

                  "& .MuiSelect-select": {
                    padding: "0 !important",
                  },

                  "& .MuiSvgIcon-root": {
                    color: "#737373",
                  },
                }}
                MenuProps={{
                  slotProps: {
                    paper: {
                      sx: {
                        backgroundColor: "#18181b",
                        color: "#fff",
                        border: "1px solid #262626",
                        borderRadius: "14px",
                        marginTop: "6px",

                        "& .MuiMenuItem-root": {
                          fontSize: "13px",
                          color: "#d4d4d4",

                          "&:hover": {
                            backgroundColor: "#242424",
                          },

                          "&.Mui-selected": {
                            backgroundColor: "#292929",
                          },

                          "&.Mui-selected:hover": {
                            backgroundColor: "#333",
                          },
                        },
                      },
                    },
                  },
                }}
              >
                <MenuItem value="1">1 Traveler</MenuItem>
                <MenuItem value="2">2 Travelers</MenuItem>
                <MenuItem value="3">3 Travelers</MenuItem>
                <MenuItem value="4">4 Travelers</MenuItem>
                <MenuItem value="5">5 Travelers</MenuItem>
                <MenuItem value="6">6 Travelers</MenuItem>
                <MenuItem value="7">7 Travelers</MenuItem>
                <MenuItem value="8">8 Travelers</MenuItem>
                <MenuItem value="9">9 Travelers</MenuItem>
              </Select>
            </div>

            {/* SEARCH */}
            <button
              type="button"
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-semibold text-black transition-all hover:bg-neutral-200 active:scale-[0.98]"
            >
              <Search size={17} />

              <span className="hidden sm:inline">Search flights</span>
            </button>
          </div>

          {/* FOOTER */}
          <div className="mt-5 flex flex-col gap-2 border-t border-neutral-800 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[11px] text-neutral-600">
              Search destinations, compare dates and plan your next trip.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-medium text-neutral-600">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
              Flexible booking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightTickets;
