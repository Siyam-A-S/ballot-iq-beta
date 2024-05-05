// ScoreCard.js
import React from 'react';
 
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
                            Based on your answers, we recommend you:
                            <div className='text-3xl'>
                                Donald Trump
                            </div>
                        </p>
                    </tbody>
                </table>
                <div>
                    {status === 'Pass' ? (
                        <p>Based on your reaction, seems like Donald Trump is a no-brainer for you</p>
                    ) : (
                        <p>Based on your reaction, seems like you weren't satisfied with our recommendation. Maybe try again.</p>
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