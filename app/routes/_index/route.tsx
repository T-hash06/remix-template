export { meta } from './meta';

import styles from './index.module.css';

const IndexRoute = () => {
	return (
		<main className={styles.mainPage}>
			<h1 className={styles.title}>Hello World!</h1>
		</main>
	);
};

export default IndexRoute;
