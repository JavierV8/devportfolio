import PropTypes from 'prop-types';

const BasePage = (props) => {
  const { className, title, containerClass } = props;
  return (
    <div className={`base-page ${className}`}>
      <div className={containerClass}>
        {title && <div className="page-header"><h1 className="page-header-title">{title}</h1></div>}
        {props.children}
      </div>
    </div>
  )
}

BasePage.defaultProps = {
  className: '',
  containerClass: ''
}
BasePage.propTypes = {
  className: PropTypes.any.isRequired
}
export default BasePage;