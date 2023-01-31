import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    background: #F8FAFC;
    color: #0F172A;
    &:hover {
        background: #F8FAFC;
        border: 1px solid #E2E8F0;
        border-radius: 24px;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
        (<div></div>) : 
        (<div className='caption-rg new_color'>{title}</div>);
    return (
        <div className='d-flex flex-column gap-2'>
            {Title}
            <Input className='p-2' defaultValue={def} ></Input>
        </div>
    );
}

export default TitledTextInput;