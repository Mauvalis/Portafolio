import React, { useEffect } from "react";
import imagen from "../../img/imag4.png";

import "./styles/about.css";

const Semana4 = () => {
	

	
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 04: Manejo del DOM con Javascript.
								</div>

								<div className="subtitle about-subtitle">
								Manejo del DOM con JavaScript:

El Document Object Model (DOM) es una representación estructurada y jerárquica de un documento HTML o XML, y con JavaScript, podemos manipular este modelo para interactuar con los elementos de una página web.

Métodos y propiedades: JavaScript proporciona una variedad de métodos y propiedades para acceder y manipular el DOM. Los métodos permiten realizar acciones, como seleccionar elementos, agregar o eliminar contenido, modificar atributos y más. Las propiedades permiten acceder a datos específicos de los elementos, como su contenido, clases, estilos, entre otros.
Elementos / Estilos con JavaScript:

Elementos: Con JavaScript, podemos seleccionar elementos del DOM utilizando métodos como getElementById, getElementsByClassName, querySelector, etc. Una vez seleccionados, podemos manipular su contenido, atributos y estilos, o añadir nuevos elementos al DOM.

Estilos: Podemos modificar los estilos CSS de un elemento utilizando la propiedad style de un elemento. Por ejemplo, podemos cambiar el color, el tamaño de fuente, el fondo y otros atributos visuales de un elemento mediante JavaScript.

Animaciones:

Las animaciones en JavaScript se utilizan para crear transiciones suaves y efectos visuales en la interfaz de una página web.

Transiciones: Con CSS y JavaScript, podemos aplicar transiciones a propiedades CSS específicas (como cambios de posición, tamaño o color) para que los cambios de estado de un elemento sean más suaves.

Animaciones personalizadas: También podemos crear animaciones personalizadas mediante JavaScript utilizando librerías o utilizando funciones de tiempo como setTimeout o requestAnimationFrame para controlar los cambios progresivos en el estado de un elemento a lo largo del tiempo.
								</div>
								<a href="https://mauvalis.github.io/emmet/">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag4"
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

export default Semana4;