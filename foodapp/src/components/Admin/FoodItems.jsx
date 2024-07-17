import React, { useEffect, useState } from 'react'
import FoodItemCard from './FoodItemCard';
import { useDispatchItem, useItem } from '../Context/FoodItemReducer';
import AddItemForm from './AddItemForm';

function FoodItems() {

  const dispatch = useDispatchItem();
  const Items = useItem();

  // console.log('##Item', Items);

  const [search, setSearch] = useState("");
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");


  const fetchMyItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/getfoodItems", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const res = await response.json();
        setLoading(false);
        setError(null);
        // console.log('res', res);
        dispatch({ type: "FETCH", Item: res });
      }
      else {
        setLoading(false);
        setError(response.status);
      }
      // setFoodItem(res[0]);
      // console.log('##Item', Items);

      return
    } catch (error) {
      setLoading(false);
      setError(error);

      return

    }
  }
  // const fetchMyItems = useCallback(() => {

  //   // console.log(Items);
  // },[dispatch])


  useEffect(() => {
    fetchMyItems();
  }, [])


  return (
    <div>
      Food Items
      <AddItemForm/>

      <form className="d-flex justify-content-center">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => { setSearch(e.target.value) }} />
      </form>
      <div className='container '>
        {
          Loading !== true && Error !== "" ?
            (Items.length !== 0 ? (
              // console.log('Items:', Items)
              (Items[1].length !== 0) ?
                Items[1].map((data, dataindex) => {
                  let Item = Items[0].filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toString().toLowerCase().includes(search.toLocaleLowerCase())))
                  return <div className='mb-3 ' key={dataindex}>
                    <div key={data._id} className='fs-3 m-3'>
                      {data.CategoryName}
                    </div>
                    <hr />
                    <div className='row row-cols-1 row-cols-md-2'>
                      {Item.length !== 0 ?
                        Item.map(filterItems => {
                          // console.log(filterItems.options[0]);
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
            )
              : <div>Loading...</div>)
            : Error !== "" ? <div>ERROR: <h1>{Error}</h1></div>
              : <div>Loading.. </div>
        }
      </div>
    </div>
  )
}

export default FoodItems;
