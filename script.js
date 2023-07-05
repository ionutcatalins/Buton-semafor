let a = 1;

function button() {
    if(a == 0) {
        document.getElementById("btn").classList = "btn btn-danger"
    } else if (a == 1) {
        document.getElementById("btn").classList = "btn btn-warning"
    } else if (a == 2) {
        document.getElementById("btn").classList = "btn btn-success"       
    }
    ++a;
    if (a == 3) {
        a = 0;
    }  
}