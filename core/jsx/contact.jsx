var Contact = React.createClass({
  render: function () {
    var self = this;
    var rows = self.props.message['data'].map(function (item) {
        return <div className="row">
        <div className="col-md-2"><i className={ item.icon } aria-hidden="true"></i></div>
        <div className="col-md-10 score"><span>{ item.text }</span></div>
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

ReactDOM.render(<Contact message={ window.cv['contact'] } />, document.getElementById('contact'));
