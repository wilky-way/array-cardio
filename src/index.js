const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    // OR nothing because color box doesnt need a px
    const suffix = this.dataset.sizing || ""; //data-WHATEVER is in the dataset

    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

//listen for the change event, when called call handleUpdate
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
