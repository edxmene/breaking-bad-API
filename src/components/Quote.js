import React from 'react'

const Quote = ({quote}) => {
    const {text, author} = quote;
    return (
        <div>
            <p>{text} <br />
            <span> - {author}</span>
            </p>
        </div>
    )
}

export default Quote;