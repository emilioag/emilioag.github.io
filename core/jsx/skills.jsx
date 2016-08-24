var Score = React.createClass({
  render: function () {
    var self = this;
    var rows = self.props.message['data'].map(function (item) {
        var halfStar = item.score % 1,
            intStar = item.score - halfStar,
            starArray = new Array();
        for (var i=0; i < intStar; i++) {
            starArray.push(1);
        }
        if (halfStar > 0) starArray.push(halfStar);
        var stars= starArray.map(function ( item ) {
            if (item === 1){
                return <i className="fa fa-star" aria-hidden="true"></i>;
            } else {
                return <i className="fa fa-star-half-o" aria-hidden="true"></i>;
            }
        });
        return  <div className="row">
                    <div className="col-md-2">{ item.text }</div>
                    <div className="col-md-10 score">{ stars }</div>
                </div>
    });
    return  <div className="row">
                <h3>
                    <i className={ this.props.message['icon'] } aria-hidden="true"></i>
                    &nbsp;{ this.props.message['title'] }
                </h3>
                { rows }
            </div>;
  }
});
ReactDOM.render(<Score message={ window.cv['scores'] } />, document.getElementById('skills'));