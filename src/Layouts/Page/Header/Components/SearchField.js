import styled from 'styled-components';
import SearchIcon from '../../../../Icons/SearchIcon';
import IconOnlyButton from '../../../../Components/IconOnlyButton';

const WrapperInput = styled.div`
    position:relative;
    width: 216px;
`;

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    background: #F8FAFC;
    color: #152842;
    width: 100%;
    &:hover {
        background: #F8FAFC;
        opacity: 0.8;
    }
    &:focus {
        background: #F8FAFC;
    }
`;

const SearchIconWrapper = styled.div`

background: #F8FAFC;
    position: absolute;
    box-sizing: border-box;
    right: 8px;  /* Здесь можно добавить отступ от правого края, чтобы сдвинуть иконку левее */
    top:50%;
    transform: translateY(-50%);
`;

function SearchField() {
    return (
        <WrapperInput className='d-inline-flex'>  {/* Устанавливает ширину поля и включает относительное положение */}
            <Input className='p-2' placeholder='Найти'/>
            <SearchIconWrapper className='p-1'>  {/* Устанавливает абсолютное положение внутри поля ввода */}
                <IconOnlyButton icon={<SearchIcon/>}/>
            </SearchIconWrapper>
        </WrapperInput>
    );
}

export default SearchField;