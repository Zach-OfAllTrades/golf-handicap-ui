export const postFetch = async (url, body, callback = typicalResponse) => {
  return await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  }).then(callback);
};

export const getFetch = async (url, callback = typicalResponse) => {
  return await fetch(url, {
    mode: "cors",
  }).then(callback);
};

const typicalResponse = (response) => response.json();
