import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import {requestSaveUser, requestCountries} from '../../../actions';

import User from '../../../model';


class UserEditor extends Component {
    static propTypes = {
        requestSaveUser: PropTypes.func.isRequired,
        requestCountries: PropTypes.func.isRequired,
        selectedUser: PropTypes.shape(User),
        countries: PropTypes.arrayOf(PropTypes.shape()),
        saved: PropTypes.bool
    };

    static defaultProps = {
        countries: [],
        selectedUser: new User(),
        saved: false
    };

    constructor(props) {
        super(props);
        this.state = {user: new User()};
    }

    componentDidMount() {
        this.props.requestCountries();
    }

    handleChange({target: {id, value}}) {
        this.setState(
            state => ({
                user: {...state.user, [id]: value}
            })
        );
    }

    handleSubmit() {
        const {user} = this.state;
        this.props.requestSaveUser(user);
    }

    render() {
        const {countries, saved, selectedUser} = this.props;
        const {user} = this.state;
        return (
            <Grid>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="name">
                            <ControlLabel>Name</ControlLabel>
                            <FormControl
                                type="text"
                                placeholder="Name"
                                value={user.name}
                                maxLength={50}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="surname">
                            <ControlLabel>Surname</ControlLabel>
                            <FormControl
                                type="text"
                                value={user.surname}
                                placeholder="Surname"
                                maxLength={50}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="countries">
                            <ControlLabel>Countries</ControlLabel>
                            <FormControl
                                componentClass="select"
                                onChange={e => this.handleChange(e)}
                            >
                                <option/>
                                {countries.map(country => (
                                    <option key={country.numericCode} value={country.name}>{country.name}</option>
                                ))}
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <FormGroup controlId="birthday">
                            <ControlLabel>BirthDay</ControlLabel>
                            <FormControl
                                type="date"
                                value={user.birthday}
                                onChange={e => this.handleChange(e)}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <Button
                            bsStyle="primary"
                            onClick={() => this.handleSubmit() && this.renderContent()}
                            className="btn-group-justified margin-top-h2 ta-save"
                        >
                            <FontAwesome name="floppy-o"/> Save
                        </Button>
                    </Col>
                </Row>
                {saved &&
                <Row>
                    <Col sm={6}>
                        <h4>
                            Hello {selectedUser.name} from {selectedUser.countries} born in: {selectedUser.birthday}
                        </h4>
                    </Col>
                </Row>}
            </Grid>
        );
    }
}

export default connect(
    state => ({
        countries: state.user.countries,
        saved: state.user.saved,
        selectedUser: state.user.selectedUser
    }),
    dispatch => ({
        requestSaveUser: user => dispatch(requestSaveUser(user)),
        requestCountries: () => dispatch(requestCountries())
    })
)(UserEditor);
