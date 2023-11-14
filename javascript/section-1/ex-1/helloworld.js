const chalk=require('chalk');
function print(){
    console.log("Hello world");
}

print();

const requiredName=require('readline').createInterface({
    input: process.stdin,
    output:process.stdout

});


requiredName.question('Enter your Name: ', (name)=>{
    requiredName.close();
    
    const greeting=`Hello: ${name}!`;

    const greenGreeting=chalk.green(greeting);

    console.log(greenGreeting);
});





