

const Paciente = ({ lisPac, setUpPaciente, setDelPaciente}) => {

    const {nombre, number, email, date, meta} = lisPac

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-md mt-5">
                <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {''}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Telefono de contacto: {''}
                    <span className="font-normal normal-case">{number}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> @mail: {''}
                    <span className="font-normal normal-case">{email}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha de consulta: {''}
                    <span className="font-normal normal-case">{date}</span>
                </p>

                <p className="font-bold mb-3 text-gray-700 uppercase"> Meta: {''}
                    <span className="font-normal normal-case">{meta}</span>
                </p>
                <div className="flex justify-around mt-10">
                    <button 
                      type="button"
                      className="py-2 px-7 hover:bg-indigo-300 bg-sky-400 text-white font-bold uppercase rounded-lg"
                      onClick={()=> setUpPaciente(lisPac)}
                    >  Editar
                    </button>
                    <button 
                      type="button"
                      className="py-2 px-7 hover:bg-red-700 bg-red-600 text-white font-bold uppercase rounded-lg"
                      onClick={()=> delete(setDelPaciente(lisPac))}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
  )
}

export default Paciente