interface param extends Omit<RequestInit, 'body'> {
  url: string;
  query?: Record<string, string>;
  body?: Record<string, unknown>;
}

/**
 * Handle network requests in json format through fetch
 * @param param basic same as fetch
 * @returns the data of response
 */
export async function request(param: param) {
  const { url, query = {}, body, headers, ...restParam } = param;

  // with query parameter
  const urlParam = new URL(url, 'https://qqlykm.cn');
  urlParam.searchParams.set('key', 'GY7rE1J3f4ovi4wGONXshLHOHv');
  Object.entries(query).forEach(([key, value]) => {
    urlParam.searchParams.set(key, value);
  });

  // with body parameter
  const data = JSON.stringify(body);

  // with request headers
  const headersParam = new Headers(headers);
  headersParam.set('Content-Type', 'application/json');

  const res = await fetch(urlParam, {
    ...restParam,
    body: data,
    headers: headersParam,
  });

  if (!res.ok) throw new Error(res.statusText);
  return await res.json();
}
