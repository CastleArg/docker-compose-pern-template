const request = require('supertest')
const app = require('../../index')
describe('Messages endpoint', () => {
  it('should display messages from db on get request', async () => {
    // arrange 
    const expected = [{id: 1 , message: `Don't panic`}, {id:2, message: 'the tests work on your machine'}]

    // act
    const res = await request(app)
      .get('/api/messages')

    // assert
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual(expected)
  })
})