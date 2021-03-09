import React from 'react';
import '../styles/pages/lista.css';
import { Link } from 'react-router-dom'

function ListApprove() {
    return (
        <div className="dark">
            <div className="list">
                <h1>
                    lista para ser aprovada
               </h1>
               
               <p className="mt">Colocar tabela</p>
               <table  className="mt">
                   <th> <tr> 
                       <td> Nome</td>
                       <td> 3 dígitos cpf</td>
                       <td> Tipo vacina</td>
                       <td> fotos</td>
                       <td> Status</td>
                       <td> Aprovar +</td>
                       </tr> 

                       <tr> 
                       <td> Nome</td>
                       <td> 3 dígitos cpf</td>
                       <td> Tipo vacina</td>
                       <td> fotos</td>
                       <td> Status</td>
                       <td> Aprovar +</td>
                       </tr> 
                    </th>
               </table>
            </div>
        </div>
    );
}

export default ListApprove;