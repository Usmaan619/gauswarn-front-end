import React from 'react';

const Button = ({title, ariaLabel='shop button'}) => {
    return (
        <button aria-label={ariaLabel} className="shop-button">{title}</button>
    );
}

export default Button;