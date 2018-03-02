var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');

// komponen punya state
// live cycle event
// UI of Component


// managing dan updating component state

ReactDOM.render(
  <App />,
  document.getElementById('app')
);





//tutorial 8 this keyword : intro dan implicit binding
// implicit binding

// explicit binding
// new binding
// window binding

// where is this function invoked?
// var sayName = function(name){
// 	console.log('Hello, ' + name);
// };
// sayName('jaka');


// implicit binding
// left of the dot at call time
// var me = {
// 	name: 'jaka',
// 	age: 25,
// 	sayName: function(){
// 		console.log(this.name);
// 	}
// };

// me.sayName();

// var sayNameMixin = function(obj){
// 	obj.sayName = function(){
// 		console.log(this.name);
// 	};
// };

// var me = {
// 	name: 'jaka prima',
// 	age: 21
// };

// var you = {
// 	name : 'joko',
// 	age: 35
// };

// sayNameMixin(me);
// sayNameMixin(you);

// me.sayName();
// you.sayName();

// var Person = function(name, age){
// 	return {
// 		name: name,
// 		age: age,
// 		sayName: function(){
// 			console.log(this.name);
// 		},
// 		mother: {
// 			name: 'mama',
// 			sayName: function(){
// 				console.log(this.name);
// 			}
// 		}
// 	};
// };

// var jim = Person('JIM', 42);
// jim.sayName();
// jim.mother.sayName();







// tutorial 7 propTypes di array
// class Users extends React.Component {
// 	render() {
// 		var friends = this.props.list.filter(function(user){
// 			return user.friend === true
// 		});

// 		var nonFriends = this.props.list.filter(function(user){
// 			return user.friend !== true
// 		});
// 		return (
// 		<div>
// 			<h1>Teman</h1>
// 			<ul>
// 			{friends.map(function(user){
// 				return <li key = {user.name}>{user.name}</li>
// 			})}
// 			</ul>
// 			<hr />
// 			<h1> bukan teman </h1>
// 			<ul>
// 			{nonFriends.map(function(user){
// 				return <li key = {user.name}>{user.name}</li>
// 			})}
// 			</ul>
// 		</div>
// 		)
// 	}
// }

// Users.propTypes = {
// 	// list: PropTypes.array.isRequired,
// 	// list: PropTypes.arrayOf(PropTypes.object),
// 	// harus type bool jika friend: true diganti string maka error seperti ini
// 	// Warning: Failed prop type: Invalid prop `list[1].friend` of type `string` supplied to `Users`, expected `boolean`.
// 	 //    in Users
// 	list: PropTypes.arrayOf(PropTypes.shape({
// 		name: PropTypes.string.isRequired,
// 		friend: PropTypes.bool.isRequired,
// 	})),
// }

// ReactDOM.render(
// 	<Users list={[
// 			{name : 'jaka', friend: true},
// 			{name : 'prima', friend: true},
// 			{name : 'maulana', friend: false}
// 		]} />,
// 		document.getElementById('app')
// 	);


//tutorial 6 PropTypes
// pertama install dulu npm install --save prop-types
// class Badge extends React.Component {
// 	render () {
// 		return (
// 			<div>
// 				<img 
// 				src = {this.props.img}
// 				alt = 'Avatar'
// 				style = {{ width: 100, height: 100 }} 
// 				/>

// 					<h1>Name: {this.props.name}</h1>
// 					<h3>Username: {this.props.username}</h3>
// 			</div>
// 		)
// 	}
// }

// Badge.propTypes = {
// 	img: PropTypes.string.isRequired,
// 	name: PropTypes.string.isRequired,
// 	username: PropTypes.string.isRequired,
// }

// ReactDOM.render(
// 	<Badge 
// 	name='jaka'
// 	username='jakausername'
// 	img= {
// 		'https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg'
// 		}
// 	/>,
// 	document.getElementById('app')
// 	);

// class Badge extends React.Component {
// 	render() {
// 		console.log(this.props)
// 		return (
// 				<div>
// 					<img src={this.props.img} />
// 					<h1>Name: {this.props.name}</h1>
// 					<h3>Username: {this.props.username}</h3>
// 				</div>
// 			)
// 	}
// }


