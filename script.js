// Input collect function

// For Triangle
function triArea() {
    const triBase = document.getElementById('tri-base');
    const triBaseValue = triBase.value;
    
    const triHeight = document.getElementById('tri-height');
    const triHeightValue = triHeight.value;

    // Formula Area (A) = 0.5 X b X h
    const areaValue = 0.5 * triBaseValue * triHeightValue;
    console.log(areaValue);
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Triangle Area: ${areaValue}`;
    resultContainer.append(result);
    console.log(resultValue);

}
// For Rectangle
function recArea() {
    const recWidth = document.getElementById('rec-width');
    const recWidthValue = recWidth.value;
    
    const recLength = document.getElementById('rec-length');
    const recLengthValue = recLength.value;

    // Formula Area (A) = W X l
    const areaValue = recWidthValue * recLengthValue;
    console.log(areaValue);
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Rectangle Area: ${areaValue}`;
    resultContainer.append(result);
    console.log(resultValue);

}
// For Perallelogram
function peraArea() {
    const peraBase = document.getElementById('pera-base');
    const peraBaseValue = peraBase.value;
    
    const peraHeight = document.getElementById('pera-height');
    const peraHeightValue = peraHeight.value;

    // Formula Area (A) = b X h
    const areaValue = peraBaseValue * peraHeightValue;
    console.log(areaValue);
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Perallelogram Area: ${areaValue}`;
    resultContainer.append(result);
    console.log(resultValue);

}
// For Rhombos
function rhomArea() {
    const rhomD1 = document.getElementById('rhom-d1');
    const rhomD1Value = rhomD1.value;
    
    const rhomD2 = document.getElementById('rhom-d2');
    const rhomD2Value = rhomD2.value;

    // Formula Area (A) = 0.5 X d1 X d2
    const areaValue = 0.5 * rhomD1Value * rhomD2Value;
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Rhombos Area: ${areaValue}`;
    resultContainer.append(result);
}
// For Pentagon
function pentArea() {
    const pentPei = document.getElementById('pent-peri');
    const pentPeriValue = pentPei.value;
    
    const pentApo = document.getElementById('pent-apo');
    const pentApoValue = pentApo.value;

    // Formula Area (A) = 0.5 X perimeter X apothem
    const areaValue = 0.5 * pentPeriValue * pentApoValue;
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Pentagon Area: ${areaValue}`;
    resultContainer.append(result);
}
// For Ellipse
function ellipseArea() {
    const ellipseA = document.getElementById('ellipse-a');
    const ellipseAValue = ellipseA.value;
    
    const ellipseB = document.getElementById('ellipse-b');
    const ellipseBValue = ellipseB.value;

    // Formula Area (A) = 0.5 X perimeter X apothem
    const areaValue = 3.1416 * ellipseAValue * ellipseBValue;
    
    // Show result
    const resultContainer = document.getElementById('result-container');
    const result = document.createElement('li');
    const resultValue = result.innerHTML = `Ellipse Area: ${areaValue}`;
    resultContainer.append(result);
}


