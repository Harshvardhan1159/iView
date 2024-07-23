import React from 'react'

const SuccessNotification = (props) => {
  return (
    <div>
      <div className="flex max-w-[30vw]">
        <div className="fixed bottom-2 right-2">
            <div className="bg-white rounded-lg border-gray-300 border p-3 shadow-lg">
            <div className="flex flex-row">
                <div className="px-2">
                <svg width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
                    </svg>
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

export default SuccessNotification
