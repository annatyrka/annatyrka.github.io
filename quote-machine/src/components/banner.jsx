import React, { Component } from 'react';

export default function Banner({ children }) {

    return <div className="Banner"> {children} </div>;
}

/*
'Whenever this component is invoked {props.children} will also be displayed and this
is just a reference to what is between the opening and closing tags of the component.

Instead of invoking the component with a self-closing tag <Picture />
if you invoke it will full opening and closing tags <Picture> </Picture>
you can then place more code between it.

This de-couples the <Picture> component from its content and makes it more reusable.'

*/