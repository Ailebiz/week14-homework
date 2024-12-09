// Oqushylar
const students = [
    {
      name: "Айжан",
      math: 85,
      city: "Алматы"
    },
    {
      name: "Бекзат",
      math: 92,
      city: "Астана",
      country: "Қазақстан"
    }
  ];
  
  
  const [student1, student2] = students;
  

  const { name: name1, math: math1, city: city1, country: country1 = "Қазақстан" } = student1;
  const { name: name2, math: math2, city: city2, country: country2 = "Қазақстан" } = student2;
  
 
  console.log(`Оқушы 1: Аты - ${name1}, Математика - ${math1}, Қала - ${city1}, Ел - ${country1}`);
  console.log(`Оқушы 2: Аты - ${name2}, Математика - ${math2}, Қала - ${city2}, Ел - ${country2}`);
    


  // Synyp tizimi
const class1 = ["Анар", "Бекзат", "Гүлжан"];
const class2 = ["Данияр", "Ержан", "Жанар"];


const Class = ["Директор", ...class1, ...class2, "Мұғалім"];


console.log("Қосылған сынып тізімі:", Class);
