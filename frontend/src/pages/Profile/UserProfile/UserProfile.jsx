import React from 'react'

const UserProfile = () => {
  return (
    <div className='w-full bg-background min-h-[88vh] flex items-center'>

    <div class="max-w-6xl mr-10 ml-10 mx-auto text-primary p-6 sm:p-8 bg-card rounded-lg shadow-lg">
        <div class="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div class="flex-shrink-0">
            <span class="relative flex shrink-0 overflow-hidden rounded-full w-24 h-24 md:w-32 md:h-32">
                <img class="aspect-square h-full w-full" alt="User Avatar" src="/user.jpeg" />
            </span>
            </div>
            <div class="flex-1 grid gap-4">
            <div class="grid gap-1">
                <h1 class="text-2xl font-bold">John Doe</h1>
                <p class="text-muted">Software Engineer</p>
            </div>
            <div class="grid gap-2">
                <div class="flex items-center gap-2">
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
                    class="w-5 h-5 text-muted"
                >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>john.doe@example.com</span>
                </div>
                <div class="flex items-center gap-2">
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
                    class="w-5 h-5 text-muted"
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+1 (555) 123-4567</span>
                </div>
                <div class="flex items-center gap-2">
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
                    class="w-5 h-5 text-muted"
                >
                    <path d="m5 8 6 6"></path>
                    <path d="m4 14 6-6 2-3"></path>
                    <path d="M2 5h12"></path>
                    <path d="M7 2h1"></path>
                    <path d="m22 22-5-10-5 10"></path>
                    <path d="M14 18h6"></path>
                </svg>
                <span>English, Spanish</span>
                </div>
            </div>
            </div>
        </div>
        <div data-orientation="horizontal" role="none" class="shrink-0 bg-border h-[1px] w-full my-6"></div>
        <div class="grid gap-6">
            <div>
            <h2 class="text-lg font-semibold">About</h2>
            <p class="text-muted">
                John Doe is a skilled software engineer with 5 years of experience in the industry. He has a strong
                background in full-stack web development, with expertise in JavaScript, React, and Node.js. John is
                passionate about building scalable and user-friendly applications that solve real-world problems.
            </p>
            </div>
            <div>
            <h2 class="text-lg font-semibold">Resume</h2>
            <div class="flex items-center gap-2">
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
                class="w-5 h-5 text-muted"
                >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                </svg>
                <p>View Resume</p>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default UserProfile
