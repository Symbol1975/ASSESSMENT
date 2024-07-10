
// PASSWORD CHECK JS

let myText = document.getElementById("my-text");
myText.addEventListener("input", () => {

    let count = (myText.value).length;
    document.getElementById("counter").textContent = `Total characters: ${count}`;

    // VARIABLE DECLARATION

    var number = /([0-9])/;
    var chars = /([a-zA-Z])/;
    var spec_chars = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;

    // PASSWORD CHECK CONDITION

    if ($('#my-text').val().length = 0) {
        $('#result').html("Weak");
        $('#result').css("background-color", "red");
        $('#must').html("Not less then 6 Characters.");
        $('#must').css("color", "red");
    } else {
        if ($('#my-text').val().length < 6) {
            $('#result').html("Weak");
            $('#result').css("background-color", "red");
            $('#must').html("Not less then 6 Characters.");
            $('#must').css("color", "red");
        } else {
            if ($('#my-text').val().match(number) && $('#my-text').val().match(chars) && $('#my-text').val().match(spec_chars)) {
                $('#result').html("Strong");
                $('#must').css("color", "blue");
                $('#result').css("background-color", "blue");
                $('#must').html("Your Password is Strong");
            } else {
                $('#result').html("Medium");
                $('#must').css("color", "green");
                $('#result').css("background-color", "green");
                $('#must').html("Should include alphabets, numbers and special characters.");
            }
        }
    }
});