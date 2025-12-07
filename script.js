// Put small interactivity here

// Insert current year into footers
document.addEventListener("DOMContentLoaded", function () {
  const y = new Date().getFullYear();
  const spans = [document.getElementById("year"), document.getElementById("year-2"), document.getElementById("year-3")];
  spans.forEach(s => { if (s) s.textContent = y; });
});

// Simple client-side form handler (no server)
// Shows a friendly message and clears the form.
function handleFormSubmit(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const reason = document.getElementById("reason").value;
  const response = document.getElementById("formResponse");

  response.textContent = `Thanks ${name || "traveler"}! We received your "${reason}" message and will reply to the email provided.`;
  response.style.padding = "12px";
  response.style.marginTop = "12px";
  response.style.background = "#e6fff7";
  response.style.border = "1px solid #bff0d9";
  response.style.borderRadius = "8px";

  // Reset form after a pause (simulate send)
  setTimeout(() => {
    const f = document.getElementById("contactForm");
    if (f) f.reset();
  }, 1600);

  return false;
}
