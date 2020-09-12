import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button, TextField } from '@material-ui/core';

import { toyService } from '../../services/toyService'
import { saveToy } from '../../store/actions/toyActions'

class _ToyEdit extends Component {

    state = {
        toy: ''
    }

    componentDidMount() {
        const toyId = this.props.match.params.toyId;
        console.log('toyId-', toyId);
        if (toyId) {
            toyService.getById(toyId)
                .then(toy => {
                    console.log('toy', toy);
                    this.setState({ toy })
                })
        } else {
            const toy = toyService.getEmpty();
            this.setState({ toy });
        }
    }

    // handleField = ({ target }) => {
    //     const field = target.name
    //     const value = (target.type === 'number') ? +target.value : target.value
    //     this.setState(prevState => {
    //         return {
    //             toy: {
    //                 ...prevState.toy,
    //                 [field]: value
    //             }
    //         }
    //     })
    // }

    onSave = (values, formikBag) => {
        this.props.saveToy(values)
        this.props.history.push('/toy')
    }


    render() {
        const { toy } = this.state;
        const {loggedInUser} = this.state;
        console.log('loged-',loggedInUser)
        const textN = (props) => <TextField {...props} label="name" type="text" autoComplete="current-name" />
        const textC = (props) => <TextField {...props} label="category" type="text" autoComplete="current-name" />
        const NuberField = (props) => <TextField {...props} label="Number" type="number" InputLabelProps={{ shrink: true, }} />
        if (!toy) return <h1>Loading...</h1>

        let _id = null;
        const { name, price, category} = toy;
        if(toy._id) _id= toy._id;
        var inStock = false;
        console.log('propeeties-', name, price, category, inStock)
        return (
            <div >
                <Formik  onSubmit={this.onSave} 
                    initialValues={{_id, name, price, category, inStock }}
                >
                    {
                        ({values})=>{ return (
                            <Form className= "filter">
                            <div>
                            <label htmlFor="txt">Toy name</label>
                            <Field type="text" name='name' as={textN} />
                            </div>
                            <div>
                            <label htmlFor="txt"> Price </label>
                            <Field type="number" name='price' as={NuberField} />
                            </div>
                            <div>
                            <label htmlFor="txt"> Category </label>
                            <Field type="text" name='category' as={textC} />
                            </div>
                            <div>
                            <Field type="checkbox" name='inStock' checked= {values.inStock} />
                            <Button type="submit">Save</Button>
                            <Button onClick={() => this.props.history.push('/toy')}>Back to store</Button>
                            </div>
                        </Form>
                        )

                        }
                    }
                </Formik>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        toys: state.toyReducer.toys,
        loggedInUser: state.userReducer.loggedInUser,
    }
}
const mapDispatchToProps = {
    saveToy,
}
export const ToyEdit = connect(mapStateToProps, mapDispatchToProps)(_ToyEdit)


// componentDidMount() {
//     const toyId = this.props.match.params.toyId;
//     if (toyId) {
//         toyService.getById(toyId)
//             .then(toy => {
//                 console.log('toy',toy);
//                 this.setState({ toy })})
//     } else {
//         const toy = toyService.getEmpty();
//         this.setState({ toy });
//     }
// }

// handleField = ({ target }) => {
//     const field = target.name
//     const value = (target.type === 'number') ? +target.value : target.value
//     this.setState(prevState => {
//         return {
//             toy: {
//                 ...prevState.toy,
//                 [field]: value
//             }
//         }
//     })
// }

// onSave = (ev) => {
//     ev.preventDefault()
//     this.props.saveToy(this.state.toy)
//     this.props.history.push('/toy')
// }


// render() {

//     const { toy } = this.state;
//     if (!toy) return <h1>Loading...</h1>
//     const { name, price, category, inStock } = toy;
//     return (
//         // <MyForm 
//         <form onSubmit={(event) => this.onSave(event, toy)}>
//             <label htmlFor="txt">Toy name</label>
//             <Field type="text" id="txt" value={name || ''} name ='name' onChange={this.handleField} placeholder="toy name" />
//             <label htmlFor="txt"> Price </label>
//             <Field type="number" value={price || 0} name = 'price' onChange={this.handleField} />
//             <label htmlFor="txt"> Category </label>
//             <Field type="text" value={category || ''} name ='category' onChange={this.handleField} />
//             <label htmlFor="txt"> stcok </label>
//             <Field type="checkbox" value={inStock} name ='inStock' onChange={this.handleField} />
//             <button onClick={this.onSave}>Save</button>
//             <button onClick={() => this.props.history.push('/toy')}>back to stor</button>
//         </form>
//     )
// }
// }