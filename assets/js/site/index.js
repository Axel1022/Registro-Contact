const inputName = document.getElementById("name");
const inputPhone = document.getElementById("phone");
const selectContactType = document.getElementById("contact-type");

function CreateContactType() {
  if (Validate()) {
    const valueName = inputName.value;
    const valuePhone = inputPhone.value;
    const valueContactType = selectContactType.value;

    const mainContainer = document.getElementById("contact-container");

    const divCol4 = document.createElement("div");
    divCol4.setAttribute("class", "col-4 mt-3");

    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card");

    const divCardHeader = document.createElement("div");
    divCardHeader.setAttribute("class", "card-header bg-danger text-white");

    const h5CardHeader = document.createElement("h5");
    h5CardHeader.setAttribute("class", "text-center fw-bold");
    h5CardHeader.innerText = `Contacto - ${valueContactType}`;

    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    const ulCardBody = document.createElement("ul");
    ulCardBody.setAttribute("class", "list-group list-group-flush");

    const liName = document.createElement("li");
    liName.setAttribute("class", "list-group-item");
    liName.innerText = `Nombre: ${valueName}`;

    const liPhone = document.createElement("li");
    liPhone.setAttribute("class", "list-group-item");
    liPhone.innerText = `Telefono: ${valuePhone}`;

    const btnDelete = document.createElement("button");
    btnDelete.setAttribute("class", "btn btn-danger float-end mt-2");
    btnDelete.innerText = "Eliminar";
    btnDelete.addEventListener("click", function () {
      if (confirm("Estas seguro que deseas eliminar este contacto?")) {
        mainContainer.removeChild(divCol4);
      }
    });

    divCardHeader.appendChild(h5CardHeader);

    divCardBody.appendChild(ulCardBody);
    divCardBody.appendChild(btnDelete);

    ulCardBody.appendChild(liName);
    ulCardBody.appendChild(liPhone);

    divCard.appendChild(divCardHeader);
    divCard.appendChild(divCardBody);

    divCol4.appendChild(divCard);

    mainContainer.appendChild(divCol4);

    Clear();
  } else {
    alert("Debe completar toda la info");
  }
}

function Clear() {
  inputName.value = "";
  inputName.classList.remove("input-error");
  inputName.classList.remove("input-success");
  inputName.focus();

  inputPhone.value = "";
  inputPhone.classList.remove("input-error");
  inputPhone.classList.remove("input-success");

  selectContactType.value = "";
  selectContactType.classList.remove("input-error");
  selectContactType.classList.remove("input-success");
}

function Validate() {
  let isValid = true;

  const valueName = inputName.value;
  const valuePhone = inputPhone.value;
  const valueContactType = selectContactType.value;

  if (valueName == "" || valueName == null || valueName == undefined) {
    isValid = false;
    inputName.classList.add("input-error");
    inputName.classList.remove("input-success");
  } else {
    inputName.classList.add("input-success");
    inputName.classList.remove("input-error");
  }

  if (valuePhone == "" || valuePhone == null || valuePhone == undefined) {
    isValid = false;
    inputPhone.classList.add("input-error");
    inputPhone.classList.remove("input-success");
  } else {
    inputPhone.classList.add("input-success");
    inputPhone.classList.remove("input-error");
  }

  if (
    valueContactType == "" ||
    valueContactType == null ||
    valueContactType == undefined
  ) {
    isValid = false;
    selectContactType.classList.remove("input-success");
    selectContactType.classList.add("input-error");
  } else {
    selectContactType.classList.add("input-success");
    selectContactType.classList.remove("input-error");
  }

  return isValid;
}
