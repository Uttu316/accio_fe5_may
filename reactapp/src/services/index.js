export const api = async ({ body, method = "GET" }) => {
  const URL = "https://someAPI.com";
  try {
    const res = await fetch(URL, {
      method,
      "Content-type": "application/json",
      body: body ? JSON.stringify(body) : undefined
    });

    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e, URL);
    throw e;
  }
};
