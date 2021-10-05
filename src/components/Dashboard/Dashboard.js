import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { AuthContext } from '../../App';
import dashboard from "../../images/dashboard.png";

const Dashboard = () => {
    const { isLoggedIn } = useContext(AuthContext);
    // console.log(isLoggedIn);
    const history = useHistory();
    function routeToLogin() {
        history.push('/login/toDashboard');
    }
    return (
        <div className='container' onLoad={isLoggedIn ? () => { } : routeToLogin()}>
            <div className="row">
                <div className="col-lg-6"><img src={dashboard} alt="" className="img-fluid" /></div>
                <div className="col-lg-6 pt-lg-5">
                    <h3 className="text-center mt-5">All your course</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Course Name</th>
                                <th>Instroctor</th>
                                <th>Join Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

            </div>
        </div>
    );


};

export default Dashboard;