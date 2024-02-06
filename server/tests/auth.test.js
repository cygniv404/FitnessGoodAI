const request = require('supertest');
const app = require('../index');

describe('Test authentication routes', () => {
  it('registers a new user', async () => {
    const response = await request(app)
      .post('/api/auth/createuser')
      .send({ name: 'Test User', email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.authtoken).toBeDefined();
  });

  it('logs in an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.authtoken).toBeDefined();
  });

});
