var Profile = React.createClass({
    render: function () {
        var self = this;
        return   <div className="row">
                    <div className="row">
                        <div className="col-md-11">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>{ this.props.data['name'] }</h1>
                                    <h6>{ this.props.data['position'] }</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 center">
                                    <img src="profile.jpeg" />
                                </div>
                                <div className="col-md-8">
                                    <h2><i className={ this.props.data.icon } aria-hidden="true"></i> { this.props.data['title'] }</h2>
                                    <p>{ this.props.data['description'] }</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>;
    }
});

ReactDOM.render(
    <Profile data={ window.cv['profile'] } />, document.getElementById('profile')
);