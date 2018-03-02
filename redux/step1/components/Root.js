import React, { Component } from 'react'
import CompTambahKurang from './CompTambahKurang'
import CompPenjumlahan from './CompPenjumlahan'
import CompAmbilGambar from './CompAmbilGambar'

export default class Root extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <CompTambahKurang/>
        <CompPenjumlahan/>
        <CompAmbilGambar/>
      </div>      
    )
  }
}