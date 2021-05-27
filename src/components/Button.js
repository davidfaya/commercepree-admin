import React, { Fragment } from 'react'

const Button = ({ children, type='default', selected, onClick }) => {
    return (
        <Fragment>
            <button 
                onClick={onClick}
                class=" transition duration-500
                        ease-in-out
                        transform hover:-translate-y-1 hover:scale-110 
                        py-2 px-4 
                        bg-green-500 
                        text-white 
                        font-semibold 
                        rounded-lg 
                        shadow-lg 
                        hover:bg-green-700 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-green-400 
                        focus:ring-opacity-75">
                {children}
            </button>
            
        </Fragment>
    )
}

export default Button
