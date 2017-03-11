[![Build Status](https://travis-ci.org/maximegris/typescript-express-sequelize.svg?branch=master)](https://travis-ci.org/maximegris/typescript-express-sequelize) 
[![License](https://img.shields.io/badge/license-Apache2-blue.svg?style=flat)](https://github.com/maximegris/typescript-express-sequelize/blob/master/LICENSE.md)

# Introduction

Bootstrap easily your Typescript v2 project with NodeJS + Express + Sequelize ORM.

## Installation

Run one of the command below

```bash
npm install
```

```bash
npm install -g yarn
yarn install
```

The build tasks use **Gulp tasks runner**. Typescript is transpiled to Javascript in the /build directory.  
This sample use PostgreSQL database but you can easily change it and use your favorite relational database (npm or yarn command) :
```bash
npm install --save mysql // For both mysql and mariadb dialects
npm install --save sqlite3
npm install --save tedious // MSSQL
```

## Configure your database

Sequelize configuration and entities can be found in /Src/sqlz directory. 

| Directory | Description |
|---|---|
| config  | Your database configuration. |
| migrations  | Your database migrations scripts. Keep this files in Javascript and run sequelize db:migrate to migrate your database schema. |
| models | Sequelize entities. |

In models/ directory, the index.ts file define the DbConnection interface. When you create a new Sequelize entity, add its reference in this interface to fully use Typescript's superpower !

## Run the project

```bash
npm start
```

Your web server is now exposed on http://localhost:3000

## Create a new Sequelize Entity

```bash
npm run build
```

## Build

```bash
npm run build
```

## Questions and issues

The [github issue tracker](https://github.com/maximegris/typescript-express-sequelize/issues) is **_only_** for bug reports and feature requests.

## Roadmap
- [x] Add Sequelize Typescript example
- [ ] Add Swagger API Framework