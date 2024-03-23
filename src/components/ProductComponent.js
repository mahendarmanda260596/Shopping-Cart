import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const ProductComponent = ({ productsList }) => {
    //use the dispath here
    const dispath = useDispatch()

    const { title, price, rating, image } = productsList

    const addToCart = (productsList) => {
        // dispath a add action here
        //above dispatch method to give the add function    
        dispath(add(productsList))

    }
    return (
        <Card style={{ width: '23rem', alignItems: 'center', margin: '5px' }}>
            <Card.Img variant="top" style={{ height: "100px", width: "120px", textAlign: 'center', margin: "2px" }} src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>INR .{price}</Card.Text>
                <Card.Text>Rating: {rating.rate} +</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
                <Button variant="primary mb-3 mt-1 " onClick={() => addToCart(productsList)} >Add To Cart</Button>
            </Card.Footer>

        </Card>

    )
}

export default ProductComponent
