import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img
                src='https://github.com/marcomonteirobrito.png'
                alt='Marco Antonio'
            />

            <div>
                <strong>Marco Antônio</strong>
                <p>Level 1</p>
            </div>
        </div>
    );
}
