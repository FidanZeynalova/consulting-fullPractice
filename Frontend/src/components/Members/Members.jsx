import { useContext, useEffect, useState } from 'react'
import { useDeleteConsultingMutation, useGetConsultingQuery } from '../../App/slices/ConsultingSlice'
import { FavoritesMembers } from '../../context/FavoritesMembers'

function Members() {
  let { data, isLoading, refetch } = useGetConsultingQuery()
  let [deleteConsulting] = useDeleteConsultingMutation()
  let { favorites, setFavorites } = useContext(FavoritesMembers)
  let [inp, setInp] = useState("")
  let [allData, setAllData] = useState([])

  useEffect(() => {
    if (!isLoading) {
      setAllData(data)
    }
  }, [data])

  function handleDelete(id) {
    deleteConsulting(id)
    refetch()
  }
  function handleFav(member) {
    let find = favorites.find((fav) => fav._id == member._id)
    console.log(find);
    if (find) {
      alert("Elave olunub")
    } else {
      setFavorites([...favorites, member])
    }
  }

  function handleSearch(inpValue) {
    if (inpValue.trim().toLowerCase() == '') {
      setAllData(data)
    } else {
      let search = allData.filter((item) => item.name.toLowerCase().startsWith(inpValue.trim().toLowerCase()))
      setAllData(search)
    }
  }

  function handleSort(sortValue) {
    let sortedData = [...allData];

    switch (sortValue) {
      case "AZ":
        sortedData.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZA":
        sortedData.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "default":
        sortedData = [...data];
        break;
      default:
        break;
    }

    setAllData(sortedData);
  }

  return (
    <div className='Members'>
      <div className="container">
        <div className="text">
          <p>Our professional members</p>
          <h1>Our team Members</h1>
        </div>
        <div className="sort-search">
          <div className="search">
            <input type="text" placeholder='Search'
              onChange={(e) => handleSearch(e.target.value)} />
          </div>
          <div className="sort" onClick={(e) => handleSort(e.target.value)}>
            <select>
              <option value="default">Default</option>
              <option value="AZ">a-z</option>
              <option value="ZA">z-a</option>
            </select>
          </div>
        </div>
        <div className="card-wrapper">

          {
            isLoading ? (
              <h1>...Loading</h1>
            ) : (
              allData.map((member) => (
                <div className="card" key={member._id}>
                  <div className="image">
                    <img src={member.image} alt="" />
                  </div>
                  <div className="content">
                    <div className="head">
                      <p>{member.name}</p>
                      <span>{member.specialization}</span>
                    </div>
                    <div className="btns">
                      <button onClick={() => handleDelete(member._id)}>✖️</button>
                      <button onClick={() => handleFav(member)}>❤️</button>
                    </div>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Members
