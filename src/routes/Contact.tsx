import * as React from 'react';
import {useState} from 'react';
import {render} from 'react-dom';
import {motion} from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import './styles.css';


import Circle from '../components/circle';

const Wrapper = () => {
    return(

        <>
        <div>Hello</div>
<Circle/>

        </>
    )
}

export default Wrapper;


