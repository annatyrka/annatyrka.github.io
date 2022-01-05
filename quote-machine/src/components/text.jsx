import React, { Component } from 'react';

export default function Text({quoteText, author}) {

    return(
        <div>
            <h2 className="Text">{quoteText}</h2>
            <h3 className="Author">{author}</h3>
        </div>
    )
}
