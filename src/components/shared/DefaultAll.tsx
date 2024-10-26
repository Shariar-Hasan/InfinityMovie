'use client';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';
import ScrollToTop from '../small-ui/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import FetchWatchList from '../small-ui/FetchWatchList';
import 'react-toastify/dist/ReactToastify.css';

const DefaultAll = () => {
    return (
        <>
            <NextTopLoader color='#0090C1' showSpinner={false} />
            <ScrollToTop />
            <ToastContainer closeOnClick autoClose={2000} />
            <FetchWatchList />
        </>
    );
};

export default DefaultAll;
