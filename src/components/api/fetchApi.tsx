import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch data from the Spring Boot API
    axios
      .get("http://localhost:8080/api/hello")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return <div>{message}</div>;
}

export default FetchApi;
