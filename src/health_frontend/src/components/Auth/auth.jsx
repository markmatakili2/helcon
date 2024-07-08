// src/auth.js
import { AuthClient } from '@dfinity/auth-client';

let authClient = null;

export const initAuth = async () => {
  authClient = await AuthClient.create();

  return authClient;
};

export const login = async () => {
  if (!authClient) {
    await initAuth();
  }

  await authClient.login({
    identityProvider: process.env.DEPLOYED_INDETITY || 'https://identity.ic0.app',
    onSuccess: () => {
      window.location.reload();
    },
  });
};

export const isAuthenticated = async () => {
  if (!authClient) {
    await initAuth();
  }

  return authClient.isAuthenticated();
};

export const getIdentity = () => {
  if (authClient) {
    return authClient.getIdentity();
  }
  return null;
};
