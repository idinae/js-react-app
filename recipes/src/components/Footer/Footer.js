import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
    return (
      <div className={style.container}>
        <div className={style.footer}>
            <p>&copy; Made by idinae. Photos by <Link to="http://subektiv.com/">emmmo</Link>.
            </p>
        </div>
      </div>
    );
}

export default Footer;