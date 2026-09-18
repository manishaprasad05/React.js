//Destructuring Properties
function Carinfo(props)
{
    return(
        <>
        <h2 style={{backgroundColor:'black',color:'yellow'}}> Description: {props.children}</h2>
        <h1> Name: {props.carinfo.name}</h1>
        <h1> Color: {props.carinfo.color}</h1>
        </>
    );
}
export default Carinfo;