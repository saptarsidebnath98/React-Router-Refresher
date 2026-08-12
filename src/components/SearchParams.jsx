import { useLocation, useSearchParams } from "react-router"

const SearchParams = () => {
    const [searchparams] = useSearchParams();
    let location = useLocation();

  return (
    <div>
      <h2>This is Search Params Usage Page</h2>
      <p>Location pathname: {location.pathname}</p>
      <p>Location key: {location.key}</p>
      <p>Query params are : {searchparams.get('type')}</p>

    </div>
  )
}

export default SearchParams
