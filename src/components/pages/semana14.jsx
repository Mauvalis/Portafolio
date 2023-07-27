import React, { useEffect } from "react";
import imagen from "../../img/imag14.png";
import "./styles/about.css";

const Semana14 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 14: Consumo de un Microservicio.
								</div>

								<div className="subtitle about-subtitle">
								Consumo de un Microservicio:

El consumo de un microservicio se refiere a la forma en que otro servicio o cliente se comunica y utiliza los servicios proporcionados por un microservicio específico. Esto implica realizar solicitudes a la API expuesta por el microservicio y procesar las respuestas para obtener los datos o realizar acciones deseadas.

Para consumir un microservicio, el cliente necesita conocer la ubicación del servicio y la estructura de su API. En entornos basados en microservicios, esto puede lograrse utilizando el registro y descubrimiento de servicios, como Eureka, para encontrar la ubicación del microservicio deseado y luego realizar solicitudes HTTP a su API.

Configuración avanzada en Eureka:

Eureka ofrece configuraciones avanzadas para personalizar su comportamiento y mejorar su rendimiento en entornos más complejos.

Algunas configuraciones avanzadas en Eureka incluyen:

Configuración de tolerancia a fallos y tiempo de espera para la recuperación de instancias de microservicios perdidos o inaccesibles.
Configuración de umbrales y reglas de filtrado para el registro y desregistro de instancias de microservicios en el servidor Eureka.
Configuración de métricas y monitoreo para rastrear el rendimiento y la disponibilidad del servidor Eureka y sus instancias de microservicios.
Estas configuraciones avanzadas permiten ajustar Eureka según las necesidades específicas del entorno y mejorar su confiabilidad y escalabilidad.

Configuración en la nube:

La configuración en la nube se refiere a la forma en que los servicios de registro y descubrimiento, como Eureka, se implementan y escalan en entornos de nube.

En arquitecturas de microservicios alojadas en la nube, Eureka puede implementarse en múltiples instancias para proporcionar alta disponibilidad y resistencia a fallos. También se pueden aplicar políticas de escalado automático para adaptarse a la carga de la aplicación y asegurar un rendimiento óptimo.

Además, las plataformas en la nube, como AWS o Azure, pueden ofrecer servicios específicos para el registro y descubrimiento de microservicios, lo que simplifica la configuración y el mantenimiento de la infraestructura.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag14"
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

export default Semana14;
