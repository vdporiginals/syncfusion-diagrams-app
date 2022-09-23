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
let allShapes = [].concat(persons).concat(communication).concat(application).concat(commLink).
    concat(analysis).concat(commSignal).concat(area).concat(others).concat(commlabel).concat(system).
    concat(thoery).concat(fundamental).concat(interface).concat(theorySignal).concat(instrument).concat(functions).
    concat(stability).concat(thoerylabel);

allShapes = everyShape;

var text = JSON.stringify(allShapes);

// var a = document.createElement("a");
// var file = new Blob([text], {type: 'text/plain'});
// a.href = URL.createObjectURL(file);
// a.download = 'my.json';
// a.click();

// Initializing symbol palette
var commPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes: [
        { id: 'quickshapes', expanded: false, symbols: quickComm, title: 'Quick Entities' },
        { id: 'person', expanded: true, symbols: persons, title: 'Person' },
        { id: 'Communication', expanded: false, symbols: communication, title: 'Communication' },
        { id: 'Application', expanded: false, symbols: application, title: 'Application' },
        { id: 'CommmunicationLink', expanded: false, symbols: commLink, title: 'Communication Link' },
        { id: 'Analysis', expanded: false, symbols: analysis, title: 'Analysis' },
        { id: 'CommunicationSignal', expanded: false, symbols: commSignal, title: 'Communication Signal' },
        { id: 'AreaandLocation', expanded: false, symbols: area, title: 'Area and Location' },
        { id: 'OtherCommunicationElement', expanded: false, symbols: others, title: 'Other Communication Element' },
        { id: 'CommLabelPalette', expanded: false, symbols: commlabel, title: 'Label' },
    ],
    symbolHeight: 75, symbolWidth: 275,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return {
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});

var theoryPalette = new ej.diagrams.SymbolPalette({
    expandMode: 'Single',
    palettes: [
        { id: 'quickshapestheory', expanded: false, symbols: quickTheory, title: 'Quick Entities' },
        { id: 'system', expanded: true, symbols: system, title: 'System' },
        { id: 'theory', expanded: false, symbols: thoery, title: 'Theory' },
        { id: 'fundamental', expanded: false, symbols: fundamental, title: 'Fundamental' },
        { id: 'interface', expanded: false, symbols: interface, title: 'Interface' },
        { id: 'signal', expanded: false, symbols: theorySignal, title: 'Signal' },
        { id: 'instrument', expanded: false, symbols: instrument, title: 'Instrument' },
        { id: 'functionpallete', expanded: false, symbols: functions, title: 'Function' },
        { id: 'stability', expanded: false, symbols: stability, title: 'Stability' },
        { id: 'label', expanded: false, symbols: thoerylabel, title: 'Label' },
        { id: 'operator', expanded: false, symbols: operatorTheory, title: 'Operator' },
    ],
    symbolHeight: 75, symbolWidth: 300,
    width: '100%', height: '100%',
    enableSearch: true,
    // symbolMargin:{ left: 5, right: 5, top: 12, bottom: 12},
    getSymbolInfo: (symbol) => {
        return {
            fit: true,
            tooltip: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].toolTip : symbol.id,
            description: {
                overflow: 'Wrap',
                text: (symbol.addInfo !== null && symbol.addInfo !== undefined) ? symbol.addInfo[0].title : symbol.id,
                wrap: 'WrapWithOverflow'
            }
        };
    }
});
// Appending symbol palette
commPalette.appendTo('#symbol-palette-comm');
theoryPalette.appendTo('#symbol-palette-theory');

// Function to switch palettes
function switchToTheory() {
    if (currentDomain === 1) {
        return;
    }
    currentDomain = 1;
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'none';
    commModel.style.display = 'none';
    theoryPalette.style.display = 'block';
    theoryModel.style.display = 'block';
    let commButton = document.getElementById('Ribbon_toCommunicationDomain');
    commButton.disabled = false;
    commButton.firstElementChild.classList.remove('disabled-button');

    let theoryButton = document.getElementById('Ribbon_toTheoryDomain');
    theoryButton.disabled = true;
    theoryButton.firstElementChild.classList.add('disabled-button');

    openTheoryTab();
}

