'use client'

import React, { useState } from 'react';
import style from './question_box.module.css'

export default function QuestionBox() {

    const question = ' What is the process of cleaning, normalizing, and transforming raw data to make it suitable for analysis?'
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        // Logic for form submission or next step
        console.log('Selected Option:', selectedOption);
      };
    

    return (

            <div className={style.container}>
                <h2 className={style.question}>{question}</h2>
            

            <form className={style.form} onSubmit={handleSubmit}>
                <label>
                    <input type="radio" name="answer" value="0" className={style.radio} onChange={handleChange} />Data integration
                </label>
                <label>
                    <input type="radio" name="answer" value="1" className={style.radio} onChange={handleChange}/>Data warehousing
                </label>
                <label>
                    <input type="radio" name="answer" value="2" className={style.radio} onChange={handleChange} />Data preparation
                </label>
                  <label>
                    <input type="radio" name="answer" value="3" className={style.radio} onChange={handleChange}/>Data visualization
                </label>
                <div className={style.button}>
                <button className={style.nextbutton} type="submit">
                        Previous
                </button>
                <button className={style.prevbutton} type="submit">
                         Next
                </button>
                </div>
            </form>

            </div>


    )
}
