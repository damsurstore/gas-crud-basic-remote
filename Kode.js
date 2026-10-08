function yourFunction(){
Logger.log('Hello world');
}

//baca data dari sheet
function bacaData(){
  let sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  let data = sheet.getDataRange().getValues();

  // hapus data/baris pertama (header/index ke-0)
  for (let i=1; i < data.length; i++){
    let productName = data[i][0] // kolom ke-1
    let satuan = data[i][1] // kolom ke-2    
    let harga = data[i][2] // kolom ke-3
    Logger.log(productName + ' ' + harga);

  }
  

}