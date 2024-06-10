$(function () {
  //#region  Variables
  let isValid = true;
  let valueName = "";
  let valuePhone = "";
  let valueContact = "";
  //#endregion

  //#region  Eventos
  $("#btn-create").on("click", function () {
    CreateContactType();
  });
  $("#btn-delete").on("click", function () {
    Limpiar();
  });
  $("#contact-container").on("click", ".btn-delete", function () {
    if (confirm("Estas seguro que desea eliminar este contacto ")) {
     const contenDinamic = $(this).closest("div#agregadoDinamicamente");
     contenDinamic.remove();
    }

  });
  //#endregion

  //#region  Funciones

  function CreateHtmlContactType() {
    const content = `
      <div class="col-4" id="agregadoDinamicamente">
                <div class="card">
                    <div class="card-header bg-danger text-white">
                        <h5 class="text-center fw-bold">Contacto - ${valueContact}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Nombre: ${valueName}</li>
                            <li class="list-group-item">Telefono: ${valuePhone}</li>
                        </ul>
                        <button class="btn btn-danger float-end btn-delete">Eliminar</button>
                    </div>
                </div>
            </div>
      `;
    $("#contact-container").append(content);
  }

  function CreateContactType() {
    valueName = $("#name").val();
    valuePhone = $("#phone").val();
    valueContact = $("#contact-type").val();
    if (Validate()) {
      CreateHtmlContactType();
      Limpiar();
    } else {
      alert("Failed");
    }
  }
  function Limpiar() {
    $("#name")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success")
      .focus();
    $("#phone").val("").removeClass("input-error").removeClass("input-success");
    $("#contact-type")
      .val("")
      .removeClass("input-error")
      .removeClass("input-success");
  }

  function Validate() {
    valueName = $("#name").val();
    valuePhone = $("#phone").val();
    valueContact = $("#contact-type").val();
    if (valueName == "" || valueName == null || valueName == undefined) {
      isValid = false;
      $("#name").addClass("input-error").removeClass("input-success");
    } else {
      $("#name").removeClass("input-error").addClass("input-success");
    }

    if (valuePhone == "" || valuePhone == null || valuePhone == undefined) {
      isValid = false;
      $("#phone").addClass("input-error").removeClass("input-success");
    } else {
      $("#phone").removeClass("input-error").addClass("input-success");
    }

    if (
      valueContact == "" ||
      valueContact == null ||
      valueContact == undefined
    ) {
      isValid = false;
      $("#contact-type").addClass("input-error").removeClass("input-success");
    } else {
      $("#contact-type").removeClass("input-error").addClass("input-success");
    }

    return isValid;
  }
  //#endregion
});
