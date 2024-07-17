import React, { useState } from 'react'
import { useDispatchItem, useItem } from '../Context/FoodItemReducer';


function AddItemForm() {
    const dispatch = useDispatchItem();
    const Items = useItem();
    const [AddItem, setAddItem] = useState(false);
    const [CategoryName, setCategoryName] = useState("");
    const [ItemName, setItemName] = useState("");
    const [desc,setDesc]=useState("");
    const [optionsData, setOptionsData] = useState([]);
    const [imgURL, setImgURL] = useState("");

    const handleCategory = (e) => {
        setCategoryName(e.target.value);
        setItemName("");
        setOptionsData([]);
        setImgURL("");
        setDesc("");
    }

    const handleOptionChange = (event) => {
        const { name, value } = event.target;

        const optionIndex = optionsData.findIndex(option => option.name === name);

        const updatedOptionsData = [...optionsData];

        if (optionIndex !== -1) {
            updatedOptionsData[optionIndex] = { name, value: Number(value) }; // Ensure numeric value
        } else {
            updatedOptionsData.push({ name, value: Number(value) });
        }
        setOptionsData(updatedOptionsData);
    };

    const handleSubmit = async(event)=>{
        event.preventDefault();
        
        const newOptionData={};
        optionsData.map((option)=>{
            newOptionData[option.name]=option.value.toString();
        })
        // console.log(newOptionData);

        const formattedData = {
            CategoryName: CategoryName,
            name: ItemName,
            img: imgURL,
            options: [{ ...newOptionData }],
            description: desc,
          };
      
          try {
            const response = await fetch("http://localhost:5000/api/addFoodItem", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Item: formattedData
                })
            });
            // console.log(response);
            if(response.ok){
                dispatch({type: "ADD",Item: formattedData})
            }
          } catch (error) {
            console.log(error);
          }
        //   console.log(formattedData);
        // return
    }


    return (
        <div>
            <div>
                <button className='btn btn-primary' style={{ cursor: "pointer" }} onClick={() => setAddItem(AddItem === false)}>Add Item {!AddItem?"▼":"▲"}</button>
                {
                    AddItem ?
                        <form>

                            <label className="form-label">Category Name</label>
                            <select name="category" id="category" onChange={handleCategory}>
                                <option value="">none</option>
                                {Items[1].map(item => {
                                    return (
                                        <option value={item.CategoryName} >{item.CategoryName}</option>
                                    )
                                })}
                            </select>
                            {CategoryName !== "" ? (<>
                                <br />
                                <label className="form-label">name</label>
                                <input type="text" className="form-control" placeholder="Enter Item name" name="ItemName" value={ItemName} onChange={(e) => setItemName(e.target.value)} />

                                <label className="form-label">description</label>
                                <input type="text" className="form-control" placeholder="Write Description" name="desc" value={desc} onChange={(e) => setDesc(e.target.value)}/>
                                
                                <label className="form-label">imgURL</label>
                                <input type="url" className="form-control" placeholder="Paste Img URL here" name="ImgURL" value={imgURL} onChange={(e) => setImgURL(e.target.value)}/>

                                <label className="form-label">Options</label>
                                <br />
                                {Items[1].find((cate) => { return cate.CategoryName === CategoryName }).options.map((option) => {
                                    return (
                                        <span key={option} style={{ whiteSpace: 'nowrap' }}>
                                            <label className="form-label">{option}:</label>
                                            <input
                                                type="number"
                                                placeholder="price"
                                                name={option}

                                                onChange={handleOptionChange}
                                            />
                                        </span>)
                                })
                                }
                                {/* <input type="password" className="form-control" placeholder="Enter password" name="pswd" /> */}
                                <br />
                                {CategoryName!==""?
                                <button className='btn btn-primary' onClick={handleSubmit}>Add Item</button>
                                :<button className='btn btn-primary' onClick={handleSubmit} disabled>Add Item</button>}
                                </>)
                                : ""
                            }
                        </form>

                        : " "
                }
            </div>
        </div>
    )
}

export default AddItemForm;
