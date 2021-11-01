import { IconsMapType } from "@svgr-iconkit/core";
import { IconNames, map as regularIconsMap } from "./gen/icons/regular";
export { IconNames } from "./gen/icons/regular";

export type IconVariant = "regular";

export const variantNames: IconVariant[] = ["regular"];

export const defaultVariant: IconVariant = "regular";

export const familyName: string = "CSS.gg";

// icons map
export const map: Record<IconVariant, IconsMapType<IconNames>> = {
  regular: regularIconsMap,
};

const regularIconsNames = Object.keys(regularIconsMap);

export const iconNames = Object.freeze(regularIconsNames);

export const colorize = true;
