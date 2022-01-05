import React, { Component } from 'react';
import Button from './button';

export default function NewQuoteButton({ onClick }) {
    return (
        <Button onClick={onClick}>New Quote</Button>
    )
}