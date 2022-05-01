import { ResolveType } from '../common/constants'
import type { CreateFamilyOptions, IconsetComponentType } from '../common/types'
import { createWebIconset } from './createWebIconset'
import type { WebIconBaseProps, WebIconRefType } from './types'

export function createWebFamily<IconNames extends string, IconVariant extends string>(
  options: CreateFamilyOptions<IconNames, IconVariant>,
): IconsetComponentType<IconNames, IconVariant, WebIconBaseProps, WebIconRefType> {
  const { familyName, variantsMap, ...rest } = options
  return createWebIconset<IconNames, IconVariant>({
    resolveType: ResolveType.VariantMap,
    familyName,
    variantsMap,
    ...rest,
  })
}
