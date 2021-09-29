import React from 'react'
import './App.css'

export default function Container(props) {
    return (
            <span className="square" onClick={props.onClick}>{props.text}</span>
    )
}
