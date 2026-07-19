import type { ReactNode } from 'react'
import { isCompact, resolveCardClasses, useResolvedVariant } from './CardVariantContext'

type CardLabelProps = {
  children: ReactNode
}

export function CardLabel({ children }: CardLabelProps) {
  const variant = useResolvedVariant()

  if (isCompact(variant)) {
    return null
  }

  const classes = resolveCardClasses(variant)

  return <p className={classes.label}>{children}</p>
}
