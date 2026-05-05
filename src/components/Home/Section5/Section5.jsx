import React, { useRef } from "react";
import {
  FaLocationDot,
  FaMobileScreenButton,
  FaEnvelope,
} from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Section5 = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-[#f3eee8] py-8 flex flex-col  gap-14">
        {/* top section */}
        <section className="flex flex-col gap-4">
          <h1 className="text-5xl font-marcellus text-center">Contact Us</h1>
          <p className="text-greyColor text-center">Send Us Your Queries</p>
        </section>

        {/* Bottom Section */}
        <section>
          {/* Left Section */}
          <div className="container mx-auto flex flex-col md:flex-row px-5 ">
            <div className="flex flex-col w-[100%]  flex-1 gap-5">
              <div>
                <h1 className="text-4xl text-primary text-center md:text-start text-decoration-underline">
                  NAGAGIRI COMFORTS
                </h1>
              </div>

              <div className="flex  md:items-center md:justify-start lg:items-center lg:justify-start gap-5">
                <div className="flex flex-col gap-6 ">
                  <div className="flex items-center justify-center gap-5 md:justify-start lg-justify-start xl-justify-start">
                    <FaLocationDot />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      Hebbale Kalasa Hornadu Road Chikmagalur District - 577124
                    </h1>
                  </div>
                  <div className="flex items-center justify-center md:justify-start lg-justify-start xl-justify-start gap-5">
                    <FaEnvelope />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      E-mail: adishjain73@gmail.com
                    </h1>
                  </div>
                  <div className="flex items-center justify-center md:justify-start lg-justify-start xl-justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      +91 903 509 0689{" "}
                    </h1>
                  </div>
                  {/* <div className="flex items-center justify-center md:justify-start lg-justify-start xl-justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      +91 944 834 8106
                    </h1>
                  </div>
                  <div className="flex items-center justify-center md:justify-start lg-justify-start xl-justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      +91 826 327 4036
                    </h1>
                  </div>
                  <div className="flex items-center justify-center md:justify-start lg-justify-start xl-justify-start gap-5">
                    <FaMobileScreenButton />
                    <h1 className="text-center md:text-start lg:text-start xl:text-start">
                      +91 944 831 8713
                    </h1>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 shadow-lg py-3 px-5 mt-10 md:mt-0 lg:mt-0 xl:mt-0 w-[100%] bg-slate-300">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col justify-center items-start gap-5 ">
                  <div className="flex flex-col gap-2">
                    <label>Name</label>
                    <input
                      type="text"
                      name="user_name"
                      className="md:w-[500px] p-2 w-[300px]"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Email</label>
                    <input
                      type="email"
                      className="md:w-[500px] p-2 w-[300px]"
                      name="user_email"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label>Message</label>
                    <textarea
                      name="message"
                      className="w-[300px] md:w-[500px] p-2"
                    />
                  </div>
                  <div>
                    <input
                      className="py-2 px-6 bg-primary text-white hover:bg-white hover:text-black cursor-pointer"
                      type="submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Section5;
