var Interests = React.createClass({
  render: function () {
    var self = this;
    var rows = self.props.message['data'].map(function (item) {
        return <i className={ item.icon } aria-hidden="true"></i>;
    });
    return  <div className="row">
                <h3>
                    <i className={ this.props.message['icon'] } aria-hidden="true"></i>
                    &nbsp;{ this.props.message['title'] }
                </h3>
                <div className="row">
                    <div className="col-md-12">
                        { rows }
                    </div>
                </div>
            </div>;
  }
});
ReactDOM.render(<Interests message={ window.cv['interests'] } />, document.getElementById('interests'));