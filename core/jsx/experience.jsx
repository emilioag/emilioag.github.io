var Experience = React.createClass({
  render: function () {
    var self = this;
    var rows = self.props.message['data'].map(function ( item ) {
        return <div className="row">
                    <div className="col-md-2 datemargin">
                        <span className="date">{ item['range'].join(' - ') }</span>
                    </div>
                    <div className="col-md-9">
                        <span className="job-title">{ item['job-title'] }</span>
                        <p>{ item['description'] }</p>
                    </div>
                </div>;
    });
    return      <div className="row">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>
                                <i className="fa fa-briefcase" aria-hidden="true"></i>
                                &nbsp;{ self.props.message['title'] }
                            </h2>
                        </div>
                        <div className="col-md-8">&nbsp;</div>
                    </div>
                    { rows }
                </div>;
  }
});
ReactDOM.render(<Experience message={ window.cv['experience'] } />, document.getElementById('experience'));