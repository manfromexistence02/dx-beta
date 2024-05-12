import oc from "open-color";
import { Merge } from "./utility-types";
export type ColorPickerColor =
  | Exclude<keyof oc, "indigo" | "lime">
  | "transparent"
  | "bronze";
export type ColorTuple = readonly [string, string, string, string, string];
export type ColorPalette = Merge<
  Record<ColorPickerColor, ColorTuple>,
  {
    black: "#1e1e1e";
    white: "#ffffff";
    transparent: "transparent";
  }
>;
export type ColorPaletteCustom = {
  [key: string]: ColorTuple | string;
};
export type ColorShadesIndexes = [number, number, number, number, number];
export declare const MAX_CUSTOM_COLORS_USED_IN_CANVAS = 5;
export declare const COLORS_PER_ROW = 5;
export declare const DEFAULT_CHART_COLOR_INDEX = 4;
export declare const DEFAULT_ELEMENT_STROKE_COLOR_INDEX = 4;
export declare const DEFAULT_ELEMENT_BACKGROUND_COLOR_INDEX = 1;
export declare const ELEMENTS_PALETTE_SHADE_INDEXES: readonly [0, 2, 4, 6, 8];
export declare const CANVAS_PALETTE_SHADE_INDEXES: readonly [0, 1, 2, 3, 4];
export declare const getSpecificColorShades: (
  color: Exclude<
    ColorPickerColor,
    "transparent" | "white" | "black" | "bronze"
  >,
  indexArr: readonly [number, number, number, number, number],
) => ColorTuple;
export declare const COLOR_PALETTE: ColorPalette;
export declare const DEFAULT_ELEMENT_STROKE_PICKS: ColorTuple;
export declare const DEFAULT_ELEMENT_BACKGROUND_PICKS: ColorTuple;
export declare const DEFAULT_CANVAS_BACKGROUND_PICKS: ColorTuple;
export declare const DEFAULT_ELEMENT_STROKE_COLOR_PALETTE: {
  readonly red: ColorTuple;
  readonly pink: ColorTuple;
  readonly grape: ColorTuple;
  readonly violet: ColorTuple;
  readonly blue: ColorTuple;
  readonly cyan: ColorTuple;
  readonly teal: ColorTuple;
  readonly green: ColorTuple;
  readonly yellow: ColorTuple;
  readonly orange: ColorTuple;
  readonly transparent: "transparent";
  readonly white: "#ffffff";
  readonly gray: ColorTuple;
  readonly black: "#1e1e1e";
  readonly bronze: ColorTuple;
};
export declare const DEFAULT_ELEMENT_BACKGROUND_COLOR_PALETTE: {
  readonly red: ColorTuple;
  readonly pink: ColorTuple;
  readonly grape: ColorTuple;
  readonly violet: ColorTuple;
  readonly blue: ColorTuple;
  readonly cyan: ColorTuple;
  readonly teal: ColorTuple;
  readonly green: ColorTuple;
  readonly yellow: ColorTuple;
  readonly orange: ColorTuple;
  readonly transparent: "transparent";
  readonly white: "#ffffff";
  readonly gray: ColorTuple;
  readonly black: "#1e1e1e";
  readonly bronze: ColorTuple;
};
export declare const getAllColorsSpecificShade: (
  index: 0 | 1 | 2 | 3 | 4,
) => readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
export declare const rgbToHex: (r: number, g: number, b: number) => string;