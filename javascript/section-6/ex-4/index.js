


const axios =require('axios');

 async function fectUserData(userId){
     
    try{
       const response= await axios.get(`https://jsonplaceholder.typicode.com/todos/${userId}`);

         

         return response;
    }
    catch(error){
        console.error('Error fetching data:', error.message);
    }

}

fectUserData(2).then(response=>{
    console.log(response.data);
});