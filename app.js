const dataCCTV = [
  {
    seri: "DH-HAC-T1A21P",
    jenis: "Indoor",
    resolusi: "2MP",
    harga: "250000"
  },

  {
    seri: "DH-HAC-HFW1209TP",
    jenis: "Outdoor",
    resolusi: "2MP",
    harga: "340000"
  }
];

const table = document.getElementById("cctvTable");

dataCCTV.forEach(item => {

  table.innerHTML += `
  
    <tr class="border-b">
      <td class="p-3">${item.seri}</td>
      <td class="p-3">${item.jenis}</td>
      <td class="p-3">${item.resolusi}</td>
      <td class="p-3">
        Rp ${Number(item.harga).toLocaleString("id-ID")}
      </td>
    </tr>
  
  `;
});