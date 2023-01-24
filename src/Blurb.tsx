import classNames from "classnames";
import { P } from "./Typography";

function Blurb({ className = '', ...rest }) {
    const classes = classNames(className, 'max-w-5xl mx-auto')
    return <P className={classes} inactive {...rest} />
}

export default Blurb