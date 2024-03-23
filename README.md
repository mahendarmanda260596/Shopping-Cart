# shopping Cart With RTK Redux Application
--Creating Basic Layout Shoping Cart Of Our Project 
1. Need Product Component-> Product Details

--components folder >Product.js--> Here create the Product DashBoard Component
-- Now move to now get the data from Product Details can i using fake api'-- "https://fakestoreapi.com/products"
-- Now Help of react Only do the api Call and get Products data as UI--> Then after convert the code into redux

-- With help of useEffect can do the making api calls and fetch the Products Data so import {usestate, useEffect } from 'react'
-- displaying products details with good UI so using react-bootstarp then import {import 'bootstrap/dist/css/bootstrap.min.css'}


--then install the react-router-dom give the paths--Implementing Routing need to import {createBrowserRouter, createRoutesFromElements, RouterProvider}
-create simple routes , Link , Layout ,path , all will provide to router in our application

--Redux Toolkit Implementations
- Now adding the add to cart --> display the cart inside Using Rtk
---- after that How can i use RTK for Our Application ?
Using RTk 
install npm i @reduxjs/toolkit
dynamically do react Binding npm i react-redux

- so 1st Create the Store
- then create Reducer

- i need 2 slices here one- get data from api
- second i pull the data from add, delete like that
-- Creating cartSlice.js--> createSlice we have impor {createSlice} from '@reduxjs/toolkit'

-- how update manner the immutable state

--Now create the store--store.js--need import {configureStore} from "@reduxjs/toolkit"

after configuration redux logic is completed
--next cart and stores are configured but not communicate so communication provide so The provider will come in main layout that is app.js> inside RootLayout here give the Provider. This provider comes import {provider} from 'react-redux' , here also import the store also

--<Provider store={store} > inside wrap RootLayout component </Provider>
--This is the way to provide the state into your component

--now see the reduxDevTool extension showing are not --. extension add and goto state there can see cart [] empty array
-- so cartSlice.js --> i given initial State=[] so dev tools showing empty.

--This extension is very powerfull the state , using this dev tool to debugging is very easy.


--Now I Want to Add My Products into that initial state to Cart. so cartSlice.js have add function add to bind add function to cart

--how to dispatch a action for the my component ??
-- this the thing react-redux give 2 hooks 
1 useSelector
2 useDispatch

React- Redux Hook Explanation
-- React-Redux offers a set of Hooks as an alternative the existing connect( ) higher order component
-- These Hooks allow you to connect the Redux store and dispatch actions without having to wrap your components in connect()

1. useSelector()--> useSelector is equal to mapStateToProps()
    --It takes in afunction argument that returns the part of the state that you want
2. useDispatch()--> useDispatch is equalant to mapDispatchToProps()
    --this hook returns a reference to the dispatch function from Redux store. you may use it to dispatch action as needed


-- let's use useDispatch Hook - go to the product component
in that add to cart button to give onClick function inside addTocart function add it. 
then addToCart inside dispatch a action give there so import {useDispath} from 'react-redux' , import {add} from 'sliceCart.js'


- using useDispatch() method to cart is added.



--How to read the state from  redux store to data & update the My Cart
My Cart is there Navbarpanel.js--> get data from redux update the count here

useSelector()Hook import inside Navbarpanel.js  --import { UseSelector } from 'react-redux';
--now can see My cart will updated automatically.
-- how to dispatch and how to read data from state understand complete redux will be going to work


-- so click the My Cart that place need to added item show here.





