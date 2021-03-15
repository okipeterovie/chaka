export const environment = {
  production: true,
  serverUrl: '',
  get baseURL(): string {
    const parsedUrl = new URL(window.location.href);
    let baseUrl = parsedUrl.origin;
    return baseUrl;
  }
};
