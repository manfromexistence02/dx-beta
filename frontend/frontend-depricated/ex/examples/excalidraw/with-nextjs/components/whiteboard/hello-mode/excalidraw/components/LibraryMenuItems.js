import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState, } from "react";
import { serializeLibraryAsJSON } from "../data/json";
import { t } from "../i18n";
import { arrayToMap } from "../utils";
import Stack from "./Stack";
import { MIME_TYPES } from "../constants";
import Spinner from "./Spinner";
import { duplicateElements } from "../element/newElement";
import { LibraryMenuControlButtons } from "./LibraryMenuControlButtons";
import { LibraryDropdownMenu } from "./LibraryMenuHeaderContent";
import { LibraryMenuSection, LibraryMenuSectionGrid, } from "./LibraryMenuSection";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { useLibraryCache } from "../hooks/useLibraryItemSvg";
import "./LibraryMenuItems.scss";
// using an odd number of items per batch so the rendering creates an irregular
// pattern which looks more organic
const ITEMS_RENDERED_PER_BATCH = 17;
// when render outputs cached we can render many more items per batch to
// speed it up
const CACHED_ITEMS_RENDERED_PER_BATCH = 64;
export default function LibraryMenuItems({ isLoading, libraryItems, onAddToLibrary, onInsertLibraryItems, pendingElements, theme, id, libraryReturnUrl, onSelectItems, selectedItems, }) {
    const libraryContainerRef = useRef(null);
    const scrollPosition = useScrollPosition(libraryContainerRef);
    // This effect has to be called only on first render, therefore  `scrollPosition` isn't in the dependency array
    useEffect(() => {
        if (scrollPosition > 0) {
            libraryContainerRef.current?.scrollTo(0, scrollPosition);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    const { svgCache } = useLibraryCache();
    const unpublishedItems = useMemo(() => libraryItems.filter((item) => item.status !== "published"), [libraryItems]);
    const publishedItems = useMemo(() => libraryItems.filter((item) => item.status === "published"), [libraryItems]);
    const showBtn = !libraryItems.length && !pendingElements.length;
    const isLibraryEmpty = !pendingElements.length &&
        !unpublishedItems.length &&
        !publishedItems.length;
    const [lastSelectedItem, setLastSelectedItem] = useState(null);
    const onItemSelectToggle = useCallback((id, event) => {
        const shouldSelect = !selectedItems.includes(id);
        const orderedItems = [...unpublishedItems, ...publishedItems];
        if (shouldSelect) {
            if (event.shiftKey && lastSelectedItem) {
                const rangeStart = orderedItems.findIndex((item) => item.id === lastSelectedItem);
                const rangeEnd = orderedItems.findIndex((item) => item.id === id);
                if (rangeStart === -1 || rangeEnd === -1) {
                    onSelectItems([...selectedItems, id]);
                    return;
                }
                const selectedItemsMap = arrayToMap(selectedItems);
                const nextSelectedIds = orderedItems.reduce((acc, item, idx) => {
                    if ((idx >= rangeStart && idx <= rangeEnd) ||
                        selectedItemsMap.has(item.id)) {
                        acc.push(item.id);
                    }
                    return acc;
                }, []);
                onSelectItems(nextSelectedIds);
            }
            else {
                onSelectItems([...selectedItems, id]);
            }
            setLastSelectedItem(id);
        }
        else {
            setLastSelectedItem(null);
            onSelectItems(selectedItems.filter((_id) => _id !== id));
        }
    }, [
        lastSelectedItem,
        onSelectItems,
        publishedItems,
        selectedItems,
        unpublishedItems,
    ]);
    const getInsertedElements = useCallback((id) => {
        let targetElements;
        if (selectedItems.includes(id)) {
            targetElements = libraryItems.filter((item) => selectedItems.includes(item.id));
        }
        else {
            targetElements = libraryItems.filter((item) => item.id === id);
        }
        return targetElements.map((item) => {
            return {
                ...item,
                // duplicate each library item before inserting on canvas to confine
                // ids and bindings to each library item. See #6465
                elements: duplicateElements(item.elements, { randomizeSeed: true }),
            };
        });
    }, [libraryItems, selectedItems]);
    const onItemDrag = useCallback((id, event) => {
        event.dataTransfer.setData(MIME_TYPES.excalidrawlib, serializeLibraryAsJSON(getInsertedElements(id)));
    }, [getInsertedElements]);
    const isItemSelected = useCallback((id) => {
        if (!id) {
            return false;
        }
        return selectedItems.includes(id);
    }, [selectedItems]);
    const onAddToLibraryClick = useCallback(() => {
        onAddToLibrary(pendingElements);
    }, [pendingElements, onAddToLibrary]);
    const onItemClick = useCallback((id) => {
        if (id) {
            onInsertLibraryItems(getInsertedElements(id));
        }
    }, [getInsertedElements, onInsertLibraryItems]);
    const itemsRenderedPerBatch = svgCache.size >= libraryItems.length
        ? CACHED_ITEMS_RENDERED_PER_BATCH
        : ITEMS_RENDERED_PER_BATCH;
    return (_jsxs("div", { className: "library-menu-items-container", style: pendingElements.length ||
            unpublishedItems.length ||
            publishedItems.length
            ? { justifyContent: "flex-start" }
            : { borderBottom: 0 }, children: [!isLibraryEmpty && (_jsx(LibraryDropdownMenu, { selectedItems: selectedItems, onSelectItems: onSelectItems, className: "library-menu-dropdown-container--in-heading" })), _jsxs(Stack.Col, { className: "library-menu-items-container__items", align: "start", gap: 1, style: {
                    flex: publishedItems.length > 0 ? 1 : "0 1 auto",
                    marginBottom: 0,
                }, ref: libraryContainerRef, children: [_jsxs(_Fragment, { children: [!isLibraryEmpty && (_jsx("div", { className: "library-menu-items-container__header", children: t("labels.personalLib") })), isLoading && (_jsx("div", { style: {
                                    position: "absolute",
                                    top: "var(--container-padding-y)",
                                    right: "var(--container-padding-x)",
                                    transform: "translateY(50%)",
                                }, children: _jsx(Spinner, {}) })), !pendingElements.length && !unpublishedItems.length ? (_jsxs("div", { className: "library-menu-items__no-items", children: [_jsx("div", { className: "library-menu-items__no-items__label", children: t("library.noItems") }), _jsx("div", { className: "library-menu-items__no-items__hint", children: publishedItems.length > 0
                                            ? t("library.hint_emptyPrivateLibrary")
                                            : t("library.hint_emptyLibrary") })] })) : (_jsxs(LibraryMenuSectionGrid, { children: [pendingElements.length > 0 && (_jsx(LibraryMenuSection, { itemsRenderedPerBatch: itemsRenderedPerBatch, items: [{ id: null, elements: pendingElements }], onItemSelectToggle: onItemSelectToggle, onItemDrag: onItemDrag, onClick: onAddToLibraryClick, isItemSelected: isItemSelected, svgCache: svgCache })), _jsx(LibraryMenuSection, { itemsRenderedPerBatch: itemsRenderedPerBatch, items: unpublishedItems, onItemSelectToggle: onItemSelectToggle, onItemDrag: onItemDrag, onClick: onItemClick, isItemSelected: isItemSelected, svgCache: svgCache })] }))] }), _jsxs(_Fragment, { children: [(publishedItems.length > 0 ||
                                pendingElements.length > 0 ||
                                unpublishedItems.length > 0) && (_jsx("div", { className: "library-menu-items-container__header library-menu-items-container__header--excal", children: t("labels.excalidrawLib") })), publishedItems.length > 0 ? (_jsx(LibraryMenuSectionGrid, { children: _jsx(LibraryMenuSection, { itemsRenderedPerBatch: itemsRenderedPerBatch, items: publishedItems, onItemSelectToggle: onItemSelectToggle, onItemDrag: onItemDrag, onClick: onItemClick, isItemSelected: isItemSelected, svgCache: svgCache }) })) : unpublishedItems.length > 0 ? (_jsx("div", { style: {
                                    margin: "1rem 0",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: "100%",
                                    fontSize: ".9rem",
                                }, children: t("library.noItems") })) : null] }), showBtn && (_jsx(LibraryMenuControlButtons, { style: { padding: "16px 0", width: "100%" }, id: id, libraryReturnUrl: libraryReturnUrl, theme: theme, children: _jsx(LibraryDropdownMenu, { selectedItems: selectedItems, onSelectItems: onSelectItems }) }))] })] }));
}