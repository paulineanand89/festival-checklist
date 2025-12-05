// Makes the checklist appear when you pick a festival
function generateChecklist() {
  const festival = document.getElementById("festivalSelect").value;
  const checklist = document.getElementById("checklist");
  checklist.innerHTML = "";

  let items = [];
  switch(festival) {
    case "christmas":
      items = ["Decorate tree", "Buy gifts", "Prepare dinner", "Hang stockings"];
      break;
    case "newyear":
      items = ["Plan party", "Buy fireworks", "Make resolutions", "Prepare snacks"];
      break;
    case "pongal":
      items = ["Buy sugarcane", "Prepare Pongal dish", "Decorate with kolam", "Wear traditional clothes"];
      break;
    case "diwali":
      items = ["Clean house", "Buy diyas & candles", "Prepare sweets", "Decorate with rangoli"];
      break;
    case "eid":
      items = ["Buy new clothes", "Prepare biryani & sweets", "Give zakat", "Visit family"];
      break;
    case "halloween":
      items = ["Carve pumpkins", "Buy costumes", "Stock candy", "Decorate house"];
      break;
    default:
      items = ["Please select a festival."];
  }

  // Show each item and add helpful shopping links
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `${item}
      <a href="https://www.amazon.in/s?k=${encodeURIComponent(item)}" target="_blank">(Amazon)</a>
      <a href="https://www.flipkart.com/search?q=${encodeURIComponent(item)}" target="_blank">(Flipkart)</a>`;
    checklist.appendChild(li);
  });
}

// Makes a PDF file you can download
function downloadChecklist() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const checklistItems = document.querySelectorAll("#checklist li");
  let y = 20;
  doc.setFontSize(16);
  doc.text("Festival Checklist", 20, 10);

  checklistItems.forEach(li => {
    // Remove the link words so the PDF is clean
    const text = li.textContent.replace("(Amazon)", "").replace("(Flipkart)", "").trim();
    doc.setFontSize(12);
    doc.text("- " + text, 20, y);
    y += 10;
  });

  doc.save("festival-checklist.pdf");
}
