import Container from "../components/Container";
import Hero from "../components/Hero";
import Title from "../components/Title";
import { CiCircleChevLeft } from "react-icons/ci";
import Button from "../components/Button";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import SEO from "../components/SEO";
const About = () => {
  const aboutHero = siteData.pages.about.hero;
  const about = siteData.about;
  return (
    <>
    <SEO
    title={siteData.pages.about.title}
        description={siteData.pages.about.description}
        url="/about-us"
    />
    <div className="py-8">
      <Container>
        <Hero
          title={
            <TextHighlighter highlight={"CORVEX"} text={aboutHero.title} />
          }
          description={
            <TextHighlighter highlight={"CORVEX"} text={aboutHero.subtitle} />
          }
        />
        <section className="py-8">
          <div className="mb-3 text-center">
            <Title title={"داستان ما"} />
          </div>
          <div className="max-w-125 w-full mx-auto bg-(--surface) p-5 rounded-[36px] border border-(--primary)">
            <p>
              <TextHighlighter text={about.ourStory} highlight={"CORVEX"} />
            </p>
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <div className="-mb-2.5">
              <Title title={"ارزش ها"} />
            </div>
            <ul className="w-full bg-(--surface) p-5 rounded-[36px] border border-(--primary) inline-flex flex-col gap-3">
              {about.values.map(v=> <li className=" group flex items-center gap-1.5 text-[18px]">
                <CiCircleChevLeft color="var(--primary)" />
                <span className="group-hover:-translate-x-3 transition-all duration-300">
                 {v}
                </span>
              </li>)}
          
            </ul>
          </div>
          <div>
            <div className="-mb-2.5">
              <Title title={"مهارت‌ها / تکنولوژی‌ها"} />
            </div>
            <ul className="w-full bg-(--surface) p-5 rounded-[36px] border border-(--primary) inline-flex flex-col gap-3">
              {about.skills.map((s) => (
                <li className=" group flex items-center gap-1.5 text-[18px]">
                  <CiCircleChevLeft color="var(--primary)" />
                  <span className="group-hover:-translate-x-3 transition-all duration-300">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="mt-20 text-center">
          <p className="font-medium mb-2">آماده‌ای با هم کار کنیم؟</p>
          <Button to={"/concat-us"} size="lg">
            تماس با ما
          </Button>
        </section>
      </Container>
    </div></>
  );
};

export default About;
