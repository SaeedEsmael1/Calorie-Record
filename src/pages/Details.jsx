import { Link, useParams } from "react-router-dom";

const Details = () => {
    const prams = useParams();
  return (
    <div>
        <h3>Record Id Is {prams.recordId}</h3>
        <Link to=".."  relative="path">Go Back</Link>
    </div>
  )
}

export default Details;