import { useRef, useState } from "react";
import Navbar from "./Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Language = () => {
	const [searchQuery, setSearchQuery]=useState("");
	const searchInputRef = useRef(null);
	useEffect(() => {
		const searchInput=searchInputRef.current;
		const cards=document.querySelectorAll(".cards");
		function filterIcons(searchQuery){
			const nothingfound=document.getElementById("nothing-alert");
			let number=0;
			cards.forEach(function(card){
				const name=card.querySelector("h2").textContent.toLowerCase();
				if(name.includes(searchQuery.toLowerCase())) {
					nothingfound.style.display="none";
					card.style.display="flex";
					number++;}
				else{card.style.display="none";}
			});
			if(number===0){nothingfound.style.display="block";}
		}

		const inputHandler = () => {
			const searchValue=searchInput.value.trim();
			setSearchQuery(searchValue);
			filterIcons(searchValue);
		};
		const handleKeyPress = (event) => {
			if(event.key==="Enter"){
				event.preventDefault();
				inputHandler();}
		};
		if(searchInput){
			searchInput.addEventListener("input", inputHandler);
			searchInput.addEventListener("keypress", handleKeyPress);
			return () => {
				searchInput.removeEventListener("input", inputHandler);
				searchInput.removeEventListener("keypress", handleKeyPress);
			};
		}
	}, []);

	return (
		<div className="langbody">
			<div className="lang">
				<div>
					<Navbar />
				</div>
				<div className="lang-container">
					<div className="search-container main-container">
						<i className="fa fa-search"></i>
						<input type="text" id="search-input" ref={searchInputRef} placeholder="Search..." autoComplete="off" />
					</div>
					<div className="main-container">
						<div id="nothing-alert">Nothing Found</div>
						<div>
							<Link to="/Language/html" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-html5 ic"></i>
									<h2 className="icon-name">HTML</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/css" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-css3-alt ic"></i>
									<h2 className="icon-name">CSS</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/python" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-python ic"></i>
									<h2 className="icon-name">Python</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/react" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-react ic"></i>
									<h2 className="icon-name">React</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/nodejs" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-node-js ic"></i>
									<h2 className="icon-name">Nodejs</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/javascript" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-js ic"></i>
									<h2 className="icon-name">JavaScript</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/java" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-java ic"></i>
									<h2 className="icon-name">Java</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/sql" className="nav-link">
								<div className="cards">
									<i className="fa-solid fa-database ic"></i>
									<h2 className="icon-name">MySQL</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/mongo" className="nav-link">
								<div className="cards">
									<img src="/mongoDB_symbol.png" style={{padding:"none"}} width="35rem" height="35rem" />
									{/* <i className="fa-solid fa-database ic"></i> */}
									<h2 className="icon-name">MongoDB</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/angular" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-angular ic"></i>
									<h2 className="icon-name">AngularJS</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/bootstrap" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-bootstrap ic"></i>
									<h2 className="icon-name">Bootstrap</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/vue" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-vuejs ic"></i>
									<h2 className="icon-name">Vue</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/git" className="nav-link">
								<div className="cards">
									<i className="fa-brands fa-git-alt ic"></i>
									<h2 className="icon-name">Git</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/ruby" className="nav-link">
								<div className="cards">
									<img src="/ruby_symbol.png" height="30px" width="30px"/>
									<h2 className="icon-name">Ruby</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/json" className="nav-link">
								<div className="cards">
									<i className="bi bi-braces" style={{marginRight:"10px",fontSize:"37px"}}></i>
									<h2 className="icon-name" style={{paddingBottom:"13px",marginTop:"0px"}}>JSON</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/jquery" className="nav-link">
								<div className="cards">
									<img src="jQuery_symbol.png" height="35px"/>
									<h2 className="icon-name">JQuery</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/dsa" className="nav-link">
								<div className="cards">
									<img src="dsa_symbol.png" height="75px"/>
									<h2 className="icon-name" style={{paddingBottom:"15px",marginTop:"0px"}}>DSA</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/c" className="nav-link">
								<div className="cards">
									<img src="c_symbol.png" width="45px"/>
									<h2 className="icon-name">C</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/cpp" className="nav-link">
								<div className="cards">
									<img src="cpp_symbol.png" width="45px"/>
									<h2 className="icon-name">C++</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/csharp" className="nav-link">
								<div className="cards">
									<img src="csharp_symbol.png" heigh="50px" width="46.5px"/>
									<h2 className="icon-name">C#</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/r" className="nav-link">
								<div className="cards">
									<img src="r_symbol.png" height="40px"/>
									<h2 className="icon-name">R</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/kotlin" className="nav-link">
								<div className="cards">
									<img src="kotlin_symbol.png" height="35px"/>
									<h2 className="icon-name" style={{paddingTop:"5px"}}>Kotlin</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/typescript" className="nav-link">
								<div className="cards">
									<img src="typescript_symbol.png" height="38px"/>
									<h2 className="icon-name">TypeScript</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/express" className="nav-link">
								<div className="cards">
									<img src="express_symbol.png" height="34px"/>
									<h2 className="icon-name" style={{paddingTop:"5px"}}>Express</h2>
								</div>
							</Link>
						</div>
						<div>
							<Link to="/Language/tailwind" className="nav-link">
								<div className="cards">
									<img src="tailwind_symbol.png" height="40px"/>
									<h2 className="icon-name">Tailwind</h2>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<footer className="roadmapfooter">
					&copy;2024 All rights reserved to SparkV &nbsp;{" "}
					<span className="heart-beat">❤️</span>
				</footer>
			</div>
		</div>
	);
};

export default Language;
