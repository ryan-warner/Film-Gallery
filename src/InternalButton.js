import { Link } from 'react-router-dom';

function InternalButton(props) {
    return (
        props.primaryButton ? 
        <Link className="min-w-fit w-min" to={props.to}><div className="text-2xl hover:scale-105 border-4 border-primaryAccent bg-primaryAccent h-min py-2 px-4 text-primaryColor font-semibold rounded-lg select-none shadow-lg">{props.label}</div></Link> :
        <Link className="min-w-fit w-min" to={props.to}><div className="text-2xl hover:scale-105 border-4 border-primaryAccent bg-transparent h-min py-2 px-4 text-primaryAccent font-semibold rounded-lg select-none shadow-lg">{props.label}</div></Link>
    )
}

export default InternalButton;