import PropTypes from "prop-types";

function MetricCard( {metric : {
    title,
    color,
    value,
    icono
}}
) {

  return (
    <div className="col-md-4 mb-4">
<div className={`card border-left-${color} shadow h-100 py-2`}>
    <div className="card-body">
        <div className="row no-gutters align-items-center">
            <div className="col mr-2">
                <div className={`text-xs font-weight-bold text-${color} text-uppercase mb-1`}>{title}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
            </div>
            <div className="col-auto">
                <i className={`fas ${icono} fa-2x text-gray-300`}></i>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
MetricCard.propTypes = {
    metric: PropTypes.exact({
    title : PropTypes.string.isRequired,
    color : PropTypes.oneOf(['primary','success','warning']),
    value: PropTypes.number.isRequired,
    icono : PropTypes.string.isRequired,
})
 }

MetricCard.defaultProps ={

        color : "danger"

}


export default MetricCard

