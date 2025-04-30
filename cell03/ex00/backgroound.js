function changecolor() {
    const r = Math.floor(Math.random() * 257);
    const g = Math.floor(Math.random() * 257);
    const b = Math.floor(Math.random() * 257);

    const randomcolor = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = randomcolor;
  }