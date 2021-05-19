/* eslint-disable global-require */
/* eslint-disable no-undef */
const request = require('supertest');

let server;
const serverAddr = 'http://localhost:3000';

beforeAll(async () => { server = require('../server/server'); });

afterAll(async () => {
  await server.close();
});

describe('Testing Routes', () => {
  describe('/job', () => {
    describe('GET', () => {
      xit('responds with 200 status and application/json content type', () => request(serverAddr)
        .get('/job')
        .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('jobs from "DB" json are in body of response', () => {
      });
    });

    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .post('/job')
        .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .put('/job')
        .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('DELETE', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .delete('/job')
        .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });
  });
});
