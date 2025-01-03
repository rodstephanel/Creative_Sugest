function mostrarSugestao() {
    const checkboxes = document.querySelectorAll('input[name="options"]:checked');
    const suggestionDiv = document.getElementById("suggestion");
    const selectedValues = Array.from(checkboxes).map(cb => cb.value);

    if (selectedValues.length === 0) {
        suggestionDiv.style.display = "none";
        alert("Por favor, selecione pelo menos uma opção.");
        return;
    }

    let suggestionText = "Sugestão Criativa: ";
    suggestionText += selectedValues.map(value => {
        switch (value) {
            case "1":
                return "Você selecionou Animais";
            case "2":
                return "Você selecionou Profissões";
            case "3":
                return "Você selecionou Elementos";
            default:
                return "";
        }
    }).join(", ");

    suggestionDiv.textContent = suggestionText;
    suggestionDiv.style.display = "block";
}