export default function handler(request, response) {
  if (request.query["mac"] === "aa:bb:cc:dd:ee:ff") {
    response.status(200).send("ensure360-demo 172.16.130.199");
  }
  else {
    response.status(404).send("mac address not found");
  }
}
