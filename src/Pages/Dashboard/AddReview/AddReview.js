import React from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";

const AddReview = () => {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
       console.log(data);

       axios
         .post("https://enigmatic-anchorage-98613.herokuapp.com/reviews", data)
         .then((res) => {
           if (res.data.insertedId) {
             alert("added successfully");
             reset();
           }
         });
     };

    return (
      <div className="add-service">
        <h2>Please Add a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control mt-2"
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
          />
          <textarea
            className="form-control mt-2"
            {...register("review")}
            placeholder="Description"
          />
          <input className="form-control mt-2" type="submit" />
        </form>
      </div>
    );
};

export default AddReview;