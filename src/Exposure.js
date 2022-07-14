function Exposure(props) {
    return (

            <img src={require("./assets/home/" + props.imagePath)} className="h-full w-auto object-cover opacity-80"></img>
    )
}

export default Exposure;