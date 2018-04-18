'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const state = {
//   visible: false
// };

// const onButtonToggle = () => {
//   state.visible = !state.visible;
//   render();
// }

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visbility Toggle</h1>
//       <button onClick={onButtonToggle}>Show Details</button>
//       <p>{state.visible ? "AHHH! Don't you know how to knock!?!" : null}</p>
//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');

// render();
//**************************************************************
// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visbility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <p>Hey. These are some details you can now see!</p>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// }

// render();

var Visbility = function (_React$Component) {
  _inherits(Visbility, _React$Component);

  function Visbility(props) {
    _classCallCheck(this, Visbility);

    var _this = _possibleConstructorReturn(this, (Visbility.__proto__ || Object.getPrototypeOf(Visbility)).call(this, props));

    _this.handleVisibilityToggle = _this.handleVisibilityToggle.bind(_this);
    _this.state = {
      visibility: false
    };
    return _this;
  }

  _createClass(Visbility, [{
    key: 'handleVisibilityToggle',
    value: function handleVisibilityToggle() {
      this.setState(function (prevState) {
        return {
          visibility: !prevState.visibility
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Visibility Toggle'
        ),
        React.createElement(
          'button',
          { onClick: this.handleVisibilityToggle },
          this.state.visibility ? 'Hide details' : 'Show details'
        ),
        this.state.visibility && React.createElement(
          'p',
          null,
          'Hey. The state says you can see this now.'
        )
      );
    }
  }]);

  return Visbility;
}(React.Component);

ReactDOM.render(React.createElement(Visbility, null), document.getElementById('app'));
