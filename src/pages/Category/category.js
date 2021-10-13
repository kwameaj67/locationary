import React, { useState } from 'react';
import './category.css'
import TopBar from '../../components/TopBar/CategoryTopBar'
import { CATEGORY_DATA } from '../../utils/data'

const CategoryPage = () => {
    var categories = CATEGORY_DATA
    const [category, setCategory] = useState("");
    const [showErrorMsg, setErrorMsg] = useState(false)
    const [showEditSection, setEditSection] = useState(false)
    const [editText, setEditText] = useState("")

    const addCategory = (e) => {
        e.preventDefault();
        if (category === "") {
            setErrorMsg(true)
            setInterval(() => {
                setErrorMsg(false)
            }, 2000)
        }
    }
    const deleteCategory = (ID) => {
        categories = categories.filter(item => !ID.includes(item.id))
        setEditSection(false)
    }
    const showEditCategory = (name) => {
        console.log("open edit section")
        setEditSection(true)
        setEditText(name)
    }
    const editCategory = () =>{
        setEditSection(false)
    }
    return (
        <div className="category_area">
            <div className="topbar">
                <TopBar addCategoryFunc={addCategory} />
            </div>
            <div className="category_container">
                <div className="category_heading">
                    <h1>New Category</h1>
                    <p>Create new categories of your choice.🚀</p>
                    <input className="input" type="default" placeholder="Add category" autoComplete="false" name="category" value={category} onChange={(e) => { setCategory(e.target.value) }} />
                    {showErrorMsg && <p className="errorMsg">Sorry, please enter a valid category name.</p>}
                    <button onClick={addCategory}>Add Category</button>
                </div>
                <div className="category_list_container">
                    <h1>List of category</h1>
                    <div className="category_list">
                        {
                            categories.map((item) => (
                                <div key={item.id} className="list_item">
                                    <ul>
                                        <li> <div className="row">
                                            <p className="category_name">#{item.name}</p>
                                            <button className="delete-btn" onClick={()=>{deleteCategory(item.id)}}>Remove</button>
                                            <button className="edit-btn" onClick={()=>{showEditCategory(item.name)}}>Edit</button>
                                        </div></li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="edit_category">
                        {showEditSection &&
                            <div className="edit_container">
                                <input className="input" type="default" placeholder="" autoComplete="false" name="editCategory" value={editText} onChange={(e) => { setEditText(e.target.value) }} />
                                <button onClick={editCategory}>Edit category</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryPage;