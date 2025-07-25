import axios from "axios";
import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    axios
      .get(
        "https://simpletodowithnodedeploy.onrender.com/api/todos/getAllTodos"
      )
      .then((res) => console.log(res.data))
      .catch((er) => console.log(er));
  }, []);

  return <div>App</div>;
};

export default App;
