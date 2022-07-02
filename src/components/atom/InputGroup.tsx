import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const TextInput = styled(TextField)`

& .MuiOutlinedInput-root {
    border-radius: 20px;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
}


& .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none !important;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
}

// & .MuiOutlinedInput:-webkit-autofill {
//     background-color: rgba(81, 203, 238, 0.7);
// }

& .MuiInputLabel-root.Mui-focused {
    top: -10px !important;
    color: rgba(81, 203, 238, 1);
    font-size: 20px !important;
}

`;

export const EmailInput = styled(TextField)`

& .MuiOutlinedInput-root {
    border-radius: 20px;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
}

& .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none !important;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid rgba(81, 203, 238, 1);
}

& .MuiInputLabel-root.Mui-focused {
    top: -10px !important;
    color: rgba(81, 203, 238, 1);
    font-size: 20px !important;
}

`;