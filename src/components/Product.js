import React from 'react'
import { useState, useEffect } from 'react'
import ProductComponent from './ProductComponent'
import Row from 'react-bootstrap/Row';


const Product = () => {
    //adding data into use state
    const [products, setProducts] = useState([])
    //lets do the api call only once 
    useEffect(() => {
        //get API Call-- I use fetch 
        getProductsApi()
    }, [])

    //making api call function
    const getProductsApi = async () => {

        const response = await fetch("https://fakestoreapi.com/products")
        const productsData = await response.json()
        setProducts(productsData)
    }

    return (
        <div>
            <h4>Products</h4>
            <div >
                <Row >


                    {

                        products.map((item => <ProductComponent productsList={item} key={item.id} />))
                    }
                </Row>



            </div>


        </div>
    )
}

export default Product
