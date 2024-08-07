import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import PropTypes from "prop-types";
import styles from "./Header.module.scss"; // Import your CSS module for styling
import Logo from "./Logo";

const Header = () => {
  const { user, logout } = useAuth(); // Accessing user from the auth context
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    logout();
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logoLink}>
          <Logo src={Logo} alt="logo" />
        </Link>
        <nav>
          {user ? (
            <>
              <div className={styles.diaryCalculatorContainer}>
                <Link to="/diary" className={styles.navLink}>
                  Diary
                </Link>
                <Link to="/calculator" className={styles.navLink}>
                  Calculator
                </Link>
              </div>
              <div className={styles.userContainer}>
                {" "}
                <span className={styles.navLink}>{user.name}</span>
                <hr />
                <button onClick={handleLogout} className={styles.navButton}>
                  Exit
                </button>
              </div>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Log in
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? styles.activeNavLink : styles.navLink
                }
              >
                Register
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func,
};

export default Header;
