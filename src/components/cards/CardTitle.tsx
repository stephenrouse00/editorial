import type { ReactNode } from 'react'
import { resolveCardClasses, useResolvedVariant } from './CardVariantContext'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type CardTitleProps = {
  href?: string
  titleHeadingLevel?: HeadingLevel
  children: ReactNode
}

export function CardTitle({ href, children, titleHeadingLevel = 'h3' }: CardTitleProps) {
  const variant = useResolvedVariant()
  const classes = resolveCardClasses(variant)
  const Heading = titleHeadingLevel

  return (
    <Heading className={classes.title}>
      {href ? <a href={href} className={classes.titleLink}>{children}</a> : <span className={classes.titleLink}>{children}</span> }
    </Heading>
  )
}
