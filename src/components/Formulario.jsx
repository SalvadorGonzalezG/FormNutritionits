import { useState, useEffect } from "react"

import Error from "./Error";

const Formulario = ({ paciente, setPaciente, upPaciente, setUpPaciente }) => {

    const [nombre, setNombre] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [meta, setMeta] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=>{
        //Forma de comprobar si un objeto tiene algo
        if(Object.keys(upPaciente).length>0){
            setNombre(upPaciente.nombre)
            setNumber(upPaciente.number)
            setEmail(upPaciente.email)
            setDate(upPaciente.date)
            setMeta(upPaciente.meta)
        }
    },[upPaciente]) //dependencias cuando el valor de una dependencia cambia se realiza un rederizado

    

    const generateId = () =>{
        const random = Math.random().toString(20).substring(2);
        const date = Date.now().toString(20)
        return random + date
    }

    // funcion que recibira el boton de enviar formulario .
    const handleSubmit = (e) => {
        e.preventDefault()

        // Validacion del formulario.
        //Si alfuno incluye un string vacio entoncs...
        if ([nombre, number, email, date, meta].includes('')) {
            console.log('Almenos hay un campo vacio')
            setError(true)
            return;
        } 
        // si se llena el formulario correctamente cambia a false el error.
        setError(false)

        // Objeto de paciente.
        const objetoPaciente = {
            nombre, 
            number, 
            email, 
            date, 
            meta
        }
        // Validacion para editar un registro.
        if(upPaciente.id){
            // Editando el registro
            objetoPaciente.id = upPaciente.id
            
            const pacientesActualizados = paciente.map(pacienteState => pacienteState.id === upPaciente.id ? objetoPaciente : pacienteState )
            setPaciente(pacientesActualizados)
            // estado modificador que regresa al estado inicial
            setUpPaciente({})

        } else{
            // Nuevo registro
            // spreed operator metodo inmutable tomo una copia del arreglo y lo agrega al objeto.
            objetoPaciente.id= generateId()
        setPaciente([...paciente, objetoPaciente])
        } 

        // Reiniciar el form. despues de enviar los datos del mismo form
        setNombre('')
        setNumber('')
        setEmail('')
        setDate('')
        setMeta('')
    }

    return (
        <div className="w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pacientes.</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Ingresa los datos {''}
                <span className="text-purple-300 font-bold">de</span>
                <span className="text-purple-400 font-bold">l p</span>
                <span className="text-purple-500 font-bold">ac</span>
                <span className="text-purple-600 font-bold">ie</span>
                <span className="text-purple-700 font-bold">nt</span>
                <span className="text-purple-800 font-bold">e.</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error
                           mensaje='Faltan datos por ingresar.'  
                          />
                }

                <div className="mb-5">
                    <label htmlFor="paciente" className="block text-lime-400 uppercase font-bold">
                        Paciente:
                    </label>

                    <input
                        id="paciente"
                        type="text"
                        placeholder="Nombre del paciente."
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="numberPhone" className="block text-lime-500 uppercase font-bold">
                        Telefono de contacto:
                    </label>

                    <input
                        id="numberPhone"
                        type="number"
                        placeholder="Numero telefonico de contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-lime-600 uppercase font-bold">
                        @Email:
                    </label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Example@mail.com"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha" className="block text-lime-700 uppercase font-bold">
                        Fecha de consulta:
                    </label>

                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="resultados" className="block text-lime-800 uppercase font-bold">
                        Meta:
                    </label>
                    <textarea
                        id="resultados"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Coloca cual es tu meta y que esperas obtener."
                        value={meta}
                        onChange={(e) => setMeta(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-amber-400 rounded-md w-full p-1 text-white uppercase font-semibold hover:bg-amber-500 cursor-pointer transition-opacity"
                    value={upPaciente.id ? "Editar Paciente."  : 'Agregar paciente.'}
                />
            </form>

        </div>


    )
}

export default Formulario