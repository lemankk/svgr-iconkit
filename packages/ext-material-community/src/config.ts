import { IconsMapType } from "@svgr-iconkit/core";
import { map as outlineIconsMap } from "./gen/icons/outline";
import { IconNames, map as regularIconsMap } from "./gen/icons/regular";
export { IconNames } from "./gen/icons/regular";

export const familyName: string = "MaterialCommunityIcons";

export type IconVariant = "regular" | "outline";

export const variantNames: IconVariant[] = ["regular", "outline"];

export const defaultVariant: IconVariant = "regular";

export const map: Record<IconVariant, IconsMapType<IconNames>> = {
  regular: regularIconsMap,
  outline: {...regularIconsMap, ...outlineIconsMap},
};

const regularIconsNames = Object.keys(regularIconsMap);

let _iconNames = regularIconsNames;

export const iconNames = Object.freeze(_iconNames);

export const colorize = true;

