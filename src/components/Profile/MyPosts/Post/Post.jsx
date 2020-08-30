import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUap8S-5kNNUnDXcynSZeIaFnKNISGf7CN3Q&usqp=CAU" alt="avatar profile" />
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;