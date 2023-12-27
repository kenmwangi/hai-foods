import { Link } from "react-router-dom";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-9">
      <Container>
        <section className="flex justify-between items-center">
          <span className="text-xl font-bold tracking-tight">
            <Link to="/">Holidays.com</Link>
          </span>
          <span className="flex space-x-4 text-sm">
            <Link
              to="/privacy-policy"
              className="flex items-center text-white  hover:text-gray-200 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="flex items-center text-white  hover:text-gray-200 transition-all"
            >
              Terms & Conditions
            </Link>
          </span>
        </section>
        <section className="flex items-center justify-center mt-9">
          <p className="text-xs">
            &copy; Holidays.com, {new Date().getFullYear()}. All rights reserved
          </p>
        </section>
      </Container>
    </footer>
  );
}
