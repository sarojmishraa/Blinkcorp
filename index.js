// Data for reviews
const data = [
    {
      title: "Hyundai's RN24 Prototype: All Smoke, No Mirrors",
      day: "Dec 11, 2024",
      image: "./img/rn24.jpeg", 
    },
    {
      title: "2025 Nissan Frontier Is a Simple, Honest Truck",
      day: "Dec 9, 2024",
      image: "./img/nissan.jpeg", 
    },
    {
      title: "Audi A6 e-tron Appeals to the Head, Not the Heart",
      day: "Dec 2, 2024",
      image: "./img/audi.jpeg", 
    },
    {
      title: "Our 2022 Rivian R1T Gains Upgrades at 30,000 Miles",
      day: "Dec 10, 2024",
      image: "./img/rivian.jpeg", 
    },
    {
      title: "Our Kia EV9 Foreshadows Future Three-Row SUVs",
      day: "Dec 6, 2024",
      image: "./img/nissan.jpeg", 
    },
    {
      title: "2025 Audi S6 e-tron Is Slightly Sportier",
      day: "Dec 2, 2024",
      image: "./img/audi3.jpeg", 
    },
    {
        title: "Our Kia EV9 Foreshadows Future Three-Row SUVs",
        day: "Dec 6, 2024",
        image: "./img/rivian.jpeg", 
      },
      {
        title: "2025 Audi S6 e-tron Is Slightly Sportier",
        day: "Dec 2, 2024",
        image: "./img/kia.jpeg", 
      },
  ];
  
 
  const Grid = document.getElementById("grid");
  
  data.forEach((d) => {
    const Item = document.createElement("div");
    Item.classList.add("data-item");
  
    Item.innerHTML = `
      <img src="${d.image}" alt="${d.title}">
      <h2>${d.title}</h2>
     <p>${d.day}</p>
    `;
  
    Grid.appendChild(Item);
  });
