import React, {useState} from 'react';
import UserTable from "./Componentes/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const userData = [
    {id: uuidv4(), name: 'Verde Valle', precio: '$18.50',descripcion: 'una bolsa de arroz',stock: '2'},
    {id: uuidv4(), name: 'La Sierra',precio: '$16.00',descripcion: 'bolsa de Frijoles refritos 420gr',stock:'3'},
    {id: uuidv4(), name: 'Verde Valle', precio:'$24.00',descripcion: 'bolsa de frijol Negro 900gr',stock:'5'},
    {id: uuidv4(), name: 'Ace', precio:'$44.00',descripcion: 'Detergente en polvo 3kg',stock:'8' }
  ]

  const [users, setUsers] = useState(userData);

  //Agregar usuario
  const AddUser = (user) =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  //Eliminar usuarios
  const deleteUser = (id) => {
    console.log(id)
    setUsers(users.filter(user => user.id != id))
  }

  //Bandera para Actualizar usuarios cambia entre add y edit
  const [bandera, setBandera] = useState(false);
  
  //Objeto datos para editar
  const [currentUser, setCurrentUser] = useState({
    id: null, name: '', precio: '',descripcion: '',stock:''
  });

  //Editar usuarios obtener datos para mostrar en formulario
  const editRow = (user) =>{
    setBandera(true);
    setCurrentUser({
      id: user.id, name: user.name, precio: user.precio, descripcion: user.descripcion,stock: user.stock
    })
  }

  //Funcion para Editar
  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <center>
      <h1>Tienda "Los Precios Bajos"</h1>
      </center>
      <div className="flex-row">
        <div className="flex-large">
          {
            bandera ? (
              <div>
                <h2>Editar Producto</h2>
                <EditUserForm currentUser={currentUser} upDateUser={updateUser}/>
              </div>
            ) : (
              <div>
                <h2>Agrega Producto</h2>
                <AddUserForm addUser={AddUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>Vista</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}
export default App;