document.addEventListener('keydown', function(event) {
    const keyPressed = event.key;
    
    if (keyPressed>="A" && keyPressed<="Z" || keyPressed>="a" && keyPressed<="z" ) {
        alert(`You preesed the ${keyPressed} key`);
    }

    
});
