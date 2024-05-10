import React from "react";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
import { Language } from "../i18n";
import {
  AppProps,
  AppState,
  ExcalidrawProps,
  BinaryFiles,
  UIAppState,
  AppClassProperties,
} from "../types";
import "./LayerUI.scss";
import "./Toolbar.scss";
interface LayerUIProps {
  actionManager: ActionManager;
  appState: UIAppState;
  files: BinaryFiles;
  canvas: HTMLCanvasElement;
  setAppState: React.Component<any, AppState>["setState"];
  elements: readonly NonDeletedExcalidrawElement[];
  onLockToggle: () => void;
  onHandToolToggle: () => void;
  onPenModeToggle: AppClassProperties["togglePenMode"];
  showExitZenModeBtn: boolean;
  langCode: Language["code"];
  renderTopRightUI?: ExcalidrawProps["renderTopRightUI"];
  renderCustomStats?: ExcalidrawProps["renderCustomStats"];
  UIOptions: AppProps["UIOptions"];
  onExportImage: AppClassProperties["onExportImage"];
  renderWelcomeScreen: boolean;
  children?: React.ReactNode;
  app: AppClassProperties;
  isCollaborating: boolean;
  openAIKey: string | null;
  isOpenAIKeyPersisted: boolean;
  onOpenAIAPIKeyChange: (apiKey: string, shouldPersist: boolean) => void;
  onMagicSettingsConfirm: (
    apiKey: string,
    shouldPersist: boolean,
    source: "tool" | "generation" | "settings",
  ) => void;
}
declare const _default: React.MemoExoticComponent<
  ({
    actionManager,
    appState,
    files,
    setAppState,
    elements,
    canvas,
    onLockToggle,
    onHandToolToggle,
    onPenModeToggle,
    showExitZenModeBtn,
    renderTopRightUI,
    renderCustomStats,
    UIOptions,
    onExportImage,
    renderWelcomeScreen,
    children,
    app,
    isCollaborating,
    openAIKey,
    isOpenAIKeyPersisted,
    onOpenAIAPIKeyChange,
    onMagicSettingsConfirm,
  }: LayerUIProps) => JSX.Element
>;
export default _default;