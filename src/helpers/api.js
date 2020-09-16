function formatUrl(base, url) {
  return `${base}${url}`;
}

async function api(base, url, method = 'GET', body = null) {
  const response = await fetch(formatUrl(base, url), {
    method,
    ...(body && { body: JSON.stringify(body) }),
    // headers: {
    //   "Content-Type": "application/json",
    // },
    credentials: 'same-origin',
  });

  if (!response.ok) {
    throw await response.json();
  }
  try {
    return await response.json();
  } catch {
    return {};
  }
}

export default {
  get: api,
  post: (url, body) => api(url, 'POST', body),
  put: (url, body) => api(url, 'PUT', body),
  delete: (url) => api(url, 'DELETE'),
};
