import React, { useState } from 'react'

export const DepedenetDropdown = () => {
    const [selectedCountry, setselectedCountry] = useState("")

    var data = [
        {
            name:"India",
            cities:["Delhi","Mumbai","Kolkata"]
        },
        {
            name:"USA",
            cities:["New York","Los Angeles","Chicago"]
        },
        {
            name:"UK",
            cities:["London","Manchester","Liverpool"]
        }
    ]
  return (
    <div>
            <select onChange={(e)=>{setselectedCountry(e.target.value)}}>
                <option>Select Country</option>
                {
                    data.map((country)=>{
                        return <option value={country.name}>{country.name}</option>
                    })
                }
            </select>
            <select>
                <option>Select City</option>
                {
                    data.map((country)=>{
                        if(country.name === selectedCountry){
                            return country.cities.map((city)=>{
                                return <option value={city}>{city}</option>
                            })
                        }
                    })
                }
            </select>
    </div>
  )
}
