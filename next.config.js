/* eslint-disable @typescript-eslint/no-var-requires */
const headers = require('./headers.config');

/** @type {import('next').NextConfig } */
const nextConfig = {
  headers,
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx']
};

module.exports = nextConfig;
