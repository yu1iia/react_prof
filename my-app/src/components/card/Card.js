import React from 'react'



export const Card = (props) =>{

    if (props.show) {
        return(
        <div style = {{minWidth: '200px', minHeight: '200px', textAlign: 'center', border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h2 onClick={() => props.click(props.name)}>Name: {props.name} </h2>
                <h3>Color: {props.color}</h3>
                <h3>Описание:</h3>
                <p>Здесь будет описание животного</p>
        </div>
    )
    }
    else {
         return(
        <div style = {{minWidth: '200px', minHeight: '200px', textAlign: 'center', border: '1px solid black', padding: '10px', margin: '10px'}}>
            <h2 onClick={() => props.click(props.name)}>Name: {props.name} </h2>
            <h3>Color: {props.color}</h3>
        </div>
    )
    }
}