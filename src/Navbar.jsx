import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>User Management</h2>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/users" style={styles.link}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/update/placeholder" style={styles.link}>
            Update User
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    display: "flex",
    listStyleType: "none",
    gap: "20px",
    margin: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default Navbar;
