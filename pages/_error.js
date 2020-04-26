import React from 'react';
import Link from 'next/link';

const errorPage = () => (

    <div className='error-page'>
        <h1>Oops, something went wrong.</h1>
        <Link href="/"><a>Go Back</a></Link>

        <style jsx>{`
            .error-page {
            padding: 0 0.5rem;
            text-align: center;
            }
            a {
            background-color: #4CAF50; 
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            }
        `}</style>
    </div>
    
);

export default errorPage;