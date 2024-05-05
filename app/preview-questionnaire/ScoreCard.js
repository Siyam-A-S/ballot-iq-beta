// ScoreCard.js
import React from 'react';
import Typewriter from 'typewriter-effect'; 
 
const ScoreCard = ({ quizResult, questions, name }) => {
    const passPercentage = 60;
 
    const percentage = (quizResult.score / (questions.length * 5)) * 100;
    const status = percentage >= passPercentage ? 'Pass' : 'Fail';
 
    return (
        <>
            <div className='card p-4'>
                <h3>Hello, {name}. Here is your Result Analysis</h3>
                <table className='table'>
                    <tbody>
                        <p>
                            Based on your preferences, we recommend you:
                            <div className='text-3xl'>
                                {status === 'Pass' ? (
                                    <p>Donald Trump
                                    </p>
                                ) : (
                                    <p>Joe Biden</p>
                                )}
                            </div>
                        </p>
                    </tbody>
                </table>
                <div>
                    {status === 'Pass' ? (
                                <div> 
                                <Typewriter 
                                    onInit={(typewriter) => { 
                                    typewriter.typeString('Based on your reaction, seems like Donald Trump is a no-brainer for you') 
                                        .callFunction(() => { 
                                        }) 
                                        .pauseFor(5500) 
                                        .deleteAll() 
                                        .callFunction(() => { 
                                        }) 
                                        .start(); 
                                    }} 
                                /> 
                                </div> 
                        // <p>Based on your reaction, seems like Donald Trump is a no-brainer for you</p>
                    ) : (
                        <div> 
                                <Typewriter 
                                    onInit={(typewriter) => { 
                                    typewriter.typeString('Based on your reaction, seems like you were confused with the outcome. Maybe try again.') 
                                        .callFunction(() => { 
                                        }) 
                                        .pauseFor(5500) 
                                        .deleteAll() 
                                        .callFunction(() => { 
                                        }) 
                                        .start(); 
                                    }} 
                                /> 
                                </div>


                        // <p>Based on your reaction, seems like you weren't satisfied with our recommendation. Maybe try again.</p>
                    )}
         
                </div>
                <button
                    onClick={() => window.location.reload()}
                    className='btn btn-primary mt-3'
                >
                    Restart
                </button>
            </div>
        </>
    );
};
 
export default ScoreCard;