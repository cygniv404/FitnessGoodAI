const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');

describe('Test fetchuser middleware', () => {
  it('adds user to req object if valid token is provided', () => {
    const user = { id: 1 };
    const token = jwt.sign({ user }, process.env.JWT_SECRET);
    const req = { header: () => token };
    const res = {};
    const next = jest.fn();
    fetchuser(req, res, next);
    expect(req.user).toEqual(user);
    expect(next).toHaveBeenCalled();
  });

  it('returns 401 error if invalid token is provided', () => {
    const req = { header: () => 'invalid-token' };
    const res = { status: jest.fn().mockReturnThis(), send: jest.fn() };
    const next = jest.fn();
    fetchuser(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ error: 'Authentication denied. Please use a valid token' });
    expect(next).not.toHaveBeenCalled();
  });

});