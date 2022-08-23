import { signOut } from 'firebase/auth';
import React from 'react';
import { Loader } from 'react-feather';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';
import useRole from '../hooks/useRole';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({children}) => {
     let location = useLocation();
    let [user, loading, error] = useAuthState(auth)
    let [role, roleLoading] = useRole(user)
    // console.log(admin);
    if (loading || roleLoading) {
        return <Loading></Loading>
    }
    if (!user || role !== "admin") {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        toast.error('This is Protected for only Admin', {id: 'requireAdmin'})
        signOut(auth)
        return <Navigate to="/login" />;
    }
    return children;
};

export default RequireAuth;