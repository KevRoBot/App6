import React, {Fragment} from 'react';
import { set, useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';


const EditUserForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm({defaultValues : props.currentUser});
    
    setValue('name', props.currentUser.name);
    setValue('precio',props.currentUser.precio);
    setValue('descripcion',props.currentUser.descripcion);
    setValue('stock',props.currentUser.stock);


    const onSubmit = data => {
        console.log(data);
        props.upDateUser(props.currentUser.id, data)

    }



    return (
      
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Name:</label>
                <input type="text" name="name" 
                {...register("name", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Precio:</label>
                <input type="text" name="precio" 
                {...register("precio", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}
                
                <label>Descripcion:</label>
                <input type="text" name="descripcion" 
                {...register("descripcion", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <label>Stock:</label>
                <input type="text" name="stock" 
                {...register("stock", { required: true, maxLength: 100})}/>
                {errors.nombre?.type === 'required' && "Este es un Campo Requerido"}
                {errors.nombre?.type === 'maxLength' && "El Maximo de Caracteres es de 100"}

                <button >Editar Producto </button>
       </form>
     );
}
 
export default EditUserForm;