// Getting all comm nodes
let persons = getCommPerson();
let communication = getCommunication();
let application = getCommApplication();
let commLink = getCommLink();
let analysis = getCommAnalysis();
let commSignal = getCommSignal();
let area = getCommAreAndLocation();
let others = getCommOthers();
let commlabel = getCommLabel();
let quickComm = getQuickComm();
let system = getThoerySystem();
let thoery = getTheory();
let fundamental = getThoeryFundamental();
let interface = getTheoryInterface();
let theorySignal = getTheorySignal();
let instrument = getTheoryInstrument();
let functions = getTheoryFunction();
let stability = getTheoryStability();
let thoerylabel = getTheoryLabel();
let quickTheory = getQuickTheory();
let operatorTheory = getOperatorTheory();
let allShapes = []
  .concat(persons)
  .concat(communication)
  .concat(application)
  .concat(commLink)
  .concat(analysis)
  .concat(commSignal)
  .concat(area)
  .concat(others)
  .concat(commlabel)
  .concat(system)
  .concat(thoery)
  .concat(fundamental)
  .concat(interface)
  .concat(theorySignal)
  .concat(instrument)
  .concat(functions)
  .concat(stability)
  .concat(thoerylabel);

allShapes = everyShape;

var text = JSON.stringify(allShapes);

// Initializing symbol palette
var commPalette = new ej.diagrams.SymbolPalette({
  expandMode: "Single",
  palettes: [
    {
      id: "quickshapes",
      expanded: false,
      symbols: quickComm,
      title: "Quick Entities",
    },
    { id: "person", expanded: true, symbols: persons, title: "Person" },
    {
      id: "Communication",
      expanded: false,
      symbols: communication,
      title: "Communication",
    },
    {
      id: "Application",
      expanded: false,
      symbols: application,
      title: "Application",
    },
    {
      id: "CommmunicationLink",
      expanded: false,
      symbols: commLink,
      title: "Communication Link",
    },
    { id: "Analysis", expanded: false, symbols: analysis, title: "Analysis" },
    {
      id: "CommunicationSignal",
      expanded: false,
      symbols: commSignal,
      title: "Communication Signal",
    },
    {
      id: "AreaandLocation",
      expanded: false,
      symbols: area,
      title: "Area and Location",
    },
    {
      id: "OtherCommunicationElement",
      expanded: false,
      symbols: others,
      title: "Other Communication Element",
    },
    {
      id: "CommLabelPalette",
      expanded: false,
      symbols: commlabel,
      title: "Label",
    },
  ],
  symbolHeight: 75,
  symbolWidth: 275,
  width: "100%",
  height: "100%",
  enableSearch: true,
  // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
  getSymbolInfo: (symbol) => {
    return {
      fit: true,
      tooltip:
        symbol.addInfo !== null && symbol.addInfo !== undefined
          ? symbol.addInfo[0].toolTip
          : symbol.id,
      description: {
        overflow: "Wrap",
        text:
          symbol.addInfo !== null && symbol.addInfo !== undefined
            ? symbol.addInfo[0].title
            : symbol.id,
        wrap: "WrapWithOverflow",
      },
    };
  },
});

var theoryPalette = new ej.diagrams.SymbolPalette({
  expandMode: "Single",
  palettes: [
    {
      id: "quickshapestheory",
      expanded: false,
      symbols: quickTheory,
      title: "Quick Entities",
    },
    { id: "system", expanded: true, symbols: system, title: "System" },
    { id: "theory", expanded: false, symbols: thoery, title: "Theory" },
    {
      id: "fundamental",
      expanded: false,
      symbols: fundamental,
      title: "Fundamental",
    },
    {
      id: "interface",
      expanded: false,
      symbols: interface,
      title: "Interface",
    },
    { id: "signal", expanded: false, symbols: theorySignal, title: "Signal" },
    {
      id: "instrument",
      expanded: false,
      symbols: instrument,
      title: "Instrument",
    },
    {
      id: "functionpallete",
      expanded: false,
      symbols: functions,
      title: "Function",
    },
    {
      id: "stability",
      expanded: false,
      symbols: stability,
      title: "Stability",
    },
    { id: "label", expanded: false, symbols: thoerylabel, title: "Label" },
    {
      id: "operator",
      expanded: false,
      symbols: operatorTheory,
      title: "Operator",
    },
  ],
  symbolHeight: 75,
  symbolWidth: 300,
  width: "100%",
  height: "100%",
  enableSearch: true,
  // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
  getSymbolInfo: (symbol) => {
    return {
      fit: true,
      tooltip:
        symbol.addInfo !== null && symbol.addInfo !== undefined
          ? symbol.addInfo[0].toolTip
          : symbol.id,
      description: {
        overflow: "Wrap",
        text:
          symbol.addInfo !== null && symbol.addInfo !== undefined
            ? symbol.addInfo[0].title
            : symbol.id,
        wrap: "WrapWithOverflow",
      },
    };
  },
});

commPalette.appendTo("#symbol-palette-comm");
theoryPalette.appendTo("#symbol-palette-theory");

// Function to switch palettes
function switchToTheory() {
  if (currentDomain === 1) {
    return;
  }
  currentDomain = 1;
  let commPalette = document.getElementById("symbol-palette-comm");
  let commModel = document.getElementById("comm-model-list");
  let theoryPalette = document.getElementById("symbol-palette-theory");
  let theoryModel = document.getElementById("theory-model-list");
  commPalette.style.display = "none";
  commModel.style.display = "none";
  theoryPalette.style.display = "block";
  theoryModel.style.display = "block";
  let commButton = document.getElementById("Ribbon_toCommunicationDomain");
  commButton.disabled = false;
  commButton.firstElementChild.classList.remove("disabled-button");

  let theoryButton = document.getElementById("Ribbon_toTheoryDomain");
  theoryButton.disabled = true;
  theoryButton.firstElementChild.classList.add("disabled-button");

  openTheoryTab();
}

function switchToComm() {
  if (currentDomain === 0) {
    return;
  }
  currentDomain = 0;
  let commPalette = document.getElementById("symbol-palette-comm");
  let commModel = document.getElementById("comm-model-list");
  let theoryPalette = document.getElementById("symbol-palette-theory");
  let theoryModel = document.getElementById("theory-model-list");
  commPalette.style.display = "block";
  commModel.style.display = "block";
  theoryPalette.style.display = "none";
  theoryModel.style.display = "none";
  let commButton = document.getElementById("Ribbon_toCommunicationDomain");
  commButton.disabled = true;
  commButton.firstElementChild.classList.add("disabled-button");

  let theoryButton = document.getElementById("Ribbon_toTheoryDomain");
  theoryButton.disabled = false;
  theoryButton.firstElementChild.classList.remove("disabled-button");
  openCommTab();
}
let main = allShapes.find((a) => a.id === "mainArea");