// ReactDOM.render(
// 	<Badge
// 	name='Jaka Prima'
// 	username='jaka'
// 	img='https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg'
// 	/>,
// 	document.getElementById('app2')
// 	);


// tutorial 5 .map object
// class Users extends React.Component {
// 	render() {
// 		var friends = this.props.list.filter(function(user){
// 			return user.friend === true
// 		});

// 		var nonFriends = this.props.list.filter(function(user){
// 			return user.friend !== true
// 		});
// 		return (
// 		<div>
// 			<h1>Teman</h1>
// 			<ul>
// 			{friends.map(function(user){
// 				return <li key = {user.name}>{user.name}</li>
// 			})}
// 			</ul>
// 			<hr />
// 			<h1> bukan teman </h1>
// 			<ul>
// 			{nonFriends.map(function(user){
// 				return <li key = {user.name}>{user.name}</li>
// 			})}
// 			</ul>
// 		</div>
// 		)
// 	}
// }
// ReactDOM.render(
// 	<Users list={[
// 			{name : 'jaka', friend: true},
// 			{name : 'prima', friend: true},
// 			{name : 'maulana', friend: false}
// 		]} />,
// 		document.getElementById('app')
// 	);


// tutorial 4 .map .filter
// class Users extends React.Component {
// 	render(){
// 		return (
// 			<ul>
// 				{ this.props.list.map(function(name){
// 					return <li>{name}</li>
// 				}) }
// 			</ul>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Users list={[ 'jako', 'prima', 'maulana' ]} />,
// 	document.getElementById('app')
// 	);


// tutorial 3 .prop
// class Avatar extends React.Component {
// 	render(){
// 		return (
// 		<img src={this.props.atrImg} />
// 		)
// 	}
// }

// class Label extends React.Component {
// 	render(){
// 		return (
// 			<h1>Name: {this.props.atrLabel}</h1>
// 		)
// 	}
// }

// class ScreenName extends React.Component {
// 	render() {
// 		return (
// 		<h3> Username: {this.props.atrScreenName}</h3>
// 		)
// 	}
// }

// class Badge extends React.Component {
// 	render() {
// 		return (
// 		<div>
// 			<Avatar atrImg={this.props.user.img}/>
// 			<Label atrLabel={this.props.user.name}/>
// 			<ScreenName atrScreenName={this.props.user.username}/>
// 		</div>
// 		)
// 	}
// }

// ReactDOM.render(
// 	<Badge user={{
// 		name: 'Jako',
// 		img: 'https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg',
// 		username: 'Jaka username'
// 		}} />,
// 		document.getElementById('app')
// 	);


// tutorial 2
// var USER_DATA = {
// 	name: 'joko Primo',
// 	username: 'jaka',
// 	img: 'https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg'

// }

// class Badge extends React.Component {
// 	render() {
// 		console.log(this.props)
// 		return (
// 				<div>
// 					<img src={this.props.user.img} />
// 					<h1>Name: {this.props.user.name}</h1>
// 					<h3>Username: {this.props.user.username}</h3>
// 				</div>
// 			)
// 	}
// }


// ReactDOM.render(
// 	<Badge user = {USER_DATA} />,
// 	document.getElementById('app')
// 	);





// tutorial 1
// class Badge extends React.Component {
// 	render() {
// 		console.log(this.props)
// 		return (
// 				<div>
// 					<img src={this.props.img} />
// 					<h1>Name: {this.props.name}</h1>
// 					<h3>Username: {this.props.username}</h3>
// 				</div>
// 			)
// 	}
// }

//tutorial1
// ReactDOM.render(
// 	<Badge
// 	name='Jaka Prima'
// 	username='jaka'
// 	img='https://d1xwtr0qwr70yv.cloudfront.net/assets/tech/react-7b90239e805d8b06ca263be745f8ad5f.svg'
// 	/>,
// 	document.getElementById('app2')
// 	);

// class App extends React.Component {
//  render(){
//   return (
//     <div>
//      	Hello World
//     </div>
//    )
//  }
// }

// ReactDOM.render(
//  <App />,
//  document.getElementById('app')
// );