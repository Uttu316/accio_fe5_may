export const api = async ({ body, endpoint, method = "GET" }) => {
  const URL = "https://www.arbeitnow.com/api" + endpoint;
  try {
    const res = await fetch(URL, {
      method,
      "Content-type": "application/json",
      body: body ? JSON.stringify(body) : undefined
    });

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    throw new Error(res);
  } catch (e) {
    console.error(e, URL);
    throw e;
  }
};
