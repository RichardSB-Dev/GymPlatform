import { Link } from "react-router-dom"

export const notFound_screen = () => {
  return (
    <div>
        <span>404</span>
        <p>...Oops! Something is missing</p>
        <Link to='/'>Back Home</Link>
    </div>
  )
}
