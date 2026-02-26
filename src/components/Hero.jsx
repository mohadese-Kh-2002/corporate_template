import Button from "./Button"
import SiteData from '../data/site.json'
import { useLocation } from "react-router-dom"



const Hero = ({title,description}) => {
  const {pathname}=useLocation()
  const Hero=SiteData.pages
  const imageUri=Hero[pathname.split('/')[1]]?.hero.backgroundImage ?? '/images/hero.png'

  return (
          <section
          className={`
            wave-box
    relative w-full overflow-hidden
    
    bg-cover bg-center bg-no-repeat
    h-150 border border-(--primary)
    pb-8
            `}
            style={{ backgroundImage: `url(${imageUri})` }}
            
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
          <div
            className="
       relative z-30 w-full h-full flex justify-center items-center flex-col text-center text-white
      "
          >
            <h1 className="text-[20px] sm:text-[30px] font-bold mb-4">
             {title}
            </h1>
            <p className="max-w-xl ">
             {description}
            </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Button to="/contact_us" size="md">
          شروع همکاری
        </Button>
        <Button to="/portfolio" size="md" variant="outline">
          نمونه کارها
        </Button>
      </div>
          </div>
         
        </section>
  )
}

export default Hero