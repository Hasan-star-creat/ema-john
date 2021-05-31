import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log('form submit ', data);
    }
      const [loggedInUser, setLoggedInUser] = useContext(userContext);
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
      <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="your name" />
        {errors.name && <span className="error">Name is required</span>}
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} />
        {errors.email && <span className="error">Email is required</span>}
        <input  {...register("phone", { required: true })} placeholder="888+"/>
        {errors.phone && <span className="error">Phone Number is required</span>}
        <input {...register("address", { required: true })} placeholder="New yourk, USA" />
        {errors.address && <span className="error">Address is required</span>}
        
        <input type="submit" />
      </form>
    );
};

export default Shipment;