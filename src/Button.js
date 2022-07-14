function Button(props) {
    // option - color as fill or just border
    return (
    props.primaryButton ? 
        <button className="text-2xl min-w-fit w-min hover:scale-105 border-4 border-primaryAccent bg-primaryAccent h-min py-2 px-4 text-primaryColor  font-semibold rounded-lg select-none shadow-lg" onClick={() => props.onClick(props.options)}>{props.label}</button> :
        <button className="text-2xl min-w-fit w-min hover:scale-105 border-4 border-primaryAccent bg-transparent h-min py-2 px-4 text-primaryAccent font-semibold rounded-lg select-none shadow-lg" onClick={() => props.onClick(props.options)}>{props.label}</button>
    )
}

export default Button;