function switchToComm() {
    if (currentDomain === 0) {
        return;
    }
    currentDomain = 0;
    let commPalette = document.getElementById('symbol-palette-comm');
    let commModel = document.getElementById('comm-model-list');
    let theoryPalette = document.getElementById('symbol-palette-theory');
    let theoryModel = document.getElementById('theory-model-list');
    commPalette.style.display = 'block';
    commModel.style.display = 'block';
    theoryPalette.style.display = 'none';
    theoryModel.style.display = 'none';
    let commButton = document.getElementById('Ribbon_toCommunicationDomain');
    commButton.disabled = true;
    commButton.firstElementChild.classList.add('disabled-button');

    let theoryButton = document.getElementById('Ribbon_toTheoryDomain');
    theoryButton.disabled = false;
    theoryButton.firstElementChild.classList.remove('disabled-button');
    openCommTab();
}
let main = allShapes.find(a => a.id === 'mainArea');
console.log(main);

function dragOver(args) {
    if (args.target) {
        console.log(args);
    }
}
ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo, ej.diagrams.DiagramContextMenu, ej.diagrams.Snapping);
let currentItem = '';
let nodeAppendData = {
    // Position of the node
    offsetX: 250,
    offsetY: 450,
    // Size of the node
    width: 400,
    height: 400,
    // sets the type of the shape as image
    shape: {
        type: 'Image',
        source: 'http://www.syncfusion.com/content/images/nuget/sync_logo_icon.png'
    },
    //Customizes the appearances such as text, font, fill, and stroke.
    style: {
        fill: 'none'
    }
};
$("#fileUploadToDiagrams").change(function () {
    const file = this.files[0];
    console.log(file, currentItem);
    if (file) {
        let reader = new FileReader();
        if (file.type.startsWith('video/')) {
            if (currentItem.includes('add') || currentItem.startsWith('add')) {
                nodeAppendData.shape = {
                    type: 'HTML',
                    content: `<video width="400" height="278" controls>
                <source src="${URL.createObjectURL(file)}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`
                }
                nodeAppendData.width = 400;
                nodeAppendData.height = 278;
                diagram.add(nodeAppendData);
                $("#fileUploadToDiagrams").val('');
            } else {
                diagram.selectedItems.properties.nodes[0].shape = {
                    type: 'HTML',
                    content: `<video width="400" height="278" controls>
                <source src="${URL.createObjectURL(file)}" id="video_here">
                  Your browser does not support HTML5 video.
              </video>`
                }
                diagram.selectedItems.properties.nodes[0].width = 400;
                diagram.selectedItems.properties.nodes[0].height = 278;
                $("#fileUploadToDiagrams").val('');
            }
        }

        if (file.type.startsWith('audio/')) {
            if (currentItem.includes('add')) {
                nodeAppendData.shape = {
                    content: `<audio controls>
                <source src="${URL.createObjectURL(file)}" type="audio/mpeg">
              Your browser does not support the audio element.
              </audio>`
                }
                nodeAppendData.width = 400;
                nodeAppendData.height = 100;
                diagram.add(nodeAppendData);
                $("#fileUploadToDiagrams").val('');
            } else {
                diagram.selectedItems.properties.nodes[0].shape = {
                    content: `<audio controls>
                    <source src="${URL.createObjectURL(file)}" type="audio/mpeg">
                  Your browser does not support the audio element.
                  </audio>`
                }
                diagram.add(nodeAppendData);
                diagram.selectedItems.properties.nodes[0].width = 400;
                diagram.selectedItems.properties.nodes[0].height = 100;
                $("#fileUploadToDiagrams").val('');
            }
        }
        
        if (file.type.startsWith('image/')) {

            reader.onload = function (event) {
                diagram.selectedItems.properties.nodes[0].shape = {
                    type: 'Image',
                    source: event.target.result
                }
                $('#imgPreview').attr('src', event.target.result);
                $("#fileUploadToDiagrams").val('');
            }
            reader.readAsDataURL(file);
        }
    }
});
let pictureId = ['replaceGroupPeoplePicture', 'replacePersonPicture', 'communicationElementPicture',
    'entityElementPicture',
    'functionstatusElementPicture',
    'loadPicktureFromFile',
    'replaceCommunicationHolderPicture'];
