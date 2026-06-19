export class BaseClient {
  async request(req) {
    return {
      status: 200,
      url: req.url,
      method: req.method ?? "GET",
      headers: req.headers ?? {},
      body: `Response from ${req.url}`,
    };
  }
}