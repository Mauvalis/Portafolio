import React from "react";
import imagen from "../../img/imag9.png";
import "./styles/about.css";

const Semana9 = () => {
	return (
		<React.Fragment>

				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 09: Routing & consume API, Laboratorio 03: Caso práctico consumo de API – Parte 1.
								</div>

								<div className="subtitle about-subtitle">
								Front-end routing:

El enrutamiento en el Front-end se refiere a la capacidad de navegar y mostrar diferentes vistas o páginas dentro de una aplicación web sin tener que recargar la página completa. Esto permite crear aplicaciones de una sola página (SPA) en las que el contenido se actualiza dinámicamente en función de la URL actual, brindando una experiencia más rápida y fluida al usuario. Los frameworks JS, como React, Angular o Vue, ofrecen herramientas y enfoques para implementar el enrutamiento en el lado del cliente.

React-Router:

React-Router es una librería popular para el enrutamiento en aplicaciones React. Proporciona componentes que permiten definir rutas y establecer la lógica para mostrar diferentes componentes basados en la URL actual. Con React-Router, se puede establecer una configuración de rutas y utilizar enlaces y redirecciones para navegar por diferentes vistas de una aplicación SPA.

Promesas / Async await:

Las promesas y async/await son mecanismos utilizados en JavaScript para manejar operaciones asincrónicas. Cuando una operación puede llevar tiempo (como una llamada a una API o una solicitud de red), se utilizan promesas para manejar el resultado, ya sea éxito o error, en un momento posterior. El async/await es una sintaxis más amigable que trabaja con promesas, permitiendo escribir código asincrónico de manera más secuencial y fácil de leer.

Obteniendo datos de una API:

En el desarrollo Front-end, es común consumir datos de una API (Interfaz de Programación de Aplicaciones) para obtener información actualizada o interactuar con servicios externos. Para esto, se utilizan métodos como fetch o librerías como Axios para realizar solicitudes HTTP a la API y recibir los datos en formato JSON. Luego, estos datos pueden ser procesados y utilizados para actualizar la interfaz de la aplicación.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag9"
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

export default Semana9;
