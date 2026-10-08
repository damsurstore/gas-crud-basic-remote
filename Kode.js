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

//fungsi doGet digunakan sebagai entry-point atau yang pertama kali akan dijalankan ketika aplikasi diload
function doGet(){
  //cara 1: melakukan hardcode kode html
  //return HtmlService.createHtmlOutput('<h1>Hello World!</h1>')
  //cara 2: menggunakan file html terpisah
  return HtmlService.createHtmlOutputFromFile('halamanUtama').evaluate;
}

function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}