const container = document.querySelector(".container");

function generateCells(width, height) {

    let columnID = 0;
    for(let i = 0; i < height; i++){
        let rowID = 0;
        let column = document.createElement('div');
        column.classList.add('column');
        column.setAttribute('data-id', columnID++)
        container.appendChild(column);
        for(let j = 0; j < width; j++){
            let row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('data-id', rowID++)
            column.appendChild(row)
        }
    }
}

function highlightRandonCell(columnArray, rowArray) {

    let randomColumn = Math.floor(Math.random() * columnArray.length)
    columnArray.forEach( (column, id) => {
        if(id === randomColumn){
            let randomRow = Math.floor(Math.random() * rowArray.length)
            rowArray.forEach( (row, id) => {
                if(id === randomRow){
                    console.log(row)
                    row.classList.add('rowActive')
                }
            })
        }
    })

}

function getCells() {

    let columnArray = [...document.querySelectorAll('.column')];
    let rowArray = [...document.querySelectorAll('.row')];
    highlightRandonCell(columnArray, rowArray);
}


document.addEventListener('DOMContentLoaded', () => {

    generateCells(10, 10);
    getCells();
})