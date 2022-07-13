function Exposure(props) {
    return (

            <img src={require("./assets/home/" + props.imagePath)} className="h-full w-auto object-cover"></img>
    )
}

export default Exposure;