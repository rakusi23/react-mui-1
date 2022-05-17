import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
        border: 0,
        marginBottom: 15,
        borderRadius: 15,
        color: 'white',
        padding: '5px 30px'
    },
});

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: orange[500],
        },
    },
});

const ButtonStyled = () => {
    const classes = useStyles();
    return (
        <Button className={classes.root}>
            Test styled button
        </Button>
    );
}

const CheckBoxExample = () => {
    const [checked, setChecked] = React.useState(false);
    return (
        <div>
            <FormControlLabel 
                control={
                    <CheckBox 
                        icon={<DeleteIcon />}
                        checkedIcon={<SaveIcon />}
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        color='primary'
                        inputProps={
                            {'aria-label': 'primary checkbox'}
                        }
                    />
                }
                label="Testing Checkbox"
            />
        </div>
    )
};

const App = () => {
    return (
      <ThemeProvider theme={theme}>
        <ButtonStyled /> <br />
        <TextField 
            variant='filled'
            color='primary'
            type='datetime-local'
            label='The time'
            value={new Date().toISOString().substring(0, 16)}
        />
        <CheckBoxExample />
        <ButtonGroup 
            size='large' 
            variant='contained'
            color='primary'
             >
            <Button 
                startIcon={<SaveIcon />}
                // endIcon={<SaveIcon />}
                >
                Save
            </Button>
            <Button 
                startIcon={<DeleteIcon />}
                // endIcon={<SaveIcon />}
                color='secondary'>
                Discard
            </Button>
        </ButtonGroup>
      </ThemeProvider>
    );
  }

export default App;