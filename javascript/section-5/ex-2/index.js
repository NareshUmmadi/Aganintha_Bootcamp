async function  fetchUserData (userId){

    let url=`https://jsonplaceholder.typicode.com/users/${userId}`;

       const response= await fetch(url);

       if (!response.ok) {
        throw new Error(`Failed to fetch user data. Status: ${response.status}`);
      }

      const data= await response.json();

      //  console.log("Reterived user data:"+ data);

       return data;
   }


   fetchUserData(5).then(response=>{
    // console.log(response);

    console.log(`Concanting name and Email \n ${response.username}-${response.email}`);
   })


  
