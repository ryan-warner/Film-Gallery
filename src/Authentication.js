function Authentication(props) {
    return (
        <div className="h-screen w-full bg-gradient-to-l from-pink-300 via-purple-300 to-indigo-400 flex justify-center items-center">
            <div className="w-min h-4/5 rounded-2xl bg-primaryColor drop-shadow-2xl p-8">
                {props.content}
            </div>
        </div>
    )
}

export default Authentication;