function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
  </li>  
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
   <div class="card" style="animation-delay: ${delay}s">
        <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("portugal", "13:00", "ghana") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("switzerland", "07:00", "camaroon")
  ) +
  createCard(
    "28/11",
    "segunda",
    createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguay") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("camaroon", "07:00", "serbia")
  ) +
  createCard(
    "02/11",
    "sexta",
    createGame("brazil", "16:00", "camaroon") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay")
  )
