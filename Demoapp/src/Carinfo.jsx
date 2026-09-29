//Destructuring Children & array-object
function Carinfo(props)
{
    return(
        <>
        <h2 style={{backgroundColor:'black',color:'yellow'}}> Description: {props.children}</h2>
        <h2> Name: {props.carinfo.name}</h2>
        <h2> Color: {props.carinfo.color}</h2>
        </>
    );
}
export default Carinfo;