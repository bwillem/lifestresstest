import classnames from "classnames"
import React, { PropsWithChildren } from "react"
import { P } from "./Typography"

interface IndicatorProps {
  src: string
  title: string
  value?: number
  total?: number
}

function Indicator({ src, title, value, total, className, ...rest }: PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement> & IndicatorProps>) {
  const classes = classnames('flex flex-col justify-center items-center w-1/3 mt-8', className)

  return (
    <div className={classes} {...rest}>
      <img className='w-16' src={src} />
      <P>
        {title}
      </P>
      <P>
        {value}/{total}
      </P>
    </div>
  )
}

export default Indicator
