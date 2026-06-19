import { BaseClient, AuthProxy, apiKeyStrategy, bearerStrategy } from "auth-proxy-lib";

class GitHubService {
  constructor(httpClient) {
    this.http = httpClient;
  }

  async getUser(username) {
    return this.http.request({
      url: `https://api.github.com/users/${username}`,
      method: "GET",
    });
  }
}

async function run() {
  console.log("--- Через API Key ---");
  const serviceA = new GitHubService(
    new AuthProxy(new BaseClient(), apiKeyStrategy("my-secret-key"))
  );
  const resA = await serviceA.getUser("lilianasemeniuk");
  console.log("Headers:", resA.headers);

  console.log("\n--- Через Bearer token ---");
  const serviceB = new GitHubService(
    new AuthProxy(new BaseClient(), bearerStrategy("jwt-token-123"))
  );
  const resB = await serviceB.getUser("lilianasemeniuk");
  console.log("Headers:", resB.headers);

  console.log("\n--- Без proxy (чистий клієнт) ---");
  const serviceC = new GitHubService(new BaseClient());
  const resC = await serviceC.getUser("lilianasemeniuk");
  console.log("Headers:", resC.headers);
}

run();