import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


import UserList from './UserList';
import UserEditor from './UserEditor';


const Users = () => (
    <Grid>
        <Col sm={6}>
            <Row className="form-group">
                <UserEditor/>
            </Row>
        </Col>
        <Col sm={6}>
            <Row className="form-group">
                <UserList/>
            </Row>
        </Col>
    </Grid>
);

export default Users;
