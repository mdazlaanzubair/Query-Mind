import { useEffect, useState } from "react";
import * as qna from "@tensorflow-models/qna";

// component
import Loader from "./components/Loader";
import Analyser from "./components/Analyser";

function App() {
  const [model, setModel] = useState(null);

  // function to load qna model
  const loadQnaModel = async () => {
    const loadedModel = await qna.load();
    setModel(loadedModel);
    console.log("Model loaded successfully!");
    console.log(qna);
    return;
  };

  useEffect(() => {
    loadQnaModel();
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
