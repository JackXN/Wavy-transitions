
import * as React from 'react';
import {motion} from 'framer-motion';




const variants  = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y:50,
        opacity: 0,
        transition: {
            y:{stiffness: 1000}
        }
    }
}

const colors = ['fff7c', '@83jhfdb'],


export const MenuItem



