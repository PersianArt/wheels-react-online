import React from 'react';

export const Spinner = (props) => {
    return <div className={`spinner-wrapper ${props.loading && 'active'}`}>
        {props.loading && <span className='spinner-item skin-color icon-spinner9' />}
        {props.children}
    </div>
};

