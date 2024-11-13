import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="landing-page">
			<div className="container-fluid mt-3 pt-3">
				<h1 className="landing-heading display-5 mt-5">Welcome to SparkV</h1>
				<h3 className="text-light">
					<i>Expertly Crafted Roadmaps</i>
				</h3>
				<section className="section-container">
					<div className="container shadow-lg rounded-3 py-2 p-0 box-shadow pt-3 d-flex">
						<p className="landing-para container py-2">
							Get SparkV Roadmaps to Find Your Way to Mastery Set out on an
							educational and personal development journey with SparkV's
							extensive roadmaps. Our painstakingly constructed roadmaps offer
							precise, step-by-step instructions whether you're delving into the
							nuances of programming languages, grasping the newest in web
							development, dissecting the complexity of data science, or
							investigating the limits of artificial intelligence and machine
							learning. Begin your educational journey right now and equip
							yourself with the know-how and abilities necessary to be
							successful in your chosen industry. Join SparkV's community of
							learners who are committed to lifelong learning and success. Take
							a look at the categories on our roadmap, dive into our carefully
							chosen materials, and start your journey toward a life-changing
							education with SparkV. This is where your path to exceptional
							learning begins.
							<br />
							<img src="/Logo_.png" alt="SparkV" className="langingPage_img0 text-shadow mt-2" height="300rem" />
						</p>
						<img src="/Logo_.png" alt="SparkV" className="langingPage_img text-shadow py-2 pt-5" height="270rem" />
					</div>
					<footer className="lower">
						<Link to="/signup">
							<button className="landing-button rounded bg-secondary bg-gradient" title="Login">Let's Go</button>
						</Link>
						<img src="/tree_.png" style={{ marginTop: "2.5rem", height: "200px" }} alt="Tree" className="langingPage_image" />
					</footer>
				</section>
			</div>
		</div>
	);
};

export default LandingPage;
