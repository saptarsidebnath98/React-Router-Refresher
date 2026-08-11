import { useParams } from "react-router"

const Product = () => {
    const {pid, type } = useParams();

  return (
    <div>
      <h2>This is Product Page</h2>
        <p>The product id is {pid}</p>
        <p>The product type is {type}</p>
    </div>
  )
}

export default Product
