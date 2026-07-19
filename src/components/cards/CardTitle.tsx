import type { ReactNode } from 'react'
import { resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardTitleProps = {
  href: string
  children: ReactNode
}

export function CardTitle({ href, children }: CardTitleProps) {
  const variant = useResolvedVariant()
  const classes = resolveCardClasses(variant)

  return (
    <h3 className={classes.title}>
      <a href={href} className={classes.titleLink}>
        {children}
      </a>
    </h3>
  )
}
