function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let validation = /^pet_(?:[\d]+[\w]+|[\w]+[\d]+)$/ // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
    if(validation.test(input)) {
        let result = 'Valid Syntax';
        document.getElementById('result').innerText = result;
    } else {
        let result = 'InValid Syntax';
        document.getElementById('result').innerText = result;

    }

    }
        // Check if input starts with 'pet_' and followed by alphanumeric characters

          //  document.getElementById('result').innerText = result;
// }


