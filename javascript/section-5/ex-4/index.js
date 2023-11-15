

async function  fetchUserData (userId){

    //    let url=`https://jsonplaceholder.typicode.com/posts/${userId}`;

    let url=`https://jsonplaceholder.typicode.com/users/${userId}`;

       const response= await fetch(url);

       if (!response.ok) {
        throw new Error(`Failed to fetch user data. Status: ${response.status}`);
      }

      const data= await response.json();

      //  console.log("Reterived user data:"+ data);

       return data;
   }


async function fetchMultipleUsers(usersArray){

    const response=usersArray.map(userId=>fetchUserData(userId));

    const userData= await Promise.all(response);
    console.log("Combined result of multiple users:", userData);
    return userData;

}
     


//    fetchUserData(5).then(response=>{
//     console.log(response);
//    })

  let userIds=[3,6,7,1,2,9,8,4,5];

       fetchMultipleUsers(userIds);

      //  fetchMultipleUsers(userIds);