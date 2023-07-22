
$(document).ready(function(){
			$("#testimonial-slider").owlCarousel({
				items:1,
				itemsDesktop:[1000,1],
				itemsDesktopSmall:[979,1],
				itemsTablet:[768,1],
				pagination: true,
				autoPlay:false
			});
		});	


/* COPIAR TEXTO, GENERAR PDF, GENERAR WORD*/

// Obtener referencia al botón "Copy Text"
/* const copyButton = document.getElementById("copyButton");
const pdfButton = document.getElementById("pdfButton");
const wordButton = document.getElementById("wordButton");

copyButton.addEventListener("click", () => {
  const salidaTextoAi = document.getElementById("salida_texto_ai");
  salidaTextoAi.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  alert("Texto copiado al portapapeles.");
});

document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copyButton");
  const salidaTextoAi = document.getElementById("salida_texto_ai");

  copyButton.addEventListener("click", () => {
    salidaTextoAi.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("Texto copiado al portapapeles.");
  });
});

pdfButton.addEventListener("click", () => {
	const salidaTextoAi = document.getElementById("salida_texto_ai").value;
	pdfButton.addEventListener("click", () => {
		const salidaTextoAi = document.getElementById("salida_texto_ai").value;

		// Crear un nuevo objeto jsPDF
		const doc = new jsPDF();

		// Agregar el contenido al documento
		doc.text(salidaTextoAi, 10, 10);

		// Descargar el archivo PDF
		doc.save("documento.pdf");
	});
	// Lógica para generar el PDF a partir del contenido de salidaTextoAi
	// Puedes utilizar una biblioteca como jsPDF o generar una petición al servidor para generar el PDF
	// Aquí solo se muestra un mensaje de ejemplo
	alert("PDF generated.");
});



wordButton.addEventListener("click", () => {
	const salidaTextoAi = document.getElementById("salida_texto_ai").value;
	// Lógica para generar el documento de Word a partir del contenido de salidaTextoAi
	// Puedes utilizar una biblioteca como docxtemplater o generar una petición al servidor para generar el documento
	wordButton.addEventListener("click", () => {
		const salidaTextoAi = document.getElementById("salida_texto_ai").value;

		// Plantilla del documento de Word
		const template = `
    <html>
      <head>
        <meta charset="UTF-8">
      </head>
      <body>
        <p>{{contenido}}</p>
      </body>
    </html>
  `;

		// Crear un nuevo documento de Word a partir de la plantilla
		const doc = new window.docxtemplater();
		doc.loadFromString(template);

		// Asignar los datos al documento
		doc.setData({
			contenido: salidaTextoAi
		});

		// Generar el documento
		doc.render();

		// Descargar el archivo Word
		const out = doc.getZip().generate({ type: "blob" });
		saveAs(out, "documento.docx");
	});
	// Aquí solo se muestra un mensaje de ejemplo
	alert("Word document generated.");
});  */

/* FIN IMPRESION DE DOCUMENTOS */

