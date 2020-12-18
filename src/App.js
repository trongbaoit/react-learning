import React from 'react';
import './App.css';
// import PropTypes from "prop-types";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { index: 1 };
//     this.handleClickIncrease = this.handleClickIncrease.bind(this);
//     // this.handleClickReduce = this.handleClickReduce.bind(this);
//   }

//   handleClickIncrease() {
//     this.setState({
//       index: this.state.index + 1
//     });
//   }

//   handleClickReduce() {
//     this.setState({
//       index: this.state.index - 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         <p>Giá trị {this.state.index}</p>
//         <button onClick={this.handleClickIncrease}>Tăng</button>
//         <button onClick={() => this.handleClickReduce()}>Giảm</button>
//       </div>
//     );
//   }
// }

//==========================

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.name}</h1>
//         <ul>
//           <li>{this.props.type}</li>
//           <li>{this.props.public_year}</li>
//           <li>{this.props.storage}</li>
//         </ul>
//       </div>
//     );
//   }
// }
// // Đúng kiểu dữ liệu
// App.defaultProps = {
//   name: "iPhone Xs Max",
//   type: "iPhone",
//   public_year: 2018,
//   storage: "64 GB"
// };

// // Đúng kiểu dữ liệu
// App.defaultProps = {
//   name: "iPad Mini 2019",
//   type: "iPad",
//   public_year: 2019,
//   storage: 64
// };

// // Sai kiểu dữ liệu vì type phải là các giá
// // trị như iPhone, Ipad, Mac, SmartWatch
// App.defaultProps = {
//   name: "Airpods 2",
//   type: "Airpod",
//   public_year: 2019
// };

// //Chỉ định validation props
// App.propTypes = {
//   name: PropTypes.string,
//   type: PropTypes.oneOf(["iPhone", "iPad", "Mac", "SmartWatch"]),
//   public_year: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
// };

//========================

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 1
//     };
//   }
//   render() {
//     return (
//       <div>
//         <p>Giá trị: {Math.random()}</p>
//         <button onClick={() => this.forceUpdate()}>Reload</button>
//       </div>
//     );
//   }
// }

//===================

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true
//     };
//   }

//   toggleMSG() {
//     this.setState({
//       isShow: !this.state.isShow
//     });
//   }

//   render() {
//     return (
//       <div>
//         <b>
//           Nội dung :{" "}
//           {this.state.isShow ? "Freetuts.net - Lập trình ReactJS" : ""}
//         </b>{" "}
//         <br />
//         <button onClick={() => this.toggleMSG()}>
//           {this.state.isShow ? "HIDE" : "SHOW"}
//         </button>
//       </div>
//     );
//   }
// }

//===============

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   changeInputValue(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   validationForm() {
//     let returnData = {
//       error: false,
//       msg: ""
//     };
//     const { email, password } = this.state;
//     //Kiểm tra email
//     const re = /\S+@\S+\.\S+/;
//     if (!re.test(email)) {
//       returnData = {
//         error: true,
//         msg: "Không đúng định dạng email"
//       };
//     }
//     //Kiểm tra password
//     if (password.length < 8) {
//       returnData = {
//         error: true,
//         msg: "Mật khẩu phải lớn hơn 8 ký tự"
//       };
//     }
//     return returnData;
//   }

//   submidForm(e) {
//     e.preventDefault();
//     const validation = this.validationForm();
//     if (validation.error) {
//       alert(validation.msg);
//     } else {
//       alert("Submit form success");
//     }
//   }

//   render() {
//     return (
//       <div className="container" style={{ paddingTop: "5%" }}>
//         <form
//           onSubmit={(e) => {
//             this.submidForm(e);
//           }}
//         >
//           <div className="form-group">
//             <label htmlFor="text">Email:</label>
//             <input
//               type="text"
//               className="form-control"
//               name="email"
//               placeholder="Enter email"
//               onChange={(e) => this.changeInputValue(e)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="pwd">Password:</label>
//             <input
//               type="password"
//               className="form-control"
//               name="password"
//               placeholder="Enter password"
//               onChange={(e) => this.changeInputValue(e)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

//=====================

// const USDtoVND = function (props) {
//   const convert = function (usd) {
//     return usd * 23632;
//   };

//   return (
//     <div>
//       <span>USD</span>
//       <input
//         onChange={(e) => {
//           const usd = e.target.value;
//           const vnd = convert(usd);
//           props.onHandleChange({
//             usd,
//             vnd
//           });
//         }}
//         value={props.value}
//       />
//     </div>
//   );
// };

// const VNDtoUSD = function (props) {
//   const convert = function (vnd) {
//     return vnd / 23632;
//   };
//   return (
//     <div>
//       <span>VND </span>
//       <input
//         onChange={(e) => {
//           const vnd = e.target.value;
//           const usd = convert(vnd);
//           props.onHandleChange({
//             usd,
//             vnd
//           });
//         }}
//         value={props.value}
//       />
//     </div>
//   );
// };

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       usd: 0,
//       vnd: 0
//     };
//   }

//   handleChange = (data) => {
//     this.setState(data);
//   };

//   render() {
//     return (
//       <div style={{ margin: "3%" }}>
//         <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
//         <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
//         <hr />
//       </div>
//     );
//   }
// }

//===========

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }
//   handleClick = () => {
//     this.myRef.current.focus();
//   };
//   render() {
//     return (
//       <div>
//         <input
//           name="email"
//           onChange={this.onChange}
//           ref={this.myRef}
//           type="text"
//         />
//         <button onClick={this.handleClick}>Focus Input</button>
//       </div>
//     );
//   }
// }

//==============

// //Component Con
// const MyInput = React.forwardRef((props, ref) => {
//   console.log(props);
//   console.log(ref);
//   return <input name={props.name} ref={ref} />;
// });

// // Component Cha
// const App = () => {
//   let ref = React.createRef();
//   const handleButton = () => {
//     ref.current.focus();
//   };
//   return (
//     <>
//       <MyInput name="email" ref={ref} />
//       <button onClick={handleButton}>Focus Input</button>
//     </>
//   );
// };

//===================

// const MessageContext = React.createContext();

// class ComponentChau extends React.Component {
//   render() {
//     return <h1>Parent : "{this.context}"</h1>;
//   }
// }
// ComponentChau.contextType = MessageContext;

// const App = () => {
//   return (
//     <MessageContext.Provider value="message from parent component">
//       <ComponentChau />
//     </MessageContext.Provider>
//   );
// };

//===================

const NumberContext = React.createContext();

class UpdateNumber extends React.Component {
  render() {
    return (
      <button
        onClick={() => {
          console.log(this.context.update());
        }}
      >
        Update Number
      </button>
    );
  }
}
UpdateNumber.contextType = NumberContext;

class ShowNumber extends React.Component {
  render() {
    return <p>{this.context.number}</p>;
  }
}
ShowNumber.contextType = NumberContext;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }
  updateNumber = () => {
    this.setState({
      number: Math.random()
    });
  };
  render() {
    return (
      <NumberContext.Provider
        value={{
          number: this.state.number,
          update: this.updateNumber.bind(this)
        }}
      >
        <NumberContext.Consumer>
          {() => (
            <>
              <ShowNumber />
              <UpdateNumber />
            </>
          )}
        </NumberContext.Consumer>
      </NumberContext.Provider>
    );
  }
}

export default App;
