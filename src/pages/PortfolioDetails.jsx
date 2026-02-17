import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import siteData from "../data/site.json";
import Container from "../components/Container";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { CiCircleChevLeft } from "react-icons/ci";
import SEO from '../components/SEO'
const PortfolioDetails = () => {
  const { id } = useParams();

  const portfolioItems = siteData.portfolio;
  const portfolioItem = portfolioItems.find(
    (p) => p.id === Number(id)
  );

  if (!portfolioItem) {
    return <div className="py-8 text-center">پروژه پیدا نشد</div>;
  }

  return (
 <>  
 <SEO 
        title={siteData.pages.portfolio.title}
        description={siteData.pages.portfolio.description}
        url={`/portfolio/${id}`}
      />
  <div className="py-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          
          <div>
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {portfolioItem.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="rounded-[36px] overflow-hidden border border-(--primary)">
                    <img src={img} alt="portfolio" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="bg-(--surface) rounded-[36px] border border-(--primary) flex flex-col gap-7 p-6">
         
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
  پروژه
              </span>
              <h5 className="font-semibold text-[20px] pr-5">
                {portfolioItem.title}
              </h5>
            </div>

        
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
                دسته بندی
              </span>
              <span className="block font-medium pr-5">
                {portfolioItem.category}
              </span>
            </div>

        
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
                توضیحات
              </span>
              <p className="pr-5 leading-7">
                {portfolioItem.description}
              </p>
            </div>

           
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
                چالش پروژه
              </span>
              <p className="pr-5 leading-7">
                {portfolioItem.challenge}
              </p>
            </div>

           
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
                راه‌حل ما
              </span>
              <p className="pr-5 leading-7">
                {portfolioItem.solution}
              </p>
            </div>

            
            <div>
              <span className="wave-box text-white bg-(--primary) p-2.5 mb-3 inline-flex">
                تکنولوژی ها
              </span>
              <ul className="pr-5 space-y-2">
                {portfolioItem.technologies.map((t, index) => (
                  <li
                    key={index}
                    className="group flex items-center gap-1.5 text-[18px]"
                  >
                    <CiCircleChevLeft color="var(--primary)" />
                    <span className="group-hover:-translate-x-3 transition-all duration-300">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {portfolioItem.result && (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {portfolioItem.result.map((r, index) => (
              <div
                key={index}
                className="bg-(--surface) border border-(--primary) rounded-3xl p-6 text-center"
              >
                <h5 className="text-3xl font-bold text-(--primary)">
                  {r.value}
                </h5>
                <p className="mt-2 text-sm opacity-70">
                  {r.label}
                </p>
              </div>
            ))}

          </div>
        )}
      </Container>
    </div></>
  );
};

export default PortfolioDetails;
