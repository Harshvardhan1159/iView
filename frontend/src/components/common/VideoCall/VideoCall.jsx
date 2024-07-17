import React from 'react'

const VideoCall = () => {
  return (
    <>
        <div class="flex w-full items-center overflow-hidden justify-center bg-muted">
        <div class="flex flex-col w-full bg-gray-400 max-w-4xl grid-cols-2 gap-4 rounded-xl bg-background p-6 shadow-lg">
            <div class="relative bg- h-[200px] w-full overflow-hidden rounded-lg">
                <span class="h-full w-full object-cover rounded-md bg-muted"></span>
                <div class="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span class="relative flex h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full border-4 border-background">
                    <img class="aspect-square h-full w-full" alt="User" src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png" />
                    </span>
                </div>
            </div>
            <div class="relative h-[200px] w-full overflow-hidden rounded-lg">
                <span class="h-full w-full object-cover rounded-md bg-muted"></span>
                <div class="absolute inset-0 flex items-center justify-center bg-black/50">
                    <span class="relative flex h-[80px] w-[80px] shrink-0 overflow-hidden rounded-full border-4 border-background">
                    <img class="aspect-square h-full w-full" alt="Client" src="https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png" />
                    </span>
                </div>
            </div>
            <div class="col-span-2 flex items-center justify-center gap-4">
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
                    class="h-6 w-6"
                    >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                    <span class="sr-only">Mute microphone</span>
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
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
                    class="h-6 w-6"
                    >
                    <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                    <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                    </svg>
                    <span class="sr-only">Mute camera</span>
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 w-10 rounded-full"></button>
            </div>
        </div>
        </div>
    </>
  )
}

export default VideoCall
