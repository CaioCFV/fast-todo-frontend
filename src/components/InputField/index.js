import React from 'react';
import { Input, Label, Fieldset } from './style.js';

function InputField ({...params}){

    const { id, label, empty,...inputParams} = params;

    return (
        <>
            <Fieldset aria-disabled={empty}>
                <Input  id={id} {...inputParams} />
                <Label htmlFor={id}>{label}</Label> 
            </Fieldset>
        </>
    );                 
}

export default InputField;