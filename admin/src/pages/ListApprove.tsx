import React from 'react';
import '../styles/pages/lista.css';

// function ListApprove (data:any) {
//     return(
//         <h1>teste</h1>
//     );
//     console.log('data lista ->', data[0])
//     // data.forEach((element: { cpf: any; data:any; }) => {
//     //     console.log(element.cpf)
//     //     return(
//     //         <p>{element.data}</p>
//     //     )
//     // });

//     return (
//         <div className="dark">
//             teste
//         </div>
// //         <div className="dark">
// //             <div className="list">
// //                 <h1>
// //                     lista para ser aprovada
// //                </h1>
               
// //                {/* <p className="mt">Colocar tabela</p> */}
// //                {/* <table  className="mt">
// //                    <th> <tr> 
// //                        <td> cpf</td>
// //                        <td> descrição</td>
// //                        <td> id</td>
// //                        <td> fotos</td>
// //                        <td> data envio</td>
// //                        <td>doses</td>
// //                        <td> Aprovar +</td>
// //                        </tr> 
// //                     </th>

                    
                    
                    
// //                </table> */}
               
// //                {
// //                        data.forEach((element: { cpf: any; data:any; }) => {
// //                         console.log(element.cpf)
// //                         return(
// //                             <>
// //                             <h1> teste </h1>
// //                             <p>{element.data}</p>
// //                             </>
// //                         )
// //                     })
// //                }
// //             </div>
// //         </div>
//      );
    
//  }

const ListApprove = (listVac: any) => {
    console.log(listVac)
    const teste = listVac
    //  const jsonTarefa:any  = window.localStorage.getItem('listVac');
    //          var listVac2 = JSON.parse(jsonTarefa);
    // console.log('lista', listVac2)
    return (
        <>
       <h1 className="dark">home</h1>
       <p className="dark">lista </p>
                    {
                        teste.map((element: { cpf: any; description: any; }) => (
                            <p className="dark">
                                <p>{element.cpf} </p>
                                <p>{element.description} </p>
                            </p>
                        ))
                    }
       </>
    );
}

export default ListApprove;