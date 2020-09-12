import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadUsers } from '../../store/actions/userActions';
import { toyService} from '../../services/toyService'
import { loadReviews, addReview } from '../../store/actions/reviewActions'


class _ToyReviews extends Component {

    state = {
        reviewToEdit: {
            txt: '',
            aboutToyId: '',
            byUserId:''
        }
    };

    componentDidMount() {
        this.props.loadUsers();
        const { toyId } = this.props.match.params;
        toyService.getById(toyId)
        .then(toy => {
            this.props.loadReviews(toy);
            const aboutToyId = toy._id;
            const byUserId = this.props.loggedInUser._id;
            this.setState({reviewToEdit: {...this.state.reviewToEdit , byUserId ,aboutToyId }})
        })
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
        this.setState({ reviewToEdit: { txt: '', aboutToyId: '' } });
    };
    
    render() {
        return (
            <div className="home">
                    <h1> Reviews- </h1>
                {this.props.reviews && <ul>
                    {this.props.reviews.map(review => {
                        console.log(review);
                        return (
                        <li key={review._id}>
                            <h3>{review.txt}</h3>
                            <p> By {review.byUser.username} </p>
                            <hr />
                        </li>
                    )})}
                </ul>}
                {/* {this.props.users && this.props.loggedInUser &&
                    <form onSubmit={this.addReview}>
                        <textarea
                            name="txt"
                            onChange={this.handleChange}
                            value={this.state.reviewToEdit.txt}
                        ></textarea>
                        <button>Submit</button>
                    </form>}
                <hr /> */}
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
    addReview,
    loadUsers
}

export const ToyReviews = connect(mapStateToProps, mapDispatchToProps)(_ToyReviews)

