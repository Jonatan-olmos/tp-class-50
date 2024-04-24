import { Link } from "react-router-dom"

function NotFound() {
  return (
    
    <div className="d-flex justify-content-center h-100 ">
     <div className="d-flex flex-column gap-3">
       <h2 className="my-auto"> Uppsss.... estas perdido??</h2>
    <Link to={"/"}>volver al inicio</Link>
    </div>
   </div>
  )
}

export default NotFound