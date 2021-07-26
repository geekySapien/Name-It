import { exportDefaultSpecifier } from '@babel/types';
import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer=({suggestedNames})=>{
    const suggestedNamesJsx=suggestedNames.map((suggestedName)=>{
        return <NameCard key={suggestedName} suggestedName={suggestedName}/>
    })
    return (
        <div className='results-container'>
           
                {/*{suggestedNames.length && suggestedNames[0]}*/}
                {suggestedNamesJsx}
            
        </div>
    );
}

export default ResultsContainer;