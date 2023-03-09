import classNames from "classnames"

function HalfWidthItem({ className = '', ...rest }) {
    return <div className={classNames(className, "border border-black rounded-md px-6 py-4 [flex-basis:49%] text-center space-y-4 box-border")} {...rest} />
}

export default HalfWidthItem
