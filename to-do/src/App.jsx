import React from "react";
import { AddCircleOutline, Delete, Edit, Send } from "@material-ui/icons";
import { Card, Button, TextField, Container, IconButton, Checkbox,ThemeProvider, createTheme} from "@material-ui/core";


const App = () => {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

  React.useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todos", json);
  }, [todos]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  function submitEdits(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setTodoEditing(null);
  }

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <center>
    <h1>Todo List</h1>
    <Card
    color="secondary"
    style={{display:'inline-block'
    }}>
      <form onSubmit={handleSubmit}>
        <Container>
        <TextField
          id="outlined-basic" 
          label="Enter Your Task" 
          variant="outlined" 
          required={true}
          style={{margin : 20,}}
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        </Container>
        <Button 
        variant="contained" 
        color='primary' 
        endIcon={< AddCircleOutline/>}
        style={{marginBottom: 20,}} 
        type="submit">
          Add Todo
          </Button>
      </form>
      {todos.map((todo) => (
        <Container>
        <Card
        style={ {display : 'flex',
         flexDirection: 'row',
          marginBottom: '10px',
        justifyContent: 'space-between',
      }}
         key={todo.id} className="todo">
          
            <Checkbox
              type="checkbox"
              id="completed"
              checked={todo.completed}
              size="large"
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <TextField
              id="outlined-basic" 
              placeholder="New Task"
              variant="outlined" 
              required={true}
              type="text"
              size="small"
              style={{paddingTop: '4px'}}
                onChange={(e) => setEditingText(e.target.value)}
              />
            ) :
            (
              <div style={{
                display:"inline-block",
                marginTop: 15
                }}>
                  
                  {todo.text}</div>
            )}
          
          <div>
            {
            todo.id === todoEditing ? (
              <IconButton 
              onClick={() => submitEdits(todo.id)}
              >
                <Send/>
              </IconButton>
            ) : 
            (
              <IconButton 
              onClick={() => setTodoEditing(todo.id)}>
                <Edit/>
              </IconButton>
            )
            }  
            <IconButton 
            style={{color:"red"}}
            onClick={() => deleteTodo(todo.id)}
            >                   
              <Delete />
            </IconButton>
            </div>
            
        </Card>
        </Container>
      ))}
    </Card>
    </center>
    </ThemeProvider>
    </>
  );
};

export default App;