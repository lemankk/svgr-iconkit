import { createElement, memo, useMemo } from 'react'
import type { IconComponentCoreProps } from '../common/types'
import {
  appendUnit,
  createRandomId,
  filterNonEmptyString,
  getContentFromIconProps,
  getViewboxValue,
  PRIMARY_CURRENT_COLOR,
  showDebugWarning,
} from '../common/utils'
import type { WebIconBaseProps, WebIconRefType } from './types'
import { convertRunner, renderChildren } from './utils'

const InternalWebIcon = function <IconNames extends string, IconVariant extends string>(
  props: IconComponentCoreProps<IconNames, IconVariant, WebIconBaseProps, WebIconRefType>,
) {
  const {
    ref: svgRef,
    variantsMap,
    defaultVariant,
    resolveType,
    content,
    map,
    familyName,
    name,
    variant,
    size,
    color,
    colorize = true,
    fontSize,
    lineHeight,
    style: bakStyle = {},
    children,
    debug,
    ...restProps
  } = props
  const elmNs = useMemo(() => `sik-${createRandomId()}`, [])
  const svgContent = getContentFromIconProps({
    variantsMap,
    defaultVariant,
    resolveType,
    content,
    map,
    familyName,
    name,
    variant,
  })
  const { attrs: svgAttrs, data: svgData = [] } = svgContent || {}
  const elements = useMemo(() => renderChildren(svgData, '#' + elmNs, `@${elmNs}:`), [svgData,elmNs]);

  if (debug) {
    console.debug(`Icon render. id='%s', name='${name}', variant='${variant}', props=%o`, props.id, props)
  }
  if (!svgContent) {
    if (debug) {
      if (variant && name) {
        showDebugWarning(`Icon was not found by given name '${name}' and variant '${variant}'`)
      } else if (name) {
        showDebugWarning(`Icon was not found by given name '${name}'`)
      }
    }
    return null
  }

  const { fill, stroke, width: svgWidth, height: svgHeight, ...restAttrs } = svgAttrs || {}
  const viewBox = getViewboxValue(svgContent)

  // Allowing all additional props from external for html.
  const iconProps = {...restProps}
  const attrProps = convertRunner(restAttrs, {}, { allowNonWhitelistProp: false })
  const internalProps = {
    fill,
    stroke,
    ...attrProps,
    viewBox,
    ...iconProps,
    'data-sik-ns': elmNs,
  }

  if (fill !== 'none' && colorize) {
    internalProps.fill = PRIMARY_CURRENT_COLOR
  }

  // For web, it does not support array based styles
  const internalStyle: any = {}

  if (color && colorize) {
    // For some iconset, they use stroke to styling and cannot use fill properties
    internalStyle.color = color
  }

  if (filterNonEmptyString(svgWidth)) {
    internalProps.width = svgWidth
  }
  if (filterNonEmptyString(svgHeight)) {
    internalProps.height = svgHeight
  }
  if (filterNonEmptyString(size)) {
    internalProps.width = appendUnit(size)
    internalProps.height = appendUnit(size)
  }
  if (filterNonEmptyString(fontSize)) {
    internalProps.width = fontSize
    internalProps.height = fontSize
    internalStyle.fontSize = fontSize
    internalStyle.lineHeight = fontSize
  }
  if (filterNonEmptyString(lineHeight)) {
    internalStyle.lineHeight = lineHeight
  }

  internalProps.style = internalStyle
  if (bakStyle) {
    internalProps.style = { ...internalStyle, ...bakStyle }
  }
  return createElement(
    'svg',
    {
      ref: svgRef,
      ...internalProps,
    },
    elements,
    children,
  )
}

InternalWebIcon.displayName = 'WebIcon'

export const WebIcon = InternalWebIcon
