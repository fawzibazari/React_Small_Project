import Checkbox from './Checkbox'
export default {
    title: 'component/Checkbox',
    component : 'Checkbox'
}

export const Checked = () => <Checkbox checked={true} onChange={() => {}}/>
export const UnChecked = () => <Checkbox checked={false} onChange={() => {}}/>
export const CheckBox = () => <Checkbox onChange={() => {}}/>