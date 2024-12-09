
let tasks = [
    { name: "Үй тапсырмасын орындау", completed: false },
    { name: "Жүгіру", completed: true },
    { name: "Кітап оқу", completed: false }
  ];
  

  let incomplet= tasks.filter(task => !task.completed);
  console.log ("Орындалмаған тапсырмалар: " + incomplet.map(task => task.name).join(", "));
  
  let tasknumber = prompt("Қай тапсырманы аяқталды деп белгілеу керек (нөмірін енгізіңіз, 1-ден бастап):");
  if (tasknumber !== null) {
    tasks[tasknumber - 1].completed = true;
  }
  
  
  let completeds = tasks.filter(task => task.completed);
   alert("Аяқталған тапсырмалар: " + completeds.map(task => task.name).join(", "));
  