import classNames from "classnames";
import { P } from "./Typography";
import { forwardRef } from "react";

const Blurb = forwardRef<any, any>(({ className = '', ...rest }, ref) => {
    const classes = classNames(className, 'max-w-5xl mx-auto')
    return <P ref={ref} className={classes} inactive {...rest} />
})

export default Blurb