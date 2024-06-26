import app from './app';
import fs from 'fs';
import https from 'https';

const privateKey = fs.readFileSync(
  '/etc/letsencrypt/live/misael.ddns.net/privkey.pem',
  'utf8'
);
const certificate = fs.readFileSync(
  '/etc/letsencrypt/live/misael.ddns.net/fullchain.pem',
  'utf8'
);

const credentials = { key: privateKey, cert: certificate };

const port = 5000;

const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, (): void => {
  console.log(`Server is running at http://localhost:${port}`);
});