// Initializing and appending diagram
var diagram = new ej.diagrams.Diagram({
    width: '2000px', height: '2000px',
    rulerSettings: {
        showRulers: true,
        horizontalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom" },
        verticalRuler: { interval: 10, segmentWidth: 100, thickness: 20, tickAlignment: "RightOrBottom" }
    },
    bridgeDirection: 'Left',
    contextMenuSettings: {
        show: true,
        items: [{
            id: 'edit',
            text: 'Edit1'
        }, ...personShapesContext, ...groupPeopleContext, ...communicationHolder],
        showCustomMenuOnly: true,
    },
    contextMenuClick: function (args) {
        //do your custom action here.
        // shape: 
        currentItem = args.item.id;
        if (args.item.id.includes('Picture')) {
            $('#fileUploadToDiagrams').attr('accept', 'image/*');
            $('#fileUploadToDiagrams').click();
        }
        if (args.item.id.includes('Video') || args.item.id.includes('video')) {
            $('#fileUploadToDiagrams').attr('accept', 'video/*');
            $('#fileUploadToDiagrams').click();
        }
        if (args.item.id.includes('Audio')) {
            $('#fileUploadToDiagrams').attr('accept', 'audio/*');
            $('#fileUploadToDiagrams').click();
        }
        console.log(diagram.selectedItems.properties.nodes[0].shape, diagram.selectedItems, args.item.id)
    },
    contextMenuOpen: function (args) {
        if (diagram.selectedItems.nodes[0]) {
            let bpmnShape = diagram.selectedItems.nodes[0];
            //do your custom action here.
            console.log(bpmnShape.id);
            let personChecker = ['person', 'manager',
                'teamLead',
                'customer',
                'client',
                'contractor',
                'other',
                'user',
                'agent',
                'inspector',
                'employee'];
            if (bpmnShape.id.includes('Person') || personChecker.some(a => bpmnShape.id.startsWith(a))) {
                args.hiddenItems = [...groupPeopleContextMapped, ...communicationHolderMapped];
            }

            if (bpmnShape.id.startsWith('groupOfPeople')) {
                args.hiddenItems = [...personShapesContextMapped, ...communicationHolderMapped];
            }

            if (bpmnShape.id.startsWith('communicationHolder')) {
                args.hiddenItems = [...personShapesContextMapped, ...groupPeopleContextMapped];
            }
        } else {
            args.hiddenItems = [...personShapesContextMapped, ...groupPeopleContextMapped, ...communicationHolderMapped];
        }
        // onOpenContextMenu(args);
    },
    created: function (args) {
        getModelData();
        openModelPage('main-project-model-comm');
    }
});
diagram.appendTo('#diagram');
const blankDiagram = diagram.saveDiagram();


