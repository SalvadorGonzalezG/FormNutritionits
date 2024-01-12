        // pasamos el prop desde formulario 
const Error = ({ mensaje }) => {
  return (
    <div className=" rounded-md bg-red-400 p-3 uppercase font-bold text-white text-center mb-3">
        <p>{mensaje}</p>
    </div>
  )
}

export default Error