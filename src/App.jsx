import {useState, useEffect} from 'react'

import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
    // estado que inicia como un arreglo vacio que se ira llenando de acuerdo a los datos ingresados en el formulario.
  const [paciente, setPaciente] = useState([]);
  // cada uno de los pacientes es un objeto por lo tanto el estado comienza con un objeto vacio
  const [upPaciente, setUpPaciente] = useState({})

  //Orden en el que se definen los useEfect es en elque se van ejecutando.
  useEffect(()=>{
    // obtener lo que haya en localStorage
    const obtenerLocalStorage = () =>{ 
                                  // si no hay nada el lS agrega un arreglo vacio.
      const pacienteLocalStorage = JSON.parse(localStorage.getItem('paciente')) ?? [];
      setPaciente(pacienteLocalStorage)
    }
    obtenerLocalStorage();
    // dependencia vacia para que se ejecute una unica vez.
  }, [])

  useEffect(()=>{
    localStorage.setItem('paciente', JSON.stringify( paciente ))
  },[paciente])

  // funcion para eliminar un paciente
  const deletePaciente = (id) => {
  //.filter no muta el objeto original sino que  genera uno nuevo.
    const pacientesActualizados = paciente.filter(upPaciente=>upPaciente.id !== id)
    setPaciente(pacientesActualizados)
  }
  
  

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
          deletePaciente={deletePaciente}
        />

      </div>

    </div>
  )
}

export default App
