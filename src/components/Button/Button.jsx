import classes from './Button.module.css'
export  default  function Button({ children, isActive, ...props}) {
   // let classes = 'button'
    //if(isActive) classes += 'active'
    console.log(classes)
    return (

<button
    {...props}
    className={isActive ? `${classes.button} ${classes.active}` : classes.button}

     >
        {children}
    </button>
    )
}