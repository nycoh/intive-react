import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col, Table} from 'react-bootstrap';

import {selectUser} from '../../../actions';


class Users extends Component {
    static propTypes = {
        selectUser: PropTypes.func.isRequired,
        currentUser: PropTypes.PropTypes.shape({}),
        users: PropTypes.arrayOf(PropTypes.shape({}))
    };

    static defaultProps = {
        users: [],
        currentUser: {}
    };

    handleClick(user) {
        this.props.selectUser(user);
    }

    renderContent() {
        const {users, currentUser} = this.props;
        return (
            <Row>
                <Col sm={12}>
                    <Table responsive striped bordered>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>BirthDay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr
                                    key={user.name + user.surname + user.countries + user.birthday}
                                    className="table-vertical-middle ta-user-row"
                                    onClick={() => this.handleClick(user)}
                                >
                                    <td className="ta-username">{user.name} {user.surname}</td>
                                    <td className="ta-country">{user.countries}</td>
                                    <td className="ta-birthday">{user.birthday}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Row>
                    <Col sm={12}>
                        {currentUser &&
                        <h4>{currentUser.name} {currentUser.surname}</h4>
                        }
                    </Col>
                </Row>
            </Row>


        );
    }

    render() {
        return (
            <Grid>
                {this.props.users && this.renderContent()}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        users: state.user.users,
        currentUser: state.user.currentUser
    }),
    dispatch => ({
        selectUser: user => dispatch(selectUser(user))
    })
)(Users);
