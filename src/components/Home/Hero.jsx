import Button from "../Button";
import siteData from '../../data/site.json'
import TextHighlighter from "../Highlight";
const Hero = () => {
  const hero=siteData.pages.home.hero
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="wave-box overflow-hidden border border-(--primary)">
        <img src="/images/hero.png" alt="hero" className="w-full h-full object-cover" />
      </div>
      <div className=" bg-(--surface) flex items-center justify-center flex-col p-5 h-full border border-(--primary) rounded-[36px]">
        <h3 className="font-bold text-[18px] sm:text-[23px] mb-7 sm:mb-10 leading-relaxed"><TextHighlighter text={hero.title} highlight={'CORVEX'}/></h3>
        <p className="text-[16px] sm:text-[18px]">
        <TextHighlighter text={hero.subtitle} highlight={'CORVEX'}/>
        </p>
        <div className="mt-14 flex items-center  gap-3.5">
            <Button variant="outline" to={hero.secondaryButton.link}> {hero.secondaryButton.text}</Button>
            <Button size="lg" to={hero.primaryButton.link}>{hero.primaryButton.text}</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
