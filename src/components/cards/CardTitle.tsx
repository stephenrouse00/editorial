import type { ReactNode } from 'react'
import { resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardTitleProps = {
  slug: string
  children: ReactNode
}

export function CardTitle({ slug, children }: CardTitleProps) {
  const variant = useResolvedVariant()
  const classes = resolveCardClasses(variant)

  return (
    <h3 className={classes.title}>
      <a href={slug} className={classes.titleLink}>
        {children}
      </a>
    </h3>
  )
}
