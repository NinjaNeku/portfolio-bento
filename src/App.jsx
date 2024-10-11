import React, { useState } from "react";
import { motion } from "framer-motion";
import HeaderBar from "./components/HeaderBar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import pfImage from "./assets/images/pf_image.png";
import { Instagram, Linkedin, Github, X, Mail } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-[#F6E9D9] w-full max-w-md m-4 p-6 rounded-[20px] shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-[#F6E9D9] text-[#bf7961] hover:text-[#a36752] transition-colors duration-300 cursor-pointer rounded-lg border-none focus:outline-none"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const SocialButton = ({ icon: Icon, label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center w-70 bg-[#bf7961] text-[#F6E9D9] py-3 px-4 rounded-[10px] mb-4 hover:bg-[#a36752] transition-colors duration-300"
  >
    <Icon size={24} className="mr-3" />
    <span className="font-['Gilroy-Medium'] text-lg">{label}</span>
  </a>
);

const miscCardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 2, ease: "easeInOut" } },
};

const profileCardVaraints = {
  hidden: { x: -135, y: 70 },
  visible: {
    x: 0,
    y: 0,
    transition: { ease: "easeInOut", duration: 1.5, delay: 1 },
  },
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      id: "1",
      label: "First Title",
      content: "description of the first title",
    },
    {
      id: "2",
      label: "Second Title",
      content: "description of the second title",
    },
    {
      id: "3",
      label: "Third Title",
      content: "description of the third title",
    },
    {
      id: "4",
      label: "Fourth Title",
      content: "description of the fourth title",
    },
    {
      id: "5",
      label: "Fifth Title",
      content: "description of the fifth title",
    },
  ];

  return (
    <div className="bg-[#F6E9D9] min-h-screen w-full">
      <motion.div
        variants={miscCardVariants}
        initial="hidden"
        animate="visible"
      >
        <HeaderBar />
      </motion.div>
      <div className="flex mt-5 w-min-[100px]">
        <motion.div
          variants={miscCardVariants}
          initial="hidden"
          animate="visible"
          className="h-[800px]"
        >
          <Intro />
          <About />
        </motion.div>
        <div className="flex flex-col mt-2">
          <motion.div
            variants={profileCardVaraints}
            initial="hidden"
            animate="visible"
          >
            <img
              className="rounded-[20px] mt-2 mb-4 w-[330px] h-[476px]"
              src={pfImage}
              alt="profile_pic"
            />
          </motion.div>
          <motion.div
            variants={miscCardVariants}
            initial="hidden"
            animate="visible"
          >
            <Contact onOpenModal={() => setIsModalOpen(true)} />
          </motion.div>
        </div>
        <motion.div
          variants={miscCardVariants}
          initial="hidden"
          animate="visible"
          className="ml-3"
        >
          <Projects items={items} />
        </motion.div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-[#3c2f2a] text-3xl font-bold mb-6 font-['Gilroy']">
          Connect with me
        </h2>
        <div className="space-y-4">
          <SocialButton
            icon={Instagram}
            label="Instagram"
            href="https://www.instagram.com/aayush_gotham/"
          />
          <SocialButton
            icon={Linkedin}
            label="LinkedIn"
            href="https://www.linkedin.com/in/aayush-gautam-a712b5266/"
          />
          <SocialButton
            icon={Github}
            label="GitHub"
            href="https://github.com/NinjaNeku"
          />
          <SocialButton
            icon={Mail}
            label="Email"
            href="mailto:aayushgautam2502@gmail.com"
          />
        </div>
      </Modal>
    </div>
  );
}

export default App;
