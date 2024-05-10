import { ElementOrToolType } from "../types";
import { MarkNonNullable } from "../utility-types";
import {
  ExcalidrawElement,
  ExcalidrawTextElement,
  ExcalidrawEmbeddableElement,
  ExcalidrawLinearElement,
  ExcalidrawBindableElement,
  ExcalidrawFreeDrawElement,
  InitializedExcalidrawImageElement,
  ExcalidrawImageElement,
  ExcalidrawTextElementWithContainer,
  ExcalidrawTextContainer,
  ExcalidrawFrameElement,
  RoundnessType,
  ExcalidrawFrameLikeElement,
  ExcalidrawElementType,
  ExcalidrawIframeElement,
  ExcalidrawIframeLikeElement,
  ExcalidrawMagicFrameElement,
  ExcalidrawArrowElement,
} from "./types";
export declare const isInitializedImageElement: (
  element: ExcalidrawElement | null,
) => element is InitializedExcalidrawImageElement;
export declare const isImageElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawImageElement;
export declare const isEmbeddableElement: (
  element: ExcalidrawElement | null | undefined,
) => element is ExcalidrawEmbeddableElement;
export declare const isIframeElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawIframeElement;
export declare const isIframeLikeElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawIframeLikeElement;
export declare const isTextElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawTextElement;
export declare const isFrameElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawFrameElement;
export declare const isMagicFrameElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawMagicFrameElement;
export declare const isFrameLikeElement: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawFrameLikeElement;
export declare const isFreeDrawElement: (
  element?: ExcalidrawElement | null,
) => element is ExcalidrawFreeDrawElement;
export declare const isFreeDrawElementType: (
  elementType: ExcalidrawElementType,
) => boolean;
export declare const isLinearElement: (
  element?: ExcalidrawElement | null,
) => element is ExcalidrawLinearElement;
export declare const isArrowElement: (
  element?: ExcalidrawElement | null,
) => element is ExcalidrawArrowElement;
export declare const isLinearElementType: (
  elementType: ElementOrToolType,
) => boolean;
export declare const isBindingElement: (
  element?: ExcalidrawElement | null,
  includeLocked?: boolean,
) => element is ExcalidrawLinearElement;
export declare const isBindingElementType: (
  elementType: ElementOrToolType,
) => boolean;
export declare const isBindableElement: (
  element: ExcalidrawElement | null,
  includeLocked?: boolean,
) => element is ExcalidrawBindableElement;
export declare const isTextBindableContainer: (
  element: ExcalidrawElement | null,
  includeLocked?: boolean,
) => element is ExcalidrawTextContainer;
export declare const isExcalidrawElement: (
  element: any,
) => element is ExcalidrawElement;
export declare const hasBoundTextElement: (
  element: ExcalidrawElement | null,
) => element is MarkNonNullable<ExcalidrawBindableElement, "boundElements">;
export declare const isBoundToContainer: (
  element: ExcalidrawElement | null,
) => element is ExcalidrawTextElementWithContainer;
export declare const isUsingAdaptiveRadius: (type: string) => boolean;
export declare const isUsingProportionalRadius: (type: string) => boolean;
export declare const canApplyRoundnessTypeToElement: (
  roundnessType: RoundnessType,
  element: ExcalidrawElement,
) => boolean;
export declare const getDefaultRoundnessTypeForElement: (
  element: ExcalidrawElement,
) =>
  | {
      type: 2;
    }
  | {
      type: 3;
    }
  | null;