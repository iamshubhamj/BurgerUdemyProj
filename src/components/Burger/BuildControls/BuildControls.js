import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const control = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) =>

    (

        // return (
        //     <div className={classes.BuildControls}>
        //     {control.map(cntrl => (
        //         <BuildControl key={cntrl.label} label={cntrl.label} />
        //     ))}
        // </div>
        // )


        <div className={classes.BuildControls}>
            <p>Current price : <strong>{props.price.toFixed(2)}</strong> </p>
            {control.map(cntrl => (
                <BuildControl
                    key={cntrl.label}
                    label={cntrl.label}
                    added={() => props.ingredientAdded(cntrl.type)}
                    remove={() => props.ingredientDeduction(cntrl.type)}
                    disabled={props.disabled[cntrl.type]}
                />

            ))}
            <button className={classes.OrderButton}
                disabled={!props.purchasable} onClick={props.ordered}
            >Order Now</button>
        </div>

    )
export default buildControls;