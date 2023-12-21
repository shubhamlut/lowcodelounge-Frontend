// This files contains all the CRUD functions

const create = async (url, requestBody) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const jsonResponse = await response.json();

    return jsonResponse;
  } catch (error) {
    return error
  }
};

module.exports = {
  create,
};
