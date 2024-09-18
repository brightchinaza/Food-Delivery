import React, { useState, useEffect } from 'react';
import './accordion.css';
import { assets } from '../../assets/assets';

const Accordion = () => {
  const [expandedImageBlock, setExpandedImageBlock] = useState(0);

  const imageBlocks = [
    {
      src: assets.CEO,
      alt: 'Bright Eluno, Chief Executive Officer',
      title: 'Bright Eluno',
      desc: '- Chief Executive Officer (CEO)',
    },
    {
      src: assets.CFO,
      alt: 'Udoji David, Chief Financial Officer',
      title: 'Udoji David',
      desc: '- Chief Financial Officer (CFO)',
    },
    {
      src: assets.CTO,
      alt: 'Nnamezie Jonathan, Chief Technology Officer',
      title: 'Nnamezie Jonathan',
      desc: '- Chief Technology Officer (CTO)',
    },
    {
      src: assets.HOL,
      alt: 'Prosper Madojemu, Head of Operations and Logistics',
      title: 'Prosper Madojemu',
      desc: '- Head of Operations and Logistics',
    },
    {
      src: assets.HOM,
      alt: 'khalid haroun, Head of Marketing',
      title: 'khalid haroun',
      desc: '- Head of Marketing and Customer Experience',
    },
  ];

  const handleImageBlockClick = (index) => {
    setExpandedImageBlock(index);
  };

  useEffect(() => {
    const cycleImages = () => {
      setExpandedImageBlock((prevIndex) => (prevIndex + 1) % imageBlocks.length);
    };
    const intervalId = setInterval(cycleImages, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="accordion">
      {imageBlocks.map((imageBlock, index) => (
        <div
          key={index}
          className={`image-block ${expandedImageBlock === index ? 'expanded' : ''}`}
          onClick={() => handleImageBlockClick(index)}
        >
          <img src={imageBlock.src} alt={imageBlock.alt} />
          <div className="details">
            <div className="details__info">
              <span className="details__info__title">{imageBlock.title}</span>
              <span className="details__info__desc">{imageBlock.desc}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
