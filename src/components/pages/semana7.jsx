import React, { useEffect } from "react";
import imagen from "../../img/imag7.png";

import "./styles/about.css";

const Semana7 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 07: Exposición de Trabajos de aplicación.
								</div>

								<div className="subtitle about-subtitle">
								Exposiciòn de trabajos de aplicaciòn y Evaluaciòn de Logro 1
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag7"
										/>
									</div>
								</div>

							</div>
						</div>
						
					</div>
					
				</div>
			
		</React.Fragment>
	);
};

export default Semana7;
