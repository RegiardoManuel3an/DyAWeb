const tableBody = document.querySelector("#tablaResults tbody");

    function clearTable() {
      tableBody.innerHTML = "";
    }

    document.addEventListener("DOMContentLoaded", () => {
        const logo = document.getElementById("HeaderLogo");
        if (logo) {
            logo.style.cursor = "pointer";
            logo.addEventListener("click", clearTable);
        }
    });

    function addCharacterRow(char) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${char.name}</td>
        <td>${char.status}</td>
        <td>${char.gender}</td>
        <td>${char.species}</td>
        <td>${char.type}</td>
        <td><img src="${char.image}" alt="${char.name}" height="50"></td>
      `;
      tableBody.appendChild(row);
    }

    async function fetchCharacters(url) {
      clearTable();
  
        try {
            while (url) {
              const response = await fetch(url);
              if (!response.ok) throw new Error("Error recuperando personajes");

              const data = await response.json();
              data.results.forEach(addCharacterRow);

              url = data.info.next;
            }
        } catch (error) {
            alert("Error: " + error.message);
            }
    }

    function cargarTodos() {
      fetchCharacters("https://rickandmortyapi.com/api/character");
    }

    function buscarPersonajes() {
      const name = document.getElementById("nombreFilter").value;
      const status = document.getElementById("estadoFilter").value;
      const gender = document.getElementById("generoFilter").value;
      const species = document.getElementById("especieFilter").value;
      const type = document.getElementById("tipoFilter").value;

      let url = "https://rickandmortyapi.com/api/character/?";
      if (name) url += `name=${encodeURIComponent(name)}&`;
      if (status) url += `status=${status}&`;
      if (gender) url += `gender=${gender}&`;
      if (species) url += `species=${encodeURIComponent(species)}&`;
      if (type) url += `type=${encodeURIComponent(type)}`;

      fetchCharacters(url);
    }