//#region code for canvas to svg tranformation
let canvasSymbols = document.querySelectorAll('.e-symbol-draggable > canvas');
for (let i = 0; i < canvasSymbols.length; i++) {

    // Get Canvas
    let parent = canvasSymbols[i].parentElement;
    let cWidth = canvasSymbols[i].width;
    let cHeight = canvasSymbols[i].height;
    let ctx = canvasSymbols[i].getContext('2d');
    let cData = ctx.getImageData(6 * cWidth / 14, 0, 8 * cWidth / 14, cHeight - 55);
    ctx.clearRect(0, 0, cWidth, cHeight);
    canvasSymbols[i].setAttribute('height', cHeight - 55);
    canvasSymbols[i].setAttribute('width', 2 * cWidth / 14);
    ctx.putImageData(cData, 0, 0);

    // Insert title
    let title = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    title.setAttribute('x', '0');
    title.setAttribute('y', '0');
    title.style.fontWeight = 'Bold';
    title.innerHTML = getTitleById(canvasSymbols[i].id);

    // Initializing the SVG element
    let svgAttributes = document.querySelector('.e-symbol-draggable svg').attributes;
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    for (let j = 0; j < svgAttributes.length; j++) {
        svgElement.setAttribute(svgAttributes[j].name, svgAttributes[j].value);
    }
    svgElement.setAttribute('id', canvasSymbols[i].id);
    let groupElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let nativeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    nativeGroup.setAttribute('transform', 'translate(0,0) scale(1,1)');

    // Initializing Text Element for symbol
    let textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    let textAttributes = document.querySelector('.e-symbol-draggable text').attributes;
    for (let j = 0; j < textAttributes.length; j++) {
        textElement.setAttribute(textAttributes[j].name, textAttributes[j].value);
    }
    textElement.appendChild(title);
    groupElement.appendChild(textElement);
    let shapeGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('height', cHeight - 55);
    rect.setAttribute('width', 2 * cWidth / 14);
    rect.setAttribute('vector-effect', 'non-scaling-stroke');
    rect.setAttribute('fill', 'transparent');
    rect.setAttribute('stroke-width', '0');
    shapeGroup.appendChild(rect);
    let canvas = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    canvas.setAttribute('height', cHeight - 55);
    canvas.setAttribute('width', cHeight - 55);
    canvas.setAttribute('vector-effect', 'non-scaling-stroke');
    parent.removeChild(canvasSymbols[i]);
    canvas.appendChild(canvasSymbols[i]);
    shapeGroup.appendChild(canvas);
    nativeGroup.appendChild(shapeGroup);
    groupElement.appendChild(nativeGroup);
    svgElement.appendChild(groupElement);
    parent.appendChild(svgElement);
}

function getTitleById(id) {
    let shape = allShapes.find(x => x.id === id);
    if (shape !== undefined) {
        return shape.addInfo[0].title;
    }
    else {
        return '';
    }
}
//#endregion

//#region code for symbol arrangement
var symbolPalleteSymbols = document.querySelectorAll('.e-symbol-draggable > svg');
for (let i = 0; i < symbolPalleteSymbols.length; i++) {
    let titleText = symbolPalleteSymbols[i].querySelector(':scope > g > text');
    let toolTip = symbolPalleteSymbols[i].parentElement.getAttribute('title');
    let native_element = symbolPalleteSymbols[i].querySelector(':scope > g > g');

    // Resizing the elements to fit
    let sizeRect = native_element.querySelector('rect');
    let x = parseInt(sizeRect.getAttribute('width'));
    let y = parseInt(sizeRect.getAttribute('height'));
    let ratio = x / y;
    let _x, _y;

    if (x >= y) {
        _x = 55;
        _y = 55 / ratio;
    }

    else {
        _y = 55;
        _x = 55 * ratio;
    }

    let sx = _x / x;
    let sy = _y / y;

    let tx = -sx * 2 + 2;
    let ty = -sy * 2 + 5;

    let transform = native_element.getAttribute('transform');
    let arr = transform.split(' ');
    transform = '';
    for (let j = 0; j < arr.length; j++) {
        if (!arr[j].includes('translate') && !arr[j].includes('scale')) {
            transform += arr[j] + ' ';
        }
    }
    transform += `translate(${tx}, ${ty}) scale(${sx}, ${sy})`;
    native_element.setAttribute('transform', transform);

    // Translating Text
    let textSpan = titleText.querySelector('tspan');
    let text = textSpan.innerHTML;
    let foreignElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignElement.setAttribute('x', '70');
    foreignElement.setAttribute('y', '5');
    foreignElement.setAttribute('height', '26px');
    foreignElement.setAttribute('width', '200px');

    let titleDiv = document.createElement('div');
    titleDiv.style.height = '26px';
    titleDiv.style.width = '200px';
    titleDiv.style.fontSize = '12px';
    titleDiv.style.fontWeight = 'bold';
    titleDiv.style.lineHeight = '13px';
    titleDiv.innerHTML = text;
    foreignElement.appendChild(titleDiv);

    let toolTipElement = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    toolTipElement.setAttribute('x', '70');
    toolTipElement.setAttribute('y', '35');
    toolTipElement.setAttribute('width', '200px')
    toolTipElement.setAttribute('height', '40px')
    let toolTipDiv = document.createElement('div');
    toolTipDiv.style.height = '40px';
    toolTipDiv.style.width = '200px';
    toolTipDiv.style.fontSize = '12px';
    toolTipDiv.style.lineHeight = '13px';
    toolTipDiv.innerHTML = toolTip;
    toolTipElement.appendChild(toolTipDiv);
    titleText.parentElement.appendChild(foreignElement);
    titleText.parentElement.appendChild(toolTipElement);
    titleText.remove();
}

