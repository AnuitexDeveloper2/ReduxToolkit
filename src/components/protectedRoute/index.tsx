import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../../redux/store";

interface Props {
  children: any;
}

const ProtectedRoute: React.FC<Props> = ({ children }) => {
    const authState = useSelector((appStore: RootState) => appStore.authReducer);
    debugger
  if (authState.login && authState.password) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;
