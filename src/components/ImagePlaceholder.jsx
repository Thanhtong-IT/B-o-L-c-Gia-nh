import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ImagePlaceholder = ({ src, alt = 'Hình minh họa', className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const hasImage = src && !hasError;

  if (!hasImage) {
    return (
      <div className={`img-placeholder ${className}`}>
        <div className="img-placeholder__inner">
          <svg className="img-placeholder__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="img-placeholder__text">Thêm ảnh minh họa</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={`img-placeholder img-placeholder--loaded ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        onError={() => setHasError(true)}
        className="img-placeholder__img"
      />
    </motion.div>
  );
};

export default ImagePlaceholder;
