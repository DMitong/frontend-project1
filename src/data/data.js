// export const fetchTodos = async () => {
//  try {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   if (!response.ok) {
//    throw new Error("Network esponse not ok");
//   }

//   const data = await response.json();
//   return data.slice(0, 10);
//  } catch (error) {
//   console.error("Error fetching todos:", error);
//   throw error;
//  }
// };