import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProfilePage:React.FC = () => {
    const authState = useSelector((state: RootState)=> state.authReducer)
    return(
        <h1>{authState.login}</h1>
    )
}

export default ProfilePage
