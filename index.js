const squares = document.querySelectorAll(".square");

let color = "green";

squares.forEach((square) => {
  square.addEventListener("click", (e) => {
    if (e.target.id.includes("clicked")) return;
    if (color === "green") {
      e.target.classList.remove("bg-blue-100", "hover:bg-blue-50");
      e.target.classList.add("bg-green-500", "hover:bg-green-400");
      e.target.id += " clicked";
      color = "red";
    } else {
      e.target.classList.remove("bg-blue-100", "hover:bg-blue-50");
      e.target.classList.add("bg-red-500", "hover:bg-red-400");
      e.target.id += " clicked";
      color = "green";
    }
  });
});
