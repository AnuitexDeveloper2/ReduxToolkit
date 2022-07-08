import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import ProtectedRoute from "./components/protectedRoute";
import LoginPage from "./pages/login";
import ProfilePage from "./pages/profile";
import { store } from "./redux/store";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
