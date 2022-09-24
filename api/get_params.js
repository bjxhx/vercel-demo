export default function handler(request, response) {
    // const { name } = request.query;
    // console.log(request)
    // console.log(response)
    response.status(200).send(`param: ${ JSON.stringify(request.query)}`);
  }
  