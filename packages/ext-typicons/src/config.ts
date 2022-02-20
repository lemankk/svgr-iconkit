import { IconsMapType } from "@svgr-iconkit/core";
import { map as outlineIconsMap } from "./gen/icons/outline";
import { IconNames, map as regularIconsMap } from "./gen/icons/regular";
export { IconNames } from "./gen/icons/regular";

export type IconVariant = "regular" | "outline";

export const variantNames: IconVariant[] = ["regular", "outline"];

export const defaultVariant: IconVariant = "regular";

export const familyName: string = "Typicons";

// icons map
export const map: Record<IconVariant, IconsMapType<IconNames>> = {
  regular: regularIconsMap,
  outline: { ...regularIconsMap, ...outlineIconsMap },
};

export const iconNames = Object.freeze(Object.keys(regularIconsMap));

export const colorize = true;
