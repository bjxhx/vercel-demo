const axios = require("axios");
export default async function handler(request, response) {
    const params = {
      action: "user/login",
      data: {
        username: "18230781302",
        password: "qwer@1234",
      },
    };
    const res = await axios({
        url:"https://api.xhx20.site/video/service",
        method:"POST",
        data:params
    })
    response.status(200).send(res.data);
  }
