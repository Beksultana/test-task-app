import React, {Component, Fragment} from 'react';
import {fetchUsers} from "../../store/actions/usersActions";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import './MainContainer.css';

class MainContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        const users = this.props.users;
        console.log(users);
        const user = users ? users.map((item) => {
           return (
               <div
                   className="ContactId" key={item.id}
               >
                   <p>{item.name}</p>
               </div>
           )
        }) : null;

        return (
            <Fragment>
                <h1 className="ContactsTitle">Contacts</h1>
                <hr/>
                <Row>
                    <Col sm={4}>
                        <div className="ContactDiv">
                            {user}
                        </div>
                    </Col>
                    <Col sm={8}>

                        <div>
                        </div>

                    </Col>
                </Row>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
   users: state.users.users,
});

const mapDispatchToProps = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);