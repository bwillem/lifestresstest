import classnames from "classnames"
import React, { PropsWithChildren } from "react"
import { Caption, Emphasis, P } from "./Typography"

interface IndicatorProps {
  src: string
  title: string
  value?: number
  total?: number
}

function Indicator({ src, title, value, total, className, ...rest }: PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement> & IndicatorProps>) {
  const classes = classnames(className, 'flex flex-col justify-start items-center text-center')

  return (
    <div className={classes} {...rest}>
      <img className='w-12' src={src} />
      <Caption className="mt-2" dangerouslySetInnerHTML={{ __html: title }} />
      <Caption>
        <Emphasis>{value || 0}</Emphasis>{total ? `/${total}` : ''}
      </Caption>
    </div>
  )
}

export default Indicator
