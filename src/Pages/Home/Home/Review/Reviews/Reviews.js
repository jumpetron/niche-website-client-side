import React from 'react';

const Reviews = (props) => {
   const  {name, review} = props.review
    return (
      <div>
        <div>
          <h5>{name}</h5>
          <p>{review}</p>
        </div>
      </div>
    );
};

export default Reviews;