export class AuthProxy {
  constructor(client, authStrategy) {
    this.client = client;
    this.authStrategy = authStrategy;
  }

  async request(req) {
    const headers = { ...(req.headers ?? {}) };
    this.authStrategy.apply(headers);

    const authedReq = { ...req, headers };
    return this.client.request(authedReq);
  }
}

export const apiKeyStrategy = (key) => ({
  apply(headers) {
    headers["X-API-Key"] = key;
  },
});

export const bearerStrategy = (token) => ({
  apply(headers) {
    headers["Authorization"] = `Bearer ${token}`;
  },
});