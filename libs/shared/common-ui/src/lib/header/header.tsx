import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  logo: string;
  texts: {
    explore: string;
    all: string;
    appareal: string;
    motion: string;
    about: string;
    help: string;
    cart: string;
    signIn: string;
  };
  isLoggedin: boolean;
  notificationBox: React.Component;
  notificationCount: number;
  userInfoBox: React.Component;
}

export function Header(props: HeaderProps) {
  return (
    <header className={styles['container']}>
      <div>
        <h1>TCG Marketplace</h1>
      </div>
    </header>
  );
}

export default Header;
