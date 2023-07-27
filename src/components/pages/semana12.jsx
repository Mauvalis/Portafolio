import React, { useEffect } from "react";
import imagen from "../../img/imag12.png";

import "./styles/about.css";

const Semana12 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 12: API RESTFUL con SPRINT BOOT.
								</div>

								<div className="subtitle about-subtitle">
								Spring Boot:

Spring Boot es una extensión del framework Spring que simplifica y agiliza la configuración y el desarrollo de aplicaciones Java. Proporciona una configuración automática y opinionada, lo que significa que toma decisiones inteligentes sobre cómo configurar la aplicación y reduce la necesidad de configuración manual. Spring Boot es especialmente útil para el desarrollo rápido de prototipos y aplicaciones basadas en microservicios.

API RESTful con Spring Boot:

Una API RESTful es una interfaz de programación de aplicaciones que sigue los principios y estándares de la arquitectura REST (Representational State Transfer). Utiliza los métodos HTTP (GET, POST, PUT, DELETE) para realizar operaciones en los recursos (datos) de una aplicación. Spring Boot es una excelente opción para desarrollar APIs RESTful, ya que proporciona características que facilitan la creación de servicios web escalables y seguros.

API Concepto y Arquitectura:

Una API (Interfaz de Programación de Aplicaciones) es un conjunto de reglas y protocolos que permite que dos aplicaciones se comuniquen entre sí. En el contexto de las API RESTful, se establece una arquitectura basada en recursos donde cada recurso (como usuarios, productos o pedidos) tiene una URL única y es accesible a través de los métodos HTTP.

La arquitectura RESTful se basa en los siguientes principios:

Recursos: Los recursos son entidades de datos en una aplicación que se pueden acceder a través de URLs únicas.
Métodos HTTP: Los métodos HTTP (GET, POST, PUT, DELETE) se utilizan para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los recursos.
Stateless: La comunicación entre cliente y servidor es stateless, lo que significa que cada solicitud del cliente debe contener toda la información necesaria para comprender y procesar la solicitud.
								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag12"
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

export default Semana12;
