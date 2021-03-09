import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import '../styles/pages/sidebar-home.css';
import '../styles/pages/home.css';
import ListApprove from './ListApprove';
import { useHistory } from "react-router-dom";
import api from '../services/api';
import MaterialTable from 'material-table';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Home() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                width: '100%',
            },
            paper: {
                marginTop: theme.spacing(3),
                width: '100%',
                overflowX: 'auto',
                marginBottom: theme.spacing(2),
            },
            table: {
                minWidth: 650,
            },
        }),
    );

    const [open, setOpen] = useState(false);
    const [openS, setOpenS] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [messageError, setMessageError] = useState('');
    const [messageSuccess, setMessageSuccess] = useState('');
    const [token, setToken] = useState(localStorage.getItem('@token'));
    const [listVac, setListVac] = useState([]);
    const history = useHistory();

    const handleClose = () => {
        if (error !== '' || error !== undefined) {
            setError('')
            setMessageError('')
        }
        setOpen(false);
    };
    const handleCloseS = () => {
        if (success !== '' || success !== undefined) {
            setSuccess('')
            setMessageSuccess('')
        }
        lista();
        setOpenS(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('@token')
    }



    const callAPI = (item:string, cpf:any, id:any, api:string) => {
        axios({
            method: 'post',
            url: `https://vac-20.herokuapp.com/vacApprove/${api}`,
            data: {cpf: cpf, id: id},
            headers: {
                authorization: token
            }
        }).then(response => {
            
            console.log(response)
            setMessageSuccess(response.data.message)
            setOpenS(true)

            if (response.statusCode === 401) {
                console.log('aqui')
                handleLogout();
                history.push('/login');
            }
            console.log(response)

        }).catch((error) => {
            console.log(error)
            if (error.statusCode !== "200") {
                setMessageError(`Não foi possível ${item}`)
                setOpen(true)
            }
        })
    }

    const handleAprovar = (id:any, cpf:any) => {
        console.log('clicou aprovar')
        callAPI('aprovar', cpf, id, 'accept')
    }
    const handleReprovar = (cpf:any, id:any) => {
        console.log('clicou reprovar')
        callAPI('reprovar', cpf, id, 'deny')
    }

    const lista = () => {
        axios({
            method: 'get',
            url: 'https://vac-20.herokuapp.com/vacApprove',
            data: {},
            headers: {
                authorization: token
            }
        }).then(response => {
            setListVac(response.data.message)
            console.log(response)

            if (response.statusCode === 401) {
                console.log('aqui')
                handleLogout();
                history.push('/login');
            }
            console.log(response)

        }).catch((error) => {
            console.log(error)
            if (error.statusCode !== "200") {
                setMessageError('Não foi possível carregar a lista, tente novamente mais tarde.')
                setOpen(true)

            }
        })
    } 
    useEffect(() => {
        lista();
    }, [])

    console.log(listVac)

    const classes = useStyles();

    return (
        // <h1>home</h1>
        <>
            <div id="page-map">
                <aside>
                    <header>

                        <h2> Validação das informações do usuário.</h2>
                        <p>Torne a sua cidade mais segura.</p>
                    </header>
                    <footer>
                        <strong>São Paulo</strong>
                        <span>Capital</span>
                    </footer>
                </aside>

                <div className="table_div">
                    {/* <ListApprove listVac={listVac} /> */}
                    <h1 className="dark table">lista para validação </h1>

                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">cpf</TableCell>
                                <TableCell align="right">descrição</TableCell>
                                <TableCell align="right">data envio</TableCell>
                                <TableCell align="right">imagem</TableCell>
                                <TableCell align="right">qtd. doses</TableCell>
                                <TableCell align="right" >aprovar</TableCell>
                                <TableCell align="right" >reprovar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {
                                listVac.map((element: { _id: any, id:any, cpf: string, description: string, insertedAt: string, image: string, shots: number }) => (
                                    <>
                                        {/* <p className="dark">
                                        <p>{element.cpf} </p>
                                        <p>{element.description} </p>
                                    </p> */}
                                        <TableRow key={element._id}>
                                            <TableCell align="right">{element.cpf}.***.***.-**</TableCell>
                                            <TableCell align="right">{element.description}</TableCell>
                                            <TableCell align="right">{element.insertedAt}</TableCell>
                                            <TableCell align="right">ampliar imagem</TableCell>
                                            {/* <TableCell align="right">{element.image}</TableCell> */}
                                            <TableCell align="right">{element.shots}</TableCell>
                                            <TableCell align="right" onClick={() => handleAprovar(element.cpf, element.id)}>
                                                <div className="box_icon">
                                                    YES
                                    <span className="material-icons md-32">check_circle</span>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right" onClick={() => handleReprovar(element.cpf, element.id)}>
                                                <div className="box_icon">
                                                    Noo
                                    <span className="material-icons md-32">disabled_by_default</span>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    </>
                                ))
                            }

                        </TableBody>
                    </Table>

                </div>

                {/* <Link to="/home" className="approve">
                    <span className="material-icons md-32">check_circle</span>
                </Link> */}
                <div className="flex-end">

                    <Link to="" className="logout" onClick={handleLogout}>
                        <p>
                            <span className="material-icons md-32">logout</span>
                        </p>
                        <p>Sair</p>
                    </Link>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {messageError}
                </Alert>
            </Snackbar>

            <Snackbar open={openS} autoHideDuration={6000} onClose={handleCloseS}>
                <Alert onClose={handleCloseS} severity="success">
                    {messageSuccess}
                </Alert>
            </Snackbar>
        </>
    );
}

export default Home;