// src/App.jsx
import ProtectedRoute from "./components/ProtectedRoute";

const isAuthenticated = false; // Simulate authentication status

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="profile/*"
          element={
            <ProtectedRoute element={<Profile />} isAuthenticated={isAuthenticated} />
          }
        />
        <Route path="post/:id" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
