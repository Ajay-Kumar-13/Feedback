import React, { useState } from "react";
import './Footer.css';
import { connect } from "react-redux";
import { updatequestionNumber } from "../redux/store";
import axios from "axios";

function Footer(props) {
    const [qno, setqNo] = useState(0);
    const handleClick = () => {
        props.updatequestionNumber(props.questionNumber+1);
        axios.post('/upload', {answer: props.answer})
            .then(res => console.log(res, "answer in footer"))
    }
    return (
        <React.Fragment>
            <div className="fp-footer">
                <button className="fp-button">Back <i class="fa fa-light fa-arrow-left"></i></button>
                <button className="fp-button" style={{backgroundColor: 'black', color:'white'}} onClick={handleClick}>Next <i class="fa fa-light fa-arrow-right"></i></button>
            </div>
        </React.Fragment>
    )
}


function mapStateToProps(state) {
    return {
      questionNumber: state.questionNumber,
      answer: state.answer
    };
}

const mapDispatchToProps = {
    updatequestionNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);