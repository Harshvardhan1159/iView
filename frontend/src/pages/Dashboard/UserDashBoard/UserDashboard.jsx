import React from 'react'
import UserProfile from '../../Profile/UserProfile/UserProfile'

const UserDashboard = () => {
  return (
    <>
        <div class="flex flex-col w-full bg-background min-h-screen bg-muted/40">
            <UserProfile/>
            <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div class="max-w-6xl w-full mx-auto">
                <div class="rounded-lg border bg-card text-primary shadow-sm" data-v0-t="card">
                    <div class="space-y-1.5 p-6 flex flex-row items-center gap-4 pb-4">
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
                        class="w-8 h-8 text-primary"
                    >
                        <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
                    </svg>
                    <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                        Recent Interview Activity
                    </h3>
                    </div>
                    <div class="p-6">
                    <div class="relative w-full overflow-auto">
                        <table class="w-full caption-bottom text-sm">
                        <thead class="[&amp;_tr]:border-b">
                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <th class="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                                Company
                            </th>
                            <th class="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                                Date
                            </th>
                            <th class="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                                Status
                            </th>
                            <th class="h-12 px-4 text-left align-middle font-medium text-muted [&amp;:has([role=checkbox])]:pr-0">
                                Actions
                            </th>
                            </tr>
                        </thead>
                        <tbody class="[&amp;_tr:last-child]:border-0">
                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div class="font-medium">John Doe</div>
                                <div class="text-sm text-muted">Software Engineer</div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-05-15</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div
                                class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-primary hover:bg-secondary/80"
                                data-v0-t="badge"
                                >
                                Completed
                                </div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10">
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
                                    class="w-4 h-4"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span class="sr-only">View Interview</span>
                                </button>
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10">
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
                                    class="w-4 h-4"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                <span class="sr-only">Download Interview</span>
                                </button>
                            </td>
                            </tr>
                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div class="font-medium">Sarah Lee</div>
                                <div class="text-sm text-muted">Frontend Developer</div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-08-01</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div
                                class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text"
                                data-v0-t="badge"
                                >
                                Scheduled
                                </div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10">
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
                                    class="w-4 h-4"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span class="sr-only">View Interview</span>
                                </button>
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10">
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
                                    class="w-4 h-4"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line>
                                </svg>
                                <span class="sr-only">Download Interview</span>
                                </button>
                            </td>
                            </tr>
                            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div class="font-medium">Alex Nguyen</div>
                                <div class="text-sm text-muted">Data Analyst</div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2023-07-20</td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <div
                                class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text"
                                data-v0-t="badge"
                                >
                                In Progress
                                </div>
                            </td>
                            <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10">
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
                                    class="w-4 h-4"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span class="sr-only">View Interview</span>
                                </button>
                                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent h-10 w-10"></button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
    </>
  )
}

export default UserDashboard
