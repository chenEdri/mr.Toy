import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loadReviews, addReview } from '../store/actions/reviewActions'
import { loadUsers } from '../store/actions/userActions';

class _Home extends Component {

    state = {
        reviewToEdit: {
            txt: '',
            aboutUserId: ''
        }
    };

    componentDidMount() {
        this.props.loadReviews();
        this.props.loadUsers();
    }


    handleChange = ev => {
        const { name, value } = ev.target;
        this.setState(prevState => ({
            reviewToEdit: {
                ...prevState.reviewToEdit,
                [name]: value
            }
        }));
    };


    addReview = ev => {
        ev.preventDefault();
        this.props.addReview(this.state.reviewToEdit);
        this.setState({ reviewToEdit: { txt: '', aboutUserId: '' } });
    };


    render() {
        return (
            <div className="home">
                    <h1> Home </h1>
                    <Link to="/login">Login</Link> 
                {this.props.reviews && <ul>
                    {this.props.reviews.map(review => (
                        <li key={review._id}>
                            <h3>{review.txt}</h3>
                            <p>
                                <Link to={`user/${review.aboutUser._id}`}>
                                    About {review.aboutUser.username}
                                </Link>
                            </p>
                            <p>
                                <Link to={`user/${review.byUser._id}`}>
                                    By {review.byUser.username}
                                </Link>
                            </p>
                            <hr />
                        </li>
                    ))}
                </ul>}
                {this.props.users && this.props.loggedInUser &&
                    <form onSubmit={this.addReview}>
                        <select
                            onChange={this.handleChange}
                            value={this.state.reviewToEdit.aboutUserId}
                            name="aboutUserId"
                        >
                            <option value="">Select User</option>
                            {this.props.users.map(user => (
                                <option key={user._id} value={user._id}>
                                    {user.username}
                                </option>
                            ))}
                        </select>
                        <textarea
                            name="txt"
                            onChange={this.handleChange}
                            value={this.state.reviewToEdit.txt}
                        ></textarea>
                        <button>Submit</button>
                    </form>}
                <hr />
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys,
        reviews: state.reviewReducer.reviews,
        users: state.userReducer.users,
        loggedInUser: state.userReducer.loggedInUser
    }
}

const mapDispatchToProps = {
    loadReviews,
    loadUsers,
    addReview
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home)