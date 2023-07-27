import React, { useEffect } from "react";
import imagen from "../../img/imag10.png";

import "./styles/about.css";

const Semana10 = () => {
	return (
		<React.Fragment>
			

			
				<div className="content-wrapper">
					<div className="about-logo-container">
						
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									Semana 10: Uso de Hooks.
								</div>

								<div className="subtitle about-subtitle">
								Uso de Hooks:

Los Hooks son una característica introducida en React que permiten utilizar el estado y otras características de React en componentes funcionales, sin necesidad de utilizar clases. Los Hooks son funciones especiales proporcionadas por React que se utilizan para agregar capacidades adicionales a los componentes funcionales.

useState:

useState es uno de los Hooks más comunes y se utiliza para agregar estado a un componente funcional. Permite declarar una variable de estado y una función para actualizar ese estado. Cuando el estado cambia, React vuelve a renderizar el componente con el nuevo valor de estado.

useEffect:

useEffect es otro Hook fundamental que se utiliza para realizar efectos secundarios en componentes funcionales. Puede ejecutar código después de que un componente se haya montado (componentDidMount), actualizado (componentDidUpdate) o desmontado (componentWillUnmount). También puede utilizarse para controlar dependencias y evitar renderizados innecesarios.

useContext:

useContext es un Hook que se utiliza para acceder al contexto de React en componentes funcionales. El contexto permite pasar datos desde un componente padre a componentes hijos, evitando tener que pasar propiedades a través de varios niveles de componentes.

useRef:

useRef es un Hook que se utiliza para crear una referencia mutable que puede persistir a lo largo del ciclo de vida del componente. Es útil para acceder al valor actual de un elemento DOM o para almacenar valores que no provocan una nueva renderización cuando cambian.

useReducer:

useReducer es un Hook que se utiliza para manejar el estado del componente de una manera más compleja que useState. Se asemeja a la utilización de Redux, permitiendo definir acciones y un reductor para actualizar el estado del componente en función de esas acciones.

useCallback:

useCallback es un Hook que se utiliza para memorizar una función, lo que evita que se cree una nueva función en cada renderización del componente. Es útil cuando se pasan funciones como propiedades a componentes hijos, ya que evita que los hijos se vuelvan a renderizar innecesariamente.




								</div>
								<a href="">
            <button>Ver proyecto</button>
          </a>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src={imagen} alt="imag10"
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

export default Semana10;
