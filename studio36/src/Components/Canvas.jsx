import React, { useEffect, useRef, useState } from 'react';
import CanvasImages from '../assets/canvasImages';
import gsap from 'gsap';

function Canvas() {
    const [index, setIndex] = useState(149);  
    const canvaRef = useRef(null);

    useEffect(() => {
        const gsapAnimation = gsap.to({}, {
            value: 149,
            duration: 3,
            
            ease: 'linear',
            onUpdate: () => {
                setIndex(Math.round(gsapAnimation.progress() * 149));
            }
        });
        return () => gsapAnimation.kill();
    }, []);

    useEffect(() => {
        const canvas = canvaRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = CanvasImages[index];
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    }, [index]);

    return (
        <canvas id='canvas' ref={canvaRef} className='w-[18rem] h-[18rem]'>jdlkfjlk</canvas>
    );
}

export default Canvas;
