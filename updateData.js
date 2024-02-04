exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    // You can process the data here as needed

    // Responding back
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data received successfully" })
    };
  } catch (error) {
    return { statusCode: 500, body: "Server Error" };
  }
};
