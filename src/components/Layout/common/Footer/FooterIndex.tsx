import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <footer className={cx('footer-wrapper')}>
      <h2>Footer</h2>
    </footer>
  );
}

export default Footer;
