import { forwardRef, useState } from "react";
import styled from "styled-components";
type INPUT_TYPE = "text" | "password" | "email" | "number";
interface InputProps {
    type: INPUT_TYPE;
    placeholder?: string;
    name: string;
    required?: boolean;
}

const InputStyle = styled.div`
    .inputContainer {
        display: flex;
        flex-direction: column;
        /* margin-bottom: var(--form-gap);
        margin-top: var(--form-gap); */
        .Input-wrapper {
            position: relative;
            .common-input {
                width: 100%;
                height: var(--input-height);
                border: none;
                border-bottom: 1px solid var(--border);
                outline: none;
            }
        }
        .errorMask {
            height: 16px;
            color: var(--red);
            font-size: 12px;
            margin-top: 8px;
        }
        .hidden {
            visibility: hidden;
        }
    }
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const [value, setValue] = useState('');
    const [errorMaskClass, setErrorMaskClass] = useState('errorMask hidden');
    const blurhandler = () => {
        refreshErrorMask();
    };
    const refreshErrorMask = () => {
        if (props.required && value === '') {
            setErrorMaskClass('errorMask');
        } else {
            setErrorMaskClass('errorMask hidden');
        }
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        refreshErrorMask();
    };
    return (
        <InputStyle>
            <div className="inputContainer">
                <label className="Input-wrapper">
                    <input ref={ref} onBlur={blurhandler} onChange={handleChange} name={props.name} type={props.type} className="common-input" placeholder={props.placeholder} value={value} />
                </label>
                <div className={errorMaskClass}>
                    {props.name}不能为空
                </div>
            </div>
        </InputStyle>
    );
});

export default Input;