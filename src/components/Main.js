import React from 'react';
import GridPrimary from './GridPrimary';
import GridSecondary from './GridSecondary';
import HeadingSecondary from './HeadingSecondary';


function Main() {
    return(
        <main className="main">
            <GridPrimary />
            <HeadingSecondary />
            <GridSecondary />

        </main>
    )
}


export default Main;