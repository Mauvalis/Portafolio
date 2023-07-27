import React, { useEffect } from "react";
import imagen from "../../img/imag11.png";
import "./styles/about.css";

const Semana11 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 11: Next JS – CSR / SSR.
								</div>

								<div className="subtitle about-subtitle">
								Next JS - CSR / SSR:

Next.js es un framework de React que permite crear aplicaciones web de manera sencilla y eficiente. Una de las principales ventajas de Next.js es que admite tanto el Renderizado del Lado del Cliente (CSR - Client-Side Rendering) como el Renderizado del Lado del Servidor (SSR - Server-Side Rendering).

CSR (Client-Side Rendering): En CSR, la aplicación se carga inicialmente en el navegador y luego, mediante JavaScript, se realiza la obtención y visualización de los datos. Esto significa que el contenido se genera en el cliente y depende de la capacidad de JavaScript del navegador.

SSR (Server-Side Rendering): En SSR, la aplicación se procesa y se genera en el servidor antes de enviarla al navegador. Esto permite que el contenido se muestre rápidamente al usuario y mejora el SEO (Optimización para Motores de Búsqueda).

Next.js proporciona un enfoque híbrido, donde podemos elegir cómo deseamos renderizar nuestras páginas, lo que ofrece una gran flexibilidad en el desarrollo.

Creación del proyecto / routing en Next:

Para crear un proyecto en Next.js, podemos utilizar el comando create-next-app o un generador de proyectos como npx create-next-app. Next.js tiene una estructura de proyecto predefinida con carpetas específicas para páginas, componentes, estilos y más, lo que facilita la organización del código.

En cuanto al enrutamiento en Next.js, este se basa en la estructura de carpetas y archivos. Cada archivo JavaScript o TypeScript dentro de la carpeta "pages" representa una ruta de la aplicación. Por ejemplo, un archivo "about.js" en la carpeta "pages" generará una ruta "/about" en la aplicación.

Estilos / Formularios:

Estilos: Next.js permite utilizar diferentes enfoques para estilizar aplicaciones, como CSS, Sass, Styled Components o CSS-in-JS. Además, Next.js tiene soporte para módulos de estilos, lo que facilita la encapsulación de estilos específicos de componentes.

Formularios: Next.js facilita el manejo de formularios utilizando el enrutamiento y los componentes de React. Los datos ingresados por el usuario en formularios pueden ser accedidos y manejados mediante el uso de "event handlers" (manejadores de eventos) y el estado del componente.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag11"
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

export default Semana11;
