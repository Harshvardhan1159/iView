import React from "react";
import { Link } from "react-router-dom";



const iViewComponent = () => {
  return (
    <>

<div class="flex flex-col min-h-[100dvh]">

  <main class="flex-1">
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div class="flex flex-col justify-center space-y-4">
            <div class="space-y-2">
              <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Revolutionize the Interview Process with iView
              </h1>
              <p class="max-w-[600px] text-muted-foreground md:text-xl">
                iView is a web application that streamlines the online interview process, providing personalized
                practice environments and AI-driven suggestions to help candidates shine.
              </p>
            </div>
            <div class="flex flex-col gap-2 min-[400px]:flex-row">
              <a
                class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Sign Up for Users
              </a>
              <a
                class="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Sign Up for HR
              </a>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="550"
            height="550"
            alt="Hero"
            class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
          />
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div class="container px-4 md:px-6">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div>
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">For Users</h2>
              <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                iView provides a personalized practice environment to help candidates prepare for their interviews.
                With AI-driven suggestions and feedback, users can hone their skills and feel confident during the
                real interview.
              </p>
            </div>
            <ul class="grid gap-4 py-6">
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">Personalized Practice</h3>
                  <p class="text-muted-foreground">
                    Create custom interview scenarios and receive personalized feedback to improve your performance.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">AI-Driven Suggestions</h3>
                  <p class="text-muted-foreground">
                    Get AI-powered insights and recommendations to enhance your interview skills and stand out from
                    the competition.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">Collaborative Tools</h3>
                  <p class="text-muted-foreground">
                    Utilize our suite of collaborative tools, including video conferencing and real-time feedback,
                    to practice with peers and mentors.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div class="space-y-2">
              <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">For HR Professionals</h2>
              <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                iView streamlines the interview process for HR professionals, providing seamless scheduling, video
                conferencing, and advanced analytics to help you make informed hiring decisions.
              </p>
            </div>
            <ul class="grid gap-4 py-6">
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">Seamless Scheduling</h3>
                  <p class="text-muted-foreground">
                    Easily manage and coordinate interviews with candidates, ensuring a smooth and efficient
                    process.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">Video Conferencing</h3>
                  <p class="text-muted-foreground">
                    Conduct high-quality video interviews with candidates from anywhere, with features like screen
                    sharing and real-time collaboration.
                  </p>
                </div>
              </li>
              <li class="flex items-start gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-6 w-6 text-primary"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <div>
                  <h3 class="text-lg font-bold">Advanced Analytics</h3>
                  <p class="text-muted-foreground">
                    Gain valuable insights into candidate performance and make informed hiring decisions with our
                    comprehensive analytics tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">How to Use iView</h2>
          <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover how to get started with iView and leverage our powerful tools to enhance your interview
            experience.
          </p>
        </div>
        <div class="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Sign Up</h3>
              <p class="text-muted-foreground">
                Create your iView account and choose your user type (Candidate or HR).
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" x2="3" y1="12" y2="12"></line>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Log In</h3>
              <p class="text-muted-foreground">
                Access your iView dashboard and explore the features tailored to your user type.
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Utilize the Tools</h3>
              <p class="text-muted-foreground">
                Leverage our suite of collaborative tools, including personalized practice, video conferencing, and
                analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div class="container px-4 md:px-6">
        <div class="space-y-2">
          <h2 class="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
          <p class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have questions or need assistance? Get in touch with our friendly support team.
          </p>
        </div>
        <div class="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Email</h3>
              <p class="text-muted-foreground">
                <a href="#">support@iview.com</a>
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Phone</h3>
              <p class="text-muted-foreground">
                <a href="#">+1 (555) 555-5555</a>
              </p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-8 w-8 text-primary"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <h3 class="text-lg font-bold">Business Hours</h3>
              <p class="text-muted-foreground">Monday - Friday, 9am - 5pm EST</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <footer class="bg-muted p-6 md:py-12 w-full">
    <div class="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
      <div class="grid gap-1">
        <h3 class="font-semibold">Company</h3>
        <a href="#">About Us</a>
        <a href="#">Our Team</a>
        <a href="#">Careers</a>
        <a href="#">News</a>
      </div>
      <div class="grid gap-1">
        <h3 class="font-semibold">Products</h3>
        <a href="#">iView for Candidates</a>
        <a href="#">iView for HR</a>
        <a href="#">Integrations</a>
        <a href="#">Pricing</a>
      </div>
      <div class="grid gap-1">
        <h3 class="font-semibold">Resources</h3>
        <a href="#">Blog</a>
        <a href="#">Help Center</a>
        <a href="#">Webinars</a>
        <a href="#">Case Studies</a>
      </div>
      <div class="grid gap-1">
        <h3 class="font-semibold">Legal</h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Cookie Policy</a>
      </div>
      <div class="grid gap-1">
        <h3 class="font-semibold">Contact</h3>
        <a href="#">Support</a>
        <a href="#">Sales</a>
        <a href="#">Partnerships</a>
        <a href="#">Press</a>
      </div>
    </div>
  </footer>
</div>
    </>

  );
};

export default iViewComponent;
