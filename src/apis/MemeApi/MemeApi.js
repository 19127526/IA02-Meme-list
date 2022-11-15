import request from "../request";

// eslint-disable-next-line import/prefer-default-export
export const getMemeApi = async () => {
  const data = await request.get("https://api.imgflip.com/get_memes");
  return data.data;
};
