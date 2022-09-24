const axios = require("axios");
export default async function handler(request, response) {
    const { url } = request.query || request.body;
    const res = await axios.get(url, {
      responseType: "arraybuffer",
    });
    response.setHeader("content-type", "image/jpeg").status(200).send(res.data);
  }