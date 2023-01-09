import { P } from "./Typography";
import { mergeClasses } from "./util";

function Blurb({ className = '', ...rest }) {
    const classes = mergeClasses(className)('max-w-5xl mx-auto')
    return <P className={classes} inactive {...rest} />
}

export default Blurb