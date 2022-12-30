import React from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Movie from "../components/movie/Movie";
import { User } from "../components/users/User";

const PageRoutes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/movie/list" />} />
          <Route path="/movie/list" element={<Movie />} />
          <Route path="/add/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
};

export default PageRoutes;
