
import Header from "../Header";

// Hooks interfere in Component life cycle methods
//component life cycle render(mount) => re render(update)=> unmount
// constuctor=> render()=> componentDidMount()=> 
export function Service()
{
    return (<div>
        <Header/>
        <h1>Service Page</h1>
        
    </div>)
}