import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function LoginHeader({ toggleTheme, isDark }) {
    return (
        <header className="login">
            <h1>Bar-restau</h1>
            <div className="header-right-login">
                <button onClick={toggleTheme}>
                <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                                </button>
            </div>
        </header>
    )
}
export default LoginHeader
