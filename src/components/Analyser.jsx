import * as tf from "@tensorflow/tfjs";
import { useRef, useState } from "react";

const Analyser = ({ qna }) => {
  // creating refs for inputs
  const para = useRef(null);
  const query = useRef(null);

  // states of the app
  const [ans, setAns] = useState();

  // function collect user input and generate response by spinning up the model
  const doAnalysis = () => {
    console.log("User inputs");
    console.log(para.current.value);
    console.log(query.current.value);
  };

  return (
    <>
      <section id="analyser" className="hero min-h-screen">
        <div className="flex-col justify-center hero-content lg:flex-row px-20 space-x-5">
          <div className="text-center lg:text-left">
            <h1 className="mb-5 text-5xl font-bold">
              Welcome to Query Mind - Unlock the Power of NLP with Ease
            </h1>
            <p className="mb-5">
              Query Mind is a state-of-the-art NLP powered Question Answering
              tool that helps you uncover insights and find answers in a matter
              of seconds. With our advanced BERT model from Tensorflow.JS, you
              can extract relevant information from large amounts of text and
              answer questions with ease.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl font-bold mx-auto my-3">
                Ask Query Mind
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Paragraph</span>
                </label>
                <textarea
                  type="text"
                  ref={para}
                  className="textarea h-24 textarea-bordered focus:border-secondary focus:outline-none"
                  placeholder="Paste here the para you want to explore..."
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Query</span>
                </label>
                <input
                  type="text"
                  ref={query}
                  placeholder="What's your query?"
                  className="input input-bordered focus:border-secondary focus:outline-none"
                />
              </div>
              <div className="form-control mt-6">
                <a
                  href="#answers"
                  className="btn btn-secondary"
                  onClick={doAnalysis}
                >
                  Generate Response
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="answers" className="hero min-h-fit">
        <div className="flex-col justify-center hero-content lg:flex-row px-20 space-x-5">
          <div className="text-center lg:text-left"></div>
        </div>
      </section>
    </>
  );
};

export default Analyser;
