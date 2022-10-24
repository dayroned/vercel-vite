export default function handler(request, response) {
  if (request.body["shared_secret"] !== "710b50464c35aee9d0786faf05a170e198ff80f4bf7731030287b187d6d82cfa") {
    response.status(403).send("forbidden");
  }
  else if ((request.body["mac"] || "").startsWith("52:54:00")) {
    response.status(200).send("ensure360-demo 172.16.130.199");
  }
  else {
    response.status(404).send("mac address not found");
  }
}
