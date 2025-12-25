import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import { useState } from "react";

export default function TodoForm({ addTodo }){
    const [text, setText] = useState("")
    const handleChange = (evt)  => {
        setText(evt.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Add Task"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit">
                <Create />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  )
}
