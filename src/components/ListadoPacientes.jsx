import Paciente from "./Paciente"

// prop extraido desde el estado que se encuentra en App.jsx.
const ListadoPacientes = ({paciente}) => {
    
    
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            <h2 className="font-black text-3xl text-center"  >Lista Pacientes para completar el texto.</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {''}
                <span className="text-red-600 font-bold ">Pacientes y citas.</span>
            </p>
            { paciente.map( lisPac => ( // iteracion de cada uno de los pacientes se van colocando en pantalla.

                    <Paciente 
                        lisPac={lisPac}
                    />
                
            ))}
            
            

        </div>
    )
}

export default ListadoPacientes