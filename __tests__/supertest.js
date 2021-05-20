/* eslint-disable global-require */
/* eslint-disable no-undef */
const supertest = require('supertest');
const app = require('../server/server');

const request = supertest(app);
//const request = require('supertest');
const serverAddr = 'http://localhost:3000';
const randomID = Math.round(1 + (Math.random() * (999 - 1)));

// console.log(app);

describe('Testing Routes', () => {
  afterAll(async (done) => {
    await app.close();
    done();
  });

  describe('/job', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', async (done) => {
        const response = await request.get('/job');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        done();
      });

      it('gets jobs from database as json in body of response', async (done) => {
        const response = await request.get('/job');
        expect(response.body.jobs).toBeTruthy(); // response
        done();
      });
    });

    describe('POST', () => {
      it('responds with 200 status and application/json content type', async (done) => {
        const response = await request.post('/job');
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        done();
      });

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', async (done) => {
        const response = await request.put(`/job/${randomID}`);
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        done();
      });

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('DELETE', () => {
      it('responds with 200 status and application/json content type', async (done) => {
        const response = await request.delete(`/job/${randomID}`);
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toBe('application/json; charset=utf-8');
        done();
      });

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });
  });
});

/* 

  "jest": {
    "globalSetup": "./jest-setup.js",
    "globalTeardown": "./jest-teardown.js"
  },
*/