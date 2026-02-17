import Container from "../components/Container";
import ServiceCard from "../components/Services/ServiceCard";
import Title from "../components/Title";
import { CiCircleChevLeft } from "react-icons/ci";
import Button from "../components/Button";
import Hero from "../components/Hero";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import { FaCode, FaPalette } from "react-icons/fa";
import { TbPalette, TbTrendingUp, TbSettings } from "react-icons/tb";
import SEO from "../components/SEO";

const iconsMap = {
  FaCode: FaCode,
  FaPalette: FaPalette,
  TbPalette: TbPalette,
  TbTrendingUp: TbTrendingUp,
  TbSettings: TbSettings,
};

const Services = () => {
  const services = siteData.services;
  const serviceHero = siteData.pages.services.hero;
  const aboutValue = siteData.about.values;
  return (
    <>
      <SEO
        title={siteData.pages.services.title}
        description={siteData.pages.services.description}
        url="/services"
      />
      <div className="py-8">
        <Container>
          <Hero
            title={serviceHero.title}
            description={
              <TextHighlighter
                text={serviceHero.subtitle}
                highlight={"corvex"}
              />
            }
          />
          <section className="pb-8 pt-8">
            <div className="mb-3 flex justify-center">
              <Title title={"خدمات ما"} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {services.map((service) => {
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
        </Container>
        <div className="border-t border-b border-(--primary) py-5">
          <Container>
            <section className="flex flex-col lg:flex-row  items-start lg:items-center justify-between gap-10">
              <div>
                <h5 className="text-[18px] sm:text-[25px] mb-5">
                  <TextHighlighter text={"چرا CORVEX ؟"} highlight={"corvex"} />
                </h5>
                <ul className="flex flex-col gap-3">
                  {aboutValue.map((v) => (
                    <li className=" group flex items-center gap-1.5 text-[18px]">
                      <CiCircleChevLeft color="var(--primary)" />
                      <span className="group-hover:-translate-x-3 transition-all duration-300">
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="text-[18px] sm:text-[25px] mb-5">
                  فرآیند همکاری
                </h5>
                <ul className="flex flex-col gap-3">
                  <li className="group flex items-center gap-1.5 text-[18px]">
                    <CiCircleChevLeft color="var(--primary)" />
                    <span className="group-hover:-translate-x-3 transition-all duration-300">
                      بررسی نیاز
                    </span>
                  </li>
                  <li className="group flex items-center gap-1.5 text-[18px]">
                    <CiCircleChevLeft color="var(--primary)" />
                    <span className="group-hover:-translate-x-3 transition-all duration-300">
                      طراحی و برنامه‌ریزی
                    </span>
                  </li>
                  <li className="group flex items-center gap-1.5 text-[18px]">
                    <CiCircleChevLeft color="var(--primary)" />
                    <span className="group-hover:-translate-x-3 transition-all duration-300">
                      توسعه و تست
                    </span>
                  </li>
                  <li className="group flex items-center gap-1.5 text-[18px]">
                    <CiCircleChevLeft color="var(--primary)" />
                    <span className="group-hover:-translate-x-3 transition-all duration-300">
                      تحویل و پشتیبانی
                    </span>
                  </li>
                </ul>
              </div>

              <div className=" flex flex-col self-center lg:self-end ">
                <p className="text-center">
                  آماده شروع پروژه هستید؟ همین حالا با ما تماس بگیرید
                </p>
                <div className="mt-3 text-center">
                  <Button to={"/contact-us"} size="lg">
                    تماس با ما
                  </Button>
                </div>
              </div>
            </section>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Services;
