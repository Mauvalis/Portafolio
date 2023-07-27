import React, { useEffect } from "react";
import imagen from "../../img/imag6.png";
import "./styles/about.css";

const Semana6 = () => {
	return (
		<React.Fragment>

				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 06: Eventos, Condicionales y Bucles con Framework JS y Utilización de Estilos en Framework JS.

								</div>

								<div className="subtitle about-subtitle">
								Eventos:

En el desarrollo FrontEnd con un Framework JS, los eventos son interacciones o acciones que ocurren en la interfaz de usuario, como hacer clic en un botón, mover el mouse sobre un elemento, enviar un formulario, etc. Los eventos permiten que la aplicación responda y realice acciones específicas cuando se producen estas interacciones. Los frameworks proporcionan métodos y funciones para capturar y manejar estos eventos de manera eficiente, permitiendo que la interfaz sea interactiva y receptiva a las acciones del usuario.

Renderizado condicional / Renderizado iterativo:

El renderizado condicional y el renderizado iterativo son técnicas utilizadas para mostrar contenido dinámicamente en función de ciertas condiciones o de una colección de datos.

Renderizado condicional: Permite mostrar u ocultar elementos o componentes en función de condiciones específicas. Por ejemplo, mostrar un mensaje de bienvenida solo cuando el usuario ha iniciado sesión.

Renderizado iterativo: Permite mostrar una lista de elementos dinámicamente, como una lista de tareas pendientes o publicaciones de un blog. Se logra mediante la iteración sobre una colección de datos y generando componentes o elementos para cada entrada en la colección.

Los frameworks JS proporcionan directivas o métodos para implementar estas técnicas de renderizado de manera más sencilla y optimizada.

Formularios:

Los formularios son una parte esencial de muchas aplicaciones web, ya que permiten a los usuarios enviar datos al servidor o interactuar con la aplicación. Los frameworks JS facilitan la gestión y validación de formularios mediante la vinculación de datos y eventos a los elementos del formulario. Esto permite acceder y procesar los datos ingresados por el usuario, así como proporcionar retroalimentación en tiempo real sobre la validez de los campos o enviar los datos ingresados al servidor para su procesamiento.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag6"
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

export default Semana6;
