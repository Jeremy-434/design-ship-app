setInterval(() => window.document.form_reloj.reloj.value = new Date().toLocaleTimeString(), 1000);
function validarDatos() {

  event.preventDefault();
  let firstDate = document.getElementById('inputFirstDate').value;
  let endDate = document.getElementById('inputEndDate').value;
  let radioBtnSi = document.getElementById('flexRadioSi');
  let radioChecked = "";

  let firstDateMl = new Date(firstDate);
  let endDateMl = new Date(endDate);

  if (firstDate > endDate) {
    alert("La fecha de inicio debe ser menor que la fecha de fin");
  } else {
    let resta = endDateMl.getTime() - firstDateMl.getTime();
    let dias = 1 + Math.floor(resta / (1000 * 60 * 60 * 24));

    let valorTotal = dias * 75000;
    if (radioBtnSi.checked) {
      valorTotal = valorTotal - (valorTotal * (35 / 100));
      radioChecked = "Si";
    } else {
      radioChecked = "No";
    }
    generarPdf(valorTotal, firstDate, endDate, radioChecked);
  }
}

function generarPdf(valorTotal, firstDate, endDate, radioChecked) {

  event.preventDefault();
  let doocument = document.getElementById('inputDocument').value;
  let name = document.getElementById('inputName').value;
  let lastName = document.getElementById('inputLastName').value;
  let reason = document.getElementById('inputReason').value;
  let colorText = document.getElementById('exampleColorInput').value;
  console.log(colorText);

  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  rgbColorR = hexToRgb(colorText).r;
  rgbColorG = hexToRgb(colorText).g;
  rgbColorB = hexToRgb(colorText).b;

  var doc = new jsPDF();
  doc.setFont('courier');
  doc.setFontType('bolditalic');
  doc.setFontSize(30);
  doc.setTextColor(38, 4, 118);
  doc.text(20, 15, 'FACTURA');
  doc.setTextColor(rgbColorR, rgbColorG, rgbColorB);
  doc.setFontType('');
  doc.setFontSize(8);
  doc.text(20, 30, 'Fecha de la factura: ' + new Date());
  doc.setFontSize(12);
  doc.text(20, 40, 'Documento: ' + doocument);
  doc.text(20, 45, 'Nombre: ' + name);
  doc.text(20, 50, 'Apellido: ' + lastName);
  doc.text(20, 55, 'Motivo: ' + reason);
  doc.text(20, 60, 'Fecha de inicio: ' + firstDate);
  doc.text(20, 65, 'Fecha de fin: ' + endDate);
  doc.text(20, 70, '¿Aplica descuento? ' + radioChecked);
  doc.setTextColor(5, 172, 2);
  doc.setFontSize(14);
  doc.text(120, 80, 'Valor de la factura: ' + valorTotal);
  doc.save('factura-pdf');
}