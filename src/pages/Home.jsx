import { useEffect, useRef, useState } from "react";
import Hero from "../components/Home/Hero";
import Container from "../components/Container";
import ServiceCard from "../components/Services/ServiceCard";
import Title from "../components/Title";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import siteData from "../data/site.json";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import { FaCode, FaPalette } from "react-icons/fa";
import { TbPalette, TbTrendingUp, TbSettings } from "react-icons/tb";
import Button from "../components/Button";
import SEO from "../components/SEO";

const iconsMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  TbPalette: TbPalette,
  TbTrendingUp: TbTrendingUp,
  TbSettings: TbSettings,
};
const Home = () => {
  const services = siteData.services;
  const portfolio = siteData.portfolio;
  const aboutData = siteData.about;
  const stats = siteData.pages.home.stats;
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);
  const extractNumber = (value) => {
    if (value === "24/7") return null;

    const match = value.match(/\d+/);
    return match ? parseInt(match[0]) : 0;
  };
  const extractPrefix = (value) => {
    const match = value.match(/^[^0-9]+/);
    return match ? match[0] : "";
  };
  const extractSuffix = (value) => {
    const match = value.match(/[^0-9]+$/);
    return match ? match[0] : "";
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 },
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const targets = stats.map((stat) => extractNumber(stat.value));

    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;

      if (currentStep >= steps) {
        const newCounts = stats.map((stat, index) => {
          if (stat.value === "24/7") return counts[index];
          return targets[index]; 
        });
        setCounts(newCounts);
        clearInterval(interval);
        return;
      }

      const newCounts = targets.map((target) =>
        Math.floor((target / steps) * currentStep),
      );

      setCounts(newCounts);
    }, stepTime);

    return () => clearInterval(interval);
  },[hasAnimated,stats]);
  return (
    
  <>
      <SEO 
        title={siteData.pages.home.title}
        description={siteData.pages.home.description}
        url="/"
      />
    <div className="py-8">
      <Container>
        <Hero />
        <section ref={statsRef} className="pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((item, index) => {
              const prefix = extractPrefix(item.value);
              const suffix = extractSuffix(item.value);
              return (
                <div
                  key={index}
                  className="bg-(--surface) border border-(--primary) rounded-3xl p-6"
                >
                  <h3 className="text-3xl font-bold text-(--primary)">
                    {prefix}
                     {item.value === "24/7" 
                    ? item.value 
                    : hasAnimated 
                      ? counts[index] 
                      : '0'
                  }
                    {suffix}
                  </h3>
                  <p className="mt-2 opacity-70">{item.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="pt-8">
          <div className="flex justify-between items-center mb-3">
            <Title title={"خدمات ما"} />
            <Link to={"/services"}>
              <IoIosArrowBack
                color="var(--primary)"
                className="text-black text-[30px]"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ">
            {services.slice(0, 3).map((service) => {
              const IconComponent = iconsMap[service.icon];
              return (
                <ServiceCard
                  key={service.id}
                  {...service}
                  icon={IconComponent}
                />
              );
            })}
          </div>
        </section>
        <section className="pt-8">
          <div className="flex justify-between items-center mb-3">
            <Title title={"نمونه کار ها"} />
            <Link to={"/portfolio"}>
              <IoIosArrowBack
                color="var(--primary)"
                className="text-black text-[30px]"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3  ">
            {portfolio.slice(0, 3).map((p) => (
              <PortfolioCard className={"self-center"} key={p.id} {...p} />
            ))}
          </div>
        </section>
        <section className="pt-8">
          <Title title={"چرا ما؟"} />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {aboutData.values.map((item, index) => (
              <div
                key={index}
                className="bg-(--surface) border border-(--primary) rounded-3xl p-6"
              >
                <p className="text-[18px] sm:text-[20px] font-medium text-center">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="pt-8 text-center">
          <div className="bg-(--surface) border border-(--primary) rounded-[36px] p-10">
            <h4 className="text-2xl md:text-3xl font-semibold mb-6">
              آماده‌ای پروژه‌ت رو شروع کنیم؟
            </h4>
            <Button
              to="/contact-us"
              className="bg-(--primary) px-8 py-3 rounded-full text-black font-medium inline-block"
            >
              درخواست مشاوره رایگان
            </Button>
          </div>
        </section>
      </Container>
    </div>
  </>
  );
};

export default Home;
