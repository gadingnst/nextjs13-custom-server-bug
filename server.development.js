/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* eslint-disable no-console */

const fs = require('fs');
const https = require('https');
const path = require('path');
const express = require('express');
const next = require('next');
const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const PORT = 3000;
const app = next({ dev: true });
const handler = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '/localcertificate/certificate.key')),
  cert: fs.readFileSync(path.join(__dirname, '/localcertificate/certificate.crt')),
  requestCert: false,
  rejectUnauthorized: false
};

app.prepare().then(() => {
  const server = express();

  server.all('*', handler);

  https.createServer(httpsOptions, server).listen(PORT, () => {
    console.log(`=======> HTTPS server started, App now running on port https://local.orami.co.id:${PORT} <=======`);
    process.on('unhandledRejection', (reason, p) => {
      console.log('==== > Unhandled Rejection at: Promise', p, '\n===== > reason:', reason);
      console.log(reason);
    });
  });
});
