import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css';
import ProcessPayments from './proccessPayments';
import SplitForm from './splitFrom';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log('form submit ', data);
        const saveCart = getDatabaseCart()
        const orderDetails = {...loggedInUser, product: saveCart , shipment: data, orderTime: new Date()}
        fetch("https://evening-ravine-87925.herokuapp.com/addOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" 
          },
          body:JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
          if(data){
            processOrder();
            alert('your order place successfully')
          }
        })

    }
      
    console.log(watch("example")); 
  
    return (
      <div className="row">
        <div className="col-md-4">
          <form className="ship-from" onSubmit={handleSubmit(onSubmit)}>
            <input
              defaultValue={loggedInUser.name}
              {...register("name", { required: true })}
              placeholder="your name"
            />
            {errors.name && <span className="error">Name is required</span>}
            <input
              defaultValue={loggedInUser.email}
              {...register("email", { required: true })}
            />
            {errors.email && <span className="error">Email is required</span>}
            <input
              {...register("phone", { required: true })}
              placeholder="888+"
            />
            {errors.phone && (
              <span className="error">Phone Number is required</span>
            )}
            <input
              {...register("address", { required: true })}
              placeholder="New yourk, USA"
            />
            {errors.address && (
              <span className="error">Address is required</span>
            )}

            <input type="submit" />
          </form>
        </div>
        <div className="col-md-8">
          {/* <ProcessPayments></ProcessPayments> */}
          <SplitForm></SplitForm>
           
        </div>
      </div>
    );
};

export default Shipment;