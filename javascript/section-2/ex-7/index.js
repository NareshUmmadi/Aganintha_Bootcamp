const persons = [
    {
      name: "Kumar",
      age: 30,
      addresses: ["123 Main Street, Kphb, India","12 street,3rd pahse kphp,India"]
    },
    {
      name: "Jane Smith",
      age: 25,
      addresses: ["789 Oak Street, City3, Country3", "101 Pine Street, City4, Country4"]
    }
  ];

     console.log("before upadating addresses \n "+persons[0].addresses);

     const duplicatPersons=[...persons];

    duplicatPersons[0].addresses.push("101 Pine Street, City4, Country4");


    console.log("after upadating addresses \n "+duplicatPersons[0].addresses);



