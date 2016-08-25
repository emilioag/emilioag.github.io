var SQLShellTable = React.createClass({
    getInitialState() {
        return {
            query: "> select * from " + this.props.data['title'].toLowerCase() + ";",
            data: this.props.data
        };
    },
    render: function () {
        var self = this;
        var header = self.state.data['header'].map(function ( item, index ) {
            if ( index == 0 ) {
                return <div className="wic-row-cell-l"> { item } </div>;
            } else {
                return <div className="wic-row-cell"> { item } </div>;
            }
        });
        var rows = self.state.data['rows'].map(function ( row, i ) {
            if ( row != "$" ){ 
                var rowN = row.map(function (item, j ) {
                    if ( i == self.state.data['rows'].length -1 ) {
                        if ( j == 0 ){
                            return <div className="wic-row-cell-l-b"> { item } </div>;
                        } else {
                            return <div className="wic-row-cell-b"> { item } </div>;
                        }
                    } else {
                        if ( j == 0 ){
                            return <div className="wic-row-cell-l"> { item } </div>;
                        } else {
                            return <div className="wic-row-cell"> { item } </div>;
                        }
                    }
                });
                return <div className="wic-row"> { rowN } </div>;
            } else {
                return <div className="wic-row"><div className="cell-separator">&nbsp;</div></div>;
            }
        });
        return  <div className="console">
                    <p> { this.state.query } </p>
                    <div className="console-text">
                        <div className="wic-table">
                            <div className="wic-row"> { header } </div>
                            { rows }
                        </div>
                    </div>
                    <p>> <span className="parpadea">|</span></p>
                </div>;
    }
});


var Tables = React.createClass({
    render: function () {
        var self = this;
        var rows = self.props.data.map(function ( item ) {
            return  <span>
                        <div className="row">
                            <div className="col-md-3">
                                <h2><i className={ item['icon'] } aria-hidden="true"></i> { item['title'] }</h2>
                            </div>
                            <div className="col-md-9">&nbsp;</div>
                        </div>
                        <div className="row">
                            <div className="col-md-2">&nbsp;</div>
                            <div className="col-md-9">
                                <SQLShellTable data={ item }/>
                            </div>
                        </div>
                    </span>;
        });
    return <div className="row">{ rows }</div>;
    }
});

ReactDOM.render(
    <Tables data={ window.cv['tables'] } />, document.getElementById('tables')
);

// ReactDOM.render(
//     <SQLShellTable data={ window.cv['languages'] } query="> select * from languages;" />,
//     document.getElementById('languages')
// );
// ReactDOM.render(
//     <SQLShellTable data={ window.cv['awards'] } query="> select * from awards;" />,
//     document.getElementById('awards')
// );
// ReactDOM.render(
//     <SQLShellTable data={ window.cv['education'] } query="> select * from education;" />,
//     document.getElementById('education')
// );