import classNames from "classnames"
import Blurb from "./Blurb"

function BlurbWithOutline({className, ...rest}) {
    const classes = classNames(
        className,
        'rounded-sm p-12 relative after:[background:white] after:[height:80px] after:[width:3px] after:[right:-2px] after:[top:26%] after:absolute after:content-" " before:[background:white] before:[height:80px] before:[width:3px] before:[left:-2px] before:[top:26%] before:absolute before:content-" " border')

    return (
        <Blurb
            className={classes}
            {...rest}
        />
    )
}

export default BlurbWithOutline
