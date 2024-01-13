import {useState} from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
    // estado que inicia como un arreglo vacio que se ira llenando de acuerdo a los datos ingresados en el formulario.
  const [paciente, setPaciente] = useState([]);
  // cada uno de los pacientes es un objeto por lo tanto el estado comienza con un objeto vacio
  const [upPaciente, setUpPaciente] = useState({})
  // estado para eliminar un paciente.
  const [delPaciente, setDelPaciente] = useState({})
  

  return (
    <div className="container mx-auto mt-5">
      <Header />

      <div className="mt-12 md:flex">

        <Formulario 
        paciente={paciente}
        setPaciente={setPaciente}
        upPaciente={upPaciente}
        setUpPaciente={setUpPaciente}
        />

        <ListadoPacientes 
          paciente={paciente}
          setUpPaciente={setUpPaciente}
          setDelPaciente={setDelPaciente}
        />

      </div>

    </div>
  )
}

export default App
