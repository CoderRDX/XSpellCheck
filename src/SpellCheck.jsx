import React, { useState } from "react";

const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };


  export default function SpellCheck(){

    const [inputText, setInputText] = useState('');
    const [suggestedText, setsuggestedText] = useState('');

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);
       
     
        const words = text.split(" ");
        const correctedWords = words.map((word) => {
          const correctedWord = customDictionary[word.toLowerCase()];
          return correctedWord || word;
        });
    
        const correctedText = correctedWords.join(" ");
        const firstCorrection = correctedWords.find(
          (word, index) => word !== words[index]
        );
        setsuggestedText(firstCorrection);

      };

    return(
        <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {suggestedText && (
          <p>
            Did you mean: <strong>{suggestedText}</strong>?
          </p>
        )}
      </div>
    );

  }