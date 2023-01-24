import classnames from "classnames"
import React, { PropsWithChildren } from "react"
import { Emphasis, P } from "./Typography"

interface IndicatorProps {
  src: string
  title: string
  value?: number
  total?: number
}

function Indicator({ src, title, value, total, className, ...rest }: PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement> & IndicatorProps>) {
  const classes = classnames(className, 'flex flex-col justify-center items-center text-center')

  return (
    <div className={classes} {...rest}>
      <img className='w-16' src={src} />
      <P>
        {title}
      </P>
      <P>
        <Emphasis>{value || 0}</Emphasis>{total ? `/${total}` : ''}
      </P>
    </div>
  )
}

export default Indicator
