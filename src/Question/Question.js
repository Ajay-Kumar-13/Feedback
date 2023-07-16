import React, { useEffect, useState } from "react";
import "./Question.css";
import { TypeAnimation } from "react-type-animation";
import { connect } from "react-redux";
import axios from "axios";
import { updatequestionNumber } from "../redux/store";
import { updateanswer } from "../redux/store";

function Question(props) {
  const [questions, setQuestions] = useState([
    // "How much did you rate your work?",
    // "Could you explain briefly why did you rate your work as 10?",
    // "How much did you rate your work??",
  ]);

  const [question, setQuestion] = useState(questions[props.questionNumber]);
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    // setQuestion(questions[props.questionNumber]);
    // console.log(props.questionNumber);
    console.log(props, "props");
    answers.push(answer);
    // if(!question) {
    setLoading(true);
    // }

    setTimeout(() => {
      console.log("logged me");
      axios.get("/question").then((res) => {
        setLoading(true);
        // if (res.data === answer) {
        //   console.log(true, "answerready");
        // }
        // if (res.data === answer) {
        //   setLoading(true);
        // } else {

        // }

        // console.log(res.data);
        function areSentencesSimilar(sentence1, sentence2) {
          // Calculate the Levenshtein distance between the sentences
          const distance = levenshteinDistance(sentence1, sentence2);

          // Define a threshold for similarity
          const similarityThreshold = 0.7; // You can adjust this value based on your requirements

          // Compare the distance with the similarity threshold
          if (distance / Math.max(sentence1.length, sentence2.length) <= similarityThreshold) {
            return true; // Sentences are similar
          } else {
            return false; // Sentences are not similar
          }
        }

        // // Function to calculate the Levenshtein distance between two strings
        function levenshteinDistance(str1, str2) {
          const m = str1.length;
          const n = str2.length;
          const dp = Array.from({ length: m + 1 }, () => Array(n + 1));

          for (let i = 0; i <= m; i++) {
            for (let j = 0; j <= n; j++) {
              if (i === 0) {
                dp[i][j] = j;
              } else if (j === 0) {
                dp[i][j] = i;
              } else {
                dp[i][j] = str1[i - 1] === str2[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
              }
            }
          }

          return dp[m][n];
        }

        // Example usage
        const sentence1 = res.data;
        const sentence2 = answer;
        if (areSentencesSimilar(sentence1, sentence2)) {
          console.log("Sentences are similar.");
          setLoading(true);
        } else {
          console.log("Sentences are not similar.");
          console.log(sentence1, 's1');
          console.log(sentence2, 's2');
          if (res.data != '') {
            console.log("sentence3");
            setLoading(false);
            setQuestion(res.data);
          }

        }

      });
    }, 5000);
  }, [props.questionNumber]);

  const handleAnswer = (e) => {
    props.updateanswer(e.target.value);
    setAnswer(e.target.value);
  };

  const handleClick = () => {
    props.updatequestionNumber(props.questionNumber + 1);
    axios.post('/upload', { answer: props.answer })
      .then(res => console.log(res, "answer in footer"))
  }

  return (
    <React.Fragment>
      <div className=" fp-question" style={{ width: "50%" }}>
        <div>
          <span className="fp-badge">Question {props.questionNumber}</span>
        </div>
        <div className="question">
          {loading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <TypeAnimation
              key={question}
              sequence={[question, 1000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2em", display: "inline-block" }}
              repeat={Infinity}
            />
          )}
        </div>

        <div>
          <textarea
            className="form-control"
            style={{ width: "100%" }}
            onChange={handleAnswer}
            value={answer}
          ></textarea>
        </div>


        <div className="fp-footer">
          <button className="fp-button">Back <i class="fa fa-light fa-arrow-left"></i></button>
          <button className="fp-button" style={{ backgroundColor: 'black', color: 'white' }} onClick={handleClick}>Next <i class="fa fa-light fa-arrow-right"></i></button>
        </div>
        {/* <div className="fp-options">
                    <span className="fp-badge-eclipse">1</span>
                    <span className="fp-badge-eclipse">2</span>
                    <span className="fp-badge-eclipse">3</span>
                    <span className="fp-badge-eclipse">4</span>
                    <span className="fp-badge-eclipse">5</span>
                    <span className="fp-badge-eclipse">6</span>
                    <span className="fp-badge-eclipse">7</span>
                    <span className="fp-badge-eclipse">8</span>
                    <span className="fp-badge-eclipse">9</span>
                    <span className="fp-badge-eclipse">10</span>
                </div> */}
      </div>
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    questionNumber: state.questionNumber,
    answer: state.answer,
  };
}

const mapDispatchToProps = {
  updateanswer,
  updatequestionNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
