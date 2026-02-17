import  { useEffect,useState } from "react";
import Container from "./Container";
import { Link, useLocation } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineWrenchScrewdriver,
  HiOutlineBriefcase,
  HiOutlineUsers,
  HiOutlinePhone,
} from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";
import { HiMenu } from "react-icons/hi";
import { FaWindowClose } from "react-icons/fa";
import siteData from "../data/site.json";
const menu = [
  { text: "خانه", link: "/", icon: <HiOutlineHome /> },
  { text: "خدمات", link: "/services", icon: <HiOutlineWrenchScrewdriver /> },
  { text: "نمونه کار", link: "/portfolio", icon: <HiOutlineBriefcase /> },
  { text: "درباره ما", link: "/about-us", icon: <HiOutlineUsers /> },
  { text: "تماس با ما", link: "/contact-us", icon: <HiOutlinePhone /> },
];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const siteInfo = siteData.siteInfo;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="relative z-50 w-full border-b border-(--primary) bg-(--surface) py-3.75 backdrop-blur-[6px]">
      <Container>
        <nav className="flex sm:grid items-center justify-between grid-cols-none sm:grid-cols-12 w-full">
          <Link
            to={"/"}
            className="cursor-pointer sm:col-span-1 flex flex-col justify-center items-center gap-1"
          >
            <img
              src={siteInfo.logo}
              className="w-10 aspect-square rounded-full "
              loading="lazy"
            />
            <h1 className="text-(--primary) font-black text-[16px] hidden sm:inline-flex">
              {siteInfo.title}
            </h1>
          </Link>
          <HiMenu
            onClick={() => setIsOpen((prev) => !prev)}
            className="cursor-pointer text-[40px] text-(--primary) md:hidden sm:col-span-10 mr-6 sm:mr-10"
          />
          <ul className="hidden md:flex items-center gap-4 lg:gap-6 font-medium col-span-10">
            {menu.map((m) => (
              <li className="relative group">
                <Link
                   to={m.link}
  className={`relative z-10 flex items-center gap-2 px-3 py-2 ${
    m.link === "/" 
      ? location.pathname === "/" 
        ? "text-[25px] text-(--primary)" 
        : "text-[16px] text-(--text)"
      : location.pathname.startsWith(m.link) 
        ? "text-[25px] text-(--primary)" 
        : "text-[16px] text-(--text)"
  }`}
                >
                  {m.icon}
                  <span
                    className={`${m.link==='/'?location.pathname=='/' ? "hidden" : "inline-flex":location.pathname.startsWith(m.link)?'hidden':'inline-flex'}`}
                  >
                    {m.text}
                  </span>
                </Link>
                <span
                  className="
      absolute inset-0
      rounded-xl
      bg-(--primary)/40
      blur-xl
      opacity-0
      transition-opacity duration-300
      group-hover:opacity-100
    "
                />
              </li>
            ))}
          </ul>
          <ThemeToggle className={"sm:col-span-1  "} />
        </nav>
      </Container>
      <div
        className={`fixed right-0 top-0 z-1001 bottom-0 h-screen bg-(--primary)/50 backdrop-blur-lg  transition-all duration-300 pt-2.5 px-2.5 ${isOpen ? "w-[80vw] sm:w-[50vw] translate-x-0" : "w-0 translate-x-[80vw] sm:translate-x-[50vw]"}`}
      >
        <FaWindowClose
          onClick={() => setIsOpen(false)}
          className="cursor-pointer text-(--primary) text-[20px]"
        />
        <div className="flex justify-center items-center">
          <Link
            to={"/"}
            className="inline-flex flex-col gap-1 justify-center items-center my-10"
          >
            <img
              src={siteInfo.logo}
              className="w-12.5 aspect-square rounded-full "
              loading="lazy"
            />
            <h1 className="text-(--primary) font-black">{siteInfo.title}</h1>
          </Link>
        </div>
        <ul className="flex flex-col ">
          {menu.map((m) => (
            <li className="relative group border-b-(--text) border-b last:border-b-0">
              <Link
                to={m.link}
                className={`relative z-10 flex items-center gap-2 px-3 py-2 ${
    m.link === "/" 
      ? location.pathname === "/" 
        ? "text-[25px] text-(--primary)" 
        : "text-[16px] text-(--text)"
      : location.pathname.startsWith(m.link) 
        ? "text-[25px] text-(--primary)" 
        : "text-[16px] text-(--text)"
  }`}
              >
                {m.icon}
                <span
                  className={`${m.link==='/'?location.pathname=='/' ? "hidden" : "inline-flex":location.pathname.startsWith(m.link)?'hidden':'inline-flex'} group-hover:pr-1.5 transition duration-500`}
                >
                  {m.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed z-1000 inset-0 w-screen h-screen bg-black/15 ${isOpen ? "flex" : "hidden"}`}
      />
    </header>
  );
};

export default Header;
