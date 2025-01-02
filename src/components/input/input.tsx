import styled from "styled-components";
type INPUT_TYPE = "text" | "password" | "email" | "number";
interface InputPropo {
    type: INPUT_TYPE;
    placeholder?: string;
    name: string;
    value?: string;
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
                border-bottom: 1px solid var(--border);
                outline: none;
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
    }
`;

export default function Input({type, placeholder, name, value, required}: InputPropo) {
    return (
        <InputStyle>
            <div className="inputContainer">
                <label className="Input-wrapper">
                    <input name={name} type={type} className="common-input" placeholder={placeholder} value={value} />
                </label>
                <div className="errorMask hidden">
                </div>
            </div>
        </InputStyle>
    );
}