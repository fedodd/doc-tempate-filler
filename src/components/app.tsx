import React from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

function App() {
  return (
    <div>
      <FormControl>
        <InputLabel id="choose-template">Choose template</InputLabel>
        <Select
          labelId="choose-template"
          id="choose-template"
          value={'Согласие на обработку персональных данных'}
          onChange={() => console.log('changed!')}
        >
          <MenuItem value={'Согласие на обработку персональных данных'}>
            Согласие на обработку персональных данных
          </MenuItem>
          <MenuItem value={'инструктаж по охране труда'}>
            инструктаж по охране труда
          </MenuItem>
        </Select>
        <Button variant="contained" color="primary">
          Download doc
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
