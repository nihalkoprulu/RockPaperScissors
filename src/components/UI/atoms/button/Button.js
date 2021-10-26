import './Button.scss'

export const Button = (props) => (
    <button className="Button" type="button" {...props}>{props.children}</button>
)