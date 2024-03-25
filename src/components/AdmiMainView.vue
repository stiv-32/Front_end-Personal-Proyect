<script setup>
import { ref } from 'vue'
const API_URL_RECRUITERS = "http://localhost:8080/api/v1/players";
const API_URL_PLAYERS = "http://localhost:8080/api/v1/recruiters";

// Función para cargar opciones de player en el formulario de reclutadores
function cargarOpcionesPlayers() {
  fetch(API_URL_PLAYERS)
    .then((response) => response.json())
    .then((data) => {
      const selectPlayer = document.getElementById("recruiterPlayer");
      selectPlayer.innerHTML = "";
      data.forEach((player) => {
        const option = document.createElement("option");
        option.value = player.idPlayer;
        option.textContent = `${player.name} - ${player.age} - ${player.typesport} - ${player.position}`;
        selectPlayer.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error al obtener la lista de players:", error);
    });
}

// Función para obtener la lista de reclutadores desde la API
function obtenerRecruiters() {
  fetch(API_URL_RECRUITERS)
    .then((response) => response.json())
    .then((data) => {
      const listaRecruiters = document.getElementById("listaRecruiters");
      listaRecruiters.innerHTML = "";
      data.forEach((recruiter) => {
        const cardRecruiter = `
                    <div class="card mb-2">
                        <div class="card-header">${recruiter.name}</div>
                        <div class="card-body">
                            <p>Country: ${recruiter.country}</p>
                            <p>City: ${recruiter.city}</p>
                            <p>PhoneNumber: ${recruiter.phonenumber}</p>
                            <p>Email: ${recruiter.email}</p>
                            <p>Player Reclutado: ${
                              recruiter.player
                                ? recruiter.player.nombre
                                : "Sin asignar"
                            }</p>
                        </div>
                    </div>
                `;
        listaRecruiters.innerHTML += cardRecruiter;
      });
    })
    .catch((error) => {
      console.error("Error al obtener la lista de Recruiters:", error);
    });
}

// Función para obtener la lista de jugadores disponibles desde la API
function obtenerPlayers() {
  fetch(API_URL_PLAYERS)
    .then((response) => response.json())
    .then((data) => {
      playersDisponibles = data; // Almacenar los jugadores disponibles
      const listaPlayers = document.getElementById("listaPlayers");
      listaPlayers.innerHTML = "";
      data.forEach((player) => {
        const cardPlayer = `
                    <div class="card mb-2" id="player-${player.idPlayer}">
                        <div class="card-header">${player.name}</div>
                        <div class="card-body">
                            <p>Age: ${player.age}</p>
                            <p>TypeSport: ${player.typesport}</p>
                            <p>Position: ${player.position}</p>
                        </div>
                    </div>
                `;
        listaPlayers.innerHTML += cardPlayer;
      });
      cargarOpcionesPlayers(); // Actualizar opciones de jugadores en el formulario de reclutadores
    })
    .catch((error) => {
      console.error("Error al obtener la lista de players:", error);
    });
}

// Función para crear un nuevo reclutador
function crearRecruiter(event) {
  event.preventDefault();
  const recruiterData = {
    name: document.getElementById("recruiterName").value,
    country: document.getElementById("recruiterCountry").value,
    city: document.getElementById("recruiterCity").value,
    phonenumber: document.getElementById("recruiterphoneNumber").value,
    email: document.getElementById("recruiterEmail").value,
    player: {
      idPlayer: document.getElementById("recruiterPlayer").value,
    },
  };

  fetch(API_URL_RECRUITERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recruiterDataData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Recruiter creado:", data);
      document.getElementById("formRecruiter").reset();
      obtenerRecruiters();
    })
    .catch((error) => {
      console.error("Error al crear el recruiter:", error);
    });
}

// Función para crear un nuevo jugador
function crearPlayer(event) {
  event.preventDefault();
  const playerData = {
    name: document.getElementById("playerName").value,
    age: document.getElementById("playerAge").value,
    valor: document.getElementById("playertypeSport").value,
    position: document.getElementById("playerPosition").value,
  };

  fetch(API_URL_PLAYERS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Player creado:", data);
      document.getElementById("formCarro").reset();
      obtenerPlayers(); // Actualizar la lista de jugadores disponibles
    })
    .catch((error) => {
      console.error("Error al crear el player:", error);
    });
}

// Cargar opciones de juagdor al cargar la página
cargarOpcionesPlayers();

// Obtener la lista inicial de reclutadores y jugadores al cargar la página
obtenerRecruiters();
obtenerPlayers();

// Asignar manejadores de eventos a los formularios
document.getElementById("formRecruiter").addEventListener("submit", crearRecruiter);
document.getElementById("formPlayer").addEventListener("submit", crearPlayer);

</script>

<template>
    <article>
        <div class="container">
            <div class="columna">
                <!-- Formulario para agregar recruiter -->
                <div class="card">
                    <div class="card-header">
                        Agregar Recruiter
                    </div>
                    <div class="card-body">
                        <form id="formRecruiter">
                            <div class="form-group p-2 ">
                                <input type="text" class="form-control" id="recruiterName" placeholder="Name">
                            </div>
                            <div class="form-group  p-2 ">
                                <input type="text" class="form-control" id="recruiterCountry" placeholder="Country">
                            </div>
                            <div class="form-group  p-2 ">
                                <input type="text" class="form-control" id="recruiterCity" placeholder="City">
                            </div>
                            <div class="form-group  p-2 ">
                                <input type="text" class="form-control" id="recruiterPhoneNumber" placeholder="Number">
                            </div>
                            <div class="form-group  p-2 ">
                                <input type="text" class="form-control" id="recruiterEmail" placeholder="Email">
                            </div>
                            <div class="form-group p-2">
                                <select class="form-control" id="clienteCarro">
                                    <!-- Aquí se cargarán las opciones de players -->
                                </select>
                            </div>
                            <button type="submit" class="btn btn-warning p-3<!--  -->">Agregar Recruiter</button>
                        </form>
                    </div>
                </div>

                <!-- Formulario para agregar player -->
                <div class="card">
                    <div class="card-header">
                        Agregar PLayer
                    </div>
                    <div class="card-body">
                        <form id="form Player">
                            <div class="form-group p-2">
                                <input type="text" class="form-control" id="playerName" placeholder="Name">
                            </div>
                            <div class="form-group p-2">
                                <input type="text" class="form-control" id="playerAge" placeholder="Age">
                            </div>
                            <div class="form-group p-2">
                                <input type="text" class="form-control" id="playerTypeSport" placeholder="Sport">
                            </div>
                            <div class="form-group p-2">
                                <input type="text" class="form-control" id="playerPosition" placeholder="Position">
                            </div>
                            <button type="submit" class="btn btn-dark p-3">Agregar Player</button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="columna">
                <!-- Lista de clientes con carros -->
                <div class="card">
                    <div class="card-header">
                        Lista de recruiters con Players Reclutados
                    </div>
                    <div class="card-body" id="listaRecruiters">
                        <!-- Aquí se cargarán los recruiters y los players que reclutaron -->
                    </div>
                </div>

                <!-- Lista de carros disponibles -->
                <div class="card">
                    <div class="card-header">
                        Lista de Players Disponibles
                    </div>
                    <div class="card-body" id="listaPlayers">
                        <!-- Aquí se cargarán los players disponibles -->
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
}

.columna {
    width: 45%;
}

.columna .card {
    margin-bottom: 20px;
}
</style>