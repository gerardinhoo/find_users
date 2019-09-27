import React, { useReducer, useEffect } from "react";
import axios from "axios";
import ProfileContext from "./profileContext";
import profileReducer from "./profileReducer";

import { SEARCH_USERS, SET_LOADING } from "../types";

const ProfileState = props => {
  const initialState = {
    users: [],
    loading: false
  };

  const [state, dispatch] = useReducer(profileReducer, initialState);

  // Search Users
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get("https://randomuser.me/api/?results=12");
      dispatch({
        type: SEARCH_USERS,
        payload: res.data.results
      });
    }
    fetchData();
  }, []);

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <ProfileContext.Provider
      value={{
        users: state.users,
        loading: state.loading
      }}
    >
      {props.children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;
