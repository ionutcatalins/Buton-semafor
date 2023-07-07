function color() {     
    let colors = document.getElementById("btn").className;
    switch(colors) {
        case 'btn btn-danger':
            document.getElementById("btn").classList = 'btn btn-warning';
            break;
        
        case 'btn btn-warning':
            document.getElementById("btn").classList = 'btn btn-success'; 
            break;  
        
        case 'btn btn-success':
            document.getElementById("btn").classList = 'btn btn-danger'; 
            break;
    }
}