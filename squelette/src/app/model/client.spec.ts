import { Client } from './user/client';

describe('Client', () => {
  it('should create an instance', () => {
    expect(new Client()).toBeTruthy();
  });
});
