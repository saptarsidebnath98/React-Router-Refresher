import { useParams } from "react-router";

const File = () => {

let { "*": splat } = useParams();;

  return (
    <div>
      <h2>This File Page</h2>
      <p>File path : {splat}</p>
    </div>
  )
}

export default File
