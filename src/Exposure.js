function Exposure(props) {
    return (
        <div className="flex justify-center align-middle overflow-hidden">
            <img src={require("./assets/home/" + props.imagePath)} className="scale-105 antialiased"></img>
        </div>
    )
}

export default Exposure;