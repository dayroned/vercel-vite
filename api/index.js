export default function handler(request, response) {
  response.status(200).json({
    status: "registered",
    hostname: "ensure360-demo",
    ip: "172.16.130.199"
  });
}
