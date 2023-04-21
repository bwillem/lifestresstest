import classNames from "classnames"
import Blurb from "./Blurb"
import { forwardRef } from "react"

const BlurbWithOutline = forwardRef<any, any>(({ className, ...rest }, ref) => {
    const classes = classNames(
        className,
        'border-black p-12 relative after:[background:white] after:[height:136px] after:[width:3px] after:[right:-2px] after:[top:23%] after:absolute after:content-" " before:[background:white] before:[height:136px] before:[width:3px] before:[left:-2px] before:[top:23%] before:absolute before:content-" " border')

    return (
        <Blurb
            ref={ref}
            className={classes}
            {...rest}
        />
    )
})

export default BlurbWithOutline
