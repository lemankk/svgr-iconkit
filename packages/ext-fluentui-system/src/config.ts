import { IconsMapType } from "@svgr-iconkit/core";
import { IconNames as regularIconNames, map as regularIconsMap } from "./gen/icons/regular";
import { IconNames as filledIconNames, map as filledIconsMap } from "./gen/icons/filled";
export { IconNames } from "./gen/icons/filled";

export const familyName: string = "FluentUISystem";

export type IconVariant = "regular" | "filled";

export const variantNames: IconVariant[] = ["regular", "filled"];

export const defaultVariant: IconVariant = "regular";

export const map: {
  regular: IconsMapType<regularIconNames>;
  filled: IconsMapType<filledIconNames>;
} = {
  regular: regularIconsMap,
  filled: filledIconsMap,
};

const regularIconsNames = Object.keys(regularIconsMap);
const filledIconsNames = Object.keys(filledIconsMap);

let _iconNames = regularIconsNames;
_iconNames = _iconNames.concat(filledIconsNames.filter( name => !_iconNames.includes(name)));

export const iconNames = Object.freeze(_iconNames);
