// users.test.js
import axios from 'axios';
import { submitInvitation, DefaultServiceErrorMessage } from '../index';
jest.mock('axios');

describe('service test', () => {
  test('should reject errorMessage', async () => {
    const testErrorMessage = 'test error';
    const post = axios.post as any;
    post.mockResolvedValue(
      Promise.reject({
        response: {
          data: {
            errorMessage: testErrorMessage,
          },
        },
      })
    );

    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    try {
      await submitInvitation({
        name: '1',
        email: '2',
      });
    } catch (e) {
      expect(e).toHaveProperty('errorMessage');
      expect(e.errorMessage).toBe(testErrorMessage);
    }

    post.mockResolvedValue(Promise.reject({}));

    try {
      await submitInvitation({
        name: '1',
        email: '2',
      });
    } catch (e) {
      expect(e).toHaveProperty('errorMessage');
      expect(e.errorMessage).toBe(DefaultServiceErrorMessage);
    }
  });
});
