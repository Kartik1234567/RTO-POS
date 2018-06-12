var field1 = document.getElementById('field1');
var field2 = document.getElementById('field2');
var form = document.getElementById('formid');

form = addEventListener('submit', function(event) {
    
    if (!field1.value || !field2.value) {
        alert("Enter Value");
    } else {
            var x = parseFloat(field1.value);
            var y = parseFloat(field2.value);
            alert(x + y);
        event.preventDefault();
        }
    });
