import React, { useEffect, useState } from "react";
import './Question.css';
import { TypeAnimation } from 'react-type-animation';
import { connect } from "react-redux";
import axios from "axios";

function Question(props) {
    
    const [questions, setQuestions ] = useState([
        'How much did you rate your work?',
        'Could you explain briefly why did you rate your work as 10?',
        'How much did you rate your work??'
    ]);
    
    const [question, setQuestion] = useState(questions[props.questionNumber])
    const [answer, setAnswer] = useState();
    
    useEffect(() => {
        setQuestion(questions[props.questionNumber]);
        console.log(props.questionNumber);
        axios.get('/question').then(res => {
            console.log(res, "question");
        })
    })

    const handleAnswer = (e) => {
        setAnswer(e.target.value)
    }
    return (
        <React.Fragment>
            <div className=" fp-question">

                <div>
                    <span className="fp-badge">Question 1</span>
                </div>
                <div className="question"> 
                    <TypeAnimation
                        key={question}
                        sequence={[
                            question, 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>

                <div>
                    <textarea className="form-control" style={{width: '100%'}} onChange={handleAnswer} value={answer}></textarea>
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
    )
}


function mapStateToProps(state) {
    return {
      questionNumber: state.questionNumber
    };
}


export default connect(mapStateToProps)(Question);