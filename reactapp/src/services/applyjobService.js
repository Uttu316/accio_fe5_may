import { api } from ".";

export const sendDataToApply = async (data) => {
  return await api({
    body: data,
    method: "POST"
  });
};
