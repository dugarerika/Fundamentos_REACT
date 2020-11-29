import React from 'react';
import styles from './Photo.module.css';


// const Photo = (src, alt) => <img className="photo" alt={alt} src={src} />;
console.log(styles);
const Photo = props => <img className={styles.photo} alt="alt" {...props}/>;

export default Photo;