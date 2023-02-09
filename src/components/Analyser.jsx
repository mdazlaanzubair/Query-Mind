import * as tf from "@tensorflow/tfjs";
import { useRef, useState } from "react";

const Analyser = ({ qna }) => {
  // creating refs for inputs
  const paraRef = useRef(null);
  const queryRef = useRef(null);

  // states of the app
  const [answers, setAnswers] = useState([]);

  // function collect user input and generate response by spinning up the model
  const doAnalysis = async () => {
    const para = paraRef.current.value;
    const query = queryRef.current.value;
    console.log(qna);

    const findedAns = await qna.findAnswers(query, para);
    console.log(findedAns);
    setAnswers(findedAns);
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
                  ref={paraRef}
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
                  ref={queryRef}
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

      {answers.length > 0 ? (
        <section id="answers" className="min-h-fit my-5 justify-start">
          <div className="flex-row justify-start lg:flex-row px-20 space-x-7 space-y-5 ">
            <h1 className="text-3xl font-bold">Answers</h1>
            {answers?.map((answer, index) => (
              <div
                className="alert bg-transparent hover:shadow-2xl text-left"
                key={index}
              >
                <div className="flex-1">
                  {index}
                  <label className="mx-3">{answer.text}</label>
                </div>
                <div className="flex-none">
                  <button className="btn btn-sm btn-outline btn-secondary">
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Analyser;
