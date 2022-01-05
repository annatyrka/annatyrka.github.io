
import React, {  useState } from 'react';
import QuoteBox from './components/quoteBox';
import backgroundColors from './backgroundColors';

export default function App(){

const [primary, setPrimary] = useState('')
const [primaryDark, setPrimaryDark] = useState('')



    const changeBackground = () => {
        let randomNum = Math.floor(Math.random()*backgroundColors.length)

        setPrimary(backgroundColors[randomNum].main);
        setPrimaryDark(backgroundColors[randomNum].dark); 
        }

    return(
        <div className="App" style={{'--primary': primary, '--primary-dark':primaryDark}}>
        <QuoteBox handleColorChange={changeBackground} />
    </div>
    )

}