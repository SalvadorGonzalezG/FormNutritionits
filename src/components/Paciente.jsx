

const Paciente = ({ lisPac }) => {

    const {nombre, number, email, date, meta} = lisPac

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-md">
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
            </div>
  )
}

export default Paciente