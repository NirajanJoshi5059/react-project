import { createSlice } from "@reduxjs/toolkit";
import { addToLocal, getData } from "./storage";


const dummy = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }];



    const todoSlice = createSlice({
        name: 'todoSlice',
        initialState: {
          data: getData()
        },
        reducers: {
          addData: (state, action) => {
            state.data.push(action.payload);
            addToLocal(state.data);
          },
      
          removeData: (state, action) => {
            state.data.splice(action.payload, 1);
          }
      
        }
      });
      
      export const { addData, removeData } = todoSlice.actions;
      
      
      export default todoSlice.reducer;

// const todoSlice= createSlice({
//     name : "todoSlice",
//     initialState:{
//         data:dummy
//     },
//     reducers:{

//     }
// });
// export default todoSlice.reducer;