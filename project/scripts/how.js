document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        menuButton.innerHTML = "&#9776;";
    } else {
        nav.style.display = "flex";
        menuButton.innerHTML = "&#x2715;";
    }
});

const tips = [
    {
        tipName: "Materials",
        tip: "1 tablespoon of vinegar, 1 cup of cornstarch, 1 cup of withe glue, 1 teaspoon of baby oil",
        imageUrl: "https://images.pexels.com/photos/8175339/pexels-photo-8175339.jpeg"
    },
    {
        tipName: "Mixing",
        tip: "Add everythibg in a bowl and mix until the dough is smooth and homogeneous",
        imageUrl: "https://images.pexels.com/photos/8178898/pexels-photo-8178898.jpeg"
    },
    {
        tipName: "Finish!",
        tip: "You are ready to make figures, you can use a little of baby oil on your hands to keep the doughr from stricking while you shape your figures.",
        imageUrl: "https://images.pexels.com/photos/7966341/pexels-photo-7966341.jpeg"
    }
];

function displayTips(list) {
    const container = document.getElementById("tips-cards");
    container.innerHTML = "";

    list.forEach(t => {
        const card = document.createElement("section");
        card.classList.add("tips-card");

        card.innerHTML = `
            <h3>${t.tipName}</h3>
            <p>${t.tip}</p>
            <img src="${t.imageUrl}" alt="${t.tipName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

displayTips(tips);

const form = document.getElementById("form-tips");
const response = document.getElementById("response");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;

    response.textContent = `Thank you, ${name}! Your message has been sent successfully.`;
    response.style.color = "#3d1c39";
    response.style.fontWeight = "700";

    form.reset(); 
});