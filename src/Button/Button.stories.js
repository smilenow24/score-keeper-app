import Button from './Button.js';

export default {
    title: 'MyComponents/Button',
    component: Button,
};

export const Default =  () => {return <Button text="test"/>};

export const Active =  () => {return <Button text="test" active={true} />};