import React from 'react';
import './Services.css';
import './ServicesTableData'
import ServicesTableData from './ServicesTableData';
import parse from "html-react-parser";


const Services = () => {



  return (
    <div className="services-table">
      <h1>Services Offered</h1>
      <table style={tableStyle}>
        <tbody>
          {ServicesTableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} style={cellStyle}>
                  <div className='cell-text'>
                    <h3>{cell.heading}</h3>
                    <ul>
                      {cell.bullets.map((bullet, i) => (
                        <li key={i}>{parse(bullet)}</li>
                      ))}
                    </ul>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
};

// CSS styles for table
const tableStyle = {
  width: "100%",
  height: "85vh",
};

const cellStyle = {
  border: "1px solid black",
  padding: "16px",
  textAlign: "left",
  verticalAlign: "top",
  innerHeight: "auto"
};

export default Services;
