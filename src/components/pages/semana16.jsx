import React, { useEffect } from "react";
import imagen from "../../img/imag16.png";
import "./styles/about.css";

const Semana16 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 16: Segundo consolidado de la evaluación continua y reforzamiento
								</div>

								<div className="subtitle about-subtitle">
								Evaluaciòn del segundo consolidado.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag16"
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

export default Semana16;
