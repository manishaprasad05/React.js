//Destructuring ...rest
function Car2({color,brand,...rest})
{
    return(
        <>
        
            <h2>My {brand} {rest.model} is {color}!</h2>
        </>
    );
}   
export default Car2;