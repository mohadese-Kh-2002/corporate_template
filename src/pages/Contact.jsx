import  { useState } from "react"; 
import Container from "../components/Container";
import Hero from "../components/Hero";
import Button from "../components/Button";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import siteData from "../data/site.json";
import TextHighlighter from "../components/Highlight";
import { useForm } from 'react-hook-form';
import SEO from "../components/SEO";

const Contact = () => {
  const contact = siteData.contact;
  const contactHero = siteData.pages.contact.hero;
  
  
  const [submitError, setSubmitError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); 
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset 
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = async (data) => {
  
    setSubmitError("");
    
    try {
      const response = await fetch(contact.formUri, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "تماس جدید از سایت CORVEX", 
          _replyto: data.email 
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || "خطا در ارسال");
      }
      
    
      reset();
      setModalType("success");
      setShowModal(true);
      
     
      setTimeout(() => {
        setShowModal(false);
        setModalType("");
      }, 3000);
      
    } catch (error) {
      console.error("خطا در ارسال فرم:", error);
      setSubmitError(error.message || "مشکلی پیش اومد");
      setModalType("error");
      setShowModal(true);
      
      setTimeout(() => {
        setShowModal(false);
        setModalType("");
      }, 3000);
    }
  };

  return (
<>   
<SEO
        title={siteData.pages.contact.title}
        description={siteData.pages.contact.description}
        url="/contact-us"
      />
 <div className="py-8">
      <Container>
        <Hero
          title={
            <TextHighlighter text={contactHero.title} highlight={"CORVEX"} />
          }
          description={
            <TextHighlighter text={contactHero.subtitle} highlight={"CORVEX"} />
          }
        />
        <div className="inline-flex border border-(--primary) items-center gap-2 mt-8 bg-(--surface) px-5 py-2 rounded-[36px]">
          <HiPhone color="var(--primary)" />
          <span>پاسخگویی حداکثر تا ۲۴ ساعت کاری</span>
        </div>
        

        {submitError && !showModal && (
          <div className="mt-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-center">
            <p className="text-red-700">{submitError}</p>
          </div>
        )}
        
        <section className="grid grid-cols-1 md:grid-cols-4 pt-8 gap-5">
          <div className="p-5 col-span-2 lg:col-span-3 border border-(--primary) bg-(--surface) rounded-[36px]">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
             
              <div className="flex flex-col gap-2">
                <label htmlFor="name">اسمتو بنویس: </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { 
                    required: "نام الزامی است",
                    minLength: {
                      value: 2,
                      message: "نام باید حداقل ۲ حرف باشد"
                    }
                  })}
                  className={`outline-none rounded-lg py-1.5 px-1 bg-(--bg)/80 
                    border border-white/10
                    focus:border-(--primary)
                    focus:ring-2 focus:ring-(--primary)/30
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.name ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>
              
            
              <div className="flex flex-col gap-2">
                <label htmlFor="email">ایمیلتو بنویس: </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { 
                    required: "ایمیل الزامی است",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "ایمیل معتبر وارد کنید"
                    }
                  })}
                  className={`outline-none rounded-lg py-1.5 px-1 bg-(--bg)/80 
                    border border-white/10
                    focus:border-(--primary)
                    focus:ring-2 focus:ring-(--primary)/30
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.email ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              
           
              <div className="flex flex-col gap-2">
                <label htmlFor="message">پیامتو بنویس: </label>
                <textarea
                  id="message"
                  rows="5"
                  {...register("message", { 
                    required: "پیام الزامی است",
                    minLength: {
                      value: 10,
                      message: "پیام باید حداقل ۱۰ حرف باشد"
                    },
                    maxLength: {
                      value: 500,
                      message: "پیام نمی‌تواند بیشتر از ۵۰۰ حرف باشد"
                    }
                  })}
                  className={`outline-none resize-y min-h-38 rounded-lg p-2 bg-(--bg)/80  
                    border border-white/10
                    focus:border-(--primary)
                    focus:ring-2 focus:ring-(--primary)/30
                    transition-all
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${errors.message ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>
              
          
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`shadow-[0_5px_10px_-5px_(--primary)]
                  hover:scale-[1.02] transition
                  ${isSubmitting && 'opacity-50 cursor-not-allowed' }`}
                variant="primary"
                size="lg"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    در حال ارسال...
                  </span>
                ) : 'بفرستش'}
              </Button>
            </form>
          </div>
          
 
          <div className="space-y-6 p-5 border border-(--primary) bg-(--surface) rounded-[36px] col-span-2 lg:col-span-1">
            <div>
              <ul className="flex flex-col gap-3 text-[14px] items-center">
                <li className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <HiPhone className="text-(--primary)" />
                    <span>تلفن:</span>
                  </div>
                  <span>{contact.phone}</span>
                </li>
                <li className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <MdOutlineAlternateEmail className="text-(--primary)" />
                    <span>ایمیل:</span>
                  </div>
                  <span>{contact.email}</span>
                </li>
                <li className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <IoLocationOutline className="text-(--primary)" />
                    <span>آدرس:</span>
                  </div>
                  <p className="text-center">{contact.address}</p>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 justify-center mt-7">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaInstagram />
              </a>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href={contact.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaTelegramPlane />
              </a>
              <a
                href={contact.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-(--bg) hover:bg-(--primary) hover:text-white transition"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </section>
      </Container>

 
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className={`p-8 rounded-[36px] border text-center bg-(--surface) max-w-md mx-4
            ${modalType === 'success' ? 'border-green-500' : 'border-red-500'}`}
          >
            {modalType === 'success' ? (
              <>
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-[25px] font-bold text-green-500 mb-4">
                  با تشکر از شما!
                </h2>
                <p className="opacity-80">
                  پیام شما با موفقیت ارسال شد. در اولین فرصت پاسخگو خواهیم بود.
                </p>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">❌</div>
                <h2 className="text-[25px] font-bold text-red-500 mb-4">
                  خطا در ارسال
                </h2>
                <p className="opacity-80">
                  {submitError || "مشکلی پیش اومد. دوباره تلاش کنید."}
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  بستن
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div></>
  );
};

export default Contact;