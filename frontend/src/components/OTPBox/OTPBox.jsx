import React from 'react'

const OTPBox = (props) => {
  return (
    <div className='w-[100vw] z-10 bg-gray-500 bg-opacity-35 h-[88vh] flex items-center justify-center fixed'>
      <div className="rounded-lg border bg-card text-card shadow-sm w-full max-w-md" data-v0-t="card">
      
        <div className="flex flex-col space-y-1.5 p-6">
        <button onClick={props.closeBox} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute top-2 right-2 text-muted-foreground">
            <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </button>
          <h3 className="whitespace-nowrap text-2xl text-accent font-semibold leading-none tracking-tight text-center">
            Confirm Phone Number
          </h3>
          <p className="text-sm text-primary text-center">
            Enter the 6-digit code sent to your phone number to confirm your identity.
          </p>
        </div>
        <div className="p-6 space-y-4 flex flex-col items-center">
          <div
            data-input-otp-container="true"
            className="flex items-center gap-2"
            style={{
              position: 'relative',
              cursor: 'text',
              userSelect: 'none',
              pointerEvents: 'none',
              '--root-height': '40px'
            }}
          >
            <div className="flex items-center">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md"
                ></div>
              ))}
            </div>
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                pointerEvents: 'none'
              }}
            >
              <input
                autoComplete="one-time-code"
                data-input-otp="true"
                inputMode="numeric"
                pattern="^d+$"
                maxLength="6"
                value=""
                data-input-otp-mss="0"
                data-input-otp-mse="0"
                style={{
                  position: 'absolute',
                  inset: '0px',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  textAlign: 'left',
                  opacity: 1,
                  color: 'transparent',
                  pointerEvents: 'all',
                  background: 'transparent',
                  caretColor: 'transparent',
                  border: '0px solid transparent',
                  outline: 'transparent solid 0px',
                  boxShadow: 'none',
                  lineHeight: 1,
                  letterSpacing: '-0.5em',
                  fontSize: 'var(--root-height)',
                  fontFamily: 'monospace',
                  fontVariantNumeric: 'tabular-nums'
                }}
              />
            </div>
          </div>
          <button
            className="mt-4 inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-primary rounded-md shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            Verify OTP
          </button>
        </div>
      </div>
    </div>
  )
}

export default OTPBox
