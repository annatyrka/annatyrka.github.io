import React, { useState, useEffect } from 'react';

import Text from './text'
import Links from './links'
import Banner from './banner'
import NewQuoteButton from './newQuoteButton';

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

export default function QuoteBox({handleColorChange}) {

    const [newQuote, setNewQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchRandomQuote = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const allQuotes = data.quotes
      
      //get random quote
      const randomNum = Math.floor(Math.random() * allQuotes.length);
      const randomQuote = allQuotes[randomNum];
    
      setNewQuote(randomQuote.quote);
      setAuthor(randomQuote.author);
    })
    .catch((error) => {
      console.log("Error: ",error)
    });

    handleColorChange();
  }

  useEffect(() => {
    fetchRandomQuote();
  }, []);



  return (
    <div className="QuoteBox" >
        <Text quoteText={newQuote} author={author}  />
        <Banner>
            <Links />
            <NewQuoteButton onClick={fetchRandomQuote} className="NewQuoteButton Button" />
        </Banner>
    </div>
    );
  
}
