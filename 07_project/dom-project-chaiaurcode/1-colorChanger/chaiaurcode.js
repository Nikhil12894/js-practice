const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    const id=e.target.id;
    switch (id) {
        case "grey":
            body.style.backgroundColor = id
            break;
            case "white":
                body.style.backgroundColor = id
            break;
            case "blue":
            body.style.backgroundColor = id
            break;
            case "yellow":
            body.style.backgroundColor = id
            break;
            case "green":
            body.style.backgroundColor = id
            break;
            case "orange":
            body.style.backgroundColor = id
            break;
        default:
            body.style.backgroundColor = "white"
            break;
    }
  })
});
