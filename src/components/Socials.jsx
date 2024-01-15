import '../App.css';
import { FaFacebookSquare, FaPinterest, FaInstagram } from "react-icons/fa";

const Socials = () => {

    return (
        <footer>
            <FaFacebookSquare className="social"/>
            <FaPinterest className="social"/>      
            <FaInstagram className="social"/>
        </footer>
    )
};

export default Socials;