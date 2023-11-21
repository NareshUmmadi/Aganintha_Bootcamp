function captureFormData() {
    const formData = new FormData(document.getElementById('myForm'));
    
    const formDataObject = {};
    
    formData.forEach(function(value, key) {
        formDataObject[key] = value;
    });
    
    console.log(formDataObject);
    const formElement = document.getElementById('myForm');
    formElement.reset(); 
}
