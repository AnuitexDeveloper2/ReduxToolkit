import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN, NAME, PASSWORD } from "../../constants";
import { loginData } from "../../helper/credentials";
import { submit } from "../../redux/reducers/authReducer";
import "./index.scss";

interface State {
  password: string;
  login: string;
}
const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [state, setState] = useState<State>({
    password: "",
    login: "",
  });

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    },
    [state]
  );

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(submit(state));
    history("/profile");
  };

  return (
    <form className="form-wrapper">
      <div className="form-inner">
        <h1>{LOGIN}</h1>
        <div className="form-group">
          <label htmlFor="login">{NAME}</label>
          <input type="text" name="login" onChange={handleInput} />
        </div>
        <div className="form-group">
          <label htmlFor="password">{PASSWORD}</label>
          <input type="text" name="password" onChange={handleInput} />
        </div>
        <div className="form-group">
          <button
            disabled={
              state.password !== loginData.password ||
              state.login !== loginData.login
            }
            onClick={onSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
