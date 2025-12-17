function btnClick(){
    alert('You are Learning Right.')
}

function hoverBtn(){
    console.log('HOVER ME!!')
}

// function Clicker(){
//     return (
//         <>
//         <h2>Hello CLicker</h2>
//         <button onClick={btnClick}>Click</button>
//         <h2>Hover ME</h2>
//         <button onMouseOver={hoverBtn}>HOVER ME</button>
//         </>
//     )
// }


function Clicker({buttonText, message}){
    const handleClick = () => {
        alert(message)
    }
    return <button onClick={handleClick}>{buttonText}</button>
}
export default Clicker;

