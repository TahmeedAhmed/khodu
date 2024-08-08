import { useState } from 'react';
import './Welcome.css';

export const Welcome = ({value, delay}) => {

    return (
        <div class="container">
            <h2 class={delay ? "fade-out-text-delay" : "fade-out-text"}>{value}</h2>
        </div>
    );
}