// Symbol text display
let allText = document.querySelectorAll('#left-section .symbol-text-container');
for (let i = 0; i < allText.length; i++) {
    allText[i].setAttribute('visibility', 'visible');
}
//#endregion

//#region code for dragbar
let isLeftDrag = false;
let isRightDrag = false;

function setCursor(cursor) {
    document.getElementById('left-section').style.cursor = cursor;
    document.getElementById('right-section').style.cursor = cursor;
    document.getElementById('middle-section').style.cursor = cursor;
}
function startLeftDrag() {
    isLeftDrag = true;
}

function startRightDrag() {
    isRightDrag = true;
}

function onDrag(e) {
    if (isRightDrag || isLeftDrag) {
        setCursor('ew-resize');
        let container = document.getElementById('container');
        let leftSection = document.getElementById('left-section');
        let rightSection = document.getElementById('right-section');

        let leftWidth = isLeftDrag ? e.clientX : leftSection.offsetWidth;
        let rightWidth = isRightDrag ? container.clientWidth - e.clientX : rightSection.offsetWidth;
        let cols = [
            leftWidth,
            5,
            container.clientWidth - 10 - leftWidth - rightWidth - 4,
            5,
            rightWidth
        ];
        let colDef = cols.map(c => c + "px").join(" ");
        container.style.gridTemplateColumns = colDef;
        e.preventDefault();
    }
}

function endDrag() {
    isLeftDrag = false;
    isRightDrag = false;
    setCursor('auto');
}

function resetColumn() {
    let container = document.getElementById('container');
    container.style.gridTemplateColumns = '1fr 5px 4fr 5px 1fr';
}
//#endregion


const loadDiagram = (data) => {
    const prevTool = diagram.tool
    diagram.loadDiagram(data)
    diagram.tool = prevTool;
    diagram.dataBind();
}

$('#open-project-btn').on('click', () => {
    Helpers.selectFile('.json').then((file) => {
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            console.log(file);
            reader.onload = function (event) {
                loadDiagram(event.target.result)
            }
        }
    })
})
$('#save-project-btn').on('click', () => {
    const saveData = diagram.saveDiagram();
    Helpers.downloadFile(saveData)
})
$('#new-project-btn').on('click', () => {
    loadDiagram(blankDiagram)
})
$('#export-png-btn').on('click', () => {
    var node = document.getElementById('diagram_nativeLayer');
    node.classList.add('bg-white')
    htmlToImage.toPng(node).then((data) => {
        console.log(data);
        Helpers.downloadFile(data, 'SPL_Export.png')
        node.classList.remove('bg-white')
    })
})
$('#export-jpg-btn').on('click', () => {
    var node = document.getElementById('diagram_diagramLayer_div');
    node.classList.add('bg-white')
    htmlToImage.toJpeg(node).then((data) => {
        Helpers.downloadFile(data, 'SPL_Export.jpeg')
        node.classList.remove('bg-white')
    })
})
$('#export-bmp-btn').on('click', () => {
    var node = document.getElementById('diagram_diagramLayer_div');
    node.classList.add('bg-white')
    htmlToImage.toPng(node).then((data) => {
        Helpers.downloadFile(data, 'SPL_Export.bmp')
        node.classList.remove('bg-white')
    })
})
$('#export-svg-btn').on('click', () => {
    const options = {
        mode: 'Download',
        fileName: 'SPL_Export',
        format: 'SVG',
    }
    diagram.exportDiagram(options);
})
$('#export-pdf-btn').on('click', () => {
    console.log(diagram);
    const doc = new PDFDocument();
    const source = document.getElementById("diagram_diagramLayer_div");
    // doc.fromHTML(source, 10, 10, {'width': 180});
    // doc.autoPrint();
    // doc.output("dataurlnewwindow");

    doc.fromHTML(source, {
        callback(doc) {
            doc.save("SPL_Export.pdf");
        }
    });
})