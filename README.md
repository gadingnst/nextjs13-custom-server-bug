# Passport Frontend

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description
Bug: All environment variables become `undefined` while using custom server only on development after upgrade to NextJS 13.
Expected: Environment Variables doesn't `undefined`.

Note: It still works when you downgrade to `NextJS 12.3.1`

https://github.com/vercel/next.js/issues/42778
