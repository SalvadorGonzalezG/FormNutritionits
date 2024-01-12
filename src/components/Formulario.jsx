import { useState, useEffect } from "react"
import { FcVlc } from "react-icons/fc";
import Error from "./Error";

const Formulario = ({ paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [meta, setMeta] = useState('')

    const [error, setError] = useState(false)

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
        
        // spreed operator metodo inmutable tomo una copia del arreglo y lo agrega al objeto.
        setPaciente([...paciente, objetoPaciente])

        // Reiniciar el form. despues de enviar los datos del mismo form
        setNombre('')
        setNumber('')
        setEmail('')
        setDate('')
        setMeta('')
    }

    return (
        <div className="w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento de pasientes.</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Ingresa pasiente para {''}
                <span className="text-red-600 font-bold">Administrarlos.</span>
            </p>

            <form onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

                {error && <Error
                           mensaje='Faltan datos por ingresar.'  
                          />
                }

                <div className="mb-5">
                    <label htmlFor="paciente" className="block text-lime-600 uppercase font-bold">
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
                    <label htmlFor="numberPhone" className="block text-lime-600 uppercase font-bold">
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
                    <label htmlFor="fecha" className="block text-lime-600 uppercase font-bold">
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
                    <label htmlFor="resultados" className="block text-lime-600 uppercase font-bold">
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
                    className="bg-red-600 rounded-md w-full p-1 text-white uppercase font-semibold hover:bg-green-600 cursor-pointer transition-opacity"
                    value='Send'
                />
            </form>

        </div>


    )
}

export default Formulario