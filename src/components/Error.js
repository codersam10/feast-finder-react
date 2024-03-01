
import { useRouteError} from "react-router-dom"
const Error = () => {
  const err = useRouteError();
  const style ={
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    height:"100vh",
    flexDirection:"column",
    color:"red",
    fontSize:"2rem"
  }
  console.log(err)
  return (
    <div className="error" style={style}>
      <h1>Error {err.status} {err.statusText}</h1>
    </div>
  );
};

export default Error;
