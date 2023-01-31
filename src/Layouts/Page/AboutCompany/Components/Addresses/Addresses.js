import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-inline-flex justify-content-between flex-column gap-4 mt-4 p-4 col new_margin_bor new_border new_border_radius mr'>
        <div className='title d-inline-flex flex-column'>Адреса заведений
        <div className='d-inline-flex flex-column gap-3 pt-4'>
            <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
            <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
        </div>
        </div>
        <div className='d-inline-flex flex-column'>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    </div>
    );
}

export default Addresses;