const calculatorContainer = document.getElementById('Calculator_container')
const displayArea = document.getElementById('display-area')

calculatorContainer.addEventListener('click',e => {
    if (e.target.nodeName == 'BUTTON'){
        switch (e.target.textContent){
            case 'C':
                clear();
                break;
            case 'DEL':
                deleteOnValue();
                break;
            case '=':
                evaluate();
                break;
            default:
                addTodisplayArea(e.target.textContent)
        }
    }
})
function clear(){
    displayArea.textContent = '';
}

function addTodisplayArea(value){
    displayArea.textContent += value;
}
function deleteOnValue(){
    let currentcontent = displayArea.textContent;
    displayArea.textContent = currentcontent.substring(0,currentcontent.length-1);
}

function evaluate(){
    try{
        // مكتبة جاهزة لل function
        let calculation = math.evaluate(displayArea.textContent);
        displayArea.textContent = calculation;
    } catch(error){
        displayArea.textContent="Invalid Calculation"
        console.error(error);
    }
}