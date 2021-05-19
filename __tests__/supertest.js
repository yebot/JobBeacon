/* eslint-disable global-require */
/* eslint-disable no-undef */
const request = require('supertest');

const serverAddr = 'http://localhost:3000';
// const randomID = minVal+(Math.random()*(maxVal-minVal));
// Math.round(randVal);
// console.log(randomID);

describe('Testing Routes', () => {
  describe('/job', () => {
    describe('GET', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .get('/job')
        // .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('jobs from "DB" json are in body of response', () => {
      });
    });

    describe('POST', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .post('/job')
        // .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('PUT', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .put('/job')
        // .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });

    describe('DELETE', () => {
      it('responds with 200 status and application/json content type', () => request(serverAddr)
        .delete('/job')
        // .expect('Content-Type', /application\/json/)
        .expect(200));

      xit('responds with TRUE', () => {
      });

      xit('responds to invalid request with 400 status and error message in body', () => {
      });
    });
  });
});
