//Destructuring array
function Car(props)
{
    return(
        <>
        <h2> Color: {props.color}</h2>
        <h2> Name: {props.name}</h2>
        <h2> Brand: {props.brand}</h2>
        <h2> Year: {props.year[2]}</h2>
        </>
    );   
}
export default Car;