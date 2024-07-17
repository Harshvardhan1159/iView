import React from 'react'

const Navbar = () => {
  return (
    <>
    <header class="bg-background fixed bg-gray-100 w-full py-4 px-6 md:px-8 lg:px-10 shadow-sm">
  <div class="container mx-auto flex items-center justify-between">
    <a class="flex items-center gap-2" href="#" rel="ugc">
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
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span class="text-lg font-semibold">Acme Inc</span>
    </a>
    <nav class="hidden md:flex items-center gap-6">
      <a class="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Home
      </a>
      <a class="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Features
      </a>
      <a class="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        How It Works
      </a>
      <a class="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
        Contact Us
      </a>
    </nav>
    <div class="flex items-center gap-4">
      <button
        class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full"
        type="button"
        id="radix-:re:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <span class="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
          <img class="aspect-square h-full w-full" src="/placeholder-user.jpg" />
        </span>
        <span class="sr-only">Toggle user menu</span>
      </button>
      <div class="hidden md:flex items-center gap-4">
        <a class="text-sm font-medium hover:text-primary transition-colors" href="#" rel="ugc">
          Sign In
        </a>
        <a
          class="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          href="#"
          rel="ugc"
        >
          Sign Up
        </a>
      </div>
    </div>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 md:hidden"
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-6 w-6"
      >
        <line x1="4" x2="20" y1="12" y2="12"></line>
        <line x1="4" x2="20" y1="6" y2="6"></line>
        <line x1="4" x2="20" y1="18" y2="18"></line>
      </svg>
      <span class="sr-only">Toggle navigation menu</span>
    </button>
  </div>
</header>
    </>
  )
}

export default Navbar
