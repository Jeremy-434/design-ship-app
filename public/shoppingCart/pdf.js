// setInterval(() => window.document.form_reloj.reloj.value = new Date().toLocaleTimeString(), 1000);

// console.log(" hOALASDAS" + obtenerProductos);
const fetchApi = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/productos')
    // console.log(res);
    const data = res.json();
    // console.log(data);
    let valorTotal = 0;
    // await data.forEach(product => {
    //   let price = product.precio;
    //   valorTotal += parseInt(price);
    // });
    return { data, valorTotal };
  } catch (error) {
    console.log(error);
  }
}

fetchApi();

// totalPrice.innerHTML = valorTotal;
let generateInvoice = document.querySelector('#generateInvoice');
let colorText = document.getElementById('exampleColorInput');
generateInvoice.addEventListener('click', () => {
  // ver la data de la funcion fetchApi
  console.log(fetchApi());

  let colorIncoice = colorText.value;
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  rgbColorR = hexToRgb(colorIncoice).r;
  rgbColorG = hexToRgb(colorIncoice).g;
  rgbColorB = hexToRgb(colorIncoice).b;

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
  doc.setFontSize(16);
  doc.text(20, 40, 'PRODUCTOS:');
  // data.forEach(product => {
  //   doc.setFontSize(12);
  //   doc.text(20, 40, 'Name: ' + product.name);
  //   doc.text(20, 45, 'Email: ' + product.email);
  // });
  doc.setFontSize(12);
  doc.text(20, 40, 'Name: ');
  doc.text(20, 45, 'Email: ');
  doc.setTextColor(5, 172, 2);
  doc.setFontSize(14);
  doc.text(120, 80, 'Valor de la factura: ' );
  doc.save('factura-pdf');
});