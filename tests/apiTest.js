const supertest = require('supertest');
var should = require("should");
var server = supertest.agent("http://localhost:5000");

describe('GET base route(/)', function () {
  it('responds with json response on base route', function (done) {
    server
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.message.should.equal('Base Route')
        done();
      })
  });
  
});