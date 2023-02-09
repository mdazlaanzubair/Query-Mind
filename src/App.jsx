import { useEffect, useState } from "react";
import * as qna from "@tensorflow-models/qna";

// component
import Loader from "./components/Loader";
import Analyser from "./components/Analyser";

function App() {
  const [model, setModel] = useState(null);

  // load model as the app component loaded
  useEffect(() => {
    // using try-catch since its an async call
    try {
      setModel(qna.load());
      console.log("Model loaded successfully!");
    } catch (error) {
      console.log("An error has encountered!");
      console.log("Error:", error);
    }
  }, []);

  return (
    <div className="App font-default" data-theme="synthwave">
      <div className="container mx-auto p-5">
        {/* display form only when the model loaded */}
        {model ? <Analyser qna={model} /> : <Loader />}
      </div>
    </div>
  );
}

export default App;
