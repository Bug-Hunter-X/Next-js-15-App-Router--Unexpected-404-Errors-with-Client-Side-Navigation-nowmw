# Next.js 15 App Router: Unexpected 404 Errors with Client-Side Navigation

This repository demonstrates a bug in Next.js 15's App Router where client-side navigation using `<Link>` components can unexpectedly result in 404 errors.  The issue seems to be related to how the router handles navigation when the application is already in a client-side context.  This is different to Next.js 13's behaviour where this was rare.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/about`.
5. Click the link to navigate to `/`.

The navigation to `/` should work correctly, but may result in a 404 error on certain occasions. 

## Solution
The solution involves setting the `prefetch` property of the Link component to `false` and adding a `no-prefetch` class to the Links.
