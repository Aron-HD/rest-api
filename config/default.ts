// config npm docs
require('dotenv').config();

export default {
  port: 1337,
  dbUri: 'mongodb://localhost:27017/rest-api-tutorial',
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAUo7LMGfBTx51uw0KTUfAl35M
eEAVGuD5a+dNrM9meNg97rv/nC+tveDBIKRSKXBIHUQdwYczvgkHRPAJuYwCqibr
n/viZGA4s/ECUtYqLb4r9A6t49H0K0UVWNEEzDC7onsUXkjNle3kdY/rmoSCmuKx
OOrsHTZ2Oyb0pzUciQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: process.env.PRIVATE_KEY
};
