![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

# REST API

Building out a REST API with Node, Express, MongoDB (Mongoose) and TypeScript.

Credit: [TomDoesTech](https://github.com/TomDoesTech/REST-API-Tutorial-Updated)

## Dependencies

```bash
yarn add express zod config cors mongoose pino pino-pretty dayjs bcrypt jsonwebtoken lodash nanoid
```

```bash
yarn add @types/body-parser @types/config @types/cors @types/express @types/node @types/pino @types/bcrypt @types/jsonwebtoken @types/lodash @types/nanoid ts-node-dev typescript -D
```

---

## MongoDB

To be able to interact with the database, we need one or a combination of some of the products in the MongoDB ecosystem

- Shell - `mongosh` newer CLI tool
- Compass - Desktop GUI
- Atlas - Cloud GUI
- CLI for Cloud - `mongocli` to manage Atlas
- Connector for BI - further exploration for data visualisation, [connect with Power BI](https://docs.mongodb.com/bi-connector/current/connect/powerbi/)

#### Setup

##### Option 1 - _DEPRECATED_

This is deprecated since version 5.0.

- use homebrew or chocolatey to install MongoDB
- alternatively [download and install MongoDB msi](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
- use bash to run `mongo`
- `show dbs` to list databases
- pick one to use with `use <db>`

##### Option 2

- download [MongoDB Shell](https://www.mongodb.com/try/download/shell)
- _To use the MongoDB Shell, you must have a MongoDB deployment to connect to_ - [docs.mongodb](https://docs.mongodb.com/mongodb-shell/install/)
- connect to a MongoDB Atlas cluster / mongoose + express instance
- use bash to run `mongosh`

#### Option 3

- login to [Atlas](https://cloud.mongodb.com)
- create a Cluster, and within that a Database
- create a db user + password (store in `.env` as variables)
- hit connect > add IP / from anywhere > copy the connection device string to use as dbUri

---

## Tokens & Keys

Users need access and refresh tokens to connect to the database in a session.

We need public and private keys for the database to sign and verify tokens for users using JWT (jsonwebtokens).

#### Setup

- Generate a pair of keys at [cryptotools.net](https://cryptotools.net/rsagen)

The public key can be commited / visible, so we simply paste public key in template string within the 'config/default.ts' file:

```javascript
export default {
    ...
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAUo7LMGfBTx51uw0KTUfAl35M
eEAVGuD5a+dNrM9meNg97rv/nC+tveDBIKRSKXBIHUQdwYczvgkHRPAJuYwCqibr
n/viZGA4s/ECUtYqLb4r9A6t49H0K0UVWNEEzDC7onsUXkjNle3kdY/rmoSCmuKx
OOrsHTZ2Oyb0pzUciQIDAQAB
-----END PUBLIC KEY-----`,
}
```

The private key must be hidden. Use dotenv file for this:

- in proj root `yarn add dotenv`
- add `require('dotenv').config();` to top of 'config/default.ts' file
- create dotenv file with bash `touch .env`
- paste private key in '.env' as `PRIVATE_KEY`
- add `privateKey: process.env.PRIVATE_KEY`

```javascript
require('dotenv').config();

export default {
    ...
  publicKey: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCAUo7LMGfBTx51uw0KTUfAl35M
eEAVGuD5a+dNrM9meNg97rv/nC+tveDBIKRSKXBIHUQdwYczvgkHRPAJuYwCqibr
n/viZGA4s/ECUtYqLb4r9A6t49H0K0UVWNEEzDC7onsUXkjNle3kdY/rmoSCmuKx
OOrsHTZ2Oyb0pzUciQIDAQAB
-----END PUBLIC KEY-----`,
  privateKey: process.env.PRIVATE_KEY
}
```

---
