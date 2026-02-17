import { useMemo, useState } from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import { CiFilter } from "react-icons/ci";
import Button from "../components/Button";
import siteData from "../data/site.json";
import PortfolioCard from "../components/portfolio/PortfolioCard";
import TextHighlighter from "../components/Highlight";
import SEO from "../components/SEO";
const Portfolio = () => {
  const [showFilterBtns, setShowFilterBtns] = useState(true);
  const [filter, setFilter] = useState("همه");
  const portfolioHero = siteData.pages.portfolio.hero;
  const portfolioItems = siteData.portfolio;
  const categories = useMemo(() => {
    return ["همه", ...new Set(portfolioItems.map((item) => item.category))];
  }, [portfolioItems]);

  return (
    <>
      <SEO
        title={siteData.pages.portfolio.title}
        description={siteData.pages.portfolio.description}
        url="/portfolio"
      />
      <div className="py-8">
        <Container>
          <Hero
            title={portfolioHero.title}
            description={portfolioHero.subtitle}
          />
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-8 justify-center">
            <Button onClick={() => setShowFilterBtns((prev) => !prev)}>
              <CiFilter size={20} />
            </Button>
            <div
              className={`${showFilterBtns ? "opacity-100 w-fit -translate-x-fit" : "opacity-0 w-fit translate-x-0"} transition-all duration-500`}
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {categories.map((cat) => (
                  <Button
                    variant={filter == cat ? "outline" : "ghost"}
                    key={cat}
                    onClick={() => setFilter(cat)}
                    disabled={showFilterBtns ? false : true}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          {portfolioItems.length ? (
            <div className="pt-5 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filter === "همه"
                ? portfolioItems.map((p) => <PortfolioCard key={p.id} {...p} />)
                : portfolioItems
                    .filter((p) => p.category === filter)
                    .map((p) => <PortfolioCard key={p.id} {...p} />)}
            </div>
          ) : (
            <div className="px-2.5 text-center py-1 my-8 bg-(--surface) rounded-(36px) border border-(--primary)">
              <TextHighlighter
                text={`نمونه کار با دسته بندی ${filter} یافت نشد.`}
                highlight={filter}
              />
            </div>
          )}

          <section className=" bg-(--surface)  py-12 text-center rounded-xl  border border-(--primary)">
            <h5 className="text-[20px] font-medium mb-4">
              آیا آماده شروع پروژه خود هستید؟
            </h5>
            <p className="text-[15px] mb-6">
              با تیم ما تماس بگیرید تا ایده شما را به واقعیت تبدیل کنیم.
            </p>
            <Button to="/contact-us" variant="primary">
              تماس با ما
            </Button>
          </section>
        </Container>
      </div>
    </>
  );
};

export default Portfolio;
