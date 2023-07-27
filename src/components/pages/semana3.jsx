import React, { useEffect } from "react";
import imagen from "../../img/imag3.png";

import "./styles/about.css";

const Semana3 = () => {
	

	
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 03: Programación Front-End Javascript.
								</div>

								<div className="subtitle about-subtitle">
								Programación Front-End con JavaScript:

La programación Front-End con JavaScript se enfoca en la creación de interacciones y funcionalidades en la parte del cliente dentro de una aplicación web. Es decir, se trabaja directamente con el navegador del usuario para mejorar la experiencia y la interactividad en la interfaz.

Lenguaje JavaScript:

JavaScript es un lenguaje de programación versátil, interpretado y orientado a objetos, utilizado principalmente en el desarrollo web. Es un lenguaje de alto nivel y dinámico que se ejecuta en el navegador del usuario. Además de ser el lenguaje dominante en el Front-End, también se utiliza en el Back-End con Node.js.

Números / Strings / Objetos y Métodos:

Números: En JavaScript, los números se utilizan para realizar cálculos matemáticos. El lenguaje es lo suficientemente flexible como para trabajar con números enteros y números con decimales. Ofrece una variedad de operadores matemáticos, como suma, resta, multiplicación, división y más.

Strings (cadenas de texto): Los strings son secuencias de caracteres y se utilizan para representar texto en JavaScript. Puedes trabajar con cadenas para manipular y mostrar texto, como concatenar (unir) strings, extraer partes de una cadena y mucho más.

Objetos y Métodos: En JavaScript, los objetos son estructuras de datos que pueden contener propiedades y métodos. Las propiedades son como variables dentro del objeto, y los métodos son funciones que pueden ser invocadas para realizar acciones relacionadas con el objeto.

Booleanos / Funciones / Funciones Flecha:

Booleanos: Los booleanos son un tipo de dato que solo puede tener dos valores posibles: true (verdadero) o false (falso). Se utilizan para evaluar condiciones y controlar el flujo del programa.


								</div>
								<a href="https://wp.ditsolution.net/techno/home-8/">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div >
									<div >
										<img
											src={imagen} alt="imag3"
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

export default Semana3;