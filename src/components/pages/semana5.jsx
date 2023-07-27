import React, { useEffect } from "react";
import imagen from "../../img/imag5.png";
import "./styles/about.css";

const Semana5 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 05: Desarrollo FrontEnd con Framework JS
								</div>

								<div className="subtitle about-subtitle">
								Desarrollo FrontEnd con Framework JS:

El desarrollo FrontEnd con Frameworks JS se refiere a la creación de la parte del cliente de una aplicación web utilizando un framework de JavaScript. Estos frameworks proporcionan herramientas y estructuras predefinidas para facilitar el desarrollo, mejorar la organización del código y ofrecer características avanzadas para crear aplicaciones web interactivas y escalables.

Estructura y operación de Framework - Client Side Rendering:

Los frameworks de JavaScript utilizan el enfoque de Client Side Rendering (renderizado en el lado del cliente) para construir la interfaz de usuario de una aplicación. Esto significa que la mayor parte del procesamiento y la representación del contenido ocurre en el navegador del cliente, en lugar de depender del servidor para generar páginas completas. Los frameworks toman los datos del servidor (a menudo en formato JSON) y, mediante el uso del DOM, actualizan dinámicamente la interfaz para mostrar el contenido al usuario.

Gestión de dependencias:

La gestión de dependencias es una parte esencial del desarrollo de FrontEnd con frameworks JS. Los frameworks y las aplicaciones que los utilizan dependen de múltiples bibliotecas y módulos de terceros para funcionar correctamente. Para simplificar esta tarea, se utilizan administradores de paquetes como npm o Yarn, que facilitan la instalación, actualización y eliminación de dependencias, asegurando que las bibliotecas necesarias estén disponibles y actualizadas.

Herramientas de creación de proyectos:

Las herramientas de creación de proyectos, como Create React App, Angular CLI o Vue CLI, permiten generar rápidamente una estructura inicial para un proyecto basado en el framework deseado. Estas herramientas automatizan tareas repetitivas y configuraciones iniciales, lo que acelera el proceso de inicio y facilita el desarrollo.

Laboratorio 01A: Instalación del proyecto y configuración de dependencias:

En el laboratorio 01A, se realiza la instalación y configuración inicial del proyecto. Esto puede implicar la creación de un nuevo proyecto utilizando una herramienta de creación de proyectos, la instalación de las dependencias necesarias para el framework seleccionado y la configuración inicial del entorno de desarrollo.
								</div>
								<a href="https://mauvalis.github.io/json/">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag5"
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

export default Semana5;
