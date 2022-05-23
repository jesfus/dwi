import { Link } from "react-router-dom";
import styles from './about.module.scss';

const About = (): JSX.Element => {
    return (
        <>
            <main>
                <h2 className={styles.title}>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export default About