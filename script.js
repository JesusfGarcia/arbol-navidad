const lights = document.getElementsByClassName("esfera");

const colors = [
  "#ffffff",
  "#F2FF29",
  "#6FECFB",
  "#FFBABA",
  "#FF5436",
  "#ffffff",
  "#F2FF29",
  "#6FECFB",
  "#FFBABA",
  "#FF5436",
  "#ffffff",
  "#F2FF29",
  "#6FECFB",
  "#FFBABA",
  "#FF5436",
  "#ffffff",
  "#F2FF29",
  "#6FECFB",
  "#FFBABA",
  "#FF5436",
];

class light {
  constructor({ id, color }) {
    this.id = id;
    this.color = color;
    this.on = false;
  }

  turnLights() {
    const target = document.getElementById(this.id);
    target.style.backgroundColor = this.color;
    setInterval(() => {
      if (this.on) {
        target.style.boxShadow = `0 0 30px ${this.color}`;
      } else {
        target.style.boxShadow = `0 0 0px ${this.color}`;
      }
      this.on = !this.on;
    }, (Math.floor(Math.random() * (4 - 1)) + 1) * 1000);
  }
}

for (let index = 0; index < lights.length; index++) {
  const element = lights[index];
  let objeto = new light({ id: element.id, color: colors[index] });
  objeto.turnLights();
}
