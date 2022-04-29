import './link.scss'

const Link = ({children, onClick, ...props}) => (
    <button
          {...props} 
          onClick={onClick}
          className={`link__button ${props.className} `}
          type='button'
    >
          {children}
    </button>
)

export default Link