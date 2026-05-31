import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

  apiKey: "AIzaSyCZ-2wwPQ9AQ9CkF6XEqHNHRLWAATzP2js",
  authDomain: "cctv-price-system.firebaseapp.com",
  projectId: "cctv-price-system",
  storageBucket: "cctv-price-system.firebasestorage.app",
  messagingSenderId: "628180371498",
  appId: "1:628180371498:web:b33ce80a756a0e2bf0db53"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const table = document.getElementById("cctvTable");
const dvrTable =
  document.getElementById("dvrTable");

const searchInput =
  document.getElementById("searchInput");

  let allData = [];
async function loadData() {

  const querySnapshot =
    await getDocs(collection(db, "cctv"));

  allData = [];
    table.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const item = doc.data();
    allData.push(item);

    table.innerHTML += `

      <tr class="border-b">

        <td class="p-3">
          ${item.seri}
        </td>

        <td class="p-3">
          ${item.jenis}
        </td>

        <td class="p-3">
          ${item.resolusi}
        </td>

        <td class="p-3">
          Rp ${Number(item.harga)
            .toLocaleString("id-ID")}
        </td>

      </tr>

    `;

  });

}

loadData();
searchInput.addEventListener("input", () => {

  const keyword =
    searchInput.value.toLowerCase();

  table.innerHTML = "";

  const filtered =
    allData.filter(item =>
      item.seri.toLowerCase()
      .includes(keyword)
    );

  filtered.forEach(item => {

    table.innerHTML += `

      <tr class="border-b">

        <td class="p-3">
          ${item.seri}
        </td>

        <td class="p-3">
          ${item.jenis}
        </td>

        <td class="p-3">
          ${item.resolusi}
        </td>

        <td class="p-3">
          Rp ${Number(item.harga)
            .toLocaleString("id-ID")}
        </td>

      </tr>

    `;

  });

});
async function loadDVR() {

  const querySnapshot =
    await getDocs(collection(db, "dvr"));

  dvrTable.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const item = doc.data();

    dvrTable.innerHTML += `

      <tr class="border-b">

        <td class="p-3">
          ${item.seri}
        </td>

        <td class="p-3">
          ${item.channel}
        </td>

        <td class="p-3">
          ${item.support_mp}
        </td>

        <td class="p-3">
          Rp ${Number(item.harga)
            .toLocaleString("id-ID")}
        </td>

      </tr>

    `;

  });

}

loadDVR();
window.showCCTV = function() {

  document.getElementById("cctvSection")
    .classList.remove("hidden");

  document.getElementById("dvrSection")
    .classList.add("hidden");

}

window.showDVR = function() {

  document.getElementById("cctvSection")
    .classList.add("hidden");

  document.getElementById("dvrSection")
    .classList.remove("hidden");

}