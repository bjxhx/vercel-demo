const { Deta } = require("deta");
const deta = Deta("c0wvshav_pehT6jQQ4apThB8BWD7RLR5gZeBV3d6Y");
const db = deta.Base("user_info");

// export default async function handler(request, response) {
//     const { url } = request.query || request.body;
//     const res = await axios.get(url, {
//       responseType: "arraybuffer",
//     });
//     response.setHeader("content-type", "image/jpeg").status(200).send(res.data);
//   }
function getTime() {
  return new Date().getTime();
}
export default async function handler(request, response) {
  const start = getTime();
  const data = await db.fetch(
    {
      username: "xhx",
    },
    {
      limit: 1,
    }
  );
  const end = getTime();
  data["time"] = end - start;
  response.status(200).send(data);
}
