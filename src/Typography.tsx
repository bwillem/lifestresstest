import classNames from "classnames"
import React, { FC, forwardRef } from "react"

const H1: FC<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({ className, ...rest }) => {
    const classes = classNames('text-3xl font-bold', className)
    return <h1 className={classes} {...rest} />
}

const H2: FC<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({ className, ...rest }) => {
    const classes = classNames('text-lg font-bold', className)
    return <h2 className={classes} {...rest} />
}

const H3: FC<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({ className, ...rest }) => {
    const classes = classNames('text-md', className)
    return <h3 className={classes} {...rest} />
}

const Emphasis: FC<React.HtmlHTMLAttributes<HTMLSpanElement>> = ({ className, ...rest }) => {
    const classes = classNames(className, 'font-medium underline')
    return <span className={classes} {...rest} />
}

const P: FC<any> = forwardRef<any, React.HtmlHTMLAttributes<HTMLParagraphElement> & { inactive?: boolean }>(({ className, inactive = false, ...rest }, ref) => {
    const classes = classNames('text-md', className)
    return <p className={classes} ref={ref} {...rest} />
})

const Caption: FC<React.HtmlHTMLAttributes<HTMLParagraphElement> & { inactive?: boolean }> = ({ className, inactive = false, ...rest }) => {
    const classes = classNames('text-sm', className)
    return <p className={classes} {...rest} />
}

export {
    P,
    H1,
    H2,
    H3,
    Emphasis,
    Caption,
}
