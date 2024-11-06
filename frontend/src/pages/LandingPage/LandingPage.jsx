import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  return (
    <div className="flex flex-col bg-background min-h-screen">
      <main className="flex-1 ">
        <section className="w-full px-14 items-center  h-auto flex flex-col justify-center py-12 md:py-24 lg:py-32" data-aos="fade-up">
          <div className="container px-4 md:px-6 ">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold text-primary tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Revolutionize Your Hiring Process with iView
                  </h1>
                  <p className="max-w-[600px] text-muted md:text-xl">
                    Streamline your interviews, collaborate in real-time, and leverage AI-driven insights to make better
                    hiring decisions.
                  </p>
                </div>
                <Link to={"/selectrole"}>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <a
                      href="#"
                      className="inline-flex  h-10 items-center justify-center rounded-sm shadow-xl bg-primary px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </a>
                  </div>
                </Link>
              </div>
              <img
                src="/LandingPage1.webp"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-sm shadow-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full items-center h-auto flex flex-col justify-center bg-muted py-12 md:py-24 lg:py-32" data-aos="fade-up">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block font-bold text-accent rounded-sm shadow-xl bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl text-primary font-bold tracking-tighter sm:text-5xl">Streamline Your Hiring Process</h2>
                <p className="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  iView offers a suite of powerful features to help you conduct more efficient and insightful
                  interviews, from video conferencing to real-time code collaboration and AI-driven insights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/LandingPage2.webp"
                width="550"
                height="310"
                alt="Video Conferencing"
                className="mx-auto aspect-video overflow-hidden rounded-sm shadow-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid gap-1">
                  <h3 className="text-xl text-primary font-bold">Video Conferencing</h3>
                  <p className="text-muted">
                    Conduct face-to-face interviews with candidates from anywhere in the world, with high-quality video
                    and audio.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-primary font-bold">Real-Time Collaboration</h3>
                  <p className="text-muted">
                    Collaborate with your team in real-time, sharing screens and code snippets to evaluate candidates'
                    technical skills.
                  </p>
                </div>
                <div className="grid gap-1">
                  <h3 className="text-xl text-primary font-bold">AI-Driven Insights</h3>
                  <p className="text-muted">
                    Leverage AI-powered analytics to gain deeper insights into candidate performance and make more
                    informed hiring decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full items-center h-auto flex flex-col justify-center py-12 md:py-24 lg:py-32" data-aos="fade-up">
          <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl text-primary font-bold tracking-tighter md:text-4xl/tight">
                Streamlined Interviews, Efficient Hiring
              </h2>
              <p className="mx-auto max-w-[600px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                iView's intuitive dashboard and powerful features help you conduct interviews more efficiently, leading
                to better hiring decisions and a stronger team.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full items-center h-auto flex flex-col justify-center border-t py-12 md:py-24 lg:py-32" data-aos="fade-up">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl text-primary font-bold tracking-tighter md:text-4xl/tight">Enhance Your Hiring Efficiency</h2>
              <p className="mx-auto max-w-[600px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                iView's user-friendly dashboards and seamless workflows help you streamline your hiring process, from
                initial screening to final selection.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex gap-2">
                <input
                  className="flex h-10 w-full rounded-sm shadow-xl border border-input  px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm shadow-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary hover:bg-primary/90 h-10 px-4 py-2"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-xs text-muted">
                Sign up to get started with iView.{" "}
                <a className="underline underline-offset-2" href="#">
                  Terms &amp; Conditions
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t"></footer>
    </div>
  );
};

export default LandingPage;