ej.diagrams.Diagram.Inject(
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu,
  ej.diagrams.Snapping
);
let currentItem = "";
let nodeAppendData = {
  // Position of the node
  offsetX: 250,
  offsetY: 450,
  // Size of the node
  width: 400,
  height: 400,
  // sets the type of the shape as image
  shape: {
    type: "Image",
    source: "http://www.syncfusion.com/content/images/nuget/sync_logo_icon.png",
  },
  //Customizes the appearances such as text, font, fill, and stroke.
  style: {
    fill: "none",
  },
};
$("#fileUploadToDiagrams").change(function () {
  const file = this.files[0];
  if (file) {
    let url = URL.createObjectURL(file);
    if (file.type.startsWith("image/")) {
      diagram.selectedItems.properties.nodes[0].shape = {
        type: "Image",
        source: url,
      };
      $("#fileUploadToDiagrams").val("");
    }

    if (file.type.startsWith("video/")) {
      if (currentItem.includes("add") || currentItem.startsWith("add")) {
        nodeAppendData.shape = {
          type: "HTML",
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        nodeAppendData.width = 400;
        nodeAppendData.height = 278;
        diagram.add(nodeAppendData);
        $("#fileUploadToDiagrams").val("");
      } else {
        diagram.selectedItems.properties.nodes[0].shape = {
          type: "HTML",
          content: `<video width="400" height="278" controls>
                <source src="${url}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`,
        };
        diagram.selectedItems.properties.nodes[0].width = 400;
        diagram.selectedItems.properties.nodes[0].height = 278;
        $("#fileUploadToDiagrams").val("");
      }
    }

    if (file.type.startsWith("audio/")) {
      if (currentItem.includes("add")) {
        nodeAppendData.shape = {
          type: "HTML",
          content: `<audio controls autoplay  width="400" height="50">
          <source src="${url}">
          <source src="horse.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
        </audio>`,
        };
        nodeAppendData.width = 400;
        nodeAppendData.height = 100;
        diagram.add(nodeAppendData);
        $("#fileUploadToDiagrams").val("");
      } else {
        diagram.selectedItems.properties.nodes[0].shape = {
          type: "HTML",
          content: `<audio controls autoplay width="400" height="50">
                    <source src="${url}">
                  Your browser does not support the audio element.
                  </audio>`,
        };
        diagram.add(nodeAppendData);
        diagram.selectedItems.properties.nodes[0].width = 400;
        diagram.selectedItems.properties.nodes[0].height = 100;
        $("#fileUploadToDiagrams").val("");
      }
    }
  }
});
let grouped = 0;
function relatePersonOperatingPrinciple() {
  const item1 = diagram.nodes[0];
  let findItem = getItemById("principle");
  findItem.offsetX = item1.offsetX;
  findItem.offsetY = item1.offsetY + 300;
  findItem.width = 150;
  findItem.height = 100;
  diagram.add(findItem);
  let findItem2 = getItemById("ellipseBasic");
  findItem2.offsetX = item1.offsetX + 400;
  findItem2.offsetY = item1.offsetY + 150;
  diagram.add(findItem2);
  let findItem3 = getItemById("itemHidden");
  findItem3.offsetX = item1.offsetX + 600;
  findItem3.offsetY = item1.offsetY + 145;
  diagram.add(findItem3);
  diagram.connectors = [
    {
      id: "connector1",
      sourceID: diagram.nodes[0].id,
      targetID: diagram.nodes[2].id,
      type: "Orthogonal",
    },
    {
      id: "connector2",
      sourceID: diagram.nodes[1].id,
      targetID: diagram.nodes[2].id,
      type: "Orthogonal",
    },
    {
      id: "connector3",
      sourceID: diagram.nodes[2].id,
      targetID: diagram.nodes[3].id,
      type: "Orthogonal",
    },
  ];
}
let pictureId = [
  "replaceGroupPeoplePicture",
  "replacePersonPicture",
  "communicationElementPicture",
  "entityElementPicture",
  "functionstatusElementPicture",
  "loadPicktureFromFile",
  "replaceCommunicationHolderPicture",
];

function onDrogGroupsOfPeopleNode(args) {
  let findPeople = getItemById("personNoframe");
  let continuityPerson = getItemById("continuityPerson");
  let nodes = getNodesDiagramNodes([...diagram.nodes]);
  const randomId1 = randomId();
  const randomId2 = randomId();
  const randomId3 = randomId();
  const item1 = {
    id: `${findPeople.id}${randomId1}`,
    offsetX: args.element.offsetX - 70,
    offsetY: args.element.offsetY,
    addInfo: findPeople.addInfo,
    shape: findPeople.shape,
    height: 140,
    width: 60,
  };
  const item2 = {
    id: `${findPeople.id}${randomId2}`,
    offsetX: args.element.offsetX,
    offsetY: args.element.offsetY,
    addInfo: findPeople.addInfo,
    shape: findPeople.shape,
    height: 140,
    width: 60,
  };
  const item3 = {
    id: `${continuityPerson.id}${randomId3}`,
    offsetX: args.element.offsetX + 70,
    offsetY: args.element.offsetY,
    addInfo: continuityPerson.addInfo,
    shape: continuityPerson.shape,
    width: 70,
    height: 40,
  };
  const group = {
    id: `groupofpeople-${findPeople.id}${randomId1}-${findPeople.id}${randomId2}-${continuityPerson.id}${randomId3}`,
    children: [
      `${findPeople.id}${randomId1}`,
      `${findPeople.id}${randomId2}`,
      `${continuityPerson.id}${randomId3}`,
    ],
    addInfo: [
      {
        title: "Group of People",
        toolTip: "Represents a Group of People",
      },
    ],
    annotations: [
      {
        content: "Group Name",
        verticalAlignment: "Bottom",
        offset: {
          x: 0.5,
          y: 1,
        },
        margin: {
          top: 20,
        },
      },
    ],
    style: {
      fontSize: 10,
      fill: "transparent",
    },
    offsetX: args.element.offsetX,
    offsetY: args.element.offsetY,
  };
  nodes = nodes.concat([item1, item2, item3, group]);
  nodes = nodes.filter((x) => !x.id || x.id !== args.element.id);
  setTimeout(() => {
    diagram.nodes = nodes;
    openModal(
      "Group of People",
      "#dialogGroupofPeople",
      onClickApplyGroupOfPeople
    );
  }, 100);
}

function onClickApplyGroupOfPeople() {
  hiddenModal();
}

function onDrogContinuityPerson(args) {
  openModal(
    "Continuity Size",
    "#dialogContinuityPerson",
    onClickApplyContinuityPerson
  );
}

function onClickApplyContinuityPerson() {
  let nodes = getNodesDiagramNodes([...diagram.nodes]);
  const value = document.getElementById("input-continuity-size").value;
  console.log(value);
  const node = nodes.find((x) => x.id === idElementActive);
  node.width = node.width * value;
  node.height = node.height * value;
  diagram.nodes = nodes;
  setTimeout(() => {
    hiddenModal();
  }, 100);
}

function onDrogNodeTableComm(args) {
  const positionItem = document
    .getElementById(args.element.id)
    .getBoundingClientRect();
  const element = document.getElementById("dialogNodeTableComm");
  element.style.paddingTop = positionItem.top + "px";
  element.style.paddingLeft = positionItem.left + 220 + "px";
  element.style.display = "block";
}

function onClickApplyNodeTableComm() {
  const element = document.getElementById("dialogNodeTableComm");
  element.style.display = "none";
  const nodes = getNodesDiagramNodes([...diagram.nodes]);
  let itemSub = getItembyIdCommOthers("nodeTableComm");
  const value = document.getElementById("input-node-table-comm").value;
  itemSub.annotation.columnNo = Number(value);
  itemSub.annotation.content = [];
  for (let ix = 0; ix < Number(value); ix++) {
    if (ix === 0) {
      itemSub.annotation.content = itemSub.annotation.content.concat([
        "Node Number",
        "Information",
      ]);
    } else {
      itemSub.annotation.content = itemSub.annotation.content.concat([
        ix.toString(),
        "value" + ix,
      ]);
    }
  }
  let item = drawShape(itemSub);
  item.offsetX = nodes[0].offsetX;
  item.offsetY = nodes[0].offsetY;
  diagram.nodes = [item];
}

function onClickCancelNodeTableComm() {
  const element = document.getElementById("dialogNodeTableComm");
  element.style.display = "none";
}

function onDrogGroupOrAddEntities(args) {
  const positionItem = document
    .getElementById(args.element.id)
    .getBoundingClientRect();
  const element = document.getElementById("dialogGroupOrAddEntities");
  element.style.paddingTop = positionItem.top + "px";
  element.style.paddingLeft = positionItem.left + 70 + "px";
  element.style.display = "block";
}

function onClickApplyGroupOrAddEntities() {
  const element = document.getElementById("dialogGroupOrAddEntities");
  element.style.display = "none";
  const nodes = getNodesDiagramNodes([...diagram.nodes]);
  const value = document.getElementById("input-group-or-add-entities").value;
  const find = nodes.find((x) => x.id === idElementActive);
  find.height = (find.height * value) / 2;
  find.offsetX = find.offsetX;
  find.offsetY = find.offsetY;
  diagram.nodes = [...nodes];
}

function onClickAllowCross() {
  diagram.constraints = 500 | (2 | 2048);
}

function onDrogMainArea() {
  openModal("Main Area", "#dialogMainArea", onClickApplyMainArea);
}

function onClickApplyMainArea() {
  const offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  const offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  let mainArea = areaData.find((a) => a.id === "mainArea");
  diagram.remove(diagram.selectedItems.properties.nodes[0]);
  mainArea.annotation.height = undefined;
  mainArea.annotation.width = undefined;
  let findItem = drawShape(mainArea);
  let addItem = diagram.add(findItem);

  let siteOfOperation = everyShape.find((a) => a.id === "siteOfOperation");
  siteOfOperation.margin = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  };
  diagram.addChild(addItem, siteOfOperation, 1);
  let siteOfOperation2 = everyShape.find((a) => a.id === "siteOfOperation");
  siteOfOperation2.id = "siteOfOperation2";
  siteOfOperation2.margin = {
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
  };
  diagram.addChild(addItem, siteOfOperation2, 2);
  setTimeout(() => {
    diagram.nodes[0].offsetX = offsetXD;
    diagram.nodes[0].offsetY = offsetYD;
    diagram.nodes[2].offsetY = 200;
    hiddenModal();
  }, 1);
}

