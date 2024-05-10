import { MainNavItem, SidebarNavItem } from '@/types/nav';
import { customizerComponents } from '@/config/customizer-components';

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
  componentsNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Components',
      href: '/docs/components',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/udecode/plate',
      external: true,
    },
    {
      title: 'Discord',
      href: 'https://discord.gg/mAZRuBzGM3',
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: 'Overview',
      items: [
        {
          title: 'Introduction',
          href: '/docs',
        },
        {
          title: 'Getting Started',
          href: '/docs/getting-started',
        },
        {
          title: 'Playground',
          href: '/',
        },
      ],
    },
    {
      title: 'Guides',
      items: [
        {
          title: 'Custom Plugins',
          href: '/docs/plugin',
        },
        {
          title: 'Plugin Components',
          href: '/docs/plugin-components',
        },
        {
          title: 'Accessing the Editor',
          href: '/docs/accessing-editor',
        },
        {
          title: 'Typescript',
          href: '/docs/typescript',
        },
        {
          title: 'CLI',
          href: '/docs/cli',
          disabled: true,
          label: 'Soon',
        },
      ],
    },
    {
      title: 'Plugins',
      items: [
        {
          title: 'Alignment',
          href: '/docs/alignment',
        },
        {
          title: 'Autoformat',
          href: '/docs/autoformat',
        },
        {
          title: 'Basic Elements',
          href: '/docs/basic-elements',
          label: 'Element',
        },
        {
          title: 'Basic Marks',
          href: '/docs/basic-marks',
          label: 'Leaf',
        },
        {
          title: 'Block Selection',
          href: '/docs/block-selection',
        },
        {
          title: 'Caption',
          href: '/docs/caption',
        },
        {
          title: 'Cloud',
          href: '/docs/cloud',
          label: 'Element',
        },
        {
          title: 'Collaboration',
          href: '/docs/collaboration',
        },
        {
          title: 'Combobox',
          href: '/docs/combobox',
        },
        {
          title: 'Comments',
          href: '/docs/comments',
          label: 'Leaf',
        },
        {
          title: 'Column',
          href: '/docs/column',
          label: 'Element',
        },
        {
          title: 'Drag & Drop',
          href: '/docs/dnd',
        },
        {
          title: 'Emoji',
          href: '/docs/emoji',
        },
        {
          title: 'Excalidraw',
          href: '/docs/excalidraw',
          label: 'Element',
        },
        {
          title: 'Exit Break',
          href: '/docs/exit-break',
        },
        // {
        //   title: 'Find',
        //   href: '/docs/find-replace',
        // },
        {
          title: 'Font',
          href: '/docs/font',
        },
        {
          title: 'Forced Layout',
          href: '/docs/forced-layout',
        },
        {
          title: 'Highlight',
          href: '/docs/highlight',
          label: 'Leaf',
        },
        {
          title: 'Horizontal Rule',
          href: '/docs/horizontal-rule',
          label: 'Element',
        },
        {
          title: 'Indent',
          href: '/docs/indent',
        },
        {
          title: 'Indent List',
          href: '/docs/indent-list',
        },
        {
          title: 'Line Height',
          href: '/docs/line-height',
        },
        {
          title: 'Link',
          href: '/docs/link',
          label: 'Element',
        },
        {
          title: 'List',
          href: '/docs/list',
          label: 'Element',
        },
        {
          title: 'Media',
          href: '/docs/media',
          label: 'Element',
        },
        {
          title: 'Mention',
          href: '/docs/mention',
          label: 'Element',
        },
        {
          title: 'Reset Node',
          href: '/docs/reset-node',
        },
        {
          title: 'Serializing CSV',
          href: '/docs/serializing-csv',
        },
        {
          title: 'Serializing DOCX',
          href: '/docs/serializing-docx',
        },
        {
          title: 'Serializing HTML',
          href: '/docs/serializing-html',
        },
        {
          title: 'Serializing MD',
          href: '/docs/serializing-md',
        },
        {
          title: 'Single Line',
          href: '/docs/single-line',
        },
        {
          title: 'Soft Break',
          href: '/docs/soft-break',
        },
        {
          title: 'Tabbable',
          href: '/docs/tabbable',
        },
        {
          title: 'Table',
          href: '/docs/table',
          label: 'Element',
        },
        {
          title: 'Toggle',
          href: '/docs/toggle',
          label: 'Element',
        },
      ],
    },
    {
      title: 'Examples',
      items: [
        {
          title: 'Editable Voids',
          href: '/docs/examples/editable-voids',
        },
        {
          title: 'Hundreds Blocks',
          href: '/docs/examples/hundreds-blocks',
        },
        {
          title: 'Hundreds Editors',
          href: '/docs/examples/hundreds-editors',
        },
        {
          title: 'IFrame',
          href: '/docs/examples/iframe',
        },
        {
          title: 'Preview Markdown',
          href: '/docs/examples/preview-markdown',
        },
        {
          title: 'Version History',
          href: '/docs/examples/version-history',
        },
      ],
    },
    {
      title: 'API',
      items: [
        {
          title: 'Plate Common',
          href: '/docs/api/common',
          headings: [],
        },
        {
          title: 'Plate Core',
          href: '/docs/api/core',
          items: [
            {
              title: 'Plate',
              href: '/docs/api/core/plate',
              headings: [
                'PlateProps',
                'PlateContent',
                'id',
                'children',
                'decorate',
                'disableCorePlugins',
                'editableProps',
                'editableRef',
                'editor',
                'firstChildren',
                'initialValue',
                'normalizeInitialValue',
                'onChange',
                'plugins',
                'renderEditable',
                'renderElement',
                'renderLeaf',
                'value',
              ],
            },
            {
              title: 'PlateController',
              href: '/docs/api/core/plate-controller',
              headings: [
                'platecontroller-store',
                'state',
                'activeId',
                'primaryEditorIds',
                'editorStores',
                'usage-patterns',
                'specific-editor-by-id',
                'active-editor',
                'dealing-with-fallback-editors',
              ],
            },
            {
              title: 'PlateEditor',
              href: '/docs/api/core/plate-editor',
              headings: [
                'blockFactory',
                'childrenFactory',
                'currentKeyboardEvent',
                'key',
                'plugins',
                'pluginsByKey',
                'prevSelection',
                'redecorate',
                'reset',
              ],
            },
            {
              title: 'PlatePlugin',
              href: '/docs/api/core/plate-plugin',
              headings: [
                'key',
                'component',
                'decorate',
                'deserializeHtml',
                'attributeNames',
                'getNode',
                'query',
                'rules',
                'validAttribute',
                'validClassName',
                'validNodeName',
                'validStyle',
                'withoutChildren',
                'editor',
                'insertData',
                'format',
                'getFragment',
                'preInsert',
                'transformData',
                'transformFragment',
                'handlers',
                'onKeyDown',
                'onDrop',
                'onDragStart',
                'inject',
                'aboveComponent',
                'belowComponent',
                'pluginsByKey',
                'className',
                'defaultNodeValue',
                'nodeKey',
                'styleKey',
                'transformClassName',
                'transformNodeValue',
                'transformStyle',
                'validNodeValues',
                'validTypes',
                'isInline',
                'isElement',
                'isLeaf',
                'isVoid',
                'normalizeInitialValue',
                'options',
                'overrideByKey',
                'plugins',
                'props',
                'renderAboveEditable',
                'renderAboveSlate',
                'renderAfterEditable',
                'renderBeforeEditable',
                'serializeHtml',
                'then',
                'type',
                'useHooks',
                'withOverrides',
              ],
            },
            {
              title: 'Store',
              href: '/docs/api/core/store',
              headings: ['useEventEditorSelectors', 'useEventPlateId'],
            },
          ],
          headings: [
            'createAtomStore',
            'createDeserializeAstPlugin',
            'createDeserializeHtmlPlugin',
            'createEditorProtocolPlugin',
            'createEventEditorPlugin',
            'createHistoryPlugin',
            'createInlineVoidPlugin',
            'createInsertDataPlugin',
            'createNodeFactoryPlugin',
            'createPlateEditor',
            'createPluginFactory',
            'createPlugins',
            'createPrevSelectionPlugin',
            'createReactPlugin',
            'getPlugin',
            'getPluginInjectProps',
            'getPluginOptions',
            'getPluginType',
            'Hotkeys',
            'toggleNodeType',
            'useEditorRef',
            'useEditorState',
            'useElement',
            'useEditorReadOnly',
            'useEditorSelection',
            'useEditorVersion',
            'useSelectionVersion',
            'withPlate',
            'withTReact',
          ],
        },
        {
          title: 'Plate Utils',
          href: '/docs/api/utils',
          headings: [
            'PlateElement',
            'PlateLeaf',
            'useMarkToolbarButtonState',
            'useMarkToolbarButton',
            'usePlaceholderState',
            'useRemoveNodeButton',
            'isType',
            'resetEditorChildren',
            'selectEditor',
            'defaultsDeepToNodes',
            'onKeyDownToggleElement',
            'onKeyDownToggleMark',
          ],
        },
        {
          title: 'Slate',
          href: '/docs/api/slate',
          headings: [
            'addMark',
            'createPathRef',
            'createPointRef',
            'createRangeRef',
            'deleteBackward',
            'deleteForward',
            'deleteFragment',
            'deleteMerge',
            'getAboveNode',
            'getEdgePoints',
            'getEditorString',
            'getEndPoint',
            'getFirstNode',
            'getFragment',
            'getLastNode',
            'getLeafNode',
            'getLevels',
            'getMarks',
            'getNextNode',
            'getNodeEntries',
            'getNodeEntry',
            'getParentNode',
            'getPath',
            'getPathRefs',
            'getPoint',
            'getPointAfter',
            'getPointBefore',
            'getPointRefs',
            'getPositions',
            'getPreviousNode',
            'getRange',
            'getRangeRefs',
            'getStartPoint',
            'getVoidNode',
            'hasBlocks',
            'hasInlines',
            'hasTexts',
            'insertBreak',
            'insertNode',
            'isBlock',
            'isEdgePoint',
            'isEditor',
            'isEditorNormalizing',
            'isElementEmpty',
            'isEndPoint',
            'isInline',
            'isStartPoint',
            'isVoid',
            'normalizeEditor',
            'removeEditorMark',
            'TEditor',
            'unhangRange',
            'withoutNormalizing',
            'elementMatches',
            'isElement',
            'isElementList',
            'TElement',
            'isHistoryEditor',
            'isHistoryMerging',
            'isHistorySaving',
            'THistoryEditor',
            'withoutMergingHistory',
            'withoutSavingHistory',
            'TDescendant',
            'getNodeDescendants',
            'getNodeLastNode',
            'getNodeString',
            'getNodeFirstNode',
            'hasNode',
            'isNode',
            'getNodeFragment',
            'getNodeLeaf',
            'getNodeLevels',
            'isNodeList',
            'getNodeProps',
            'TAncestor',
            'getNode',
            'getNodeTexts',
            'getNodes',
            'getNodeChildren',
            'getNodeAncestor',
            'TNodeEntry',
            'TNode',
            'nodeMatches',
            'getNodeChild',
            'getNodeElements',
            'getNodeAncestors',
            'getNodeDescendant',
            'getCommonNode',
            'isAncestor',
            'hasSingleChild',
            'getNodeParent',
            'isCollapsed',
            'isExpanded',
            'isText',
            'isTextList',
            'textEquals',
            'textMatches',
            'TText',
            'moveNodes',
            'moveSelection',
            'removeNodes',
            'select',
            'insertText',
            'insertNodes',
            'deleteText',
            'setPoint',
            'setNodes',
            'unwrapNodes',
            'deselect',
            'mergeNodes',
            'collapseSelection',
            'unsetNodes',
            'setSelection',
            'splitNodes',
            'insertFragment',
            'wrapNodes',
            'liftNodes',
          ],
        },
        {
          title: 'Slate React',
          href: '/docs/api/slate-react',
          headings: [
            'blurEditor',
            'hasEditorSelectableTarget',
            'insertData',
            'hasEditorDOMNode',
            'focusEditor',
            'findNodeKey',
            'getEditorWindow',
            'toDOMRange',
            'toDOMNode',
            'findEditorDocumentOrShadowRoot',
            'setFragmentData',
            'toSlateNode',
            'findEventRange',
            'isEditorFocused',
            'isComposing',
            'hasEditorTarget',
            'isEditorReadOnly',
            'isTargetInsideNonReadonlyVoidEditor',
            'deselectEditor',
            'hasEditorEditableTarget',
            'toSlatePoint',
            'findNodePath',
            'SlateProps',
            'toSlateRange',
            'toDOMPoint',
            'TReactEditor',
          ],
        },
        {
          title: 'Slate Utils',
          href: '/docs/api/slate-utils',
          headings: [
            'findDescendant',
            'getBlockAbove',
            'getChildren',
            'getEdgeBlocksAbove',
            'getLastChild',
            'getLastNodeByLevel',
            'getMark',
            'getNextNodeStartPoint',
            'getNextSiblingNodes',
            'getOperations',
            'getPointBeforeLocation',
            'getPointFromLocation',
            'getPointNextToVoid',
            'getPreviousBlockById',
            'getPreviousNodeEndPoint',
            'getPreviousPath',
            'getPreviousSiblingNode',
            'getRangeBefore',
            'getRangeFromBlockStart',
            'getSelectionText',
            'isAncestorEmpty',
            'isBlockAboveEmpty',
            'isBlockTextEmptyAfterSelection',
            'isDocumentEnd',
            'isFirstChild',
            'isMarkActive',
            'isPointAtWordEnd',
            'isRangeAcrossBlocks',
            'isRangeInSameBlock',
            'isRangeInSingleText',
            'isSelectionAtBlockEnd',
            'isSelectionAtBlockStart',
            'isSelectionExpanded',
            'isTextByPath',
            'isWordAfterTrigger',
            'queryEditor',
            'insertElements',
            'insertEmptyElement',
            'moveChildren',
            'removeMark',
            'removeNodeChildren',
            'removeSelectionMark',
            'replaceNodeChildren',
            'selectEndOfBlockAboveSelection',
            'setMarks',
            'toggleMark',
            'toggleWrapNodes',
            'wrapNodeChildren',
            'createDocumentNode',
            'createNode',
          ],
        },
        {
          title: 'React Utils',
          href: '/docs/api/react-utils',
          headings: [
            'PortalBody',
            'Text',
            'Box',
            'createPrimitiveComponent',
            'createSlotComponent',
            'withProviders',
          ],
        },
        {
          title: 'cn',
          href: '/docs/api/cn',
          headings: ['cn', 'withCn', 'withProps', 'withVariants'],
        },
      ],
    },
  ],
  componentsNav: [
    {
      title: 'Plate UI',
      items: [
        {
          title: 'Introduction',
          href: '/docs/components',
        },
        {
          title: 'Installation',
          href: '/docs/components/installation',
        },
        {
          title: 'components.json',
          href: '/docs/components/components-json',
        },
        {
          title: 'Theming',
          href: '/docs/components/theming',
        },
        {
          title: 'Dark mode',
          href: '/docs/components/dark-mode',
        },
        {
          title: 'CLI',
          href: '/docs/components/cli',
        },
        {
          title: 'Changelog',
          href: '/docs/components/changelog',
        },
      ],
    },
    {
      title: 'Components',
      items: [
        customizerComponents.editor,
        customizerComponents.alignDropdownMenu,
        customizerComponents.avatar,
        customizerComponents.blockquoteElement,
        customizerComponents.button,
        customizerComponents.caption,
        customizerComponents.checkbox,
        customizerComponents.cloud,
        customizerComponents.codeBlockElement,
        customizerComponents.codeLeaf,
        customizerComponents.codeLineElement,
        customizerComponents.codeSyntaxLeaf,
        customizerComponents.colorDropdownMenu,
        customizerComponents.combobox,
        customizerComponents.command,
        customizerComponents.commentLeaf,
        customizerComponents.commentToolbarButton,
        customizerComponents.commentsPopover,
        customizerComponents.cursorOverlay,
        customizerComponents.columnGroupElement,
        customizerComponents.columnElement,
        customizerComponents.dialog,
        customizerComponents.draggable,
        customizerComponents.dropdownMenu,
        customizerComponents.emojiCombobox,
        customizerComponents.emojiDropdownMenu,
        customizerComponents.emojiToolbarDropdown,
        customizerComponents.excalidrawElement,
        customizerComponents.fixedToolbar,
        customizerComponents.fixedToolbarButtons,
        customizerComponents.floatingToolbar,
        customizerComponents.floatingToolbarButtons,
        customizerComponents.headingElement,
        customizerComponents.highlightLeaf,
        customizerComponents.hrElement,
        customizerComponents.imageElement,
        customizerComponents.indentListToolbarButton,
        customizerComponents.indentToolbarButton,
        customizerComponents.input,
        customizerComponents.insertDropdownMenu,
        customizerComponents.kbdLeaf,
        customizerComponents.lineHeightDropdownMenu,
        customizerComponents.linkElement,
        customizerComponents.linkFloatingToolbar,
        customizerComponents.linkToolbarButton,
        customizerComponents.listElement,
        customizerComponents.listToolbarButton,
        customizerComponents.markToolbarButton,
        customizerComponents.mediaEmbedElement,
        customizerComponents.mediaPopover,
        customizerComponents.mediaToolbarButton,
        customizerComponents.mentionCombobox,
        customizerComponents.mentionElement,
        customizerComponents.mentionInputElement,
        customizerComponents.modeDropdownMenu,
        customizerComponents.moreDropdownMenu,
        customizerComponents.outdentToolbarButton,
        customizerComponents.paragraphElement,
        customizerComponents.placeholder,
        customizerComponents.popover,
        customizerComponents.resizable,
        customizerComponents.searchHighlightLeaf,
        customizerComponents.separator,
        customizerComponents.tableCellElement,
        customizerComponents.tableDropdownMenu,
        customizerComponents.tableElement,
        customizerComponents.tableRowElement,
        customizerComponents.todoListElement,
        customizerComponents.toggleElement,
        customizerComponents.toggleToolbarButton,
        customizerComponents.toolbar,
        customizerComponents.tooltip,
        customizerComponents.turnIntoDropdownMenu,
      ],
    },
  ],
};