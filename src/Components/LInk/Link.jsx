
import PropTypes from 'prop-types'; 


const Link = ({route}) => {
    return (
       
        <li className="mr-10 hover:bg-slate-400 p-2 hover:px-3 rounded-xl" >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;