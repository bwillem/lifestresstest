import classNames from "classnames"
import React, { FC } from "react"

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
    const classes = classNames(className, 'font-medium')
    return <span className={classes} {...rest} />
}

const P: FC<React.HtmlHTMLAttributes<HTMLParagraphElement> & { inactive?: boolean }> = ({ className, inactive = false, ...rest }) => {
    // const color = inactive ? 'text-neutral-500' : 'text-neutral-900'
    const classes = classNames('text-sm', className)
    return <p className={classes} {...rest} />
}

export {
    P,
    H1,
    H2,
    H3,
    Emphasis,
}
