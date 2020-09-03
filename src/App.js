import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import slideImg1 from "./undraw_authentication_fsn5.svg";
import slideImg2 from "./undraw_personal_data_29co.svg";
import slideImg3 from "./undraw_fingerprint_swrc.svg";
import "./App.css";
import {
	faFacebook,
	faYoutube,
	faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import GoogleFontLoader from "react-google-font-loader";

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="panel">
					<div className="row">
						<div className="col liquid">
							<h4>Screen Concepts</h4>

							{/* Carousel */}

							<div className="owl-carousel owl-theme">
								<img src={slideImg1} className="slideImg" alt="" />
								<img src={slideImg2} className="slideImg" alt="" />
								<img src={slideImg3} className="slideImg" alt="" />
							</div>

							<div className="follow">
								Follow us on
								<FontAwesomeIcon
									icon={faFacebook}
									className="userIcon facebookIcon"
								/>
								<FontAwesomeIcon
									icon={faTwitter}
									className="userIcon twitterIcon"
								/>
								<FontAwesomeIcon
									icon={faYoutube}
									className="userIcon youtubeIcon"
								/>
							</div>
						</div>

						<div className="col login">
							<button type="button" className="btn btn-signup">
								Sign Up
							</button>
							<form>
								<div>
									<h6>We keep everything</h6>
									<h3>Ready to Login</h3>
								</div>

								<div className="form-group">
									<input
										type="text"
										placeholder="Email"
										className="form-input"
									/>
									<div className="input-icon">
										<FontAwesomeIcon icon={faUser} />
									</div>
								</div>

								<div className="form-group">
									<input
										type="password"
										placeholder="Password"
										className="form-input"
									/>
									<div className="input-icon">
										<FontAwesomeIcon icon={(faUser, faLock)} />
									</div>
								</div>

								<button type="button" className="btn btn-login">
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<GoogleFontLoader
				fonts={[
					{
						font: "Bungee Inline",
						// weights: [400],
					},
				]}
			/>
			<GoogleFontLoader
				fonts={[
					{
						font: "Montserrat",
						// weights: [400],
					},
				]}
			/>
			<GoogleFontLoader
				fonts={[
					{
						font: "Lobster",
						// weights: [400],
					},
				]}
			/>
		</div>
	);
}

export default App;
