import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import searchedHotels from "../../data";
import { searchedHotel } from "../../types/Hotel";
import { debounce } from "lodash";
import { useSnackbar } from "notistack";

function Hotel() {
  const [keyword, setKeyword] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<searchedHotel[]>([]);
  const [value, setValue] = useState("");
  const [days, setDays] = useState<{ [key: number]: number }>({});
  const { enqueueSnackbar } = useSnackbar();

  const debouncedUpdateVal = debounce((e) => {
    setKeyword(e.target.value);
  }, 500);

  const handleSearch = (searchTerm: string) => {
    if (searchTerm) {
      const results = searchedHotels.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredHotels(results);
    } else {
      setFilteredHotels([]);
    }
  };

  useEffect(() => {
    handleSearch(keyword);
  }, [keyword]);

  const handleDayChange = (hotelId: number, newDays: string) => {
    const numDays = parseInt(newDays, 10);
    if (!isNaN(numDays) && numDays >= 0) {
      setDays((prevDays) => ({ ...prevDays, [hotelId]: numDays }));
    }
  };

  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden">
      <div className="flex items-center pt-[15rem] justify-center">
        <TextField
          className="min-w-[28rem] ml-3 bg-default rounded-lg p-10"
          placeholder="Search Hotels..."
          onChange={(e) => {
            setValue(e.target.value);
            debouncedUpdateVal(e);
          }}
          value={value}
          slotProps={{
            input: {
              className: "text-lg",
              startAdornment: <SearchIcon className="text-primary-dark ml-1" />,
            },
          }}
        />
      </div>

      <div className="flex flex-col items-center mt-8">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="flex items-center justify-evenly bg-default p-4 rounded-lg shadow-md w-2/4 mb-4"
          >
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-32 h-24 object-cover rounded-md"
            />
            <div className="flex ml-4 flex-col">
              <h2 className="text-xl font-semibold">{hotel.name}</h2>
              <p className="text-gray-600">{hotel.location}</p>
              <p className="text-primary-dark font-bold">
                ${hotel.price}/night
              </p>
            </div>
            <div className="flex ml-4 flex-col">
              <TextField
                type="number"
                label="How many days?"
                variant="outlined"
                size="small"
                value={days[hotel.id] || ""}
                onChange={(e) => {
                  handleDayChange(hotel.id, e.target.value);
                }}
                className="mb-2"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  enqueueSnackbar(
                    `Booking ${hotel.name} for ${
                      days[hotel.id] || 0
                    } days at a total price of $${
                      (days[hotel.id] || 0) * hotel.price
                    }`,
                    { variant: "success" }
                  )
                }
              >
                Book
              </Button>
            </div>
          </div>
        ))}

        {filteredHotels.length === 0 && keyword && (
          <p className="text-gray-600 mt-4">No hotels match your search.</p>
        )}
      </div>
    </div>
  );
}

export default Hotel;
