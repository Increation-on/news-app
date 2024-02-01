import React, { useRef } from 'react';
import styles from './slider.module.css';

const Slider = ({ children, step }) => {

    const sliderRef = useRef(null);

    const leftScroll = () => {
        sliderRef.current.scrollLeft -= step;
        console.log(sliderRef)
    }

    const rightScroll = () => {
        sliderRef.current.scrollLeft += step;
    }

    return (
        <div className={styles.slider}>
            <button onClick={leftScroll} className={styles.arrow}>{`<`}</button>
            {React.cloneElement(children, { ref: sliderRef })}
            <button onClick={rightScroll} className={styles.arrow}>{`>`}</button>
        </div>
    )
}

export default Slider;