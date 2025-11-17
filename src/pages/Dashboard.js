import { useLocation } from "react-router-dom"

export function Dashboard()
{
    const data=useLocation()
    return (<div>
        <h1>Welcome User {data.state.email}</h1>
    </div>)
}