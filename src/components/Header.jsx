import { FcApproval } from "react-icons/fc";
const Header = () => {
  
  return (
    <>  
        <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
            Seguimiento {' '}
            <span className="text-green-500">Nu</span>
            <span className="text-green-600">tri</span>
            <span className="text-green-700">men</span>
            <span className="text-green-800">ta</span>
            <span className="text-green-900">l.</span>
        </h1>
        <h2 className=" mt-4 text-5xl text-center mx-auto w-3">  <FcApproval /> </h2>
       
        
    </>
  )
}

export default Header