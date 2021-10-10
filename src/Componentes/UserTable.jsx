import React, {Fragment} from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <Table striped bordered hover variant="dark">
            <thead  >
                <tr>
                    <th>Nombre del Producto</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Stock</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody> 
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.precio}</td>
                            <td>{user.descripcion}</td>
                            <td>{user.stock}</td>
                            <th>
                                <Button variant="outline-danger" className="button muted-button"
                                onClick={() => {props.editRow(user)}}>  Editar </Button>{' '}
                                <Button variant="outline-warning"  className="button muted-button"
                                onClick={() => {props.deleteUser(user.id)}}>  Eliminar </Button>{' '}
                            </th>
                        </tr>
                        )
                    ) : (
                        <tr>
                            <td colSpan={3}>No Registros</td>
                        </tr>
                    )
                }
            </tbody>
            </Table>

        </Fragment>
             );
}
 
export default UserTable;