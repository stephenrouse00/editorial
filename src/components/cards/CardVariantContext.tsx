import {
  createContext,
  useContext,
  type ReactNode,
} from 'react'
import type { CardVariant } from '../../types/card'
import { DEFAULT_CARD_VARIANT } from './cardVariants'

const CollectionVariantContext = createContext<CardVariant | undefined>(
  undefined,
)

const ResolvedVariantContext = createContext<Required<CardVariant>>(
  DEFAULT_CARD_VARIANT,
)

export function CardVariantProvider({
  variant,
  children,
}: {
  variant?: CardVariant
  children: ReactNode
}) {
  return (
    <CollectionVariantContext.Provider value={variant}>
      {children}
    </CollectionVariantContext.Provider>
  )
}

export function ResolvedVariantProvider({
  variant,
  children,
}: {
  variant: Required<CardVariant>
  children: ReactNode
}) {
  return (
    <ResolvedVariantContext.Provider value={variant}>
      {children}
    </ResolvedVariantContext.Provider>
  )
}

export function useCollectionVariant(): CardVariant | undefined {
  return useContext(CollectionVariantContext)
}

export function useResolvedVariant(): Required<CardVariant> {
  return useContext(ResolvedVariantContext)
}

export { mergeVariants, resolveCardClasses, isCompact } from './cardVariants'
