import React from 'react';
import './PromptSection.css'
import promptsData from './prompts.json';

const PromptList = () => {
    const prompts = [...promptsData.prompts, ...promptsData.prompts];
    return (
        <div className="scroll-container">
            <div className="scroll-wrapper">
                {prompts.map((prompt, index) => (
                    <div key={index} className="scroll-item">
                        {prompt}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromptList;
