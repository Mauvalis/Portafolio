import React, { useEffect } from "react";
import imagen from "../../img/imag8.png";

import "./styles/about.css";

const Semana8 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 08: Primer consolidado de evaluación continua y reforzamiento.
								</div>

								<div className="subtitle about-subtitle">
								Entrega de notas del primer consolidado.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag8"
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

export default Semana8;