idElementActive = "";

//creation of the TextElement.
function getTextElement(text, color) {
  let findItem = drawShape(areaData.find((a) => a.id === "mainArea"));
  let textElement = new ej.diagrams.DiagramElement(findItem);
  textElement.id = randomId();
  textElement.width = 80;
  textElement.height = 35;
  textElement.offsetX = color;
  return textElement;
}

function dropGrouped(args) {
  var node = args.element;
  var parentNode = args.target;
  setTimeout(() => {
    // Checking the nodes length greater than one or not
    if (diagram.nodes.length > 1) {
      if (!node.children && node.id !== parentNode.id) {
        //Getting the group node by getObject method by passing parent ID
        let height = node.height;
        let offsetY = node.offsetY;
        let offsetX = node.offsetX;
        let topElementPos = offsetY - height / 2;
        let bottomElementPos = offsetY + height / 2;
        let width = node.width;
        let leftElementPos = offsetX - width / 2;
        let rightElementPos = offsetX + width / 2;
        let source = node.id ? node : node?.properties?.nodes[0];
        let crudDeleteNodes = diagram.crudDeleteNodes.map((a) => a.id);
        setTimeout(() => {
          if (diagram.nodes.length > 1) {
            let nodesFil = diagram.nodes;
            if (nodesFil.length <= 2) {
              diagram.clearSelection();
              diagram.select([parentNode, source]);
              diagram.group();
              let newNode = diagram.getObject(parentNode.id);
              parentNode.height = newNode.height + 30;
              parentNode.width = newNode.width + 100;
              parentNode.offsetX = newNode.offsetX;
              parentNode.offsetY = newNode.offsetY;
              parentNode.annotations[0].offset = { x: 0.5, y: -0.1 };
              source.offsetX = newNode.offsetX;
              source.offsetY = newNode.offsetY;
              if (newNode.children && newNode.children.length > 1) {
                // diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
                newNode.style.strokeColor = "black";
                newNode.style.strokeWidth = 1;
              }
            } else {
              nodesFil.forEach((n) => {
                if (
                  source.id &&
                  source.id !== n.id &&
                  !crudDeleteNodes.includes(n.id)
                ) {
                  let nheight = n.height;
                  let ntopElementPos = n.offsetY - nheight / 2;
                  let nbottomElementPos = n.offsetY + nheight / 2;
                  let nwidth = n.width;
                  let nleftElementPos = n.offsetX - nwidth / 2;
                  let nrightElementPos = n.offsetX + nwidth / 2;
                  let conditionX =
                    (leftElementPos > nleftElementPos &&
                      leftElementPos < nrightElementPos) ||
                    (rightElementPos > nleftElementPos &&
                      rightElementPos < nrightElementPos) ||
                    (offsetX > nleftElementPos && offsetX < nrightElementPos);
                  let conditionY =
                    (topElementPos > ntopElementPos &&
                      topElementPos < nbottomElementPos) ||
                    (bottomElementPos > ntopElementPos &&
                      bottomElementPos < nbottomElementPos) ||
                    (offsetY > ntopElementPos && offsetY < nbottomElementPos);

                  let group = diagram.getObject(n.parentId ? n.parentId : n.id);
                  if (n.id.startsWith("group")) {
                    group = diagram.getObject(n.id);
                  }
                  if (
                    (conditionX || conditionY) &&
                    communicationDroppedElementChecker(node.id, n.id) &&
                    group?.children &&
                    !group?.children?.includes(node.id)
                  ) {
                    if (group.id) {
                      if (
                        node.id.startsWith("principle") &&
                        n.id.startsWith("principle")
                      ) {
                        if (
                          n.id.startsWith("principle") &&
                          node.id.startsWith("principle2")
                        ) {
                          return alert(
                            "Consider a principle as a single entity where a subset as multiple entities; a subset of principles includes multiple principles not the other way around"
                          );
                        }
                        if (
                          node.id.startsWith("principle1") &&
                          n.id.startsWith("principle")
                        ) {
                          return alert(
                            "The main set of principles includes multiple subsets of principles where each subset includes principle.  A single principle does not include the main set of principles."
                          );
                        }
                        if (
                          node.id.startsWith("principle2") &&
                          n.id.startsWith("principle2")
                        ) {
                          return alert(
                            "A subset of principles includes multiple unique principle.  A subset of principles does not include other subsets of principles."
                          );
                        }
                        if (
                          node.id.startsWith("principle1") &&
                          n.id.startsWith("principle2")
                        ) {
                          return alert(
                            "The main set of principles includes all the subsets of principles.  A subset of principles does not include the main set of principles."
                          );
                        }
                        if (
                          node.id.startsWith("principle1") &&
                          n.id.startsWith("principle1")
                        ) {
                          return alert(
                            "The main set of principles is unique and does not include another main set.  There is only one main set of principles."
                          );
                        }
                        return alert(
                          "The main set of principles is unique and does not include another main set.  There is only one main set of principles."
                        );
                      }

                      if (
                        n.id.startsWith("principle1") &&
                        group.children.length >= 10
                      ) {
                        return alert(
                          "The number of subset identified in the main set is 10 subsets"
                        );
                      }
                      if (
                        n.id.startsWith("constantCharacteristics") &&
                        group.children.length >= 5
                      ) {
                        return alert(
                          "The number of constant characteristic identified is up to 5"
                        );
                      }
                      //Added the child into the group by using addChildToGroup
                      diagram.addChildToGroup(group, node);
                      let newNode = diagram.getObject(
                        nodesFil[nodesFil.length - 1].id
                      );
                      let childNode = diagram.getObject(
                        group.children[group.children.length - 2]
                      );
                      newNode.offsetX = childNode.offsetX + 100;
                      newNode.offsetY = childNode.offsetY;
                      diagram.dataBind();
                      //Passing the first node to getObject method to set width and offset for the group node
                      let baseChild = diagram.getObject(group.children[0]);
                      // setTimeout(() => {
                      group.width = group.width + node.width - 30;
                      baseChild.width = group.width;
                      diagram.dataBind();
                      group.children.forEach((chil, i) => {
                        if (i > 0) {
                          let firstChild = diagram.getObject(chil);
                          let annoContent = firstChild.annotations[0].content;
                          let previousChild = diagram.getObject(
                            group.children[i - 1]
                          );
                          let previousAnnoContent =
                            previousChild.annotations[0].content;
                          firstChild.offsetY = group.offsetY;
                          if (i - 1 > 0) {
                            firstChild.offsetX =
                              previousChild.offsetX +
                              previousChild.width / 2 +
                              firstChild.width / 2 +
                              25;
                          } else {
                            firstChild.offsetX =
                              group.offsetX -
                              group.width / 2 +
                              firstChild.width / 2 +
                              35;
                          }
                          if (
                            previousAnnoContent.startsWith(annoContent) &&
                            previousAnnoContent.length - annoContent.length < 3
                          ) {
                            firstChild.annotations[0].content =
                              node.annotations[0].content + " " + i;
                            node.annotations[0].content =
                              node.annotations[0].content + "" + (i + 1);
                          }
                          diagram.dataBind();
                        }
                      });
                      setTimeout(() => {
                        diagram.select([group]);
                      });
                    }
                  }
                }
              });
            }
          }
        }, 0);
        // console.log(e, diagram.nodes)
      }
    }
  }, 0);
}

