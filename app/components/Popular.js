var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super();
    //kita sudah punya state awal
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage(lang) {
    //kita sudah memiliki update state
    this.setState(function () {
      return {
        selectedLanguage: lang,
      }
    });
  }
  render() {
    var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    console.log('this diatas : ', this)
    return (
      <div>
        <ul className='languages'>
          <p> {this.state.selectedLanguage}</p>
          {languages.map(function (lang) {
                           console.log('this didalam : ', this)
            return (
              <li
                style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
                // on click digunakan untuk trigger updateLanguage
                // bind untuk mengikat parameter lang
                // null untuk memasukkan nilai state sebelumnya
                onClick={this.updateLanguage.bind(null, lang)}
                key={lang}>
                  {lang}
              </li>
            )
          }, this)}
        </ul>
      </div>
    )

//es6
    // return (
    //   <div>
    //     <ul className='languages'>
    //       {languages.map((lang) => {
    //         return (
    //           <li
    //             style={lang === this.state.selectedLanguage ? {color: '#d0021b'} : null}
    //             onClick={this.updateLanguage.bind(null, lang)}
    //             key={lang}>
    //               {lang}
    //           </li>
    //         )
    //       })}
    //     </ul>
    //   </div>
    // )



  }
}

module.exports = Popular;