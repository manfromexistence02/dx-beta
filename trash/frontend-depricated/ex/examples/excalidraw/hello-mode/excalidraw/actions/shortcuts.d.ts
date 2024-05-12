import { SubtypeOf } from "../utility-types";
import { ActionName } from "./types";
export type ShortcutName =
  | SubtypeOf<
      ActionName,
      | "toggleTheme"
      | "loadScene"
      | "clearCanvas"
      | "cut"
      | "copy"
      | "paste"
      | "copyStyles"
      | "pasteStyles"
      | "selectAll"
      | "deleteSelectedElements"
      | "duplicateSelection"
      | "sendBackward"
      | "bringForward"
      | "sendToBack"
      | "bringToFront"
      | "copyAsPng"
      | "copyAsSvg"
      | "group"
      | "ungroup"
      | "gridMode"
      | "zenMode"
      | "objectsSnapMode"
      | "stats"
      | "addToLibrary"
      | "viewMode"
      | "flipHorizontal"
      | "flipVertical"
      | "hyperlink"
      | "toggleElementLock"
      | "resetZoom"
      | "zoomOut"
      | "zoomIn"
      | "zoomToFit"
      | "zoomToFitSelectionInViewport"
      | "zoomToFitSelection"
      | "toggleEraserTool"
      | "toggleHandTool"
      | "setFrameAsActiveTool"
      | "saveFileToDisk"
      | "saveToActiveFile"
      | "toggleShortcuts"
    >
  | "saveScene"
  | "imageExport"
  | "commandPalette";
export declare const getShortcutFromShortcutName: (
  name: ShortcutName,
  idx?: number,
) => string;