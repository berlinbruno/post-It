import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import { MenuIcon, XIcon } from "lucide-react";
import logo from "../assets/logo-full-light.png";
import { client } from "../client";
import { Sidebar, UserProfile } from "../components";
import { userQuery } from "../utils/data";
import { fetchUser } from "../utils/fetchUser";
import Pins from "./Pins";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);

  const userInfo = fetchUser();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userInfo?.sub]);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transaction-height duration-75 ease-out">
      <div className=" hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
          <MenuIcon
            fontSize={40}
            className=" cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          <Link to={`/user-profile/${user?._id}`}>
            <img src={user?.image} alt="logo" className="w-12 rounded-full" />
          </Link>
        </div>
        {toggleSidebar && (
          <div className="fixed w-full bg-transparent h-screen overflow-y-auto shadow-md z-10 animate-slide-in flex">
            <div className=" w-4/5 relative h-screen overflow-y-auto">
              <div className="absolute w-full flex justify-end items-center p-2">
                <XIcon
                  fontSize={30}
                  className=" cursor-pointer"
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
              <Sidebar user={user && user} closeToggle={setToggleSidebar} />
            </div>
            <button className=" bg-transparent w-[20%] h-screen" onClick={() => setToggleSidebar(false)}>

            </button>
          </div>
        )}
      </div>
      <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/user-profile/:userId" element={<UserProfile />} />
          <Route path="/*" element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
