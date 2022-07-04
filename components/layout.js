import styles from '../styles/Home.module.css';
import Footer from './footer';
import Navbar from './navbar';

export default function Layout({ children }) {
	return (
		<div className={styles.container}>
			<Navbar />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	);
}
