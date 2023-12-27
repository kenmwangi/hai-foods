import { Link } from "react-router-dom";
import Container from "./Container";

export default function Header() {
  return (
    <header className="bg-blue-800 text-white py-6">
      <Container>
        <nav className="flex justify-between items-center">
          <span className="text-3xl font-bold tracking-tight">
            <Link to="/">Holidays.com</Link>
          </span>
          <span className="flex space-x-2">
            <Link
              to="/sign-in"
              className="flex items-center text-blue-800 bg-white px-3 py-1 rounded-sm hover:bg-gray-100 transition-all"
            >
              Sign in
            </Link>
          </span>
        </nav>
      </Container>
    </header>
  );
}
