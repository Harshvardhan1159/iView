import React from 'react'

const ErrorNotification = (props) => {
  return (
    <div>
      <div className="flex max-w-[30vw]">
        <div className="fixed bottom-2 right-2">
            <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
            <div className="flex flex-row">
                <div className="px-2">
                <svg class="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="12" />  <line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                </div>
                <div className="ml-2 mr-6">
                <span className="font-semibold">{props.notification}</span>
                <span className="block text-muted">{props.message}</span>
                </div>
            </div>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 text-muted-foreground">
            <svg class="h-6 w-6 text-neutral-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ErrorNotification
