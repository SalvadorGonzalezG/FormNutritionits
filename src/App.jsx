import {useState} from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
    // estado que inicia como un arreglo vacio que se ira llenando de acuerdo a los datos ingresados en el formulario.
  const [paciente, setPaciente] = useState([]);

  

  return (
    <div className="container mx-auto mt-5">
      <Header />

      <div className="mt-12 md:flex">

        <Formulario 
        paciente={paciente}
        setPaciente={setPaciente}
        />

        <ListadoPacientes 
          paciente={paciente}
        />

      </div>

    </div>
  )
}

export default App
