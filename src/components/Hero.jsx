const Hero = ({title,description}) => {
  return (
          <section
          className="wave-box
    relative w-full overflow-hidden
    bg-[url('/images/hero.png')]
    bg-cover bg-center bg-no-repeat
    h-150 border border-(--primary)
    pb-8
  "
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-xs" />
          <div
            className="
       relative z-30 w-full h-full flex justify-center items-center flex-col text-center text-white
      "
          >
            <h1 className="text-[18px] sm:text-[25px] font-bold mb-4">
             {title}
            </h1>
            <p className="max-w-xl ">
             {description}
            </p>
          </div>
        </section>
  )
}

export default Hero