function communicationDroppedElementChecker(id, parentId) {
  let allowDropped = ["communicationEntity", "communicationElement"];
  let childAllow = [
    "communicationEntity",
    "communicationElement",
    "word",
    "sentence",
    "paragraph",
    "question",
    "answer",
    "picture",
    "video",
    "audio",
    "text",
    "principle",
    "information",
  ];
  if (parentId.startsWith("word")) {
    allowDropped = ["word"];
    childAllow = ["word"];
  }

  if (parentId.startsWith("sentence")) {
    allowDropped = ["sentence"];
    childAllow = ["word", "sentence", "communicationElement", "principle"];
  }
  if (
    parentId.startsWith("paragraph") ||
    parentId.startsWith("communicationElement") ||
    parentId.startsWith("information") ||
    parentId.startsWith("question") ||
    parentId.startsWith("answer")
  ) {
    allowDropped = [
      "sentence",
      "communicationElement",
      "question",
      "information",
      "answer",
    ];
    childAllow = [
      "word",
      "sentence",
      "communicationElement",
      "principle",
      "paragraph",
    ];
  }
  if (parentId.startsWith("communicationFunction")) {
    allowDropped = ["communicationFunction", "function"];
    childAllow = ["function", "communicationFunction"];
  }
  if (parentId.startsWith("aspect")) {
    allowDropped = ["aspect"];
    childAllow = ["aspect"];
  }
  if (parentId.startsWith("dictionary")) {
    allowDropped = ["dictionary"];
    childAllow = ["word"];
  }
  if (parentId.startsWith("collection")) {
    allowDropped = ["collection"];
    childAllow = ["entity"];
  }
  if (parentId.startsWith("communicationResult")) {
    allowDropped = ["communicationResult"];
    childAllow = ["communicationResult"];
  }
  if (parentId.startsWith("action")) {
    allowDropped = ["action"];
    childAllow = ["action"];
  }
  if (parentId.startsWith("reason")) {
    allowDropped = ["reason"];
    childAllow = ["reason"];
  }
  if (parentId.startsWith("principle2")) {
    allowDropped = ["principle2"];
    childAllow = ["principle"];
    if (id !== "principle") {
      alert("A subset of principle can only accept principle");
    }
  }
  if (parentId.startsWith("principle1")) {
    allowDropped = ["principle1"];
    childAllow = ["principle", "principle2"];
    if (id !== "principle" || id !== "principle2") {
      alert(
        "the main set of principle can only accept principle and subset of principle"
      );
    }
  }
  if (parentId.startsWith("reference")) {
    allowDropped = ["reference"];
    childAllow = [
      "communicationEntity",
      "communicationElement",
      "word",
      "sentence",
      "paragraph",
      "question",
      "answer",
      "picture",
      "video",
      "audio",
      "text",
      "principle",
      "information",
    ];
  }
  if (
    parentId.startsWith("locationOfOperation") ||
    parentId.startsWith("siteOfOperation")
  ) {
    allowDropped = ["locationOfOperation", "siteOfOperation"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.startsWith("mainArea")) {
    allowDropped = ["mainArea"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.startsWith("workingareaAL")) {
    allowDropped = ["workingareaAL"];
    childAllow = ["locationOfOperation", "siteOfOperation"];
  }
  if (parentId.startsWith("constantCharacteristics")) {
    allowDropped = ["constantCharacteristics"];
    childAllow = ["constantCharacteristics"];
  }
  if (parentId.startsWith("theory")) {
    allowDropped = ["theory", "theorem"];
    childAllow = ["theory", "theorem"];
  }
  if (parentId.startsWith("utilizationTheory")) {
    allowDropped = ["utilizationTheory"];
    childAllow = ["theory", "theorem"];
  }
  return (
    childAllow.some((a) => id.startsWith(a)) &&
    allowDropped.some((a) => parentId.startsWith(a))
  );
}
function positionChange(e) {
  if (e.state === "Completed") {
    let height = e.source.height;
    let offsetY = e.newValue.offsetY;
    let offsetX = e.newValue.offsetX;
    let topElementPos = offsetY - height / 2;
    let bottomElementPos = offsetY + height / 2;
    let width = e.source.width;
    let leftElementPos = offsetX - width / 2;
    let rightElementPos = offsetX + width / 2;
    let source = e.source.id ? e.source : e.source?.properties?.nodes[0];
    let crudDeleteNodes = diagram.crudDeleteNodes.map((a) => a.id);
    setTimeout(() => {
      if (diagram.nodes.length > 1) {
        let nodesFil = diagram.nodes;
        if (nodesFil.length <= 2) {
          diagram.clearSelection();
          diagram.select([diagram.nodes[0], source]);
          diagram.group();
          let newNode = diagram.getObject(diagram.nodes[0].id);
          diagram.nodes[0].height = newNode.height + 30;
          diagram.nodes[0].width = newNode.width + 100;
          diagram.nodes[0].offsetX = newNode.offsetX;
          diagram.nodes[0].offsetY = newNode.offsetY;
          diagram.nodes[0].annotations[0].offset = { x: 0.5, y: -0.1 };
          source.offsetX = newNode.offsetX;
          source.offsetY = newNode.offsetY;
          if (newNode.children && newNode.children.length > 1) {
            // diagram.remove(diagram.nodes[diagram.nodes.length - 3]);
            newNode.style.strokeColor = "black";
            newNode.style.strokeWidth = 1;
          }
        } else {
          nodesFil.forEach((n) => {
            if (
              source.id &&
              source.id !== n.id &&
              !crudDeleteNodes.includes(n.id)
            ) {
              let nheight = n.height;
              let ntopElementPos = n.offsetY - nheight / 2;
              let nbottomElementPos = n.offsetY + nheight / 2;
              let nwidth = n.width;
              let nleftElementPos = n.offsetX - nwidth / 2;
              let nrightElementPos = n.offsetX + nwidth / 2;
              let conditionX =
                (leftElementPos > nleftElementPos &&
                  leftElementPos < nrightElementPos) ||
                (rightElementPos > nleftElementPos &&
                  rightElementPos < nrightElementPos) ||
                (offsetX > nleftElementPos && offsetX < nrightElementPos);
              let conditionY =
                (topElementPos > ntopElementPos &&
                  topElementPos < nbottomElementPos) ||
                (bottomElementPos > ntopElementPos &&
                  bottomElementPos < nbottomElementPos) ||
                (offsetY > ntopElementPos && offsetY < nbottomElementPos);

              let group = diagram.getObject(n.parentId ? n.parentId : n.id);
              if (n.id.startsWith("group")) {
                group = diagram.getObject(n.id);
              }
              if (
                (conditionX || conditionY) &&
                communicationDroppedElementChecker(source.id, n.id) &&
                group?.children &&
                !group?.children?.includes(source.id)
              ) {
                if (group.id) {
                  if (
                    source.id.startsWith("principle") &&
                    n.id.startsWith("principle")
                  ) {
                    if (
                      n.id.startsWith("principle") &&
                      source.id.startsWith("principle2")
                    ) {
                      return alert(
                        "Consider a principle as a single entity where a subset as multiple entities; a subset of principles includes multiple principles not the other way around"
                      );
                    }
                    if (
                      source.id.startsWith("principle1") &&
                      n.id.startsWith("principle")
                    ) {
                      return alert(
                        "The main set of principles includes multiple subsets of principles where each subset includes principle.  A single principle does not include the main set of principles."
                      );
                    }
                    if (
                      source.id.startsWith("principle2") &&
                      n.id.startsWith("principle2")
                    ) {
                      return alert(
                        "A subset of principles includes multiple unique principle.  A subset of principles does not include other subsets of principles."
                      );
                    }
                    if (
                      source.id.startsWith("principle1") &&
                      n.id.startsWith("principle2")
                    ) {
                      return alert(
                        "The main set of principles includes all the subsets of principles.  A subset of principles does not include the main set of principles."
                      );
                    }
                    if (
                      source.id.startsWith("principle1") &&
                      n.id.startsWith("principle1")
                    ) {
                      return alert(
                        "The main set of principles is unique and does not include another main set.  There is only one main set of principles."
                      );
                    }
                    return alert(
                      "The main set of principles is unique and does not include another main set.  There is only one main set of principles."
                    );
                  }

                  if (
                    n.id.startsWith("principle1") &&
                    group.children.length >= 10
                  ) {
                    return alert(
                      "The number of subset identified in the main set is 10 subsets"
                    );
                  }
                  if (
                    n.id.startsWith("constantCharacteristics") &&
                    group.children.length >= 5
                  ) {
                    return alert(
                      "The number of constant characteristic identified is up to 5"
                    );
                  }
                  //Added the child into the group by using addChildToGroup
                  diagram.addChildToGroup(group, source);
                  let newNode = diagram.getObject(
                    nodesFil[nodesFil.length - 1].id
                  );
                  let childNode = diagram.getObject(
                    group.children[group.children.length - 2]
                  );
                  newNode.offsetX = childNode.offsetX + 100;
                  newNode.offsetY = childNode.offsetY;
                  diagram.dataBind();
                  //Passing the first node to getObject method to set width and offset for the group node
                  let baseChild = diagram.getObject(group.children[0]);
                  // setTimeout(() => {
                  group.width = group.width + source.width - 30;
                  baseChild.width = group.width;
                  diagram.dataBind();
                  group.children.forEach((chil, i) => {
                    if (i > 0) {
                      let firstChild = diagram.getObject(chil);
                      let annoContent = firstChild.annotations[0].content;
                      let previousChild = diagram.getObject(
                        group.children[i - 1]
                      );
                      let previousAnnoContent =
                        previousChild.annotations[0].content;
                      firstChild.offsetY = group.offsetY;
                      if (i - 1 > 0) {
                        firstChild.offsetX =
                          previousChild.offsetX +
                          previousChild.width / 2 +
                          firstChild.width / 2 +
                          25;
                      } else {
                        firstChild.offsetX =
                          group.offsetX -
                          group.width / 2 +
                          firstChild.width / 2 +
                          35;
                      }
                      if (
                        previousAnnoContent.startsWith(annoContent) &&
                        previousAnnoContent.length - annoContent.length < 3
                      ) {
                        firstChild.annotations[0].content =
                          source.annotations[0].content + " " + i;
                        source.annotations[0].content =
                          source.annotations[0].content + "" + (i + 1);
                      }
                      diagram.dataBind();
                    }
                  });
                  setTimeout(() => {
                    diagram.select([group]);
                  });
                }
              }
            }
          });
        }
      }
    }, 0);
    // console.log(e, diagram.nodes)
  }
}
// Initializing and appending diagram
var diagram = new ej.diagrams.Diagram({
  width: "2000px",
  height: "2000px",
  rulerSettings: {
    showRulers: true,
    horizontalRuler: {
      interval: 10,
      segmentWidth: 100,
      thickness: 20,
      tickAlignment: "RightOrBottom",
    },
    verticalRuler: {
      interval: 10,
      segmentWidth: 100,
      thickness: 20,
      tickAlignment: "RightOrBottom",
    },
  },
  propertyChange: function (e) {
    if (
      e?.oldValue?.shape?.source &&
      e?.oldValue?.shape?.source.startsWith("blob:http") &&
      e?.oldValue?.shape?.source != e?.newValue?.shape?.source
    ) {
      URL.revokeObjectURL(e?.oldValue?.shape?.source);
    }
  },
  collectionChange: function (e) {
    if (
      e.type === "Removal" &&
      e?.element?.properties?.shape?.properties &&
      e?.element?.properties?.shape?.properties?.source?.startsWith("blob:http")
    ) {
      URL.revokeObjectURL(e.element?.properties?.shape?.properties?.source);
    }
  },
  positionChange: positionChange,
  bridgeDirection: "Left",
  contextMenuSettings: {
    show: true,
    items: [
      {
        id: "edit",
        text: "Edit1",
      },
      ...personShapesContext,
      ...groupPeopleContext,
      ...communicationHolder,
    ],
    showCustomMenuOnly: true,
  },
  setNodeTemplate: (obj, diagram) => { },
  contextMenuClick: function (args) {
    //do your custom action here.
    // shape:
    currentItem = args.item.id;
    let idCheck = args.item.id.toLowerCase();
    if (idCheck.includes("picture")) {
      $("#fileUploadToDiagrams").attr("accept", "image/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("video")) {
      $("#fileUploadToDiagrams").attr("accept", "video/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("audio")) {
      $("#fileUploadToDiagrams").attr("accept", "audio/*");
      $("#fileUploadToDiagrams").click();
    }
    if (idCheck.includes("sketch")) {
      sketchContextClick(idCheck);
    }
    if (idCheck.includes("text")) {
      addTextOnClick();
    }
    if (idCheck.includes("communication")) {
      addCommHolderOnClick();
    }

    if (idCheck.includes("principle")) {
      relatePersonOperatingPrinciple();
    }
  },
  contextMenuOpen: function (args) {
    if (diagram.selectedItems.nodes[0]) {
      let bpmnShape = diagram.selectedItems.nodes[0];
      //do your custom action here.
      console.log(bpmnShape.id);
      if (bpmnShape.id.startsWith("addCommunication")) {
        addCommunicationFunction();
      }
      let personChecker = [
        "person",
        "manager",
        "teamLead",
        "customer",
        "client",
        "contractor",
        "other",
        "user",
        "agent",
        "inspector",
        "employee",
      ];
      if (
        bpmnShape.id.includes("Person") ||
        personChecker.some((a) => bpmnShape.id.startsWith(a))
      ) {
        args.hiddenItems = [
          ...groupPeopleContextMapped,
          ...communicationHolderMapped,
        ];
      }

      if (bpmnShape.id.startsWith("groupOfPeople")) {
        args.hiddenItems = [
          ...personShapesContextMapped,
          ...communicationHolderMapped,
        ];
      }
      if (bpmnShape.id.startsWith("communicationHolder")) {
        args.hiddenItems = [
          ...personShapesContextMapped,
          ...groupPeopleContextMapped,
        ];
      }
    } else {
      args.hiddenItems = [
        ...personShapesContextMapped,
        ...groupPeopleContextMapped,
        ...communicationHolderMapped,
      ];
    }
  },
  created: function (args) {
    getModelData();
    openModelPage("main-project-model-comm");
  },
  //Sets the default values of a node
  getNodeDefaults: function (node) {
    var obj = {};
    if (!obj.children) {
      obj.constraints =
        ej.diagrams.NodeConstraints.Default |
        ej.diagrams.NodeConstraints.AllowDrop;
    }

    return obj;
  },
  drop: function (args) {
    idElementActive = args.element.id;
    if (args.element.id.startsWith("groupOfPeople")) {
      onDrogGroupsOfPeopleNode(args);
    }
    if (args.element.id.startsWith("continuityPerson")) {
      onDrogContinuityPerson(args);
    }
    if (args.element.id.startsWith("nodeTableComm")) {
      onDrogNodeTableComm(args);
    }
    // if (args.element.id.startsWith("group")) {
    //   onDrogGroupOrAddEntities(args);
    // }
    if (args.element.id.startsWith("mainArea")) {
      onDrogMainArea();
    }

    dropGrouped(args);
  },
});
diagram.appendTo("#diagram");
const blankDiagram = diagram.saveDiagram();

function addTextOnClick() {
  let findItem = drawShape(otherData.find((a) => a.id === "callOut"));
  let addItem = diagram.add(findItem);
  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  addItem.offsetX = offsetXD + 250;
  addItem.offsetY = offsetYD + 50;
}
let countComm = 0;
function addCommunicationFunction(id, annotations) {
  countComm++;
  if (countComm > 10000) {
    countComm = 1;
  }
  let find = applicationRects.find((a) => a.id === id);
  find.annotation = annotations;
  let findItem = drawShape(find);
  findItem.id = findItem.id + countComm;
  let addItem = diagram.add(findItem);
  addItem.offsetX = addItem.offsetX + 250;
  addItem.offsetY = addItem.offsetY + 150;
}

function addCommHolderOnClick() {
  let findItem = drawShape(
    personData.find((a) => a.id === "communicationHolder")
  );
  let addItem = diagram.add(findItem);
  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  addItem.offsetX = offsetXD + 250;
  addItem.offsetY = offsetYD + 50;
}

function sketchContextClick(idCheck) {
  let findItem = drawShape(
    personData.find((a) => idCheck.includes(a.id.toLowerCase()))
  );
  let offsetXD = diagram.selectedItems.properties.nodes[0].properties.offsetX;
  let offsetYD = diagram.selectedItems.properties.nodes[0].properties.offsetY;
  diagram.remove(diagram.selectedItems.properties.nodes[0]);
  let addItem = diagram.add(findItem);
  addItem.offsetX = offsetXD;
  addItem.offsetY = offsetYD;
}
//#region code for canvas to svg tranformation
let canvasSymbols = document.querySelectorAll(".e-symbol-draggable > canvas");
for (let i = 0; i < canvasSymbols.length; i++) {
  // Get Canvas
  let parent = canvasSymbols[i].parentElement;
  let cWidth = canvasSymbols[i].width;
  let cHeight = canvasSymbols[i].height;
  let ctx = canvasSymbols[i].getContext("2d");
  let cData = ctx.getImageData(
    (6 * cWidth) / 14,
    0,
    (8 * cWidth) / 14,
    cHeight - 55
  );
  ctx.clearRect(0, 0, cWidth, cHeight);
  canvasSymbols[i].setAttribute("height", cHeight - 55);
  canvasSymbols[i].setAttribute("width", (2 * cWidth) / 14);
  ctx.putImageData(cData, 0, 0);

  // Insert title
  let title = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
  title.setAttribute("x", "0");
  title.setAttribute("y", "0");
  title.style.fontWeight = "Bold";
  title.innerHTML = getTitleById(canvasSymbols[i].id);

  // Initializing the SVG element
  let svgAttributes = document.querySelector(
    ".e-symbol-draggable svg"
  ).attributes;
  let svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  for (let j = 0; j < svgAttributes.length; j++) {
    svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
  }
  svgElement.setAttribute("id", canvasSymbols[i].id);
  let groupElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  let nativeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  nativeGroup.setAttribute("transform", "translate(0,0) scale(1,1)");

  // Initializing Text Element for symbol
  let textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
  );
  let textAttributes = document.querySelector(
    ".e-symbol-draggable text"
  ).attributes;
  for (let j = 0; j < textAttributes.length; j++) {
    textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
  }
  textElement.appendChild(title);
  groupElement.appendChild(textElement);
  let shapeGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
  let rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("height", cHeight - 55);
  rect.setAttribute("width", (2 * cWidth) / 14);
  rect.setAttribute("vector-effect", "non-scaling-stroke");
  rect.setAttribute("fill", "transparent");
  rect.setAttribute("stroke-width", "0");
  shapeGroup.appendChild(rect);
  let canvas = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  canvas.setAttribute("height", cHeight - 55);
  canvas.setAttribute("width", cHeight - 55);
  canvas.setAttribute("vector-effect", "non-scaling-stroke");
  parent.removeChild(canvasSymbols[i]);
  canvas.appendChild(canvasSymbols[i]);
  shapeGroup.appendChild(canvas);
  nativeGroup.appendChild(shapeGroup);
  groupElement.appendChild(nativeGroup);
  svgElement.appendChild(groupElement);
  parent.appendChild(svgElement);
}

function getTitleById(id) {
  let shape = allShapes.find((x) => x.id === id);
  if (shape !== undefined) {
    return shape.addInfo[0].title;
  } else {
    return "";
  }
}

function getItemById(id) {
  let shape = allShapes.find((x) => x.id === id);
  if (shape !== undefined) {
    return shape;
  }
}

function getNodesDiagramNodes(data) {
  return data.map((x) => {
    return {
      id: x.properties.id,
      offsetX: x.properties.offsetX,
      offsetY: x.properties.offsetY,
      addInfo: x.properties.addInfo,
      shape: x.properties.shape,
      height: x.properties.height,
      width: x.properties.width,
      annotations: x.properties.annotations,
      style: x.properties.style,
      children: x.properties.id.includes("groupofpeople")
        ? x.properties.id.split("-").filter((x) => x !== "groupofpeople")
        : undefined,
    };
  });
}

function randomId() {
  return (Math.random() + 1).toString(36).substring(7);
}

//#endregion

//#region code for symbol arrangement
var symbolPalleteSymbols = document.querySelectorAll(
  ".e-symbol-draggable > svg"
);
for (let i = 0; i < symbolPalleteSymbols.length; i++) {
  let titleText = symbolPalleteSymbols[i].querySelector(":scope > g > text");
  let toolTip = symbolPalleteSymbols[i].parentElement.getAttribute("title");
  let native_element = symbolPalleteSymbols[i].querySelector(":scope > g > g");

  // Resizing the elements to fit
  let sizeRect = native_element.querySelector("rect");
  let x = parseInt(sizeRect.getAttribute("width"));
  let y = parseInt(sizeRect.getAttribute("height"));
  let ratio = x / y;
  let _x, _y;

  if (x >= y) {
    _x = 55;
    _y = 55 / ratio;
  } else {
    _y = 55;
    _x = 55 * ratio;
  }

  let sx = _x / x;
  let sy = _y / y;

  let tx = -sx * 2 + 2;
  let ty = -sy * 2 + 5;

  let transform = native_element.getAttribute("transform");
  let arr = transform.split(" ");
  transform = "";
  for (let j = 0; j < arr.length; j++) {
    if (!arr[j].includes("translate") && !arr[j].includes("scale")) {
      transform += arr[j] + " ";
    }
  }
  transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
  native_element.setAttribute("transform", transform);

  // Translating Text
  let textSpan = titleText.querySelector("tspan");
  let text = textSpan.innerHTML;
  let foreignElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  foreignElement.setAttribute("x", "70");
  foreignElement.setAttribute("y", "5");
  foreignElement.setAttribute("height", "26px");
  foreignElement.setAttribute("width", "200px");

  let titleDiv = document.createElement("div");
  titleDiv.style.height = "26px";
  titleDiv.style.width = "200px";
  titleDiv.style.fontSize = "12px";
  titleDiv.style.fontWeight = "bold";
  titleDiv.style.lineHeight = "13px";
  titleDiv.innerHTML = text;
  foreignElement.appendChild(titleDiv);

  let toolTipElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "foreignObject"
  );
  toolTipElement.setAttribute("x", "70");
  toolTipElement.setAttribute("y", "35");
  toolTipElement.setAttribute("width", "200px");
  toolTipElement.setAttribute("height", "40px");
  let toolTipDiv = document.createElement("div");
  toolTipDiv.style.height = "40px";
  toolTipDiv.style.width = "200px";
  toolTipDiv.style.fontSize = "12px";
  toolTipDiv.style.lineHeight = "13px";
  toolTipDiv.innerHTML = toolTip;
  toolTipElement.appendChild(toolTipDiv);
  titleText.parentElement.appendChild(foreignElement);
  titleText.parentElement.appendChild(toolTipElement);
  titleText.remove();
}

// Symbol text display
let allText = document.querySelectorAll("#left-section .symbol-text-container");
for (let i = 0; i < allText.length; i++) {
  allText[i].setAttribute("visibility", "visible");
}
//#endregion

//#region code for dragbar
let isLeftDrag = false;
let isRightDrag = false;

function setCursor(cursor) {
  document.getElementById("left-section").style.cursor = cursor;
  document.getElementById("right-section").style.cursor = cursor;
  document.getElementById("middle-section").style.cursor = cursor;
}

function startLeftDrag() {
  isLeftDrag = true;
}

function startRightDrag() {
  isRightDrag = true;
}

function onDrag(e) {
  if (isRightDrag || isLeftDrag) {
    setCursor("ew-resize");
    let container = document.getElementById("container");
    let leftSection = document.getElementById("left-section");
    let rightSection = document.getElementById("right-section");

    let leftWidth = isLeftDrag ? e.clientX : leftSection.offsetWidth;
    let rightWidth = isRightDrag
      ? container.clientWidth - e.clientX
      : rightSection.offsetWidth;
    let cols = [
      leftWidth,
      5,
      container.clientWidth - 10 - leftWidth - rightWidth - 4,
      5,
      rightWidth,
    ];
    let colDef = cols.map((c) => c + "px").join(" ");
    container.style.gridTemplateColumns = colDef;
    e.preventDefault();
  }
}

function endDrag() {
  isLeftDrag = false;
  isRightDrag = false;
  setCursor("auto");
}

function resetColumn() {
  let container = document.getElementById("container");
  container.style.gridTemplateColumns = "1fr 5px 4fr 5px 1fr";
}

const loadDiagram = (data) => {
  const prevTool = diagram.tool;
  diagram.loadDiagram(data);
  diagram.tool = prevTool;
  diagram.dataBind();
};

let confirmDialogObjSub;
function openModal(textHeader, id, functionApply) {
  var confirmDialogObj = new ej.popups.Dialog({
    header: textHeader,
    content: $(id).html(),
    showCloseIcon: true,
    closeOnEscape: false,
    width: "350px",
    allowDragging: true,
    isModal: true,
    animationSettings: { effect: "None" },
    close: function () {
      $("#confirmDialog").html("");
    },
    buttons: [
      {
        click: functionApply,
        buttonModel: { content: "Apply" },
      },
      {
        click: hiddenModal,
        buttonModel: { content: "Cancel" },
      },
    ],
  });
  confirmDialogObj.appendTo("#confirmDialog");
  confirmDialogObjSub = confirmDialogObj;
}

function hiddenModal() {
  confirmDialogObjSub.hide();
}

$("#open-project-btn").on("click", () => {
  Helpers.selectFile(".json").then((file) => {
    if (file) {
      var reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onload = function (event) {
        loadDiagram(event.target.result);
      };
    }
  });
});
$("#save-project-btn").on("click", () => {
  const saveData = diagram.saveDiagram();
  Helpers.downloadFile(saveData);
});
$("#new-project-btn").on("click", () => {
  loadDiagram(blankDiagram);
});
$("#export-png-btn").on("click", () => {
  var node = document.getElementById("diagram_nativeLayer");
  node.classList.add("bg-white");
  htmlToImage.toPng(node).then((data) => {
    console.log(data);
    Helpers.downloadFile(data, "SPL_Export.png");
    node.classList.remove("bg-white");
  });
});
$("#export-jpg-btn").on("click", () => {
  var node = document.getElementById("diagram_diagramLayer_div");
  node.classList.add("bg-white");
  htmlToImage.toJpeg(node).then((data) => {
    Helpers.downloadFile(data, "SPL_Export.jpeg");
    node.classList.remove("bg-white");
  });
});
$("#export-bmp-btn").on("click", () => {
  var node = document.getElementById("diagram_diagramLayer_div");
  node.classList.add("bg-white");
  htmlToImage.toPng(node).then((data) => {
    Helpers.downloadFile(data, "SPL_Export.bmp");
    node.classList.remove("bg-white");
  });
});
$("#export-svg-btn").on("click", () => {
  const options = {
    mode: "Download",
    fileName: "SPL_Export",
    format: "SVG",
  };
  diagram.exportDiagram(options);
});
$("#export-pdf-btn").on("click", () => {
  const doc = new PDFDocument();
  const source = document.getElementById("diagram_diagramLayer_div");
  doc.fromHTML(source, {
    callback(doc) {
      doc.save("SPL_Export.pdf");
    },
  });
});
