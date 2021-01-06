import React from 'react';
import styles from './Photo.module.css';
import classNames from 'classnames';

// const Photo = (src, alt) => <img className="photo" alt={alt} src={src} />;
console.log(styles);
// const Photo = (props) => <img className={styles.photo} alt='alt' {...props} />;

const Photo = ({ className, ...props }) => (
	<img
		className={classNames(styles.photo, className, { other: true })}
		alt='alt'
		{...props}
	/>
);

export default Photo;
