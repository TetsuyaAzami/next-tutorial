import styles from './Footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles['image-container']}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
				</a>
			</div>
		</footer>
	);
}
