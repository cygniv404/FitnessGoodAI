const request = require('supertest');
const app = require('../index');

describe('Test chat routes', () => {
  it('sends a message to the chat AI', async () => {
    const response = await request(app)
      .post('/api/chat/messages')
      .send({ text: 'Test message' });
    expect(response.status).toBe(200);
    expect(response.body.text).toBeDefined();
  });

});