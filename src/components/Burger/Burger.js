import React, { Component } from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredient/BurgerIngredient'
const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredients key={igKey + i} type={igKey} />

            })
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    console.log('transformed ingredient is :', transformedIngredients);
    console.log('.............', transformedIngredients.length)
    if (transformedIngredients.length === 0) {

        transformedIngredients = <p>Please start adding ingredients !!!!!!!!!!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {/* <BurgerIngredients type="cheese" />
            <BurgerIngredients type="meat" /> */}
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />

        </div>
    )
}

export default burger;