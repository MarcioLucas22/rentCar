function abrir() {
    document.getElementById('popUp').style.display = 'block';
}

function fechar() {
    document.getElementById('popUp').style.display = 'none'
    //newDiv()
}

//const files = document.getElementById('files');

/*files.addEventListener('click', */function postPhoto(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        document.getElementById('arquivo').innerHTML += (`<img src="${reader.result}" />`)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}

document.querySelector('#files').addEventListener('change', function () {
    postPhoto(this.files[0]);
});

/*function newDiv() {
    descriptionCar.addNameCar()
    descriptionCar.addBrandCar()
    descriptionCar.addValueCar()
    const newCar = document.querySelector('#description')
    const img = document.createElement('img')
    img.src = './images/urus.jpg'
    newCar.appendChild(img).style.width = '250px'
    newCar.appendChild(img).style.height = '250px'

}

const nameCar = document.getElementById('nameCar')
const brandCar = document.getElementById('brandCar')
const valueCar = document.getElementById('value')

const descriptionCar = {
    description: document.getElementById('list-cars'),

    addNameCar() {
        const p = document.createElement('p')
        description.appendChild(p).innerHTML = 'Nome: ' + nameCar.value
    },

    addBrandCar() {
        const p = document.createElement('p')
        description.appendChild(p).innerHTML = 'Marca: ' + brandCar.value
    },

    addValueCar() {
        const p = document.createElement('p')
        description.appendChild(p).innerHTML = 'Valor diário: R$' + valueCar.value + ',00'
    }
}*/