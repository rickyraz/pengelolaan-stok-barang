import axios from "axios";

export const getProductPublic = async () => {
  const data = new URLSearchParams();
  data.append("db", "SAAS");
  data.append("url", "http://172.16.35.43:8059");
  try {
    const response = await axios.post(
      `https://mid.tachyon.net.id/api/prod/public_config`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data.data.product_param_data;
  } catch (error) {
    return error;
  }
};

//43
