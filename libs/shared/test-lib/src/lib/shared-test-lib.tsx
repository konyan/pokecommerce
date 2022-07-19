import styles from './shared-test-lib.module.scss';

/* eslint-disable-next-line */
export interface SharedTestLibProps {}

export function SharedTestLib(props: SharedTestLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedTestLib!</h1>
    </div>
  );
}

export default SharedTestLib;
