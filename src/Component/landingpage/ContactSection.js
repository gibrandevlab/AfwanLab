import React from 'react';
import instagramLogo from "../assets/images/instagram-svgrepo-com.svg";
import whatsappLogo from "../assets/images/whatsapp-whats-app-svgrepo-com.svg";
import githubLogo from "../assets/images/github-rounded-svgrepo-com.svg";
import linkedinLogo from "../assets/images/linkedin-svgrepo-com.svg";
import "../assets/css/ContactSection.css";
import ScriptContactSection from '../js/ScriptContactSection';

function ContactSection() {
  const { elementsRef, formRef, isVisible, addToRefs } = ScriptContactSection();

  return (
    <footer>
      <div className="ContactSection container mx-auto flex justify-center w-full">
        <section className="mb-32">
          <div
            id="map"
            className="w-full h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.9140212953755!2d107.01514737841345!3d-6.1810082090417415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6989adeb78cd01%3A0xd695395fd4895d95!2sBAKSO%20PESONA!5e0!3m2!1sid!2sid!4v1723835188939!5m2!1sid!2sid"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form ref={formRef}>
                    <div className="relative mb-6">
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="exampleInput90"
                      />
                      <label
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${isVisible ? 'slide-in' : ''}`}
                        htmlFor="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary"
                        id="exampleInput91"
                      />
                      <label
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${isVisible ? 'slide-in' : ''}`}
                        htmlFor="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className={`pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary ${isVisible ? 'slide-in' : ''}`}
                      >
                        Message
                      </label>
                    </div>
                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                      <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none checked:border-primary checked:bg-primary"
                        type="checkbox"
                        value=""
                        id="exampleCheck96"
                        defaultChecked
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck96"
                      >
                        Send me a copy of this message
                      </label>
                    </div>
                    <button
                      type="button"
                      className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <a href="https://www.instagram.com/afwan.gibran_/">
                      <div
                        ref={addToRefs}
                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                      >
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md p-4 text-primary">
                              <img src={instagramLogo} alt="Instagram" />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold">Instagram</p>
                            <p className="text-sm text-neutral-500">@afwan.gibran_</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://wa.me/+6285814701149">
                      <div
                        ref={addToRefs}
                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                      >
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md p-4 text-primary">
                              <img src={whatsappLogo} alt="Whatsapp" />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold">Whatsapp</p>
                            <p className="text-sm text-neutral-500">+62858-1470-1149</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://github.com/gibrandevlab">
                      <div
                        ref={addToRefs}
                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                      >
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md p-4 text-primary">
                              <img src={githubLogo} alt="GitHub" />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold">GitHub</p>
                            <p className="text-sm text-neutral-500">gibrandevlab</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/afwan-gibran-muhammad-al-179148271/">
                      <div
                        ref={addToRefs}
                        className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12"
                      >
                        <div className="flex items-start">
                          <div className="shrink-0">
                            <div className="inline-block rounded-md p-4 text-primary">
                              <img src={linkedinLogo} alt="LinkedIn" />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-2 font-bold">LinkedIn</p>
                            <p className="text-sm text-neutral-500">AfwanGibran</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default ContactSection;
