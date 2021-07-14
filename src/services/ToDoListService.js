function ToDoListService(){}

ToDoListService.prototype.getAllToDoListApi = function () {
   var promise =axios({
        url: 'https://60e84859673e350017c21865.mockapi.io/toDoList',
        method: 'GET',
    });
    return promise;
}

ToDoListService.prototype.addToDoListApi = function(toDo){
    //Post: them du lieu moi vao database
    //tryen dư liêu cân thêm vào database
    return promise =  axios({
        url: 'https://60e84859673e350017c21865.mockapi.io/toDoList',
        method: 'POST',
        data: toDo,
    }); 
}

ToDoListService.prototype.deleteToDoListApi = function(id){
    var promise = axios({
        url:'https://60e84859673e350017c21865.mockapi.io/toDoList/' + id,
        method: 'DELETE',
    });
    return promise;
}

ToDoListService.prototype.getToDoListApi = function(id){
    var promise = axios({
        url:'https://60e84859673e350017c21865.mockapi.io/toDoList/' + id,
        method: 'GET'
    });
    return promise;
}

ToDoListService.prototype.checkToDoListApi = function(id, toDo){
    var promise = axios({
        url:'https://60e84859673e350017c21865.mockapi.io/toDoList/'+ id,
        data: toDo,
        method: 'PUT'
    });
    return promise
}




// ToDoListService.prototype.checkToDoListApi = function(id , toDo){
//     var promise = axios({
//         url:'https://60e84859673e350017c21865.mockapi.io/toDoList/' + id,
//         method : 'PUT',
//         data : toDo
//     })
//     return promise
// }