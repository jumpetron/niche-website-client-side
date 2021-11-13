import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";


const AddProduct = () => {
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = (data) => {
       console.log(data);

       axios
         .post("https://enigmatic-anchorage-98613.herokuapp.com/products", data)
         .then((res) => {
           if (res.data.insertedId) {
             alert("added successfully");
             reset();
           }
         });
     };

    return (
      <div className="add-service">
        <h2>Please Add a Service</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
          <input
            {...register("name", { required: true, maxLength: 20 })}
            placeholder="Name"
            className="form-control mt-2"
          />
          <input
            className="form-control mt-2"
            type="text"
            {...register("brand")}
            placeholder="Brand Name"
          />
          <input
            className="form-control mt-2"
            {...register("picture")}
            placeholder="image url"
          />
          <input
            className="form-control mt-2"
            type="number"
            {...register("price")}
            placeholder="price"
          />
          <textarea
            className="form-control mt-2"
            {...register("info")}
            placeholder="Description"
          />
          <input
            className="form-control mt-2"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    );
};

export default AddProduct;