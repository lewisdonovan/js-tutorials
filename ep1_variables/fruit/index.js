document.getElementById('submit').addEventListener('click', function() {
    var fruit = document.getElementById('fruit').value
    document.getElementById('app').innerHTML = fruit
})