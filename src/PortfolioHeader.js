function PortfolioHeader(props) {
    const headerItems = ["My Portfolio", "Upload Photos", "Profile"]

    return (
        <div className="flex justify-between h-min">
            <p className="text-6xl py-2 overflow-visible bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">{props.selectedAlbum}</p>
        </div>
    )
}

export default PortfolioHeader;