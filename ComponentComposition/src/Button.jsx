//2)Specialization(props-Based Composition)

function Button({text,color,onClick})
{
    return(
        <>
            <button style={{backgroundColor:color}} onClick={onClick}>{text}</button>
        </>

    );
}
export default Button;