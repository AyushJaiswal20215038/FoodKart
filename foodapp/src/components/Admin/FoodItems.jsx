import React, { useEffect, useState } from 'react'
// import Card from '../Card';
import FoodItemCard from './FoodItemCard';

function FoodItems() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const fetchMyItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getfoodItems", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const res = await response.json();
      
      setFoodItem(res[0]);
      setFoodCat(res[1]);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchMyItems();
  }, [])


  return (
    <div>
      Food Items

      <form className="d-flex justify-content-center">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      </form>
      <div className='container '>
        {
          // console.log(foodCat.length)
          (foodCat.length !== 0) ?
            foodCat.map((data,dataindex) => {
                 let Item=foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toString().toLowerCase().includes(search.toLocaleLowerCase())))
              return <div className='mb-3 ' key={dataindex}>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                <div className='row row-cols-1 row-cols-md-2'>
                {Item.length !== 0 ?
                  Item.map(filterItems => {
                    console.log(filterItems.options[0]);
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <FoodItemCard foodItem={filterItems}
                            options={filterItems.options[0]}
                            />
                        </div>
                      )
                    })
                    : <div> No Such Item Found </div>
                  }
                </div>
              </div>
            })

            : ""

        }
      </div>
    </div>
  )
}

export default FoodItems;
