import React, { useState, useEffect } from 'react';
import './category.css'
import TopBar from '../../components/TopBar/CategoryTopBar'
// import { CATEGORY_DATA } from '../../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { toaster } from 'evergreen-ui'
import { addCategoryAction, removeCategoryAction, editCategoryAction } from '../../redux/slices/categorySlice'

const CategoryPage = () => {
    // var categories = CATEGORY_DATA
    const dispatch = useDispatch()
    const [category, setCategory] = useState("");
    const [showErrorMsg, setErrorMsg] = useState(false)
    const [showEditSection, setEditSection] = useState(false)
    const [editText, setEditText] = useState("")
    const [editID,setEditID] = useState(null)

    //  the state value contains entire state stored in redux
    const categoryState = useSelector((state) => state.categories)
    useEffect(() => {
        document.title ="myLocation | CategoryPage"
        console.log(categoryState)
        return categoryState
    })
    const addCategory = (e) => {
        e.preventDefault();
        if (category === "") {
            setErrorMsg(true)
            setInterval(() => {
                setErrorMsg(false)
            }, 4000)
        } else {
            dispatch(
                addCategoryAction({
                    id: Date.now(),
                    name: category,
                })
            )
            setCategory("")
            toaster.success("You've successfully added a new category.")
        }
    }
    const deleteCategory = (id) => {
        dispatch(
            removeCategoryAction({
                id: id
            })
        )
        setEditSection(false)
        toaster.success("You've successfully removed a category.")
    }
    const showEditCategory = (id,name) => {
        console.log("open edit section")
        setEditSection(true)
        setEditText(name)
        setEditID(id)

        console.log(id,name)
    }
    const editCategory = () => {
        dispatch(
            editCategoryAction({
                id: editID,
                name: editText,
            })
        )
        setEditSection(false)
        toaster.success("You've successfully edit an existed category.")
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
                            categoryState.map((item) => (
                                <div key={item.id} className="list_item">
                                    <ul>
                                        <li> <div className="row">
                                            <p className="category_name">#{item.name}</p>
                                            <button className="delete-btn" onClick={() => { deleteCategory(item.id) }}>Remove</button>
                                            <button className="edit-btn" onClick={() => { showEditCategory(item.id,item.name) }}>Edit</button>
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
                                <button onClick={() => { editCategory() }}>Edit category</button>
                            </div>
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CategoryPage;