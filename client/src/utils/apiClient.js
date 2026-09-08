const BASE_URL = import.meta.env.VITE_API_URL;

class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const buildUrl = (path) => {
  const normalizedBase = BASE_URL.replace(/\/+$/, "");
  const normalizedPath = String(path).replace(/^\/+/, "");
  return `${normalizedBase}/${normalizedPath}`;
};

const parseResponseBody = async (response) => {
  if (response.status === 204) return null;

  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return null;

  try {
    return await response.json();
  } catch {
    return null;
  }
};

const apiClient = async (path, options = {}) => {
  const response = await fetch(buildUrl(path), {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  const body = await parseResponseBody(response);

  if (!response.ok) {
    throw new ApiError(
      body?.message || `Request failed with status ${response.status}`,
      response.status,
      body,
    );
  }

  return body;
};

export default apiClient;
