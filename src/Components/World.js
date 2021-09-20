import React from 'react'
import {useState,useEffect} from "react"
function World() {
    const [country,setCountry]=useState([]);
 useEffect(()=>{
   fetch("https://corona.lmao.ninja/v2/countries")
   .then((response)=>response.json())
   .then((data)=>setCountry(data));
 },[]);
//console.log(country);


    return (
        <div className="row">
            <div className="col-md-12">
                <table>
                    <thead>
                     <tr>
                        <th>
                            Country
                        </th>
                        <th>
                            Total-Cases
                        </th>
                        <th>
                            Recovered
                        </th>
                        <th>
                            Deaths
                        </th>
                     </tr>
                    </thead>
                    <tbody>
                        {
                            country.map((itm,ky)=>{
                                return(
                                    <tr key={ky}>
                                        <td>
                                            {itm.country}
                                            <img src={itm.countryInfo.flag} style={{width:'32px',marginLeft:'15px'}} alt=""/>
                                        </td>
                                        <td>
                                            {itm.cases}
                                
                                        </td>
                                        <td>
                                            {itm.recovered}
                                        </td>
                                        <td>
                                            {itm.deaths}
                                        </td>
                                    </tr>
                                )

                            })
                        }
                    </tbody>

                </table>

            </div>
            
        </div>
    )
}

export default World
