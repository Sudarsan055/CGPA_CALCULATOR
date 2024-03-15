import React from 'react'

export default function Home() {
  return (
    <div style={{height:'100vh',width:'100vw',color:'whitesmoke'}} className='Home'>
      <div style={{fontSize:'7vw',color:'ghostwhite',fontWeight:'300'}}>CGPA CALCULATOR</div>
      <div>
        <table style={{textAlign:'center'}}>
          <tr>
            <th>Grade</th>
            <th>Points</th>
          </tr>
          <tr>
            <td>'O'</td>
            <td>10</td>
          </tr>
          <tr>
            <td>'A+'</td>
            <td>9</td>
          </tr>
          <tr>
            <td>'A'</td>
            <td>8</td>
          </tr>
          <tr>
            <td>'B+'</td>
            <td>7</td>
          </tr>
          <tr>
            <td>'B'</td>
            <td>6</td>
          </tr>
          <tr>
            <td>'C'</td>
            <td>5</td>
          </tr>
          <tr>
            <td>'F'</td>
            <td>2</td>
          </tr>
        </table>
        <p>Enter the Points accoroding to your Grade as following the above Table.</p>
      </div>
    </div>
  )
}
