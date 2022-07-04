import { Grid, TextField } from "@mui/material";
import { FormProps } from "../../types/FormProps";
import { TextInput } from "../atom/InputGroup";
import { isEmail } from "../../libs/signup.module";
import React from "react";

const SignupForm:React.FC<FormProps> = ({inputGroup}) => {

    const renderInputGroup = inputGroup.map((v,i) => {
            if(v.name === 'email') {
                return (
                    <Grid item xs={12} key={`grid-${i}`}>
                        <TextInput
                            key={`input-${i}`}
                            name={v.name}
                            required
                            fullWidth
                            id={v.name}
                            label={v.label}
                            autoFocus={i === 0 ? true : false}
                            value={v.value}
                            onChange={(e) => v.setValue(e.target.value)}
                            helperText={isEmail(v.value) ? "" : "Invalid email format"}
                            error={isEmail(v.value) ? false : true}
                        />
                    </Grid>
                )
            } else if(v.name === 'confirmPassword') {
                return (
                    <Grid item xs={12} key={`grid-${i}`}>
                        <TextInput
                            key={`input-${i}`}
                            name={v.name}
                            required
                            fullWidth
                            id={v.name}
                            label={v.label}
                            autoFocus={i === 0 ? true : false}
                            value={v.value}
                            onChange={(e) => v.setValue(e.target.value)}
                        />
                    </Grid>
                )
            } else {
                return (
                    <Grid item xs={12} key={`grid-${i}`}>
                        <TextInput
                            key={`input-${i}`}
                            name={v.name}
                            required
                            fullWidth
                            id={v.name}
                            label={v.label}
                            autoFocus={i === 0 ? true : false}
                            value={v.value}
                            onChange={(e) => v.setValue(e.target.value)}
                        />
                    </Grid>
                )
            }
        })


    return <>{renderInputGroup}</>
}

export default SignupForm;