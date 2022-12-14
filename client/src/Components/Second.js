import React, { useEffect, useState } from 'react'

import  axios  from 'axios';
import DataTable, {createTheme} from "react-data-table-component";
import "../Style/componets/Waterbodies.css";
import "../Style/global/commonclasses.css";



const Second = () => {
    

    createTheme('solarized', {
        text: {
          primary: '#FFFFFF',
          secondary: '#2aa198',
        },
        background: {
          default: "rgb(14, 15, 35)",
        }
      }, 'dark');


  const [countries,setCountries]= useState([0]);
  const getCountries = async () => {
      try{
        const response = await axios.get('https://restcountries.com/v3.1/all')
        setCountries(response.data);
        console.log("aa gya");
      }catch(error){
        console.log(error);
      }
  };
  const columns = [
    {
      name:"Country Name",
      selector:(row) => row.region,
      sortable: true
    },
    {
      name:"Area name",
      selector:(row) => row.capital,
      sortable: true
    },
    {
      name:"Country flag",
      selector:(row) =><img width={50} height={50} src={row.flag}/>,
    }
  ]

  useEffect(() => {
    getCountries();
  },[]);

  return (
    <div id="small-tab">
      <DataTable 
      title="STATISTIC (PARTICULAR AREA)" 
      columns={columns} 
      data={countries} 
      fixedHeader
      fixedHeaderScrollHeight='250px'
      highlightOnHover
      actions={
        <button className='btn btn-info'>Export</button>}
        theme="solarized"
        responsive
        // customStyles={customStyles} 
        />
    </div>
  )
}

export default Second;

