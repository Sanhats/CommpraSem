
function agregarItem() {
    var item = document.getElementById("item").value;
    if (item.trim() !== "") {
        var lista = document.getElementById("lista");
        var listItem = document.createElement("li");
        var itemText = document.createTextNode(item);
        listItem.appendChild(itemText);

        var deleteButton = document.createElement("button");
        deleteButton.appendChild(document.createTextNode("Eliminar"));
        deleteButton.addEventListener("click", function() {
            lista.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        lista.appendChild(listItem);
        document.getElementById("item").value = "";
    }
}