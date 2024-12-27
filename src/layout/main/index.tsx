import { Suspense, useContext } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ActionsContext, AppContext } from "../../context";
import { CloseOutlined } from "@mui/icons-material";
import Logo from "../../assets/images/logo.svg";
import Create from "../../assets/icons/PlusSquare.svg?react";
import Carts from "../../assets/icons/Vector (9).svg?react";
import Commission from "../../assets/icons/HandCoins.svg?react";
import Plan from "../../assets/icons/Vector (8).svg?react";
import Wallet from "../../assets/icons/Wallet.svg?react";
import Dashboard from "../../assets/icons/ChartPieSlice.svg?react";
import Home from "../../assets/icons/home.svg?react";
import { NAV_LINKS } from "../../components/NavLinks";
import SearchIcon from "@mui/icons-material/Search";

function Main() {
  const actionsContext = useContext(ActionsContext);
  const appContext = useContext(AppContext);
  const navigate = useNavigate();

  function expandMenu() {
    actionsContext.expandMenu();
  }

  return (
    <div className="relative bg-default">
      <nav className="shadow w-full bg-white fixed z-[99] h-[var(--nav-height)] h-fit px-5">
        <div className="items-center flex justify-between align-center p-3">
          <div className="flex items-center justify-between col-span-4">
            <Link to="/">
              <img src={Logo} alt="icon" />
            </Link>
            <TextField
              className="min-w-[18rem] ml-3 bg-default rounded-none"
              placeholder="Search..."
              slotProps={{
                input: {
                  className: "",
                  startAdornment: (
                    <SearchIcon className="text-primary-dark ml-1" />
                  ),
                },
              }}
            />
          </div>
          <div className="flex items-center col-span-8">
            <div className="flex space-x-4 items-center">
              <IconButton
                onClick={() => navigate("")}
                className="flex flex-col "
              >
                <Home className="size-[1.33rem]" />
                <h5 className="text-xs">Home</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("dashboard")}
                className="flex flex-col"
              >
                <Dashboard className="size-[1.33rem]" />
                <h5 className="text-xs">Dashboard</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("wallet")}
                className="flex flex-col"
              >
                <Wallet className="size-[1.33rem]" />
                <h5 className="text-xs">Wallet</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("plan-a-trip")}
                className="flex flex-col"
              >
                <Plan className="size-[1.33rem]" />
                <h5 className="text-xs">Plan a trip</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("commission")}
                className="flex flex-col"
              >
                <Commission className="size-[1.33rem]" />
                <h5 className="text-xs">Commission for life</h5>
              </IconButton>
              <div className="w-[2px] h-10 bg-[#98A2B3]"></div>
              <Button className="text-white" onClick={() => null}>
                Subscribe
              </Button>
              <IconButton
                onClick={() => navigate("notifications")}
                className="flex flex-col"
              >
                <NotificationsIcon
                  color="action"
                  className="text-3xl text-brand-50 size-[1.33rem]"
                />
                <h5 className="text-xs">Notifications</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("carts")}
                className="flex flex-col"
              >
                <Carts className="size-[1.33rem]" />
                <h5 className="text-xs">Carts</h5>
              </IconButton>
              <IconButton
                onClick={() => navigate("create")}
                className="flex flex-col"
              >
                <Create className="size-[1.33rem]" />
                <h5 className="text-xs">Create</h5>
              </IconButton>

              <div className="relative">
                <IconButton onClick={() => null}>
                  <Avatar src="uju" alt="uju" className="bg-primary" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-10">
        <div
          className={`no-print bg-white  fixed overflow-y-auto overflow-x-hidden items-center pb-[1rem] h-[82vh] top-[6.25rem] transition-all text-sm duration-100  ${
            appContext.isMenuExpanded ? "w-[16.25rem] " : "w-[4.375rem]"
          } pt-[1rem]`}
        >
          {window.location.pathname.includes("file") &&
            appContext.isMenuExpanded && (
              <div className="h-12 w-12 rounded-full items-center relative bg-brand-50 grid place-items-center mx-auto mb-6">
                <p className="text-brand-50">o</p>
                <IconButton
                  className="text-brand-50 absolute right-[-2rem] top-[-1.2rem]"
                  onClick={() => {
                    expandMenu();
                    navigate(-1);
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              </div>
            )}
          <div
            className={`${
              appContext.isMenuExpanded ? "px-4" : "grid place-items-center"
            } mb-4 `}
          >
            <IconButton
              className="text-base"
              style={{ border: "2px solid #667185" }}
              onClick={expandMenu}
            >
              <MenuIcon className="text-brand-50 text-base" />
            </IconButton>
          </div>
          {NAV_LINKS.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  ` whitespace-nowrap transition-all text-sm duration-300 font-sans h-[3.5rem] flex flex-nowrap items-center space-x-2  p-4 ${
                    isActive ? "bg-primary text-white" : "text-brand-50"
                  } ${appContext.isMenuExpanded ? " " : "justify-center"}`
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon className={`${isActive ? "text-white" : ""} `} />

                    <span
                      className={`pl-2 ${
                        isActive ? "sr-only lg:not-sr-only" : ""
                      } ${appContext.isMenuExpanded ? " " : "hidden"}`}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}

          <div className="w-full text-center flex items-center justify-center">
            <Button
              className={`mt-6 w-[90%] bg-default whitespace-nowrap transition-all text-sm duration-300 font-sans h-[3.5rem] flex items-center justify-start space-x-2 p-4 
              text-brand-50 ${
                appContext.isMenuExpanded ? " " : "justify-center"
              }`}
              onClick={() => null}
            >
              <>
                <img src={Logo} alt="icon" width={30}/>
                <span
                  className={` ${appContext.isMenuExpanded ? " " : "hidden"}`}
                >
                  Personal Account
                </span>
              </>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-sreen px-10 pt-5">
        <div
          className={`${
            appContext.isMenuExpanded ? "ml-[16.25rem]" : "ml-[4.375rem]"
          }  px-5 pb-5`}
        >
          <Suspense
            fallback={
              <div className="h-full grid place-items-center w-full">
                <CircularProgress />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Main;
