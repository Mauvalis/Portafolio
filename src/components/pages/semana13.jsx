import React, { useEffect } from "react";
import imagen from "../../img/imag13.png";
import "./styles/about.css";

const Semana13 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 13: Registro de Microservicios en Eureka.
								</div>

								<div className="subtitle about-subtitle">
								Registro de Microservicios en Eureka:

El registro de microservicios en Eureka es un enfoque comúnmente utilizado en arquitecturas basadas en microservicios para facilitar la comunicación y la descubierta de servicios en una red distribuida.

Creación del servidor Eureka:

Eureka es una herramienta desarrollada por Netflix que actúa como un servidor de registro y descubrimiento de servicios. Se encarga de mantener un registro actualizado de todos los microservicios disponibles en la red y permite a los clientes (otros microservicios) descubrir y comunicarse con ellos de manera dinámica.

Para crear un servidor Eureka, es necesario configurar una aplicación Spring Boot y agregar las dependencias adecuadas para Eureka Server. Una vez configurado, el servidor Eureka estará listo para recibir registros de microservicios.

Registro de un microservicio:

Para registrar un microservicio en Eureka, es necesario configurar otra aplicación Spring Boot y agregar las dependencias para Eureka Client. Luego, en la configuración del microservicio, se deben establecer algunas propiedades para indicar la ubicación del servidor Eureka. Una vez que el microservicio se ejecuta, automáticamente se registra en el servidor Eureka y está disponible para su descubrimiento por otros servicios.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag13"
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

export default Semana13;
