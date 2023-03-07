import classnames from "classnames"
import React, { FC, PropsWithChildren } from "react"
import { Caption } from "./Typography"

interface IndicatorProps {
  src: string
  title: string
  value?: number
  total?: number
}

const Value: FC<{ children: number }> = props => <span className='font-bold' {...props} />

function Indicator({ src, title, value, total, className, ...rest }: PropsWithChildren<React.HtmlHTMLAttributes<HTMLDivElement> & IndicatorProps>) {
  const classes = classnames(className, 'flex flex-col justify-start items-center text-center')

  return (
    <div className={classes} {...rest}>
      <img className='w-12' src={src} />
      <Caption className="mt-2" dangerouslySetInnerHTML={{ __html: title }} />
      <Caption>
        <Value>{value || 0}</Value>{total ? `/${total}` : ''}
      </Caption>
    </div>
  )
}

export default Indicator
