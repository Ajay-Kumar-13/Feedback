import React, { useEffect, useState } from "react";
import "./Question.css";
import { TypeAnimation } from "react-type-animation";
import { connect } from "react-redux";
import axios from "axios";
import { updatequestionNumber } from "../redux/store";
import { updateanswer } from "../redux/store";
import client from "socket.io-client";

function Question(props) {

	const [questions, setQuestions] = useState([
		// "How much did you rate your work?",
		// "Could you explain briefly why did you rate your work as 10?",
		// "How much did you rate your work??",
	]);

	const [question, setQuestion] = useState(questions[props.questionNumber]);
	const [answer, setAnswer] = useState('');
	const [x, setX] = useState(0);
	const [loading, setLoading] = useState(false);
	const [answers, setAnswers] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [feedback, setFeedback] = useState([]);
	const [trigger, setTrigger] = useState(false);
	const [socketInstance, setSocketInstance] = useState(null)
	// const [sid, setSid] = useState();


	useEffect(() => {
		console.log(props.questionNumber);
		console.log(feedback);
		if (feedback.length > 1) {
			axios.post(
				"/" + props.user.organization + "/" + props.user.userId + "/test/submitFeedback",
				feedback
			);
		}
	}, [disabled])


	useEffect(() => {
		console.log("connecting ...");
		const socket = client("ws://localhost:5000");
		setSocketInstance(socket);

		const connectAndEmit = () => {
			if (socket.connected) {
				// The socket is connected, emit the 'start' event
				socket.emit('start', socket.id);
			} else {
				// The socket is not connected, retry in a moment
				setTimeout(connectAndEmit, 1000); // Adjust the delay as needed
			}
		};

		socket.on('connect', () => {
			console.log("Socket connected");
			connectAndEmit();
		});

		socket.on('start', (data) => {
			console.log(data);
		});

		socket.on('disconnect', (data) => {
			console.log(data);
		});

		// Clean up listeners when the component unmounts
		return () => {
			socket.removeAllListeners('connect');
			socket.removeAllListeners('start');
			socket.removeAllListeners('disconnect');
		};
	}, []);


	useEffect(() => {
		console.log(props);
		setLoading(true);
		setTimeout(() => {

			console.log("logged me");
			socketInstance?.emit('get_question', { conversation_id: socketInstance?.id })
			socketInstance?.on('get_question', (res) => {
				console.log(socketInstance.id);
				setLoading(true);
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
					console.log("Sentences are similar ", res.data, answer);
					setTrigger(!trigger);
				} else {
					console.log("Sentences are not similar.");
					console.log(sentence1, 's1');
					console.log(sentence2, 's2');
					if (res.data != '') {
						setQuestion(res.data);
						setLoading(false);

						if (answer) {
							answers.push(answer);
							setAnswer("")
							console.log(feedback, 'muzan');
							if (res.data.includes("Have a great day")) {

								// if (feedback.length > 1) {

								// 	setInterval(() => {
								// 		if (!disabled) {

								setDisabled(true);
								// 		}
								// 	}, 2000);
								// }
							}
						} else {
							console.log('came here');
						}
					} else {
						setTrigger(!trigger);
					}

				}

			});
		}, 5000);
	}, [socketInstance, props.questionNumber, trigger]);


	const handleClick = () => {
		props.updatequestionNumber(props.questionNumber + 1);
		setX(prevX => prevX + 1);
		const fd = { question: [question, answer] }
		setFeedback([...feedback, fd]);

		socketInstance?.emit("upload", { message: props.answer, conversation_id: socketInstance.id })
		socketInstance?.on("upload", (data) => {
			console.log(data);
		})
	}

	const handleAnswer = (e) => {
		props.updateanswer(e.target.value);
		setAnswer(e.target.value);
	};

	// const handleClick = () => {
	//   props.updatequestionNumber(props.questionNumber + 1);
	//   setX(x + 1);
	//   const fd = { question: [question, answer] }
	//   // if (feedback) {
	//   setFeedback([...feedback, fd]);
	//   // } else {
	//   //   setFeedback([fd])
	//   // }

	//   socketInstance?.emit("upload", { message: props.answer, conversation_id: socketInstance.id })
	//   // axios.post('/upload', { answer: props.answer })
	//   socketInstance?.on("upload", (data) => {
	//     console.log(data);
	//   })
	// }

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
					<textarea disabled={disabled}
						className="form-control"
						style={{ width: "100%" }}
						onChange={handleAnswer}
						value={answer}
					></textarea>
				</div>


				<div className="fp-footer ">
					{/* <button className="fp-button">Back <i class="fa fa-light fa-arrow-left"></i></button> */}
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
		user: state.user
	};
}

const mapDispatchToProps = {
	updateanswer,
	updatequestionNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
