/** @jsx React.DOM */

var ProgressBar = React.createClass({
  render: function () {
    var style = {
      width: this.props.percentage + '%'
    };
    return (
      <div className="progress progress-striped">
        <div className="progress-bar progress-bar-success" role="progressbar"
             aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
             style={style} />
      </div>
    );
  }
});

var Counter = React.createClass({ 
  getInitialState: function () { 
    return { count: this.props.initialCount }; 
  }, 
  add: function (diff) { 
    var count = this.state.count + diff;
    if (count > 100) count = 100;
    if (count < 0) counter = 0;
    this.setState({ count: count }); 
  }, 
  render: function () { 
    return ( 
      <div> 
        <h1>Counter</h1>
        <p>{this.state.count}%</p>
        <ProgressBar percentage={this.state.count} />
        <button className="btn btn-default btn-small" onClick={this.add.bind(this, -1)}>-</button> 
        <button className="btn btn-default btn-small" onClick={this.add.bind(this, 1)}>+</button> 
      </div> 
    ); 
  } 
});

  React.renderComponent(<Counter initialCount={20} />, document.getElementById('counter'));