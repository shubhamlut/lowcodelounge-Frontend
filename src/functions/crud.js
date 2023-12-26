// This files contains all the CRUD functions

const create = async (url, requestBody) => {
  let response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
  } catch (error) {
    const jsonResponse = await response.json();
    return {
      success: false,
      jsonResponse,
    };
  }
};

const get = async (url) => {
  let response;
  let jsonResponse;
  try {
    response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    } else {
      return (jsonResponse = await response.json());
    }
  } catch (error) {
    jsonResponse = await response.json();
    return {
      success: false,
      jsonResponse,
    };
  }
};

module.exports = {
  create,
  get,
};
