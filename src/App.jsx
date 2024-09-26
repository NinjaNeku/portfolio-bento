import React from "react";
import HeaderBar from "./components/headerBar";
import Intro from "./components/intro";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import pfImage from "./assets/images/pf_image.png";

function App() {
  const items = [
    {
      id: "asdasdasd",
      label: "First Title",
      content: "description of the first title",
    },
    {
      id: "asjdaksj",
      label: "Second Title",
      content: "description of the second title",
    },
    {
      id: "jwehiuqwhi",
      label: "Third Title",
      content: "description of the third title",
    },
    {
      id: "qweqweqwe",
      label: "Fourth Title",
      content: "description of the fourth title",
    },
    {
      id: "zxczxczxc",
      label: "Fifth Title",
      content: "description of the fifth title",
    },
  ];

  return (
    <div className="bg-[#F6E9D9] min-h-screen w-full">
      <HeaderBar />
      <div className="flex mt-5">
        <div className="h-[800px]">
          <Intro />
          <About />
        </div>
        <div className="flex flex-col mt-2">
          <img
            className="rounded-[20px] mt-2 mb-4 w-[330px] h-[476px]"
            src={pfImage}
            alt="profile_pic"
          />
          <Contact />
        </div>
        <Projects items={items} />
      </div>
    </div>
  );
}

export default App;
