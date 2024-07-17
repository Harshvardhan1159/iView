import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className="bg-background fixed bg-gray-100 w-full py-4 px-6 md:px-8 lg:px-10 shadow-sm">
  <div className="container mx-auto flex items-center justify-between">
    <a className="flex items-center gap-2" href="#" rel="ugc">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span className="text-lg font-semibold">Acme Inc</span>
    </a>
    <nav className="hidden md:flex items-center gap-6">
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Home
      </a>
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Features
      </a>
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        How It Works
      </a>
      <a className="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Contact Us
      </a>
    </nav>
    <div className="flex items-center gap-4">
      <button
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
        type="button"
        id="radix-:re:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
          <img className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
        </span>
        <span className="sr-only">Toggle user menu</span>
      </button>
      <div className="hidden md:flex items-center gap-4">
        <a className="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
          Sign In
        </a>
        <a
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="#"
          rel="ugc"
        >
          Sign Up
        </a>
      </div>
    </div>
    <button
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
      type="button"
      aria-haspopup="dialog"
      aria-expanded="false"
      aria-controls="radix-:rg:"
      data-state="closed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
      <span className="sr-only">Toggle navigation menu</span>
    </button>
  </div>
</header>
    </>
  )
}

export default Navbar
