export default {
  async fetch(request, env, ctx) {
    if (request.method === "POST") {
      try {
        const data = await request.json();
        return new Response(JSON.stringify({ status: "success", received: data }), {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      } catch (err) {
        return new Response(JSON.stringify({ status: "error", message: err.message }), { status: 400 });
      }
    }
    return new Response("PLC Data Endpoint is Working!");
  }
};
