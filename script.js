function button() {
    let a = document.getElementById("btn").classList;
    if(a == "btn btn-danger") {
        document.getElementById("btn").classList = "btn btn-warning";
    } else if (a == "btn btn-warning") {
        document.getElementById("btn").classList = "btn btn-success";
    } else if (a == "btn btn-success") {
        document.getElementById("btn").classList = "btn btn-danger";       
    }
}