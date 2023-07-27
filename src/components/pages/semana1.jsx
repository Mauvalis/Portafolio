import React, { useEffect } from "react";
import imagen from "../../img/imag1.png";

import "./styles/about.css";

const Semana1 = () => {
	

	
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 01: Fundamentos de las tecnologías web
								</div>

								<div className="subtitle about-subtitle">
								Aplicaciones para Internet:
Las aplicaciones para Internet, también conocidas como aplicaciones web, son programas o software que se ejecutan en un navegador web y se accede a ellas a través de Internet. Estas aplicaciones pueden ser tan sencillas como una página web estática o tan complejas como plataformas en línea que ofrecen una variedad de funcionalidades interactivas. Las aplicaciones para Internet permiten a los usuarios realizar diversas tareas, como leer contenido, realizar compras, interactuar con otras personas y mucho más, todo desde la comodidad de su navegador.

Desarrollo Front-end:
El desarrollo front-end se refiere a la creación y diseño de la interfaz y la experiencia del usuario en una aplicación web. Los desarrolladores front-end se centran en la parte visual y de interacción de una aplicación, trabajando con lenguajes como HTML, CSS y JavaScript para estructurar la información, diseñar la apariencia y añadir interactividad. Su objetivo principal es garantizar que la aplicación sea atractiva, intuitiva y fácil de usar para los usuarios finales.

Desarrollo Back-end:
El desarrollo back-end es la parte de la programación que se encarga del funcionamiento detrás de escena de una aplicación web. Los desarrolladores back-end trabajan con tecnologías y lenguajes de programación que gestionan la lógica del servidor, la base de datos y la comunicación con el front-end. Estos profesionales se aseguran de que los datos se manejen adecuadamente, implementan la lógica empresarial y gestionan la seguridad y el rendimiento de la aplicación.

Mockups / UX Design:
Los mockups y el diseño de experiencia de usuario (UX) están relacionados con la fase de diseño de una aplicación antes de su desarrollo completo. Los mockups son representaciones visuales estáticas o prototipos interactivos que muestran cómo será la apariencia y la disposición de los elementos en la aplicación final. Estos mockups permiten que los diseñadores y los interesados en el proyecto puedan revisar y ajustar el diseño antes de pasar a la fase de desarrollo.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div >
									<div >
										<img
											src={imagen} alt="imag1"
																					
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

export default Semana1;
