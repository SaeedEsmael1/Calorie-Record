import { Link } from "react-router-dom"
export const LandingPage = () => {
  return (
    <div>
        <p>Welcom To Calories Tracker!</p>
        <p>To Get Started, <a href="/track">Strat Tracking</a> </p>
        <Link>
            To Get Started, <Link to="/track">Strat Tracking</Link>
        </Link>
    </div>
  )
}