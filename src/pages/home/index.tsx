import { useNavigate } from "react-router-dom";
import Banner from "../../assets/images/banner.webp";
import Date from "../../assets/images/date.webp";
import User from "../../assets/icons/UserPlus.svg?react";
import Airplane from "../../assets/icons/AirplaneInFlight.svg?react";
import Dots from "../../assets/icons/DotsThree.svg?react";
import SuitcaseRolling from "../../assets/icons/SuitcaseRolling.svg?react";
import FilmSlate from "../../assets/icons/FilmSlate.svg?react";
import ForkKnife from "../../assets/icons/ForkKnife.svg?react";
import Usb from "../../assets/icons/Usb.svg?react";
import Person from "../../assets/images/person.webp";
import HotelImage from "../../assets/images/hotel-image.webp";
import AirlineLogo from "../../assets/images/airline-log.webp";
import { Avatar, Button, IconButton } from "@mui/material";
import { Settings } from "@mui/icons-material";
import Hotels from "../../assets/icons/Vector (11).svg?react";
import Calender from "../../assets/icons/Vector (13).svg?react";
import Bed from "../../assets/icons/Bed.svg?react";
import Stair from "../../assets/icons/stair.svg?react";
import MapPin from "../../assets/icons/MapPin.svg?react";
import Activities from "../../assets/icons/Activities.svg?react";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white overflow-y-auto overflow-x-hidden p-5 max-w-[75rem]">
      <div>
        <div>
          <img src={Banner} alt="icon" />
          <div className="flex justify-between items-center my-3">
            <img src={Date} alt="icon" />
            <div className="flex">
              <Button
                variant="contained"
                className="bg-light rounded-none w-[10rem]"
                onClick={() => null}
              >
                <User />
              </Button>
              <Dots />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-3">
          <div>
            <h2 className="text-xl font-semibold">Bahamas Family Trip</h2>
            <p className="text-brand-100 text-sm">
              New York, United States of America{" "}
              <span className="font-light text-xs mx-1 bg-brand-100 ">|</span>{" "}
              Solo Trip
            </p>
          </div>
          <div>
            <IconButton onClick={() => navigate("profile")}>
              <Avatar src={Person} alt="user" className="bg-primary" />
            </IconButton>
            <IconButton onClick={() => navigate("settings")}>
              <Settings className="rounded-full bg-default p-2 size-[2.3rem] mr-9" />
            </IconButton>
          </div>
        </div>
        <div className="flex">
          <div className="bg-primary-dark rounded-md  w-[15rem] p-5">
            <h2 className="text-lg text-white font-semibold">Activities</h2>
            <p className="text-white font-light text-sm my-2">
              Build, personalize, and optimize your itineraries with our trip
              planner.
            </p>
            <Button
              variant="contained"
              className="bg-primary text-white rounded-md w-full mt-5"
              onClick={() => null}
            >
              Add Activities
            </Button>
          </div>
          <div className="bg-light rounded-md  w-[15rem] p-5 mx-2">
            <h2 className="text-lg text-brand-200 font-semibold">Hotels</h2>
            <p className="text-brand-50 font-light text-sm my-2">
              Build, personalize, and optimize your itineraries with our trip
              planner.
            </p>
            <Button
              variant="contained"
              className="bg-primary text-white rounded-md w-full mt-5"
              onClick={() => null}
            >
              Add Hotels
            </Button>
          </div>
          <div className="bg-primary rounded-md  w-[15rem] p-5">
            <h2 className="text-lg text-white font-semibold">Activities</h2>
            <p className="text-white font-light text-sm my-2">
              Build, personalize, and optimize your itineraries with our trip
              planner.
            </p>
            <Button
              variant="contained"
              className="bg-white text-primary rounded-md w-full mt-5"
              onClick={() => null}
            >
              Add Activities
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20 mb-5">
        <div>
          <h2 className="text-lg font-semibold">Trip itineraries</h2>
          <p className="text-brand-100 text-sm mb-2">
            Your trip itineraries are placed here
          </p>
        </div>
        <div className="w-full bg-default p-5">
          <div className="flex justify-between">
            <h2 className="text-sm font-semibold flex items-center">
              {" "}
              <Airplane className="mr-2 text-sm" />
              Flights
            </h2>
            <Button
              variant="contained"
              className="bg-white text-primary rounded-none w-[9rem]"
              onClick={() => navigate("flights")}
            >
              Add Flights
            </Button>
          </div>
          <div className="flex mt-4 rounded-lg shadow">
            <div className="bg-white  p-4 w-full">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img
                    src={AirlineLogo}
                    alt="Airline Logo"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">American Airlines</h3>
                    <p className="text-sm text-gray-500">
                      AA-829 · First Class
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-lg font-bold">08:35</p>
                    <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    <span className="tblock font-medium flex justify-between items-center">
                      <Airplane className="size-[1.1rem]" /> Duration: 1h 45m{" "}
                      <Airplane className="size-[1.1rem]" />
                    </span>
                    <span className="block w-[15rem] h-2 bg-default rounded-lg my-2"></span>
                    <span className="text-sm text-gray-500 flex justify-between items-center">
                      <span className="text-brand-200 font-semibold">LOS</span>
                      Direct{" "}
                      <span className="text-brand-200 font-semibold">SIN</span>
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">09:55</p>
                    <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex flex-wrap">
                <p className="mr-4">Facilities:</p>
                <p className="mr-4 flex">
                  <SuitcaseRolling className="mr-2" />
                  Baggage: 20kg
                </p>
                <p className="mr-4 flex">Cabin Baggage: 8kg</p>
                <p className="mr-4 flex">
                  <FilmSlate className="mr-2" />
                  In-flight Entertainment
                </p>
                <p className="mr-4 flex">
                  <ForkKnife className="mr-2" />
                  In-flight Meal
                </p>
                <p className="flex">
                  {" "}
                  <Usb className="mr-2" /> USB Port
                </p>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Flight details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
            <button
              className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
              onClick={() => null}
            >
              ✕
            </button>
          </div>
          <div className="flex mt-4 rounded-lg shadow">
            <div className="bg-white  p-4 w-full">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center">
                  <img
                    src={AirlineLogo}
                    alt="Airline Logo"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">American Airlines</h3>
                    <p className="text-sm text-gray-500">
                      AA-829 · First Class
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-lg font-bold">08:35</p>
                    <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                  </div>
                  <div className="text-sm text-gray-500 text-center">
                    <span className="tblock font-medium flex justify-between items-center">
                      <Airplane className="size-[1.1rem]" /> Duration: 1h 45m{" "}
                      <Airplane className="size-[1.1rem]" />
                    </span>
                    <span className="block w-[15rem] h-2 bg-default rounded-lg my-2"></span>
                    <span className="text-sm text-gray-500 flex justify-between items-center">
                      <span className="text-brand-200 font-semibold">LOS</span>
                      Direct{" "}
                      <span className="text-brand-200 font-semibold">SIN</span>
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold">09:55</p>
                    <p className="text-sm text-gray-500">Sun, 20 Aug</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex flex-wrap">
                <p className="mr-4">Facilities:</p>
                <p className="mr-4 flex">
                  <SuitcaseRolling className="mr-2" />
                  Baggage: 20kg
                </p>
                <p className="mr-4 flex">Cabin Baggage: 8kg</p>
                <p className="mr-4 flex">
                  <FilmSlate className="mr-2" />
                  In-flight Entertainment
                </p>
                <p className="mr-4 flex">
                  <ForkKnife className="mr-2" />
                  In-flight Meal
                </p>
                <p className="flex">
                  {" "}
                  <Usb className="mr-2" /> USB Port
                </p>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Flight details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
            <button
              className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
              onClick={() => null}
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-primary-dark p-5">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold text-white flex items-center">
            {" "}
            <Hotels className="mr-2 size-[1.4rem] text-white text-sm" />
            Hotels
          </h2>
          <Button
            variant="contained"
            className="bg-white text-brand-200 rounded-none w-[9rem]"
            onClick={() => navigate("hotels")}
          >
            Add Hotels
          </Button>
        </div>
        <div className="flex mt-4 mb-3 rounded-lg shadow">
          <div className="flex">
            <img src={HotelImage} alt="icon" />
            <div className="bg-white  p-4 min-w-[43rem]">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="">
                  <p className="text-xl font-bold text-primary-dark">
                    Riviera Resort, Lekki
                  </p>
                  <p className="text-xs text-brand-200 w-[40ch]">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </p>
                  <div className="flex my-2">
                    <button
                      onClick={() => null}
                      className="text-xs flex text-primary font-medium"
                    >
                      <MapPin className="mr-1" /> Show in map
                    </button>
                    <p className="mr-4 text-xs flex">
                      <Stair className="mr-1 ml-2" />
                      8.5 (436)
                    </p>
                    <p className="mr-4 text-xs flex">
                      <Bed className="mr-1 ml-2" />
                      King size room
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                  <p className="text-xs text-brand-200">
                    Total Price: NGN 560,000
                  </p>
                  <p className="text-xs text-brand-200">
                    1 room x 10 nights incl. taxes
                  </p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex flex-wrap justify-between">
                <div className="flex">
                  <p className="mr-4">Facilities:</p>
                  <p className="mr-4 flex text-xs">
                    <SuitcaseRolling className="mr-2" />
                    Pool
                  </p>
                  <p className="mr-4 flex  text-xs">
                    <SuitcaseRolling className="mr-2" />
                    Bar
                  </p>
                </div>
                <div className="flex">
                  <p className="mr-4 flex text-xs">
                    <Calender className="mr-2" />
                    Check In: 20-04-2024
                  </p>
                  <p className="mr-4 flex text-xs">
                    <Calender className="mr-2" />
                    Check Out: 2-04-2024
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Hotel Details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
            onClick={() => null}
          >
            ✕
          </button>
        </div>
        <div className="flex  mb-3 rounded-lg shadow">
          <div className="flex">
            <img src={HotelImage} alt="icon" />
            <div className="bg-white  p-4 min-w-[43rem]">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="">
                  <p className="text-xl font-bold text-primary-dark">
                    Riviera Resort, Lekki
                  </p>
                  <p className="text-xs text-brand-200 w-[40ch]">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </p>
                  <div className="flex my-2">
                    <button
                      onClick={() => null}
                      className="text-xs flex text-primary font-medium"
                    >
                      <MapPin className="mr-1" /> Show in map
                    </button>
                    <p className="mr-4 text-xs flex">
                      <Stair className="mr-1 ml-2" />
                      8.5 (436)
                    </p>
                    <p className="mr-4 text-xs flex">
                      <Bed className="mr-1 ml-2" />
                      King size room
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                  <p className="text-xs text-brand-200">
                    Total Price: NGN 560,000
                  </p>
                  <p className="text-xs text-brand-200">
                    1 room x 10 nights incl. taxes
                  </p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex flex-wrap justify-between">
                <div className="flex">
                  <p className="mr-4">Facilities:</p>
                  <p className="mr-4 flex text-xs">
                    <SuitcaseRolling className="mr-2" />
                    Pool
                  </p>
                  <p className="mr-4 flex  text-xs">
                    <SuitcaseRolling className="mr-2" />
                    Bar
                  </p>
                </div>
                <div className="flex">
                  <p className="mr-4 flex text-xs">
                    <Calender className="mr-2" />
                    Check In: 20-04-2024
                  </p>
                  <p className="mr-4 flex text-xs">
                    <Calender className="mr-2" />
                    Check Out: 2-04-2024
                  </p>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Hotel details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
            onClick={() => null}
          >
            ✕
          </button>
        </div>
      </div>
      <div className="w-full bg-primary mt-4  p-5">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold text-white flex items-center">
            {" "}
            <Activities className="mr-2 size-[1.4rem] text-white text-sm" />
            Activities
          </h2>
          <Button
            variant="contained"
            className="bg-white text-brand-200 rounded-none w-[9rem]"
            onClick={() => navigate("hotels")}
          >
            Add Activities
          </Button>
        </div>
        <div className="flex mt-4 mb-3 rounded-lg shadow">
          <div className="flex">
            <img src={HotelImage} alt="icon" />
            <div className="bg-white  p-4 min-w-[43rem]">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="">
                  <p className="text-xl font-bold text-primary-dark">
                    The Museum of Modern Art
                  </p>
                  <p className="text-xs text-brand-200 w-[40ch]">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </p>
                  <div className="flex my-2">
                    <button
                      onClick={() => null}
                      className="text-xs flex text-primary font-medium"
                    >
                      <MapPin className="mr-1" /> Directions
                    </button>
                    <p className="mr-4 text-xs flex">
                      <Stair className="mr-1 ml-2" />
                      8.5 (436)
                    </p>
                    <p className="mr-4 text-xs flex">
                      <Bed className="mr-1 ml-2" />1 Hour
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                  <p className="text-xs text-brand-200">10:30 AM on Mar 19</p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex items-center flex-wrap justify-between">
                <div className="flex">
                  <p className="mr-4">What's Included:</p>
                  <p className="mr-4 text-xs">
                    Admission to the Empire State Building
                  </p>
                  <p className="mr-4 flex text-primary text-xs">See more</p>
                </div>
                <div className="flex">
                  <Button
                    className="bg-primary-dark h-6 rounded-sm p-0 text-white"
                    variant="contained"
                  >
                    Day
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Activity details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
            onClick={() => null}
          >
            ✕
          </button>
        </div>
        <div className="flex mb-3 rounded-lg shadow">
          <div className="flex">
            <img src={HotelImage} alt="icon" />
            <div className="bg-white  p-4 min-w-[43rem]">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="">
                  <p className="text-xl font-bold text-primary-dark">
                    The Museum of Modern Art
                  </p>
                  <p className="text-xs text-brand-200 w-[40ch]">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </p>
                  <div className="flex my-2">
                    <button
                      onClick={() => null}
                      className="text-xs flex text-primary font-medium"
                    >
                      <MapPin className="mr-1" /> Directions
                    </button>
                    <p className="mr-4 text-xs flex">
                      <Stair className="mr-1 ml-2" />
                      8.5 (436)
                    </p>
                    <p className="mr-4 text-xs flex">
                      <Bed className="mr-1 ml-2" />1 Hour
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                  <p className="text-xs text-brand-200">10:30 AM on Mar 19</p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex items-center flex-wrap justify-between">
                <div className="flex">
                  <p className="mr-4">What's Included:</p>
                  <p className="mr-4 text-xs">
                    Admission to the Empire State Building
                  </p>
                  <p className="mr-4 flex text-primary text-xs">See more</p>
                </div>
                <div className="flex">
                  <Button
                    className="bg-primary-dark h-6 rounded-sm p-0 text-white"
                    variant="contained"
                  >
                    Day
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Activity details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
            onClick={() => null}
          >
            ✕
          </button>
        </div>
        <div className="flex mb-3 rounded-lg shadow">
          <div className="flex">
            <img src={HotelImage} alt="icon" />
            <div className="bg-white  p-4 min-w-[43rem]">
              <div className="flex items-center justify-between border-b pb-4">
                <div className="">
                  <p className="text-xl font-bold text-primary-dark">
                    The Museum of Modern Art
                  </p>
                  <p className="text-xs text-brand-200 w-[40ch]">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </p>
                  <div className="flex my-2">
                    <button
                      onClick={() => null}
                      className="text-xs flex text-primary font-medium"
                    >
                      <MapPin className="mr-1" /> Directions
                    </button>
                    <p className="mr-4 text-xs flex">
                      <Stair className="mr-1 ml-2" />
                      8.5 (436)
                    </p>
                    <p className="mr-4 text-xs flex">
                      <Bed className="mr-1 ml-2" />1 Hour
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-primary-dark">
                    ₦123,450.00
                  </p>
                  <p className="text-xs text-brand-200">10:30 AM on Mar 19</p>
                </div>
              </div>

              <div className="mt-4 border-b pb-3 text-sm text-brand-50 flex items-center flex-wrap justify-between">
                <div className="flex">
                  <p className="mr-4">What's Included:</p>
                  <p className="mr-4 text-xs">
                    Admission to the Empire State Building
                  </p>
                  <p className="mr-4 flex text-primary text-xs">See more</p>
                </div>
                <div className="flex">
                  <Button
                    className="bg-primary-dark h-6 rounded-sm p-0 text-white"
                    variant="contained"
                  >
                    Day
                  </Button>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-primary">
                <div>
                  <button onClick={() => null} className="text-xs font-medium">
                    Activity details
                  </button>
                  <button
                    onClick={() => null}
                    className="text-xs font-medium mx-5"
                  >
                    Price details
                  </button>
                </div>
                <button onClick={() => null} className="text-xs font-medium">
                  Edit details
                </button>
              </div>
            </div>
          </div>
          <button
            className="text-red-500 w-[2rem] bg-peach hover:bg-red-100 p-2"
            onClick={() => null}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
