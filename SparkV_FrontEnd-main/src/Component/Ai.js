import React, { useState } from "react";
import Navbar from "./Navbar";

const Ai = () => {
	const historyDisplay = () => {
		var chatWindow = document.querySelector(".chatWindow");
		var historyBox = document.querySelector(".history_box");
		if(chatWindow.style.display !== "none"){
			chatWindow.style.display = "none";
			historyBox.style.display = "block";
		} else{
			chatWindow.style.display = "block";
			historyBox.style.display = "none";
		}
	};

	const handleAnswer = async () => {
		const User = document.getElementById("input_name").value;
		const age = document.getElementById("input_age").value;
		const level = document.getElementById("input_level").value;
		const days = document.getElementById("input_day").value;
		const language = document.getElementById("input_language").value;
		const question = document.getElementById("input_prompt").value;

		if (validateDetails(User, age, days, language, question)) {
			document.getElementById("output_prompt").textContent = "Typing...";
			document.getElementById("input_prompt").value = "";
			try {
				const response = await fetch("https://sparkv-server.onrender.com/ai/ans",{
						method: "POST",
						headers: {"Content-Type": "application/json",},
						body: JSON.stringify({
							name: User,
							age: age,
							level: level,
							days: days,
							language: language,
							problem: question,
						}),
          });
				const data = await response.json();
				document.getElementById("output_prompt").innerHTML=formatMarkdown(data.letter);
				addToHistory(question);
			} catch (error) {
				console.error("Error:", error);
				document.getElementById("output_prompt").textContent="An error occurred.";
			}
		}
	};

	const validateDetails = (name, age, days, language, question) => {
		document.getElementById("output_prompt").textContent = "";
		if(name.length<=1){
			document.getElementById("output_prompt").textContent+="Please fill all the details correctly...\nName length > 2 letter.";
			return false;
    }
		if(age<=8){
			document.getElementById("output_prompt").textContent+="Please fill all the details correctly...\nAge > 8.";
			return false;
		}
		if(days<=0){
			document.getElementById("output_prompt").textContent+="Please fill all the details correctly...\nDays > 0.";
			return false;
		}
		if(language.length<=0){
			document.getElementById("output_prompt").textContent+="Please fill all the details correctly...\nLanguage Name Length > 0.";
			return false;
		}
		if(question.length<=0){
			document.getElementById("output_prompt").textContent+="Please fill all the details correctly...\nAsk the Problem i.e, Prompt Length > 0.";
			return false;
		}
		return true;
	};

	const formatMarkdown = (text) => {
		// Bold ()
		text=text.replace(/\\(\*.*?\*)\\/g, "<strong>$1</strong>");
		// Italic (*)
		text=text.replace(/\*(.*?)\*/g, "<em>$1</em>");
		// Bold-Italic (_)
		text=text.replace(/_(.*?)_/g, "<strong><em>$1</em></strong>");
		// Line break
		text=text.replace(/\n/g, "<br>");
		// Inline code (`)
		text=text.replace(/`(.*?)`/g, "<code>$1</code>");
		// Link ([Link](url))
		text=text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');
		// Image (![Alt](url))
		text=text.replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">');
		return text;
	};

	const addToHistory = (question) => {
		const historyList=document.getElementById("history_list");
		const listItem=document.createElement("p");
		listItem.textContent="➤ "+question;
		listItem.classList.add("history-item");
		listItem.onclick = () => searchHistory(question);
		historyList.appendChild(listItem);
	};

	const searchHistory = async (question) => {
		var chatWindow=document.querySelector(".chatWindow");
		var historyBox=document.querySelector(".history_box");
		chatWindow.style.display="block";
		historyBox.style.display="none";
		document.getElementById("input_prompt").value=question;
		await handleAnswer();
	};

	return(
		<div className="aiPage">
			<div className="aiChatPage">
				<div>
					<Navbar />
				</div>
				<div>
					<h1 className="aiPage_head display-4">SparkV ChatBot</h1>
				</div>
				<div className="d-flex">
					<div className="history_box">
						<aside className="history px-2 container rounded shadow" style={{ margin: "2%" }}>
							<div className="history_heading">
								<button className="history-button btn" id="his_btn" onClick={historyDisplay}>
									<span className="history-btn-span">
										<i className="bi bi-arrow-left-circle"></i>
									</span>
								</button>
								<h2>History</h2>
							</div>
							<hr />
							<div className="text-light">
								<div id="history_list"></div>
							</div>
						</aside>
					</div>
					<main className="chatWindow col-9 px-2 pt-3 container rounded shadow-lg">
						<div className="ai_win container bg-secondary rounded shadow-lg">
							<p id="output_prompt" className="container rounded p-5 shadow-lg mb-2"></p>
							<div className="container input-container rounded">
								{/* <button id="history_btn" className="rounded-circle"><span className="rotate-text"></span></button> */}
								{/* <input type="checkbox" id="history_input" name="history_input" className="mt-3 px-2"/> */}
								<input type="text" id="input_name" name="input_name" placeholder="Enter your name" title="Name" className="mt-3 px-2"/>
								<input type="number" id="input_age" name="input_age" placeholder="Age" title="Age" className="mt-3 px-2"/>
								<input type="number" id="input_day" name="input_day" placeholder="Days" title="Days" className="mt-3 px-2"/>
								<select id="input_level" name="input_level" title="Level" className="custom-select" placeholder="--">
									<option value="option1" style={{color: "grey",fontStyle: "italic",fontSize: "0.9em",}}>&nbsp;Your Level</option>
									<option value="option2" style={{color: "red",fontStyle: "italic",fontSize: "0.9em",}}>&nbsp;Beginner</option>
									<option value="option3" style={{color: "blue",fontStyle: "italic",fontSize: "0.9em",}}>&nbsp;Intermediate</option>
									<option value="option4" style={{color: "green",fontStyle: "italic",fontSize: "0.9em",}}>&nbsp;Advance</option>
								</select>
								<input type="text" id="input_language" name="input_language" placeholder="Language you want to learn" title="Language" className="mt-3 px-2"/>
								<div className="input_bar">
									<button className="history-button btn" onClick={historyDisplay}>
										<span className="history-btn-span">
											<i className="bi bi-clock-history"></i>
										</span>
									</button>
									<input type="text" id="input_prompt" placeholder="Ask your query..." title="Query" className="mt-3"/>
									<button className="send-button btn" onClick={handleAnswer} title="Ask">
										<span className="rotate-text">➣</span>
									</button>
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<footer className="roadmapfooter">
				&copy;2024 All rights reserved to SparkV &nbsp;{" "}
				<span className="heart-beat">❤️</span>
			</footer>
		</div>
	);
};

export default Ai;
