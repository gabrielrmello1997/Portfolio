"use client";

import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};



export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  
  async function onSubmit(data: FormData) {
    setSubmitError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      reset();
      setIsSubmitted(true);
      return;
    }

    const result = await response.json().catch(() => null);
    setSubmitError(result?.error ?? "Failed to send message. Please try again.");
  }
  return (
    <div id="contact" className="w-full mx-auto flex flex-col xl:flex-row gap-10 lg:gap-[82px] h-fit scroll-mt-6 md:scroll-mt-10">
      <div className="flex flex-col gap-10 md:gap-[72px] flex-1 min-w-0">
        <div className="flex flex-col gap-5 sm:gap-[28px]">
          <h2 className="text-[40px] sm:text-[50px] md:text-[60px] leading-[120%] tracking-[1%]">
            Let's Work <span className="text-primary-orange">Together</span>
          </h2>
          <p className="text-sm sm:text-[16px] leading-[140%] tracking-[1%] text-paragraph-grey">
            Have a project in mind or need help building something great? Let's
            connect and bring your ideas to life.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-[38px]">
          <div className="flex items-center gap-3 sm:gap-[12px]">
            <MdOutlineMailOutline className="text-2xl sm:text-[32px] text-primary-orange shrink-0" />
            <div className="flex flex-col gap-1 sm:gap-[4px] leading-[140%] tracking-[1%] min-w-0">
              <p className="text-sm sm:text-[16px] text-paragraph-grey">Email</p>
              <Link href="mailto:gabrielrmello1997@gmail.com" className="text-xs sm:text-[14px] text-foreground break-all hover:text-primary-orange transition-colors">
                gabrielrmello1997@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-[12px]">
            <FaLinkedinIn className="text-2xl sm:text-[32px] text-primary-orange shrink-0" />
            <div className="flex flex-col gap-1 sm:gap-[4px] leading-[140%] tracking-[1%] min-w-0">
              <p className="text-sm sm:text-[16px] text-paragraph-grey">LinkedIn</p>
              <Link href="https://www.linkedin.com/in/gabriel-mello-963a3b1b0" target="_blank" className="text-xs sm:text-[14px] text-foreground break-all hover:text-primary-orange transition-colors">
                linkedin.com/in/gabriel-mello-963a3b1b0
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-[12px]">
            <IoLogoGithub className="text-2xl sm:text-[32px] text-primary-orange shrink-0" />
            <div className="flex flex-col gap-1 sm:gap-[4px] leading-[140%] tracking-[1%] min-w-0">
              <p className="text-sm sm:text-[16px] text-paragraph-grey">GitHub</p>
              <Link href="https://github.com/gabrielrmello1997" target="_blank" className="text-xs sm:text-[14px] text-foreground break-all hover:text-primary-orange transition-colors">
                github.com/gabrielrmello1997
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full lg:min-w-[380px] lg:max-w-[480px] py-6 sm:py-[36px] px-5 sm:px-[48px] bg-primary-blue rounded-[20px] border border-[#a8a8a82d]">
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center justify-center gap-[14px] min-h-[320px]">
            <h3 className="text-2xl sm:text-[28px] leading-[120%] tracking-[1%] text-primary-orange">
              Thank You!
            </h3>
            <p className="text-sm sm:text-[16px] leading-[140%] tracking-[1%] text-paragraph-grey">
              Your message has been sent successfully. I&apos;ll get back to you
              as soon as possible.
            </p>

          </div>
        ) : (
        <>
        <h2 className="text-2xl sm:text-[28px] leading-[120%] tracking-[1%]">
          Get In Touch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 sm:gap-[28px] mt-6 sm:mt-[36px]">
          <div className="flex flex-col gap-3 sm:gap-[12px]">
            <label
              htmlFor="name"
              className="text-sm sm:text-[14px] leading-[140%] tracking-[1%]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
              className="w-full p-3 sm:p-[14px] bg-primary-blue rounded-[6px] border border-[#a8a8a82d] placeholder:text-[14px] placeholder:font-light placeholder:text-paragraph-grey"
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-[12px]">
            <label
              htmlFor="email"
              className="text-sm sm:text-[14px] leading-[140%] tracking-[1%]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full p-3 sm:p-[14px] bg-primary-blue rounded-[6px] border border-[#a8a8a82d] placeholder:text-[14px] placeholder:font-light placeholder:text-paragraph-grey"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <div className="flex flex-col gap-3 sm:gap-[12px]">
            <label
              htmlFor="message"
              className="text-sm sm:text-[14px] leading-[140%] tracking-[1%]"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell me about your project..."
              className="w-full p-3 sm:p-[14px] bg-primary-blue rounded-[10px] border border-[#a8a8a82d] placeholder:text-[14px] placeholder:font-light placeholder:text-paragraph-grey"
              rows={4}
              {...register("message", { required: "Message is required" })}
            />
          </div>
          {submitError && (
            <p className="text-sm text-primary-orange leading-[140%] tracking-[1%]">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 sm:gap-[8px] w-full p-3 sm:p-[14px] bg-linear-to-r from-primary-orange to-[#8C3D23] hover:scale-103 transition-all duration-300 cursor-pointer rounded-[10px] text-sm sm:text-[16px] leading-[140%] tracking-[1%] text-foreground"
          >
            {isSubmitting ? "Sending..." : "Send Message"} <FiArrowUpRight className="text-lg sm:text-[20px]" />
          </button>
        </form>
        </>
        )}
      </div>
    </div>
  );
}
