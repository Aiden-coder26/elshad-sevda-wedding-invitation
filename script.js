const weddingDate = new Date("2026-10-25T18:00:00+04:00");

function updateCountdown() {
  const now = new Date();
  const remaining = weddingDate - now;

  if (remaining <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

const form = document.getElementById("rsvpForm");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements.name.value.trim();
    const attendance = form.elements.attendance.value;
    const guests = form.elements.guests.value;

    const button = form.querySelector("button[type='submit']");
    button.disabled = true;
    button.textContent = "RSVP Sent";
    button.style.opacity = "0.9";

    const message =
      attendance === "accepts"
        ? `Thank you, ${name}! We are delighted to celebrate with you and ${guests} guest(s).`
        : `Thank you, ${name}. We appreciate your response and hope to celebrate together another time.`;

    const note = document.createElement("p");
    note.textContent = message;
    note.style.marginTop = "12px";
    note.style.fontWeight = "600";
    note.style.color = "#1d3c2f";
    note.style.lineHeight = "1.7";
    form.appendChild(note);
  });
}
