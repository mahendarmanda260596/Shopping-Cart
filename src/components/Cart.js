
import Card from 'react-bootstrap/Card';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';


const NewCart = ({ cartData }) => {
    const { image, title, description, price, rating } = cartData

    const dispatch = useDispatch()
    //dispatch remove action
    const removeToCart = (id) => {
        dispatch(remove(id))
    }



    return (

        < div >
            <Card style={{ width: '50rem', margin: '5px', textAlign: 'left', paddingLeft: '5px' }}>

                <div className='d-flex justify-content-between flex-row'>
                    <div>
                        <h4>{title}</h4>
                    </div>
                    <div>
                        <Card.Img variant="top" src={image} style={{ height: '70px', width: "120px", margin: '2px' }} />

                    </div>
                </div>
                <><p >{description}</p>
                    <p>Rs :- {price}</p>
                    <p>Rating {rating.rate} const  </p></>
                <div className='d-flex justify-content-center '>
                    <button className='btn btn-primary m-1'>Buy Now</button>
                    <button className='btn btn-danger m-1' onClick={() => removeToCart(cartData.id)}>Remove</ button>
                </div>
            </Card>

        </div >

    )
}



const Cart = () => {
    const productsCart = useSelector(state => state.cart)
    //all products are showing here



    return (
        <div>
            <h1>cart</h1>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                {productsCart.map((cartItem) => <NewCart cartData={cartItem} />)}
            </div>









        </div>
    )
}

export default Cart
