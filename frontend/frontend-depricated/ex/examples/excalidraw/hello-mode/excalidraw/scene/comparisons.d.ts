import { NonDeletedExcalidrawElement } from "../element/types";
import { ElementOrToolType } from "../types";
export declare const hasBackground: (type: ElementOrToolType) => boolean;
export declare const hasStrokeColor: (type: ElementOrToolType) => boolean;
export declare const hasStrokeWidth: (type: ElementOrToolType) => boolean;
export declare const hasStrokeStyle: (type: ElementOrToolType) => boolean;
export declare const canChangeRoundness: (type: ElementOrToolType) => boolean;
export declare const canHaveArrowheads: (type: ElementOrToolType) => boolean;
export declare const getElementAtPosition: (
  elements: readonly NonDeletedExcalidrawElement[],
  isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean,
) => NonDeletedExcalidrawElement | null;
export declare const getElementsAtPosition: (
  elements: readonly NonDeletedExcalidrawElement[],
  isAtPositionFn: (element: NonDeletedExcalidrawElement) => boolean,
) => NonDeletedExcalidrawElement[];