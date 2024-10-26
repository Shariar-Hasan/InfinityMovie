import NextTopLoader from 'nextjs-toploader';
import React from 'react';
import ScrollToTop from '../small-ui/ScrollToTop';

const DefaultAll = () => {
    return (
        <>
            <NextTopLoader color='#0090C1' showSpinner={false} />
            <ScrollToTop />
        </>
    );
};

export default DefaultAll;
