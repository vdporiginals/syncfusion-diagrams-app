var fontFamily = [
  "Segoe UI",
  "Times New Roman",
  "Arial",
  "Times New Roman",
  "Tahoma",
  "Helvetica",
];
var fontSize = ["1pt", "2pt", "3pt", "4pt", "5pt"];
var tabs = [
  {
    id: "home",
    text: "Home",
    groups: [
      {
        text: "Clipboard",
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: "copy",
                text: "Copy",
                toolTip: "Copy",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "copy-clipboard icon-40",
                },
              },
              {
                id: "paste",
                text: "Paste",
                toolTip: "Paste",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-paste",
                },
              },
              {
                id: "cut",
                text: "Cut",
                toolTip: "Cut",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 cut-clipboard",
                },
              },
              {
                id: "delete",
                text: "Delete",
                toolTip: "Delete",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 delete-clipboard",
                },
              },
              {
                id: "copytoclipboard",
                text: "Copy to Clipboard",
                toolTip: "Copy to Clipboard",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 copy-to-clipboard",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Undo Action",
        alignType: ej.Ribbon.AlignType.Columns,
        width: 80,
        content: [
          {
            groups: [
              {
                id: "undo",
                text: "Undo Last Action",
                toolTip: "Undo",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-undo",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Format",
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: "leftalign",
                toolTip: "Left align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-left-align",
                },
              },
              {
                id: "centeralign",
                toolTip: "Center align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-center-align",
                },
              },
              {
                id: "rightalign",
                toolTip: "Right align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-right-align",
                },
              },
              {
                id: "menu-burger",
                toolTip: "Right align",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon menu-burger",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "fontFamily",
                toolTip: "Font",

                dropdownSettings: {
                  dataSource: fontFamily,
                  text: "Segoe UI",
                  width: 100,
                },
              },
              {
                id: "fontSize",
                toolTip: "FontSize",
                dropdownSettings: {
                  dataSource: fontSize,
                  text: "1pt",
                  width: 60,
                },
              },
            ],
            defaults: {
              type: ej.Ribbon.type.dropDownList,
              height: 28,
            },
          },
          {
            groups: [
              {
                id: "bold",
                toolTip: "Bold",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Bold",
                  activeText: "Bold",
                  defaultPrefixIcon: "e-icon flaticon-bold",
                  activePrefixIcon: "e-icon flaticon-bold",
                },
              },
              {
                id: "italics",
                toolTip: "Italics",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Italics",
                  activeText: "Italics",
                  defaultPrefixIcon: "e-icon flaticon-italic",
                  activePrefixIcon: "e-icon flaticon-italic",
                },
              },
              {
                id: "underLine",
                toolTip: "Underline",
                type: ej.Ribbon.type.toggleButton,
                toggleButtonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  defaultText: "Underline",
                  activeText: "Underline",
                  defaultPrefixIcon: "e-icon flaticon-underlined-text",
                  activePrefixIcon: "e-icon flaticon-underlined-text",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Style",
        alignType: ej.Ribbon.AlignType.Rows,
        content: [
          {
            groups: [
              {
                id: "fill",
                text: "Fill",
                toolTip: "Fill",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 fill-menu",
                },
              },
              {
                id: "line",
                text: "Line",
                toolTip: "Line",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "line-menu icon-40",
                },
              },
              {
                id: "text",
                text: "Text",
                toolTip: "Text",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 text-menu",
                },
              },
              {
                id: "start",
                text: "Start",
                toolTip: "Start",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 start-menu",
                },
              },
              {
                id: "end",
                text: "End",
                toolTip: "End",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 end-menu",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Annotation",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "pointer",
                text: "Pointer",
                toolTip: "Pointer",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 point-menu",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "textBox",
                text: "Text",
                toolTip: "Text Box",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 text-menu2",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "line",
                text: "Line",
                toolTip: "Line",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 line-menu2",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "rectangle",
                text: "Rectangle",
                toolTip: "Rectangle",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-rectangular-shape-outline",
                },
              },
              {
                id: "arc",
                text: "Arc",
                toolTip: "Arc",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-curved-line",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "ellipse",
                text: "Ellipse",
                toolTip: "Ellipse",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-ellipse-outline-shape-variant",
                },
              },
              {
                id: "polyline",
                text: "Polyline",
                toolTip: "Polyline",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "flaticon-business-ascendant-graphic-line",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Communication Link",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "AutoConnector",
                text: "Auto Connector",
                toolTip: "AutoConnector",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 autoconnector",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Node Item",
        content: [
          {
            groups: [
              {
                id: "node",
                text: "Node",
                toolTip: "Node",
                width: "70px",
                height: "50px",
                type: ej.Ribbon.type.splitButton,
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-node-menu-home-list",
                  targetID: "node-menu-home-list",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "insert",
    text: "Insert",
    groups: [
      {
        text: "Diagram Parts",
        content: [
          {
            groups: [
              {
                id: "container",
                text: "Container",
                toolTip: "Container",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 container-menu-insert",
                  targetID: "listSubMenucontainerInsert",
                },
              },
              {
                id: "list",
                text: "List",
                toolTip: "List",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 list-menu-insert",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "picture",
                text: "Picture",
                toolTip: "Picture",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 picture-menu-insert",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "fromclipboard",
                text: "From Clipboard",
                toolTip: "From Clipboard",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "copy-clipboard icon-40",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Container",
        content: [
          {
            groups: [
              {
                id: "function",
                text: "Function",
                toolTip: "Function",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "copy-clipboard icon-40",
                },
              },
              {
                id: "application",
                text: "Application",
                toolTip: "Application",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-paste",
                },
              },
              {
                id: "Result",
                text: "Result",
                toolTip: "Result",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-paste",
                },
              },
              {
                id: "Collection",
                text: "Collection",
                toolTip: "Collection",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "copy-clipboard icon-40",
                },
              },
              {
                id: "Dictionary",
                text: "Dictionary",
                toolTip: "Dictionary",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-paste",
                },
              },
              {
                id: "mainarea",
                text: "Main Area",
                toolTip: "Main Area",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 icon-paste",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "equations",
    text: "Equations",
    groups: [
      {
        text: "Diagram Parts",
        content: [
          {
            groups: [
              {
                id: "Bracket",
                text: "Bracket",
                toolTip: "Bracket",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-brackets",
                  targetID: "listSubMenuBracketInsert",
                },
              },
              {
                id: "Decorator",
                text: "Decorator",
                toolTip: "Decorator",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-decoratedEquation",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Sum & Products",
                text: "Sum & Products",
                toolTip: "Sum & Products",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-sumproduct",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Intergral",
                text: "Intergral",
                toolTip: "Intergral",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-integrals",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Script",
                text: "Script",
                toolTip: "Script",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-script",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Fraction & Radical",
                text: "Fraction & Radical",
                toolTip: "Fraction & Radical",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-divroot",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Labeled Arrow",
                text: "Labeled Arrow",
                toolTip: "Labeled Arrow",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-arrowEquation",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Underbar & Overbar",
                text: "Underbar & Overbar",
                toolTip: "Underbar & Overbar",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-underbar",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Accent & Prime",
                text: "Accent & Prime",
                toolTip: "Accent & Prime",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-decoratedCharacter",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Matrix",
                text: "Matrix",
                toolTip: "Matrix",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-integrals",
                  targetID: "listSubMenuListInsert",
                },
              },
              {
                id: "Boxes",
                text: "Boxes",
                toolTip: "Boxes",
                type: ej.Ribbon.type.splitButton,
                height: "80px",
                splitButtonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "equation-menu-integrals",
                  targetID: "listSubMenuListInsert",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "function",
                text: "Function",
                toolTip: "Function",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "copy-clipboard icon-40",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: "equations",
  //   text: "Equations",
  //   groups: [
  //     {
  //       text: "",
  //       content: [
  //         {
  //           groups: [
  //             {
  //               id: "Bracket",
  //               text: "Bracket",
  //               toolTip: "Bracket",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Decorator",
  //               text: "Decorator",
  //               toolTip: "Decorator",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Sum_products",
  //               text: "Sum & products",
  //               toolTip: "Sum & products",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Integral",
  //               text: "Integral",
  //               toolTip: "Integral",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Script",
  //               text: "Script",
  //               toolTip: "Script",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Fraction_radical",
  //               text: "Fraction & radical",
  //               toolTip: "Fraction & radical",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Labeled_Arrow",
  //               text: "Labeled Arrow",
  //               toolTip: "Labeled Arrow",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Underbar_Overbar",
  //               text: "Underbar & Overbar",
  //               toolTip: "Underbar & Overbar",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Bracket",
  //               text: "Bracket",
  //               toolTip: "Bracket",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Bracket",
  //               text: "Bracket",
  //               toolTip: "Bracket",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //             {
  //               id: "Bracket",
  //               text: "Bracket",
  //               toolTip: "Bracket",
  //               width: "75px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-click",
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "edit",
    text: "Edit",
    groups: [
      {
        text: "Entity",
        content: [
          {
            groups: [
              {
                id: "selectedEntity",
                text: "Selected Entity",
                toolTip: "Selected Entity",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 selectedentityedit",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Undo Action",
        content: [
          {
            groups: [
              {
                id: "undoLastAction1",
                text: "Undo Last Action",
                toolTip: "Undo Last Action",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 undolastactionedit",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "project",
    text: "Project",
    groups: [
      {
        text: "Start",
        content: [
          {
            groups: [
              {
                id: "startAProject",
                text: "Start a Project",
                toolTip: "Start a Project",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 startproject",
                },
              },
              {
                id: "configureWarningMessage",
                text: "Configure Warning Message",
                toolTip: "Configure Warning Message",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 error",
                },
              },
              {
                id: "applicationsetting",
                text: "Application Setting",
                toolTip: "Application Setting",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 optionmix",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Video & Image",
        content: [
          {
            groups: [
              {
                id: "captureimage",
                text: "Capture Image",
                toolTip: "Capture Image",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 captureimageproject",
                },
              },
              {
                id: "reOpenProject",
                text: "Reopen Project",
                toolTip: "Reopen Project",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 editimageproject",
                },
              },
              {
                id: "reconrdvideoproject",
                text: "Record Video",
                toolTip: "Record Video",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 reconrdvideoproject",
                },
              },
              {
                id: "editvideoproject",
                text: "Edit Video",
                toolTip: "Edit Video",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 editvideoproject",
                },
              },
              {
                id: "recordaudioproject",
                text: "Record Audio",
                toolTip: "Record Audio",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 recordaudioproject",
                },
              },
              {
                id: "settingproject",
                text: "Settings",
                toolTip: "Settings",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 settingproject",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Simalation",
        content: [
          {
            groups: [
              {
                id: "simulate",
                text: "Simulate",
                toolTip: "Simulate",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "debug",
                text: "Debug",
                toolTip: "Debug",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Step Into",
                text: "Step Into",
                toolTip: "Step Into",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Abort",
                text: "Abort",
                toolTip: "Abort",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Stop",
                text: "Stop",
                toolTip: "Stop",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
              {
                id: "Simulation Setting",
                text: "Simulation Setting",
                toolTip: "Simulation Setting",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 settingproject",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Finish",
        content: [
          {
            groups: [
              {
                id: "Close Project",
                text: "Close Project",
                toolTip: "Close Project",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 closeproject",
                },
              },
              {
                id: "Open Project",
                text: "Open Project",
                toolTip: "Open Project",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 openproject",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "view",
    text: "View",
    groups: [
      {
        text: "Open",
        content: [
          {
            groups: [
              {
                id: "Sub Funciton",
                text: "Sub Funciton",
                toolTip: "Sub Funciton",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subfunction",
                },
              },
              {
                id: "Sub Application",
                text: "Sub Application",
                toolTip: "Sub Application",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subapplication",
                },
              },
              {
                id: "sub Result",
                text: "sub Result",
                toolTip: "sub Result",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 subresult",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Zoom",
        content: [
          {
            groups: [
              {
                id: "Fit to Window",
                text: "Fit to Window",
                toolTip: "Fit to Window",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-20 fittowindownview",
                },
              },
              {
                id: "PageWidth",
                text: "Page Width",
                toolTip: "Page Width",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-20 pagewidthview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Show",
        content: [
          {
            groups: [
              {
                id: "Show Tooltip",
                text: "Show Tooltip",
                toolTip: "Show Tooltip",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-view",
                },
              },
              {
                id: "Ruler",
                text: "Ruler",
                toolTip: "Ruler",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Allow Cross",
                text: "Allow Cross",
                toolTip: "Allow Cross",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Grid",
                text: "Grid",
                toolTip: "Grid",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Image Width Frama",
                text: "Image Width Frama",
                toolTip: "Image Width Frama",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
              {
                id: "Page Breaks",
                text: "Page Breaks",
                toolTip: "Page Breaks",
                buttonSettings: {
                  contentType: ej.ContentType.Text,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-windows-couple",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Show Entities",
        content: [
          {
            groups: [
              {
                id: "Entity Library",
                text: "Entity Library",
                toolTip: "Entity Library",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 entityview",
                },
              },
              {
                id: "Pan & zoom",
                text: "Pan & zoom",
                toolTip: "Pan & zoom",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 panzoomview",
                },
              },
              {
                id: "Model View",
                text: "Model View",
                toolTip: "Model View",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 modelview",
                },
              },
              {
                id: "View List",
                text: "View List",
                toolTip: "View List",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 tasklistview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "Show & Hide Models",
                text: "Show & Hide Models",
                toolTip: "Show & Hide Models",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 showhidemodelsview",
                },
              },
            ],
          },
        ],
      },
      {
        text: "",
        content: [
          {
            groups: [
              {
                id: "Show & Hide Connection Points",
                text: "Show & Hide Connection Points",
                toolTip: "Show & Hide Connection Points",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 simulationproject",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   id: "action",
  //   text: "Action",
  //   groups: [
  //     {
  //       text: "Entity",
  //       alignType: ej.Ribbon.AlignType.Rows,
  //       content: [
  //         {
  //           groups: [
  //             {
  //               id: "showRelationship",
  //               text: "Show Relationship of Entities",
  //               toolTip: "Show Relationship of Entities",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-relation",
  //               },
  //             },
  //             {
  //               id: "identifySimilarities",
  //               text: "Identify Similarity of Entities",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-relation",
  //               },
  //             },
  //             {
  //               id: "identifyRelationship",
  //               text: "Identify Relationship as Entity",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-relation",
  //               },
  //             },
  //             {
  //               id: "attachselected",
  //               text: "Attach Selected Entities",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-relation",
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       text: "Entity",
  //       content: [
  //         {
  //           groups: [
  //             {
  //               id: "compareSlected",
  //               text: "Compare Selected Entities",
  //               toolTip: "Compare Selected Entities",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-compare",
  //               },
  //             },
  //             {
  //               id: "identiftDifference",
  //               text: "Identify Difference of Entities",
  //               toolTip: "Identify Difference of Entities",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-is-not-equal-to-mathematical-symbol",
  //               },
  //             },
  //             {
  //               id: "identifyPart",
  //               text: "Identify Part of Entity",
  //               toolTip: "Identify Part of Entity",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-puzzle",
  //               },
  //             },
  //             {
  //               id: "identifyEntities",
  //               text: "Identify Entities as One",
  //               toolTip: "Identify Entities as One",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-group",
  //               },
  //             },
  //             {
  //               id: "Other Action",
  //               text: "Other Action",
  //               toolTip: "Other Action",
  //               type: ej.Ribbon.type.splitButton,
  //               splitButtonSettings: {
  //                 targetID: "other-action",
  //                 buttonMode: "dropdown",
  //                 arrowPosition: "right",
  //               },
  //             },
  //             {
  //               id: "additionalAction",
  //               text: "Additional Actions",
  //               toolTip: "Additional Action",
  //               type: ej.Ribbon.type.splitButton,
  //               splitButtonSettings: {
  //                 targetID: "additional-action",
  //                 buttonMode: "dropdown",
  //                 arrowPosition: "right",
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       text: "Group",
  //       alignType: ej.Ribbon.AlignType.Columns,
  //       content: [
  //         {
  //           groups: [
  //             {
  //               id: "groupSelected",
  //               text: "Group Selected Entity",
  //               toolTip: "Group Selected Entity",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-group",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           groups: [
  //             {
  //               id: "ungroupSelected",
  //               text: "Ungroup Selected Entity",
  //               toolTip: "Ungroup Selected Entity",
  //               width: "100px",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.TextAndImage,
  //                 imagePosition: ej.ImagePosition.ImageTop,
  //                 prefixIcon: "flaticon-tile",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           groups: [
  //             {
  //               id: "groupPeople",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "flaticon-group-1",
  //               },
  //             },
  //             {
  //               id: "ungroupApplication",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "flaticon-user",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           groups: [
  //             {
  //               id: "ungroupPeople",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //             {
  //               id: "ungroupApplication",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           groups: [
  //             {
  //               id: "groupFunction",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //             {
  //               id: "groupResult",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //           ],
  //         },
  //         {
  //           groups: [
  //             {
  //               id: "ungroupFunction",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //             {
  //               id: "ungroupResult",
  //               buttonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 prefixIcon: "e-icon flaticon-left-align",
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       text: "Compose and Rotate",
  //       content: [
  //         {
  //           groups: [
  //             {
  //               id: "compose",
  //               text: "Compose",
  //               toolTip: "Compose",
  //               width: "70px",
  //               height: "50px",
  //               type: ej.Ribbon.type.splitButton,
  //               splitButtonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 targetID: "compose-list",
  //                 buttonMode: "dropdown",
  //                 arrowPosition: "bottom",
  //                 prefixIcon: "flaticon-tile",
  //               },
  //             },
  //             {
  //               id: "rotate",
  //               text: "Rotate",
  //               toolTip: "Rotate",
  //               width: "70px",
  //               height: "50px",
  //               type: ej.Ribbon.type.splitButton,
  //               splitButtonSettings: {
  //                 contentType: ej.ContentType.ImageOnly,
  //                 targetID: "rotate-list",
  //                 buttonMode: "dropdown",
  //                 arrowPosition: "bottom",
  //                 prefixIcon: "flaticon-redo-arrow-large",
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    id: "layout",
    text: "Layout",
    groups: [
      {
        text: "Nudge and Pan",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "panTool",
                text: "Pan Tool",
                toolTip: "Pan Tool",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-select",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "nudegeLeft",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-left-arrow",
                },
              },
              {
                id: "nudegeUp",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-up-arrow",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "nudgeRight",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-left-arrow",
                },
              },
              {
                id: "nudgeDown",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-down-arrow",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Align",
        content: [
          {
            groups: [
              {
                id: "alignLeft",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-left",
                },
              },
              {
                id: "align Center",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-center",
                },
              },
              {
                id: "align Right",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align-left",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "alignBottom",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-sort",
                },
              },
              {
                id: "alignMiddle",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-align",
                },
              },
              {
                id: "alignTop",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-top-alignment",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Size",
        content: [
          {
            groups: [
              {
                id: "equalhorizontalspace",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "increaseHorizontal",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "decreaseHorizontal",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "equalVerticalSpace",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
              {
                id: "increaseVertical",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
              {
                id: "decreaseVertical",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Size",
        alignType: ej.Ribbon.AlignType.Columns,
        content: [
          {
            groups: [
              {
                id: "sameWidth",
                text: "Same Width",
                toolTip: "Same Width",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-width",
                },
              },
              {
                id: "sameheight",
                text: "Same Height",
                toolTip: "Same Height",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-height",
                },
              },
              {
                id: "sameSize",
                text: "Same Size",
                toolTip: "Same Size",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  prefixIcon: "e-icon flaticon-size-square",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Snap",
        content: [
          {
            groups: [
              {
                id: "snapToGrid",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-grid",
                },
              },
              {
                id: "snapToRuler",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-scale",
                },
              },
            ],
          },
          {
            groups: [
              {
                id: "snapToGuidelines",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-axis",
                },
              },
              {
                id: "snapRotation",
                buttonSettings: {
                  contentType: ej.ContentType.ImageOnly,
                  prefixIcon: "e-icon flaticon-redo-arrow",
                },
              },
            ],
          },
        ],
      },
      {
        text: "Center",
        content: [
          {
            groups: [
              {
                id: "modelHorizontal",
                text: "Model Horizontal",
                toolTip: "Model Horizontal",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-left-alignment",
                },
              },
              {
                id: "modelVertical",
                text: "Model Vertical",
                toolTip: "Model Vertical",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-top-alignment-large",
                },
              },
              {
                id: "sizeToWindow",
                text: "Size To Window",
                toolTip: "Size To Window",
                width: "100px",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "flaticon-website",
                },
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "domain",
    text: "Domain",
    groups: [
      {
        text: "Identification",
        content: [
          {
            groups: [
              {
                id: "communication",
                text: "Communication",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 communicationdomain",
                  click: "switchToComm",
                },
              },
              {
                id: "toTheoryDomain",
                text: "Theory ",
                buttonSettings: {
                  contentType: ej.ContentType.TextAndImage,
                  imagePosition: ej.ImagePosition.ImageTop,
                  prefixIcon: "icon-40 theorydomain",
                  click: "switchToTheory",
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

$(function () {
  $("#Ribbon").ejRibbon({
    height: 170,
    expandPinSettings: {
      toolTip: "Collapse the Ribbon",
    },
    allowResizing: true,
    applicationTab: {
      type: ej.Ribbon.applicationTabType.menu,
      menuItemID: "ribbon",
      menuSettings: {
        openOnClick: true,
      },
    },
    tabs: tabs,
    groupExpand: function (args) {
      alert("Expanded");
    },
  });
  $("#Ribbon_function").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Communication Function",
      "Communication Function",
      "Communication Function",
    ]);
  });
  $("#Ribbon_application").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Application 1",
      "Application 2",
      "Application",
    ]);
  });
  $("#Ribbon_Result").on("click", () => {
    addCommunicationFunction("communicationFunctionGrouped", [
      "Communication Result 1",
      "Communication Result 2",
      "Communication Result",
    ]);
  });
  $("#Ribbon_toCommunicationDomain span:first-child").addClass(
    "disabled-button"
  );
  $("#Ribbon_node span:first-child").addClass("flaticon-node-menu-home-list");
});
