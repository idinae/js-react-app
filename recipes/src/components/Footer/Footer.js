import style from './Footer.module.css';

const Footer = () => {
    return (
      <div className={style.container}>
        <div className={style.footer}>
            <p>&copy; Made by <a href="" rel="nofollow">idinae</a>. Photos by <a href="http://subektiv.com/">emmmo</a>.
            </p>
        </div>
      </div>
    );
}

export default Footer;