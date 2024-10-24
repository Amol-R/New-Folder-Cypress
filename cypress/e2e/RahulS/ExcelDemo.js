const ExcelJs = require('exceljs')

const workbook = new ExcelJs.Workbook()

workbook.xlsx.readFile('/Users/DELL/Desktop/TestData.xlsx').then(function(){

    const worksheet = workbook.getWorksheet('Sheet2')

    worksheet.eachRow((row, rowNumber) =>{
        row.eachCell((cell,colNum)=>{
            console.log(cell.value)
        })
    
    })

})

