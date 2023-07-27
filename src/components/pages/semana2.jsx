import React, { useEffect } from "react";
import imagen from "../../img/imag2.png";


import "./styles/about.css";

const Semana2 = () => {
	

	
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 02: Herramientas de desarrollo y Lenguaje Marcado de Hipertexto, Hojas de Estilos.
								</div>

								<div className="subtitle about-subtitle">
								Interfaz de usuario:
La interfaz de usuario de Visual Studio Code es la ventana principal del editor donde los desarrolladores trabajan en sus proyectos. En esta interfaz, puedes ver y editar archivos, navegar por carpetas, acceder a menús y barras de herramientas, y realizar diversas tareas relacionadas con el desarrollo de software. La interfaz está diseñada para ser simple y fácil de usar, con paneles configurables que pueden mostrarse u ocultarse según las necesidades del usuario.

Paleta de comandos:
La paleta de comandos es una característica muy útil de Visual Studio Code que permite a los desarrolladores acceder rápidamente a diferentes comandos y funcionalidades del editor. Puedes abrir la paleta de comandos presionando la combinación de teclas Ctrl+Shift+P en Windows/Linux o Cmd+Shift+P en macOS. Al escribir en la paleta, te sugerirá comandos disponibles y, al seleccionar uno, se ejecutará automáticamente la acción correspondiente. Esto agiliza el flujo de trabajo y permite a los usuarios realizar acciones sin tener que navegar por menús y opciones.

Terminal de comandos:
Visual Studio Code incluye un terminal integrado que permite a los desarrolladores ejecutar comandos de consola directamente desde el editor. Esto es especialmente útil cuando se trabaja con herramientas de línea de comandos, como compiladores, herramientas de control de versiones (Git) o cualquier otro comando relacionado con el desarrollo del proyecto. El terminal integrado aparece en la parte inferior del editor y puede dividirse en varias pestañas para trabajar con diferentes comandos o entornos.

Extensiones para desarrollo:
Una de las principales fortalezas de Visual Studio Code es su sistema de extensiones. Las extensiones son complementos que agregan funcionalidades adicionales al editor para adaptarlo a las necesidades específicas de los desarrolladores. Hay una amplia variedad de extensiones disponibles para prácticamente cualquier lenguaje de programación, marco de trabajo o tarea de desarrollo que puedas imaginar. Estas extensiones pueden agregar soporte de lenguaje, herramientas de depuración, integración con servicios en la nube, temas visuales y mucho más. Los usuarios pueden instalar y administrar extensiones fácilmente desde la propia interfaz de Visual Studio Code.
								</div>
								<a href="https://github.com/Mauvalis/emmet/blob/main/emmet.html">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div >
									<div >
										<img
											src={imagen} alt="imag2"
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

export default Semana2;