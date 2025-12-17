function handleFormSubmit(evt){
    evt.preventDefault()
    console.log('SUBMITTED THE FORM')
}

function Form(){
    return (
        <form action="" onSubmit={handleFormSubmit}>
            <button>
                SUBMIT
            </button>
        </form>
    )
}

export default Form